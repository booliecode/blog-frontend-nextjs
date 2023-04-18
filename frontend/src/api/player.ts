import { Attributes } from "../types/player";


export async function getStaticPropsLive() {
    const res = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/players`);
    const playersData = await res.json();
    return playersData.data;
  }
  
export async function getStaticProps() {
    // get data from external API
    const res = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/players`);
    const players = await res.json();
    console.log(players.data);
    return {
      props: {players: players.data},
    }
  }
  
  export async function updatePlayerAPI(player:number, attributes:Attributes) {
    const data = JSON.stringify({
      data: {
        "level": attributes.level,
        "attack": attributes.attack,
      }
    });
  
    const res = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/players/${player}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: data,
    })
  }