import { UseFormRegister, FieldValues } from "react-hook-form";

const Input = (props: {
  id: string;
  value?: string;
  type?: string;
  placeholder?: string;
  register?: UseFormRegister<FieldValues>;
}) => {
  const inputTypeClassnames =
    props.type === "submit" ? "bg-slate-300 text-slate-00" : "text-slate-300";
  const classNames = `${inputTypeClassnames} border border-slate-300 rounded-md h-11 p-3`;
  if (props.type !== "submit" && props.register)
    return (
      <input
        id={props.id}
        {...props?.register(props.id)}
        className={classNames}
      />
    );
  return <input {...props} className={classNames} />;
};

export default Input;
