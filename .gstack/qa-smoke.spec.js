const { test } = require("@playwright/test");

const targets = [
  { name: "home", url: "http://127.0.0.1:4173/" },
  { name: "love", url: "http://127.0.0.1:4173/pages/love.html" },
  { name: "career", url: "http://127.0.0.1:4173/pages/career.html" },
  { name: "wealth", url: "http://127.0.0.1:4173/pages/wealth.html" },
  { name: "today", url: "http://127.0.0.1:4173/pages/today.html" },
  { name: "community", url: "http://127.0.0.1:4173/pages/community.html" },
  { name: "result", url: "http://127.0.0.1:4173/pages/result.html" },
  { name: "course-basic", url: "http://127.0.0.1:4173/pages/course-basic.html" }
];

test('smoke', async ({ page }) => {
  const issues = [];
  const consoleErrors = [];
  page.on('console', msg => {
    if (msg.type() === 'error') consoleErrors.push(msg.text());
  });
  page.on('pageerror', err => consoleErrors.push('PAGEERROR: ' + err.message));
  page.on('response', res => {
    if (res.status() >= 400) issues.push(`HTTP ${res.status()} ${res.url()}`);
  });

  for (const target of targets) {
    console.log(`VISIT ${target.name} ${target.url}`);
    await page.goto(target.url, { waitUntil: 'networkidle' });
    await page.screenshot({ path: `.gstack/qa-reports/screenshots/${target.name}.png`, fullPage: true });
    const title = await page.title();
    const h1 = await page.locator('h1').first().textContent().catch(() => '');
    console.log(`PAGE ${target.name} TITLE=${title}`);
    console.log(`H1 ${target.name} ${(h1 || '').trim()}`);
  }

  if (issues.length) console.log('ISSUES_START\n' + issues.join('\n') + '\nISSUES_END');
  if (consoleErrors.length) console.log('CONSOLE_START\n' + consoleErrors.join('\n') + '\nCONSOLE_END');
});
