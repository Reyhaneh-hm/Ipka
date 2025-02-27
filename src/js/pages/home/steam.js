import '../../../scss/components/pages/home/steam.scss';

/*----------------Play Video---------------*/
document.addEventListener('DOMContentLoaded', function () {

    const modal = document.getElementById("video-modal");
    const playIcon = document.querySelector(".icon-Play");
    const closeBtn = modal.querySelector(".close");
    const video = document.getElementById("modalVideo");

    playIcon.addEventListener('click', function () {
        modal.style.display = "flex";
    });

    closeBtn.addEventListener('click', function () {
        modal.style.display = "none";
        if (video) {
            video.pause();
            video.currentTime = 0;
        }
    });
});
