"use client";
import appwriteService from "@/appwrite/config";
import useAuth from "@/context/useAuth";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const Logout = () => {
  const router = useRouter();
  const { setAuthStatus } = useAuth();

  useEffect(() => {
    appwriteService.logout().then(() => {
      setAuthStatus(false);
      router.push("/");
    });
  }, []);

  return <></>;
};

export default Logout;
