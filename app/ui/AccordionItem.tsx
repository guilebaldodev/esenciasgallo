'use client'
import { useState } from "react";

type Item = {
  question: string;
  answer: string;
};

interface AccordionItemProps {
  item: Item;
}

const AccordionItem = ({ item }: AccordionItemProps) => {
  const [isClicked, setIsClicked] = useState(false);

  const toggleFaq = () => {
    setIsClicked(!isClicked);
  };

  return (
    <div className="faq" onClick={toggleFaq}>
      <div className="title">
        <h3>{item.question}</h3>
        {isClicked ? (
          <span className="accordion-plus">-</span>
        ) : (
          <span className="accordion-plus">+</span>
        )}
      </div>

      <div className={`content ${isClicked ? 'show' : ''}`}>
        <p>{item.answer}</p>
      </div>
    </div>
  );
};

export default AccordionItem;