const MONITORED_PROJECTS = [
  { id: "codetrack", name: "CodeTrack", url: "https://codetrack-rho.vercel.app" },
  { id: "portfolio", name: "Portfolio Website", url: "https://ajit-kumar-saini-portfolio.vercel.app" },
];

let uptimeCache = {
  lastChecked: null,
  projects: {},
};

const pingProjects = async () => {
  const results = {};

  await Promise.allSettled(
    MONITORED_PROJECTS.map(async (proj) => {
      const start = Date.now();
      try {
        const res = await fetch(proj.url, {
          method: "HEAD",
          signal: AbortSignal.timeout(6000),
        });
        const latencyMs = Date.now() - start;
        results[proj.id] = {
          name: proj.name,
          url: proj.url,
          status: res.ok ? "online" : "degraded",
          statusCode: res.status,
          latencyMs,
          lastChecked: new Date().toISOString(),
        };
      } catch (err) {
        results[proj.id] = {
          name: proj.name,
          url: proj.url,
          status: "offline",
          latencyMs: Date.now() - start,
          error: err.message,
          lastChecked: new Date().toISOString(),
        };
      }
    })
  );

  uptimeCache = {
    lastChecked: new Date().toISOString(),
    projects: results,
  };

  return uptimeCache;
};

const getUptimeStatus = async () => {
  if (!uptimeCache.lastChecked) {
    return await pingProjects();
  }
  return uptimeCache;
};

export { pingProjects, getUptimeStatus };
