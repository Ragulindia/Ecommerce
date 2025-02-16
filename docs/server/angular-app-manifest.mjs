
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/Ecommerce/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/Ecommerce"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 5110, hash: 'f03ced7a41a5fdef65a0eb755e06d3988b7b1d1d7b70d69f5134400552bba5c6', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1185, hash: 'e0206758a9a01efef9d8cebea31f5102596c1fbe2f9291928b7dd92970c88dc1', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 34594, hash: '70b6f2d93729e48bdc2fa463bce10841537e73a66f5a5f2a9dcae0d3c2637659', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-TI4ZZZ5D.css': {size: 231653, hash: '6Mmv7jmEHF4', text: () => import('./assets-chunks/styles-TI4ZZZ5D_css.mjs').then(m => m.default)}
  },
};
