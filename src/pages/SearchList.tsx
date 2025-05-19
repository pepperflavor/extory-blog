import { fetchPosts } from "@/api/post";
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
        setPosts(data.contents);
      } catch (error) {
        console.log("검색하는데서 게시글 못갖고 옴 : ", error);
      }
    };
  }, []);

  useEffect(() => {
    console.log("검색하는데 들어옴? ");
    if (keyword !== null && keyword !== "") {
      const filteredPosts = posts.filter((post) => {
        return (
          post.title.includes(keyword) ||
          post.content.includes(keyword) ||
          post.categoryText.includes(keyword)
        );
      });
      console.log("필터링한 게시글 @@@ : ");
      console.log(filteredPosts);
      setSearchResult(filteredPosts);
    }
  }, [keyword, posts]);

  return (
    <div className="flex w-full">
      <div>검색 결과~</div>
    </div>
  );
}
