import React from "react";
import { notFound } from "next/navigation";

const ReviewDetails = ({
  params,
}: {
  params: { productsid: string; reviewsId: string };
}) => {
  if (parseInt(params.reviewsId) > 1000) {
    notFound();
  }
  return (
    <div>
      Review {params.reviewsId} for product {params.productsid}
    </div>
  );
};

export default ReviewDetails;
