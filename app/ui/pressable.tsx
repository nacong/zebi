"use client";

/**
 * Pressable
 * 누르면 바로 반응하게 만드는 공용 컴포넌트
 * - 눌리는 순간 배경이 바뀌고 살짝 작아짐
 * - 꾹 눌러도 글자가 선택되지 않음
 * - 태그, 카드, 리스트에서 공통으로 사용
*/
export default function Pressable({
  children,
  onClick,
  className = "",
}: {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
}) {
  return (
    <div
      onClick={onClick}
      className={`
        cursor-pointer
        select-none
        touch-manipulation
        transition-[transform,background-color] duration-100
        active:scale-[0.97]
        active:bg-[#E5E7EB]
        ${className}`}
      style={{
        WebkitUserSelect: "none",
        WebkitTouchCallout: "none",
      }}
    >
      {children}
    </div>
  );
}