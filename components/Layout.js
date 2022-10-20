import Head from "next/head";
import React from "react";
import Link from "next/link";

export default function Layout({ title, children }) {
  return (
    <>
      <Head>
        <title>{title ? title + "- NajimShop" : "NajimShop"}</title>
        <meta name="description" content="Ecommerce Website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex flex-col min-h-screen justify-between">
        <header>
          <nav className="flex h-12 px-4 items-center shadow-md justify-between">
            <Link href="/">
              <a className="font-bold text-lg">NajimShop</a>
            </Link>

            <div>
              <Link href="/cart">
                <a className="p-2">Cart</a>
              </Link>
              <Link href="/login">
                <a className="p-2">Login</a>
              </Link>
            </div>
          </nav>
        </header>
        <main className="container m-auto mt-4 px-4">{children}</main>
        <footer className="flex justify-center items-center h-10 shadow-inner">
          Copyright @2022 NajimShop
        </footer>
      </div>
    </>
  );
}
