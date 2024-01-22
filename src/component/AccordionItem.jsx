import { useState } from "react";

const AccordionItem = ({ title, text, num }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className={`item ${isOpen ? "open" : ""}`} onClick={toggleOpen}>
      <p className="number">{num < 10 ? `0${num + 1}` : num}</p>
      <p className="title">{title}</p>
      <p className="icon">{isOpen ? "-" : "+"}</p>
      {isOpen ? <div className="content-box">{text}</div> : ""}
    </div>
  );
};

export default AccordionItem;
