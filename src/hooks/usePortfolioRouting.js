import { useState, useEffect } from "react";
import { sectionIds, scrollToSection, resolveTargetId } from "./routingUtils";

export { sectionIds };

export function usePortfolioRouting() {
  const [currentPath, setCurrentPath] = useState(() => {
    return window.location.pathname.startsWith("/certificates") ? "/certificates" : "/";
  });

  useEffect(() => {
    const handlePopState = () => {
      const isCerts = window.location.pathname.startsWith("/certificates");
      setCurrentPath(isCerts ? "/certificates" : "/");
      if (!isCerts) {
        const path = window.location.pathname.replace(/^\//, "").toLowerCase();
        scrollToSection(path);
      }
    };

    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, []);

  useEffect(() => {
    const rawPath = window.location.hash ? window.location.hash.replace("#", "") : window.location.pathname.replace(/^\//, "");
    if (window.location.hash) {
      window.history.replaceState(null, "", rawPath ? `/${rawPath}` : "/");
    }
    if (sectionIds.includes(rawPath.toLowerCase())) {
      setTimeout(() => scrollToSection(rawPath.toLowerCase()), 150);
    }

    const handleLinkClick = (e) => {
      const anchor = e.target.closest("a");
      if (!anchor) return;
      const href = anchor.getAttribute("href");
      if (!href) return;

      const targetId = resolveTargetId(href);
      if (targetId) {
        e.preventDefault();
        window.history.pushState({}, "", targetId === "hero" ? "/" : `/${targetId}`);
        scrollToSection(targetId);
      } else if ((href === "/" || href === "#hero") && !anchor.closest(".cert-page-wrapper")) {
        e.preventDefault();
        window.history.pushState({}, "", "/");
        scrollToSection("hero");
      }
    };

    const handleHashChange = () => {
      if (window.location.hash) {
        const raw = window.location.hash.replace("#", "");
        window.history.replaceState(null, "", raw ? `/${raw}` : "/");
      }
    };

    document.addEventListener("click", handleLinkClick);
    window.addEventListener("hashchange", handleHashChange);
    return () => {
      document.removeEventListener("click", handleLinkClick);
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, []);

  const navigateToCertificates = () => {
    window.history.pushState({}, "", "/certificates");
    setCurrentPath("/certificates");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const navigateToHome = () => {
    window.history.pushState({}, "", "/");
    setCurrentPath("/");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return {
    currentPath,
    isCertificatesPage: currentPath === "/certificates",
    navigateToCertificates,
    navigateToHome,
  };
}
