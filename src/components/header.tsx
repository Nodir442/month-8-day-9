"use client";
import React from "react";
import { useSession } from "next-auth/react";
import Link from "next/link";

export const Header = () => {
  const { data: session } = useSession();
  
  return (
    <header className="flex items-center justify-between p-5 bg-blue-500 shadow-md">
      <nav className="flex gap-4">
        <Link href="/" className="text-white hover:text-gray-200 transition">
          Home
        </Link>
        {session && (
          <Link href="/profile" className="text-white hover:text-gray-200 transition">
            Profile
          </Link>
        )}
        <Link href="/register" className="text-white hover:text-gray-200 transition">
          Register
        </Link>
        <Link href="/login" className="text-white hover:text-gray-200 transition">
          Login
        </Link>
      </nav>
      {session && <p className="text-white">Welcome, {session.user?.name}</p>}
    </header>
  );
};
