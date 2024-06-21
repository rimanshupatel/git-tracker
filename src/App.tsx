import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <div className=" flex flex-col justify-center items-center w-[741.99px] m-auto">
        <Routes>
          <Route path="/" element={<Home />} /> {/* 👈 Renders at /app/ */}
        </Routes>
      </div>
    </>
  );
}

export default App;
