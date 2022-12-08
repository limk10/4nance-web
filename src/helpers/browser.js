export const getPathname = () =>
  typeof window !== "undefined" && window.location.pathname;
