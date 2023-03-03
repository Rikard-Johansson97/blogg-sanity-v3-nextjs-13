"use client";
import React, { FC } from "react";
import { usePreview } from "../lib/sanity.preview";
import BlogList from "./BlogList";

interface PreviewBlogListProps {
  query: string;
}

const PreviewBlogList: FC<PreviewBlogListProps> = ({ query }) => {
  const posts = usePreview(null, query);

  return (
    <div>
      <BlogList posts={posts} />
    </div>
  );
};

export default PreviewBlogList;
