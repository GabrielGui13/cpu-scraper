const puppeteer = require("puppeteer");

const scraper = async (data) => {
  const {store, url, cpu} = data
  const browser = await puppeteer.launch(); //headless: false => abre o browser
  const page = await browser.newPage();

  const cpus = []

  for (let c of cpu) {
    await page.goto(url + c.code);

    const [titleXpath] = await page.$x(c.xpath.title);
    const titleProperty = await titleXpath.getProperty("textContent");
    const preTitle = await titleProperty.jsonValue();
    const title = preTitle.split(",")[0];

    const [priceXpath] = await page.$x(c.xpath.price);
    const priceProperty = await priceXpath.getProperty("textContent");
    const price = await priceProperty.jsonValue();

    cpus.push({
      title,
      price
    })
  }

  const info = {
    store,
    cpus
  }

  console.log(info)

  await browser.close();
};

module.exports = scraper;
