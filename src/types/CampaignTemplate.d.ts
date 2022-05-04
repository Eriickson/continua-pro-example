declare module "@continuapro/entity" {
  export interface CampaignTemplate {
    id: number;
    name?: string;
    description?: string;
    content?: string;
    own?: boolean;
    external_resource_reference?: string;
    design?: JSON;
  }
}
