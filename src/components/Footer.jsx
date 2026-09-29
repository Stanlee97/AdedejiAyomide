import { ArrowUpRight } from "lucide-react";

function Footer() {
  return (
    <footer className="section-shell">
      <a className="wordmark" href="#home">
        Adedeji Ayomide<span>✳</span>
      </a>
      <p>© {new Date().getFullYear()} Adedeji Ayomide. Built with intention.</p>
      <a className="back-to-top" href="#home">
        BACK TO TOP <ArrowUpRight size={16} />
      </a>
    </footer>
  );
}

export default Footer;
