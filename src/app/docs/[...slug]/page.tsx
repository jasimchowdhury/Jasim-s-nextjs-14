import React from "react";

const docs = ({ params }: { params: { slug: string[] } }) => {
  if (params.slug.length === 3)
    return (
      <div>
        Welcome to the Documents {params.slug[0]} and concept {params.slug[1]}{" "}
        and {params.slug[2]}
      </div>
    );
  else if (params.slug.length === 2) {
    return <h1>viewing docs for feature page 2 {params.slug[1]}</h1>;
  } else if (params.slug.length === 1) {
    return <h1>viewing docs for page 1 {params.slug[0]}</h1>;
  }
};

export default docs;
