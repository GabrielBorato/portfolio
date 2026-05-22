import { useEffect, useRef } from 'react'

/**
 * Matrix-style falling glyph background.
 * Reads CSS vars `--color-matrix` (glyph color) and `--color-matrix-trail`
 * (fade-out color) so it adapts cleanly to light/dark themes.
 */
export function MatrixRain({ fontSize = 16, speed = 50 }: { fontSize?: number; speed?: number }) {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let width = 0
    let height = 0
    let columns = 0
    let drops: number[] = []
    let animationId = 0
    let lastDraw = 0

    const glyphs =
      'ｱｲｳｴｵｶｷｸｹｺｻｼｽｾｿﾀﾁﾂﾃﾄﾅﾆﾇﾈﾉﾊﾋﾌﾍﾎ0123456789{}[]<>=+-*/$#@&'.split('')

    const readVar = (name: string, fallback: string) =>
      getComputedStyle(document.documentElement).getPropertyValue(name).trim() || fallback

    const clearCanvas = () => {
      ctx.save()
      ctx.setTransform(1, 0, 0, 1, 0, 0)
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      ctx.restore()
    }

    const setup = () => {
      const dpr = window.devicePixelRatio || 1
      width = window.innerWidth
      height = window.innerHeight
      canvas.width = width * dpr
      canvas.height = height * dpr
      canvas.style.width = `${width}px`
      canvas.style.height = `${height}px`
      ctx.setTransform(1, 0, 0, 1, 0, 0)
      ctx.scale(dpr, dpr)
      columns = Math.floor(width / fontSize)
      drops = new Array(columns).fill(0).map(() => Math.random() * -height)
      clearCanvas()
    }

    const draw = (now: number) => {
      if (now - lastDraw >= speed) {
        lastDraw = now
        // trail: fade using theme-aware translucent bg color
        ctx.fillStyle = readVar('--color-matrix-trail', 'rgba(0,0,0,0.08)')
        ctx.fillRect(0, 0, width, height)

        ctx.fillStyle = readVar('--color-matrix', 'rgba(74, 222, 128, 0.7)')
        ctx.font = `${fontSize}px "JetBrains Mono", ui-monospace, monospace`

        for (let i = 0; i < columns; i++) {
          const char = glyphs[Math.floor(Math.random() * glyphs.length)]
          const x = i * fontSize
          const y = drops[i] * fontSize
          ctx.fillText(char, x, y)

          if (y > height && Math.random() > 0.975) {
            drops[i] = 0
          }
          drops[i]++
        }
      }
      animationId = requestAnimationFrame(draw)
    }

    setup()
    animationId = requestAnimationFrame(draw)
    window.addEventListener('resize', setup)

    // Clear canvas on theme switch so old trail color doesn't bleed.
    const themeObserver = new MutationObserver(clearCanvas)
    themeObserver.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class'],
    })

    return () => {
      cancelAnimationFrame(animationId)
      window.removeEventListener('resize', setup)
      themeObserver.disconnect()
    }
  }, [fontSize, speed])

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="fixed inset-0 -z-10 pointer-events-none opacity-70 dark:opacity-30"
    />
  )
}
