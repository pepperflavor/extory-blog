# extory-blog 과제

# 구현내용
- 제시된 1440px의 화면을 기준으로 구현
- 제공되는 API를 통해 블로그 리스트와 카테고리 정보를 받아온다
- 메인페이지 접속시 자동으로 /blog 로 리다이렉션
- 블로그 상세페이지 접근시, 화면에 해당 게시글의 id값 출력
- 상단 로고와 blog 클릭시 블로그 목록 페이지로 리다이렉트
- 애니메이션은 검색창과 게시글 hover만 구현하였습니다.




## 작업기간
2025.5.19 ~ 2025.5.20

************************************
## **1. 프로젝트 클론**
$ git clone https://github.com/pepperflavor/extory-blog.git
$ cd extory-blog

## **2. 의존성 설치**
$ npm isntall

## **3. 개발 서버 실행**
$ npm run dev

 또는
$ yarn dev

## **4. 프로덕트 빌드**
$ npm run build

## **+) 환경변수 추가**
.env
VITE_API_BASE_URL = https://extory.co/api


********************************


# 사용라이브러리 
1. React 및 라우팅 관련
- React
- react-router-dom
- react-dom

2.스타일링 및 아이콘
- Tailwindcss
- @heroicons/react

3. HTTP 통신
- axios
- dompurify
- @types/dompurify

4. 개발 도구 및 빌드 시스템
- vite
- @vitejs/plugin-react
- typescript
- postcss
- autoprefixer
  
