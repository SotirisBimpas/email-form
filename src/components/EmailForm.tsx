import Input from "./Input";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

const validationSchema = z.object({
  email: z.string().email("This not a valid email address"),
});

export default function Form({ onSubmit }: { onSubmit: () => void }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(validationSchema),
  });
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
      <Input
        id="email"
        register={register}
        placeholder="Enter your email"
        error={errors.email?.message as string}
        label="Label"
      />
      <Input id="submit" type="submit" value="Next" />
    </form>
  );
}
