import { RichTextRenderer } from "@caisy/rich-text-react-renderer";
import React from "react";
import { IGenCaisy_Footer } from "../../sdk";

export const Footer: React.FC<IGenCaisy_Footer> = ({ content }) => {
  return (
    <div className="flex items-center justify-center">
      <footer className="prose pb-10 pt-20 flex items-center justify-center">
        {content?.json && <RichTextRenderer node={content?.json} />}
      </footer>
    </div>
  );
};
