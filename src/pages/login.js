import { Fragment, useState } from "react";
// import { useFormik, Form } from "formik";
import { Button, TextField } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Login = (props) => {
  const navigate = useNavigate();
  const [user, setUser] = useState({});

  const log_in = () => {
    navigate("/saveinfo");
  };

  return (
    <Fragment>
      <div style={{ height: "200vh" }}>
        <h1>Login</h1>

        <TextField
          label="username"
          name="username"
          variant="outlined"
          // placeholder="required"
          value={user.username}
          required
          margin="normal"
        />
        <TextField
          label="password"
          name="password"
          variant="outlined"
          // placeholder="required"
          value={user.password}
          required
          margin="normal"
        />
        <br />
        <Button
          color="primary"
          variant="contained"
          type="submit"
          onClick={log_in}
          style={{ textTransform: "none" }}
        >
          Log In
        </Button>
        {/* <button type="submit" onClick={log_in}>Log In</button> */}
      </div>
    </Fragment>
  );
};
export default Login;
