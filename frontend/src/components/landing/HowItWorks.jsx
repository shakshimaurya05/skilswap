import StepCard from "./StepCard";
import steps from "./stepsData.js";
import "./HowItWorks.css";
const HowItWorks =() =>{
  return(
   <div className="how-it-works">
    <h2>How It Works</h2>
<div className="steps">
  {steps.map((step, index) => (
    <StepCard
      key={index}
      stepNumber ={index+1}
      icon={step.icon}  
      title={step.title}
      description={step.description}
    />
  ))}
</div>
</div>
  );
};

export default HowItWorks;







