import { Contact } from "./Contact";

export interface ContactSegment {
  id: number;
  name: string;
  contacts: Contact[];
}
