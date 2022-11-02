import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { FileHookInput } from "./FileHookInput";
import { useForm } from "react-hook-form";

export default {
    title: "FileHookInput",
    component: FileHookInput,
} as ComponentMeta<typeof FileHookInput>;

const Template: ComponentStory<typeof FileHookInput> = (args) => {
    const { setValue, control, handleSubmit } = useForm();

    return (
        <>
            <FileHookInput {...args} setValue={setValue} control={control} />
            <br />
            <button
                type="submit"
                onClick={handleSubmit((data) => console.log(data))}
            >
                Submit
            </button>
        </>
    );
};

export const Primary = Template.bind({});

Primary.args = {
    ...Primary.args,
    name: "test",
    multiple: true,
};
