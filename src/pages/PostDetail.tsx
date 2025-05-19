import Header from "@/components/Header";
import Logo from "@/components/Logo";
import { useParams } from "react-router-dom";

export default function PostDetail() {
  console.log("디테일 들어옴 : ");
  const { postId } = useParams();
  console.log("디테일 아이디 : ", postId);
  return (
    // <div className="flex w-full text-xl">
    //   <div>id 보여주기~ {postId}</div>
    // </div>
    <div className="flex flex-col w-full space-y-4">
      <Logo />
      <Header setSelectCate={(category: string) => console.log(category)} />
      <div className="flex w-full h-36  bg-neutral-200/65 rounded-lg items-center justify-center">
        <div className="font-bold text-2xl">BCTO에 대한 모든 이야기</div>
      </div>
      <div className="text-5xl font-bold">id : {postId}</div>
    </div>
  );
}
