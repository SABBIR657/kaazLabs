import React, { createContext, useCallback, useContext, useEffect, useLayoutEffect, useState } from "react";

// A tiny History API router — enough for a handful of pages, without adding a dependency.
const RouterContext = createContext({ path: "/", navigate: () => {} });

const normalize = (p) => (p.length > 1 ? p.replace(/\/+$/, "") : p);

function scrollToHash(hash, smooth) {
  const el = hash && document.getElementById(decodeURIComponent(hash.slice(1)));
  if (el) el.scrollIntoView({ behavior: smooth ? "smooth" : "auto" });
  return Boolean(el);
}

export function RouterProvider({ children }) {
  const [loc, setLoc] = useState(() => ({
    path: normalize(window.location.pathname),
    hash: window.location.hash,
    restoreY: null,
  }));

  useEffect(() => {
    window.history.scrollRestoration = "manual";
    const onPop = (e) =>
      setLoc({
        path: normalize(window.location.pathname),
        hash: window.location.hash,
        restoreY: e.state?.scrollY ?? 0,
      });
    window.addEventListener("popstate", onPop);
    return () => window.removeEventListener("popstate", onPop);
  }, []);

  // After a page change: restore scroll on back/forward, jump to a #section, or start at the top.
  useLayoutEffect(() => {
    if (loc.restoreY !== null) window.scrollTo({ top: loc.restoreY, behavior: "instant" });
    else if (!scrollToHash(loc.hash, false)) window.scrollTo({ top: 0, behavior: "instant" });
  }, [loc]);

  const navigate = useCallback((to) => {
    const url = new URL(to, window.location.href);
    const path = normalize(url.pathname);
    window.history.replaceState({ ...window.history.state, scrollY: window.scrollY }, "");
    window.history.pushState({ scrollY: 0 }, "", path + url.search + url.hash);

    if (path === loc.path) {
      if (!scrollToHash(url.hash, true)) window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }
    setLoc({ path, hash: url.hash, restoreY: null });
  }, [loc.path]);

  return (
    <RouterContext.Provider value={{ path: loc.path, navigate }}>{children}</RouterContext.Provider>
  );
}

export const useRouter = () => useContext(RouterContext);

export function Link({ to, onClick, target, ...rest }) {
  const { navigate } = useRouter();
  const handleClick = (e) => {
    onClick?.(e);
    if (e.defaultPrevented || e.button !== 0 || target || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) {
      return;
    }
    e.preventDefault();
    navigate(to);
  };
  return <a href={to} target={target} onClick={handleClick} {...rest} />;
}
