import { PAGES } from "./constants/pages";
import Layout from "./Layout/Layout";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { PageNotFound } from "./pages/PageNotFound/PageNotFound";

function App() {
  return (
    <div className="font-Heebo">
      <BrowserRouter>
        <Routes>
          <Route path="*" element={<PageNotFound />} />
          <Route path="/unauthorized" element={<>not authorized bro</>} />
          <Route path="/" element={<Layout />}>
            {PAGES.map((page) => (
              <Route key={page.path} path={page.path} element={page.element} />
            ))}
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

