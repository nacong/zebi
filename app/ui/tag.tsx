import PressableInk from "./pressable";
import { CATEGORY_EMOJI, CategoryType } from "../constants/category";

export default function Tag({
  category,
  seletedCategory,
  onClick,
}: {
  category: CategoryType;
  seletedCategory: CategoryType;
  onClick: () => void;
}) {
  const isSelected = category === seletedCategory;

  return (
    <PressableInk
      onClick={onClick}
      className={`flex flex-col items-center px-2.25 py-1 rounded-xl
        ${isSelected ? "bg-[#F3F4F6]" : ""}
      `}
    >
      <span className="text-[22px]" style={{ fontFamily: "Tossface" }}>
        {CATEGORY_EMOJI[category]}
      </span>
      <p
        className={`text-[14px] ${
          isSelected
            ? "text-[#232955] font-bold"
            : "text-[#656C9D] font-medium"
        }`}
      >
        {category}
      </p>
    </PressableInk>
  );
}
