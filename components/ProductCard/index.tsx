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
    <div
      className="rounded-[3rem] min-h-full"
      onClick={navigateToProductDetailsPage}
    >
      <div className="bg-[#C4C4C4] rounded-t-[0.5rem]">
        <Image
          className="w-[75%] h-[75%] m-auto"
          src={product.photoUrl}
          alt=""
          width={100}
          height={100}
        />
      </div>
      <div className="bg-[#F23939] py-[10px] px-[1.75rem] rounded-[2rem] w-fit ml-[17%] mt-[-1.55rem] absolute">
        <p className="text-white">${product.price}</p>
      </div>
      <div className="bg-white py-[2.5rem] px-[7%] rounded-b-[0.5rem]">
        <h1 className="font-bold text-[#F23939] text-formHeading font-Inter">
          {product.name}
        </h1>
        <h3 className="text-[#464646] text-homeSubHeading font-Inter">
          American Force
        </h3>
        <div className="flex flex-row  mt-[1.5rem] font-Montserrat">
          <div className="flex flex-col w-[65%]">
            <h3 className="font-normal text-sm text-black">Brand</h3>
            <h1 className="font-semibold text-black text-homeSubHeading">
              American Force
            </h1>
          </div>
          <div className="flex flex-col">
            <h3 className="font-normal text-sm text-black">Color</h3>
            <h1 className="font-semibold text-black text-homeSubHeading">
              {product.color ? product.color : ""}
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
