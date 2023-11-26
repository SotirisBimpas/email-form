import { useMemo } from "react";

type StepProps = { number: number; text: string; active: boolean };

function Step({ number, text, active }: StepProps) {
  return (
    <div className="flex items-center gap-2 w-40">
      <div
        className={`${
          active ? "bg-blue-600 text-white" : "bg-gray-300 text-gray-400"
        } text-xs h-8 w-8 rounded-full flex items-center justify-center`}
      >
        {number}
      </div>
      <div className={`${active ? "text-black" : "text-gray-400"} text-xs`}>
        {text}
      </div>
    </div>
  );
}

export default function Stepper({
  steps,
  activeStep,
}: {
  steps: Record<string, string>;
  activeStep: string;
}) {
  const activeStepIndex = useMemo(
    () => Object.keys(steps).findIndex((step) => step === activeStep),
    [activeStep, steps]
  );

  return (
    <div className="flex items-center w-96">
      {Object.keys(steps).map((step, index) => {
        return (
          <Step
            key={index}
            number={index + 1}
            text={steps[step]}
            active={index <= activeStepIndex}
          />
        );
      })}
    </div>
  );
}
