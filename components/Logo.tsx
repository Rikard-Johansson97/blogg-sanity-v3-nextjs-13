import Image from "next/image";
import React, { FC } from "react";

interface LogoProps {}

const Logo: FC<LogoProps> = ({}) => {
  return (
    <div className='flex items-center space-x-2'>
      <Image
        className='rounded-full object-cover'
        height={50}
        width={50}
        src='https://i.imgur.com/p1YVsHy.png'
        alt='LOGO'></Image>
    </div>
  );
};

export default Logo;
