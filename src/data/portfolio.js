export const personalInfo = {
  cvPath: '/Mahmoud_Mohamed_CV.pdf',
  cvFileName: 'Mahmoud_Mohamed_CV.pdf',
}

const portfolio = {
  profile: {
    name: 'Mahmoud Mohamed',
    alias: 'Mahmoud Elgyuoshi',
    role: 'Backend Developer',
    roles: ['Backend Developer', 'Laravel Developer', 'Node.js Developer'],
    tagline: 'Building scalable systems, clean APIs, and reliable backends.',
    availability: 'Available for backend opportunities',
    summary:
      'Backend Developer with 2+ years of hands-on experience designing and shipping scalable REST APIs and server-side systems using Laravel, Node.js, and MongoDB. Production experience across healthcare (MedicaSpace) and commercial platforms, with strong command of clean architecture, Design Patterns, and database optimization. Passionate about writing maintainable, well-structured code and translating business requirements into reliable technical solutions.',
    email: 'elgyuoshy@gmail.com',
    phone: '+201030897704',
    location: 'Suez, Egypt',
    militaryStatus: 'Exempted from military service',
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
        { type: 'output', text: 'Laravel · Node.js · Express · MongoDB · MySQL' },
        { type: 'command', text: 'mahmoud --focus' },
        { type: 'output', text: 'REST APIs · Clean Architecture · Design Patterns' },
        { type: 'command', text: 'mahmoud --status' },
        { type: 'output', text: 'Backend Developer @ Sahl Solutions' },
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
    { icon: 'Briefcase', label: 'Currently', value: 'Backend Developer @ Sahl Solutions' },
    { icon: 'ShieldCheck', label: 'Military', value: 'Exempted' },
  ],

  stats: [
    { value: '2+', label: 'Years of experience' },
    { value: '6', label: 'Projects shipped' },
    { value: '3', label: 'Companies worked with' },
    { value: '6', label: 'Certifications' },
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
        'Git & GitHub',
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
      period: 'Oct 2026 – Present',
      role: 'Backend Developer',
      company: 'Sahl Solutions',
      companyUrl: null,
      description:
        'Developing and maintaining backend systems and RESTful APIs, applying clean architecture and Design Patterns.',
    },
    {
      period: 'Dec 2024 – Sep 2026',
      role: 'Laravel Backend Developer',
      company: 'MedicaSpace',
      companyUrl: null,
      description:
        'Built and maintained RESTful APIs for a multi-sector medical networking platform serving C2C, B2B, and B2C use cases.',
    },
    {
      period: 'Sep 2025 – Oct 2025',
      role: 'Coding Instructor',
      company: 'iSchool — I2S',
      companyUrl: null,
      description:
        'Delivered coding curriculum to students aged 6–18, strengthening instructional skills and technical communication.',
    },
  ],

  projects: [
    {
      id: 'ecommerce-backend',
      title: 'E-Commerce Backend',
      category: 'Backend',
      type: 'Personal Project',
      period: 'Aug – Sep 2024',
      description:
        'Modular REST API with authentication, product management, and order workflows following OOP and MVC principles — built for production-ready reliability.',
      highlights: [
        'JWT-based authentication and protected routes',
        'Product management and order workflows',
        'Input validation and centralized error-handling middleware',
        'Modular structure following OOP and MVC principles',
      ],
      tech: ['Node.js', 'Express.js', 'MongoDB', 'JWT', 'REST API', 'MVC'],
      github: 'https://github.com/gyoushy14',
      live: null,
      featured: false,
    },
    {
      id: 'freelance-backend-system',
      title: 'Freelance Backend System',
      category: 'Backend',
      type: 'Freelance Project',
      period: 'Sep – Dec 2024',
      description:
        'High-performance backend for a commercial client with RESTful APIs, scalable data models, and clean architecture — delivered within a 3-month timeline.',
      highlights: [
        'Secure authentication and product CRUD',
        'Scalable data models designed around access patterns',
        'Clean architecture with deployment-ready configuration',
      ],
      tech: ['Node.js', 'Express.js', 'MongoDB', 'REST API', 'Clean Architecture'],
      github: null,
      live: null,
      featured: false,
    },
    {
      id: 'medicaspace',
      title: 'MedicaSpace (Production)',
      category: 'Backend',
      type: 'Professional Work',
      period: 'Dec 2024 – Sep 2026',
      description:
        'Multi-sector medical networking platform serving C2C, B2B, and B2C use cases. Built and maintained its RESTful APIs with Laravel using a Service & Repository architecture.',
      highlights: [
        'RESTful APIs serving C2C, B2B, and B2C flows',
        'Service & Repository Pattern with clean separation of concerns',
        'Query optimization and unit-tested business logic',
      ],
      tech: ['Laravel', 'PHP', 'MySQL', 'Redis', 'Unit Testing', 'SOLID'],
      github: null,
      live: null,
      featured: true,
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
      name: 'AICE AI & real-world AI solution development',
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
      name: 'Getting Started with Git and GitHub',
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