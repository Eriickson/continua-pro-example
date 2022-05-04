import React, { FC } from "react";

import { NextSeo } from "next-seo";

interface SEOProps {
  title?: string;
}

export const SEO: FC<SEOProps> = ({ title }) => {
  return (
    <div>
      <NextSeo title={`Continuapro ${title ? `- ${title}` : ""}`} description="A short description goes here." />
    </div>
  );
};
