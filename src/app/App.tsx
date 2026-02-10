import React from "react";
import "../css/app.css";
import { Box, Button, Container, Stack, Typography } from "@mui/material";
import { RippleBadge } from "./MaterialTheme/styled";

function App() {
  return (
    <Container sx={{background: "orange"}}>
      <Stack flexDirection={"column"}>
        <Box sx={{ my: 4 }}>
          <Typography
            variant="h1"
            sx={{ textAlign: "center" }}
            component={"h1"}
          >
            Hello world
          </Typography>
        </Box>
        <Box>
          <RippleBadge badgeContent={4}>
            <Button variant="contained">CLICKME</Button>
          </RippleBadge>
        </Box>
      </Stack>
    </Container>
  );
}

export default App;





