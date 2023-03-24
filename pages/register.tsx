import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { TextField } from "@mui/material";
import Button from "@mui/material/Button";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import Image from "next/image";
import Select, { SelectChangeEvent } from "@mui/material/Select";

//
import Box from "@mui/material/Box";
import MenuItem from "@mui/material/MenuItem";
import {
  registerUser,
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
//

const Register = () => {
  const router = useRouter();

  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  const [country, setCountry] = useState("");

  const handleCountryChange = (event: SelectChangeEvent) => {
    setCountry(event.target.value as string);
  };

  const countries = [
    {
      value: "USD",
      label: "$",
    },
    {
      value: "EUR",
      label: "€",
    },
    {
      value: "BTC",
      label: "฿",
    },
    {
      value: "JPY",
      label: "¥",
    },
  ];

  const [userData, setUserData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    firstName: "",
    lastName: "",
    companyOrOrganization: "",
    phoneNumber: "",
    aptOrSuite: "",
    cityOrTown: "",
    zipCode: "",
    state: "",
  });

  const handleChange = (event: any) => {
    const value = event.target.value;
    setUserData({
      ...userData,
      [event.target.name]: value,
    });
  };

  const dispatch = useDispatch<AppDispatch>();
  const errorMessage = useSelector(error);
  const loader = useSelector(activityInProgress);
  const userMessage = useSelector(message);
  const [passwordMismatch, setPasswordMismatch] = useState("");

  const registerUserHandler = (event: any) => {
    event.preventDefault();
    console.log(userData);
    //to clean stored error message
    dispatch(errorCleanUp());
    //to clean stored message
    dispatch(messageCleanUp());

    if (userData) {
      if (userData.password === userData.confirmPassword) {
        setPasswordMismatch("");
        dispatch(registerUser(userData));
      } else {
        setPasswordMismatch("Please Enter Same Password!");
      }
    }
  };

  useEffect(() => {
    if (userMessage && !loader) {
      //to clean stored error message
      dispatch(errorCleanUp());
      //to clean stored message
      dispatch(messageCleanUp());

      router.push("/");
    }
  }, [loader]);

  return (
    <div className="flex flex-row">
      <div className="flex-5 flex mb-[3rem]">
        <div className="w-2/3 md:w-1/2 m-auto">
          <form method="post">
            <h1 className="text-heading not-italic text-black font-bold">
              Register
            </h1>
            <div className="w-full my-8">
              <TextField
                className="w-full rounded-xl"
                id="outlined-email"
                type="text"
                placeholder="First Name"
                name="firstName"
                onChange={handleChange}
              />
              <TextField
                className="w-full rounded-xl"
                id="outlined-email"
                type="text"
                placeholder="Last Name"
                name="lastName"
                onChange={handleChange}
              />
              <div className="flex flex-row">
                <TextField
                  className="w-full rounded-xl"
                  id="outlined-email"
                  type="text"
                  placeholder="Company"
                  name="companyOrOrganization"
                  onChange={handleChange}
                />
                <TextField
                  className="w-full rounded-xl"
                  id="outlined-email"
                  type="text"
                  placeholder="Phone Number"
                  name="phoneNumber"
                  onChange={handleChange}
                />
              </div>
              <div className="flex flex-row">
                <TextField
                  className="w-full rounded-xl"
                  id="outlined-email"
                  type="text"
                  placeholder="Apartment"
                  name="aptOrSuite"
                  onChange={handleChange}
                />
                <TextField
                  className="w-full rounded-xl"
                  id="outlined-email"
                  type="text"
                  placeholder="City"
                  name="cityOrTown"
                  onChange={handleChange}
                />
              </div>
              <div className="flex flex-row">
                <TextField
                  className="w-full rounded-xl"
                  id="outlined-email"
                  type="text"
                  placeholder="State"
                  name="state"
                  onChange={handleChange}
                />
                <TextField
                  className="w-full rounded-xl"
                  id="outlined-email"
                  type="text"
                  placeholder="Zip Code"
                  name="zipCode"
                  onChange={handleChange}
                />
              </div>
              <TextField
                className="w-full rounded-xl"
                id="outlined-email"
                type="email"
                placeholder="E-mail"
                name="email"
                onChange={handleChange}
              />

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
              <div className="">
                <FormControl
                  className="m-0 rounded-xl mt-2.5"
                  sx={{ m: 1, width: "100%" }}
                  variant="outlined"
                >
                  <OutlinedInput
                    id="outlined-adornment-password"
                    type={showPassword ? "text" : "password"}
                    placeholder="Confirm Password"
                    name="confirmPassword"
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
              {/* <div className="mt-2.5">
                <FormControl fullWidth>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={country}
                    //label="Country"
                    defaultValue="Country"
                    onChange={handleCountryChange}
                    placeholder="Country"
                    name="country"
                  >
                    {countries.map((country) => {
                      return (
                        <MenuItem key={country.value} value={country.value}>
                          {country.value}
                        </MenuItem>
                      );
                    })}
                  </Select>
                </FormControl>
              </div> */}
            </div>
            <button
              type="submit"
              className="bg-[#F23939] w-full py-4 rounded-xl text-base text-white font-medium cursor-pointer"
              onClick={registerUserHandler}
            >
              {loader ? (
                <CircularProgress style={{ color: "white" }} size="1.5rem" />
              ) : (
                "Register"
              )}
            </button>
          </form>
          <div className="flex flex-row justify-between mt-[2rem] items-center">
            <hr className="w-2/5 align-middle" />
            <p className="align-middle">Or</p>
            <hr className="w-2/5 align-middle" />
          </div>
          <div className="flex justify-around md:justify-between mt-4">
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
      <div className="flex-5 hidden md:block bg-registerImage">
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

export default Register;
