import React, { FC } from "react";
import Head from "next/head";
import { Header } from "../../components/Header/Header";
import { Footer } from "../../components/Footer/Footer";

interface MainLayoutProps {
  title: string;
}

const MainLayout: FC<MainLayoutProps> = ({ title, children }) => {
  return (
    <div className="wrapper">
      <Head>
        <title>{title}</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <main className="main">{children}</main>
      <Footer />
    </div>
  );
};

export { MainLayout };
