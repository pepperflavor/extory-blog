import { useEffect } from "react";
import "./App.css";
import PostsList from "./pages/PostsList";
import { fetchCategory } from "./api/post";

function App() {
  useEffect(() => {
    fetchCategory();
  }, []);
  return (
    <div className="flex w-full justify-center h-screen">
      <div className="flex w-full max-w-[1440px]">
        <div className="w-[880px] mx-auto">
          <PostsList></PostsList>
        </div>
      </div>
    </div>
  );
}

export default App;
