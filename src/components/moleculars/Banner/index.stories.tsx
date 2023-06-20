import { theme } from "@ribon.io/shared/styles";
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
  title: {
    text: "User Support",
    color: theme.colors.neutral[900],
    size: "medium",
  },
  text:"Let's talk about questions, ideas, refunds or anything else.",
  cardBackground: "https://picsum.photos/200/300",
  icon: {
    name: "support_agent",
    withCircle: true,
    color: theme.colors.neutral[900],
  },
};
