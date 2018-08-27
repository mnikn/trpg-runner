import MenuButton from "../../platform/components/menu-button";
import BaseService from "../../platform/services/base-service";
import Service from "../../platform/decorators/service";

@Service()
export default class ToolBarService extends BaseService {
    private _buttons: Map<string, MenuButton> = new Map<string, MenuButton>();
    private _onToolBarButtonChanged : Array<(buttons: MenuButton[]) => void> = [];

    public addToolBarButton(button: MenuButton): void {
        this._buttons.set(button.id, button);
        this.fireOnToolBarButtonChanged();
    }

    public setToolBarButtons(buttons: MenuButton[]): void {
        this._buttons.clear();
        buttons.forEach(button => this._buttons.set(button.id, button));
        this.fireOnToolBarButtonChanged();
    }

    public removeToolBarButton(id: string): void {
        this._buttons.delete(id);
        this.fireOnToolBarButtonChanged();
    }

    public clearToolBarButtons(): void {
        this._buttons.clear();
        this.fireOnToolBarButtonChanged();
    }

    public getToolBarButton(id: string): MenuButton {
        return this._buttons.get(id);
    }

    public updateToolBarButton(button: MenuButton): void {
        this._buttons.set(button.id, button);
        this.fireOnToolBarButtonChanged();
    }

    public getToolBarButtons(): MenuButton[] {
        return Array.from(this._buttons.values());
    }

    public registerOnToolBarButtonChanged(callback: (buttons: MenuButton[]) => void): void {
        this._onToolBarButtonChanged.push(callback);
    }

    public fireOnToolBarButtonChanged(): void {
        const buttons = this.getToolBarButtons();
        this._onToolBarButtonChanged.forEach(callback => callback(buttons));
    }
}