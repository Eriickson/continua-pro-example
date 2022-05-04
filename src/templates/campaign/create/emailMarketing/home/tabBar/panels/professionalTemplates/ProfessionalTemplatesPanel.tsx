import { SimpleGrid } from "@chakra-ui/react";
import React, { Fragment } from "react";
import { useSelector } from "@/store";
import { TemplatePreviewModal } from "./TemplatePreviewModal";

export const ProfessionalTemplatesPanel = () => {
  const { campaignTemplates } = useSelector(({ campaignTemplates }) => campaignTemplates.mailing);

  console.log(campaignTemplates);

  return (
    <SimpleGrid gap={3} columns={12}>
      {campaignTemplates.map((campaignTemplate) => (
        <Fragment key={campaignTemplate.id}>
          <TemplatePreviewModal campaignTemplate={campaignTemplate} />
        </Fragment>
      ))}
    </SimpleGrid>
  );
};
