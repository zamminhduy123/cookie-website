import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

// Mapped authors in the order shown in your image.
// There are 16 names, so the 17th review loops back to the first name.

const reviews = [
  { id: 1,  content: "“Bánh ngon thơm mềm nhưng cần nhỏ lại, mỏng hơn cho đỡ ngán.”", author: "— Minh Tùng" },
  { id: 2,  content: "“Bánh ngon thơm mềm nhưng cần nhỏ lại, mỏng hơn cho đỡ ngán.”", author: "— Thảo Nguyên" },
  { id: 3,  content: "“Ngon, ngọt đủ, thêm mùi bơ hơn, thích vụ có protein.”", author: "— Minh Duy" },
  { id: 4,  content: "“Vị oke, thích ăn lạnh hơn.”", author: "— Trình" },
  { id: 5,  content: "“Muốn mỏng hơn nữa, mềm ướt hơn, thấy ngọt, thích hạnh nhân hơn hạt điều.”", author: "— Kiệt" },
  { id: 6,  content: "“Ngọt nhiều, thích thêm marshmallow hơn, ăn lạnh thấy được.”", author: "— Như Vy" },
  { id: 7,  content: "“Thích ăn nóng giòn hơn, thấy ngọt.”", author: "— Tài" },
  { id: 8,  content: "“Ngọt, thích ăn lạnh hơn.”", author: "— Thư" },
  { id: 9,  content: "“Ngon, thơm.”", author: "— Trâm Anh" },
  { id: 10, content: "“Ngon thơm, thích ăn cả 2 kiểu, ko thích hạt điều.”", author: "— Thơ" },
  { id: 11, content: "“Thích nướng lại hơn, bánh ok ngọt đủ rồi.”", author: "— Thanh Ngân" },
  { id: 12, content: "“Ngon, thích nướng lại hơn, thấy ngọt ok.”", author: "— Nghi" },
  { id: 13, content: "“Vị oke, nhưng cần cải thiện phần texture.”", author: "— Long" },
  { id: 14, content: "“Ngon thơm.”", author: "— em của Hà" },
  { id: 15, content: "“Bánh cực kỳ ngon, nhưng vẫn có 1 chút mùi bột do bánh ít đường quá”", author: "— AChou" },
  { id: 16, content: "“Good taste, good visual, kinda flour smell (this could be the smell of whey protein) but not important.”", author: "— WooCHin" },
  { id: 17, content: "“- Bánh quá nhỏ; socola không đều; bị khô; hạt óc chó hơi dầu; để hơn 12 tiếng ăn vẫn ok.”", author: "— Minh Tùng" }
];

export default function ReviewSection() {
  const { t } = useTranslation();

  return (
    <section className="py-20 bg-white overflow-hidden min-h-[70vh]" id="reviews" >
      <motion.h2
        className="text-3xl sm:text-4xl font-extrabold text-center text-crimson mb-4"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.2 }}
      >
        {t("review.title")}
      </motion.h2>
      <motion.p className="text-center text-crimson max-w-2xl mx-auto mb-12"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
        viewport={{ once: true, amount: 0.2 }}
      >
        {t("review.desc")}
      </motion.p>

      <div className="relative w-full overflow-hidden">
        <div className="flex animate-marquee-left space-x-6 px-4 py-4 w-max">
          {[...reviews, ...reviews].map((review, index) => (
            <motion.div
              key={`${review.id}-${index}`}
              className="flex-shrink-0 w-[280px] sm:w-[320px] bg-vanilla p-6 rounded-2xl shadow"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: 1.5 + (index * 0.2), duration: 0.6, ease: "easeOut" }}
            >
              <p className="text-base text-crimson font-medium mb-4">
                {review.content}
              </p>
              <div className="text-sm font-semibold text-choco">{review.author}</div>
            </motion.div>
          ))}
        </div>
        <div className="flex animate-marquee-right space-x-6 px-4 py-4 w-max">
          {[...reviews, ...reviews].map((review, index) => (  
            <motion.div
              key={`${review.id}-2-${index}`}
              className="flex-shrink-0 w-[280px] sm:w-[320px] bg-vanilla p-6 rounded-2xl shadow"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: (index * 0.1), duration: 0.6, ease: "easeOut" }}
            >
              <p className="text-base text-crimson font-medium mb-4">
                {review.content}
              </p>
              <div className="text-sm font-semibold text-choco">{review.author}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}