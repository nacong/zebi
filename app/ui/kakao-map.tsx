'use client'

import { CustomOverlayMap, Map, MapMarker } from 'react-kakao-maps-sdk';
import useKakaoLoader from '../hooks/use-kakao-loader';
import { MAP_CENTER } from '../constants/map';
import { Store } from '../definitions/store';

export default function KakaoMap({ center = MAP_CENTER, pins }: { center?: { lat: number, lng: number }, pins: Store[] }) {
  useKakaoLoader();

  return (
    <Map
      center={center}
      isPanto={true}
      
      style={{ width: "100%", height: "100%" }}
      level={5}
    >
      {pins.map((pin: Store) => 
        <>
          {/* 마커 이미지 */}
          <MapMarker 
            position={{ lat: pin.lat, lng: pin.lon }}
            image={{
              src: "/pin.svg",
            size: {
              width: 28,
              height: 28
            },
            }}
          />

          {/* 가게 이름 */}
          <CustomOverlayMap
            position={{ lat: pin.lat, lng: pin.lon }}
            xAnchor={0}
            yAnchor={0}
          >
            <p
              className="
                -translate-x-1/2
                px-1.5 py-0
                bg-white
                border-2 border-[#3B4483]
                rounded-full
                text-xs text-[#3B4483] font-bold
              "
            >
              {pin.name}
            </p>
          </CustomOverlayMap>
        </>
      )}
    </Map>
  );
}