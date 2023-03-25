import React, { useState, useEffect } from "react";
import Checkbox from "@mui/material/Checkbox";
import { pink } from "@mui/material/colors";
import Image from "next/image";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { RiDeleteBin5Line } from "react-icons/ri";
import {
  deleteUserProductInCart,
  updateUserProductQtyInCart,
  getUserCartProducts,
  deleteProductMessageCleanUp,
  setTotalAmount,
} from "@/redux-dev/cart/cart.slice";
import { deleteMessage, totalAmount } from "@/redux-dev/cart/cart.selector";
import { useSelector, useDispatch } from "react-redux";
import { AppDispatch } from "@/redux-dev/store";

type Props = {
  product: any;
  checkedOrNot: boolean;
};

const ProductCart = ({ product, checkedOrNot }: Props) => {
  const dispatch = useDispatch<AppDispatch>();
  const deleteSuccessMessage = useSelector(deleteMessage);
  const [checkboxChecked, setCheckboxChecked] = useState(false);
  const [productQty, setProductQty] = useState(product.quantity);
  const [productPrice, setPriceProduct] = useState(
    product.productCart.price * product.quantity
  );

  const incrementProductQty = () => {
    if (productQty < 10) {
      setProductQty(productQty + 1);
      setPriceProduct((productQty + 1) * product.productCart.price);
      dispatch(
        updateUserProductQtyInCart({
          productId: product.id,
          quantity: productQty + 1,
        })
      );
    }
  };

  const decrementProductQty = () => {
    if (productQty > 0) {
      setProductQty(productQty - 1);
      setPriceProduct((productQty - 1) * product.productCart.price);
      dispatch(
        updateUserProductQtyInCart({
          productId: product.id,
          quantity: productQty - 1,
        })
      );
    }
  };

  const deleteProductInCart = () => {
    if (deleteSuccessMessage) {
      dispatch(deleteProductMessageCleanUp());
    }
    dispatch(deleteUserProductInCart(product.id));
  };

  const checkBoxHandler = (event: any) => {
    if (event.target.checked) {
      setCheckboxChecked(true);
    } else if (!event.target.checked) {
      setCheckboxChecked(false);
    }
    dispatch(
      setTotalAmount({
        price: productPrice,
        condition: event.target.checked,
        item: 1,
      })
    );
  };

  useEffect(() => {
    dispatch(getUserCartProducts());
  }, [deleteSuccessMessage]);

  useEffect(() => {
    setTotalAmount({
      price: productPrice,
      condition: checkedOrNot,
      item: 1,
    });
  }, [checkedOrNot]);

  return (
    <div className="bg-[#1F2B3E] mb-[1rem] py-[0.5rem] sm:py-[1.5rem] justify-between px-[0.5rem] sm:px-[1rem] lg:px-[1.5rem] rounded-[0.5rem] flex flex-row">
      <div className="flex flex-row items-center">
        <div>
          <Checkbox
            className="!p-0 !pr-[0.25rem] sm:!pr-[0.5rem]"
            size="small"
            onChange={(event) => checkBoxHandler(event)}
            checked={checkedOrNot ? checkedOrNot : checkboxChecked}
            sx={{
              color: pink[800],
              "&.Mui-checked": {
                color: pink[600],
              },
            }}
          />
        </div>
        <div className="bg-[#C4C4C4] rounded w-[5.5rem] h-[4.5rem] sm:w-[8rem] sm:h-[6.5rem] lg:w-[11.75rem] lg:h-[8.5rem] p-[0.5rem]">
          <Image
            className="w-full h-full"
            src={
              product.productCart.photoUrl ? product.productCart.photoUrl : ""
            }
            alt=""
            width={100}
            height={100}
          />
        </div>
        <div className="ml-[0.35rem] sm:ml-[0.75rem] lg:ml-[1rem]">
          <h1 className="font-Inter  text-white">
            {product.productCart.name ? product.productCart.name : ""}
          </h1>
          <h3 className="font-Poppins text-[0.75rem] sm:text-[1rem] text-[#00000080]">
            No Brand, Color Family:{" "}
            {product.productCart.color ? product.productCart.color : ""}
          </h3>
          <div className="flex flex-row w-fit items-center  mt-[0.25rem] sm:mt-[1rem] px-[0.5rem] border-[1px] sm:border-2 border-white">
            <RemoveIcon
              className="text-[#ffffff80] text-[1rem] sm:text-[1.5rem]  hover:text-[#F23939]"
              onClick={decrementProductQty}
            />
            <p className="text-white font-medium text-[0.75rem] sm:text-homeSubHeading mx-[0.5rem] sm:mx-[1rem] my-[0rem] sm:my-[0.25rem]">
              {productQty}
            </p>
            <AddIcon
              className="text-[#ffffff80] text-[1rem] sm:text-[1.5rem] hover:text-[#F23939]"
              onClick={incrementProductQty}
            />
          </div>
        </div>
      </div>
      <div className="self-end sm:mr-[1rem] sm:mb-[1rem]">
        <h3 className="font-Inter font-semibold text-white text-[0.90rem] sm:text-homeButtonText">
          {"$" + productPrice}
        </h3>
        <div className="flex flex-row text-[#ffffff80] gap-[0.5rem] items-center sm:mt-[0.75rem]">
          {/* <FavoriteBorderIcon /> */}
          <RiDeleteBin5Line
            className="hover:text-[#F23939] !m-auto text-[1rem] sm:text-[1.25rem]"
            //fontSize="1.25rem"
            onClick={deleteProductInCart}
          />
        </div>
      </div>
    </div>
  );
};

export default ProductCart;
