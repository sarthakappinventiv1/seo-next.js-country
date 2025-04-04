import "./globals.css";
// import type { Metadata } from "next";
import Script from "next/script";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
      <meta charSet="utf-8" />
      <meta name="robots" content="index, follow" />
      <meta name="author" content="Your Company" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="theme-color" content="#ffffff" />
      <link rel="icon" href="/favicon.ico" />

        <Script id="insert-headings" strategy="lazyOnload">

                {`
                  requestIdleCallback(() => {
                    const headings = [
                      { tag: 'h1' }, { tag: 'h2'}, { tag: 'h3'},
                      { tag: 'h4'}, { tag: 'h5'}, { tag: 'h6'}, { tag: 'img'},
                    ];
                    const container = document.createElement('div');
                    headings.forEach(({ tag }) => {
                      const heading = document.createElement(tag);
                      container.appendChild(heading);
                    });
                    document.body.insertBefore(container, document.body.firstChild);
                  });
                `}
             
        </Script>
        
        <Script
          id="genesys-script"
          strategy="lazyOnload"
          dangerouslySetInnerHTML={{
            __html: `
              requestIdleCallback(() => {
                (function (g, e, n, es, ys) {
                  g['_genesysJs'] = e;
                  g[e] = g[e] || function () {
                    (g[e].q = g[e].q || []).push(arguments);
                  };
                  g[e].t = 1 * new Date();
                  g[e].c = es;
                  ys = document.createElement('script');
                  ys.async = 1;
                  ys.src = n;
                  ys.charset = 'utf-8';
                  document.head.appendChild(ys);
                })(window, 'Genesys', 'https://apps.mec1.pure.cloud/genesys-bootstrap/genesys.min.js', {
                  environment: 'prod-mec1',
                  deploymentId: '4b3f601f-9f5a-4373-8e6f-8f68f2550d9f'
                });
              });
            `,
          }}
        />

        <Script
          type="application/javascript"
          id="adjust-script"
          strategy="lazyOnload"
          dangerouslySetInnerHTML={{
            __html: `
                requestIdleCallback(() => {
                  !function(t,r,e,a,n,o,i,l,c,s,d,h,u){var f=i+"_q",m=i+"_c";
                  t[i]=t[i]||{},t[f]=t[f]||[],t[m]=t[m]||[];
                  for(let r=0;r<l.length;r++)d(t[i],t[f],l[r]);
                  for(let r=0;r<c.length;r++){
                    var g,b=c[r][0],p=c[r][1];
                    t[i][b]=function(...r){
                      return g=this,t[m].push((function(){g[s]=new t[i][b](...r)})),g
                    };
                    for(let r=0;r<p.length;r++){
                      const e=p[r];
                      t[i][b].prototype[e]=function(...r){
                        t[m].push((function(){g[s][e](...r)}))
                      }
                    }
                  }
                  h=r.createElement(e),u=r.getElementsByTagName(e)[0],h.async=!0,h.src="https://cdn.adjust.com/adjust-5.7.0.min.js",h.onload=function(){
                    for(var r=0;r<t[m].length;r++)t[m][r]();t[m]=[];
                    for(r=0;r<t[f].length;r++)t[f][r][1][0][s]?t[i][t[f][r][0]](t[f][r][1][0][s]):t[i][t[f][r][0]].apply(t[i],t[f][r][1]);
                    t[f]=[]
                  },u.parentNode.insertBefore(h,u)
                }(window,document,'script',0,0,0,0,[],[],0,0,0,'adjust');
              `,
          }}
        />

    

          <Script id="gtag-config-duplicate" strategy="lazyOnload">
            {`
                requestIdleCallback(() => {

                  window.dataLayer = window.dataLayer || [];
                  function gtag() {
                    dataLayer.push(arguments);
                  }
                  gtag('js', new Date());
                  gtag('config', 'G-9PBPYMKNDR');
                })
            `}
          </Script>

          {/* <Script
            strategy="lazyOnload"
            defer
            id="facebook-sdk-duplicate"
            src="https://connect.facebook.net/en_US/sdk.js"
          /> */}

          <Script id="gtm-loader" strategy="lazyOnload">
            {`
              requestIdleCallback(() => {
                  (function(w, d, s, l, i) {
                    w[l] = w[l] || [];
                    w[l].push({
                      'gtm.start': new Date().getTime(),
                      event: 'gtm.js'
                    });
                    var f = d.getElementsByTagName(s)[0],
                      j = d.createElement(s),
                      dl = l != 'dataLayer' ? '&l=' + l : '';
                    j.async = true;
                    j.src = 'https://www.googletagmanager.com/gtm.js?id=' + i + dl;
                    f.parentNode.insertBefore(j, f);
                  })(window, document, 'script', 'dataLayer', 'GTM-PP5LJVS6');
              });
            `}
          </Script>

          <Script id="firebase-sw-register" strategy="lazyOnload">
            {`
              requestIdleCallback(() => {
                if ('serviceWorker' in navigator) {
                  window.addEventListener('load', function () {
                    navigator.serviceWorker.register('./firebase-messaging-sw.js', {
                      scope: './firebase-cloud-messaging-push-scope',
                    }).then(function (registration) {
                    }).catch(function (error) {
                    });
                  });
                }
              });
            `}
          </Script>

      </head>
      <body className="bg-gray-100 text-gray-900">
          <noscript>{
              `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-PP5LJVS6" height="0" width="0" style="display:none;visibility:hidden"></iframe>`
              }
          </noscript>
          {children}
      </body>
    </html>
  );
}


























