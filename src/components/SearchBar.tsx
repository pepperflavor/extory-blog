import { useRef, useState } from "react";

interface SearchBarProps {
  setSearchKeyword: (keyword: string) => void;
}

export default function SearchBar({ setSearchKeyword }: SearchBarProps) {
  const [isClicked, setIsClicked] = useState(false);
  const [text, setText] = useState("");
  const [isComposing, setIsComposing] = useState(false);

  const inputRef = useRef<HTMLInputElement>(null);

  function changeSearchText(e: React.ChangeEvent<HTMLInputElement>) {
    setText(e.target.value);
  }

  function clearInput() {
    setText("");
    setIsClicked(false);
    inputRef.current?.blur(); // 누르는 시점에 변경되게
    setSearchKeyword(""); // 검색어 초기화
  }

  function handleEnter(e: React.KeyboardEvent<HTMLInputElement>) {
    console.log("핸들엔터 안 : ");
    if (e.key === "Enter" && !isComposing && text.trim() !== "") {
      console.log("검색어 전송 전 확인 : ", text.trim());
      setSearchKeyword(text.trim());
      inputRef.current?.blur();
    }
  }

  return (
    <div className="relative items-center w-full group">
      <input
        ref={inputRef}
        type="text"
        value={text}
        onKeyDown={handleEnter}
        onCompositionStart={() => setIsComposing(true)} // 한글보다 엔터이벤트 먼저 처리되는 것 방지
        onCompositionEnd={() => setIsComposing(false)}
        className="w-full pr-10 border-0 font-medium
         text-neutral-700 border-b-2
          border-gray-800 focus:outline-none
           focus:border-green-500 placeholder:text-neutral-500 pb-2"
        onFocus={() => {
          setIsClicked(true);
        }}
        onBlur={() => {
          setIsClicked(false);
        }}
        placeholder={isClicked ? "" : "검색어를 입력하세요."}
        onChange={changeSearchText}
      />
      <button
        className={`absolute right-2 top-1/2 -translate-y-1/2
          ${isClicked ? "text-green-500" : "text-neutral-500"}`}
        type="button"
        onClick={clearInput}
      >
        {text ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="2"
            stroke="currentColor"
            className="h-6 w-6 font-semibold pb-1"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 1010.5 18a7.5 7.5 0 006.15-3.35z"
            />
          </svg>
        )}
      </button>
    </div>
  );
}
