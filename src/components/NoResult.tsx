import nothing from "../assets/no-result.png";

export default function NoResult() {
  return (
    <div className="flex w-full h-screen gap-10 justify-center items-center -pt-5">
      <div className="flex flex-col gap-5 items-center w-hull -mt-96">
        <img src={nothing} alt="nothing" className="w-36 h-[7.5rem] flex" />
        <div className="text-3xl font-bold">
          조건에 맞는 검색 결과가 없습니다.
        </div>
        <div className="text-base">검색 조건을 변경해보세요.</div>
      </div>
    </div>
  );
}
