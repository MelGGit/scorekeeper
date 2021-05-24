import React from 'react'
import GamePage from './GamePage'

export default {
  title: 'Pages/GamePage',
  component: GamePage,
}

const Template = args => <GamePage {...args} />

export const DefaultGamePage = Template.bind({})
DefaultGamePage.args = {
  nameOfGame: 'Carcassonne',
  players: [
    { name: 'Tim', score: 0 },
    { name: 'Tom', score: 0 },
  ],
}
