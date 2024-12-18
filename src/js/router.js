import page from 'page';
import home from '../home.pug';


// page('/about', () => {
//     // window.location.href = home();
//     document.getElementById('app').innerHTML = home();
// });

page('*', async (ctx) => {
    if(ctx.path !== '/'){
        const app = document.getElementById('app');
    try {
      const response = await fetch(`${ctx.path}.html`);
      if (!response.ok) throw new Error('Page not found');
      
      const html = await response.text();
      app.innerHTML = html;
    } catch (error) {
    //   app.innerHTML = '<h1>404 - Page Not Found</h1>';
      console.error(error);
    }
    }
   
  });
  
// Mulai router
page();





// // src/scripts/router.js
// const routes = {
//     '/': '<h1>Home</h1>',
//     '/index': '<h1>About Us</h1>',
//     '/home': '<h1>SSSSS</h1>',
//   };
  
//   function router() {
//     const path = window.location.pathname;
//     const app = document.getElementById('app');
//     app.innerHTML = routes[path] || '<h1>404 - Page Not Found</h1>';
//   }
  
//   window.addEventListener('popstate', router);
//   document.addEventListener('DOMContentLoaded', () => {
//     document.body.addEventListener('click', (e) => {
//       if (e.target.tagName === 'A') {
//         e.preventDefault();
//         const href = e.target.getAttribute('href');
//         window.history.pushState(null, null, href);
//         router();
//       }
//     });
//     router();
//   });
  