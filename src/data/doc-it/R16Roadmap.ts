export type FrameworkFilter = 'all' | 'angular' | 'react' | 'ionic' | 'react-native';

export type Status = 'backlog' | 'in-progress' | 'finished';
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
                name: 'Hero',
                description: 'Adding component to display an icon, value/units, and a label',
                year: 2020,
                quarter: 'Q2',
                status: 'finished',
                author: 'PX Blue',
            },
            {
                name: 'ChannelValue',
                description: 'add component to display a channel value and units (usually part of Hero)',
                year: 2020,
                quarter: 'Q2',
                status: 'finished',
                author: 'PX Blue',
            },
            {
                name: 'Drawer',
                description: 'Adding drawer components for navigation',
                year: 2020,
                quarter: 'Q2',
                status: 'in-progress',
                author: 'PX Blue',
            },
            {
                name: 'InfoListItem',
                description: 'Add support for multiline/wrapping title and automatic hover states',
                year: 2020,
                quarter: 'Q2',
                status: 'in-progress',
                author: 'PX Blue',
            },
            {
                name: 'ListItemTag',
                description: 'Add support for tags (within list items)',
                year: 2020,
                quarter: 'Q2',
                status: 'in-progress',
                author: 'PX Blue',
            },
            {
                name: 'ScoreCard',
                description: 'Add a component for stylized cards',
                year: 2020,
                quarter: 'Q2',
                status: 'in-progress',
                author: 'PX Blue',
            },
            {
                name: 'UserMenu',
                description: 'Add a component for dropdown menu from avatar',
                year: 2020,
                quarter: 'Q3',
                status: 'backlog',
                author: 'PX Blue',
            },
            {
                name: 'SelectionToolbar',
                description: 'A new component for a toolbar with dropdown selector in the subtitle',
                year: 2020,
                quarter: 'Q3',
                status: 'backlog',
                author: 'PX Blue',
            },
            {
                name: 'EmptyState',
                description: 'Add support for an element that can be used as a placeholder when no data is available',
                year: 2020,
                quarter: 'Q2',
                status: 'finished',
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
                name: 'Hero',
                description: 'Adding component to display an icon, value/units, and a label',
                year: 2020,
                quarter: 'Q2',
                status: 'finished',
                author: 'PX Blue',
            },
            {
                name: 'ChannelValue',
                description: 'add component to display a channel value and units (usually part of Hero)',
                year: 2020,
                quarter: 'Q2',
                status: 'finished',
                author: 'PX Blue',
            },
            {
                name: 'Drawer',
                description: 'Add drawer components for navigation',
                year: 2020,
                quarter: 'Q2',
                status: 'finished',
                author: 'PX Blue',
            },
            {
                name: 'InfoListItem',
                description: 'Add support for multiline/wrapping title and automatic hover states',
                year: 2020,
                quarter: 'Q2',
                status: 'finished',
                author: 'PX Blue',
            },
            {
                name: 'ListItemTag',
                description: 'Add support for tags (within list items)',
                year: 2020,
                quarter: 'Q2',
                status: 'finished',
                author: 'PX Blue',
            },
            {
                name: 'ScoreCard',
                description: 'Add a component for stylized cards',
                year: 2020,
                quarter: 'Q2',
                status: 'finished',
                author: 'PX Blue',
            },
            {
                name: 'UserMenu',
                description: 'Add support for non-clickable menu items',
                year: 2020,
                quarter: 'Q2',
                status: 'finished',
                author: 'PX Blue',
            },
            {
                name: 'SelectionToolbar',
                description: 'A new component for a toolbar with dropdown selector in the subtitle',
                year: 2020,
                quarter: 'Q2',
                status: 'backlog',
                author: 'PX Blue',
            },
            {
                name: 'EmptyState',
                description: 'Add support for an element that can be used as a placeholder when no data is available',
                year: 2020,
                quarter: 'Q2',
                status: 'finished',
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
                name: 'Hero',
                description: 'Add component to display an icon, value/units, and a label',
                year: 2020,
                quarter: 'Q2',
                status: 'finished',
                author: 'PX Blue',
            },
            {
                name: 'ChannelValue',
                description: 'Add component to display a channel value and units (usually part of Hero)',
                year: 2020,
                quarter: 'Q2',
                status: 'finished',
                author: 'PX Blue',
            },
            {
                name: 'Drawer',
                description: 'Add a drawer component for navigation',
                year: 2020,
                quarter: 'Q2',
                status: 'backlog',
                author: 'PX Blue',
            },
            {
                name: 'InfoListItem',
                description: 'Add support for multiline/wrapping title and automatic hover states',
                year: 2020,
                quarter: 'Q2',
                status: 'finished',
                author: 'PX Blue',
            },
            {
                name: 'ScoreCard',
                description: 'Add a component for stylized cards',
                year: 2020,
                quarter: 'Q2',
                status: 'finished',
                author: 'PX Blue',
            },
            {
                name: 'Layout Components',
                description: 'Add components for basic screen layouts',
                year: 2020,
                quarter: 'Q2',
                status: 'backlog',
                author: 'PX Blue',
            },
            {
                name: 'SelectionToolbar',
                description: 'A new component for a toolbar with dropdown selector in the subtitle',
                year: 2020,
                quarter: 'Q2',
                status: 'backlog',
                author: 'PX Blue',
            },
            {
                name: 'EmptyState',
                description: 'Add support for an element that can be used as a placeholder when no data is available',
                year: 2020,
                quarter: 'Q2',
                status: 'finished',
                author: 'PX Blue',
            },
            {
                name: 'Header',
                description: 'Add component to display information such as title, background image, nav button, and action buttons at the top of the page on Mobile Devices',
                year: 2020,
                quarter: 'Q2',
                status: 'finished',
                author: 'PX Blue',
            },
            {
                name: 'IconWrapper',
                description: 'Add support to interact with SVG icons from react-native-vector-icons and @pxblue/icons-svg',
                year: 2020,
                quarter: 'Q2',
                status: 'finished',
                author: 'PX Blue',
            },
            {
                name: 'Theme',
                description: 'Add support for theming React Native projects using @callstack/react-theme-provider',
                year: 2020,
                quarter: 'Q2',
                status: 'finished',
                author: 'PX Blue',
            },
            {
                name: 'Typography',
                description: 'add support to apply various typography text styles from the theme',
                year: 2020,
                quarter: 'Q2',
                status: 'finished',
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
                quarter: 'Q2',
                status: 'in-progress',
                author: 'PX Blue',
            },
            {
                name: 'Downloadable Assets',
                description: 'Add the ability to download designer assets (e.g., icon packs)',
                year: 2020,
                quarter: 'Q2',
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
                quarter: 'Q2',
                status: 'in-progress',
                author: 'PX Blue',
            },
        ],
    },
    {
        name: 'Reusable Workflows',
        description: 'Components for implementing common workflows across applications',
        applies: ['all'],
        items: [
            {
                name: 'React Native Login',
                description: 'Shared login experience across applications',
                year: 2020,
                quarter: 'Q2',
                status: 'in-progress',
                author: 'Innersource',
                applies: ['react-native'],
            },
            {
                name: 'React Native User Registration',
                description: 'Shared registration experience across applications',
                year: 2020,
                quarter: 'Q2',
                status: 'in-progress',
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
                year: 2020,
                quarter: 'Q2',
                status: 'in-progress',
                author: 'PX Blue',
            },
        ],
    },
];
