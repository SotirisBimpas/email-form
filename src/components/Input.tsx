import { UseFormRegister, FieldValues } from "react-hook-form";
import InputError from "./InputError";
import { tv } from "tailwind-variants";

const input = tv({
  slots: {
    container: "flex flex-col items-start gap-1 w-full",
    text: "w-full border border-slate-300 rounded-md h-11 p-3 text-black focus:outline focus:outline-blue-500 focus:outline-2",
  },
  variants: {
    color: {
      error: { text: "border-red-600" },
      active: { text: "border-blue-600" },
      submit: { text: "border-blue-600 bg-blue-600 text-white" },
      submitDisabled: { text: "border-gray-400 bg-gray-400 text-white" },
      otp: { container: "w-20 ", text: "h-20 rounded-xl border-2 text-center" },
      otpError: {
        container: "w-20 ",
        text: "h-20 rounded-xl border-2 border-red-600 text-center",
      },
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
  otp?: boolean;
  maxLength?: number;
  disabled?: boolean;
  onChange?: () => void;
  onKeyDown?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  register?: UseFormRegister<FieldValues>;
}) => {
  const { text, container } = input({
    color:
      props.type === "submit" && props.disabled
        ? "submitDisabled"
        : props.type === "submit"
        ? "submit"
        : props.error && props.otp
        ? "otpError"
        : props.otp
        ? "otp"
        : props.error
        ? "error"
        : undefined,
  });
  if (props.type !== "submit" && props.register)
    return (
      <div className={container()}>
        {props.label ? <label htmlFor={props.id}>{props.label}</label> : null}
        <input
          id={props.id}
          onKeyDown={(e) => props.onKeyDown?.(e)}
          placeholder={props.placeholder}
          maxLength={props.maxLength}
          {...props?.register(props.id)}
          className={text()}
        />
        {props.error && !props.otp ? <InputError error={props.error} /> : null}
      </div>
    );
  return <input {...props} className={text()} disabled={props.disabled} />;
};

export default Input;
