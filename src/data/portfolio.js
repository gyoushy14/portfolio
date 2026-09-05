const portfolio = {
  profile: {
    name: 'Mahmoud Mohamed',
    alias: 'Mahmoud Elgyuoshi',
    role: 'Backend Developer',
    roles: ['Backend Developer', 'Laravel Expert', 'API Architect'],
    tagline: 'Building scalable systems, clean APIs, and reliable backends.',
    availability: 'Available for backend opportunities',
    summary:
      'Backend Developer with 2+ years of hands-on experience designing and shipping scalable REST APIs and server-side systems using Laravel, Node.js, and MongoDB. Production experience across healthcare (MedicaSpace) and commercial platforms, with strong command of clean architecture, Design Patterns, and database optimization.',
    email: 'elgyuoshy@gmail.com',
    phone: '+201030897704',
    location: 'Suez, Egypt',
    militaryStatus: 'Exempt from military service',
  },

  links: {
    email: 'mailto:elgyuoshy@gmail.com',
    tel: 'tel:+201030897704',
    linkedin: 'https://www.linkedin.com/in/mahmoud-elguyoshi',
    github: 'https://github.com/gyoushy14',
    gitlab: 'https://gitlab.com/mahm-oud_moham-ed',
  },

  socials: [
    { name: 'LinkedIn', url: 'https://www.linkedin.com/in/mahmoud-elguyoshi', icon: 'Linkedin' },
    { name: 'GitHub', url: 'https://github.com/gyoushy14', icon: 'Github' },
    { name: 'GitLab', url: 'https://gitlab.com/mahm-oud_moham-ed', icon: 'Gitlab' },
  ],

  navLinks: [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'experience', label: 'Experience' },
    { id: 'projects', label: 'Projects' },
    { id: 'education', label: 'Education' },
    { id: 'contact', label: 'Contact' },
  ],

  hero: {
    availabilityBadge:
      'Flexible with in-office roles across Egypt and fully remote',
    cta: [
      {
        label: 'Download CV',
        href: '/Mahmoud-Mohamed-CV.pdf',
        icon: 'Download',
        variant: 'primary',
        external: true,
        download: true,
      },
      { label: 'View Projects', href: '#projects', icon: 'Code', variant: 'outline' },
      { label: 'Contact Me', href: '#contact', icon: 'Mail', variant: 'outline' },
    ],
    terminal: {
      title: 'mahmoud@portfolio ~ zsh',
      lines: [
        { type: 'comment', text: '# whoami' },
        { type: 'command', text: 'mahmoud --stack' },
        { type: 'output', text: 'Laravel · Node.js · MongoDB · MySQL' },
        { type: 'command', text: 'mahmoud --focus' },
        { type: 'output', text: 'REST APIs · Clean Architecture · SOLID' },
        { type: 'command', text: 'mahmoud --status' },
        { type: 'output', text: 'Open to backend opportunities' },
        { type: 'command', text: 'mahmoud --loc' },
        { type: 'output', text: '@ Suez, Egypt' },
      ],
    },
  },

  facts: [
    { icon: 'MapPin', label: 'Location', value: 'Suez, Egypt' },
    {
      icon: 'GraduationCap',
      label: 'Education',
      value: 'B.Sc. IT — New Cairo Technology University',
    },
    { icon: 'Briefcase', label: 'Currently', value: 'Laravel Dev @ MedicaSpace' },
    { icon: 'ShieldCheck', label: 'Military', value: 'Exempt from military service' },
  ],

  stats: [
    { value: '2+', label: 'Years of experience' },
    { value: '3+', label: 'Projects shipped' },
    { value: '1', label: 'Production platform' },
    { value: '5', label: 'Certifications' },
  ],

  skills: [
    {
      category: 'Backend',
      icon: 'Server',
      items: ['Laravel (PHP)', 'Node.js', 'Express.js', 'RESTful APIs', 'JWT Auth', 'PHP'],
    },
    {
      category: 'Databases',
      icon: 'Database',
      items: ['MySQL', 'MongoDB', 'PostgreSQL', 'NoSQL', 'Query Optimization'],
    },
    {
      category: 'Architecture',
      icon: 'Layers',
      items: ['Service & Repository Pattern', 'MVC', 'OOP', 'Design Patterns', 'Clean Code', 'SOLID'],
    },
    {
      category: 'Frontend',
      icon: 'Monitor',
      items: ['React.js', 'HTML', 'CSS', 'JavaScript (ES6+)', 'Tailwind CSS', 'Bootstrap'],
    },
    {
      category: 'Tools',
      icon: 'Wrench',
      items: [
        'Git',
        'GitHub',
        'GitLab',
        'Postman',
        'Swagger',
        'Agile',
        'Unit Testing',
        'JMeter',
        'ClickUp',
        'Claude',
      ],
    },
    {
      category: 'Soft Skills',
      icon: 'Users',
      items: ['Time Management', 'Communication', 'Problem Solving', 'Teamwork'],
    },
  ],

  experience: [
    {
      period: 'Dec 2024 – Present',
      role: 'Laravel Backend Developer',
      company: 'MedicaSpace',
      companyUrl: null,
      description:
        "Built and maintained RESTful APIs for a multi-sector medical networking platform (MedicaSpace) serving C2C, B2B, and B2C use cases — a production healthcare system at Soume Computing using Laravel with Modules & Service/Repository architecture.",
    },
    {
      period: 'Sep 2025 – Oct 2025',
      role: 'Coding Instructor',
      company: 'iSchool — I2S',
      companyUrl: null,
      description:
        'Delivered coding curriculum to students aged 6–18, strengthening instructional skills and technical communication.',
    },
    {
      period: 'Mar 2025 – May 2025',
      role: 'Coding Instructor',
      company: 'Black Horse Courses',
      companyUrl: null,
      description:
        'Taught Python, OOP, data structures, and ML to diverse learners, improving student confidence and course completion rates.',
    },
  ],

  projects: [
    {
      title: 'E-Commerce Backend',
      description:
        'Modular REST API with JWT auth, product management, order workflows, input validation, and error-handling middleware following OOP and MVC principles.',
      stack: ['Node.js', 'Express', 'MongoDB'],
      period: 'Aug – Sep 2024',
      githubUrl: 'https://github.com/gyoushy14',
    },
    {
      title: 'Freelance Backend System',
      description:
        'High-performance backend with RESTful APIs, scalable data models, and clean architecture. Delivered secure authentication, product CRUD, and deployment-ready configuration for a commercial client within 3 months.',
      stack: ['Node.js', 'Express', 'MongoDB'],
      period: 'Sep – Dec 2024',
      githubUrl: 'https://github.com/gyoushy14',
    },
    {
      title: 'MedicaSpace (Production)',
      description:
        'Multi-sector medical networking platform serving C2C, B2B, and B2C use cases. Built with Laravel Modules and Service/Repository architecture at Soume Computing.',
      stack: ['Laravel', 'PHP', 'MySQL'],
      period: 'Dec 2024 – Present',
      githubUrl: 'https://github.com/gyoushy14',
    },
  ],

  education: [
    {
      degree: 'B.Sc. Information Technology — Networking & Programming',
      school: 'New Cairo Technology University',
      period: 'Oct 2025 – Present',
    },
    {
      degree: 'High Diploma in Programming — IT & Web Development',
      school: 'WE Applied Technology Schools',
      period: 'Oct 2022 – Jun 2025',
    },
  ],

  certifications: [
    {
      name: 'International Level 3 Subsidiary Diploma in IT',
      issuer: 'Pearson BTEC',
      icon: 'Award',
    },
    {
      name: 'AICE AI & Real-World AI Solution Development',
      issuer: 'ALX Africa',
      icon: 'Bot',
    },
    {
      name: 'Developing Back-End Apps with Node.js and Express',
      issuer: 'IBM',
      icon: 'Server',
    },
    {
      name: 'Delivering Quality Work with Agility',
      issuer: 'IBM',
      icon: 'Zap',
    },
    {
      name: 'Developing Front-End Apps with React',
      issuer: 'IBM',
      icon: 'Monitor',
    },
  ],

  sections: {
    about: {
      eyebrow: 'About me',
      title: 'Turning requirements into reliable systems',
      description:
        "The short version — and the long version — of where I've been and what I care about.",
    },
    skills: {
      eyebrow: 'Skills',
      title: 'A toolbox built for the backend',
      description: 'Filter through what I work with day in and day out.',
    },
    experience: {
      eyebrow: 'Experience',
      title: "Where I've made things work",
      description: 'From production healthcare systems to classroom whiteboards.',
    },
    projects: {
      eyebrow: 'Projects',
      title: 'Things I have built',
      description: 'End-to-end backends — from auth to deployment-ready config.',
    },
    education: {
      eyebrow: 'Education',
      title: 'Learning never stops',
      description: 'Formal degrees and certifications that keep me sharp.',
    },
    contact: {
      eyebrow: 'Contact',
      title: "Let's build something together",
      description:
        'Hiring, a project, or just want to talk APIs? My inbox is always open.',
    },
  },
}

export default portfolio