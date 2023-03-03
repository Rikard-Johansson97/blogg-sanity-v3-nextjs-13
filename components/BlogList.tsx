import React, { FC } from "react";

interface BlogListProps {
  posts: Post[];
}

const BlogList: FC<BlogListProps> = ({ posts }) => {
  console.log("BlogList", posts.length);
  return <div>BlogList</div>;
};

export default BlogList;
