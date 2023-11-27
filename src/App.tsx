import { useState } from "react";
import Card from "./components/Card";
import Stepper from "./components/Stepper";
import EmailForm from "./components/EmailForm";
import logo from "./assets/logo.svg";
import CodeForm from "./components/CodeForm";

const steps = { email: "Enter email", code: "Verify with code" };

function App() {
  const [activeStep, setActiveStep] = useState<"email" | "code" | "complete">(
    "code"
  );
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
        {activeStep !== "complete" ? (
          <Card
            styles={
              "w-4/5 max-w-xl px-6 py-7 flex flex-col items-start justify-start items-start"
            }
          >
            <div className="flex gap-4 items-center justify-center mb-7">
              {activeStep === "code" ? (
                <div
                  className="border border-gray-300 rounded-md w-10 h-10 flex items-center justify-center"
                  onClick={() => setActiveStep("email")}
                >
                  {"<"}
                </div>
              ) : null}
              <h2 className="text-xl font-bold">Sing in to TileDB Cloud</h2>
            </div>
            <Stepper steps={steps} activeStep={activeStep} />
            <hr className="mb-6 mt-4 w-full" />
            {activeStep === "email" ? (
              <EmailForm onSubmit={() => setActiveStep("code")} />
            ) : null}
            {activeStep === "code" ? (
              <CodeForm callback={() => setActiveStep("complete")} />
            ) : null}
          </Card>
        ) : null}
        {activeStep === "complete" ? (
          <Card styles="w-full p-6">
            <p className="text-xl font-bold mb-7">Congratulations</p>
            <p>Welcome to TileDB Cloud</p>
          </Card>
        ) : null}
      </Card>
    </div>
  );
}

export default App;
