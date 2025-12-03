import { useState } from "react";
import Container from "../Container";

const FAQ = () => {
    const faqs = [
        {
            question: "1. Do I need any experience?",
            answer:
                " No, you don’t need any previous design experience. This course starts from the very basics. You’ll learn everything from color, layout, and typography. Our teachers make sure every student understands clearly. Anyone with creativity and interest can join.",
        },
        {
            question: "2. What is the class size and how many students per batch?",
            answer:
                "Yes, all class recordings are available after every class, so you can rewatch anytime.",
        },
        {
            question: "3. Do I need to bring my own laptop to the class?",
            answer:
                "Basic computer knowledge is enough. We guide you step by step from the beginning.",
        },
        {
            question: "4. Can I pay the course fee in installments",
            answer:
                "Yes, you will receive a professional certificate after completing the course.",
        },
        {
            question: "5. Will Creative IT Institute help me find jobs or clients",
            answer:
                "Yes, you will receive a professional certificate after completing the course.",
        },
    ];

    const [openIndex, setOpenIndex] = useState(null);

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };







    return (
        <Container>
            <div className="mt-[100px]">
                <h2 className="font-semibold text-[20px] leading-[150%] text-[#1F1E1E] py-3 pl-6 bg-[linear-gradient(118.27deg,rgba(78,84,200,0.1)_0%,rgba(205,208,255,0.1)_90.2%)] rounded-2xl border mb-2 border-[#cbc3dd]">
                    Frequently Asked Questions (FAQ)
                </h2>

                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            onClick={() => toggleFAQ(index)}
                            className="rounded-xl py-4 px-6 bg-[linear-gradient(122.33deg,rgba(143,148,251,0.05)_0%,rgba(78,84,200,0.05)_102.08%)] "
                        >
                            <div className="flex justify-between items-center">
                                <h3 className="font-semibold text-[16px] leading-[150%] text-[#342B27]">{faq.question}</h3>
                                <span className="text-xl font-bold w-5 h-5 flex items-center justify-center">
                                    {openIndex === index ? (
                        <img src="/images/Minus.png" alt="pic1" className="mb-1 m-auto  w-full" />
                                    ) : (
                        <img src="/images/Plus.png" alt="pic1" className="mb-1 m-auto  w-full" />
                                    )}
                                </span>

                            </div>

                            {openIndex === index && (
                                <p className="text-[16px] leading-[150%] text-[#342B27] py-4 border-t border-[#e0e3e8]"><span className="text-[#666BD0]">Answer :</span>{faq.answer}</p>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </Container>
    );
};

export default FAQ;
