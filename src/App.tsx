import { PAGES } from "./constants/pages";
import Layout from "./Layout/Layout";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter(PAGES);

function App() {
  return (
    <div className="font-Heebo">
      <Layout>
        <RouterProvider router={router} />
      </Layout>
    </div>
  );
}

export default App;

