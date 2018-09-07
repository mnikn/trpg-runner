export const NAVIGATE_LOCATION = {
    COC_HOME: 'coc home',
    COC_ROLE_CARD: 'coc role card',

    DND_HOME: 'dnd home',
    DND_ROLE_CARD: 'dnd role card',
    DND_ROLE_EDITOR: 'dnd role editor'
};

export const NAVIGATE_TABLE: Map<string, string> = new Map<string, string>([
    [NAVIGATE_LOCATION.COC_ROLE_CARD, '/coc/role-card/list'],
    [NAVIGATE_LOCATION.COC_HOME, '/coc/home'],

    [NAVIGATE_LOCATION.DND_ROLE_CARD, '/dnd/role-card/list'],
    [NAVIGATE_LOCATION.DND_HOME, '/dnd/home'],
    [NAVIGATE_LOCATION.DND_ROLE_EDITOR, '/dnd/role-card/edit/:id'],
]);

export const NAVIGATE_LOCATION_TABLE: Map<string, string> = new Map<string, string>([
    ['/coc/role-card/list', NAVIGATE_LOCATION.COC_ROLE_CARD],
    ['/coc/home', NAVIGATE_LOCATION.COC_HOME],

    ['/dnd/role-card/list', NAVIGATE_LOCATION.DND_ROLE_CARD],
    ['/dnd/home', NAVIGATE_LOCATION.DND_HOME],
    ['/dnd/role-card/edit/:id', NAVIGATE_LOCATION.DND_ROLE_EDITOR],
]);