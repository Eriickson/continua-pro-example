declare module "@continuapro/redux" {
  interface CreateContactSegmentArgs {
    contact_segment: {
      name: string;
    };
  }

  interface UpdateContactSegmentArgs {
    id: number;
    contact_segment: {
      name: string;
    };
  }
}
