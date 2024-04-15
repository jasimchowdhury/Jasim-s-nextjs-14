import React from "react";

const id1 = ({ params }: { params: { productsid: string } }) => {
  return <div>hello world{params.productsid}</div>;
};

export default id1;
