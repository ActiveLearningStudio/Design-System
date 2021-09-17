/*eslint-disable*/
import React from "react";
import Headings from "./headings";

export default {
  title: "Typography/Headings",
  component: Headings,
  
};

const Template = (args) => <Headings {...args} />;

export const HeadingsProps = Template.bind({});

HeadingsProps.args = {
  headingType: 'h1',
  text: 'Shaping The future of Learning',
  color: '',
  size: '',
  className: '',
  italic: false,
  weight: '',
  target: '',
  url: '',
};
