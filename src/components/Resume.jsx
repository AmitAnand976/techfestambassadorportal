import { CheckCircle2 } from "lucide-react";
import codeImg from "../assets/code.jpg";
import { checklistItems } from "../constants";

const Workflow = () => {
  return (
    <div className="mt-20">
      <h2 className="text-3xl sm:text-5xl lg:text-6xl text-center mt-6 tracking-wide">
        Build your{" "}
        <span className="bg-gradient-to-r from-pink-500 to-blue-800 text-transparent bg-clip-text">
          Resume
        </span>
      </h2>
      <div className="flex flex-wrap justify-center">
        <div className="p-2 w-22 lg:w-1/2">
          <img   className="my-10 mx-00  w-000   max-[500]:"  src={codeImg} alt="Coding" />
        </div>
        <div className="pt-12 w-full lg:w-1/2">
          {checklistItems.map((item, index) => (
            <div key={index} className="flex mb-12">
            
              <div>
                <h5 className="mt-1 mb-2 w-80 text-4xl">{item.title}</h5>
                <p className="text-md text-neutral-500">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Workflow;
