import React from "react";
import "../css/app.css";
import { Box, Button, Container, Stack, Typography } from "@mui/material";

function App() {
  return (
    <Container maxWidth="sm">
      <Stack flexDirection={"column"}>
         <Box sx={{my:4}}>
              <Typography variant="h1" sx={{textAlign:"center"}} component={"h1"}>
                Hello world
              </Typography>
         </Box>
         <Button variant="contained">CLICKME</Button>
      </Stack>
    </Container>
  );
}

export default App;





