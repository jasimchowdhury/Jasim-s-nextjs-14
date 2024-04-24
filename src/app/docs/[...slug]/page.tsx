import React from "react";
import Image from "next/image";

const docs = ({ params }: { params: { slug: string[] } }) => {
  if (params.slug.length === 3)
    return (
      <div>
        Welcome to{" "}
        <Image
          src="/vercel.jpg"
          width={250}
          height={300}
          alt="Picture of the author"
        />{" "}
        the Documents {params.slug[0]} and concept {params.slug[1]} and{" "}
        {params.slug[2]} All the three slugs
      </div>
    );
  else if (params.slug.length === 2) {
    return <h1>viewing docs Slug 2 {params.slug[1]}</h1>;
  } else if (params.slug.length === 1) {
    return <h1>viewing docs Slug 1 {params.slug[0]}</h1>;
  }
};

export default docs;
