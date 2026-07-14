const puppeteer = require("puppeteer");

async function buscarProduto(url) {

    const browser = await puppeteer.launch({

        headless: false,

        defaultViewport: null,

        args: [
            "--start-maximized"
        ]

    });

    const page = await browser.newPage();

    await page.goto(url, {

        waitUntil: "networkidle2",

        timeout: 0

    });

    await page.waitForTimeout(5000);

    const produto = await page.evaluate(() => {

        const imagens = [];

        document.querySelectorAll("img").forEach(img => {

            if (img.src.includes("http")) {

                imagens.push(img.src);

            }

        });

        const nome =
            document.querySelector("h1")?.innerText || "";

        const preco =
            document.querySelector("[class*=price]")?.innerText || "";

        return {

            nome,

            preco,

            imagens

        };

    });

    await browser.close();

    return produto;

}

module.exports = buscarProduto;