// =====================================================================
// EDIT YOUR PERSONAL INFORMATION HERE.
// Everything shown on the site comes from this file.
// =====================================================================

export const profile = {
  name: 'ANAND TIWARY',
  shortName: 'Anand Tiwary',
  title: 'Cloud Engineer',
  location: 'Greater Noida, India',
  email: 'anandtiwary658@gmail.com',
  github: 'https://github.com/anandtiwary-cloud',
  githubUser: 'anandtiwary-cloud',

  // TODO: paste your real LinkedIn profile URL between the quotes, e.g.
  // 'https://www.linkedin.com/in/your-handle'
  // While this is empty, every LinkedIn icon/link on the site is hidden automatically.
  linkedin: '',

  // The resume PDF lives in /public. Replace that file to update the resume.
  resumePath: `${import.meta.env.BASE_URL}Anand_Tiwary_Resume.pdf`,
}

export const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
]

export const aboutHighlights = [
  'AWS infrastructure',
  'Linux',
  'Docker',
  'Docker Compose',
  'Nginx',
  'PM2',
  'Git / GitHub',
  'Cloud networking',
  'Application deployment',
  'Troubleshooting',
]

export const education = {
  school: 'Greater Noida Institute of Technology (AKTU)',
  degree: 'Bachelor of Technology in Computer Science',
  period: 'Oct 2022 – Jul 2026',
  place: 'Greater Noida',
}

export type SkillGroup = {
  title: string
  icon: 'cloud' | 'terminal' | 'container' | 'infra' | 'deploy' | 'database'
  note?: string
  items: string[]
}

export const skillGroups: SkillGroup[] = [
  {
    title: 'Cloud',
    icon: 'cloud',
    items: ['AWS', 'EC2', 'VPC', 'IAM', 'Security Groups', 'AMI', 'Internet Gateway', 'NAT Gateway'],
  },
  {
    title: 'Linux & Networking',
    icon: 'terminal',
    items: ['Linux', 'SSH', 'Subnets', 'Routing', 'DNS', 'TCP/IP'],
  },
  {
    title: 'Containers',
    icon: 'container',
    items: ['Docker', 'Dockerfile', 'Docker Compose'],
  },
  {
    title: 'Infrastructure',
    icon: 'infra',
    note: 'Familiar with / exposure through internship',
    items: ['Terraform', 'Kubernetes'],
  },
  {
    title: 'Dev / Deployment',
    icon: 'deploy',
    note: 'Jenkins: CI/CD concepts',
    items: ['Git', 'GitHub', 'Nginx', 'PM2', 'Jenkins CI/CD'],
  },
  {
    title: 'Databases',
    icon: 'database',
    items: ['MySQL', 'MongoDB'],
  },
]

export const experience = {
  company: 'Metconnect Infotech Private Limited',
  role: 'Cloud Intern',
  period: 'Aug 2026 – Oct 2026',
  bullets: [
    'Worked with AWS cloud infrastructure and Linux-based servers for application deployment and management.',
    'Deployed web applications on AWS EC2 and worked with VPC, subnets, Internet Gateway, NAT Gateway, and Security Groups.',
    'Containerized applications using Docker and created Dockerfiles and Docker Compose configurations.',
    'Configured Nginx as a web server/reverse proxy and used PM2 for Node.js application process management.',
    'Used Git and GitHub for source-code management and deployment workflows.',
    'Worked with Jenkins CI/CD concepts and gained exposure to Terraform and Kubernetes.',
    'Troubleshot Linux server, Docker build, application deployment, networking, and resource-related issues.',
  ],
  tech: [
    'AWS',
    'EC2',
    'VPC',
    'Linux',
    'Docker',
    'Docker Compose',
    'Nginx',
    'PM2',
    'Git/GitHub',
  ],
  exposure: ['Jenkins (concepts)', 'Terraform (exposure)', 'Kubernetes (exposure)'],
}

export type Project = {
  id: string
  title: string
  tech: string[]
  overview: string
  details: string[]
  // TODO: add the real repository URL once it exists, e.g.
  // 'https://github.com/anandtiwary-cloud/your-repo-name'
  // While empty, "View on GitHub" opens your GitHub repositories page instead.
  repo: string
}

export const projects: Project[] = [
  {
    id: 'docker-production-setup',
    title: 'Docker Production Setup – AWS Cloud Deployment',
    tech: ['AWS', 'Docker', 'Linux', 'Docker Compose', 'Nginx', 'PM2', 'Git/GitHub'],
    overview: 'Deployed a containerized React and Node.js application on an AWS EC2 Linux server.',
    details: [
      'Configured an AWS VPC, subnet, Internet Gateway, and Security Group for controlled network access.',
      'Created Dockerfiles for frontend and backend services and used Docker Compose for multi-container deployment.',
      'Configured Nginx as a reverse proxy/web server and used PM2 for Node.js process management.',
      'Managed source code using Git/GitHub and configured environment variables for deployment.',
    ],
    repo: '',
  },
  {
    id: 'netflix-clone-ec2',
    title: 'Netflix Clone – AWS EC2 Deployment',
    tech: ['AWS', 'EC2', 'Docker', 'Docker Compose', 'Nginx', 'PM2', 'Linux'],
    overview: 'Deployed a React and Node.js application on AWS EC2 using a Linux environment.',
    details: [
      'Configured Security Groups to control inbound access to application and web-server ports.',
      'Containerized frontend and backend services using Docker and Docker Compose.',
      'Configured Nginx for frontend serving/reverse proxy and used PM2 to manage the Node.js application.',
      'Troubleshot EC2 resource limitations, Docker builds, environment variables, API configuration, and deployment issues.',
    ],
    repo: '',
  },
]
