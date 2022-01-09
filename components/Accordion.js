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
      className="flex items-center px-4 bg-gray-200 hover:bg-slate-100 bg-opacity-30 backdrop-filter backdrop-blur-lg py-3 cursor-pointer rounded-lg ring-2 ring-gray-600 hover:ring-purple-600 mb-1">
        <h1 className="text-lg lg:text-2xl font-medium  text-[#333333] hover:text-slate-600 flex-1">{question}</h1>
        <span className="text-xl lg:text-2xl mx-4  text-[#333333] border-white rounded-full p-2">{toggle ? <AiOutlineMinus /> : <AiOutlinePlus />}</span>
      </div>
      <p>{toggle && <p className="text-sm md:text-lg font-medium  text-[#333333] bg-gray-200 bg-opacity-30 backdrop-filter backdrop-blur-lg ring-2 ring-gray-600 hover:ring-purple-600 px-4 py-2 mb-2 md:mb-3 rounded-lg">{answer}</p>}</p>
    </section>
  );
};

export default Accordion;
