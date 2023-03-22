import React from "react";
import { useRouter } from "next/router";
import { TextField } from "@mui/material";
import Image from "next/image";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

const EmailVerification = () => {
  const router = useRouter();

  const navigateToRegisterPage = () => {
    router.push("/register");
  };

  return (
    <div className="flex flex-row h-screen">
      <div className="flex-5 flex">
        <div className="w-[80%] text-center sm:w-[60%] lg:w-[65%] m-auto">
          <CheckCircleIcon
            style={{ color: "red", fontSize: "4rem" }}
            className="mb-[2.5rem]"
          />
          <h1 className="text-heading text-black font-bold">
            Check your email
          </h1>
          <p className="text-xs font-semibold text-black">
            To confirm your account, click the link in the email that sent to{" "}
            <strong>{router.query.email}</strong>
          </p>
          <p className="text-[0.875rem] font-light mt-[2rem]">
            <strong className="text-[0.875rem] font-light text-gray-400">
              Did not receive the email? Check your spam filter, or
            </strong>
            <br />
            <strong
              className="text-[0.875rem] font-light text-[#3870FF] cursor-pointer"
              onClick={navigateToRegisterPage}
            >
              Try another email address.
            </strong>
          </p>
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

export default EmailVerification;
