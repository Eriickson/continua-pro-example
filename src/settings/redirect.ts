export function redirect<T>(destination: string) {
  return {
    redirect: {
      destination,
    },
    props: {} as T,
  };
}
