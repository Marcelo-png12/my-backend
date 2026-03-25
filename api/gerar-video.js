export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Método não permitido" });
  }

  const { prompt } = req.body;

  res.status(200).json({
    mensagem: "Backend funcionando!",
    prompt_recebido: prompt
  });
}
