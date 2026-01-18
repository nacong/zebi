'use client'

import { Map } from 'react-kakao-maps-sdk';
import useKakaoLoader from '../hooks/use-kakao-loader';
import { MAP_CENTER } from '../constants/map';

export default function KakaoMap() {
  useKakaoLoader();

  return (
    <Map
      center={MAP_CENTER}
      style={{ width: "100%", height: "100%" }}
      level={4}
    >
    </Map>
  );
}