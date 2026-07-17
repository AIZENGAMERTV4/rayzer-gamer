import { MercadoPagoConfig, Preference } from "mercadopago";

const client = new MercadoPagoConfig({
  accessToken: process.env.MERCADO_PAGO_ACCESS_TOKEN,
});

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({
      error: "Método não permitido",
    });
  }

  try {
    console.log("BODY RECEBIDO:");
    console.dir(req.body, { depth: null });

    const { items } = req.body;

    const preference = new Preference(client);

    const response = await preference.create({
      body: {
        items,
        back_urls: {
          success: "https://www.google.com",
          failure: "https://www.google.com",
          pending: "https://www.google.com",
        },
        auto_return: "approved",
      },
    });

    console.log("PREFERÊNCIA CRIADA:");
console.dir(response, { depth: null });

return res.status(200).json({
  id: response.id,
  init_point: response.init_point,
  sandbox_init_point: response.sandbox_init_point,
});
  }
}