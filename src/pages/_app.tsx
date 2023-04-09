import { type AppType } from "next/app";

import { api } from "~/utils/api";
import {
  ClerkProvider,
  SignedIn,
  SignedOut,
  // RedirectToSignIn,
  SignIn
} from "@clerk/nextjs";
import { useRouter } from "next/router";
import Head from "next/head";
import { Toaster } from "react-hot-toast";

import "~/styles/globals.css";

// const publicPages = ["/sign-in/[[...index]]", "/sign-up/[[...index]]"];
// const publicPages = [""]


// const MyApp: AppType = ({ Component, pageProps }) => {
//   const { pathname } = useRouter();
//   const isPublicPage = publicPages.includes(pathname);

//   return (
//     <ClerkProvider {...pageProps}>
//       {isPublicPage ? (
//         <Component {...pageProps} />
//       ) : (
//         <>
//           <SignedIn>
//             <Component {...pageProps} />
//           </SignedIn>
//           <SignedOut>
//             {/* <RedirectToSignIn /> */}
//             <SignIn />
//           </SignedOut>
//         </>
//       )}
//     </ClerkProvider>
//   );
// };



const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <ClerkProvider {...pageProps}>
      <Head>
        <title>Verbose</title>
        <meta name="description" content="💭" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Toaster position="bottom-center" />
      <Component {...pageProps} />
    </ClerkProvider>
  );
};

export default api.withTRPC(MyApp);