import { MainContainer, SEO } from "@/components";
import { withAuth } from "@/hocs";
import { ManageSegmentTemplate } from "@/templates";

import React from "react";

const ManageSegment = () => {
  return (
    <>
      <SEO title="Administrar Segmentos" />
      <MainContainer>
        <ManageSegmentTemplate />
      </MainContainer>
    </>
  );
};

export default withAuth(ManageSegment);
