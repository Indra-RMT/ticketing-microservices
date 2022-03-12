import axios from "axios";

const LandingPage = ({ currentUser }) => {
  console.log("im in component", currentUser);
  axios.get("/api/users/currentuser");
  return <h1>Hello World </h1>;
};

// LandingPage.getInitialProps = async () => {
//   const response = await axios
//     .get("/api/users/currentuser")
//     .catch((err) => console.log("err", err));

//   console.log("response", response);

//   return { currentUser: response?.data };
// };

export default LandingPage;
