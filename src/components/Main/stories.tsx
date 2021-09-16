import { Story, Meta } from '@storybook/react/types-6-0'
import Main from '.'

export default {
  title: 'Main',
  component: Main
  //   args: {
  //     title: 'Default',
  //     description: 'default'
  //   }
} as Meta

export const Default: Story = (args) => <Main {...args} />

export const Customized: Story = (args) => <Main {...args} />
Customized.args = {
  title: 'Customized title',
  description: 'Customized description'
}
