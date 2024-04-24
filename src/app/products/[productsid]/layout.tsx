import React, { Children } from "react";

const ProductDetailsLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      {children}
      <h2>Featured Products - new layout from product id</h2>
      {/* Carousel Here */}
    </div>
  );
};

export default ProductDetailsLayout;
