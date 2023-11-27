import { useCallback } from "react";
import Input from "./Input";
import { UseFormReturn } from "react-hook-form";

const inputsArray = ["otp1", "otp2", "otp3", "otp4"];

export default function OTP({
  setFocus,
  register,
  setValue,
  error,
}: { error?: string } & Pick<
  UseFormReturn,
  "register" | "setValue" | "setFocus"
>) {
  const onKeyDown = useCallback(
    (e: React.KeyboardEvent<HTMLInputElement>, index: number) => {
      const {
        key,
        currentTarget: { value },
      } = e;
      e.preventDefault();
      if (key === "Tab") {
        setFocus(inputsArray[index + 1]);
      }
      if (key === "Backspace") {
        if (!value) setValue(inputsArray[index - 1], "");
        if (value) setValue(inputsArray[index], "");
        setFocus(inputsArray[index - 1]);
      }
      if (parseInt(key) >= 0 && parseInt(key) <= 9) {
        setValue(inputsArray[index], key);
        setFocus(inputsArray[index + 1]);
      }
    },
    [setFocus, setValue]
  );

  return (
    <div className="flex gap-2">
      {inputsArray.map((item, index) => (
        <Input
          key={item}
          register={register}
          id={item}
          maxLength={1}
          otp
          error={error}
          onKeyDown={(e) => {
            onKeyDown(e, index);
          }}
        />
      ))}
    </div>
  );
}
