import { ComponentStory, ComponentMeta } from "@storybook/react";
import Banner, { Props } from ".";

export default {
  title: "Banner",
  component: Banner,
} as ComponentMeta<typeof Banner>;

const Template: ComponentStory<typeof Banner> = function (args: Props) {
  return <Banner {...args} />;
};

export const Default = Template.bind({});

Default.args = {
  text: "Banner",
  cardBackground: "https://picsum.photos/200/300",
};
