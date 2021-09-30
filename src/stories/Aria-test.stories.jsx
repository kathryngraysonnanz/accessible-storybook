import React from 'react';

import { Aria } from './Aria-test';

export default {
  title: 'Example/Aria',
  component: Aria,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

const Template = (args) => <Aria {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  label: 'Aria',
};
