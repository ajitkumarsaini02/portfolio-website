import { useState, useEffect } from "react";

export const sectionIds = [
  "about",
  "skills",
  "projects",
  "experience",
  "achievements",
  "certifications",
  "education",
  "profiles",
  "contact",
];

export function usePortfolioRouting() {
  const [currentPath, setCurrentPath] = useState(() => {
    return window.location.pathname.startsWith("/certificates")
      ? "/certificates"
      : "/";
  });

  // Handle client-side routing on popstate (browser back/forward)
  useEffect(() => {
    const handlePopState = () => {
      const isCerts = window.location.pathname.startsWith("/certificates");
      setCurrentPath(isCerts ? "/certificates" : "/");

      if (!isCerts) {
        const path = window.location.pathname.replace(/^\//, "").toLowerCase();
        if (!path || path === "hero") {
          window.scrollTo({ top: 0, behavior: "smooth" });
        } else if (sectionIds.includes(path)) {
          const el = document.getElementById(path);
          if (el) {
            el.scrollIntoView({ behavior: "smooth" });
          }
        }
      }
    };

    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, []);

  // Handle clean URLs without '#'
  useEffect(() => {
    if (window.location.hash) {
      const rawHash = window.location.hash.replace("#", "");
      const cleanPath = rawHash ? `/${rawHash}` : "/";
      window.history.replaceState(null, "", cleanPath);
      if (rawHash) {
        setTimeout(() => {
          const el = document.getElementById(rawHash);
          if (el) {
            el.scrollIntoView({ behavior: "smooth" });
          }
        }, 150);
      }
    } else {
      const path = window.location.pathname.replace(/^\//, "").toLowerCase();
      if (sectionIds.includes(path)) {
        setTimeout(() => {
          const el = document.getElementById(path);
          if (el) {
            el.scrollIntoView({ behavior: "smooth" });
          }
        }, 150);
      }
    }

    const handleLinkClick = (e) => {
      const anchor = e.target.closest("a");
      if (!anchor) return;
      const href = anchor.getAttribute("href");
      if (!href) return;

      let targetId = null;
      if (href.startsWith("#")) {
        targetId = href.slice(1);
      } else if (
        href.startsWith("/") &&
        href !== "/" &&
        !href.startsWith("/certificates") &&
        !href.includes(".")
      ) {
        const potentialId = href.slice(1).toLowerCase();
        if (sectionIds.includes(potentialId)) {
          targetId = potentialId;
        }
      }

      if (targetId) {
        e.preventDefault();
        const newPath = targetId === "hero" ? "/" : `/${targetId}`;
        window.history.pushState({}, "", newPath);
        if (targetId === "hero") {
          window.scrollTo({ top: 0, behavior: "smooth" });
        } else {
          const el = document.getElementById(targetId);
          if (el) {
            el.scrollIntoView({ behavior: "smooth" });
          }
        }
      } else if (href === "/" || href === "#hero") {
        if (!anchor.closest(".cert-page-wrapper")) {
          e.preventDefault();
          window.history.pushState({}, "", "/");
          window.scrollTo({ top: 0, behavior: "smooth" });
        }
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
