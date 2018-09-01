export function initHomeButtons() {
    return {
        type: 'INIT_COC_HOME_BUTTONS'
    }
}

export function initPlayerCardListButtons() {
    return {
        type: 'INIT_COC_PLAYER_CARD_LIST_BUTTONS'
    }
}

export function updateButtonOnSelecting(selectedPlayers: number[]) {
    return {
        type: 'UPDATE_BUTTON_ON_SELECTING',
        selectedPlayers: selectedPlayers
    }
}