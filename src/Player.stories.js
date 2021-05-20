import React from 'react'

import Player from './Player'

export default {
  title: 'Player',
  component: Player,
}

const Template = args => <Player {...args} />

export const DefaultPlayer = Template.bind({})
DefaultPlayer.args = {
  name: 'default',
  score: 20,
}

export const OtherPlayer = Template.bind({})
OtherPlayer.args = {
  name: 'Mel Grosser',
  score: 100,
}
