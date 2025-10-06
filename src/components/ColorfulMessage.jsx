export const ColorfulMessage = ({ color, children }) => {
  console.log("---color---");
  const contentStyleA = {
    color,
    fontSize: "18px",
  };

  return <p style={contentStyleA}>{children}</p>;
};
