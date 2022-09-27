import { NextApiRequest, NextApiResponse } from "next";

import { clerkClient, createClerkClient, getAuth } from "@clerk/nextjs/server";

async function handler(req: NextApiRequest, res: NextApiResponse) {
  console.log("Hello from node handler");
  const auth = getAuth(req);
  // const sessionList = await clerkClient.sessions.getSessionList();
  const myClerkClient = createClerkClient({ apiKey: "test_F0JlukWHLTuyVllLQrPaNHfDRU0zB5TEzp" });
  const mySessionList = await myClerkClient.sessions.getSessionList();
  return res.status(200).json({ runtime: process.env.NEXT_RUNTIME, auth, mySessionList });
}

export default handler;
