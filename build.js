const puppeteer = require('puppeteer');
const fs = require('fs');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('https://www.jetorget.com/');
  await page.waitFor(5000);
  const content = await page.content();
  fs.writeFile("build/index.html", content, function(err) {
    if(err) {
        return console.log(err);
    }

    console.log("The file was saved!");
    }); 

  await browser.close();
})();