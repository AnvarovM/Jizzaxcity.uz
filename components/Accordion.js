// react hooks
import { useState } from "react";

// react icons
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";

const Accordion = ({ question, answer }) => {
  // useState
  const [toggle, setToggle] = useState(false);

  return (
    <section className="space-y-2 md:space-y-3">
      <div 
      onClick={() => setToggle(!toggle)} 
      className="flex items-center px-4 bg-white bg-opacity-30 backdrop-filter backdrop-blur-lg py-3 cursor-pointer rounded-lg ring-2 ring-white mb-1">
        <h1 className="text-lg lg:text-2xl font-medium text-white hover:text-slate-200 flex-1">{question}</h1>
        <span className="text-xl lg:text-2xl mx-4 text-white border-white rounded-full p-2">{toggle ? <AiOutlineMinus /> : <AiOutlinePlus />}</span>
      </div>
      <p>{toggle && <p className="text-sm md:text-lg font-medium text-white bg-white bg-opacity-30 backdrop-filter backdrop-blur-lg ring-2 ring-white px-4 py-2 mb-2 md:mb-3 rounded-lg">{answer}</p>}</p>
    </section>
  );
};

export default Accordion;
