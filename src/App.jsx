import { BrowserRouter, Routes, Route } from "react-router-dom";
import WithGolput from "./pages/WithGolput";
import WithoutGolput from "./pages/WithoutGolput";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<WithoutGolput />} />
            <Route path="alternative" element={<WithGolput />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
