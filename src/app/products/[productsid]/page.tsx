import React from "react";
import { Metadata } from "next";

type Props = {
  params: {
    productsid: string;
  };
};

export const generateMetadata = async ({
  params,
}: Props): Promise<Metadata> => {
  const title = await new Promise((resolve) => {
    setTimeout(() => {
      resolve(`iPhone ${params.productsid}`);
    }, 100);
  });
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
