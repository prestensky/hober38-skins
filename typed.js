document.addEventListener("DOMContentLoaded", function () {
new TypeIt("#type", {
    speed: 150,
    loop: false,
    nextStringDelay: 750,
    deleteSpeed: 150,
    cursor: true,
    })
    .type('<span class="nickname">Hober38 Skins</span>')
    .delete(".nickname")
    .type('https://www.twitch.tv/hober38_')
    .go();
})