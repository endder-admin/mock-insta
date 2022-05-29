import { Fragment } from "react";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import * as React from "react";

const MyPage = (props) => {
  const navigate = useNavigate();

  // const pages = ["test1", "test2"];
  // const pages = [];
  // const [selectedPage, setSelectedPage] = useState("");

  // const [value, setValue] = React.useState(pages[0]);
  const [value, setValue] = React.useState("");
  // const [inputValue, setInputValue] = React.useState("");

  // const handleChange = (event) => {
  //   setSelectedPage(event.target.value);
  //   console.log(event.target.value);
  //   navigate("/" + selectedPage);
  // };

  // const handleChange = (event) => {
  //   console.log(event.target.value);
  //   // (event, newValue) => {
  //   //   setValue(newValue);
  //   // };
  //   // // setSelectedPage(event.target.value);
  //   // // console.log(event.target.value);
  //   // navigate("/" + newValue);
  // };

  const handleChange = (event) => {
    // console.log(event.target.value);
    setValue(event.target.value);
  };

  const navigateNext = () => {
    navigate("/otherpage");
  };

  return (
    <Fragment>
      <h1>My Page</h1>
      <input
        type="search"
        aria-label="Search Input"
        onChange={handleChange}
        value={value}
      ></input>
      <h1>Click search result below</h1>
      <Button
        color="primary"
        variant="contained"
        type="submit"
        style={{ textTransform: "none" }}
        onClick={navigateNext}
      >
        <div>{value || "Test"}</div>
      </Button>
    </Fragment>
  );
};
export default MyPage;
