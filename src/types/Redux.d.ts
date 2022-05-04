export interface ResponseThunk<T> {
  successful: boolean;
  data: T;
}

declare module "@continuapro/redux" {
  interface ItemsReducers<T> {
    isLoading: boolean;
    hasError: boolean;
    data: null | T;
    err: any;
  }

  interface ItemReducerService<T> {
    isLoading: boolean;
    data: null | T;
    err: any;
    hasError: boolean;
  }
}
