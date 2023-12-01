import { Outlet } from "react-router-dom";
import { Box } from "@mui/material";

import Footer from "./Footer";
import Header from "./Header";
// import SideNavBar from "./SideNavBar";
import AnimateNavbar from "./AnimateNavbar";
import { useState } from "react";
import { useSpring, animated } from "@react-spring/web";

function AppLayout() {
  const [openSidebar, setOpenSidebar] = useState(true);

  const [springs, api] = useSpring(() => ({
    from: { x: 100 },
  }));

  const Animatedcomponent = animated(AnimateNavbar);

  return (
    <>
      <Header api={api} setOpenSidebar={setOpenSidebar} />
      <Box
        sx={{
          display: "flex",
          width: "100%",
          height: "100%",
        }}
      >
        {openSidebar && <Animatedcomponent style={springs} />}

        <Box sx={{ width: "100%" }}>
          <Outlet />
        </Box>
      </Box>
      <Footer />
    </>
  );
}

export default AppLayout;
