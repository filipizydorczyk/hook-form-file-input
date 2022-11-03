import React from "react";
import { Control, Controller, UseFormSetValue } from "react-hook-form";
import {
    convert as convertToFileRepresentation,
    FileReresentation,
} from "./utils";

type FileHookInputProps = {
    className?: string;
    multiple?: boolean;
    accept?: string;
    callback?: FilesChangeCallback;
    name: string;
    control: Control<any>;
    setValue: UseFormSetValue<any>;
};

type FilesChangeEvent = React.ChangeEventHandler<HTMLInputElement>;
type FilesChangeCallback = (respresentations: FileReresentation[]) => any;

export const FileHookInput = ({
    className,
    multiple = false,
    name,
    control,
    setValue,
    accept,
    callback = (files) => (multiple ? files : files[0]),
}: FileHookInputProps) => {
    const fileChangeHandler: FilesChangeEvent = async (data) => {
        if (!data.target.files) {
            callback([]);
            return;
        }

        const files = await Promise.all(
            Array.from(data.target.files).map(convertToFileRepresentation)
        );

        const mappedFiles = callback(files);
        setValue(name, mappedFiles);
    };

    return (
        <Controller
            name={name}
            control={control}
            render={({ field: { onBlur, name, ref } }) => (
                <input
                    className={className}
                    name={name}
                    ref={ref}
                    onChange={fileChangeHandler}
                    onBlur={onBlur}
                    type="file"
                    multiple={multiple}
                    accept={accept}
                />
            )}
        />
    );
};
