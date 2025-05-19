import { fetchPosts } from "@/api/post";
import Header from "@/components/Header";
import Logo from "@/components/Logo";
import NoResult from "@/components/NoResult";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

export default function SearchList() {
  const [searchParams] = useSearchParams();
  const keyword = searchParams.get("keyword");
  console.log("넘겨 받은 검색어 : ");
  console.log(keyword);
  const [searchResult, setSearchResult] = useState([]);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchPosts();
        console.log("검색 리스트 일단 받아오기 ");
        console.log(data.contents);
        setPosts(data.contents);
      } catch (error) {
        console.log("검색하는데서 게시글 못갖고 옴 : ", error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    console.log("검색하는데 들어옴? ");
    console.log(posts);
    if (keyword !== null && keyword !== "") {
      const lowerKeyword = keyword.toLowerCase();
      const filteredPosts = posts.filter((post) => {
        return (
          post.title.toLowerCase().includes(lowerKeyword) ||
          post.content.toLowerCase().includes(lowerKeyword) ||
          post.categoryText.toLowerCase().includes(lowerKeyword)
        );
      });
      console.log("필터링한 게시글 @@@ : ");
      console.log(filteredPosts);
      setSearchResult(filteredPosts);
    }
  }, [keyword, posts]);

  return (
    <div className="flex w-full flex-col space-y-4">
      <Logo></Logo>
      <Header />
      {searchResult.length <= 0 ? <NoResult></NoResult> : <></>}
    </div>
  );
}
