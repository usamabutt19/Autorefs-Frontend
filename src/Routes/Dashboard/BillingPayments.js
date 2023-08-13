import { DashHeader } from '../../Components/Common/DashHeader';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import { useState } from 'react';
import { SubscriptionBox } from '../../Components/Common/SubscriptionBox';
import {
  Grid,
  Tab,
  TextField,
  Divider,
  TableContainer,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from '@mui/material';
import { Colors } from '../../config';
import { billsData } from '../../helpers/mockData';
import styles from './Dashboard.module.css';
import { PaymentCard } from '../../Components/Common/PaymentCard';
import { TopButton } from '../../Components/Common/TopButtons';
import Fade from 'react-reveal/Fade';

export const Billing_Payments = () => {
  const [value, setValue] = useState('0');
  const [plan, setPlan] = useState('monthly');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <DashHeader title="Billing & Payments" subtitle=""></DashHeader>
      <Fade duration={400}>
        <Grid container>
          <Grid container item xs={12} spacing={5} sx={{ marginTop: "80px" }}>
            <Grid item container xs={value == 0 ? 8 : 12}>
              <Grid item container xs={12}>
                <TabContext value={value}>
                  <Grid item xs={value == 0 ? 12 : 8}>
                    <TabList
                      TabIndicatorProps={{ style: { background: "#ececec" } }}
                      onChange={handleChange}
                      aria-label="lab API tabs example"
                      sx={{
                        border: "1px solid #707070",
                        width: "650px",
                        borderRadius: "20px",
                        fontSize: "14px",
                        fontWeight: "700",
                      }}
                    >
                      <Tab
                        value="0"
                        label={
                          <span
                            style={{
                              color: Colors.trueBlack,
                            }}
                          >
                            Plans
                          </span>
                        }
                        sx={{
                          borderRight: "1px solid #707070",
                          textTransform: "unset",
                          width: "25%",
                          maxWidth: "25%",
                          backgroundColor: value == 0 ? "#ececec" : "",
                          color: "#2B2B2B",
                          fontWeight: "bolder",
                        }}
                      />
                      <Tab
                        value="1"
                        label={
                          <span
                            style={{
                              color: Colors.trueBlack,
                            }}
                          >
                            Invoices
                          </span>
                        }
                        sx={{
                          borderRight: "1px solid #707070",
                          textTransform: "unset",
                          width: "25%",
                          maxWidth: "25%",
                          backgroundColor: value == 1 ? "#ececec" : "",
                          color: "#2B2B2B",
                          fontWeight: "bolder",
                        }}
                      />
                      <Tab
                        value="2"
                        label={
                          <span
                            style={{
                              color: Colors.trueBlack,
                            }}
                          >
                            Settings
                          </span>
                        }
                        sx={{
                          borderRight: "1px solid #707070",
                          textTransform: "unset",
                          width: "25%",
                          maxWidth: "25%",
                          backgroundColor: value == 2 ? "#ececec" : "",
                          color: "#2B2B2B",
                          fontWeight: "bolder",
                        }}
                      />
                      <Tab
                        value="3"
                        label={
                          <span
                            style={{
                              color: Colors.trueBlack,
                            }}
                          >
                            Card Details
                          </span>
                        }
                        sx={{
                          textTransform: "unset",
                          width: "25%",
                          maxWidth: "25%",
                          backgroundColor: value == 3 ? "#ececec" : "",
                          color: "#2B2B2B",
                          fontWeight: "bolder",
                        }}
                      />
                    </TabList>
                  </Grid>
                  <Grid item container xs={12}>
                    <TabPanel
                      value="0"
                      index={0}
                      sx={{ width: "100%", padding: "0" }}
                    >
                      <Grid item container xs={12} spacing={5}>
                        <Grid item xs={6}>
                          <SubscriptionBox price="80" label="10" />
                        </Grid>
                        <Grid item xs={6}>
                          <SubscriptionBox price="350" label="50" />
                        </Grid>
                      </Grid>
                    </TabPanel>
                    <TabPanel
                      value="1"
                      index={1}
                      sx={{ width: "100%", padding: "0" }}
                    >
                      <Fade duration={400}>
                        <Grid item xs={12}>
                          <TableContainer
                            sx={{ height: "100%", marginTop: "30px" }}
                          >
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
                                    borderTop:
                                      "1px solid rgba(224, 224, 224, 1)",
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
                                    <p
                                      style={{
                                        fontSize: "18px",
                                        fontWeight: "500",
                                      }}
                                    >
                                      Invoiced
                                    </p>
                                  </TableCell>
                                  <TableCell align="left">
                                    <p
                                      style={{
                                        fontSize: "18px",
                                        fontWeight: "500",
                                      }}
                                    >
                                      Due
                                    </p>
                                  </TableCell>
                                  <TableCell align="left">
                                    <p
                                      style={{
                                        fontSize: "18px",
                                        fontWeight: "500",
                                      }}
                                    >
                                      Paid
                                    </p>
                                  </TableCell>
                                  <TableCell align="left">
                                    <p
                                      style={{
                                        fontSize: "18px",
                                        fontWeight: "500",
                                      }}
                                    >
                                      Status
                                    </p>
                                  </TableCell>
                                  <TableCell align="left">
                                    <p
                                      style={{
                                        fontSize: "18px",
                                        fontWeight: "500",
                                      }}
                                    >
                                      Action
                                    </p>
                                  </TableCell>
                                </TableRow>
                              </TableHead>
                              <TableBody>
                                {billsData.map(Data => (
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
                                      },
                                      filter:
                                        "drop-shadow(6px 4px 6px #00000005)",
                                      height: "120px",
                                    }}
                                  >
                                    <TableCell>
                                      <div
                                        style={{ display: "flex", gap: "1rem" }}
                                      >
                                        <p
                                          style={{
                                            fontSize: "17px",
                                            fontWeight: "700",
                                          }}
                                        >
                                          {Data.date}
                                        </p>

                                        <p
                                          style={{
                                            fontSize: "17px",
                                          }}
                                        >
                                          {" "}
                                          {Data.membership}
                                        </p>
                                      </div>
                                    </TableCell>
                                    <TableCell align="left">
                                      <p
                                        style={{
                                          fontSize: "17px",
                                        }}
                                      >
                                        {Data.due}
                                      </p>
                                    </TableCell>
                                    <TableCell align="left">
                                      <p
                                        style={{
                                          fontSize: "17px",
                                        }}
                                      >
                                        {Data.paid}
                                      </p>
                                    </TableCell>
                                    <TableCell align="left">
                                      <p
                                        style={{
                                          fontSize: "17px",
                                        }}
                                      >
                                        {Data.status}
                                      </p>
                                    </TableCell>
                                    <TableCell>
                                      <img
                                        src={
                                          require("../../assets/icons/action1.svg")
                                            .default
                                        }
                                        alt={"action-1"}
                                      />
                                      <img
                                        style={{
                                          marginLeft: "20px",
                                        }}
                                        src={
                                          require("../../assets/icons/billDownloadLogo.svg")
                                            .default
                                        }
                                        alt={"action-2"}
                                      />
                                    </TableCell>
                                  </TableRow>
                                ))}
                              </TableBody>
                            </Table>
                          </TableContainer>
                        </Grid>
                      </Fade>
                    </TabPanel>
                    <TabPanel
                      value="2"
                      index={2}
                      sx={{ width: "100%", padding: "0" }}
                    >
                      <Fade duration={400}>
                        <Grid item container xs={12}>
                          <div className={styles.settingPage}>
                            <Grid item xs={12}>
                              <p
                                style={{
                                  fontSize: "25px",
                                  fontFamily: "Roboto Black",
                                  marginBottom: "0",
                                }}
                              >
                                <strong>Company Name and Address</strong>
                              </p>
                              <p style={{ fontSize: "17px" }}>
                                This information will be included on all billing
                                invoices on your account.
                              </p>
                            </Grid>
                            <Grid item container xs={12} spacing={10}>
                              <Grid item xs={4}>
                                <p
                                  style={{
                                    fontSize: "25px",
                                    fontFamily: "Roboto Black",
                                  }}
                                >
                                  Billing Contact
                                </p>
                                <div
                                  style={{
                                    display: "flex",
                                    flexDirection: "column",
                                  }}
                                >
                                  <TextField
                                    placeholder="Name"
                                    variant="outlined"
                                    InputProps={{
                                      style: {
                                        borderRadius: "8px",
                                        width: "100%",
                                      },
                                    }}
                                  />
                                  <TextField
                                    placeholder="Company Name"
                                    variant="outlined"
                                    InputProps={{
                                      style: {
                                        borderRadius: "8px",
                                        width: "100%",
                                        marginTop: "15px",
                                      },
                                    }}
                                  />
                                  <TextField
                                    placeholder="Email Address"
                                    variant="outlined"
                                    InputProps={{
                                      style: {
                                        borderRadius: "8px",
                                        width: "100%",
                                        marginTop: "15px",
                                      },
                                    }}
                                  />
                                </div>
                              </Grid>
                              <Grid item container xs={8}>
                                <Grid item xs={12}>
                                  <p
                                    style={{
                                      fontSize: "25px",
                                      fontFamily: "Roboto Black",
                                    }}
                                  >
                                    Billing Address
                                  </p>
                                </Grid>
                                <Grid item container xs={12} spacing={2}>
                                  <Grid item xs={6}>
                                    <div
                                      style={{
                                        display: "flex",
                                        flexDirection: "column",
                                      }}
                                    >
                                      <TextField
                                        placeholder="Billing Contact"
                                        variant="outlined"
                                        InputProps={{
                                          style: {
                                            borderRadius: "8px",
                                            width: "100%",
                                          },
                                        }}
                                      />
                                      <TextField
                                        placeholder="Address Line 1"
                                        variant="outlined"
                                        InputProps={{
                                          style: {
                                            borderRadius: "8px",
                                            width: "100%",
                                            marginTop: "15px",
                                          },
                                        }}
                                      />
                                      <TextField
                                        placeholder="Address Line 2"
                                        variant="outlined"
                                        InputProps={{
                                          style: {
                                            borderRadius: "8px",
                                            width: "100%",
                                            marginTop: "15px",
                                          },
                                        }}
                                      />
                                      <TextField
                                        placeholder="Zip/Postal"
                                        variant="outlined"
                                        InputProps={{
                                          style: {
                                            borderRadius: "8px",
                                            width: "100%",
                                            marginTop: "15px",
                                          },
                                        }}
                                      />
                                    </div>
                                  </Grid>
                                  <Grid item xs={6}>
                                    <div
                                      style={{
                                        display: "flex",
                                        flexDirection: "column",
                                      }}
                                    >
                                      <TextField
                                        placeholder="City"
                                        variant="outlined"
                                        InputProps={{
                                          style: {
                                            borderRadius: "8px",
                                            width: "100%",
                                          },
                                        }}
                                      />
                                      <TextField
                                        placeholder="State/Province"
                                        variant="outlined"
                                        InputProps={{
                                          style: {
                                            borderRadius: "8px",
                                            width: "100%",
                                            marginTop: "15px",
                                          },
                                        }}
                                      />
                                      <TextField
                                        placeholder="Country"
                                        variant="outlined"
                                        InputProps={{
                                          style: {
                                            borderRadius: "8px",
                                            width: "100%",
                                            marginTop: "15px",
                                          },
                                        }}
                                      />
                                      <TextField
                                        placeholder="VAT Number (Optional)"
                                        variant="outlined"
                                        InputProps={{
                                          style: {
                                            borderRadius: "8px",
                                            width: "100%",
                                            marginTop: "15px",
                                          },
                                        }}
                                      />
                                    </div>
                                  </Grid>
                                </Grid>
                              </Grid>
                            </Grid>
                          </div>
                        </Grid>
                      </Fade>
                    </TabPanel>
                    <TabPanel
                      value="3"
                      index={3}
                      sx={{ width: "100%", padding: "0" }}
                    >
                      <Grid item container xs={12} spacing={6}>
                        <Grid item style={{ width: "550px" }}>
                          <Fade duration={400}>
                            <div style={{ marginTop: "40px" }}>
                              <PaymentCard
                                backgroundColor={Colors.primary}
                                color={Colors.trueWhite}
                                lastDigits="3042"
                                expiry="01/22"
                                cvv="544"
                              />
                              <PaymentCard
                                backgroundColor={Colors.trueWhite}
                                color={Colors.trueBlack}
                                lastDigits="4353"
                                expiry="01/25"
                                cvv="645"
                              />
                            </div>
                            <div style={{ marginTop: "17px" }}>
                              <TopButton
                                label="Add New Card"
                                height="86px"
                                width="100%"
                              />
                            </div>
                          </Fade>
                        </Grid>
                        <Grid item container xs>
                          <Fade duration={400}>
                            <div className={styles.settingPage}>
                              <p
                                style={{
                                  fontSize: "20px",
                                  fontWeight: "500",
                                }}
                              >
                                Card Information
                              </p>
                              <Grid container item xs={12}>
                                <TextField
                                  placeholder="Card Holder"
                                  variant="outlined"
                                  sx={{ width: "100%" }}
                                  InputProps={{
                                    style: {
                                      borderRadius: "8px",
                                      marginTop: "15px",
                                    },
                                  }}
                                />
                                <TextField
                                  placeholder="Card Number"
                                  variant="outlined"
                                  sx={{ width: "100%" }}
                                  InputProps={{
                                    style: {
                                      borderRadius: "8px",
                                      marginTop: "15px",
                                    },
                                  }}
                                />
                                <div
                                  style={{
                                    display: "flex",
                                    gap: "1rem",
                                    flex: 1,
                                  }}
                                >
                                  <TextField
                                    placeholder="Month/Year"
                                    variant="outlined"
                                    sx={{ flex: 1 }}
                                    InputProps={{
                                      style: {
                                        borderRadius: "8px",
                                        marginTop: "15px",
                                      },
                                    }}
                                  />
                                  <TextField
                                    placeholder="CVV Code"
                                    variant="outlined"
                                    sx={{ flex: 1 }}
                                    InputProps={{
                                      style: {
                                        borderRadius: "8px",
                                        marginTop: "15px",
                                      },
                                    }}
                                  />
                                </div>
                              </Grid>
                              <div style={{ marginTop: "70px" }}>
                                <p
                                  style={{
                                    fontSize: "20px",
                                    fontWeight: "500",
                                  }}
                                >
                                  Billing Address
                                </p>
                                <Grid container item xs={12}>
                                  <TextField
                                    placeholder="Billing Street Address"
                                    variant="outlined"
                                    sx={{ width: "100%" }}
                                    InputProps={{
                                      style: {
                                        borderRadius: "8px",
                                        marginTop: "15px",
                                      },
                                    }}
                                  />
                                  <div
                                    style={{
                                      display: "flex",
                                      gap: "1rem",
                                      flex: 1,
                                    }}
                                  >
                                    <TextField
                                      placeholder="State"
                                      variant="outlined"
                                      sx={{ flex: 1 }}
                                      InputProps={{
                                        style: {
                                          borderRadius: "8px",
                                          marginTop: "15px",
                                        },
                                      }}
                                    />
                                    <TextField
                                      placeholder="City"
                                      variant="outlined"
                                      sx={{ flex: 1 }}
                                      InputProps={{
                                        style: {
                                          borderRadius: "8px",
                                          marginTop: "15px",
                                        },
                                      }}
                                    />
                                    <TextField
                                      placeholder="Zip/Postal"
                                      variant="outlined"
                                      sx={{ flex: 1 }}
                                      InputProps={{
                                        style: {
                                          borderRadius: "8px",
                                          marginTop: "15px",
                                        },
                                      }}
                                    />
                                  </div>
                                </Grid>
                              </div>
                            </div>
                          </Fade>
                        </Grid>
                      </Grid>
                    </TabPanel>
                  </Grid>
                </TabContext>
              </Grid>
            </Grid>
            {value == 0 ? (
              <Grid item container xs={4}>
                <Grid item container xs={12}>
                  <Fade duration={400}>
                    <div>
                      <div
                        style={{
                          display: "flex",
                        }}
                      >
                        <div
                          style={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            color:
                              plan === "monthly"
                                ? Colors.trueWhite
                                : Colors.trueBlack,
                            backgroundColor:
                              plan === "monthly" ? Colors.primary : "",
                            width: "165px",
                            height: "50px",
                            borderRadius: "20px",
                            textTransform: "unset",
                            fontSize: "16px",
                            fontWeight: "bold",
                            cursor: "pointer",
                          }}
                          onClick={() => setPlan("monthly")}
                        >
                          Monthly
                        </div>
                        <div
                          style={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            color:
                              plan === "yearly"
                                ? Colors.trueWhite
                                : Colors.trueBlack,
                            backgroundColor:
                              plan === "yearly" ? Colors.primary : "",
                            width: "165px",
                            height: "50px",
                            borderRadius: "20px",
                            textTransform: "unset",
                            fontSize: "16px",
                            fontWeight: "bold",
                            cursor: "pointer",
                          }}
                          onClick={() => setPlan("yearly")}
                        >
                          Yearly
                        </div>
                      </div>
                      <Grid item xs={12}>
                        <div style={{ marginTop: "75px", fontSize: "16px" }}>
                          <Divider light />
                          <div
                            style={{
                              display: "flex",
                              justifyContent: "space-between",
                            }}
                          >
                            <p>
                              <strong>Current Plan</strong>
                            </p>
                            <p style={{ fontWeight: "500" }}>
                              <strong>
                                £{plan === "monthly" ? 80 : 350} per month
                              </strong>
                            </p>
                          </div>
                          <p>
                            {plan === "monthly" ? 10 : 50} References Request
                          </p>
                          <p>Unlimited HR Users</p>
                          <p>Unlimited Custom Questions</p>
                          <p>Team Management</p>
                          <p>Helpdesk Support</p>
                          <p>Live Chat</p>
                          <Divider light />
                        </div>
                      </Grid>
                    </div>
                  </Fade>
                </Grid>
              </Grid>
            ) : null}
          </Grid>
        </Grid>
      </Fade>
    </>
  );
};
