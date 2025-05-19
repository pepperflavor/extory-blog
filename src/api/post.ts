import instance from "./axios";

export type Post = {
  page?: number;
  search?: string;
  category?: string;
};

export const fetchPosts = async (
  page?: number,
  search?: string,
  category?: string
) => {
  const response = await instance.get("/posts", {
    params: {
      page: page ? page : 1,
      search: search ? search : "",
      category: category ? encodeURIComponent(category) : "",
    },
  });
  console.log("포스츠 : ");
  console.log(response.data);
  return response.data;
};

// 모든 카테고리 목록
export const fetchCategory = async () => {
  const response = await instance.get("/category");

  return response.data;
};
