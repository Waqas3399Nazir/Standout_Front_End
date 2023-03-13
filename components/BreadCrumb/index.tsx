import React from "react";
import Typography from "@mui/material/Typography";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";

function handleClick(event: React.MouseEvent<HTMLDivElement, MouseEvent>) {
  event.preventDefault();
  console.info("You clicked a breadcrumb.");
}

const BreadCrumb = () => {
  return (
    <div className="text-white" role="presentation" onClick={handleClick}>
      <Breadcrumbs
        className="text-white font-semibold homeSubHeading font-Inter"
        aria-label="breadcrumb"
      >
        <Link
          underline="hover"
          color="inherit"
          href="/"
          className="hover:text-[#F23939]"
        >
          Home
        </Link>
        <Link
          className="hover:text-[#F23939] cursor-pointer"
          underline="hover"
          color="inherit"
          //  href="/material-ui/getting-started/installation/"
        >
          American Force
        </Link>
        <Link
          className="text-[#ffffff80] hover:text-[#F23939] cursor-pointer"
          underline="hover"
          color="text.primary"
          //  href="/material-ui/react-breadcrumbs/"
          aria-current="page"
        >
          AFW 09 LIBERTY SS
        </Link>
      </Breadcrumbs>
    </div>
  );
};

export default BreadCrumb;
