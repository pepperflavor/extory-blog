export default function Post(props) {
  return (
    <div className="flex w-full justify-between p-5">
      <div className="flex">
        <div className="flex flex-col">
          <div>게시물 카테고리</div>
          <div className="flex flex-col">
            <div>소제목</div>
            <div>글 내용</div>
            <div>날짜 2025</div>
          </div>
          <div className="flex flex-row">
            <div>태그들</div>
          </div>
        </div>
      </div>
      <div className="flex w-[100px] h-[100px] bg-green-200">이미지</div>
    </div>
  );
}
