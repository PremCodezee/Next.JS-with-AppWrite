"use client";
import useAuth from "@/context/useAuth";
import { useRouter } from "next/navigation";
import SignupComponent from "@/components/SignupComponent";

const Signup = () => {
  const router = useRouter();
  const { authStatus } = useAuth();

  if (authStatus) {
    router.replace("/profile");
    return <></>;
  }
  return <SignupComponent />;
};

export default Signup;
