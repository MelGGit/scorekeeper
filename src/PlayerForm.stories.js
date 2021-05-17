import React from 'react'

import PlayerForm from './PlayerForm'

export default {
  title: 'PlayerForm',
  component: PlayerForm,
}

const Template = args => <PlayerForm {...args} />

export const DefaultForm = Template.bind({})
DefaultForm.args = {}
