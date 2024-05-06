import React from "react";
import Link from "next/link";
const product = () => {
  const productsId = 100;
  return (
    <div>
      <Link href="/">Home</Link>
      <h1>Product List</h1>
      <h1>
        <Link href="products/1">Product 1</Link>
      </h1>
      <h1>
        <Link href="products/2">Product 2</Link>
      </h1>
      <h1>
        <Link href="products/3" replace>
          Product 3
        </Link>
      </h1>
      <h1>
        <Link href={`products/${productsId}`}>Product {productsId}</Link>
      </h1>
    </div>
  );
};

export default product;
