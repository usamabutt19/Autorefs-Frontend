import { Colors } from "../../config";
import logo from "../../assets/autorefs-logo-light.png";
import styles from "./Applicant.module.css";
import { useState } from "react";
import { Confirmation } from "./Confirmation";
import { RefereeDetails } from "./RefereeDetails";
import { RefereeDetailsStep2 } from "./RefereeDetailsStep2";
import { Signature } from "./Signature";
import { ThankYou } from "./ThankYou";

export const ApplicantForm = () => {
  const [status, setStatus] = useState(1);
  // const [step1, setStep1] = useState(false);
  // const [step2, setStep2] = useState({});

  const formTitles = ["Confirmation", "Referee Details", "Thank You"];

  const move = (dir, num = 1) => {
    switch (dir) {
      case "next":
        setStatus(prev => prev + 1);
        break;
      case "back":
        setStatus(prev => prev - 1);
        break;
      case "custom":
        if (num < status) setStatus(num);
        break;
      default:
    }
  };
  let toRender = "";
  switch (status) {
    case 1:
      toRender = <Confirmation move={move} />;
      break;
    case 2:
      toRender = <RefereeDetails move={move} />;
      break;
    case 3:
      toRender = <Signature move={move} />;
      break;
    case 4:
      toRender = <ThankYou />;
      break;
    default:
  }

  return (
    <>
      <div
        style={{ backgroundColor: Colors.darkGray }}
        className={styles.stepsContainer}
      >
        <div>
          <img src={logo} alt="AutoRefs Logo" width="300px" />
        </div>
        <ul className={styles.items}>
          <div style={{ margin: "0", alignItems: "center" }}>
            {formTitles.map((page, index) => (
              <li
                className={
                  status === index + 1
                    ? styles.listItem
                    : index < status
                    ? styles.itemsDone
                    : null
                }
                onClick={() => {
                  move("custom", index + 1);
                }}
              >
                <p>{page}</p>
              </li>
            ))}
          </div>
        </ul>
      </div>
      <div className={styles.refContainer}>{toRender}</div>
    </>
  );
};
