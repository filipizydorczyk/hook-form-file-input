Working with files while using react hook forms might be problematic because by default you will get **fakepath** which is not very usefull. This component will provide base64 string instead. If you use this component

```tsx
const { setValue, control, handleSubmit } = useForm();

return (
    <FileHookInput
        name="test"
        setValue={setValue}
        control={control}
        multiple={true}
    />
);
```

You will get `FileReresentation[]` as value fot this filed or just `FileReresentation` if `multiple` is `false`

```ts
export type FileReresentation = {
    name: string;
    size: number;
    type: string;
    base64: string;
};
```

You can also format value for this filed providing `callback` property. Fot example if you wanna get just base64 string of first selected file you might provide callback like this

```tsx
return (
    <FileHookInput
        name="test"
        className="test"
        setValue={setValue}
        control={control}
        multiple={false}
        callback={(files: FileReresentation) => files[0].base64}
    />
);
```

Also if you want to style this component to match your application you can use `className` and css to do some styling. If thats not enough you can always take the source code and implement ur own version of this compoment in your project.
You can see examples in storybook.
