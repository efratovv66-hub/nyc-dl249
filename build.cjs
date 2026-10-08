const fs = require('node:fs');
const path = require('node:path');
const esbuild = require('esbuild');
const root = __dirname;
function build() {
  const js = esbuild.buildSync({entryPoints:[path.join(root,'src/main.tsx')],bundle:true,minify:true,write:false,jsx:'automatic',define:{'process.env.NODE_ENV':'"production"'},target:'es2020'}).outputFiles[0].text;
  const css = fs.readFileSync(path.join(root,'src/styles.css'),'utf8');
  const icon = fs.readFileSync(path.join(root,'src/favicon.svg'),'utf8');
  fs.writeFileSync(path.join(root,'index.html'),'<!doctype html><html lang="en" dir="ltr"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"><title>New York awaits · DL249</title><meta name="description" content="Flight countdown and our New York city checklist"><link rel="icon" href="data:image/svg+xml,'+encodeURIComponent(icon)+'"><style>'+css+'</style></head><body><div id="root"></div><noscript>Enable JavaScript to use the countdown and map.</noscript><script>'+js.replace(/<\/script/gi,'<\\/script')+'</script></body></html>');
  console.log('Built index.html for GitHub Pages');
}
build();
if (process.argv.includes('--serve')) {
  const http = require('node:http');
  http.createServer((req,res)=>{
    const name = new URL(req.url,'http://localhost').pathname;
    const file = name === '/' || name === '/index.html' ? 'index.html' : name === '/welcome.mp4' ? 'welcome.mp4' : null;
    if (!file) {res.writeHead(404);res.end('Not found');return;}
    res.setHeader('Content-Type',file.endsWith('.mp4')?'video/mp4':'text/html; charset=utf-8');
    fs.createReadStream(path.join(root,file)).pipe(res);
  }).listen(5174,'127.0.0.1',()=>console.log('Preview: http://127.0.0.1:5174'));
  let timer;
  for(const name of fs.readdirSync(path.join(root,'src'))) {
    fs.watchFile(path.join(root,'src',name),{interval:750},(current,previous)=>{if(current.mtimeMs===previous.mtimeMs)return;clearTimeout(timer);timer=setTimeout(()=>{try{build()}catch(e){console.error(e)}},150)});
  }
}
