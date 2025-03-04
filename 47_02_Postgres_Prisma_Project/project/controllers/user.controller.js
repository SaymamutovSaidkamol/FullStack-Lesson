import { client } from "../main.js";

async function findAll(req, res) {
  try {
    let all = await client.users.findMany();

    res.status(200).json({ all });
  } catch (error) {}
}

async function findOne(req, res) {
  try {
    let { id } = req.params;

    let one = await client.users.findFirst({ where: { id: +id } });

    if (!one) {
      return res.status(404).json({ error: "Not Found" });
    }

    if (req.user.id == one.id || req.user.role == "ADMIN") {
      return res.status(200).json({ data: one });
    }

    res.status(401).json({ error: "You cannot see other users' information." });

    res.status(200).json({ all });
  } catch (error) {}
}

export { findAll, findOne };
