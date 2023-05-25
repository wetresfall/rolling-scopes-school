let video = document.getElementById("video");
        let videoTrack = document.querySelector(".video-track");
        let time = document.querySelector(".timeline");
        let btnPlay = document.querySelector(".play");
        let btnPause = document.querySelector(".pause");
        let btnRewind = document.querySelector(".rewind");
        let btnForward = document.querySelector(".forward");
        
        btnPlay.addEventListener("click", function() {
            video.play();
            videoPlay = setInterval(function() {
                let videoTime = Math.round(video.currentTime)
                let videoLength = Math.round(video.duration)
                time.style.width = (videoTime * 100) / videoLength + '%';
            }, 10)
        });

        btnPause.addEventListener("click", function() {
            video.pause();
            clearInterval(videoPlay)
        });

        btnRewind.addEventListener("click", function() {
            video.currentTime -= 5;
        });

        btnForward.addEventListener("click", function() {
            video.currentTime += 5;
        });

        videoTrack.addEventListener("click", function(e) {
            let posX = e.clientX - 8;
            let timePos = (posX * 100) / 800;
            time.style.width = timePos + '%';
            video.currentTime = (timePos * Math.round(video.duration)) / 100
        });