import instance from "./axios";

export const fetchPosts = async (page: number) => {
  const response = await instance.get("/posts", {
    params: {
      page: page,
    },
  });
  console.log("포스츠 : ");
  console.log(response.data);
  return response.data;
};

export const fetchCategory = async () => {
  const response = await instance.get("/category");
  console.log("카테고리: ");
  console.log(response.data);
  return response.data;
};
