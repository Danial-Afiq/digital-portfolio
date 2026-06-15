import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/** Reset scroll position on route change (HashRouter doesn't do this). */
export function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}
