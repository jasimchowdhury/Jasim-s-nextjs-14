import React from "react";

const docs2 = ({ params }: { params: { slug: string[] } }) => {
  if (params.slug?.length === 3)
    return (
      <div>
        Welcome to the Documents 2 optional chaining on if else statement using
        ? next to . {params.slug[0]} and concept {params.slug[1]} and{" "}
        {params.slug[2]}
      </div>
    );
  else if (params.slug?.length === 2) {
    return <h1>viewing docs2 for feature page 2 {params.slug[1]}</h1>;
  } else if (params.slug?.length === 1) {
    return <h1>viewing docs2 for page 1 {params.slug[0]}</h1>;
  }
  return <h1>viewing docs2 for page 1 {params.slug?.[1]}</h1>;
};

export default docs2;
