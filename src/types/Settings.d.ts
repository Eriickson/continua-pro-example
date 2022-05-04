declare module "@continuapro/entity" {
  interface Setting {
    id: number;
    key: string;
    value: string;
    description: string;
    setting_type: "Text" | "file";
    file_url: string;
    rules: any;
  }
}
