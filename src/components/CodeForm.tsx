import { useEffect, useState } from "react";
import OTP from "./OTP";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import Input from "./Input";
import InputError from "./InputError";

const mockAcceptableOtp = "9876";

export default function CodeForm({ callback }: { callback: () => void }) {
  const { register, handleSubmit, setFocus, setValue, watch, reset } = useForm(
    {}
  );
  const [showError, setShowError] = useState<boolean>(false);

  useEffect(() => {
    setFocus("otp1");
  }, [setFocus]);

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    if (Object.values(data).join("") === mockAcceptableOtp) {
      setShowError(false);
      callback();
    } else {
      setShowError(true);
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col gap-4 w-full"
    >
      <OTP
        register={register}
        setFocus={setFocus}
        setValue={setValue}
        error={showError ? "The code is wrong. Please try again." : undefined}
      />
      {showError && (
        <>
          <InputError error="The code is wrong. Please try again." />
          <button
            className="border border-slate-300 rounded-md h-11 m-0 p-0"
            onClick={() => {
              setFocus("otp1");
              reset();
              setShowError(false);
            }}
          >
            Clear Code
          </button>
        </>
      )}
      <Input
        type="submit"
        id="submit-otp"
        disabled={
          !(
            !!watch("otp1") &&
            !!watch("otp2") &&
            !!watch("otp3") &&
            !!watch("otp4")
          )
        }
      />
    </form>
  );
}
