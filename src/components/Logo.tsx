import { useLocation, useNavigate } from "react-router-dom";
import logo from "../assets/extory-logo.png";

export default function Logo() {
  const navigate = useNavigate();
  const location = useLocation();

  console.log("지금 경로 : ", location.pathname);
  return (
    <div
      className="flex w-full py-14 gap-3 items-center cursor-pointer"
      onClick={() => navigate("/blog")}
    >
      <img src={logo} alt="logo" className="w-36 h-4" />
      <div className="font-semibold text-lg tracking-widest">Blog</div>
    </div>
  );
}
