import KakaoMap from "./ui/kakao-map";

export default function Home() {
  return (
    <div className="flex flex-col h-screen w-screen">
      <div className="grow-1">
        <KakaoMap />
      </div>
      <div className="grow-2 bg-green-400" />
    </div>
  );
}
