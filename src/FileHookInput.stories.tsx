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

export const SingleFile = Template.bind({});

SingleFile.args = {
    ...SingleFile.args,
    name: "test",
    multiple: false,
};

export const MiltipleFiles = Template.bind({});

MiltipleFiles.args = {
    ...SingleFile.args,
    name: "test",
    multiple: true,
};

export const AcceptsPng = Template.bind({});

AcceptsPng.args = {
    ...AcceptsPng.args,
    name: "test",
    accept: ".png",
};

export const CustomCallback = Template.bind({});

CustomCallback.args = {
    ...CustomCallback.args,
    name: "test",
    multiple: false,
    callback: (files) => files[0].base64,
};
