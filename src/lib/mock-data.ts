export interface Student {
  id: string;
  name: string;
  email: string;
  password: string;
  enrolledCourses: string[];
  certificates: string[];
  attendance: Record<string, number>; // courseId -> percentage
  role: 'STUDENT' | 'ADMIN';
  phoneNumber?: string;
  createdAt: string;
}

export interface Course {
  id: string;
  title: string;
  description: string;
  instructor: string;
  duration: string;
  category: string;
  lessons: Lesson[];
  liveSession?: LiveSession;
  assignments: Assignment[];
  quiz: Quiz;
  exam: Exam;
}

export interface Lesson {
  id: string;
  title: string;
  videoUrl: string;
  duration: number; // in minutes
  order: number;
}

export interface LiveSession {
  id: string;
  title: string;
  scheduledTime: string;
  instructor: string;
  description: string;
  secretCode: string;
}

export interface Assignment {
  id: string;
  title: string;
  description: string;
  dueDate: string;
  submissions: Record<string, AssignmentSubmission>; // studentId -> submission
}

export interface AssignmentSubmission {
  studentId: string;
  submittedAt: string;
  content: string;
  score?: number;
}

export interface Quiz {
  id: string;
  title: string;
  questions: QuizQuestion[];
  passingScore: number;
  submissions: Record<string, QuizSubmission>; // studentId -> submission
}

export interface QuizQuestion {
  id: string;
  question: string;
  options: string[];
  correctAnswer: number;
}

export interface QuizSubmission {
  studentId: string;
  submittedAt: string;
  answers: number[];
  score: number;
}

export interface Exam {
  id: string;
  title: string;
  questions: ExamQuestion[];
  passingScore: number;
  duration: number; // in minutes
  submissions: Record<string, ExamSubmission>; // studentId -> submission
}

export interface ExamQuestion {
  id: string;
  question: string;
  options: string[];
  correctAnswer: number;
}

export interface ExamSubmission {
  studentId: string;
  submittedAt: string;
  answers: number[];
  score: number;
}

export interface Certificate {
  id: string;
  studentId: string;
  courseId: string;
  studentName: string;
  courseName: string;
  issuedDate: string;
  certificateNumber: string;
}

export interface Attendance {
  courseId: string;
  studentId: string;
  attendedLessons: number;
  totalLessons: number;
}

// Mock data
export const mockCourses: Course[] = [
  {
    id: 'course-1',
    title: 'Introduction to Web Development',
    description: 'Learn the fundamentals of HTML, CSS, and JavaScript to build modern web applications.',
    instructor: 'Sarah Johnson',
    duration: '8 weeks',
    category: 'Web Development',
    lessons: [
      { id: 'lesson-1', title: 'HTML Basics', videoUrl: '/videos/html-basics.mp4', duration: 45, order: 1 },
      { id: 'lesson-2', title: 'CSS Styling', videoUrl: '/videos/css-styling.mp4', duration: 60, order: 2 },
      { id: 'lesson-3', title: 'JavaScript Fundamentals', videoUrl: '/videos/js-fundamentals.mp4', duration: 75, order: 3 },
    ],
    liveSession: {
      id: 'live-1',
      title: 'Q&A Session - Week 1',
      scheduledTime: '2026-03-20T14:00:00Z',
      instructor: 'Sarah Johnson',
      description: 'Join us for a live Q&A session to discuss the week\'s content and answer your questions.',
      secretCode: '123456',
    },
    assignments: [
      {
        id: 'assign-1',
        title: 'Build a Personal Portfolio Website',
        description: 'Create a simple portfolio website using HTML and CSS.',
        dueDate: '2026-03-25',
        submissions: {},
      },
    ],
    quiz: {
      id: 'quiz-1',
      title: 'Web Development Basics Quiz',
      passingScore: 70,
      questions: [
        {
          id: 'q1',
          question: 'What does HTML stand for?',
          options: ['Hyper Text Markup Language', 'High Tech Modern Language', 'Home Tool Markup Language', 'Hyperlinks and Text Markup Language'],
          correctAnswer: 0,
        },
        {
          id: 'q2',
          question: 'Which language is used for styling web pages?',
          options: ['JavaScript', 'CSS', 'HTML', 'Python'],
          correctAnswer: 1,
        },
        {
          id: 'q3',
          question: 'What is JavaScript primarily used for?',
          options: ['Server management', 'Database operations', 'Adding interactivity to web pages', 'Email management'],
          correctAnswer: 2,
        },
        {
          id: 'q4',
          question: 'Which tag is used for the largest heading?',
          options: ['<h6>', '<h1>', '<heading>', '<head>'],
          correctAnswer: 1,
        },
        {
          id: 'q5',
          question: 'How do you add comments in CSS?',
          options: ['// comment', '/* comment */', '# comment', '-- comment'],
          correctAnswer: 1,
        },
      ],
      submissions: {},
    },
    exam: {
      id: 'exam-1',
      title: 'Web Development Final Exam',
      passingScore: 70,
      duration: 90,
      questions: [
        {
          id: 'e1',
          question: 'What is the semantic meaning of the <article> tag?',
          options: ['A container for articles', 'Independent, self-contained content', 'A form submission area', 'A navigation section'],
          correctAnswer: 1,
        },
        {
          id: 'e2',
          question: 'Which CSS property controls the space inside an element?',
          options: ['margin', 'padding', 'border', 'spacing'],
          correctAnswer: 1,
        },
        {
          id: 'e3',
          question: 'What is a closure in JavaScript?',
          options: ['A type of loop', 'A function with access to variables from another function', 'A method to close a browser tab', 'A CSS property'],
          correctAnswer: 1,
        },
        {
          id: 'e4',
          question: 'Which is the correct way to declare a variable in modern JavaScript?',
          options: ['var x = 5;', 'let x = 5;', 'const x = 5;', 'All are correct'],
          correctAnswer: 3,
        },
        {
          id: 'e5',
          question: 'What does the box model in CSS include?',
          options: ['Only borders and padding', 'Content, padding, border, and margin', 'Only content and borders', 'Font and colors'],
          correctAnswer: 1,
        },
      ],
      submissions: {},
    },
  },
  {
    id: 'course-2',
    title: 'React.js Mastery',
    description: 'Master React.js and build scalable, modern web applications with hooks and state management.',
    instructor: 'Michael Chen',
    duration: '10 weeks',
    category: 'Web Development',
    lessons: [
      { id: 'lesson-4', title: 'React Components', videoUrl: '/videos/react-components.mp4', duration: 60, order: 1 },
      { id: 'lesson-5', title: 'Hooks and State', videoUrl: '/videos/hooks-state.mp4', duration: 75, order: 2 },
      { id: 'lesson-6', title: 'Advanced Patterns', videoUrl: '/videos/advanced-patterns.mp4', duration: 90, order: 3 },
    ],
    liveSession: {
      id: 'live-2',
      title: 'Building a Real App with React',
      scheduledTime: '2026-03-22T15:00:00Z',
      instructor: 'Michael Chen',
      description: 'Watch as we build a complete application from scratch using React best practices.',
      secretCode: '234567',
    },
    assignments: [
      {
        id: 'assign-2',
        title: 'Create a Todo App',
        description: 'Build a todo application using React hooks.',
        dueDate: '2026-04-01',
        submissions: {},
      },
    ],
    quiz: {
      id: 'quiz-2',
      title: 'React Fundamentals Quiz',
      passingScore: 70,
      questions: [
        {
          id: 'rq1',
          question: 'What is a React component?',
          options: ['A JavaScript function or class', 'A CSS file', 'A database table', 'A server route'],
          correctAnswer: 0,
        },
        {
          id: 'rq2',
          question: 'What is the purpose of useState?',
          options: ['To manage component state', 'To fetch data', 'To style components', 'To handle errors'],
          correctAnswer: 0,
        },
        {
          id: 'rq3',
          question: 'What is JSX?',
          options: ['A database language', 'A syntax extension for JavaScript', 'A CSS framework', 'A package manager'],
          correctAnswer: 1,
        },
        {
          id: 'rq4',
          question: 'When does useEffect run by default?',
          options: ['Before render', 'After every render', 'Only on mount', 'Only on unmount'],
          correctAnswer: 1,
        },
        {
          id: 'rq5',
          question: 'What is props in React?',
          options: ['CSS properties', 'Component properties', 'Database properties', 'Server properties'],
          correctAnswer: 1,
        },
      ],
      submissions: {},
    },
    exam: {
      id: 'exam-2',
      title: 'React Comprehensive Exam',
      passingScore: 70,
      duration: 120,
      questions: [
        {
          id: 're1',
          question: 'What is the difference between state and props?',
          options: ['No difference', 'Props are immutable, state is mutable', 'State is immutable, props are mutable', 'Props are for styling'],
          correctAnswer: 1,
        },
        {
          id: 're2',
          question: 'How do you prevent unnecessary re-renders?',
          options: ['Use useState', 'Use useMemo or useCallback', 'Use fragments', 'Use keys'],
          correctAnswer: 1,
        },
        {
          id: 're3',
          question: 'What is the virtual DOM?',
          options: ['A fake browser', 'In-memory representation of UI', 'A JavaScript library', 'A CSS framework'],
          correctAnswer: 1,
        },
        {
          id: 're4',
          question: 'What is a custom hook?',
          options: ['A hook provided by React', 'A function that uses React hooks', 'A CSS hook', 'A database hook'],
          correctAnswer: 1,
        },
        {
          id: 're5',
          question: 'What is the dependency array in useEffect?',
          options: ['Required array', 'Array of dependencies that trigger the effect', 'Array of props', 'Array of state values'],
          correctAnswer: 1,
        },
      ],
      submissions: {},
    },
  },
  {
    id: 'course-3',
    title: 'Digital Marketing Fundamentals',
    description: 'Learn the core principles of digital marketing including SEO, social media, and content strategy.',
    instructor: 'Emma Williams',
    duration: '6 weeks',
    category: 'Marketing',
    lessons: [
      { id: 'lesson-7', title: 'Digital Marketing Basics', videoUrl: '/videos/marketing-basics.mp4', duration: 50, order: 1 },
      { id: 'lesson-8', title: 'SEO Strategies', videoUrl: '/videos/seo-strategies.mp4', duration: 65, order: 2 },
      { id: 'lesson-9', title: 'Social Media Marketing', videoUrl: '/videos/social-media.mp4', duration: 55, order: 3 },
    ],
    liveSession: {
      id: 'live-3',
      title: 'Marketing Strategy Workshop',
      scheduledTime: '2026-03-25T10:00:00Z',
      instructor: 'Emma Williams',
      description: 'Interactive workshop on developing effective marketing strategies.',
      secretCode: '345678',
    },
    assignments: [
      {
        id: 'assign-3',
        title: 'Create a Marketing Plan',
        description: 'Develop a comprehensive marketing plan for a hypothetical product.',
        dueDate: '2026-03-30',
        submissions: {},
      },
    ],
    quiz: {
      id: 'quiz-3',
      title: 'Digital Marketing Quiz',
      passingScore: 70,
      questions: [
        {
          id: 'mq1',
          question: 'What does SEO stand for?',
          options: ['Search Engine Optimization', 'Social Engineering Online', 'Secure Electronic Operations', 'Search Education Online'],
          correctAnswer: 0,
        },
        {
          id: 'mq2',
          question: 'Which platform is best for B2B marketing?',
          options: ['TikTok', 'LinkedIn', 'Instagram', 'Snapchat'],
          correctAnswer: 1,
        },
        {
          id: 'mq3',
          question: 'What is the primary goal of content marketing?',
          options: ['To entertain', 'To provide value and attract customers', 'To make sales directly', 'To spam users'],
          correctAnswer: 1,
        },
        {
          id: 'mq4',
          question: 'What is CTR in digital marketing?',
          options: ['Click Through Rate', 'Customer Transaction Record', 'Content Text Rating', 'Conversion Time Rate'],
          correctAnswer: 0,
        },
        {
          id: 'mq5',
          question: 'Which is important for email marketing?',
          options: ['Large recipient list', 'Personalization and segmentation', 'Many images', 'Frequent sending'],
          correctAnswer: 1,
        },
      ],
      submissions: {},
    },
    exam: {
      id: 'exam-3',
      title: 'Digital Marketing Final Exam',
      passingScore: 70,
      duration: 100,
      questions: [
        {
          id: 'me1',
          question: 'What is the buyer journey?',
          options: ['A physical trip', 'Awareness, consideration, decision stages', 'Just making a purchase', 'Marketing campaign name'],
          correctAnswer: 1,
        },
        {
          id: 'me2',
          question: 'Which metric measures campaign ROI?',
          options: ['Impressions', 'Revenue / Cost', 'Click volume', 'Time on page'],
          correctAnswer: 1,
        },
        {
          id: 'me3',
          question: 'What is A/B testing?',
          options: ['Grade testing', 'Comparing two versions', 'Email marketing', 'Analytics tool'],
          correctAnswer: 1,
        },
        {
          id: 'me4',
          question: 'Best practice for social media posting frequency?',
          options: ['Post as often as possible', 'Consistent, optimal frequency per platform', 'Once a month', 'Whenever you want'],
          correctAnswer: 1,
        },
        {
          id: 'me5',
          question: 'What is remarketing?',
          options: ['Repetitive marking', 'Targeting users who visited before', 'Sending emails', 'Creating new products'],
          correctAnswer: 1,
        },
      ],
      submissions: {},
    },
  },
];

export const mockStudents: Student[] = [
  {
    id: 'student-1',
    name: 'Harvester Student',
    email: 'student@harvesters.org',
    password: 'password123', // In production, this would be hashed
    enrolledCourses: ['course-1', 'course-2'],
    certificates: [],
    attendance: { 'course-1': 60, 'course-2': 75 },
    role: 'STUDENT',
    createdAt: '2026-01-15',
  },
];
