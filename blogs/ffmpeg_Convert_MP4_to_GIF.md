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

Here is a python script that converts all the MP4 files in the current directory to GIF files:

```python
import os
import subprocess
import argparse

def convert_videos(input_directory, output_directory, frame_rate, scale):
    # Ensure output directory exists
    if not os.path.exists(output_directory):
        os.makedirs(output_directory)

    # Loop through each file in the input directory
    for filename in os.listdir(input_directory):
        # Check if the file is an MP4 file
        if filename.endswith(".mp4"):
            input_path = os.path.join(input_directory, filename)

            # Define the output file path
            output_filename = filename.replace(".mp4", ".gif")
            output_path = os.path.join(output_directory, output_filename)

            # Construct the FFmpeg command
            command = f"ffmpeg -i {input_path} -vf fps={frame_rate},scale={scale} -loop 0 -y {output_path}"

            # Run the FFmpeg command
            subprocess.run(command, shell=True)

    print("Conversion completed.")

def main():
    parser = argparse.ArgumentParser(description='Convert MP4 videos to GIFs.')
    parser.add_argument('-i', '--input_directory', type=str, default=".", 
                        help='Input directory for MP4 files (default: .)')
    parser.add_argument('-o', '--output_directory', type=str, default="output", 
                        help='Output directory for GIF files (default: output)')
    parser.add_argument('--frame_rate', type=int, default=30, help='Frame rate for the GIF (default: 30)')
    parser.add_argument('--scale', type=str, default="640:-1", help='Scale for the GIF (default: 640:-1)')

    args = parser.parse_args()
    convert_videos(args.input_directory, args.output_directory, args.frame_rate, args.scale)

if __name__ == "__main__":
    main()
```

you can use the script like this:

```bash
python convert_videos.py -i input -o output --frame_rate 10 --scale 320:-1
```
