import { ContactSegment } from "./ContactSegment";

declare module "@continuapro/entity" {
  interface SmsCampaign {
    id: number;
    name: string;
    contact_segment: ContactSegment;
    cost?: number;
    delivered?: number;
    delivery_rate?: number;
    exected_at?: string;
    scheduled_at?: string;
    segment: ContactSegment;
    sent?: number;
    status: string;
    synced: boolean;
    last_update: string;
  }
}
