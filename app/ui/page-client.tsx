
'use client';

import Image from "next/image";
import KakaoMap from "./kakao-map";
import { CATEGORY_LIST, CategoryType } from "@/app/constants/category";
import zebi_logo from "@/public/logo.png";
import { Suspense, useEffect, useState } from "react";
import Tag from "./tag";
import Card from "./card";
import { Store } from "../definitions/definition";
import { getStoresByCategory } from "../data/data";
import { useSearchParams } from "next/navigation";

export default function PageClient() {
  const params = useSearchParams()
  const collegeId = params.get("collegeId");

  if (!collegeId) {
    return <></>
  }
    
  const [stores, setStores] = useState<Store[]>([]);
  const [seletedCategory, setSeletedCategory] = useState<CategoryType>(CategoryType.KOREAN);
  const [selectedStore, setSelectedStore] = useState<Store | null>(null);

  useEffect(() => {
    const fetchStores = async () => {
      const data = await getStoresByCategory(seletedCategory, collegeId);
      setStores(data);
    };
    
    fetchStores();
  }, [seletedCategory, collegeId]);

  return (
    <div className="flex flex-col w-screen h-dvh">
      <div className="flex-1">
        <KakaoMap 
          pins={stores}
          {...(selectedStore && { 
            center: { lat: selectedStore.lat, lng: selectedStore.lon } 
          })}
        />
      </div>
      <div className="flex-2 bg-white flex flex-col overflow-hidden">
        {/* 카테고리 */}
        <div className="flex flex-row pl-2 py-1 gap-1 items-center border-b border-b-[#F3F4F6] shrink-0">
          <Image src={zebi_logo} alt="제비 로고" width={38} />
          <div className="flex flex-row gap-1 overflow-x-auto scrollbar-hide">
            {Object.values(CATEGORY_LIST).map((category) => (
              <Tag
                key={category}
                category={category}
                seletedCategory={seletedCategory}
                onClick={() => setSeletedCategory(category)}
              />
            ))}
          </div>
        </div>
        {/* 카드 리스트 */}
        {
          stores.length
          ?
          <div className="flex-1 overflow-y-auto scrollbar-hide p-2.5">
            {
              stores.map((store: Store) => 
              <Card key={store.id} store={store} onClick={() => setSelectedStore(store)} />  
            )
            }
          </div>
          :
          <div className="flex flex-col items-center py-4">
            <div key={seletedCategory} className="text-[#232955]">제휴가 없어요ㅠ</div>
          </div>
        }
      </div>
    </div>
  );
}
