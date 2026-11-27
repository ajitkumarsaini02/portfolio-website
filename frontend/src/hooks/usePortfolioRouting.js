import { useState, useEffect } from "react";
import { sectionIds, scrollToSection, resolveTargetId } from "./routingUtils";

const usePortfolioRouting = () => {
  const [currentPath, setCurrentPath] = useState(() => {
    const p = window.location.pathname;
    if (p.startsWith("/certificates")) return "/certificates";
    if (p.startsWith("/admin")) return "/admin";
    return "/";
  });

  useEffect(() => {
    const handlePopState = () => {
      const p = window.location.pathname;
      if (p.startsWith("/certificates")) setCurrentPath("/certificates");
      else if (p.startsWith("/admin")) setCurrentPath("/admin");
      else {
        setCurrentPath("/");
        scrollToSection(p.replace(/^\//, "").toLowerCase());
      }
    };
    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, []);

  useEffect(() => {
    const rawPath = window.location.hash ? window.location.hash.replace("#", "") : window.location.pathname.replace(/^\//, "");
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
      } else if (href === "/admin") {
        e.preventDefault();
        window.history.pushState({}, "", "/admin");
        setCurrentPath("/admin");
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    };

    document.addEventListener("click", handleLinkClick);
    return () => document.removeEventListener("click", handleLinkClick);
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
    isAdminPage: currentPath === "/admin",
    navigateToCertificates,
    navigateToHome,
  };
};

export { usePortfolioRouting, sectionIds };
export default usePortfolioRouting;
