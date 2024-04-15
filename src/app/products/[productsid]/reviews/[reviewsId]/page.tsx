import React from "react";

const ReviewDetails = ({
  params,
}: {
  params: { productsid: string; reviewsId: string };
}) => {
  return (
    <div>
      Review {params.reviewsId} for product {params.productsid}
    </div>
  );
};

export default ReviewDetails;
