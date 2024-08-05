"use client";
import useAuth from "@/context/useAuth";
import { useRouter } from "next/navigation";
import Login from "@/components/Login";

const LoginPage = () => {
  const router = useRouter();
  const { authStatus } = useAuth();

  if (authStatus) {
    router.replace("/profile");
    return <></>;
  }
  return <Login />;
};

export default LoginPage;
