import { Store } from "../definitions/store"
import Pressable from "./pressable"

export default function Card({ store, onClick }: { store: Store, onClick: () => void }) {
  return (
    <Pressable
      onClick={onClick}
      className="
        p-2.5
        flex flex-col gap-1.5
        rounded-xl
      "
    >
      {/* 상단 */}
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-bold text-[#2E3A8C]">{store.name}</h2>
        <div className="px-2 py-1 rounded-md bg-[#E6ECFF] text-sm text-[#2E3A8C]">
          메뉴 보기
        </div>
      </div>

      {/* 단과대별 제휴 혜택 */}
      {store.partnerships.map((partnership, idx) => (
        <div key={idx}>
          <p className="text-xs text-[#9AA0B5]">{partnership.council_name}</p>
          
          {/* 혜택 목록 */}
          {partnership.partnershipDetails.map((detail, detailIdx) => (
            <div key={detailIdx} className="flex items-center gap-3 px-2 py-1">
              <span className="text-3xl" style={{ fontFamily: "Tossface" }}>
                {detail.emoji}
              </span>
              <div>
                {detail.condition && (
                  <p className="text-sm text-[#9AA0B5]">
                    {detail.condition}
                  </p>
                )}
                <p className="text-lg font-bold text-[#FF6B6B]">
                  {detail.benefit}
                </p>
              </div>
            </div>
          ))}
        </div>
      ))}
    </Pressable>
  )
}