import React, { FC } from "react";

interface BannerProps {}

const Banner: FC<BannerProps> = ({}) => {
  return (
    <div className='flex flex-col lg:flex-row lg:space-x-5 justify-between font bold px-10 py-5 mb-10'>
      <div>
        <h1 className='text-7xl font-extrabold'>Rikard's Daily Blog</h1>
      </div>
      <p className='pt-5 md:mt-0 text-gray-400 max-w-sm'>
        The demo blog demonstrates how to set up a Sanity-Next.js project and
        how to use Sanity Studio to create and manage blog content. It also
        showcases some of the key features of the Next.js framework, such as
        server-side rendering and automatic code splitting, which help to
        optimize the performance of the website.
      </p>
    </div>
  );
};

export default Banner;
