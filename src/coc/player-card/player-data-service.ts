import { Police } from './../models/profession';
import Player from "../models/player";
import { Sex } from "../../base/models/sex";

export default class PlayerDataService {
    public static token: string = 'coc.player.service';

    private _selected: Set<number> = new Set<number>();

    private _onSelectionChanged: Array<(selectedItems: number[]) => void> = [];

    getPlayers(): Promise<Player[]> {
        return new Promise<Player[]>(resolve => {
            let players: Player[] = [];
            for (let i = 0; i < 10; ++i) {
                let player = new Player();
                player.id = i;
                player.name = 'sans';
                player.sex = Sex.MALE;
                player.avtarUrl = '../resources/default-player-avtar.jpg';
                player.profession = new Police();
                players.push(player);
            }
            resolve(players);
        });
    }

    public revertSelect(id: number): void {
        if (!this._selected.has(id)) {
            this._selected.add(id);
        } else {
            this._selected.delete(id);
        }
        this.fireOnSelectionChanged();
    }

    public hasSelected(id: number): boolean {
        return this._selected.has(id);
    }

    public hasSelection(): boolean {
        return this._selected.size !== 0;
    }

    public getSelected(): number[] {
        return Array.from(this._selected.values());
    }

    public registerOnSelectionChanged(callback: (selectedItems: number[])=> void) {
        this._onSelectionChanged.push(callback);
    }

    public fireOnSelectionChanged(): void {
        this._onSelectionChanged.forEach(callback => callback(this.getSelected()));
    }
}