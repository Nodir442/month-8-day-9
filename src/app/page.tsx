"use client";
import { useSession } from "next-auth/react";
import React from "react";

export default function Home() {
  const { data: session } = useSession();
  console.log(session);

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <h1 className="text-4xl font-bold">
        {session ? "Welcome back!" : "Home Page"}
      </h1>
    </div>
  );
}
