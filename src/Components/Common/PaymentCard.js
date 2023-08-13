export const PaymentCard = ({
  lastDigits,
  expiry,
  cvv,
  color,
  backgroundColor,
}) => {
  return (
    <div
      style={{
        backgroundColor: backgroundColor,
        color: color,
        aspectRatio: "2 / 1",
        marginTop: "20px",
        borderRadius: "20px",
      }}
    >
      <div style={{ padding: "40px" }}>
        <p
          style={{
            fontSize: "16px",
            fontWeight: "bold",
            textTransform: "uppercase",
          }}
        >
          <strong>John Snow</strong>
        </p>

        <div style={{ marginTop: "30px" }}>
          <p
            style={{
              fontSize: "14px",
              fontWeight: "medium",
              marginBottom: "0",
              color: "#2B2B2B",
              textTransform: "uppercase",
            }}
          >
            Card Number
          </p>
          <p
            style={{
              fontSize: "30px",
              fontWeight: "bold",
              marginTop: "0",
            }}
          >
            <strong>XXXX XXXX XXXX {lastDigits}</strong>
          </p>
        </div>
        <div style={{ display: "flex" }}>
          <div>
            <p
              style={{
                fontSize: "14px",
                fontWeight: "medium",
                marginBottom: "0",
                color: "#2B2B2B",
                textTransform: "uppercase",
              }}
            >
              Month/Year
            </p>
            <p
              style={{
                fontSize: "20px",
                fontWeight: "bold",
                marginTop: "0",
              }}
            >
              {expiry}
            </p>
          </div>

          <div style={{ marginLeft: "45px" }}>
            <p
              style={{
                fontSize: "14px",
                fontWeight: "medium",
                marginBottom: "0",
                color: "#2B2B2B",
                textTransform: "uppercase",
              }}
            >
              Cvv
            </p>
            <p
              style={{
                fontSize: "20px",
                fontWeight: "bold",
                marginTop: "0",
              }}
            >
              {cvv}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
