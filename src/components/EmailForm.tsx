import Input from "./Input";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useEffect } from "react";

const validationSchema = z.object({
  email: z.string().email("This not a valid email address"),
});

export default function Form({ onSubmit }: { onSubmit: () => void }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setFocus,
  } = useForm({
    resolver: zodResolver(validationSchema),
  });

  useEffect(() => {
    setFocus("email");
  }, [setFocus]);

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col gap-4 w-full"
    >
      <Input
        id="email"
        register={register}
        placeholder="Enter your email"
        error={errors.email?.message as string}
        label="Email"
      />
      <Input id="submit" type="submit" value="Next" />
    </form>
  );
}
