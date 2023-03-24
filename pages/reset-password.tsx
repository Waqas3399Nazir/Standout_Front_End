import React from "react";
import { useRouter } from "next/router";
import { TextField } from "@mui/material";
import Image from "next/image";

const ResetPassword = () => {
  const router = useRouter();

  const navigateToLoignPage = () => {
    router.push("/login");
  };

  return (
    <div className="flex flex-row h-screen">
      <div className="flex-5 flex">
        <div className="w-1/2 m-auto">
          <form method="post">
            <h1 className="text-heading not-italic text-black font-bold">
              Reset Password
            </h1>
            <p className="text-base non-italic text-black font-semibold w-11/22">
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
                  // onChange={handleChange}
                />
              </div>
            </div>
            <button
              type="submit"
              className="bg-red-600 w-full py-4 rounded-xl text-base text-white font-medium cursor-pointer"
              //  onClick={loginUserHandler}
            >
              Send
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
      <div className="flex-5 bg-registerImage">
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
