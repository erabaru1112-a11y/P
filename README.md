# P
Ppp
rtsp://admin:@Curupbae1@192.168.1.2:554/Streaming/Channels/202
1. Pergi ke: https://ipcamtalk.github.io/videojs-rtsp-demo/
2. Ganti URL dengan:
rtsp://admin:@Curupbae1@192.168.1.2:554/Streaming/Channels/202
3. Play!<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>RTSP Camera Viewer</title>
    <script src="https://vjs.zencdn.net/8.5.2/video.min.js"></script>
    <link href="https://vjs.zencdn.net/8.5.2/video-js.css" rel="stylesheet">
    <style>
        body { margin: 0; background: #000; font-family: Arial; }
        .container { max-width: 100%; margin: 20px auto; text-align: center; }
        .video-js { width: 100%; height: 60vh; }
        button { background: #007cba; color: white; border: none; padding: 12px 24px; margin: 10px; border-radius: 5px; cursor: pointer; font-size: 16px; }
        button:hover { background: #005a87; }
        select { padding: 10px; margin: 10px; font-size: 16px; }
        .status { color: #fff; padding: 10px; background: #333; margin: 10px; border-radius: 5px; }
    </style>
</head>
<body>
    <div class="container">
        <h1>📹 KAMERA LIVE</h1>
        
        <div class="controls">
            <select id="streamSelect">
                <option value="rtsp://admin:@Curupbae1@192.168.1.2:554/Streaming/Channels/202">Sub Stream (Stabil)</option>
                <option value="rtsp://admin:@Curupbae1@192.168.1.2:554/Streaming/Channels/201">Main Stream (HD)</option>
            </select>
            <button onclick="loadStream()">▶️ Play</button>
            <button onclick="toggleFullscreen()">⛶ Fullscreen</button>
        </div>
        
        <div id="status" class="status">Klik Play untuk mulai...</div>
        
        <video id="rtsp-player" class="video-js vjs-default-skin" controls preload="auto" data-setup="{}">
            <p class="vjs-no-js">Untuk melihat video, aktifkan JavaScript dan pertimbangkan upgrade ke browser yang <a href="https://videojs.com/html5-video-support/" target="_blank">mendukung HTML5 video</a></p>
        </video>
    </div>

    <script src="https://unpkg.com/@videojs/http-streaming@3.10.0/dist/videojs-http-streaming.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/rtsp-relay@1.2.8/resources/static/videojs-rtsp.js"></script>
    
    <script>
        const player = videojs('rtsp-player', {
            fluid: true,
            responsive: true
        });

        function loadStream() {
            const url = document.getElementById('streamSelect').value;
            document.getElementById('status').innerHTML = 'Loading... ⏳';
            
            player.src({
                src: `/api/stream.mp4?url=${encodeURIComponent(url)}`,
                type: 'video/mp4'
            });
            
            player.ready(() => {
                player.play();
                document.getElementById('status').innerHTML = 'Live! 📹';
            });
            
            player.on('error', () => {
                document.getElementById('status').innerHTML = '❌ Error: Cek jaringan/koneksi kamera';
            });
        }

        function toggleFullscreen() {
            if (document.fullscreenElement) {
                document.exitFullscreen();
            } else {
                document.documentElement.requestFullscreen();
            }
        }

        // Auto load pertama kali
        window.onload = () => loadStream();
    </script>
</body>
</html>
