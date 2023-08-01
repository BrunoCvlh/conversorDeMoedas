import puppeteer from 'puppeteer';
import readlineSync from 'readline-sync';

console.log('Seja bem vindo ao Bot Conversor de Moeda!')

async function roboMoeda(){
  const browser = await puppeteer.launch({headless: "new"});
  const page = await browser.newPage();
  const moedaBase = readlineSync.question('Informe a moeda base: ') || 'dolar';
  const moedaFinal = readlineSync.question('Informe a moeda desejada: ') || 'real';

  const qualquerUrl = `https://www.google.com/search?q=${moedaBase}+para+${moedaFinal}&rlz=1C1ONGR_pt-PTBR1065BR1065&oq=${moedaBase}+para+${moedaFinal}&gs_lcrp=EgZjaHJvbWUyBggAEEUYOTIHCAEQABiABDIHCAIQABiABDIHCAMQABiABDIHCAQQABiABDIHCAUQABiABDIHCAYQABiABDIHCAcQABiABDIHCAgQABiABDIHCAkQABiABNIBCDE4MDdqMWo3qAIAsAIA&sourceid=chrome&ie=UTF-8`
  await page.goto(qualquerUrl);


  const resultado = await page.evaluate(() => {
    return document.querySelector(".lWzCpb.a61j6").value
})

console.log(`O valor de 1 ${moedaBase} em ${moedaFinal} é ${resultado}`);
await browser.close();
}

roboMoeda();


async function capturaDaMoeda(){
  const moeda1 = document.querySelector('#moeda1').value
  alert(moeda1)
}