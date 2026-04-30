import { BrowserRouter, Route, Routes } from "react-router-dom";
import { NotFound } from "@/pages/NotFound";
import { Home } from "@/pages/Home";
import { Resume } from "@/pages/Resume";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/resume" element={<Resume />} />
          <Route path= "*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;
