import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { FileHookInput } from "./FileHookInput";

export default {
    title: "FileHookInput",
    component: FileHookInput,
} as ComponentMeta<typeof FileHookInput>;

const Template: ComponentStory<typeof FileHookInput> = (args) => (
    <FileHookInput {...args} />
);

export const Primary = Template.bind({});
