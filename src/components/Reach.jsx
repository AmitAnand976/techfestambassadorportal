import { features } from "../constants";

const FeatureSection = () => {
  return (
    <div className="mt-20 max-h[60]  relative mt-20 border-b border-neutral-800 min-h-[800px]">
      <div className="text-center">
        
        <h2 className="text-3xl sm:text-5xl lg:text-6xl mt-10 lg:mt-20 tracking-wide">
          Our{" "}
          <span className="bg-gradient-to-r from-blue-500 to-blue-800 text-transparent bg-clip-text">
            Reach
          </span>
        </h2>
      </div>
      <div className="flex flex-wrap mt-10 lg:mt-20 relative">
        {features.map((feature, index) => (
          <div key={index} className="w-full sm:w-1/2 lg:w-1/3">
            <div className="flex">
              
              <div>
                <h5 className="mt-1 max-h-[240px] min-h-[240px] max-w-[300px]  p-5 rounded-4xl text-5xl bg-purple-800">{feature.text}
                <p className="text-md p-1 mb-0 text-4xl text-white-500">
                  {feature.description}
                </p></h5>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeatureSection;
