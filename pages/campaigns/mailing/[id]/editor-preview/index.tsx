import React from "react";

import { EditorPreviewTemplate } from "@/templates";
import { MainContainer } from "@/components";
import { withAuth } from "@/hocs";

const EditorPreviewPage = () => {
  return <EditorPreviewTemplate />;
};

export default withAuth(EditorPreviewPage);
