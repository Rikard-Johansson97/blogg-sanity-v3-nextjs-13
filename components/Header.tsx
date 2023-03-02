import Image from "next/image";
import Link from "next/link";
import React, { FC } from "react";

interface HeaderProps {}

const Header: FC<HeaderProps> = ({}) => {
  return (
    <header className=' flex items-center justify-between space-x-2 font-bold px-10 py-5'>
      <div className='flex-1 text-start'>
        <Link href='/'>
          <Image
            className='rounded-full'
            src='https://i.imgur.com/308CpXC.png'
            height={50}
            width={50}
            alt='logo'></Image>
        </Link>
      </div>
      <div className='flex-1 text-center'>Rikard</div>
      <Link
        href='https://github.com/Rikard-Johansson97'
        className='flex-1 text-end text-sm md:text-base text-black rounded-full'>
        Github
      </Link>
    </header>
  );
};

export default Header;
