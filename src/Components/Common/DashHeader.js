import { Profiles } from "../../Routes/Profiles/Profiles";
import { Link } from "react-router-dom";
import { Colors } from "../../config";
export const DashHeader = ({ title, subtitle, width, alignItems, padding }) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        width: width,
        alignItems: alignItems,
        padding: padding,
      }}
    >
      <div>
        <h2
          style={{
            fontSize: "48px",
            margin: "0",
            fontWeight: "400",
            fontFamily: "Roboto Black",
          }}
        >
          {title}
        </h2>
        <p
          style={{
            fontSize: "1.375rem",
            color: Colors.subtitle,
            marginTop: "8px",
            opacity: "57%",
            fontWeight: "400",
          }}
        >
          {subtitle}
        </p>
      </div>
      <Link
        to="/profiles/edit"
        element={<Profiles />}
        style={{ textDecoration: "none" }}
      >
        <div style={{ display: "flex", alignItems: "center" }}>
          <img
            src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2960&q=80"
            width="60px"
            style={{ borderRadius: "50%" }}
            alt="Profile"
          />
          <p
            style={{
              fontSize: "1.375rem",
              color: Colors.trueBlack,
              marginLeft: "1rem",
            }}
          >
            John Stewart
          </p>
        </div>
      </Link>
    </div>
  );
};
