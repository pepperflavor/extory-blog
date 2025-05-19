import { useEffect, useState } from "react";
import Header from "../components/Header";
import Logo from "../components/Logo";
import Post from "../components/Post";
import { fetchPosts } from "../api/post";
import NoResult from "../components/NoResult";

export default function PostsList() {
  const [selectCate, setSelectCate] = useState("전체");
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [totalElement, setTotalElement] = useState(0);

  // 검색 했는지 안했는지
  const [searchKeyword, setSearchKeyword] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const data = await fetchPosts();
        setPosts(data.contents);
        setTotalElement(data.totalElements);
      } catch (error) {
        console.error("첫 로딩 && 게시글 갖고오기 실패 : ", error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    console.log("@@@ 고른 카테고리 명 : ");
    console.log(selectCate);
    const fetchData = async () => {
      try {
        const data = await fetchPosts(
          1,
          searchKeyword,
          selectCate === "전체" ? "" : selectCate
        );
        setPosts(data.contents);
        setTotalElement(data.totalElements);
      } catch (error) {
        console.error("게시글 갖고오기 실패 : ", error);
      }
      // try {
      //   let data;
      //   if (selectCate === "전체") {
      //     data = await fetchPosts();
      //   } else {
      //     data = await fetchPosts(1, "", selectCate);
      //   }
      //   setPosts(data.contents);
      //   setTotalElement(data.totalElements);
      // } catch (error) {
      //   console.error("게시글 갖고오기 실패 : ", error);
      // }
    };
    fetchData();
  }, [selectCate, searchKeyword]);

  return (
    <div className="flex flex-col w-full space-y-4">
      <Logo />
      <Header
        setSelectCate={setSelectCate}
        setSearchKeyword={setSearchKeyword}
      />

      <div className="flex w-full h-36  bg-neutral-200/65 rounded-lg items-center justify-center">
        <div className="font-bold text-2xl">BCTO에 대한 모든 이야기</div>
      </div>

      {totalElement <= 0 ? (
        <></>
      ) : (
        <div className="flex border-b-2 py-4 pt-10 font-bold text-base border-neutral-200/65 ">
          <div className="flex">전체글 {totalElement}개</div>
        </div>
      )}
      {loading ? (
        <div>불러오는 중...</div>
      ) : (
        <>
          {totalElement <= 0 ? (
            <NoResult />
          ) : (
            // <div className="flex w-full h-36 bg-neutral-200/65 rounded-lg items-center justify-center">
            //   <div className="font-bold text-2xl">게시글이 없습니다</div>
            // </div>
            posts.map((post) => <Post key={post.id} postData={post} />)
          )}
        </>
      )}
    </div>
  );
}
