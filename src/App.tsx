import { useState } from "react";
import Card from "./components/Card";
import Stepper from "./components/Stepper";
import EmailForm from "./components/EmailForm";
import logo from "./assets/logo.svg";

const steps = { email: "Enter email", code: "Verify with code" };

function App() {
  const [activeStep, setActiveStep] = useState<"email" | "code">("email");
  return (
    <div className="bg-gray-500  h-screen flex flex-col justify-center items-center bg-[url('./assets/bg.png')] bg-cover bg-no-repeat">
      <Card
        styles={
          "w-4/5 max-w-xl flex flex-col items-center justify-center border-8 border-white box-border p-10 bg-opacity-80 backdrop-blur-xl"
        }
      >
        <img src={logo} alt="logo" className="mb-10" />

        <p className="text-xl font-bold mb-4">
          The Universal data management platform
        </p>
        <p className="mb-14">
          Manage any data as multi-dimensional arrays and access with any tool
          at global scale.
        </p>
        <Card
          styles={
            "w-4/5 max-w-xl px-6 py-7 flex flex-col items-start justify-start items-start"
          }
        >
          <h2 className="text-xl font-bold mb-7">Sing in to TileDB Cloud</h2>
          <Stepper steps={steps} activeStep={activeStep} />
          <hr className="mb-6 mt-4 w-full" />
          {activeStep === "email" ? (
            <EmailForm onSubmit={() => setActiveStep("code")} />
          ) : null}
        </Card>
      </Card>
    </div>
  );
}

export default App;
