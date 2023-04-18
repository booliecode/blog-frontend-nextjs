export interface Attributes {
    name: string;
    attack: number;
    level: number;
}
  
export interface Player {
    attributes: Attributes;
    id: number;
}

export interface Game {
    players: Array<Player>;
}