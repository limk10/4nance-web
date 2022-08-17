import Router from "next/router";

export const navigateTo = (path) => {
  typeof window !== "undefined" && Router.push(path);
};
