import { GetServerSideProps, NextPage } from "next";
import { SignedIn, useUser } from "@clerk/nextjs";
import { buildClerkProps, clerkClient, createClerkClient, getAuth } from "@clerk/nextjs/server";

export const config = {
  runtime: "experimental-edge",
};

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  const { userId, sessionId, orgId } = getAuth(req);
  console.log({ userId, sessionId, orgId });

  const user = userId ? await clerkClient.users.getUser(userId) : undefined;
  console.log({ user });

  const myClerkClient = createClerkClient();
  const session = sessionId ? await myClerkClient.sessions.getSession(sessionId) : undefined;
  console.log({ session });

  return { props: { message: Math.random(), ...buildClerkProps(req, { session, user }) } };
};

const Page: NextPage = (props) => {
  const { user, isLoaded } = useUser();
  return (
    <div>
      <h1>GSSP EDGE</h1>
      <h2>SSR test</h2>
      <ul>
        <li>ClerkJS Loaded: {isLoaded ? "true" : "false"}</li>
        <SignedIn>
          <li>Signed in component hydrated</li>
        </SignedIn>
      </ul>
      <h2>props</h2>
      <pre>{JSON.stringify(props, null, 4)}</pre>
      <h2>hook</h2>
      <pre>{JSON.stringify(user, null, 4)}</pre>
    </div>
  );
};

export default Page;
