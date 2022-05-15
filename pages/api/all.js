import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
export default async function handler(req, res) {
  console.log(req);
  if (req.method == "GET") {
    res.json(await prisma.help_entry.findMany());
  }
}
