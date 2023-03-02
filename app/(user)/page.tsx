import React, { FC } from "react";
import { previewData } from "next/headers";
import { groq } from "next-sanity";

const query = groq`
  *[_type == "post"] {
    ...,
    author=>,categories[] =>
  }

`;

const HomePage = () => {
  if (previewData()) {
    return <div>Preview mode</div>;
  }
  return <div>Not in PREVIEWMODE</div>;
};

export default HomePage;
