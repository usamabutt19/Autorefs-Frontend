import {
  Grid,
  Tab,
  TableContainer,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from '@mui/material';
import TabList from '@mui/lab/TabList';
import TabContext from '@mui/lab/TabContext';
import { changesData } from '../../../helpers/mockData';
import { Colors } from '../../../config';
import { TopButton } from '../../../Components/Common/TopButtons';
import { DashHeader } from '../../../Components/Common/DashHeader';
import { useState } from 'react';
import { Fade } from 'react-reveal';

export const Designations = () => {
  const [value, setValue] = useState('0');
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
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
                      <TableCell align="center">ID</TableCell>
                      <TableCell align="left">Designation</TableCell>
                      <TableCell align="left">Action</TableCell>
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
                          <strong>{Data.id}</strong>
                        </TableCell>
                        <TableCell align="left">
                          <strong>{Data.designation}</strong>
                        </TableCell>
                        <TableCell align="left">
                          <img
                            src={
                              require("../../../assets/icons/questionBoxLogo1.svg")
                                .default
                            }
                            alt={"action"}
                          />
                          <img
                            style={{
                              marginLeft: "20px",
                            }}
                            src={
                              require("../../../assets/icons/questionBoxLogo2.svg")
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
                <div style={{ display: "flex", gap: "10rem" }}>
                  <p style={{ fontSize: "18px", fontWeight: "500" }}>
                    Teleworm
                  </p>
                  <p style={{ fontSize: "18px", fontWeight: "500" }}>
                    Total Designations: 20
                  </p>
                </div>
                <p style={{ fontSize: "18px" }}>
                  In this section, you can define the job titles/designations
                  that you commonly recruit in order to save time when creating
                  a reference request. Don't worry you can always add any job
                  title even if this is empty when creating a new reference
                  request.
                </p>
                <TopButton
                  label="Add Designation"
                  height="140px"
                  width="100%"
                />
                <TabContext value={value}>
                  <TabList
                    TabIndicatorProps={{
                      style: {
                        background: Colors.primary,
                      },
                    }}
                    onChange={handleChange}
                    aria-label="lab API tabs example"
                    sx={{
                      border: "1px solid #707070",
                      width: "100%",
                      borderRadius: "20px",
                      marginTop: "35px",
                    }}
                  >
                    <Tab
                      value="0"
                      label={
                        <span
                          style={{
                            color:
                              value == 0 ? Colors.trueWhite : Colors.trueBlack,
                          }}
                        >
                          Import CSV
                        </span>
                      }
                      sx={{
                        borderRight: "1px solid #707070",
                        textTransform: "unset",
                        width: "40%",
                        maxWidth: "40%",
                        fontSize: "14px",
                        backgroundColor: value == 0 ? Colors.primary : "",
                        fontWeight: "700",
                      }}
                    />
                    <Tab
                      value="1"
                      label={
                        <span
                          style={{
                            color:
                              value == 1 ? Colors.trueWhite : Colors.trueBlack,
                          }}
                        >
                          Download CSV Template
                        </span>
                      }
                      sx={{
                        borderRight: "1px solid #707070",
                        textTransform: "unset",
                        width: "60%",
                        maxWidth: "60%",
                        fontSize: "14px",
                        backgroundColor: value == 1 ? Colors.primary : "",
                        fontWeight: "700",
                      }}
                    />
                  </TabList>
                </TabContext>
              </div>
            </Grid>
          </Grid>
        </div>
      </Fade>
    </>
  );
};
