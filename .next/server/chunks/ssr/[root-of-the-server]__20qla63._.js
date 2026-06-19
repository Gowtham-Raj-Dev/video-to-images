module.exports=[57087,a=>{a.v({className:"sora_95996a71-module__CDjqWG__className"})},27572,a=>{"use strict";var b=a.i(7997),c=a.i(57087);let d={className:c.default.className,style:{fontFamily:"'Sora', 'Sora Fallback'",fontStyle:"normal"}};null!=c.default.variable&&(d.variable=c.default.variable),a.s(["default",0,function({children:a}){return(0,b.jsxs)("html",{lang:"en",suppressHydrationWarning:!0,children:[(0,b.jsx)("head",{children:(0,b.jsx)("script",{dangerouslySetInnerHTML:{__html:`
              (function() {
                const theme = localStorage.getItem('theme') || 'dark';
                if (theme === 'dark') {
                  document.documentElement.classList.add('dark');
                } else {
                  document.documentElement.classList.remove('dark');
                }
                
                // Clear any rogue service workers from other projects on localhost
                if (typeof navigator !== 'undefined' && 'serviceWorker' in navigator) {
                  navigator.serviceWorker.getRegistrations().then(function(registrations) {
                    for (var i = 0; i < registrations.length; i++) {
                      registrations[i].unregister().then(function(success) {
                        if (success) {
                          console.log('Unregistered rogue service worker');
                        }
                      });
                    }
                  });
                }
              })()
            `}})}),(0,b.jsx)("body",{className:d.className,children:a})]})},"metadata",0,{title:"Free Gemini Video Watermark Remover | AI Video Cleaner",description:"Remove Gemini and Veo watermarks from videos easily, free, and 100% locally in your browser. No uploads required.",keywords:["Gemini watermark remover","remove Gemini watermark","Veo watermark remover","AI video cleaner","remove watermark from image","free watermark remover","local AI tools"],openGraph:{title:"Free Gemini Watermark Remover | AI Video & Image Cleaner",description:"Remove Gemini and Veo watermarks from videos and images easily, free, and 100% locally in your browser. No uploads required.",type:"website"},twitter:{card:"summary_large_image",title:"Free Gemini Watermark Remover",description:"Remove Gemini and Veo watermarks from videos and images easily, free, and 100% locally in your browser."},robots:{index:!0,follow:!0}}],27572)},50645,a=>{a.n(a.i(27572))}];

//# sourceMappingURL=%5Broot-of-the-server%5D__20qla63._.js.map