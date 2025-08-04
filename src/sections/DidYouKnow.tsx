import React from "react";
import { useTranslation } from "react-i18next";

interface FactCard {
  id: number;
  img: string;
  key: string;
}

const facts: FactCard[] = [
  { id: 1, img: "/facts/sugar-cookie.webp", key: "did.sugar" },
  { id: 2, img: "/facts/cookie-egg.webp", key: "did.low_protein" },
//   { id: 3, img: "/facts/preservatives.png", key: "did.preservatives" },
];

export default function DidYouKnow() {
  const { t } = useTranslation();

  return (
    <section className="max-w-7xl min-h-screen mx-auto py-16 px-4 sm:px-8">
      <h2 className="text-3xl sm:text-4xl font-extrabold text-center text-crimson mb-12 uppercase">
        {t("did.title")}
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
        {facts.map((fact) => (
          <div
            key={fact.id}
            className="rounded-3xl overflow-hidden shadow-lg bg-vanilla flex flex-col"
          >
            <div className="w-full h-72 overflow-hidden flex items-center justify-center bg-strawberry">
              <img
                src={fact.img}
                alt={t(fact.key)}
                className="object-cover w-full h-full object-bottom"
              />
            </div>

            <div className="p-6 flex-1 flex flex-col justify-between">
              <h3 className="text-6xl font-black text-crimson mb-4">
                {fact.id}.
              </h3>
              <p className="text-crimson text-base">{t(fact.key)}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
