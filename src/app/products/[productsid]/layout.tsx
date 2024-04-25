import React, { Children } from "react";

const ProductDetailsLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      {children}
      <h2>Featured Products</h2>
      {/* Carousel Here */}
    </div>
  );
};

export default ProductDetailsLayout;
