export const NAVIGATE_LOCATION = {
    COC_HOME: 'coc home',
    COC_PLAYER_CARD: 'coc player card',

    DND_HOME: 'dnd home',
    DND_PLAYER_CARD: 'dnd player card',
};

export const NAVIGATE_TABLE: Map<string, string> = new Map<string, string>([
    [NAVIGATE_LOCATION.COC_PLAYER_CARD, '/coc/player-card/list'],
    [NAVIGATE_LOCATION.COC_HOME, '/coc/home'],
    [NAVIGATE_LOCATION.DND_PLAYER_CARD, '/dnd/player-card/list'],
    [NAVIGATE_LOCATION.DND_HOME, '/dnd/home']
]);

export const NAVIGATE_LOCATION_TABLE: Map<string, string> = new Map<string, string>([
    ['/coc/player-card/list', NAVIGATE_LOCATION.COC_PLAYER_CARD],
    ['/coc/home', NAVIGATE_LOCATION.COC_HOME],
    ['/dnd/player-card/list', NAVIGATE_LOCATION.DND_PLAYER_CARD],
    ['/dnd/home', NAVIGATE_LOCATION.DND_HOME],
]);