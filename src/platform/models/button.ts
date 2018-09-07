export default class ButtonModel {
    id: string;
    icon: string;
    onClick: (...args: any[]) => void;
    isDisabled: boolean;

    constructor(id: string, icon: string, onClick?: (...args: any[]) => void, isDisabled?: boolean) {
        this.id = id;
        this.icon = icon;
        this.onClick = onClick;
        this.isDisabled = isDisabled;
    }
}