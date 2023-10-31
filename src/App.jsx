import { BrowserRouter, Route, Routes } from "react-router-dom";
import AppLayout from "./components/AppLayout";
import Project from "./pages/Project";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Home from "./pages/Home";
import { PostProvider } from "./PostContext";

function App() {
  return (
    <>
      <BrowserRouter>
        <PostProvider>
          <Routes>
            <Route path="/" element={<AppLayout />}>
              <Route index element={<Home />} />
              <Route path="/project" element={<Project />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
            </Route>
          </Routes>
        </PostProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
