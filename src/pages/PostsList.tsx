import { useEffect, useState } from "react";
import Header from "../components/Header";
import Logo from "../components/Logo";
import Post from "../components/Post";
import { fetchCategory, fetchPosts } from "../api/post";

export default function PostsList() {
  const [selectCate, setSelectCate] = useState("전체");

  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [totalElement, setTotalElement] = useState(0);

  useEffect(() => {
    // console.log("@@@ 고른 카테고리 명 : ");
    // console.log(selectCate);
    const fetchData = async () => {
      setLoading(true);
      try {
        const data = await fetchPosts(selectCate);
        console.log("@@@ 게시글 갖고오기 : ");
        console.log(data);
        // setPosts(data);
        setTotalElement(data.totalElements);
      } catch (error) {
        console.error("게시글 갖고오기 실패 : ", error);
      }
    };
    fetchData();
  }, [selectCate]);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const data = await fetchCategory();
  //     } catch (error) {}
  //   };
  // }, [selectCate]);

  return (
    <div className="flex flex-col w-full space-y-4">
      <Logo />
      <Header setSelectCate={setSelectCate} />
      <div className="flex w-full h-36  bg-neutral-200/65 rounded-lg items-center justify-center">
        <div className="font-bold text-2xl">BCTO에 대한 모든 이야기</div>
      </div>
      <div className="flex border-b-2 py-4 pt-10 font-bold text-base border-neutral-200/65 ">
        <div className="flex">전체글 {totalElement}개</div>
      </div>
      <Post />
    </div>
  );
}
