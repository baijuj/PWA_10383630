
// Student Name:  Baiju John
// Student Number:10383630 


(function() {
  

 

  // TODO add service worker code here
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker
             .register('./sw.js')
             .then(function() { console.log('Service Worker Registered'); });
  }
})();
