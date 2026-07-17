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
    console.log(req.body);

    const { items } = req.body;

    if (!items || items.length === 0) {
      return res.status(400).json({
        error: "Nenhum produto enviado",
      });
    }

    const preference = new Preference(client);

    const response = await preference.create({
      body: {
        items: items.map((item) => ({
          id: String(item.id),
          title: item.title,
          quantity: Number(item.quantity),
          unit_price: Number(item.unit_price),
          currency_id: "BRL",
        })),

        back_urls: {
          success: "https://rayzer-gamer.vercel.app",
          failure: "https://rayzer-gamer.vercel.app",
          pending: "https://rayzer-gamer.vercel.app",
        },

        auto_return: "approved",

      },
    });


    console.log("PREFERÊNCIA CRIADA:");
    console.log(response);


    return res.status(200).json({
      id: response.id,
      init_point: response.init_point,
      sandbox_init_point: response.sandbox_init_point,
    });


  } catch (error) {

    console.error("ERRO MERCADO PAGO:");
    console.error(error);


    return res.status(500).json({
      error: "Erro ao criar preferência",
      message: error.message,
    });

  }

}