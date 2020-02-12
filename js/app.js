if('serviceWorker' in navigator){
    navigator.serviceWorker
    .register('/serviceWorker.js')
    .then((reg) => console.log('service worker registered\n', reg.scope))
    .catch((err) => console.log(`service worker not registered\n ERROR: ${err}`))
}