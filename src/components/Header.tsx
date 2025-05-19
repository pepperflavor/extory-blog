import { useEffect, useState } from "react";
import SearchBar from "./SearchBar";
import { fetchCategory } from "../api/post";

export default function Header({ setSelectCate }) {
  const [cateList, setCatelist] = useState(["전체"]);
  const [activeTab, setActiveTab] = useState("전체");
  const [cateText, setCateText] = useState<
    { categoryText: string; category: string }[]
  >([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchCategory();
        const list = data.map((item) => item.categoryText);
        setCateText(data);
        setCatelist(["전체", ...list]);
      } catch (error) {
        console.error("카테고리 목록 갖고오기 실패 : ", error);
      }
    };
    fetchData();
  }, []);

  const handleTabClick = (item) => {
    setActiveTab(item);
    if (item === "전체") {
      setSelectCate("전체");
      return;
    } else {
      const result = cateText.find(
        (cate) => cate.categoryText === item
      )?.category;
      setSelectCate(result);
    }
  };

  return (
    <div className="flex justify-between pb-11">
      <div className="flex gap-9 space-x-4">
        {cateList.map((item) => (
          <div
            key={item}
            className={`font-bold text-base cursor-pointer ${
              activeTab === item
                ? "text-black border-b-2 border-green-600 "
                : "text-neutral-500 hover:text-black"
            }`}
            onClick={() => handleTabClick(item)}
          >
            {item}
          </div>
        ))}
      </div>
      <div className="flex">
        <SearchBar />
      </div>
    </div>
  );
}
