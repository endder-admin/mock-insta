import { Fragment } from "react";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Saveinfo = (props) => {
  const navigate = useNavigate();

  const save_info = () => {
    navigate("/mypage");
  };

  return (
    <Fragment>
      <h1>Saveinfo</h1>
      <Button
        color="primary"
        variant="contained"
        type="submit"
        onClick={save_info}
        style={{ textTransform: "none" }}
      >
        Save Info
      </Button>
    </Fragment>
  );
};
export default Saveinfo;
