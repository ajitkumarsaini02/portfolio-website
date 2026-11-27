import { cloudCerts } from "./certificates/cloudCerts";
import { analyticsCerts } from "./certificates/analyticsCerts";
import { webAndAiCerts } from "./certificates/webAndAiCerts";

const certificatesData = [
  ...cloudCerts,
  ...analyticsCerts,
  ...webAndAiCerts,
];

const certificateCategories = [
  { id: "all", label: "All Credentials" },
  { id: "AI & Cloud", label: "AI & Cloud" },
  { id: "Programming", label: "Programming" },
  { id: "Data Analytics", label: "Data Analytics" },
];

const getFeaturedCertifications = () => {
  return certificatesData.filter((cert) => cert.featured);
};

const getHackathonCertificates = () => {
  return certificatesData.filter(
    (cert) => cert.credentialType === "Certificate of Participation",
  );
};

const getCertificationsByCategory = (category) => {
  if (!category || category === "all") return certificatesData;
  return certificatesData.filter((cert) => cert.category === category);
};

export {
  certificatesData,
  certificateCategories,
  getFeaturedCertifications,
  getHackathonCertificates,
  getCertificationsByCategory,
};
export default certificatesData;
