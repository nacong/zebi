import { Store } from "../definitions/definition"
import Pressable from "./pressable"

export default function Card({ store, onClick }: { store: Store, onClick: () => void }) {
  return (
    <Pressable
      onClick={onClick}
      className="
        p-2.5
        flex flex-col text-left gap-1.5
        rounded-xl
      "
    >
      {/* 상단 */}
      <h2 className="text-lg font-bold text-[#232955]">{store.name}</h2>

      {/* 단과대별 제휴 혜택 */}
      {store.partnerships.map((partnership, idx) => (
        <div key={idx} className="flex flex-col gap-2">
          <p className="text-xs text-[#9AA0B5]">{partnership.council_name}</p>
          
          {/* 혜택 목록 */}
          {partnership.partnershipDetails.map((detail, detailIdx) => (
            <div key={detailIdx} className="flex items-center gap-3 px-2 py-1">
              <span className="text-2xl" style={{ fontFamily: "Tossface" }}>
                {detail.emoji}
              </span>
              <div>
                {detail.condition && (
                  <p className="leading-none text-sm text-[#9AA0B5]">
                    {detail.condition}
                  </p>
                )}
                <p className="text-lg font-bold text-[#2E3A8C]">
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