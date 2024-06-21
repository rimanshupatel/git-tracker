import Users from "./components/Users";
import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <div className=" flex flex-col justify-center items-center w-[741.99px] m-auto">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Users" element={<Users />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
