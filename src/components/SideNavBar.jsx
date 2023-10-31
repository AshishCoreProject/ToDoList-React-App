import { Typography } from "@mui/material";
import { NavLink } from "react-router-dom";
import { styled } from "styled-components";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import WorkOutlineIcon from "@mui/icons-material/WorkOutline";
import UpcomingOutlinedIcon from "@mui/icons-material/UpcomingOutlined";
import LoginOutlinedIcon from "@mui/icons-material/LoginOutlined";

const List = styled.li`
  list-style: none;
  :hover {
    background-color: #f1efef;
  }
`;
const Ul = styled.ul`
  padding: 1px 0 0 15px;
`;
const Navlink = styled(NavLink)`
  text-decoration: none;
  display: flex;
  align-items: center;
  height: 30px;
  color: #360982;
  border-radius: 5px;
  padding: 3px 0;
  cursor: pointer;
`;

const P = styled.p`
  margin: 0;
`;

function SideNavBar() {
  return (
    <>
      <nav>
        <Ul>
          <List>
            <Navlink to="/">
              <P>
                <CalendarMonthOutlinedIcon
                  sx={{
                    margin: 0,
                    paddingRight: "7px",
                    color: "#4b9244",
                  }}
                />
              </P>
              <Typography sx={{ fontSize: "medium" }}>Today</Typography>
            </Navlink>
          </List>
          <List>
            <Navlink to="/project">
              <P>
                <WorkOutlineIcon
                  sx={{
                    margin: 0,
                    paddingRight: "7px",
                    color: "rgb(37 99 235)",
                  }}
                />
              </P>
              <Typography sx={{ fontSize: "medium" }}>Project</Typography>
            </Navlink>
          </List>
          <List>
            <Navlink to="/login">
              <P>
                <UpcomingOutlinedIcon
                  sx={{
                    margin: 0,
                    paddingRight: "7px",
                    color: "rgb(190 24 93)",
                  }}
                />
              </P>
              <Typography sx={{ fontSize: "medium" }}>Upcoming</Typography>
            </Navlink>
          </List>
          <List>
            <Navlink to="/signup">
              <P>
                <LoginOutlinedIcon
                  sx={{
                    margin: 0,
                    paddingRight: "7px",
                    color: " rgb(220 38 38)",
                  }}
                />
              </P>
              <Typography sx={{ fontSize: "medium" }}>Login</Typography>
            </Navlink>
          </List>
        </Ul>
      </nav>
    </>
  );
}

export default SideNavBar;
