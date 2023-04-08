import { type AppType } from "next/app";

import { api } from "~/utils/api";
import {
  ClerkProvider,
  SignedIn,
  SignedOut,
  RedirectToSignIn,
  SignIn
} from "@clerk/nextjs";
import { useRouter } from "next/router";


import "~/styles/globals.css";

// const publicPages = ["/sign-in/[[...index]]", "/sign-up/[[...index]]"];
const publicPages = [""]


const MyApp: AppType = ({ Component, pageProps }) => {
  const { pathname } = useRouter();
  const isPublicPage = publicPages.includes(pathname);

  return (
    <ClerkProvider {...pageProps}>
      {isPublicPage ? (
        <Component {...pageProps} />
      ) : (
        <>
          <SignedIn>
            <Component {...pageProps} />
          </SignedIn>
          <SignedOut>
            {/* <RedirectToSignIn /> */}
            <SignIn/>
          </SignedOut>
        </>
      )}
    </ClerkProvider>
  );
};

export default api.withTRPC(MyApp);