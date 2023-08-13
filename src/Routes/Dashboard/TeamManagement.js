import { DashHeader } from '../../Components/Common/DashHeader';
import {
  Grid,
  Button,
  Box,
  TableContainer,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from '@mui/material';
import { TopButton } from '../../Components/Common/TopButtons';
import { Colors } from '../../config';
import { changeShade } from '../../helpers';
import AddIcon from '@mui/icons-material/Add';
import { ButtonBox } from '../../Components/Common/Box';
import { teamData } from '../../helpers/mockData';
import styles from './Dashboard.module.css';
import Fade from 'react-reveal/Fade';

export const TeamManagement = () => {
  return (
    <>
      <DashHeader title="Team Management" subtitle=""></DashHeader>
      <Grid container>
        <Grid container item xs={12} spacing={5} sx={{ marginTop: "100px" }}>
          <Grid item xs={4}>
            <Grid item xs={12}>
              <Fade duration={400}>
                <Box
                  sx={{
                    backgroundColor: Colors.lightGray,
                    display: "flex",
                    flexDirection: "column",
                    padding: "50px",
                    color: "#040404",
                    height: "100%",
                    width: "100%",
                    fontSize: "20px",
                    borderRadius: "20px",
                    filter: "drop-shadow(6px 4px 6px #00000005)",
                  }}
                >
                  <div>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <AddIcon fontSize="large" opacity="55%" />
                      <p style={{ fontWeight: "500", opacity: "55%" }}>
                        Add New Team
                      </p>
                    </div>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        gap: "10px",
                        margin: "2rem auto",
                      }}
                    >
                      <label htmlFor="team-name">Team Name</label>
                      <input
                        name="team-name"
                        type="text"
                        placeholder="Team Name"
                        className={styles.teamInput}
                      ></input>
                    </div>
                    <div style={{ display: "flex", justifyContent: "center" }}>
                      <Button
                        sx={{
                          backgroundColor: Colors.primary,
                          color: Colors.trueWhite,
                          width: "15rem",
                          height: "4rem",
                          borderRadius: "6px",
                          textTransform: "unset",
                          fontSize: "20px",
                          fontWeight: "700",
                          "&:hover": {
                            backgroundColor: changeShade(Colors.primary, -10),
                          },
                        }}
                      >
                        Create
                      </Button>
                    </div>
                  </div>
                </Box>
              </Fade>
            </Grid>
            <Grid item xs={12} />
            <Fade duration={400}>
              <div style={{ marginTop: "45px" }}>
                <ButtonBox label="Team 1" />
                <ButtonBox label="Team 2" />
              </div>
            </Fade>
          </Grid>

          <Grid item xs={8}>
            <Fade duration={400}>
              <TopButton label="Add New User" height="7rem" width="100%" />
              <div style={{ marginTop: "50px" }}>
                <Grid item xs={12}>
                  <TableContainer>
                    <Table
                      sx={{
                        borderCollapse: "separate",
                        borderSpacing: "0px 18px",
                      }}
                      aria-label="simple table"
                    >
                      <TableHead
                        sx={{
                          "& th": {
                            borderTop: "1px solid rgba(224, 224, 224, 1)",
                          },
                          "& th:first-child": {
                            paddingLeft: "40px",
                          },
                          "& th:last-child": {
                            paddingRight: "40px",
                          },
                        }}
                      >
                        <TableRow>
                          <TableCell align="left">
                            <p style={{ fontSize: "17px", fontWeight: "500" }}>
                              Name
                            </p>
                          </TableCell>
                          <TableCell align="left">
                            <p style={{ fontSize: "17px", fontWeight: "500" }}>
                              Email
                            </p>
                          </TableCell>
                          <TableCell align="left">
                            <p style={{ fontSize: "17px", fontWeight: "500" }}>
                              Permission
                            </p>
                          </TableCell>
                          <TableCell align="left">
                            <p style={{ fontSize: "17px", fontWeight: "500" }}>
                              Account
                            </p>
                          </TableCell>
                          <TableCell align="left"></TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {teamData.map((Data) => (
                          <TableRow
                            key={Data.name}
                            sx={{
                              background: "transparent",
                              "& td": {
                                backgroundColor: Colors.trueWhite,
                              },
                              "& td:first-child": {
                                borderRadius: "1em 0 0 1em",
                                paddingLeft: "40px",
                              },
                              "& td:last-child": {
                                borderRadius: "0 1em 1em 0",
                                paddingRight: "40px",
                              },
                              filter: "drop-shadow(6px 4px 6px #00000005)",
                              height: "120px",
                            }}
                          >
                            <TableCell>
                              <p
                                style={{ fontSize: "17px", fontWeight: "500" }}
                              >
                                {Data.name}
                              </p>
                            </TableCell>
                            <TableCell align="left">{Data.email}</TableCell>
                            <TableCell align="left">
                              <p style={{ fontSize: "17px" }}>
                                {Data.permission}
                              </p>
                            </TableCell>
                            <TableCell align="left">
                              <p style={{ fontSize: "17px" }}>{Data.account}</p>
                            </TableCell>
                            <TableCell>
                              <img
                                src={
                                  require("../../assets/icons/questionBoxLogo1.svg")
                                    .default
                                }
                                alt={"action"}
                              />
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </TableContainer>
                </Grid>
              </div>
            </Fade>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};
