import React from "react";
import { Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-muted-foreground text-white text-center p-4">
      <div className="pb-4">
        <p className="font-tommymedium">&copy; 2024 Handflow</p>
      </div>
      <div className="flex justify-center items-center space-x-12 text-sm">
        <div className="flex justify-center items-center space-x-1">
          <Mail size={"16px"} />
          <p className="font-freightmedium">
            <a href="mailto:apparentlysuji@gmail.com">Sujith</a>
          </p>
        </div>
        <div className="flex justify-center items-center space-x-1">
          <Mail size={"16px"} />
          <p className="font-freightmedium">
            <a href="mailto:sumedhris@gmail.com">Sumedh</a>
          </p>
        </div>
        <div className="flex justify-center items-center space-x-1">
          <Mail size={"16px"} />
          <p className="font-freightmedium">
            <a href="mailto:girishkanna715@gmail.com">Girish</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
