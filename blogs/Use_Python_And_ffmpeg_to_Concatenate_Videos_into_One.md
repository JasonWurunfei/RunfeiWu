---
title: Use Python And ffmpeg to Concatenate Videos into One
datetime: 2024-03-19T22:32:24.686+01:00
tags: [Python, ffmpeg, Video Processing]
collection: [Dev Tools]
---

# Use Python And ffmpeg to Concatenate Videos into One

`concatenate_videos.py` is a Python script that uses `ffmpeg` to concatenate MP4 videos from a folder into a single MP4 file. It takes the path to the folder containing the MP4 files to concatenate as an argument, and it also allows you to specify the name of the output MP4 file and the name of the text file listing all MP4 files.

```python
import os
import subprocess
import argparse

def generate_file_list(folder_path, list_file_name='file_list.txt'):
    with open(list_file_name, 'w') as file_list:
        for filename in sorted(os.listdir(folder_path)):
            if filename.endswith(".mp4"):
                file_list.write(f"file '{os.path.join(folder_path, filename)}'\n")

def concatenate_videos(list_file_name, output_file_name='output.mp4'):
    ffmpeg_command = [
        'ffmpeg',
        '-f', 'concat',
        '-safe', '0',
        '-i', list_file_name,
        '-c', 'copy',
        output_file_name
    ]
    subprocess.run(ffmpeg_command)

def main():
    parser = argparse.ArgumentParser(description='Concatenate MP4 videos from a folder into a single MP4 file.')
    parser.add_argument('folder_path', type=str, help='Path to the folder containing MP4 files to concatenate.')
    parser.add_argument('-o', '--output', type=str, default='output.mp4', help='Name of the output MP4 file.')
    parser.add_argument('-l', '--list_file', type=str, default='file_list.txt', help='Name of the text file listing all MP4 files.')

    args = parser.parse_args()

    # Generate the file list
    generate_file_list(args.folder_path, args.list_file)

    # Concatenate the videos
    concatenate_videos(args.list_file, args.output)

    # Clean up the list file if desired
    os.remove(args.list_file)

if __name__ == '__main__':
    main()
```

and you can use it like this:

```bash

python concatenate_videos.py /path/to/videos -o output.mp4 -l file_list.txt

```
