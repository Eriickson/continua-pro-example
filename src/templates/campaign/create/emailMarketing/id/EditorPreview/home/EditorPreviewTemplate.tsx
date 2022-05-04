import React, { useCallback, useEffect, useRef } from "react";

import { useRouter } from "next/router";

import { Stack } from "@chakra-ui/react";
import EmailEditor from "react-email-editor";

import { Card, CardContainer } from "@/components";
import { useAction, useSelector } from "@/store";
import { useHandleResponse } from "@/hooks";
import { MailingEditorPreviewForm } from "./MailingEditorPreviewForm";
import { EditorPreviewHead } from "./EditorPreviewHead";

export const EditorPreviewTemplate = () => {
  let emailEditorRef = useRef<any>();
  const { updateCampaignTemplate, getCampaign, getCampaignTemplate, createCampaignTemplate, updateCampaign } =
    useAction();

  const { campaign } = useSelector(({ campaigns }) => campaigns.mailing);

  const { query, push } = useRouter();
  const handleResponse = useHandleResponse();

  async function exportHtml() {
    emailEditorRef.current.editor.exportHtml(async (data: any) => {
      const campaign_template = campaign?.sumary.campaign_template;

      if (campaign_template) {
        const response: any = await updateCampaignTemplate({
          id: Number(campaign?.sumary.campaign_template?.id),
          campaign_template: { content: data.html, design: data.design },
          campaignType: "mailing",
        });
        handleResponse(response, () => push(`/campaigns/mailing/${query.id}/settings-view`));
      } else {
        const response: any = await createCampaignTemplate({
          campaignType: "mailing",
          campaign_template: { content: data.html, design: data.design },
        });
        const idCampaignTemplate = response.payload.data.data.id;

        const responsex = await updateCampaign({
          id: Number(query.id),
          campaignType: "mailing",
          campaign: { campaign_template_id: idCampaignTemplate },
        });

        handleResponse(responsex, () => push(`/campaigns/mailing/${query.id}/settings-view`));
      }
    });
  }

  async function handleUpdateCampaignTemplate(newValue: any) {
    const response = await updateCampaignTemplate({
      id: Number(campaign?.sumary.campaign_template?.id),
      campaign_template: { [newValue.name]: newValue.value },
      campaignType: "mailing",
    });
    handleResponse(response);
  }

  useEffect(() => {
    query.id && getCampaign({ id: Number(query.id), campaignType: "mailing" });
  }, [query]);

  useEffect(() => {
    if (campaign?.sumary.campaign_template?.id)
      getCampaignTemplate({ campaignType: "mailing", id: Number(campaign?.sumary.campaign_template?.id) });
  }, [campaign]);

  return (
    <Stack bgColor="gray.100" h="100vh" alignItems="stretch">
      <EditorPreviewHead onSave={exportHtml} />
      <Stack flex="1" px="3">
        <Card>
          <CardContainer>
            <MailingEditorPreviewForm
              onChange={handleUpdateCampaignTemplate}
              defaultValues={{
                name: campaign?.sumary.campaign_template?.name,
                description: campaign?.sumary.campaign_template?.description,
              }}
            />
          </CardContainer>
        </Card>
        <Card style={{ flex: 1, display: "flex" }}>
          {campaign && (
            <EmailEditor
              style={{ flex: 1 }}
              ref={emailEditorRef}
              options={{}}
              tools={{}}
              onLoad={() => emailEditorRef?.current?.editor?.loadDesign(campaign?.sumary.campaign_template?.design)}
            />
          )}
        </Card>
      </Stack>
    </Stack>
  );
};
