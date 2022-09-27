import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ClerkProvider, SignInButton, UserButton } from "@clerk/nextjs";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ClerkProvider {...pageProps}>
      <div style={{ position: "fixed", top: "1rem", right: "1rem" }}>
        <UserButton />
        <SignInButton mode="modal" />
      </div>
      <Component {...pageProps} />
    </ClerkProvider>
  );
}

export default MyApp;
