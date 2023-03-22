import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import FormControl from "@mui/material/FormControl";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { TextField } from "@mui/material";
import Button from "@mui/material/Button";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";
import Stack from "@mui/material/Stack";
import Image from "next/image";
import {
  loginUser,
  errorCleanUp,
  messageCleanUp,
} from "@/redux-dev/auth/auth.slice";
import {
  activityInProgress,
  error,
  message,
  user,
} from "@/redux-dev/auth/auth.selector";
import { useSelector, useDispatch } from "react-redux";
import { AppDispatch } from "@/redux-dev/store";
import { CircularProgress } from "@material-ui/core";

const Login = () => {
  const router = useRouter();

  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  const navigateToRegisterPage = () => {
    router.push("/register");
  };
  const navigateToResetPassword = () => {
    router.push("/reset-password");
  };
  const [userLoginData, setUserLoginData] = useState({
    email: "",
    password: "",
  });
  const [userDefinedError, setUserDefinedError] = useState("");

  const handleChange = (event: any) => {
    const value = event.target.value;
    setUserLoginData({
      ...userLoginData,
      [event.target.name]: value,
    });
  };

  const dispatch = useDispatch<AppDispatch>();
  // const loggedIn = useSelector(userLoggedIn);
  const errorMessage = useSelector(error);
  const userMessage = useSelector(message);
  const loader = useSelector(activityInProgress);
  const userData = useSelector(user);

  const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const loginUserHandler = (event: any) => {
    event.preventDefault();
    if (userLoginData.email === "" || userLoginData.password === "") {
      setUserDefinedError("Enter valid Email and Password");
    } else if (!regexEmail.test(userLoginData.email)) {
      setUserDefinedError("Please Enter a valid Email!");
    } else {
      //to clean stored error message
      dispatch(errorCleanUp());
      //to clean stored message
      dispatch(messageCleanUp());
      dispatch(loginUser(userLoginData));
    }
  };

  useEffect(() => {
    //to clean stored error message
    dispatch(errorCleanUp());
    //to clean stored message
    dispatch(messageCleanUp());
  }, []);

  useEffect(() => {
    alert(process.env.NODE_ENV);
    if (userMessage && !loader) {
      //to clean stored error message
      dispatch(errorCleanUp());
      //to clean stored message
      dispatch(messageCleanUp());

      router.push("/");
    }
  }, [loader]);

  return (
    // <AuthGuard>
    <div className="flex flex-row h-screen">
      <div className="flex-5 flex">
        <div className="w-[80%] text-center sm:w-[75%] lg:w-[65%] m-auto">
          <form method="post">
            <h1 className="text-heading not-italic text-black font-bold">
              Login
            </h1>
            <p className="text-xs mt-[0.5rem] non-italic text-black font-semibold">
              Welcome Back!
            </p>
            <div className="w-full my-8">
              <div className="w-full rounded-xl">
                <TextField
                  className="w-full rounded-xl"
                  id="outlined-email"
                  type="email"
                  placeholder="E-mail"
                  name="email"
                  onChange={handleChange}
                />
              </div>
              <div className="">
                <FormControl
                  className="m-0 rounded-xl mt-2.5"
                  sx={{ m: 1, width: "100%" }}
                  variant="outlined"
                >
                  <OutlinedInput
                    id="outlined-adornment-password"
                    type={showPassword ? "text" : "password"}
                    placeholder="Password"
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
              className="bg-red-600 w-full sm:w-[70%] lg:w-[70%] py-4 rounded-xl text-base text-white font-medium cursor-pointer"
              onClick={loginUserHandler}
            >
              {loader ? (
                <CircularProgress style={{ color: "white" }} size="1.5rem" />
              ) : (
                "Login"
              )}
            </button>
            <div className="w-full text-center mt-[1.5rem]">
              <p>
                Don’t have an account? ?{" "}
                <strong
                  className="text-[#F23939] cursor-pointer"
                  onClick={navigateToRegisterPage}
                >
                  Sign Up
                </strong>
              </p>
            </div>
            <div className="text-center" onClick={navigateToResetPassword}>
              <p className="my-8 font-medium text-[#0048B9] cursor-pointer">
                Forgot Password?
              </p>
            </div>
          </form>
          <div className="flex flex-row justify-between items-center">
            <hr className="w-2/5 align-middle" />
            <p className="align-middle">Or</p>
            <hr className="w-2/5 align-middle" />
          </div>
          <div className="flex justify-around gap-[6%] mt-4">
            <Button
              className="capitalize text-black w-[10.75rem] cursor-pointer"
              variant="outlined"
              startIcon={<FaFacebook className="text-blue" />}
            >
              Facebook
            </Button>
            <Button
              className="capitalize text-black w-[10.75rem] cursor-pointer"
              variant="outlined"
              startIcon={<FcGoogle />}
            >
              Google
            </Button>
          </div>
        </div>
      </div>
      <div className="hidden md:block flex-5 ">
        <Image
          className="w-full h-screen"
          src="/images/login.png"
          alt=""
          width={100}
          height={100}
        />
      </div>
    </div>
    // </AuthGuard>
  );
};

export default Login;
