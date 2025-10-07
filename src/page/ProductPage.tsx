import React, { useState } from "react";
import { FaStar, FaRegStar } from "react-icons/fa";
import { FiChevronDown } from "react-icons/fi";
import { useTranslation } from "react-i18next";
import { COOKIE_DB } from "../db/cookies";
import { formatPrice } from "../utils/common";

// Type helpers for safe indexing into COOKIE_DB
type CookieId = keyof typeof COOKIE_DB;
type Cookie = (typeof COOKIE_DB)[CookieId];

function isCookieId(id: string): id is CookieId {
  return id in COOKIE_DB;
}

const getProduct = (id: string): Cookie => {
  return isCookieId(id) ? COOKIE_DB[id] : COOKIE_DB["chocolate-chip"];
};

const ProductPage: React.FC = () => {
  const pathSegments = window.location.pathname.split("/");
  const id = pathSegments[pathSegments.length - 1]; // Gets the last segment

  const fallbackId = "chocolate-chip";
  const productId = id ?? fallbackId;
  const product = getProduct(productId);

  const { t } = useTranslation();
  // const [qty, setQty] = useState(1);
  // const increase = () => setQty((q) => Math.min(99, q + 1));
  // const decrease = () => setQty((q) => Math.max(1, q - 1));

  const priceFmt = formatPrice(product.price || 0);

  // Nutrition & Allergens fallback data (override via COOKIE_DB if available)
  const nutrition: { label: string; amount: string }[] = (product as any)
    .nutrition || [
    { label: "Calories", amount: "200 cal" },
    { label: "Fat", amount: "9 g" },
    { label: "Saturated Fat", amount: "5 g" },
    { label: "Trans Fat", amount: "0 g" },
    { label: "Cholesterol", amount: "25 mg" },
    { label: "Sodium", amount: "120 mg" },
    { label: "Carbohydrates", amount: "27 g" },
    { label: "Dietary Fiber", amount: "1 g" },
    { label: "Sugars", amount: "17 g" },
    { label: "Protein", amount: "3 g" },
  ];

  const allergens: { contains: string[]; mayContain: string[] } = (
    product as any
  ).allergens || {
    contains: ["Wheat (gluten)", "Milk", "Eggs", "Soy"],
    mayContain: ["Peanuts", "Tree nuts (pistachio, almond)"],
  };
  console.log("Product ID:", product );
  return (
    <>
      <section
        className="relative min-h-screen pb-20 sm:pb-0 pt-12 w-full bg-[var(--bg)]"
        style={{ "--bg": product.color } as React.CSSProperties}
      >
        {/* warm cookie-brown */}
        {/* content grid */}
        <div className="mx-auto h-fit max-w-7xl flex flex-col sm:flex-row items-center gap-10 px-6 py-14 md:grid-cols-12 md:py-24">
          {/* Left: Giant cookie image */}
          <div className="flex justify-center flex-1">
            <img
              src={product.image}
              alt="Milk chocolate chip cookie"
              className="w-full md:w-[560px] md:h-[560px] object-contain drop-shadow-xl"
            />
          </div>

          {/* Right: Details */}
          <div className="flex-1">
            {/* top row: badge + price */}
            <div className="mb-2 flex items-center justify-between">
              <p className="font-semibold text-black/80">
                {t("productPage.servedWarm")}
              </p>
            </div>

            <h1 className="text-4xl font-extrabold leading-[1.1] text-black md:text-5xl lg:text-6xl">
              {t(`${product.id}.name`)}
            </h1>

            <p className="text-4xl font-extrabold text-white my-2">
              {priceFmt}
            </p>

            <p className="mt-4 max-w-xl text-lg leading-relaxed text-black/80">
              {t(`${product.id}.desc`)}
            </p>

            {/* stock status */}
            {/* <div className="mt-4 flex items-center gap-2 text-green-600">
                        <span className="relative inline-flex h-4 w-4">
                          <span className="absolute inline-flex h-4 w-4 rounded-full bg-green-500/30"></span>
                          <span className="relative inline-flex h-3 w-3 rounded-full bg-green-500 ring-2 ring-green-300"></span>
                        </span>
                        <span className="font-medium">{inStock ? t("productPage.inStock", "In stock") : t("productPage.outOfStock", "Out of stock")}</span>
                      </div> */}

            {/* CTA row */}
            <div className="mt-6 flex w-full flex-col items-stretch gap-3 sm:flex-row sm:items-center">
              {/* quantity stepper */}
              {/* <div className="flex h-14 w-full select-none items-center justify-between rounded-full border-2 border-black/20 px-5 sm:w-[220px]">
                <button
                  type="button"
                  aria-label="Decrease quantity"
                  onClick={decrease}
                  className="text-2xl leading-none"
                >
                  &minus;
                </button>
                <span className="tabular-nums text-lg">{qty}</span>
                <button
                  type="button"
                  aria-label="Increase quantity"
                  onClick={increase}
                  className="text-2xl leading-none"
                >
                  +
                </button>
              </div> */}

              {/* add to cart */}
              <button className="inline-flex h-14 items-center justify-center rounded-full bg-black px-10 text-base font-semibold text-white shadow transition hover:opacity-90">
               
          <a href="https://www.instagram.com/lowkie_cookie" 
          target="_blank"
          rel="noreferrer"
          aria-label="Instagram"
          > {t("productPage.addToCart", "Add To Cart")}</a>
              </button>
            </div>

            {/* perks / order info */}
            {/* <div className="mt-8 flex flex-wrap items-center gap-x-10 gap-y-4 text-black">
                        <div className="flex items-center gap-3 text-lg">
                          <FiBox className="h-6 w-6" />
                          <span>
                            {t("productPage.freeShipPrefix", "Orders over")}
                            &nbsp;<span className="font-semibold">$150</span>&nbsp;
                            {t("productPage.freeShipSuffix", "ship free")}
                          </span>
                        </div>
                        <div className="flex items-center gap-3 text-lg">
                          <FiDollarSign className="h-6 w-6" />
                          <span>{t("productPage.earnPoints", "Earn loyalty points")}</span>
                        </div>
                      </div> */}

            {/* Rating row */}
            <div className="mt-6 flex flex-wrap items-center gap-3 text-sm text-black">
              <div className="flex items-center gap-2 text-xl">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaRegStar />
              </div>
              <span className="ml-2 font-semibold">4.56 avg rating</span>
              <span className="opacity-50">|</span>
              <span className="opacity-80">626,951 reviews</span>
            </div>
          </div>
        </div>

        {/* Bottom wave separator */}
        <svg
          className="pointer-events-none absolute bottom-0 left-0 h-[180px] w-full"
          viewBox="0 0 1440 220"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <path
            fill="#ffffff"
            d="M0,120 C240,220 480,40 720,120 C960,200 1200,60 1440,140 L1440,220 L0,220 Z"
          />
        </svg>
      </section>
      <section className="bg-white py-12">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-6 md:grid-cols-2 items-start">
            {/* Nutrition board */}
            <details
              open
              className="group self-start rounded-2xl border border-gray-200 bg-white shadow-sm"
            >
              <summary className="flex cursor-pointer items-center justify-between px-6 py-5">
                <h3 className="text-2xl font-semibold">
                  {t("productPage.nutriInfo")}
                </h3>
                <FiChevronDown className="h-5 w-5 text-gray-500 transition-transform group-open:rotate-180" />
              </summary>
              <div className="px-6 pb-6">
                <table className="w-full text-left">
                  <thead className="sr-only">
                    <tr>
                      <th>{t("productPage.nutrient")}</th>
                      <th>{t("productPage.amount")}</th>
                    </tr>
                  </thead>
                  <tbody>
                    {nutrition.map((row) => (
                      <tr key={row.label} className="border-t border-gray-200">
                        <td className="py-3 pr-4 font-medium text-gray-900">
                          {row.label}
                        </td>
                        <td className="py-3 text-gray-800">{row.amount}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                <p className="mt-4 text-sm text-gray-500">
                  {t("productPage.nutriDisclaimer")}
                </p>
              </div>
            </details>

            {/* Allergens board */}
            <details
              open
              className="group self-start rounded-2xl border border-gray-200 bg-white shadow-sm"
            >
              <summary className="flex cursor-pointer items-center justify-between px-6 py-5">
                <h3 className="text-2xl font-semibold">
                  {t("productPage.allergen")}
                </h3>
                <FiChevronDown className="h-5 w-5 text-gray-500 transition-transform group-open:rotate-180" />
              </summary>
              <div className="px-6 pb-6">
                <div className="mb-5">
                  <h4 className="mb-2 font-semibold text-gray-900">
                    {t("productPage.contain")}
                  </h4>
                  <ul className="list-disc pl-5 text-gray-800">
                    {allergens.contains.map((a) => (
                      <li key={a}>{a}</li>
                    ))}
                  </ul>
                </div>
                <div className="mb-5">
                  <h4 className="mb-2 font-semibold text-gray-900">
                    {t("productPage.mayContain")}
                  </h4>
                  <ul className="list-disc pl-5 text-gray-800">
                    {allergens.mayContain.map((a) => (
                      <li key={a}>{a}</li>
                    ))}
                  </ul>
                </div>
                <p className="text-sm text-gray-500">
                  {t("productPage.allergenDisclaimer")}
                </p>
              </div>
            </details>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProductPage;
