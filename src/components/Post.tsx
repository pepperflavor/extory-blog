import useTransHtml from "@/hooks/useTransHtml";
import { useNavigate } from "react-router-dom";

export default function Post({ postData }) {
  const navigate = useNavigate();

  const safeHTML = useTransHtml(postData.content, 3);

  // 2025-04-09 17:22:05
  const formatDate = (dateString: string) => {
    if (!dateString) return "";
    const [dates] = dateString.split(" ");
    const [year, month, day] = dates.split("-");
    return `${year}.${month}.${day}`;
  };

  return (
    <div
      className="flex w-full py-5 border-b-2 justify-between items-center border-neutral-200 gap-32 group"
      onClick={() => navigate(`/blog/${postData.id}`)}
    >
      <div className="flex flex-col w-full">
        <div className="flex flex-col gap-3">
          <div className="flex w-fit h-fit border-spacing-0 ring-1 ring-zinc-200 rounded-sm text-green-600 font-semibold text-xs px-2 py-1">
            {postData.categoryText}
          </div>
          <div className="flex font-extrabold text-xl text-black hover:text-black/75 group-hover:text-black/75">
            {postData.title}
          </div>

          <div
            className="flex text-sm font-sans text-neutral-800 text-left"
            dangerouslySetInnerHTML={{ __html: safeHTML }}
          />

          {postData.updatedAt ? (
            <div className="flex text-sm -mt-2 text-neutral-500">
              {formatDate(postData.updatedAt)}
            </div>
          ) : (
            <div className="flex text-sm text-neutral-500">
              {formatDate(postData.createdAt)}
            </div>
          )}
          <div className="flex flex-wrap gap-2 items-start ">
            {postData.tags.map((item: string) => (
              <div
                key={item}
                className="flex w-fit h-fit border-spacing-0 ring-1 ring-zinc-200 rounded-2xl text-neutral-500 font-normal text-xs px-2 py-2"
              >
                {`#${item}`}
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="flex w-[185px] h-[185px] flex-shrink-0 bg-green-200 rounded-lg"></div>
    </div>
  );
}
