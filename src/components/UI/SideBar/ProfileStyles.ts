export const cardStyle: any = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  padding: "20px",
  background: "#fff",
  borderRadius: "10px",
  boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
  maxWidth: "400px",
  margin: "20px auto",
};

export const imgStyle = {
  width: "100%",
  marginBottom: "20px",
};

export const avatarStyle = {
  width: "128px",
  height: "128px",
  borderRadius: "50%",
  marginBottom: "20px",
};

export const titleStyle = {
  fontSize: "24px",
  fontWeight: "bold",
  color: "#333",
  marginBottom: "10px",
};

export const subtitleStyle = {
  fontSize: "18px",
  color: "#777",
  marginBottom: "20px",
};

export const buttonWrapperStyle = {
  display: "flex",
  gap: "10px",
};

export const buttonStyle = {
  padding: "10px 20px",
  fontSize: "16px",
  borderRadius: "5px",
  cursor: "pointer",
  border: "1px solid #f85565",
  color: "#f85565",
  backgroundColor: "#fff",
};

export const buttonSolidStyle = {
  ...buttonStyle,
  backgroundColor: "#f85565",
  color: "#fff",
};
