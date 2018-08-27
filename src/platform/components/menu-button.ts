export default class MenuButton {
    id: string;
    icon: string;
    onClick: () => void;
    isDisabled: boolean;

    constructor(id: string, icon: string, onClick?: () => void, isDisabled?: boolean) {
        this.id = id;
        this.icon = icon;
        this.onClick = onClick;
        this.isDisabled = isDisabled;
    }
}