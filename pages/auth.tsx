import { useCallback, useState } from "react";
import Image from "next/image";
import Input from "@/components/Input";

const Auth = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const [variant, setVariant] = useState("login");

  const toggleVariant = useCallback(() => {
    setVariant((currentVariant) =>
      currentVariant === "login" ? "register" : "login"
    );
  }, []);

  return (
    // Auth Background
    <div className="relative h-full w-full bg-[url('/images/hero.jpg')] bg-no-repeat bg-center bg-fixed bg-cover">
      {/* Auth Container */}
      <div className="bg-black w-full h-full lg:bg-opacity-70">
        {/* Navigation */}
        <nav className="py-5 px-12">
          <Image src="/images/logo.png" width={100} height={12} alt="Logo" />
        </nav>
        {/* Form */}
        <div className="flex justify-center">
          <div className="bg-black bg-opacity-70 px-16 py-16 self-center mt-2 lg:h-2/5 lg:max-w-md rounded-md w-full">
            <h2 className="text-white text-3xl mb-8 font-semibold">
              {variant === "login" ? "Sign in" : "Register"}
            </h2>
            <div className="flex flex-col gap-4">
              {/* Switch between Login or Register */}
              {variant === "register" && (
                <Input
                  label="Email"
                  onChange={(ev: any) => setEmail(ev.target.value)}
                  id="email"
                  type="email"
                  value={email}
                />
              )}
              <Input
                label="Username"
                onChange={(ev: any) => setName(ev.target.value)}
                id="name"
                type=""
                value={name}
              />
              <Input
                label="Password"
                onChange={(ev: any) => setPassword(ev.target.value)}
                id="name"
                type="password"
                value={password}
              />
            </div>
            <button className="bg-teal-100 py-3 text-teal-950  text-md font-semibold rounded-md w-full mt-10 hover:bg-green-400 transition">
              {variant === "login" ? "Login" : "Sign Up"}
            </button>
            <div className="text-center">
              <p className="text-neutral-500 mt-12 ">
                {variant === "login"
                  ? "First time using Netflix?"
                  : "Already have an account?"}{" "}
              </p>
              <span
                onClick={toggleVariant}
                className="text-white ml-1 hover:underline cursor-pointer"
              >
                {variant === "login" ? "Create an Account" : "Sign In"}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Auth;
