import instance from "./axios";

export type Category = {
  category: string;
  categoryText: string;
};

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
      category: category ? encodeURIComponent(category) : category,
    },
  });
  console.log("포스츠 : ");
  console.log(response.data);
  return response.data;
};

// export const fetchPostsByCate = async () => {
//   const response = await instance.get("/posts");
// };

// 모든 카테고리 목록
export const fetchCategory = async (): Promise<Category[]> => {
  const response = await instance.get("/category");

  // console.log("카테고리: ");
  // console.log(response.data);

  return response.data;
};
