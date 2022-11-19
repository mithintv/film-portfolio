// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

type Links = string[];

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Links>
) {
  res
    .status(200)
    .json([
      "Narrative",
      "Music Video",
      "Commercial",
      "Non Fiction",
      "About",
      "Contact",
    ]);
}
