const got = require("got");
const { createWriteStream } = require("fs");

const url = "https://gitee.com/dnrops/dataset/blob/master/SOME_CHARTEVENTS_MINI.csv";
const fileName = "image.csv";

const downloadStream = got.stream(url);
const fileWriterStream = createWriteStream(fileName);

downloadStream
  .on("downloadProgress", ({ transferred, total, percent }) => {
    const percentage = Math.round(percent * 100);
    console.error(`progress: ${transferred}/${total} (${percentage}%)`);
  })
  .on("error", (error) => {
    console.error(`Download failed: ${error.message}`);
  });

fileWriterStream
  .on("error", (error) => {
    console.error(`Could not write file to system: ${error.message}`);
  })
  .on("finish", () => {
    console.log(`File downloaded to ${fileName}`);
  });

downloadStream.pipe(fileWriterStream);
