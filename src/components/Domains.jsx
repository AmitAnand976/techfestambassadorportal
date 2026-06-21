import { CheckCircle2 } from "lucide-react";
import { pricingOptions } from "../constants";

const Pricing = () => {
  return (
    <div className="mt-20">
      <h2 className="text-3xl sm:text-5xl lg:text-6xl text-center my-8 tracking-wide">
        Explore Domains
      </h2>
      
      <div className="flex flex-wrap" >
        {pricingOptions.map((option, index) => (
          <div key={index} className="w-full h-full  sm:w-1/2 lg:w-1/3 p-2" >
            <div className=" w-full  h-full object-cover border border-neutral-700 rounded-xl">
              
              <a href="#">
                           
                <img
                  className=" w-full h-auto object-contain min-h-[180px] max-h-[180px] border border-pink-900"
                  src={option.image}
                  alt=""
                  id="pf"
                  width="400px"
                  height="300px" loading="lazy"
                /> 
                <p className="text-4xl  font-bold text-left">
                {option.title}  
             </p>
             
              
              
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pricing;
