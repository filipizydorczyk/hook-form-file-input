import React from "react";
import { Control, Controller, UseFormSetValue } from "react-hook-form";

type FileHookInputProps = {
    className?: string;
    multiple?: boolean;
    name: string;
    control: Control<any>;
    setValue: UseFormSetValue<any>;
};

type File = {
    name: string;
    size: number;
    type: string;
    base64: string;
};

export const FileHookInput = ({
    className,
    multiple = false,
    name,
    control,
    setValue,
}: FileHookInputProps) => {
    const fileChangeHandler: React.ChangeEventHandler<HTMLInputElement> = (
        data
    ) => {
        const reader = new FileReader();

        if (data.target.files && data.target.files[0]) {
            const file = data.target.files[0];

            reader.readAsDataURL(file);
            reader.onload = () => {
                const { name: fileName, size, type } = file;
                const result = reader.result;

                if (result && typeof result === "string") {
                    setValue(name, {
                        name: fileName,
                        size,
                        type,
                        base64: result.split(",").pop(),
                    } as File);
                }
            };
        }
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
                />
            )}
        />
    );
};
