import { Attributes, Player } from "../types/game";


export async function getStaticPropsLive():Promise<Player[]> {
    const res = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/players`);
    const playersData = await res.json();
    return playersData.data;
}

export async function deletePlayerAPI(playerID:number):Promise<void> {
    const res = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/players/${playerID}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
        },
    });
    const playerData = await res.json();
    return playerData.data;
}

export async function createPlayerAPI(attributes:Attributes):Promise<Player> {
    const data = JSON.stringify({
        data: {
            "name": attributes.name,
            "level": attributes.level,
            "attack": attributes.attack
        }
    });
    const res = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/players`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: data,
    });
    const playerData = await res.json();
    return playerData.data;
}
  
export function updatePlayerAPI(playerID:number, attributes:Attributes):void {
    const data = JSON.stringify({
      data: {
        "level": attributes.level,
        "attack": attributes.attack,
      }
    });
  
    const res = fetch(`${process.env.NEXT_PUBLIC_HOST}/api/players/${playerID}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: data,
    })
}