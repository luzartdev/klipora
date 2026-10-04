import fs from 'node:fs';
import vm from 'node:vm';

const html = fs.readFileSync(new URL('../index.html', import.meta.url), 'utf8');
const appScript = html.match(/<script>\s*([\s\S]*?)<\/script>/);

if (!appScript) {
  throw new Error('Could not find the Klipora application script.');
}

new vm.Script(appScript[1], { filename: 'index.html:inline-script' });

if (!/<html\s+lang="en"/i.test(html)) {
  throw new Error('The document language must be English.');
}

const ids = [...html.matchAll(/\bid="([^"]+)"/g)].map((match) => match[1]);
const duplicateIds = ids.filter((id, index) => ids.indexOf(id) !== index);
if (duplicateIds.length) {
  throw new Error(`Duplicate HTML IDs: ${[...new Set(duplicateIds)].join(', ')}`);
}

const requiredIds = ['drop', 'file', 'video', 'btnGen', 'model', 'lang', 'tl', 'segList', 'aiFull', 'bSrt', 'bVtt', 'bExp'];
const missingIds = requiredIds.filter((id) => !ids.includes(id));
if (missingIds.length) {
  throw new Error(`Required UI elements are missing: ${missingIds.join(', ')}`);
}

console.log('Klipora checks passed: inline JavaScript syntax, English document language, unique IDs, and required UI elements.');
