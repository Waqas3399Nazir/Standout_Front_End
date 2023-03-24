import React, { useState, useEffect } from "react";
import { SS_TOKEN } from "@/utils/constants";
import Router, { useRouter } from "next/router";
import {
  errorCleanUp,
  messageCleanUp,
  verifyToken,
} from "@/redux-dev/auth/auth.slice";
import {
  activityInProgress,
  error,
  message,
  user,
} from "@/redux-dev/auth/auth.selector";
import { useSelector, useDispatch } from "react-redux";
import { AppDispatch } from "@/redux-dev/store";

type Props = {
  children: any;
};

const AuthGuard = ({ children }: Props) => {
  const [token, setToken] = useState(false);
  const router = useRouter();
  const dispatch = useDispatch<AppDispatch>();
  const errorMessage = useSelector(error);
  const userMessage = useSelector(message);
  const loader = useSelector(activityInProgress);
  const userData = useSelector(user);

  const verifyTokenHandler = () => {
    //to clean stored error message
    dispatch(errorCleanUp());
    //to clean stored message
    dispatch(messageCleanUp());

    dispatch(verifyToken());
  };

  useEffect(() => {
    if (localStorage.getItem(SS_TOKEN)) {
      verifyTokenHandler();
      // setToken(true);
    } else {
      setToken(false);
    }
  }, []);
  return <div>{token ? <h1>Testing</h1> : <></>}</div>;
};

export default AuthGuard;
