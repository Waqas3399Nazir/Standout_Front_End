import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { TextField } from "@mui/material";
import Image from "next/image";
//
import {
  forgotPassword,
  errorCleanUp,
  messageCleanUp,
} from "@/redux-dev/auth/auth.slice";
import { useSelector, useDispatch } from "react-redux";
import {
  activityInProgress,
  error,
  message,
} from "@/redux-dev/auth/auth.selector";
import { AppDispatch } from "@/redux-dev/store";
import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";
import Stack from "@mui/material/Stack";
import { CircularProgress } from "@material-ui/core";
//

const ResetPassword = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const dispatch = useDispatch<AppDispatch>();
  const errorMessage = useSelector(error);
  const successMessage = useSelector(message);
  const loader = useSelector(activityInProgress);
  const [userDefinedError, setUserDefinedError] = useState("");
  const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const resetPassword = (event: any) => {
    event.preventDefault();

    //to clean stored error message
    dispatch(errorCleanUp());
    //to clean stored message
    dispatch(messageCleanUp());

    setUserDefinedError("");
    if (email === "") {
      setUserDefinedError("Enter valid Email");
    } else if (!regexEmail.test(email)) {
      setUserDefinedError("Please Enter a valid Email!");
    } else {
      dispatch(forgotPassword({ email }));
    }
  };

  const navigateToLoignPage = () => {
    router.push("/login");
  };

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
              Reset Password
            </h1>
            <p className="text-base mt-[0.5rem] non-italic text-black font-semibold w-full sm:w-[90%] lg:w-[80%] m-auto">
              We will send you an email with instructions on how to reset your
              password.
            </p>
            <div className="w-full my-8">
              <div className="w-full rounded-xl">
                <TextField
                  className="w-full rounded-xl"
                  id="outlined-email"
                  type="text"
                  placeholder="E-mail"
                  name="name"
                  onChange={(event) => setEmail(event.target.value)}
                />
              </div>
            </div>
            <div>
              {errorMessage.message || userDefinedError || successMessage ? (
                <Stack
                  className={
                    errorMessage.message
                      ? "mb-4 border-red-500"
                      : "mb-4 border-green-500"
                  }
                  sx={{ width: "100%" }}
                  spacing={2}
                  color="#FF445A"
                >
                  <Alert
                    variant="outlined"
                    severity={
                      errorMessage.message || userDefinedError
                        ? "warning"
                        : "success"
                    }
                    color={
                      errorMessage.message || userDefinedError
                        ? "error"
                        : "success"
                    }
                  >
                    <p
                      className={
                        errorMessage.message || userDefinedError
                          ? "text-[#FF445A]"
                          : "text-green-300"
                      }
                    >
                      {errorMessage.message || userDefinedError
                        ? errorMessage.message
                          ? errorMessage.message
                          : userDefinedError
                        : successMessage}
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
              onClick={resetPassword}
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
      <div className="flex-5 hidden lg:block bg-registerImage">
        {/* <Image
          className="w-full h-screen"
          src="/images/signup-image.png"
          alt=""
          width={100}
          height={100}
        /> */}
      </div>
    </div>
  );
};

export default ResetPassword;
