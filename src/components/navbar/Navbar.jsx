'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from './navbar.module.css';
import { auth } from '@/lib/auth';
import Header from './header';
import Image from 'next/image';

const Navbar = () => {
  const pathname = usePathname();
  // console.log(pathname);
  // const session = await auth();
  const loadSession = async () => {
    const session = await auth();
    return session;
  };

  return (
    <div
      className={`${styles.container} ${
        pathname === '/' ? ' absolute w-full flex z-10 p-2' : 'z-20 p-2'
      } `}
    >
      {/* <div className={`${styles.container} top-0 z-10 `}> */}
      <Link href="/" className={styles.logo}>
        <Image
          src="/Logo-retina-inverse.png"
          height={50}
          width={50}
          alt="logo"
          className=""
        />
      </Link>
      <div>
        <Header />
        {/* <Links session={loadSession}/> */}
      </div>
      <div className="sm:flex hidden"></div>
    </div>
  );
};

export default Navbar;
