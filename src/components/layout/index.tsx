"use client";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

import { UserProvider } from "@auth0/nextjs-auth0/client";
import { Provider } from "react-redux";
import store from "../../store/index";
import NavBar from "../Navbar/navBar";
import SideBar from "../Sidebar/sideBar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function CustomLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Provider store={store}>
        <UserProvider>
          <body className={inter.className}>
            {/* <NavBar/> */}
            {children}
            </body>
        </UserProvider>
      </Provider>
    </html>
  );
}