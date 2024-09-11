"use client";
import { NextPage } from "next";
import React from "react";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";

interface Inputs {
  name: string;
  email: string;
  password: string;
}

const Register: NextPage = () => {
  const { register, handleSubmit } = useForm<Inputs>();
  const router = useRouter();
  const onSubmit = (data: Inputs) => {
    fetch("http://localhost:3000/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        router.push("/login");
      });
  };

  return (
    <div className="mx-auto max-w-[1200px] py-10">
      <form
        className="flex flex-col gap-4 w-[500px] mx-auto p-5 bg-gray-100 rounded-lg shadow-md"
        onSubmit={handleSubmit(onSubmit)}
      >
        <input
          className="bg-white border border-gray-300 rounded-md p-3"
          type="text"
          placeholder="Enter your name"
          {...register("name", { required: true })}
        />
        <input
          className="bg-white border border-gray-300 rounded-md p-3"
          type="email"
          placeholder="Enter your email"
          {...register("email", { required: true })}
        />
        <input
          className="bg-white border border-gray-300 rounded-md p-3"
          type="password"
          placeholder="Enter your password"
          {...register("password", { required: true })}
        />
        <button
          type="submit"
          className="bg-blue-500 text-white rounded-md py-2 hover:bg-blue-600 transition duration-300"
        >
          Register
        </button>
      </form>
    </div>
  );
};

export default Register;
