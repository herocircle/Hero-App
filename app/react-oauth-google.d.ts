declare module '@react-oauth/google' {
  export function useGoogleLogin(options: {
    flow: 'implicit';
    onSuccess: (response: any) => void;
    onError: (error: any) => void;
  }): void;
}
