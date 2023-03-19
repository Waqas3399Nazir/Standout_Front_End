import React, { useState, useEffect } from "react";
import Checkbox from "@mui/material/Checkbox";
import { pink } from "@mui/material/colors";
import Image from "next/image";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { RiDeleteBin5Line } from "react-icons/ri";

//testing start
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
//testing end

type Props = {
  product: any;
  checkedOrNot: boolean;
};

const ProductCart = ({ product, checkedOrNot }: Props) => {
  //testing start
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

  //testing end
  return (
    <div className="bg-[#1F2B3E] mb-[1rem] py-[1.5rem] justify-between px-[1.5rem] rounded-[0.5rem] flex flex-row">
      <div className="flex flex-row items-center">
        <div>
          <Checkbox
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
        <div className="bg-[#C4C4C4] rounded w-[11.75rem] h-[9.5rem] p-[0.5rem]">
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
        <div className="ml-[1rem]">
          <h1 className="font-Inter text-white">
            {product.productCart.name ? product.productCart.name : ""}
          </h1>
          <h3 className="font-Poppins text-[#00000080]">
            No Brand, Color Family:{" "}
            {product.productCart.color ? product.productCart.color : ""}
          </h3>
          <div className="flex flex-row w-fit items-center mt-[1rem] px-[0.5rem] border-2 border-white">
            <RemoveIcon
              className="text-[#ffffff80]  hover:text-[#F23939]"
              onClick={decrementProductQty}
            />
            <p className="text-white font-medium text-homeSubHeading mx-[1rem] my-[0.25rem]">
              {productQty}
            </p>
            <AddIcon
              className="text-[#ffffff80] hover:text-[#F23939]"
              onClick={incrementProductQty}
            />
          </div>
        </div>
      </div>
      <div className="self-end mr-[1rem] mb-[1rem]">
        <h3 className="font-Inter font-semibold text-white text-homeButtonText">
          {"$" + productPrice}
        </h3>
        <div className="flex flex-row text-[#ffffff80] gap-[0.5rem] items-center mt-[0.75rem]">
          {/* <FavoriteBorderIcon /> */}
          <RiDeleteBin5Line
            className="hover:text-[#F23939]"
            fontSize="1.25rem"
            onClick={deleteProductInCart}
          />
        </div>
      </div>
    </div>
  );
};

export default ProductCart;
