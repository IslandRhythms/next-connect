// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { connectToDatabase } from "./connect";

export default async function handler(req, res) {

  const conn = await connectToDatabase();
  console.log('connected to the db locally');
  console.log('here is the connection var', conn);
  res.status(200).json({ name: "John Doe" });
}
