import "./App.css";
import { BrowserRouter } from "react-router-dom";
import AppRouter from "./routes/Router";

function App() {
  return (
    <BrowserRouter>
      <div className="flex w-full justify-center h-screen">
        <div className="flex w-full max-w-[1440px]">
          <div className="w-[880px] mx-auto">
            <AppRouter />
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
