import React, { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Checkbox from "@mui/material/Checkbox";
import { pink } from "@mui/material/colors";
import { RiDeleteBin5Line } from "react-icons/ri";
import Button from "@mui/material/Button";
import ProductCart from "@/components/ProductCart";
import { useRouter } from "next/router";
//import { deleteAllProductsInCart } from "@/redux-dev/cart/cart.slice";
import {
  cartProducts,
  totalAmount,
  totalItemsSelected,
  // message,
  // activityInProgress,
} from "@/redux-dev/cart/cart.selector";
import { useSelector, useDispatch } from "react-redux";
import { AppDispatch } from "@/redux-dev/store";

const Cart = () => {
  const router = useRouter();
  // const dispatch = useDispatch<AppDispatch>();
  const userProducts = useSelector(cartProducts);
  const totalCost = useSelector(totalAmount);
  // const deleteMessage = useSelector(message);
  // const loader = useSelector(activityInProgress);
  const itemsSelected = useSelector(totalItemsSelected);
  const [selectedItems, setSelectedItems] = useState(0);
  const [selectedOrNot, setSelectedOrNot] = useState(false);

  const navigateToCheckoutPage = () => {
    router.push("/checkout");
  };

  const checkBoxHandler = (event: any) => {
    if (event.target.checked) {
      setSelectedItems(userProducts.length);
      setSelectedOrNot(true);
    } else if (!event.target.checked) {
      setSelectedItems(0);
      setSelectedOrNot(false);
    }
  };

  return (
    <>
      <Header />
      <section className="p-sectionXPadding bg-black">
        <div className="bg-[#EBEBEB] px-[1.25rem] rounded-[0.5rem] flex flex-row justify-between w-full items-center">
          <div className="flex flex-row gap-[1rem] items-center">
            <Checkbox
              onChange={(event) => checkBoxHandler(event)}
              sx={{
                color: pink[800],
                "&.Mui-checked": {
                  color: pink[600],
                },
              }}
            />
            <h1 className="text-black font-Inter font-semibold text-footerItem uppercase">
              Select all items ({selectedOrNot ? selectedItems : itemsSelected}{" "}
              item(s))
            </h1>
          </div>
          <div className="flex flex-row gap-[0.5rem] text-[#000000b3]">
            <RiDeleteBin5Line fontSize="1.25rem" />
            <h1 className="uppercase font-Inter font-semibold">Delete</h1>
          </div>
        </div>
      </section>
      <section className="p-sectionXPadding bg-black pt-[3rem]">
        <div className="flex flex-row justify-between">
          <div className=" w-[62%]">
            {/* {deleteMessage ? <h1>Products Deleted Successfully</h1> : ""} */}
            {userProducts ? (
              <>
                {userProducts.map((product: any) => {
                  return (
                    <ProductCart
                      product={product}
                      key={product.id}
                      //testing
                      checkedOrNot={selectedOrNot}
                    />
                  );
                })}
              </>
            ) : (
              <h1 className="text-white">User Have No Product</h1>
            )}
          </div>
          <div className="text-white font-Inter bg-[#1F2B3E] h-fit rounded-[0.5rem] py-[2.5rem] px-[5%] w-[36%]">
            <h1 className="font-semibold text-footerItem">Order Summary</h1>
            <div className="font-normal text-homeSubHeading flex flex-row justify-between">
              <h3>
                Subtotal({selectedOrNot ? selectedItems : itemsSelected} Items)
              </h3>
              <h3>$. {totalCost?.toFixed(2)}</h3>
            </div>
            <div className="font-normal text-homeSubHeading flex flex-row justify-between mt-[4rem]">
              <h3>Total</h3>
              <h3 className="text-[#F23939]">$. {totalCost?.toFixed(2)}</h3>
            </div>
            <div className="text-center">
              <Button
                className="w-[85%] py-[1rem] bg-[#F23939] text-white border-[#F23939] rounded-[0.5rem] mt-[1.25rem] hover:text-white hover:border-[#F23939] hover:bg-[#F23939]"
                variant="outlined"
                onClick={navigateToCheckoutPage}
              >
                Proceed to checkout
              </Button>
            </div>
          </div>
        </div>
      </section>
      {/* <section className="bg-black p-productPagePadding text-center">
        <h1 className="text-white font-heading font-bold text-heading uppercase">
          Shop more easy to use essentials
        </h1>
      </section> */}
      <Footer />
    </>
  );
};

export default Cart;
