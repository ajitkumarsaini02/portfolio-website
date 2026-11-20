import React, { useState } from "react";
import { motion } from "framer-motion";
import { Copy, Check } from "lucide-react";
import { personalInfo } from "../../data/portfolioData";

const TerminalCard = ({ liveData }) => {
  const [copiedCode, setCopiedCode] = useState(false);

  const terminalCode = `const ajit = {
  name: "${personalInfo.name}",
  education: "B.Tech CSE @ ABESEC (8.48 CGPA)",
  stack: ["React.js", "Node.js", "Express", "MongoDB"],
  dsaSolved: ${liveData.leetcode.totalSolved}, // Total across all: ${liveData.totalSolvedAll}+
  lcRating: ${liveData.leetcode.rating},
  codeChef: "${liveData.codechef.stars}★ (${liveData.codechef.rating})",
  codeforces: "Rating ${liveData.codeforces.rating}",
  featuredProject: "CodeTrack (Full-Stack MERN)"
};`;

  const copyCode = () => {
    navigator.clipboard.writeText(terminalCode);
    setCopiedCode(true);
    setTimeout(() => setCopiedCode(false), 2000);
  };

  return (
    <motion.div
      className="terminal-card"
      animate={{ y: [0, -8, 0] }}
      transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
    >
      <div className="terminal-bar">
        <div className="terminal-dots">
          <span className="dot dot-red"></span>
          <span className="dot dot-yellow"></span>
          <span className="dot dot-green"></span>
        </div>
        <span className="terminal-title">developer.js</span>
        <button
          onClick={copyCode}
          className="icon-btn"
          style={{ width: "28px", height: "28px" }}
          title="Copy Code"
        >
          {copiedCode ? <Check size={14} color="#10B981" /> : <Copy size={14} />}
        </button>
      </div>
      <pre className="terminal-body">
        <code>
          <span className="t-keyword">const</span> <span className="t-var">ajit</span> = &#123;{"\n"}
          {"  "}<span className="t-prop">role</span>: <span className="t-str">"Full-Stack MERN Developer"</span>,{"\n"}
          {"  "}<span className="t-prop">skills</span>: [<span className="t-str">"React.js"</span>, <span className="t-str">"Node.js"</span>, <span className="t-str">"Express"</span>, <span className="t-str">"MongoDB"</span>],{"\n"}
          {"  "}<span className="t-prop">dsaSolved</span>: <span className="t-num">{liveData.leetcode.totalSolved}</span>, <span className="t-prop">lcRating</span>: <span className="t-num">{liveData.leetcode.rating}</span>,{"\n"}
          {"  "}<span className="t-prop">codeChef</span>: <span className="t-str">"{liveData.codechef.stars}★ ({liveData.codechef.rating})"</span>,{"\n"}
          {"  "}<span className="t-prop">totalProblems</span>: <span className="t-num">{liveData.totalSolvedAll}</span>,{"\n"}
          {"  "}<span className="t-prop">college</span>: <span className="t-str">"ABESEC Ghaziabad (8.48 CGPA)"</span>,{"\n"}
          {"  "}<span className="t-prop">featuredProject</span>: <span className="t-str">"CodeTrack MERN Dashboard"</span>{"\n"}
          &#125;;
        </code>
      </pre>
    </motion.div>
  );
};

export default TerminalCard;
