import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    absolute: "Metadata Absolute Testing",
  },
};

const blog = () => {
  return <div>My Blog</div>;
};

export default blog;
