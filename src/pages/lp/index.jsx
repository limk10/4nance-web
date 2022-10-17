import { useEffect } from "react";
import Router from "next/router";

export default function LandingPage() {
  useEffect(() => {
    Router.push("/business/signin");
  }, []);

  return <></>;
}
