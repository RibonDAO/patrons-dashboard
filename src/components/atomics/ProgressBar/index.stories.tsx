import { ComponentStory, ComponentMeta } from "@storybook/react";
import { theme } from "@ribon.io/shared/styles";
import ProgressBar, { Props } from ".";

export default {
  title: "ProgressBar",
  component: ProgressBar,
} as ComponentMeta<typeof ProgressBar>;

const Template: ComponentStory<typeof ProgressBar> = function (args: Props) {
  return <ProgressBar {...args} />;
};

export const Default = Template.bind({});
export const WithText = Template.bind({});

Default.args = {
  color: theme.colors.brand.primary[500],
  backgroundColor: theme.colors.neutral[100],
  value: 50,
  max: 100,
  label: "50%",
};
