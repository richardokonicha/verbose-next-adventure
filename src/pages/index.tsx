import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { useAuth, useUser } from '@clerk/nextjs';
import {
  ClerkProvider,
  SignedIn,
  SignedOut,
  SignInButton,
  SignOutButton,
  UserButton
} from "@clerk/nextjs";



import { api } from "~/utils/api";

const Home: NextPage = () => {

  const { getToken, userId, sessionId } = useAuth();
  const { isLoaded, isSignedIn, user } = useUser()
  
  if (!isLoaded || !isSignedIn) {
    // You can handle the loading or signed state separately
    return null;
  }
  console.log(user, "get")
  const hello = api.example.hello.useQuery({ text: "from tRPC" });

  return (
    <>
      <Head>
        <title>Verbose Next</title>
        <meta name="description" content="Verbose Next" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c]">
        <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16 ">
          <h1 className="text-5xl font-extrabold tracking-tight text-white sm:text-[5rem]">
            Verbose <span className="text-[hsl(280,100%,70%)]">Next</span> App
          </h1>
     
          <p className="text-2xl text-white">
            {hello.data ? hello.data.greeting : "Loading tRPC query..."}
          </p>
            <Link
              className="flex max-w-xs flex-col gap-4 rounded-xl bg-white/10 p-4 text-white hover:bg-white/20"
              href="https://create.t3.gg"
              target="_blank"
              >
              <p className="text-2xl text-white">
                {hello.data ? user.fullName : "Loading userId query..."}
              </p>
            </Link>
            <UserButton />
            <SignOutButton/>
        </div>
      </main>
    </>
  );
};

export default Home;


