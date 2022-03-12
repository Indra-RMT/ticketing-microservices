const LandingPage = ({ color }) => {
  console.log("im in component", color);
  return <h1>Hello World </h1>;
};

LandingPage.getInitialProps = () => {
  console.log("I am on the server");

  return { color: "red" };
};

export default LandingPage;
