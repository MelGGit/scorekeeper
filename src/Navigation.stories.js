import React from 'react'
import Navigation from './Navigation'

export default {
  title: 'Navigation',
  component: Navigation,
}

const Template = args => <Navigation {...args} />

export const DefaultNavigation = Template.bind({})
DefaultNavigation.args = {
  currentPageId: 'play',
  pages: [
    { title: 'Play', id: 'play' },
    { title: 'History', id: 'history' },
  ],
}

export const ThreeNavigation = Template.bind({})
ThreeNavigation.args = {
  currentPageId: 'play',
  pages: [
    { title: 'Play', id: 'play' },
    { title: 'History', id: 'history' },
    { title: 'Something', id: 'something' },
  ],
}
