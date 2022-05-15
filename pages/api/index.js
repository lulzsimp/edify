import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
export default async function handler(req, res) {
  if (req.method == "POST") {
    const help_entry = await prisma.help_entry
      .create({
        data: JSON.parse(req.body),
      })
      .catch((err) => {
        throw new Error(err);
      });
    res.json(help_entry);
  } else if (req.method == "GET") {
    res.json(
      await prisma.help_entry.findFirst({
        where: { id: parseInt(req.query.id) },
      })
    );
  }
}
