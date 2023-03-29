import React from "react";
export const Toast = () => {
  return (
    <div
      className="w-100 bg-gray-800 text-xl lg:text-4xl 2xl:text-6xl text-white shadow-lg"
      role="alert"
    >
      <div className="p-4 lg:p-10 2xl:p-40 w-100 flex items-center justify-center">
        <p className="text-center w-100">
          Great Job! You have successfully run the caisy template. Click
          on&nbsp;
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="/api/onboarding"
            className="font-semibold underline text-green-400"
          >
            this link
          </a>
          &nbsp;to complete the onboarding step. To get rid of this toast, just
          delete it in the code.
        </p>
      </div>
    </div>
  );
};
