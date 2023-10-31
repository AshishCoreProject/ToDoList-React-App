import { Outlet } from "react-router-dom";
import { Box } from "@mui/material";

import Footer from "./Footer";
import Header from "./Header";
import SideNavBar from "./SideNavBar";
import { useState } from "react";

function AppLayout() {
  const [openSidebar, setOpenSidebar] = useState(false);
  return (
    <>
      <Header openSidebar={openSidebar} setOpenSidebar={setOpenSidebar} />
      <Box
        sx={{
          display: "flex",
          width: "100%",
          height: "100%",
        }}
      >
        {openSidebar && (
          <Box sx={{ width: "370px" }}>
            <SideNavBar />
          </Box>
        )}

        <Box sx={{ width: "100%" }}>
          <Outlet />
        </Box>
      </Box>
      <Footer />
    </>
  );
}

export default AppLayout;
