import PostDetail from "@/pages/PostDetail";
import PostsList from "@/pages/PostsList";
import { Navigate, Route, Routes } from "react-router-dom";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/blog" replace />} />
      <Route path="/blog" element={<PostsList />} />
      <Route path="/blog/:postId" element={<PostDetail />} />
    </Routes>
  );
};

export default AppRouter;
