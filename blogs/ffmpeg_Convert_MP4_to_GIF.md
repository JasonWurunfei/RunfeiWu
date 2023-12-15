---
title: ffmpeg Convert MP4 to GIF
datetime: 2023-12-15T17:21:31.873+01:00
tags: [ffmpeg, video format, gif]
collection: [Dev Tools]
---
# ffmpeg Convert MP4 to GIF
ffmpeg is a powerful tool for manipulating video and audio files. In this blog I will show how to convert a MP4 video to a GIF file using ffmpeg.

## Install ffmpeg
Just follow the instructions on the [ffmpeg website](https://ffmpeg.org/download.html).

## Convert MP4 to GIF
The following command converts a MP4 video to a GIF file. The `-i` option specifies the input file. The `-ss` option specifies the start time. The `-t` option specifies the duration. The `-vf` option specifies the filter. The `fps` filter sets the frame rate. The `scale` filter scales the video to the specified size. The `-loop` option specifies the number of loops. The `-y` option overwrites the output file if it already exists.

```bash
ffmpeg -i input.mp4 -ss 00:00:00 -t 00:00:10 -vf fps=10,scale=320:-1 -loop 0 -y output.gif
```

This command converts the first 10 seconds of the input video `input.mp4` to a GIF file with a frame rate of 10 fps and a width of 320 pixels. The height is automatically calculated to preserve the aspect ratio. The GIF loops infinitely and overwrites the output file `output.gif` if it already exists.
