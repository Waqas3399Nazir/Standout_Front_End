import React from "react";
import Image from "next/image";
import { useRouter } from "next/router";

type Props = {
  product?: any;
};

const ProductCard = ({ product }: Props) => {
  const router = useRouter();

  const navigateToProductDetailsPage = () => {
    router.push(`/product-details?productId=${product.id}`);
  };

  return (
    <>
      <div
        className="hidden sm:block rounded-[3rem] min-h-full cursor-pointer"
        onClick={navigateToProductDetailsPage}
      >
        <div className="bg-[#C4C4C4] rounded-t-[0.5rem]">
          <Image
            className="w-[75%] h-[75%] m-auto"
            src={product.photoUrl ? product.photoUrl : ""}
            alt=""
            width={100}
            height={100}
          />
        </div>
        <div className="bg-[#F23939] py-[10px] px-[1.75rem] rounded-[2rem] w-fit sm:ml-[18%] lg:ml-[15.5%] sm:mt-[-1.25rem] lg:mt-[-1.55rem] absolute">
          <p className="text-white">${product.price}</p>
        </div>
        <div className="bg-white py-[2.5rem] px-[7%] rounded-b-[0.5rem]">
          <h1 className="font-bold truncate text-[#F23939] sm:text-[1rem] lg:text-formHeading font-Inter">
            {product.name}
          </h1>
          <h3 className="text-[#464646] sm:text-[0.90rem] lg:text-homeSubHeading font-Inter">
            {product.brandProduct.brandName}
          </h3>
          <div className="flex flex-row  mt-[1.5rem] font-Montserrat">
            <div className="flex flex-col w-[65%]">
              <h3 className="font-normal sm:text-[0.90rem] lg:text-sm text-black">
                Brand
              </h3>
              <h1 className="font-semibold text-black sm:text-[0.90rem] lg:text-homeSubHeading">
                {product.brandProduct.brandName}
              </h1>
            </div>
            <div className="flex flex-col">
              <h3 className="font-normal text-sm text-black">Color</h3>
              <h1 className="font-semibold truncate text-black sm:text-[0.90rem] lg:text-homeSubHeading">
                {product.color ? product.color : ""}
              </h1>
            </div>
          </div>
        </div>
      </div>
      <div className="block sm:hidden" onClick={navigateToProductDetailsPage}>
        <div className="bg-[#C4C4C4] rounded-[0.5rem]">
          <Image
            className="w-[75%] h-[75%] m-auto"
            src={product.photoUrl ? product.photoUrl : ""}
            alt=""
            width={100}
            height={100}
          />
        </div>
        <div className="mt-[0.25rem] w-full">
          <h1 className=" text-[#F23939] font-medium text-[0.90rem]">
            {product.name}
          </h1>
          <h3 className="text-[#464646] text-[0.75rem] font-Inter">
            {product.brandProduct.brandName}
          </h3>
          <h1 className="font-semibold text-white text-[1.25rem] font-Inter">
            ${product.price}
          </h1>
        </div>
      </div>
    </>
  );
};

export default ProductCard;
