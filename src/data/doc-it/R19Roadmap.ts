export type FrameworkFilter = 'all' | 'angular' | 'react' | 'ionic' | 'react-native';
export type ItemTypeFilter = 'all' | 'design' | 'development';
export type Status = 'backlog' | 'in-progress' | 'pre-release' | 'deferred' | 'finished';
export type Quarter = 'Q1' | 'Q2' | 'Q3' | 'Q4';

const CURRENT_YEAR = 2021;
const CURRENT_QUARTER: Quarter = 'Q1';

export type RoadmapItem = {
    name: string;
    description: string;
    year: string | number;
    quarter: Quarter;
    status: Status;
    author?: string;
    type?: ItemTypeFilter;
    framework?: FrameworkFilter[];
};
type RoadmapBucket = {
    name: string;
    description: string;
    type: ItemTypeFilter;
    framework?: FrameworkFilter[];
    items: RoadmapItem[];
};

export const roadmap: RoadmapBucket[] = [
    {
        name: 'Figma Component Library',
        description: 'Updates to the components in the designer stickersheet',
        type: 'design',
        items: [ ],
    },
    {
        name: 'Figma Design Patterns',
        description: 'Adding design pattern examples to Figma',
        type: 'design',
        items: [
            {
                name: 'Login & Registration',
                description: 'Designer templates / examples for Login and Registration workflows',
                year: CURRENT_YEAR,
                quarter: CURRENT_QUARTER,
                status: 'pre-release',
                author: 'PX Blue',
            },
            {
                name: 'Search',
                description: 'Designer templates / examples for searching',
                year: CURRENT_YEAR,
                quarter: CURRENT_QUARTER,
                status: 'pre-release',
                author: 'PX Blue',
            },
            {
                name: 'App Bar',
                description: 'Designer templates / examples for using App Bars',
                year: CURRENT_YEAR,
                quarter: CURRENT_QUARTER,
                status: 'in-progress',
                author: 'PX Blue',
            },
            {
                name: 'Loading States',
                description: 'Designer templates / examples for Loading States',
                year: CURRENT_YEAR,
                quarter: CURRENT_QUARTER,
                status: 'in-progress',
                author: 'PX Blue',
            },
            {
                name: 'Internationalization',
                description: 'Designer templates / examples for i18n',
                year: CURRENT_YEAR,
                quarter: CURRENT_QUARTER,
                status: 'pre-release',
                author: 'PX Blue',
            },
            {
                name: 'Overlays',
                description: 'Designer templates / examples for dialogs and overlays',
                year: CURRENT_YEAR,
                quarter: CURRENT_QUARTER,
                status: 'pre-release',
                author: 'PX Blue',
            },
            {
                name: 'Visualization',
                description: 'Designer templates / examples for Visualizations',
                year: CURRENT_YEAR,
                quarter: CURRENT_QUARTER,
                status: 'in-progress',
                author: 'PX Blue',
            },
            {
                name: 'Steppers',
                description: 'Designer templates / examples for Steppers',
                year: CURRENT_YEAR,
                quarter: CURRENT_QUARTER,
                status: 'in-progress',
                author: 'PX Blue',
            },
        ],
    },
    {
        name: 'Angular Component Library',
        description: 'Reusable UI elements from @pxblue/angular-components',
        type: 'development',
        framework: ['angular', 'ionic'],
        items: [ ],
    },
    {
        name: 'React Component Library',
        description: 'Reusable UI elements from @pxblue/react-components',
        type: 'development',
        framework: ['react'],
        items: [
            {
                name: 'Navigation Rail',
                description: 'Condensed navigation drawer',
                year: CURRENT_YEAR,
                quarter: CURRENT_QUARTER,
                status: 'finished',
                author: 'PX Blue',
            },
        ],
    },
    {
        name: 'React Native Component Library',
        description: 'Reusable UI elements from @pxblue/react-native-components',
        type: 'development',
        framework: ['react-native'],
        items: [
            {
                name: 'Mobile Stepper',
                description: 'Add a component for stepping between pages',
                year: CURRENT_YEAR,
                quarter: CURRENT_QUARTER,
                status: 'finished',
                author: 'PX Blue',
            },
            {
                name: 'User Menu',
                description: 'Add a component for dropdown menu from avatar',
                year: CURRENT_YEAR,
                quarter: CURRENT_QUARTER,
                status: 'finished',
                author: 'PX Blue',
            },
        ],
    },
    {
        name: 'pxblue.github.io',
        description: 'The PX Blue documentation site',
        type: 'design',
        items: [
            {
                name: 'Updated Theme Documentation',
                description: 'Updated content around the usage of dark themes',
                year: CURRENT_YEAR,
                quarter: CURRENT_QUARTER,
                status: 'in-progress',
                author: 'PX Blue',
            },
            {
                name: 'Account Menu Design Pattern',
                description: 'Add documentation about the usage of an account menu',
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
        type: 'development',
        framework: ['all'],
        items: [
            {
                name: 'Internationalization Pattern',
                description: 'Examples of performing internationalization',
                year: CURRENT_YEAR,
                quarter: CURRENT_QUARTER,
                status: 'deferred',
                author: 'PX Blue',
                framework: ['ionic', 'react-native'],
            },
            {
                name: 'Form Validation Pattern',
                description: 'Examples for performing form validation',
                year: CURRENT_YEAR,
                quarter: CURRENT_QUARTER,
                status: 'in-progress',
                author: 'PX Blue',
                framework: ['ionic', 'react-native'],
            },
        ],
    },
    {
        name: 'Reusable Workflows',
        description: 'Components for implementing common workflows across applications',
        type: 'development',
        framework: ['all'],
        items: [
            {
                name: 'React Native Login & User Registration',
                description: 'Updates for customization of contents',
                year: CURRENT_YEAR,
                quarter: CURRENT_QUARTER,
                status: 'in-progress',
                author: 'PX Blue',
                framework: ['react-native'],
            },
            {
                name: 'React Login & User Registration',
                description: 'Updates for customization of contents',
                year: CURRENT_YEAR,
                quarter: CURRENT_QUARTER,
                status: 'pre-release',
                author: 'PX Blue',
                framework: ['react'],
            },
            {
                name: 'Angular Login & User Registration',
                description: 'Updates for customization of contents',
                year: CURRENT_YEAR,
                quarter: CURRENT_QUARTER,
                status: 'pre-release',
                author: 'PX Blue',
                framework: ['angular'],
            },
        ],
    },
    {
        name: 'Themes',
        description: 'Styles and colors for applications',
        type: 'development',
        framework: ['all'],
        items: [
            {
                name: 'Dark Theme Updates',
                description: 'Updated styles for the dark theme',
                year: CURRENT_YEAR,
                quarter: CURRENT_QUARTER,
                status: 'pre-release',
                author: 'PX Blue',
                framework: ['angular', 'react'],
            },
            {
                name: 'React Native Dark Theme',
                description: 'Build a new dark theme for React Native projects',
                year: CURRENT_YEAR,
                quarter: CURRENT_QUARTER,
                status: 'pre-release',
                author: 'PX Blue',
                framework: ['react-native'],
            },
        ],
    },
    {
        name: 'Utilities',
        description: 'Assorted tools for helping you work faster',
        type: 'development',
        framework: ['all'],
        items: [
            {
                name: 'Video Tutorials',
                description: 'Video tutorials showing how to use PX Blue tools & resources',
                year: CURRENT_YEAR,
                quarter: CURRENT_QUARTER,
                status: 'in-progress',
                author: 'PX Blue',
            },
            {
                name: 'PX Blue CLI - Angular',
                description: 'Angular project templates for the CLI',
                year: CURRENT_YEAR,
                quarter: CURRENT_QUARTER,
                status: 'finished',
                author: 'PX Blue',
            },
            {
                name: 'PX Blue CLI - React Native',
                description: 'React Native project templates for the CLI',
                year: CURRENT_YEAR,
                quarter: CURRENT_QUARTER,
                status: 'finished',
                author: 'PX Blue',
            },
        ],
    },
];
