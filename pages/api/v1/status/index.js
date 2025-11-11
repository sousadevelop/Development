import database from "../../../../infra/database.js";

async function status(req, res) {
  const result = await database.query("SELECT 5 + 9 as sum;");
  console.log(result.rows);
  res.status(200).json({ chave: "coração quero vc" });
}

export default status;
