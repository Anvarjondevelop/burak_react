import { AspectRatio, CardOverflow, CssVarsProvider } from "@mui/joy";
import Card from "@mui/joy/Card";
import { Box, Container, Stack, Typography } from "@mui/material";

import { useSelector } from "react-redux";
import { createSelector } from "reselect";
import { retrieveTopUsers } from "./selector";
import { Product } from "../../../lib/types/product";
import { serverApi } from "../../../lib/config";
import { Member } from "../../../lib/types/member";

const TopUsersRetriever = createSelector(retrieveTopUsers, (topUsers) => ({
  topUsers,
}));

function ActiveUser() {
  const { topUsers } = useSelector(TopUsersRetriever);
  return (
    <div className="active-users-frame">
      <Container>
        <Stack className="main">
          <Box className="category-title">Active User</Box>

          <Stack className="cards-frame">
            <CssVarsProvider>
              {topUsers.length !== 0 ? (
                topUsers.map((member: Member) => {
                  const imagePath = `${serverApi}/${member.memberImage}`;
                  return (
                    <Card key={member._id} variant="outlined" className="card">
                      <CardOverflow>
                        <AspectRatio ratio="1">
                          <img src={imagePath} alt="" />
                        </AspectRatio>
                      </CardOverflow>
                      <CardOverflow variant="soft" className="card-detail">
                        <Box className="member-nickname ">
                          <Typography className="title">
                            {member.memberNick}
                          </Typography>
                        </Box>
                      </CardOverflow>
                    </Card>
                  );
                })
              ) : (
                <Box className="no-data">No Active Users</Box>
              )}
            </CssVarsProvider>
          </Stack>
        </Stack>
      </Container>
    </div>
  );
}

export default ActiveUser;
