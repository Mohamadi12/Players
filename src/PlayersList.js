import React from 'react'
import Players from './Players'
import Player from './Player'

const PlayersList = () => {
  return (
    <div>
    <div className="players-list">
      {Players.map((player, index) => (
      <Player key={index} {...player} />
      ))}
    </div>
    </div>
  )
}

export default PlayersList
