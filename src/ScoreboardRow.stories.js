import React from 'react'

import ScoreboardRow from './ScoreboardRow'

export default {
  title: 'ScoreboardRow',
  component: ScoreboardRow,
}

const Template = args => <ScoreboardRow {...args} />

export const DefaultScoreboardRow = Template.bind({})
DefaultScoreboardRow.args = {
  name: 'default',
  score: 20,
}

export const OtherScoreboardRow = Template.bind({})
OtherScoreboardRow.args = {
  name: 'Mel Grosser',
  score: 100,
}
