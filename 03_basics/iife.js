// Immediately invoked function expressions (IIFE)
//named iife
(function chai() {
    console.log(`DB CONECTED`);
})();
// ya thikani semicoden(;)complersary nahi tar pudhche run nahi hot

//unname iife
(() => {
    console.log("data base connected")
})();

//parameterise iife
//yat apn parameter sudha pass karu shakto
((anme) => {
    console.log(`data base connected ${anme}`)
})('hj');