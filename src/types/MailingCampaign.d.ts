import { CampaignTemplate } from "@continuapro/entity";
import { ContactSegment } from "./ContactSegment";
import { Sender } from "./Sender";

declare module "@continuapro/entity" {
  interface Campaign {
    id: number;
    name: string;
    synced: boolean;
    status: CampaignStatus;
    last_update: string;
    thumbnail_url: string | null;
  }

  interface CampaignSumary {
    id: number;
    status: string;
    name: string;
    description: string;
    subject?: string;
    category: string;
    channel: string;
    contact_segment: ContactSegment;
    sender: Sender;
    campaign_template?: CampaignTemplate;
    content: string;
    /* TODO: String or Object */
    schedule: CampaignSchedule;
    ab_campaign_definition?: string;
    tags: string;
    messages: string[];
    delivery_rate: string;
    cost?: number;
    schedule_date?: string;
  }

  interface Report {
    active_emails: number;
    bounces: number;
    bounce_rate: number;
    bounces_address_changed: number;
    bounces_challenge_response: number;
    bounces_dns_failure: number;
    bounces_full_mailbox: number;
    bounces_hard: number;
    bounces_mail_blocked: number;
    bounces_soft: number;
    bounces_transient: number;
    clicks: number;
    click_rate: number;
    clickthru_rate: number;
    forwards: number;
    implied_opens: number;
    opens: number;
    open_rate: number;
    spams: number;
    unique_clicks: number;
    unique_opens: number;
    unopens: number;
    unopen_rate: number;
    unsubscribes: number;
    unsubscribe_rate: number;
    spam_rate: number;
    sent_emails: number;
    sent_rate: number;
  }

  interface MailingCampaign {
    sumary: CampaignSumary;
    report?: { data: Report };
  }

  type CampaignType = "mailing" | "sms";

  interface UserAgent {
    ip: string;
    os: {
      family: string;
      version: string;
    };
    browser: {
      family: string;
      version: string;
    };
    device: {
      family: string;
      brand: string;
      model: string;
    };
    is_bot: boolean;
    raw: string;
  }
  interface StatsLogItem {
    id: number;
    campaign_id: number;
    email: string;
    type: string;
    timestamp: number;
    occurrences: number;
    clickthru_url: null;
    user_agent: null | UserAgent;
  }
  interface CampaignStatsLog {
    in_queue: StatsLogItem[];
    received: StatsLogItem[];
    sent: StatsLogItem[];
    open: StatsLogItem[];
  }

  interface CampaignSchedule {
    id: number;
    scheduled_at: string;
    scheduling_type: number | "as_soon_as_possible";
    scheduling_timezone: string;
    campaign_id: number;
  }

  type CampaignStatus = "draft" | "scheduled" | "sent" | "all";
}
