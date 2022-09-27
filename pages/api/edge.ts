import type { NextRequest } from "next/server";
import { clerkClient, createClerkClient, getAuth } from "@clerk/nextjs/server";
// import { getAuth } from "@clerk/nextjs/server";

export const config = {
  runtime: "experimental-edge",
};

export default async function handler(req: NextRequest) {
  console.log("Hello from edge handler");
  const { searchParams } = new URL(req.url);

  const auth = getAuth(req);
  const myClerkClient = createClerkClient({ apiKey: "test_F0JlukWHLTuyVllLQrPaNHfDRU0zB5TEzp" });
  const sessionList = myClerkClient.sessions.getSessionList();
  // const sessionList = await clerkClient.sessions.getSessionList();
  const mySessionList = await myClerkClient.sessions.getSessionList();

  const body = JSON.stringify({
    auth,
    sessionList,
    mySessionList,
  });

  return new Response(body, {
    headers: {
      "content-type": "application/json",
      "x-nikos": "helllo",
      "cache-control": "public, s-maxage=1200, stale-while-revalidate=600",
    },
  });
}
