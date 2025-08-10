"use client";

import ROUTES from "@/constants/routes";
import { signIn } from "next-auth/react";
import Image from "next/image";
import { toast } from "sonner";
import { Button } from "../ui/button";

const SocialAuthForm = () => {
  const handelSignIn = async (provider: "github" | "google") => {
    try {
      await signIn(provider, {
        callbackUrl: ROUTES.HOME,
      });
    } catch (error) {
      console.log(error);

      toast("Sign-in Failed", {
        description:
          error instanceof Error
            ? error.message
            : "An error occurred during sign-in",
      });
    }
  };

  return (
    <div className="mt-10 flex flex-wrap gap-2.5">
      <Button
        className="background-dark400_light900 body-medium text-dark-200_light800 min-h-12 flex-1 px-4 py-3 rounded-2"
        onClick={() => handelSignIn("github")}
      >
        <Image
          src="/icons/github.svg"
          width={20}
          height={20}
          alt="Github Logo"
          className="invert-colors mr-2.5 object-contain"
        />
        <span>Log in With Github</span>
      </Button>

      <Button
        className="background-dark400_light900 body-medium text-dark-200_light800 min-h-12 flex-1 px-4 py-3 rounded-2"
        onClick={() => handelSignIn("google")}
      >
        <Image
          src="/icons/google.svg"
          width={20}
          height={20}
          alt="Github Logo"
          className="mr-2.5 object-contain"
        />
        <span>Log in With Google</span>
      </Button>
    </div>
  );
};

export default SocialAuthForm;
