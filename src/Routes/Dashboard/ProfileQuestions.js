import { DashHeader } from '../../Components/Common/DashHeader';
import { Grid } from "@mui/material";
import { ButtonBox } from "../../Components/Common/Box";
import { QuestionBox } from "../../Components/Common/QuestionBox";
import { TopButton } from "../../Components/Common/TopButtons";
import { useState } from "react";
import { Fade } from "react-reveal";
import { QuestionPopup } from "./SideDrawer/Questions";

export const ProfileQuestions = () => {
  const [addQuestion, setAddQuestion] = useState(false);
  return (
    <>
      <div
        onClick={() => {
          if (addQuestion) {
            setAddQuestion(false);
          }
        }}
      >
        <DashHeader title="Profile Questions" subtitle=""></DashHeader>
      </div>
      <Fade duration={400}>
        <div
          onClick={() => {
            if (addQuestion) {
              setAddQuestion(false);
            }
          }}
        >
          <Grid container spacing={4}>
            <Grid
              container
              item
              xs={12}
              spacing={5}
              sx={{ marginTop: "100px" }}
            >
              <Grid item xs={4}>
                <TopButton label="Add Profile" height="7rem" width="100%" />
              </Grid>
              <Grid item xs={8}>
                <TopButton
                  label="Add Question"
                  height="7rem"
                  width="100%"
                  onClick={() => setAddQuestion(true)}
                />
              </Grid>
            </Grid>
            <Grid container item xs={12} spacing={5}>
              <Grid item xs={4}>
                <ButtonBox label="Digital Marketing" subLabel="ID # 364" />
                <ButtonBox label="Default" subLabel="ID # 364" />
              </Grid>
              <Grid item xs={8}>
                <QuestionBox
                  title={"Question (Dropdown)"}
                  subtitle={
                    "How do you rate the candidate's customer service skills?"
                  }
                />
                <QuestionBox
                  title={"Question"}
                  subtitle={
                    "How did the applicant handle a complaint scenario?"
                  }
                />
              </Grid>
            </Grid>
          </Grid>
        </div>
      </Fade>
      {<QuestionPopup show={addQuestion} setAddQuestion={setAddQuestion} />}
    </>
  );
};
