import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from "react-i18next";

const QASection: React.FC = () => {
  const { t } = useTranslation();

  const questions = [
    {
      question: t("qa.q1.question"),
      answer: t("qa.q1.answer"),
    },
    {
      question: t("qa.q2.question"),
      answer: t("qa.q2.answer"),
    },
    {
      question: t("qa.q3.question"),
      answer: t("qa.q3.answer"),
    },
    {
      question: t("qa.q4.question"),
      answer: t("qa.q4.answer"),
    },
    {
      question: t("qa.q5.question"),
      answer: t("qa.q5.answer"),
    },
    {
      question: t("qa.q6.question"),
      answer: t("qa.q6.answer"),
    },
  ];

  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleIndex = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="relative bg-light text-white py-24">
      <div className="flex flex-col sm:flex-row max-w-7xl mx-auto px-4 py-12 gap-2 sm:gap-16">
        <div className="flex flex-col flex-1 text-4xl sm:text-6xl font-extrabold">
          <h2 className="text-black">{t("qa.title")}</h2>
          <h1 className="text-crimson">{t("qa.subtitle")}</h1>
        </div>
        <div className="flex flex-col flex-2 gap-4">
          {questions.map((item, index) => (
            <div
              key={index}
              className="border-2 border-crimson text-crimson rounded-xl p-4"
            >
              <div
                onClick={() => toggleIndex(index)}
                className="flex justify-between items-center cursor-pointer font-bold sm:text-2xl"
              >
                {item.question}
                <motion.span
                  initial={false}
                  animate={{ rotate: activeIndex === index ? 45 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="ml-2 text-xl"
                >
                  +
                </motion.span>
              </div>
              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div style={{ marginTop: "0.5rem" }}>{item.answer}</div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default QASection;
