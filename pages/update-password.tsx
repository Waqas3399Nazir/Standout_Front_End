import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { TextField } from "@mui/material";
import FormControl from "@mui/material/FormControl";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import Image from "next/image";
import { useSelector, useDispatch } from "react-redux";
import { AppDispatch } from "@/redux-dev/store";
import { CircularProgress } from "@material-ui/core";
import Alert from "@mui/material/Alert";
import Stack from "@mui/material/Stack";
import {
  updatePassword,
  errorCleanUp,
  messageCleanUp,
} from "@/redux-dev/auth/auth.slice";
import {
  activityInProgress,
  error,
  message,
} from "@/redux-dev/auth/auth.selector";

const UpdatePassword = () => {
  // const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const regexPassword = /^[a-zA-Z0-9!@#$%^&*()_+{}\[\]:;\"'<>,.?\/\\|\-]{8,}$/;
  const regexCode = /^\d{7}(?:[-\s]\d{4})?$/;
  const router = useRouter();
  const [showPassword, setShowPassword] = React.useState(false);
  const dispatch = useDispatch<AppDispatch>();
  const errorMessage = useSelector(error);
  const successMessage = useSelector(message);
  const loader = useSelector(activityInProgress);
  const [userDefinedError, setUserDefinedError] = useState("");

  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  const [userData, setUserData] = useState({
    email: router.query.email,
    password: "",
    code: "",
  });

  const handleChange = (event: any) => {
    const value = event.target.value;
    setUserData({
      ...userData,
      [event.target.name]: value,
    });
  };

  const navigateToLoignPage = () => {
    router.push("/login");
  };

  const updatePasswordHandler = (event: any) => {
    event.preventDefault();

    //to clean stored error message
    dispatch(errorCleanUp());
    //to clean stored message
    dispatch(messageCleanUp());

    if (
      userData.email === "" ||
      userData.password === "" ||
      userData.code === ""
    ) {
      setUserDefinedError("Enter valid Details");
    }
    // else if (!regexEmail.test(userData.email)) {
    //   setUserDefinedError("Please Enter a valid Email!");
    // }
    else if (!regexPassword.test(userData.password)) {
      setUserDefinedError("Please Enter a valid Password!");
    } else if (!regexCode.test(userData.code)) {
      setUserDefinedError("Please Enter a valid 5 Digits Code!");
    } else {
      setUserDefinedError("");
      dispatch(updatePassword(userData));
    }
  };

  useEffect(() => {
    if (successMessage && !loader) {
      //to clean stored error message
      dispatch(errorCleanUp());
      //to clean stored message
      dispatch(messageCleanUp());

      router.push("/login");
    }
  }, [loader]);

  useEffect(() => {
    //to clean stored error message
    dispatch(errorCleanUp());
    //to clean stored message
    dispatch(messageCleanUp());
  }, []);

  return (
    <div className="flex flex-row h-screen">
      <div className="flex-5 flex">
        <div className="w-[80%] text-center sm:w-[60%] lg:w-[65%] m-auto">
          <form method="post">
            <h1 className="text-heading not-italic text-black font-bold">
              Update Password
            </h1>
            {/* <p className="text-base mt-[0.5rem] non-italic text-black font-semibold w-full sm:w-[90%] lg:w-[80%] m-auto">
             Please enter your details 
            </p> */}
            <div className="w-full my-8">
              <div className="w-full rounded-xl">
                <TextField
                  className="w-full rounded-xl"
                  id="outlined-email"
                  type="text"
                  placeholder="E-mail"
                  value={userData.email}
                  name="email"
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="">
              <FormControl
                className="m-0 rounded-xl mt-[1rem]"
                sx={{ m: 1, width: "100%" }}
                variant="outlined"
              >
                <OutlinedInput
                  id="outlined-adornment-password"
                  type={showPassword ? "text" : "password"}
                  placeholder="New Password"
                  name="password"
                  onChange={handleChange}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                        edge="end"
                      >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  }
                />
              </FormControl>
            </div>
            <div className="w-full my-4">
              <div className="w-full rounded-xl">
                <TextField
                  className="w-full rounded-xl"
                  id="outlined-email"
                  type="text"
                  placeholder="12345"
                  name="code"
                  onChange={handleChange}
                />
              </div>
            </div>
            <div>
              {errorMessage.message || userDefinedError ? (
                <Stack
                  className="mb-4 border-red-500"
                  sx={{ width: "100%" }}
                  spacing={2}
                  color="#FF445A"
                >
                  <Alert variant="outlined" severity="warning" color="error">
                    <p className="text-[#FF445A]">
                      {errorMessage.message
                        ? errorMessage.message
                        : userDefinedError}
                    </p>
                  </Alert>
                </Stack>
              ) : (
                ""
              )}
            </div>
            <button
              type="submit"
              className="bg-red-600 w-full py-4 rounded-xl text-base text-white font-medium cursor-pointer"
              onClick={updatePasswordHandler}
            >
              {loader ? (
                <CircularProgress style={{ color: "white" }} size="1.5rem" />
              ) : (
                "Send"
              )}
            </button>
          </form>
          <div className="w-full text-center mt-4">
            <p
              className="my-8 font-medium text-[#0048B9] cursor-pointer"
              onClick={navigateToLoignPage}
            >
              Return to Login
            </p>
          </div>
        </div>
      </div>
      <div className="flex-5 hidden lg:block">
        <Image
          className="w-full h-screen"
          src="/images/signup-image.png"
          alt=""
          width={100}
          height={100}
        />
      </div>
    </div>
  );
};

export default UpdatePassword;
