import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Gestion from "./pages/Gestion";
import Panel from "./pages/Panel";
import { CreateUser, DeleteUser, ListUser } from "./pages/User";

const MainRouter = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <>
            <Navbar type="demo" />
            <Panel />
            <Footer />
          </>
        }
      />

      <Route
        path="/gestion"
        element={
          <>
            <Navbar type="gestion" />
            <Gestion />
            <Footer />
          </>
        }
      >
        <Route path="users" element={<ListUser />} />
        <Route path="create" element={<CreateUser />} />
        <Route path="delete" element={<DeleteUser />} />
      </Route>

      <Route
        path="/register"
        element={
          <>
            <Navbar type="demo" />
            <Panel />
            <Footer />
          </>
        }
      >
        <Route path="/register" element={<CreateUser />} />
      </Route>

      <Route
        element={
          <>
            <Navbar type="demo" />
            <span>404</span>
            <Footer />
          </>
        }
      />
    </Routes>
  );
};

export default MainRouter;
