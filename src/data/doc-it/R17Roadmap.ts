export type FrameworkFilter = 'all' | 'angular' | 'react' | 'ionic' | 'react-native';

export type Status = 'backlog' | 'in-progress' | 'pre-release' | 'deferred' | 'finished';
export type Quarter = 'Q1' | 'Q2' | 'Q3' | 'Q4';

export type RoadmapItem = {
    name: string;
    description: string;
    year: string | number;
    quarter: Quarter;
    status: Status;
    author?: string;
    applies?: FrameworkFilter[];
};
type RoadmapBucket = {
    name: string;
    description: string;
    applies?: FrameworkFilter[];
    items: RoadmapItem[];
};

export const roadmap: RoadmapBucket[] = [
    {
        name: 'Angular Component Library',
        description: 'Reusable UI elements from @pxblue/angular-components',
        applies: ['angular', 'ionic'],
        items: [
            {
                name: 'User Menu',
                description: 'Add a component for dropdown menu from avatar',
                year: 2020,
                quarter: 'Q3',
                status: 'backlog',
                author: 'PX Blue',
            },
            {
                name: 'Selection Toolbar',
                description: 'A new component for a toolbar with dropdown selector in the subtitle',
                year: 2020,
                quarter: 'Q3',
                status: 'backlog',
                author: 'PX Blue',
            },
        ],
    },
    {
        name: 'React Component Library',
        description: 'Reusable UI elements from @pxblue/react-components',
        applies: ['react'],
        items: [
            {
                name: 'Selection Toolbar',
                description: 'A new component for a toolbar with dropdown selector in the subtitle',
                year: 2020,
                quarter: 'Q3',
                status: 'backlog',
                author: 'PX Blue',
            },
        ],
    },
    {
        name: 'React Native Component Library',
        description: 'Reusable UI elements from @pxblue/react-native-components',
        applies: ['react-native'],
        items: [
            {
                name: 'Layout Components',
                description: 'Add components for basic screen layouts',
                year: 2020,
                quarter: 'Q3',
                status: 'backlog',
                author: 'PX Blue',
            },
            {
                name: 'Selection Toolbar',
                description: 'A new component for a toolbar with dropdown selector in the subtitle',
                year: 2020,
                quarter: 'Q3',
                status: 'backlog',
                author: 'PX Blue',
            },
        ],
    },
    {
        name: 'pxblue.github.io',
        description: 'The PX Blue documentation site',
        applies: ['all'],
        items: [
            {
                name: 'Designer Documentation',
                description: 'Expanded documentation for using PX Blue as a designer',
                year: 2020,
                quarter: 'Q2',
                status: 'in-progress',
                author: 'PX Blue',
            },
            {
                name: 'Design Patterns',
                description: 'New format and content for design patterns',
                year: 2020,
                quarter: 'Q3',
                status: 'backlog',
                author: 'PX Blue',
            },
        ],
    },
    {
        name: 'Code Examples',
        description: 'Basic code snippets showing how to implement various design patterns',
        applies: ['all'],
        items: [
            {
                name: 'Simplification and Consolidation',
                description: 'Consolidating code examples into a single repository',
                year: 2020,
                quarter: 'Q3',
                status: 'in-progress',
                author: 'PX Blue',
                applies: ['angular', 'ionic', 'react-native'],
            },
        ],
    },
    {
        name: 'Reusable Workflows',
        description: 'Components for implementing common workflows across applications',
        applies: ['all'],
        items: [
            {
                name: 'React Login & User Registration',
                description: 'Shared login and sign-up experience across applications',
                year: 2020,
                quarter: 'Q3',
                status: 'backlog',
                author: 'PX Blue',
                applies: ['react'],
            },
            {
                name: 'Angular Login & User Registration',
                description: 'Shared login and sign-up experience across applications',
                year: 2020,
                quarter: 'Q3',
                status: 'backlog',
                author: 'PX Blue',
                applies: ['angular'],
            },
        ],
    },
    {
        name: 'Utilities',
        description: 'Assorted tools for helping you work faster',
        applies: ['all'],
        items: [
            {
                name: 'PX Blue CLI',
                description: 'CLI enhancements and templates',
                year: 2020,
                quarter: 'Q3',
                status: 'backlog',
                author: 'PX Blue',
            },
        ],
    },
];
