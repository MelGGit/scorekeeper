import React from 'react'
import HistoryEntry from './HistoryEntry'

export default {
  title: 'HistoryEntry',
  component: HistoryEntry,
}

const Template = args => <HistoryEntry {...args} />

export const DefaultHistoryEntry = Template.bind({})
DefaultHistoryEntry.args = {
  text: 'Carcassone',
  playerOne: { name: 'John', score: 100 },
  playerTwo: { name: 'Jane', score: 200 },
  disabled: true,
}
