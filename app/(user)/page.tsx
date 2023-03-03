import React, { FC } from "react";
import { previewData } from "next/headers";
import { groq } from "next-sanity";
import { client } from "../../lib/sanity.client";
import PreviewSuspense from "../../components/PreviewSuspense";
import PreviewBlogList from "../../components/PreviewBlogList";
const query = groq`
  *[_type == "post"] {
    ...,
    author->,
    categories[]->
  } | order(_createdAt desc)
`;

const HomePage = async () => {
  if (previewData()) {
    return (
      <PreviewSuspense
        fallback={
          <div role='status'>
            <p className='text-center text-lg animate-pulse'>
              Loading preview data...
            </p>
          </div>
        }>
        <PreviewBlogList query={query} />
      </PreviewSuspense>
    );
  }

  const posts = await client.fetch(query);
  console.log(posts);

  return (
    <div>
      {/* blogglist */}
      <h2>Not in PREVIEWMODE</h2>
    </div>
  );
};

export default HomePage;
