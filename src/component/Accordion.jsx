import faqs from "../data/data";
import AccordionItem from "./AccordionItem";

const Accordion = () => {
  return (
    <div className="accordion">
      {faqs.map((el, i) => (
        <AccordionItem {...el} key={el.title} num={i} />
      ))}
    </div>
  );
};

export default Accordion;
