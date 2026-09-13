export const personalInfo = {
  cvPath: '/Mahmoud_Mohamed_CV.pdf',
  cvFileName: 'Mahmoud_Mohamed_CV.pdf',
}

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
    phone: ['+201030897704' , ' || +201559469990'],
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
    { id: 'home', label: 'Home', to: '/#home' },
    { id: 'about', label: 'About', to: '/#about' },
    { id: 'skills', label: 'Skills', to: '/#skills' },
    { id: 'experience', label: 'Experience', to: '/#experience' },
    { id: 'projects', label: 'Projects', to: '/projects' },
    { id: 'education', label: 'Education', to: '/#education' },
    { id: 'contact', label: 'Contact', to: '/#contact' },
  ],

  hero: {
    availabilityBadge:
      'Flexible with in-office roles across Egypt and fully remote',
    cta: [
      {
        label: 'Download CV',
        href: personalInfo.cvPath,
        icon: 'Download',
        variant: 'primary',
        download: personalInfo.cvFileName,
        ariaLabel: "Download Mahmoud Mohamed's CV",
      },
      { label: 'View Projects', to: '/projects', icon: 'Code', variant: 'outline' },
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
      stack: ['Laravel', 'PHP', 'MySQL', 'Redis' , 'Unit testing' ," SOLID principles"],
      period: 'Dec 2024 – Present',
      githubUrl: null,
    },
    {
      id: 'crud-redux-toolkit',
      title: 'Task Manager — CRUD with Redux Toolkit',
      category: 'Frontend',
      type: 'Personal Project',
      period: '2024',
      description:
        'A task management web application that demonstrates modern Redux architecture. Users can create, read, update, and delete tasks with customizable inputs. Built with Redux Toolkit for centralized state management, React Hook Form for performant form handling, and Yup for schema-based validation — all changes reflect instantly in the UI without page reloads.',
      highlights: [
        'Redux Toolkit slices, reducers, and actions for scalable state management',
        'React Hook Form + Yup for type-safe form validation',
        'Firebase integration for real-time data persistence',
        'Full CRUD operations with optimistic UI updates',
        'Clean component architecture following separation of concerns',
      ],
      tech: [
        'React.js',
        'Redux Toolkit',
        'React Hook Form',
        'Yup',
        'Firebase',
        'Tailwind CSS',
        'JavaScript (ES6+)',
        'Vite',
      ],
      github: 'https://github.com/gyoushy14/CRUD-Operations-with-Redux-Toolkit',
      live: null,
      featured: false,
    },
    {
      id: 'accountant-hub',
      title: 'Accountant Hub — Freelance Marketplace',
      category: 'Backend',
      type: 'Freelance Project',
      period: '2024',
      description:
        'A specialized freelance marketplace platform — similar to Upwork — built exclusively for the accounting sector. Companies can post accounting job listings with requirements and budgets, while accountants can browse available jobs, view full job details, and submit competitive bids to apply. Built as a freelance task using Laravel with a clean Service/Repository architecture.',
      highlights: [
        'Job posting system: companies create listings with skills, budget, and deadline',
        'Bid/apply system: accountants submit proposals with custom pricing',
        'Role-based access control: separate flows for companies vs. accountants',
        'RESTful API backend built with Laravel following Service & Repository Pattern',
        'Secure authentication with Laravel Sanctum',
        'Clean MVC architecture with separation of business logic into service layer',
      ],
      tech: [
        'Laravel',
        'PHP',
        'MySQL',
        'Service & Repository Pattern',
        'Laravel Sanctum',
        'RESTful API',
        'MVC',
        'Blade / Next.js',
      ],
      github: 'https://github.com/gyoushy14/-Accountant-Hub',
      live: null,
      featured: true,
    },
    {
      id: 'ecommerce-mern',
      title: 'E-Commerce Platform — MERN Stack',
      category: 'Fullstack',
      type: 'Freelance Project',
      period: '2024–2025',
      description:
        'A full-stack e-commerce web application built with the MERN stack following SOLID principles and clean architecture patterns. Features a complete user-facing storefront with product browsing, shopping cart, and JWT authentication — alongside a protected admin dashboard for full product management and analytics.',
      highlights: [
        'JWT authentication with bcryptjs password hashing and role-based access control',
        'Admin dashboard: product CRUD, statistics, and protected admin routes',
        'Shopping cart with persistent state (localStorage) and real-time updates',
        'Backend follows Repository Pattern + Service Layer + MVC for clean separation',
        'Helmet.js security headers, CORS configuration, and input validation',
        'TypeScript on the frontend with Context API for global state (Auth + Cart)',
        'RESTful API with 10+ endpoints for users, products, and authentication',
        'MongoDB with Mongoose ODM and database seeder for sample data',
      ],
      tech: [
        'MongoDB',
        'Express.js',
        'React.js',
        'Node.js',
        'TypeScript',
        'JWT',
        'Mongoose',
        'Context API',
        'Axios',
        'React Router',
        'Helmet.js',
        'Vite',
      ],
      github: 'https://github.com/gyoushy14/Ecommerce-Web-Application-using-MERN-Stack',
      live: null,
      featured: true,
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
    {
      id: 'ibm-git-github',
      title: 'Getting Started with Git and GitHub',
      issuer: 'IBM',
      platform: 'Coursera',
      authorizedBy: 'IBM',
      offeredThrough: 'Coursera',
      type: 'online',
      credit: false,
      icon: 'git',
      color: 'orange',
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
      viewAll: { label: 'View all projects', to: '/projects' },
    },
    projectsPage: {
      eyebrow: 'My work',
      title: 'All projects',
      description:
        'A closer look at the systems I have planned, built, and shipped end to end.',
    },
    notFound: {
      eyebrow: 'Error 404',
      title: 'Page not found',
      description: "The page you are looking for doesn't exist or has been moved.",
      backLabel: 'Back to home',
    },
    serverError: {
      eyebrow: 'Error',
      title: 'Something went wrong',
      description: 'An unexpected error occurred. Please try again.',
      backLabel: 'Back to home',
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