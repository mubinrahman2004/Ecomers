"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

const Login = () => {
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });
  const router = useRouter();
  const handelLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        "https://eb-commerce-server.vercel.app/api/v1/auth/login",
        {
          method: "POST",
          headers: {
            accept: "application/json",
            "content-type": "application/json",
          },
          body: JSON.stringify(userData),
        }
      );
      const data = await response.json();
      toast.error(data.error );
      toast.success(data.success);
      document.cookie=`accessToken = ${data.accessToken}`;
      router.push("/");
    } catch (error) {
      console.log(error);
    }
  };


  return (
    <section className="h-screen flex items-center justify-center">
      <form onSubmit={handelLogin} className="w-xl">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto lg:py-0">
          <div className="w-full bg-white rounded-lg shadow border md:mt-0 sm:max-w-md xl:p-0">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <p className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
                Login to your account
              </p>

              <div>
                <label className="block mb-2 text-sm font-medium text-gray-900">
                  Email
                </label>
                <input
                  onChange={(e) =>
                    setUserData((prev) => ({
                      ...prev,
                      email: e.target.value,
                    }))
                  }
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5"
                  placeholder="text your email"
                  id="email"
                  type="email"
                  required
                />
              </div>
              <div>
                <label className="block mb-2 text-sm font-medium text-gray-900">
                  Password
                </label>
                <input
                  onChange={(e) =>
                    setUserData((prev) => ({
                      ...prev,
                      password: e.target.value,
                    }))
                  }
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5"
                  placeholder="••••••••"
                  id="password"
                  type="password"
                  required
                />
              </div>
              <button
                className="w-full bg-blue-500 ho ver:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center  focus:ring-blue-800 text-white"
                type="submit"
              >
                Login
              </button>
              <p>
                Dont't have an account ?
                <Link href="/registration">Sign Up</Link>
              </p>
            </div>
          </div>
        </div>
      </form>
    </section>
  );
};

export default Login;
