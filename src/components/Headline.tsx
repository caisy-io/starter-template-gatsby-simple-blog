import React from "react";
import { IGenCaisy_Headline } from "../../sdk";
import { CenterContainer } from "./CenterContainer";

export const Headline: React.FC<IGenCaisy_Headline> = ({
  headline,
  subheadline,
}) => {
  return (
    <CenterContainer>
      <div className="mb-8 flex flex-col justify-start items-center gap-2.5">
        {headline && (
          <h1 className="text-4xl font-bold text-left text-slate-900">
            {headline}
          </h1>
        )}
        {subheadline && (
          <h4 className="mt-2 text-xl text-center text-gray-400">
            {subheadline}
          </h4>
        )}
      </div>
    </CenterContainer>
  );
};
