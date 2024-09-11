"use client";
import { NextPage } from "next";
import React from "react";
import { useForm } from "react-hook-form";
import { signIn } from "next-auth/react";

interface Inputs {
  email: string;
  password: string;
}

const Login: NextPage = () => {
  const { register, handleSubmit } = useForm<Inputs>();
  const onSubmit = (data: Inputs) => {
    signIn("credentials", {
      email: data.email,
      password: data.password,
      redirect: true,
      callbackUrl: "/profile",
    });
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <form
        className="flex flex-col gap-4 w-[400px] bg-white p-6 rounded-lg shadow-lg"
        onSubmit={handleSubmit(onSubmit)}
      >
        <h2 className="text-2xl font-bold text-center mb-6">Login</h2>
        <input
          className="p-3 bg-gray-200 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          type="email"
          placeholder="Email"
          {...register("email", { required: true })}
        />
        <input
          className="p-3 bg-gray-200 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          type="password"
          placeholder="Password"
          {...register("password", { required: true })}
        />
        <button
          type="submit"
          className="w-full p-3 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 transition duration-300"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
