import PostDetail from "@/pages/PostDetail";
import PostsList from "@/pages/PostsList";
import SearchList from "@/pages/SearchList";
import { Navigate, Route, Routes } from "react-router-dom";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/blog" replace />} />
      <Route path="/blog" element={<PostsList />} />
      <Route path="/blog/:postId" element={<PostDetail />} />
      <Route path="/search" element={<SearchList />} />
    </Routes>
  );
};

export default AppRouter;
