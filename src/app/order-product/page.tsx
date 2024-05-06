"use client";
import React from "react";
import { useRouter } from "next/navigation";
import "../globals.css";

const OrderProduct = () => {
  const router = useRouter();
  const handleClick = () => {
    console.log("Placing your Order");
    router.push("/");
  };
  return (
    <>
      <h1>order product</h1>
      <button onClick={handleClick}>Place order</button>
    </>
  );
};

export default OrderProduct;
