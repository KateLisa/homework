var instance = new vidbg(".video"
    , {
        mp4: "video/world.mp4", // URL or relative path to MP4 video
        webm: "path/to/video.webm", // URL or relative path to webm video
        poster: "video/poster.jpg", // URL or relative path to fallback image
        overlay: false, // Boolean to display the overlay or not

    }, {
    // Attributes
})
var rellax = new Rellax(".rocket", {
    breakpoints: [576, 768, 1201],
});
if (document.body.clientWidth < 576) {
    rellax.destroy();
}
/*
window.addEventLisstener("resize", () => {
    if (document.body.clientWidth < 576) {
        rellax.destroy();
    }
})
если разрушили надо быдет обратно инициализировать*/

AOS.init();

