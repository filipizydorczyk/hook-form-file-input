export type FileReresentation = {
    name: string;
    size: number;
    type: string;
    base64: string;
};

export const convert = (file: globalThis.File): Promise<FileReresentation> => {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();

        reader.readAsDataURL(file);
        reader.onload = () => {
            const { name: fileName, size, type } = file;
            const result = reader.result;

            if (result && typeof result === "string") {
                const base64String = result.split(",").pop();

                if (!!base64String) {
                    const response: FileReresentation = {
                        name: fileName,
                        size,
                        type,
                        base64: base64String,
                    };

                    resolve(response);
                }

                reject("Couldn't convert file to base64 string.");
            }

            reject("File reader couldn't convert this file.");
        };
    });
};
