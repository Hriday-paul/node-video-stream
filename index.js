const express = require('express');
const app = express();
const fs = require('fs');

app.use(express.static('public'));

app.get('/video', (req, res) => {
    try {
        console.log('Request header is ---------------', req.headers.range);
        
        const range = req.headers.range; // bytes=1933312-
        if (!range) {
            res.status(400).send("Requires Range header");
            return;
        }
        
        const videoPath = 'video.mp4';
        const videoSize = fs.statSync(videoPath).size;

        console.log(videoSize)

        const chunkSize = (10 ** 6)*2; // 5 MB
        const start = Number(range.replace(/\D/g, "")); //   \D means select non digit, /..../g means check global
        const end = Math.min(start + chunkSize, videoSize - 1);

        const contentLength = end - start + 1;

        const headers = {
            "Content-Range": `bytes ${start}-${end}/${videoSize}`,
            "Accept-Ranges": "bytes",
            "Content-Length": contentLength,
            "Content-Type": "video/mp4",
        };

        res.writeHead(206, headers);

        const videoStream = fs.createReadStream(videoPath, { start, end });

        videoStream.pipe(res);
    } catch (err) {
        console.error(err);
        res.status(500).send('Error serving video');
    }
});

app.listen(3000, () => {
    console.log('Your server is running on : http://localhost:3000');
});
