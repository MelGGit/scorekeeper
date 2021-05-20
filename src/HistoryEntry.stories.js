import React from 'react'
import HistoryEntry from './HistoryEntry'

export default {
  title: 'HistoryEntry',
  component: HistoryEntry,
}

const Template = args => <HistoryEntry {...args} />

export const DefaultHistoryEntry = Template.bind({})
DefaultHistoryEntry.args = {
  nameOfGame: 'Carcassone',
  players: [
    { name: 'John', score: 100 },
    { name: 'Jane', score: 200 },
  ],
  disabled: true,
}
