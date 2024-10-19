import React, { useState } from 'react';

const FAQs = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="faqs p-8">
      <h2 className="text-4xl font-bold mb-6">Frequently Asked Questions</h2>
      <div className="faq-list">
        {[
          { question: "How can I register?", answer: "Click the 'Register Now' button at the top." },
          { question: "Are accommodations available?", answer: "Yes, accommodations are provided." },
        ].map((faq, index) => (
          <div key={index} className="faq-item border-b py-4">
            <h3 className="font-bold cursor-pointer" onClick={() => toggleFAQ(index)}>
              {faq.question}
            </h3>
            {activeIndex === index && <p className="mt-2">{faq.answer}</p>}
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQs;
