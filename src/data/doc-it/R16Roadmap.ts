export type FrameworkFilter = 'all' | 'angular' | 'react' | 'ionic' | 'react-native';

export type Status = 'backlog' | 'in-progress' | 'pre-release' | 'deferred' | 'finished';
export type Quarter = 'Q1' | 'Q2' | 'Q3' | 'Q4';

const CURRENT_YEAR = 2020;
const CURRENT_QUARTER: Quarter = 'Q2';

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
                name: 'Drawer',
                description: 'Add drawer components for navigation',
                year: CURRENT_YEAR,
                quarter: CURRENT_QUARTER,
                status: 'pre-release',
                author: 'PX Blue',
            },
            {
                name: 'Info List Item',
                description: 'Add support for multiline/wrapping title and automatic hover states',
                year: CURRENT_YEAR,
                quarter: CURRENT_QUARTER,
                status: 'pre-release',
                author: 'PX Blue',
            },
            {
                name: 'List Item Tag',
                description: 'Add support for tags (within list items)',
                year: CURRENT_YEAR,
                quarter: CURRENT_QUARTER,
                status: 'pre-release',
                author: 'PX Blue',
            },
            {
                name: 'Score Card',
                description: 'Add a component for stylized cards',
                year: CURRENT_YEAR,
                quarter: CURRENT_QUARTER,
                status: 'pre-release',
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
                name: 'Info List Item',
                description: 'Add support for multiline/wrapping title and automatic hover states',
                year: CURRENT_YEAR,
                quarter: CURRENT_QUARTER,
                status: 'finished',
                author: 'PX Blue',
            },
            {
                name: 'User Menu',
                description: 'Add support for non-clickable menu items',
                year: CURRENT_YEAR,
                quarter: CURRENT_QUARTER,
                status: 'finished',
                author: 'PX Blue',
            },
            {
                name: 'Selection Toolbar',
                description: 'A new component for a toolbar with dropdown selector in the subtitle',
                year: CURRENT_YEAR,
                quarter: CURRENT_QUARTER,
                status: 'deferred',
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
                name: 'Drawer',
                description: 'Add a drawer component for navigation',
                year: CURRENT_YEAR,
                quarter: CURRENT_QUARTER,
                status: 'pre-release',
                author: 'PX Blue',
            },
            {
                name: 'Layout Components',
                description: 'Add components for basic screen layouts',
                year: CURRENT_YEAR,
                quarter: CURRENT_QUARTER,
                status: 'deferred',
                author: 'PX Blue',
            },
            {
                name: 'Selection Toolbar',
                description: 'A new component for a toolbar with dropdown selector in the subtitle',
                year: CURRENT_YEAR,
                quarter: CURRENT_QUARTER,
                status: 'deferred',
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
                year: CURRENT_YEAR,
                quarter: CURRENT_QUARTER,
                status: 'in-progress',
                author: 'PX Blue',
            },
            {
                name: 'Design Patterns',
                description: 'New format and content for design patterns',
                year: CURRENT_YEAR,
                quarter: CURRENT_QUARTER,
                status: 'deferred',
                author: 'PX Blue',
            },
            {
                name: 'Downloadable Assets',
                description: 'Add the ability to download designer assets through Figma',
                year: CURRENT_YEAR,
                quarter: CURRENT_QUARTER,
                status: 'finished',
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
                year: CURRENT_YEAR,
                quarter: CURRENT_QUARTER,
                status: 'in-progress',
                author: 'PX Blue',
            },
            {
                name: 'Enhanced Internationalization Support',
                description: 'Updating our Internationalization examples to support additional languages and use recommended tools',
                year: CURRENT_YEAR,
                quarter: CURRENT_QUARTER,
                status: 'finished',
                author: 'PX Blue',
            }
        ],
    },
    {
        name: 'Reusable Workflows',
        description: 'Components for implementing common workflows across applications',
        applies: ['all'],
        items: [
            {
                name: 'React Native Login & User Registration',
                description: 'Shared login and sign-up experience across applications',
                year: CURRENT_YEAR,
                quarter: CURRENT_QUARTER,
                status: 'pre-release',
                author: 'Innersource',
                applies: ['react-native'],
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
                description: 'A command-line interface for starting new projects with automatic PX Blue integration',
                year: CURRENT_YEAR,
                quarter: CURRENT_QUARTER,
                status: 'finished',
                author: 'PX Blue',
            },
        ],
    },
];
