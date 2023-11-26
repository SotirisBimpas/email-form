import { UseFormRegister, FieldValues } from "react-hook-form";
import InputError from "./InputError";
import { tv } from "tailwind-variants";

const input = tv({
  slots: {
    text: "border border-slate-300 rounded-md h-11 p-3 text-black focus:outline focus:outline-blue-500 focus:outline-2",
  },
  variants: {
    color: {
      error: { text: "border-red-600" },
      active: { text: "border-blue-600" },
      submit: { text: "border-blue-600 bg-blue-600 text-white" },
    },
  },
});

const Input = (props: {
  id: string;
  value?: string;
  type?: string;
  placeholder?: string;
  label?: string;
  error?: string;
  register?: UseFormRegister<FieldValues>;
}) => {
  const { text } = input({
    color:
      props.type === "submit" ? "submit" : props.error ? "error" : undefined,
  });
  if (props.type !== "submit" && props.register)
    return (
      <div className="flex flex-col gap-1">
        <label htmlFor={props.id}>{props.label}</label>
        <input
          id={props.id}
          placeholder={props.placeholder}
          {...props?.register(props.id)}
          className={text()}
        />
        {props.error ? <InputError error={props.error} /> : null}
      </div>
    );
  return <input {...props} className={text()} />;
};

export default Input;
