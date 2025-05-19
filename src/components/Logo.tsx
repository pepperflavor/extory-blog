import logo from "../assets/extory-logo.png";
export default function Logo() {
  return (
    <div className="flex w-full py-14 gap-3 items-center">
      <img src={logo} alt="logo" className="w-36 h-4" />
      <div className="font-semibold text-lg tracking-widest">Blog</div>
    </div>
  );
}
