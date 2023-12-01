import { Box, Button, Typography } from "@mui/material";
import NoMatching from "../data/NothingFound.svg";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import { useNavigate } from "react-router-dom";

function EmptyList() {
  const navigate = useNavigate();

  function handleGoBack(e) {
    e.preventDefault();
    navigate("/");
  }

  return (
    <>
      <Box
        sx={{
          padding: "50px 30px 10px 30px",
          borderBottom: "1px solid #D8D9DA",
        }}
      >
        <Box sx={{ textAlign: "left" }}>
          <Button
            onClick={handleGoBack}
            startdecorator={<KeyboardBackspaceIcon />}
          >
            go back
          </Button>
        </Box>
        <Box
          sx={{
            textAlign: "center",
            boxShadow:
              "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px",
          }}
        >
          <Typography
            variant="p"
            sx={{
              fontSize: "22px",
              color: "#E7B10A",
              fontFamily: "Quicksand",
              fontWeight: "500",
            }}
          >
            Nothing is Found!
          </Typography>
        </Box>
        <Box sx={{ opacity: "70%" }}>
          <img src={NoMatching} />
        </Box>
      </Box>
    </>
  );
}

export default EmptyList;
