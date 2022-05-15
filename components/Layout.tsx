import React, { ReactNode } from "react";
import Link from "next/link";
import Head from "next/head";

type Props = {
  children?: ReactNode;
  title?: string;
};

const Layout = ({ children, title = "This is the default title" }: Props) => (
  <div className='max-w-5xl mx-auto mt-6 grid grid-cols-1 gap-6'>
    <Head>
      <title>{title}</title>
      <meta charSet='utf-8' />
      <meta name='viewport' content='initial-scale=1.0, width=device-width' />
    </Head>
    <header>
      <nav dir='rtl'>
        <Link href='/'>
          <a>صفحه اصلی</a>
        </Link>{" "}
        |{" "}
        <Link href='/about'>
          <a>آخرین آهنگ ها</a>
        </Link>{" "}
        |{" "}
        <Link href='/users'>
          <a>پخش آهنگ</a>
        </Link>
      </nav>
    </header>
    {children}
    <footer>
      <hr />
      <span>Footer</span>
    </footer>
  </div>
);

export default Layout;
