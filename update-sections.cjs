const fs = require('fs');
const path = require('path');
const dir = 'src/components';
fs.readdirSync(dir).forEach(file => {
  if (!file.endsWith('.jsx')) return;
  const p = path.join(dir, file);
  let content = fs.readFileSync(p, 'utf8');
  content = content.replace(/<section id="([^"]+)" className="([^"]+)">/g, '<section id="$1" className="$2 snap-start scroll-mt-20">');
  fs.writeFileSync(p, content);
});
