// import fs from "fs";
// import path from "path";
// import ytdl from "ytdl-core";
// import Ffmpeg from "fluent-ffmpeg";

// const readablestream = ytdl("http://www.youtube.com/watch?v=aqz-KE-bpKQ").pipe(
//   fs.createWriteStream("video.mp4")
// );

// async function youtubeToMp3(videoUrl, outputPath = "output") {
//   // Create output directory if it doesn't exist
//   if (!fs.existsSync(outputPath)) {
//     fs.mkdirSync(outputPath);
//   }

//   try {
//     console.log("Fetching video info...");
//     const videoInfo = await ytdl.getInfo(videoUrl);
//     console.log("BaseUrl: ", videoInfo.baseUrl);
//     const videoTitle = videoInfo.videoDetails.title.replace(
//       /[<>:"/\\|?*]/g,
//       ""
//     ); // Sanitize title for filenames

//     const outputFilePath = path.join(outputPath, `${videoTitle}.mp3`);
//     console.log(`Downloading and converting: ${videoTitle}`);

//     // Download the audio and convert to MP3
//     const audioStream = ytdl(videoUrl, { quality: "highestaudio" });

//     Ffmpeg(audioStream)
//       .audioCodec("libmp3lame")
//       .audioBitrate(320)
//       .save(outputFilePath)
//       .on("end", () => {
//         console.log(`Conversion complete! MP3 saved at: ${outputFilePath}`);
//       })
//       .on("error", (err) => {
//         console.error("An error occurred during the conversion:", err);
//       });
//   } catch (error) {
//     console.error("An error occurred:", error);
//   }
// }

// // Example usage
// const youtubeUrl = "https://www.youtube.com/watch?v=xA1TJrx5ZI8";
// youtubeToMp3(youtubeUrl);

fetch(`http://video.google.com/timedtext?lang=en&v=xA1TJrx5ZI8`)
  .then((res) => {
    const resBody = res.json();
    return resBody;
  })
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.error(err.message);
  });
