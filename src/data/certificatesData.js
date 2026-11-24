import { cloudCerts } from "./certificates/cloudCerts";
import { analyticsCerts } from "./certificates/analyticsCerts";
import { webAndAiCerts } from "./certificates/webAndAiCerts";

export const certificatesData = [
  ...cloudCerts,
  ...analyticsCerts,
  ...webAndAiCerts,
];

export const certificateCategories = [
  { id: "all", label: "All Credentials" },
  { id: "AI & Cloud", label: "AI & Cloud" },
  { id: "Programming", label: "Programming" },
  { id: "Data Analytics", label: "Data Analytics" },
];

export const getFeaturedCertifications = () => {
  return certificatesData.filter((cert) => cert.featured);
};

export const getHackathonCertificates = () => {
  return certificatesData.filter(
    (cert) => cert.credentialType === "Certificate of Participation",
  );
};

export const getCertificationsByCategory = (category) => {
  if (!category || category === "all") return certificatesData;
  return certificatesData.filter((cert) => cert.category === category);
};
