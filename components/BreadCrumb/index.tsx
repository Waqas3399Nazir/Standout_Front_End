import React from "react";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";

function handleClick(event: React.MouseEvent<HTMLDivElement, MouseEvent>) {
  event.preventDefault();
}

type Props = {
  brandName: string;
  productName: string;
};

const BreadCrumb = ({ brandName, productName }: Props) => {
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
        >
          {brandName}
        </Link>
        <Link
          className="text-[#ffffff80] hover:text-[#F23939] cursor-pointer"
          underline="hover"
          color="text.primary"
          aria-current="page"
        >
          {productName}
        </Link>
      </Breadcrumbs>
    </div>
  );
};

export default BreadCrumb;
