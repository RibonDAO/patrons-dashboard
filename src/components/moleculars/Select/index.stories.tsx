import { ComponentStory, ComponentMeta } from "@storybook/react";
import Select, { Props } from ".";

export default {
  text: "Select",
  component: Select,
} as ComponentMeta<typeof Select>;

const Template: ComponentStory<typeof Select> = function (args: Props) {
  return (
    <div style={{ maxWidth: 360 }}>
      <Select {...args} />
    </div>
  );
};

export const Default = Template.bind({});

Default.args = {
  name: "select",
  values: ["first", "second", "third"],
  valueText: (value) => value,
  placeholder: "placeholder",
};
