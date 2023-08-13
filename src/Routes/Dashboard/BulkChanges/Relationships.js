import {
  Grid,
  TableContainer,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from '@mui/material';
import { changesData } from '../../../helpers/mockData';
import { Colors } from '../../../config';
import { TopButton } from '../../../Components/Common/TopButtons';
import { DashHeader } from '../../../Components/Common/DashHeader';
import { Fade } from 'react-reveal';

export const Relationships = () => {
  return (
    <>
      <DashHeader title="Bulk Changes" subtitle="" />
      <Fade>
        <div style={{ marginTop: "100px" }}>
          <Grid container xs={12} spacing={6}>
            <Grid item xs={6}>
              <TableContainer sx={{ height: "100%" }}>
                <Table
                  sx={{
                    borderCollapse: "separate",
                    borderSpacing: "0px 18px",
                    tableLayout: "fixed",
                  }}
                  aria-label="simple table"
                >
                  <TableHead
                    sx={{
                      "& th": {
                        borderTop: "1px solid rgba(224, 224, 224, 1)",
                      },
                    }}
                  >
                    <TableRow>
                      <TableCell align="center">
                        <p style={{ fontSize: "18px", fontWeight: "500" }}>
                          ID
                        </p>
                      </TableCell>
                      <TableCell align="left">
                        <p style={{ fontSize: "18px", fontWeight: "500" }}>
                          Relationship
                        </p>
                      </TableCell>
                      <TableCell align="left">
                        <p style={{ fontSize: "18px", fontWeight: "500" }}>
                          Action
                        </p>
                      </TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {changesData.map((Data) => (
                      <TableRow
                        key={Data.name}
                        sx={{
                          background: "transparent",
                          "& td": {
                            backgroundColor: Colors.trueWhite,
                          },
                          "& td:first-child": {
                            borderRadius: "1em 0 0 1em",
                          },
                          "& td:last-child": {
                            borderRadius: "0 1em 1em 0",
                          },
                          filter: "drop-shadow(6px 4px 6px #00000005)",
                          height: "120px",
                        }}
                      >
                        <TableCell align="center">
                          <p style={{ fontSize: "18px", fontWeight: "500" }}>
                            {Data.id}
                          </p>
                        </TableCell>
                        <TableCell align="left">
                          <p style={{ fontSize: "18px", fontWeight: "500" }}>
                            {Data.relationship}
                          </p>
                        </TableCell>
                        <TableCell align="left">
                          <img
                            src={
                              require("../../../assets/icons/questionBoxLogo1.svg")
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
            <Grid item xs={6}>
              <div>
                <div style={{ display: "flex", gap: "2rem" }}>
                  <p style={{ fontSize: "18px", fontWeight: "500" }}>
                    Teleworm
                  </p>
                  <p style={{ fontSize: "18px", fontWeight: "500" }}>
                    Total Relationships: 2
                  </p>
                </div>
                <p style={{ fontSize: "18px" }}>
                  In this section, you can define the relationship choices that
                  your applicant's can choose from when providing their referee
                  details. By default, applicants can choose to provide a
                  reference from either a past employer or a family/friend.
                </p>
                <TopButton
                  label="Add Relationship"
                  height="140px"
                  width="100%"
                />
              </div>
            </Grid>
          </Grid>
        </div>
      </Fade>
    </>
  );
};
