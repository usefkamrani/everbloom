import React from 'react';

interface FAQItem {
    question: string;
    answer: string;
}

interface FAQCardProps {
    faq: FAQItem;
}

const FAQCard: React.FC<FAQCardProps> = ({ faq }) => {
    return (
        <div className="h-auto border-1 border-border rounded-lg mb-2 p-4">
            <h3 className="text-xl mb-2">Q -  {faq.question}</h3>
            <p className="">A - {faq.answer}</p>
        </div>
    );
};

export default FAQCard;