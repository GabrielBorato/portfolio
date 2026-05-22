export const profile = {
  name: 'Gabriel Borato',
  fullName: 'Gabriel Friedrich Borato',
  email: 'gabrielfborato2009@hotmail.com',
  phone: '+55 (47) 99202-1098',
  whatsapp: 'https://wa.me/5547992021098',
  github: 'https://github.com/GabrielBorato',
  linkedin: 'https://www.linkedin.com/in/gabriel-borato-195711b4/',
  instagram: 'https://www.instagram.com/gabrieu_fb/',
}

export const stats = [
  { value: '4+', key: 'yearsLabel' },
  { value: '15+', key: 'projectsLabel' },
  { value: '10k+', key: 'usersLabel' },
]

// Skills grouped — icon names from https://skillicons.dev
// `name` shown in hover tooltip.
export const skillGroups = [
  {
    key: 'languages',
    items: [
      { icon: 'ts', name: 'TypeScript' },
      { icon: 'js', name: 'JavaScript' },
      { icon: 'python', name: 'Python' },
      { icon: 'java', name: 'Java' },
      { icon: 'html', name: 'HTML5' },
      { icon: 'css', name: 'CSS3' },
    ],
  },
  {
    key: 'backend',
    items: [
      { icon: 'nodejs', name: 'Node.js' },
      { icon: 'express', name: 'Express' },
      { icon: 'dotnet', name: '.NET' },
      { icon: 'django', name: 'Django' },
      { icon: 'flask', name: 'Flask' },
      { icon: 'graphql', name: 'GraphQL' },
    ],
  },
  {
    key: 'frontend',
    items: [
      { icon: 'react', name: 'React' },
      { icon: 'nextjs', name: 'Next.js' },
      { icon: 'tailwind', name: 'Tailwind CSS' },
      { icon: 'vite', name: 'Vite' },
    ],
  },
  {
    key: 'databases',
    items: [
      { icon: 'mongodb', name: 'MongoDB' },
      { icon: 'redis', name: 'Redis' },
      { icon: 'mysql', name: 'MySQL' },
      { icon: 'postgres', name: 'PostgreSQL' },
    ],
  },
  {
    key: 'devops',
    items: [
      { icon: 'docker', name: 'Docker' },
      { icon: 'azure', name: 'Azure' },
      { icon: 'aws', name: 'AWS' },
      { icon: 'nginx', name: 'Nginx' },
      { icon: 'githubactions', name: 'GitHub Actions' },
      { icon: 'linux', name: 'Linux' },
    ],
  },
  {
    key: 'tools',
    items: [
      { icon: 'git', name: 'Git' },
      { icon: 'github', name: 'GitHub' },
      { icon: 'vscode', name: 'VS Code' },
      { icon: 'insomnia', name: 'Insomnia', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/insomnia/insomnia-original.svg' },
      { icon: 'jest', name: 'Jest' },
    ],
  },
] as const
