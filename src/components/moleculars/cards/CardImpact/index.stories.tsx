import { ComponentStory, ComponentMeta } from "@storybook/react";
import CardImpact, { Props } from ".";

export default {
  title: "CardImpact",
  component: CardImpact,
} as ComponentMeta<typeof CardImpact>;

const Template: ComponentStory<typeof CardImpact> = function (args: Props) {
  return <CardImpact {...args} />;
};

export const Default = Template.bind({});

Default.args = {
  logo: "https://picsum.photos/id/237/200/300",
  image: "https://picsum.photos/id/237/200/300",
  title: "Nonprofit",
  data: "$50",
  label: "donated",
  description: "donated money",
};
