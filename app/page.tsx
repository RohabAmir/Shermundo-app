"use client";
import React from "react";
import { useUser, withPageAuthRequired } from "@auth0/nextjs-auth0/client";
import ProfileSetupPage from "@/src/container/profileSetupPage";


const Page = () => {
  // const { user, error, isLoading } = useUser();

  // if (isLoading) return <div>Loading...</div>;
  // if (error) return <div>{error.message}</div>;

  // if (user) {
  //   console.log("userDetails>>" , user);
  //   return (
  //     <div>
  //       Welcome
  //       <h2>{user.name}</h2>
  //       <p>{user.email}</p>
  //       <a href="/api/auth/logout">Logout</a>
  //     </div>
  //   );
  // }
  return <>
    <ProfileSetupPage />
  </>;
};

export default withPageAuthRequired(Page);
