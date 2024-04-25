import React from "react";
import { Metadata } from "next";

type Props = {
  params: {
    productsid: string;
  };
};

export const generateMetadata = ({ params }: Props): Metadata => {
  return {
    title: `Product ${params.productsid}`,
  };
};

const id1 = ({ params }: Props) =>
  // { params: { productsid: string } }
  {
    return <div>Product Folder {params.productsid}</div>;
  };

export default id1;
