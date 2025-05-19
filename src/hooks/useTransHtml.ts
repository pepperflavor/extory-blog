import { useMemo } from "react";
import DOMPurify from "dompurify";

/**
 * @param {string} htmlString - 원본 HTML 문자열
 * @param {number} sentenceCount - 추출할 문장 수 (기본 3문장)
 * @returns {string} - 정화된 HTML 문자열
 */

const useTransHtml = (htmlString, cutCount = 3) => {
  return useMemo(() => {
    if (!htmlString) return "";

    const tempDiv = document.createElement("div");
    tempDiv.innerHTML = htmlString;
    const text = tempDiv.textContent || tempDiv.innerText || "";

    const sentences = text.match(/[^\.!\?]+[\.!\?]+/g) || [];

    const cutText = sentences.slice(0, cutCount).join(" ").trim() + "...";

    const wrappedHtml = `<div>${cutText}</div>`;

    return DOMPurify.sanitize(wrappedHtml);
  }, [htmlString, cutCount]);
};

export default useTransHtml;
