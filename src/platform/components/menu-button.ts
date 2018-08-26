export default class MenuButton {
    id: string;
    icon: string;
    isDisabled: boolean;

    constructor(id: string, icon: string, isDisabled?: boolean) {
        this.id = id;
        this.icon = icon;
        this.isDisabled = isDisabled;
    }
}