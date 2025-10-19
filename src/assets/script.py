from PIL import Image
import os
import io
import zipfile

def compress_and_rename_images(image_files):
    compressed_files = []
    for file in image_files:
        with open(file, 'rb') as f:
            img = Image.open(f)
            img_format = img.format
            buffer = io.BytesIO()
            # Save with moderate compression for JPEG
            img.save(buffer, format="JPEG", quality=60)
            compressed_name = f"{os.path.splitext(file)[0]}ow.jpg"
            with open(compressed_name, 'wb') as out_f:
                out_f.write(buffer.getvalue())
            compressed_files.append(compressed_name)
    return compressed_files

# Provided filenames
image_files = [
    'Copy-of-whm3.jpg',
    'Copy-of-_WHM1566.jpg',
    'DSC08189.jpg',
    'Copy-of-DSC02110-copy.jpg',
    'Copy-of-whm-17.jpg',
    'WHM-1460.jpg',
    'Copy-of-wildhorse-348.jpg',
    'Copy-of-WHM-443.jpg',
    'wedding.jpg'
]

# Compress and rename
compressed_files = compress_and_rename_images(image_files)

# Zip all compressed files
def create_zip(files, zipname="compressed_images.zip"):
    with zipfile.ZipFile(zipname, 'w') as zipf:
        for file in files:
            zipf.write(file)
    return zipname

zip_filename = create_zip(compressed_files)
zip_filename