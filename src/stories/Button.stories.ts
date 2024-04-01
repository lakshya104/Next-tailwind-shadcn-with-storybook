import { StoryObj, Meta } from '@storybook/react';
import { Button } from './Button';

const meta: Meta<typeof Button> = {
  title: 'Example/Button',
  component: Button,
};

export default meta;

//create a “template” of how args map to rendering (from SB)
type Template = StoryObj<typeof Button>;

//created two variations of the button
export const Default:  Template = {
  args :{
    radius: 50,
    backgroundColor: '#ff8b8b',
    emoji: 'clap'
  },
};


export const Circle: Template = {
  args: {
    radius: 100,
    backgroundColor: 'blue',
    emoji: 'clap'
  },
};