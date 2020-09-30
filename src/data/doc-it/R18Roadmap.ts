export type FrameworkFilter = 'all' | 'angular' | 'react' | 'ionic' | 'react-native';
export type ItemTypeFilter = 'all' | 'design' | 'development';
export type Status = 'backlog' | 'in-progress' | 'pre-release' | 'deferred' | 'finished';
export type Quarter = 'Q1' | 'Q2' | 'Q3' | 'Q4';

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
        name: 'Figma Stickersheet Components',
        description: 'Updates to the components in the designer stickersheet',
        type: 'design',
        items: [
            {
                name: 'Additional Material Components',
                description:
                    'Add components for Chips, Bottom Sheet, Cards, Sliders, Snackbar, and Tooltip',
                year: 2020,
                quarter: 'Q3',
                status: 'finished',
                author: 'Innersource',
            },
            {
                name: 'Info List Item',
                description: 'Add component for PX Blue Info List Item',
                year: 2020,
                quarter: 'Q3',
                status: 'finished',
                author: 'PX Blue',
            },
            {
                name: 'List Item Tag',
                description: 'Add component for PX Blue List Item Tag',
                year: 2020,
                quarter: 'Q3',
                status: 'finished',
                author: 'PX Blue',
            },
            {
                name: 'Score Card',
                description: 'Add component for PX Blue Score Card',
                year: 2020,
                quarter: 'Q3',
                status: 'finished',
                author: 'PX Blue',
            },
            {
                name: 'User Menu',
                description: 'Add component for PX Blue User Menu',
                year: 2020,
                quarter: 'Q3',
                status: 'finished',
                author: 'PX Blue',
            },
            {
                name: 'Dropdown Toolbar',
                description: 'Add component for PX Blue Dropdown Toolbar',
                year: 2020,
                quarter: 'Q3',
                status: 'deferred',
                author: 'PX Blue',
            },
            {
                name: 'Dropdown Toolbar',
                description: 'Add component for PX Blue Dropdown Toolbar',
                year: 2020,
                quarter: 'Q4',
                status: 'backlog',
                author: 'PX Blue',
            },
            {
                name: 'Additional Material Components',
                description: 'Add component for dialogs, menus, and side sheets',
                year: 2020,
                quarter: 'Q4',
                status: 'backlog',
                author: 'PX Blue',
            },
        ],
    },
    {
        name: 'Figma Design Patterns',
        description: 'Adding design pattern examples to Figma',
        type: 'design',
        items: [
            {
                name: 'Login & Registration',
                description: 'Designer templates / examples for Login and Registration workflows',
                year: 2020,
                quarter: 'Q4',
                status: 'backlog',
                author: 'PX Blue',
            },
            {
                name: 'Search',
                description: 'Designer templates / examples for searching and filtering',
                year: 2020,
                quarter: 'Q4',
                status: 'backlog',
                author: 'PX Blue',
            },
            {
                name: 'App Bar',
                description: 'Designer templates / examples for using App Bars',
                year: 2020,
                quarter: 'Q4',
                status: 'backlog',
                author: 'PX Blue',
            },
            {
                name: 'Empty States',
                description: 'Designer templates / examples for using Empty States',
                year: 2020,
                quarter: 'Q4',
                status: 'backlog',
                author: 'PX Blue',
            },
            {
                name: 'Forms',
                description: 'Designer templates / examples for Forms',
                year: 2020,
                quarter: 'Q4',
                status: 'backlog',
                author: 'PX Blue',
            },
            {
                name: 'Internationalization',
                description: 'Designer templates / examples for i18n',
                year: 2020,
                quarter: 'Q4',
                status: 'backlog',
                author: 'PX Blue',
            },
            {
                name: 'Lists',
                description: 'Designer templates / examples for Lists',
                year: 2020,
                quarter: 'Q4',
                status: 'backlog',
                author: 'PX Blue',
            },
            {
                name: 'Loading States',
                description: 'Designer templates / examples for Loading States',
                year: 2020,
                quarter: 'Q4',
                status: 'backlog',
                author: 'PX Blue',
            },
            {
                name: 'Visualization',
                description: 'Designer templates / examples for Visualizations',
                year: 2020,
                quarter: 'Q4',
                status: 'backlog',
                author: 'PX Blue',
            },
        ],
    },
    {
        name: 'Angular Component Library',
        description: 'Reusable UI elements from @pxblue/angular-components',
        type: 'development',
        framework: ['angular', 'ionic'],
        items: [
            {
                name: 'Drawer',
                description: 'Add drawer components for navigation',
                year: 2020,
                quarter: 'Q2',
                status: 'finished',
                author: 'PX Blue',
            },
            {
                name: 'Info List Item',
                description: 'Add support for multiline/wrapping title and automatic hover states',
                year: 2020,
                quarter: 'Q2',
                status: 'finished',
                author: 'PX Blue',
            },
            {
                name: 'List Item Tag',
                description: 'Add support for tags (within list items)',
                year: 2020,
                quarter: 'Q2',
                status: 'finished',
                author: 'PX Blue',
            },
            {
                name: 'Score Card',
                description: 'Add a component for stylized cards',
                year: 2020,
                quarter: 'Q2',
                status: 'finished',
                author: 'PX Blue',
            },
            {
                name: 'User Menu',
                description: 'Add a component for dropdown menu from avatar',
                year: 2020,
                quarter: 'Q3',
                status: 'finished',
                author: 'PX Blue',
            },
            {
                name: 'Dropdown Toolbar',
                description: 'A new component for a toolbar with dropdown selector in the subtitle',
                year: 2020,
                quarter: 'Q3',
                status: 'finished',
                author: 'PX Blue',
            },
            {
                name: 'Navigation Rail',
                description: 'Condensed navigation drawer from IPM/Genepi',
                year: 2020,
                quarter: 'Q3',
                status: 'finished',
                author: 'Innersource',
            },
            {
                name: 'Gauges and Inputs',
                description: 'Assorted input and gauge components from IPM/Genepi',
                year: 2020,
                quarter: 'Q3',
                status: 'deferred',
                author: 'Innersource',
            },
            {
                name: 'Angular 10 Support',
                description: 'Full compatibility with version 10 of Angular',
                year: 2020,
                quarter: 'Q4',
                status: 'backlog',
                author: 'PX Blue',
            },
            {
                name: 'Collapsible Appbar',
                description: 'A toolbar that condenses its content as a user scrolls down',
                year: 2021,
                quarter: 'Q1',
                status: 'backlog',
                author: 'PX Blue',
            },
            {
                name: 'Pager',
                description: 'Stepwise movement between multiple pages',
                year: 2021,
                quarter: 'Q1',
                status: 'backlog',
                author: 'PX Blue',
            },
        ],
    },
    {
        name: 'React Component Library',
        description: 'Reusable UI elements from @pxblue/react-components',
        type: 'development',
        framework: ['react'],
        items: [
            {
                name: 'Info List Item',
                description: 'Add support for multiline/wrapping title and automatic hover states',
                year: 2020,
                quarter: 'Q2',
                status: 'finished',
                author: 'PX Blue',
            },
            {
                name: 'User Menu',
                description: 'Add support for non-clickable menu items',
                year: 2020,
                quarter: 'Q2',
                status: 'finished',
                author: 'PX Blue',
            },
            {
                name: 'Dropdown Toolbar',
                description: 'A new component for a toolbar with dropdown selector in the subtitle',
                year: 2020,
                quarter: 'Q3',
                status: 'finished',
                author: 'PX Blue',
            },
            {
                name: 'Collapsible Appbar',
                description: 'A toolbar that condenses its content as a user scrolls down',
                year: 2021,
                quarter: 'Q1',
                status: 'backlog',
                author: 'PX Blue',
            },
            {
                name: 'Pager',
                description: 'Stepwise movement between multiple pages',
                year: 2021,
                quarter: 'Q1',
                status: 'backlog',
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
                name: 'Drawer',
                description: 'Add a drawer component for navigation',
                year: 2020,
                quarter: 'Q2',
                status: 'finished',
                author: 'PX Blue',
            },
            {
                name: 'List Item Tag',
                description: 'Add support for tags',
                year: 2020,
                quarter: 'Q3',
                status: 'finished',
                author: 'PX Blue',
            },
            {
                name: 'Spacer',
                description: 'An invisible component that acts as a spacer element in various layouts.',
                year: 2020,
                quarter: 'Q3',
                status: 'finished',
                author: 'PX Blue',
            },
            {
                name: 'User Menu',
                description: 'Add a component for dropdown menu from avatar',
                year: 2020,
                quarter: 'Q3',
                status: 'deferred',
                author: 'PX Blue',
            },
            {
                name: 'User Menu',
                description: 'Add a component for dropdown menu from avatar',
                year: 2021,
                quarter: 'Q1',
                status: 'backlog',
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
                name: 'Downloadable Assets',
                description: 'Add the ability to download designer assets through Figma',
                year: 2020,
                quarter: 'Q2',
                status: 'finished',
                author: 'PX Blue',
            },
            {
                name: 'Designer Documentation',
                description: 'Expanded documentation for using PX Blue as a designer',
                year: 2020,
                quarter: 'Q3',
                status: 'finished',
                author: 'PX Blue',
            },
            {
                name: 'Design Patterns',
                description: 'New format and content for design patterns',
                year: 2020,
                quarter: 'Q3',
                status: 'finished',
                author: 'PX Blue',
            },
            {
                name: 'Website Design Standards',
                description: 'New content and guidelines around designing for websites',
                year: 2020,
                quarter: 'Q3',
                status: 'finished',
                author: 'PX Blue',
            },
            {
                name: 'Design Patterns',
                description: 'New format and content for design patterns',
                year: 2020,
                quarter: 'Q4',
                status: 'backlog',
                author: 'PX Blue',
            },
            {
                name: 'Iconography Page',
                description: 'Reorganization of how to view and use PX Blue icons',
                year: 2020,
                quarter: 'Q4',
                status: 'backlog',
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
                name: 'Enhanced Internationalization Support',
                description: 'Updating our Internationalization examples to support additional languages and use recommended tools',
                year: 2020,
                quarter: 'Q2',
                status: 'finished',
                author: 'PX Blue',
            },
            {
                name: 'Simplification and Consolidation',
                description: 'Consolidating code examples into a single repository',
                year: 2020,
                quarter: 'Q3',
                status: 'finished',
                author: 'PX Blue',
                framework: ['angular', 'ionic', 'react-native'],
            },
            {
                name: 'Mobile Design Patterns',
                description: 'Examples for User Menu, Drawer, and more',
                year: 2021,
                quarter: 'Q4',
                status: 'backlog',
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
                description: 'Shared login and sign-up experience across applications',
                year: 2020,
                quarter: 'Q2',
                status: 'finished',
                author: 'Innersource',
                framework: ['react-native'],
            },
            {
                name: 'React Login & User Registration',
                description: 'Shared login and sign-up experience across applications',
                year: 2020,
                quarter: 'Q3',
                status: 'finished',
                author: 'PX Blue',
                framework: ['react'],
            },
            {
                name: 'Angular Login & User Registration',
                description: 'Shared login and sign-up experience across applications',
                year: 2020,
                quarter: 'Q4',
                status: 'backlog',
                author: 'PX Blue',
                framework: ['angular'],
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
                name: 'PX Blue CLI',
                description: 'A command-line interface for starting new projects with automatic PX Blue integration',
                year: 2020,
                quarter: 'Q2',
                status: 'finished',
                author: 'PX Blue',
            },
            {
                name: 'PX Blue CLI',
                description: 'CLI enhancements and templates',
                year: 2020,
                quarter: 'Q4',
                status: 'backlog',
                author: 'PX Blue',
            },
        ],
    },
];
