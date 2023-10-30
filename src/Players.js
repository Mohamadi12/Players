import React from 'react';

const Players = () => {
  const players = [
    {
      name: "Lionel Messi",
      team: "Paris Saint-Germain",
      nationality: "Argentina",
      jerseyNumber: 30,
      age: 34,
      imageUrl: "https://cdn.vanguardngr.com/wp-content/uploads/2023/08/20230827_091803.jpg",
    },
    {
      name: "Cristiano Ronaldo",
      team: "Manchester United",
      nationality: "Portugal",
      jerseyNumber: 7,
      age: 37,
      imageUrl: "https://s.hs-data.com/bilder/spieler/gross/13029.jpg",
    },
    {
      name: "Neymar Jr.",
      team: "Paris Saint-Germain",
      nationality: "Brazil",
      jerseyNumber: 10,
      age: 30,
      imageUrl: "https://upload.wikimedia.org/wikipedia/commons/6/65/20180610_FIFA_Friendly_Match_Austria_vs._Brazil_Neymar_850_1705.jpg",
    },
    {
      name: "Kylian Mbappé",
      team: "Paris Saint-Germain",
      nationality: "France",
      jerseyNumber: 7,
      age: 23,
      imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b3/2022_FIFA_World_Cup_France_4%E2%80%931_Australia_-_%287%29_%28cropped%29.jpg/250px-2022_FIFA_World_Cup_France_4%E2%80%931_Australia_-_%287%29_%28cropped%29.jpg",
    },
  ];

  return (
    <div>
      {players.map((player, index) => (
        <div key={index}>
          <h2>{player.name}</h2>
          <p>Team: {player.team}</p>
          <p>Nationality: {player.nationality}</p>
          <p>Jersey Number: {player.jerseyNumber}</p>
          <p>Age: {player.age}</p>
          <img src={player.imageUrl} alt={player.name} />
        </div>
      ))}
    </div>
  );
};

export default Players;

