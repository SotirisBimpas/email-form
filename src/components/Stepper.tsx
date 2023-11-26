type StepProps = { number: number; text: string; active: boolean };

function Step({ number, text, active }: StepProps) {
  return (
    <div className="flex items-center gap-2 w-40">
      <div
        className={`${
          active ? "bg-blue-600 text-white" : "bg-gray-300 text-gray-400"
        } h-8 w-8 rounded-full flex items-center justify-center`}
      >
        {number}
      </div>
      <div>{text}</div>
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
  return (
    <div className="flex items-center w-96">
      {Object.keys(steps).map((step, index) => {
        const active = activeStep === step;
        return <Step key={index} number={index} text={step} active={active} />;
      })}
    </div>
  );
}
