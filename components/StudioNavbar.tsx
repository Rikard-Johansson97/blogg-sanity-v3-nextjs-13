import React, { FC } from "react";
import { ArrowUturnLeftIcon } from "@heroicons/react/24/solid";
import Link from "next/link";

interface StudioNavbarProps {}

const StudioNavbar: FC<StudioNavbarProps> = (props: any) => {
  return (
    <div>
      <div className='flex item-center p-5'>
        <Link href='/' className='text-[#F7AB0A] flex items-center'>
          <ArrowUturnLeftIcon className='h-6 w-6 mr-2' />
          Go to Website
        </Link>
      </div>
      <>{props.renderDefault(props)}</>
    </div>
  );
};

export default StudioNavbar;
