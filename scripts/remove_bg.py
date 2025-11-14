"""
Simple script to convert white or near-white pixels to transparent for PNG/JPG images.
Usage:
  python remove_bg.py <input_path> [<output_path>] [threshold]
If no args provided, it will process Logo.png and Logo2.png inside src/assets.

This script uses Pillow. Install with:
  python -m pip install --user pillow

It will create a backup copy of the input before overwriting.
"""
from PIL import Image
import sys
import os

DEFAULT_ASSETS = os.path.abspath(os.path.join(os.path.dirname(__file__), '..', 'src', 'assets'))
TARGET_FILES = [
    os.path.join(DEFAULT_ASSETS, 'Logo.png'),
    os.path.join(DEFAULT_ASSETS, 'Logo2.png'),
]


def make_transparent(src_path, dst_path, threshold=240):
    im = Image.open(src_path).convert('RGBA')
    datas = im.getdata()
    newData = []
    for item in datas:
        r, g, b, a = item
        # If pixel is near-white, make it transparent
        if r >= threshold and g >= threshold and b >= threshold:
            newData.append((r, g, b, 0))
        else:
            newData.append((r, g, b, a))
    im.putdata(newData)
    im.save(dst_path, 'PNG')


if __name__ == '__main__':
    args = sys.argv[1:]
    if len(args) >= 1:
        src = args[0]
        dst = args[1] if len(args) >= 2 else None
        thr = int(args[2]) if len(args) >= 3 else 240
        if not dst:
            base, ext = os.path.splitext(src)
            dst = base + '.transparent.png'
        if not os.path.exists(src):
            print('Input file not found:', src)
            sys.exit(1)
        backup = src + '.bak'
        if not os.path.exists(backup):
            os.rename(src, backup)
            print('Backup created:', backup)
        else:
            print('Backup already exists:', backup)
        make_transparent(backup, dst, threshold=thr)
        print('Written:', dst)
    else:
        processed = []
        for f in TARGET_FILES:
            if os.path.exists(f):
                base, ext = os.path.splitext(f)
                dst = base + '.transparent.png'
                backup = base + ext + '.bak'
                if not os.path.exists(backup):
                    os.rename(f, backup)
                    print('Backup created:', backup)
                else:
                    print('Backup exists:', backup)
                make_transparent(backup, dst)
                print('Written:', dst)
                processed.append(dst)
            else:
                print('Not found, skipping:', f)
        if not processed:
            print('No target files processed. Place your logos in', DEFAULT_ASSETS)
