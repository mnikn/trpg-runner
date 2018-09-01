export const NAVIGATE_LOCATION = {
    COC_PLAYER_CARD: 'coc player card',
    COC_HOME: 'coc home'
};

export const NAVIGATE_TABLE: Map<string, string> = new Map<string, string>([
    [NAVIGATE_LOCATION.COC_PLAYER_CARD, '/coc/player-card/list'],
    [NAVIGATE_LOCATION.COC_HOME, '/coc/home'],
    [null, '/coc/home']
]);

export const NAVIGATE_LOCATION_TABLE: Map<string, string> = new Map<string, string>([
    ['/coc/player-card/list', NAVIGATE_LOCATION.COC_PLAYER_CARD],
    ['/coc/home', NAVIGATE_LOCATION.COC_HOME],
]);