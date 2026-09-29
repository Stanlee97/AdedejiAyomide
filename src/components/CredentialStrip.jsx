import { Award, Code2, Layers3, Globe2 } from "lucide-react";

function CredentialStrip() {
  return (
    <div className="credential-strip">
      <div>
        <Award />
        <span>PMP® CERTIFIED</span>
      </div>
      <span className="strip-star">✳</span>
      <div>
        <Code2 />
        <span>SOFTWARE DEVELOPMENT MANAGER</span>
      </div>
      <span className="strip-star">✳</span>
      <div>
        <Layers3 />
        <span>SOLUTIONS ARCHITECT</span>
      </div>
      <span className="strip-star">✳</span>
      <div>
        <Globe2 />
        <span>LOCAL ROOTS. GLOBAL MINDSET.</span>
      </div>
    </div>
  );
}

export default CredentialStrip;
