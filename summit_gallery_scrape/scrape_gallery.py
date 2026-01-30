import json
import re

# API_URL = "https://tamus.photoshelter.com/psapi/v3/gallery/G00002zJswTLj.CY/media?api_key=DOD4yYEYgGY&fields=*&collection_id=C0000PEE2WMx9OVQ&extend=%7B%22Image%22%3A%7B%22fields%22%3A%22image_id%2Cfile_name%2Cscreen_height_max%2Cwidth%2Cheight%2Cfile_size%22%2C%22params%22%3A%7B%7D%7D%2C%22ImageLink%22%3A%7B%22fields%22%3A%22link%22%2C%22params%22%3A%7B%22f_https_link%22%3A%22t%22%7D%7D%2C%22License%22%3A%7B%22fields%22%3A%22license_etime%22%2C%22params%22%3A%7B%7D%7D%2C%22CustomMetadata%22%3A%7B%22fields%22%3A%22*%22%2C%22params%22%3A%7B%7D%7D%2C%22Video%22%3A%7B%22fields%22%3A%22video_id%2Cfile_name%2Cduration%2Cwidth%2Cheight%2Cfile_size%22%2C%22params%22%3A%7B%7D%7D%2C%22VideoLink%22%3A%7B%22fields%22%3A%22link%22%2C%22params%22%3A%7B%22f_https_link%22%3A%22t%22%7D%7D%2C%22Iptc%22%3A%7B%22fields%22%3A%22*%22%2C%22params%22%3A%7B%7D%7D%2C%22VideoMetadata%22%3A%7B%22fields%22%3A%22*%22%2C%22params%22%3A%7B%7D%7D%2C%22Audio%22%3A%7B%22fields%22%3A%22audio_id%2Cfile_name%2Cduration%2Cfile_size%2Cformat%22%2C%22params%22%3A%7B%7D%7D%2C%22AudioLink%22%3A%7B%22fields%22%3A%22*%22%2C%22params%22%3A%7B%22f_https_link%22%3A%22t%22%7D%7D%2C%22AudioMetadata%22%3A%7B%22fields%22%3A%22*%22%2C%22params%22%3A%7B%7D%7D%2C%22Doc%22%3A%7B%22fields%22%3A%22doc_id%2Cfile_name%2Cfile_size%2Cformat%2Cformat_readable%22%2C%22params%22%3A%7B%7D%7D%2C%22DocLink%22%3A%7B%22fields%22%3A%22*%22%2C%22params%22%3A%7B%22f_https_link%22%3A%22t%22%7D%7D%2C%22DocMetadata%22%3A%7B%22fields%22%3A%22*%22%2C%22params%22%3A%7B%7D%7D%2C%22PageCount%22%3A%7B%22fields%22%3A%22*%22%2C%22params%22%3A%7B%7D%7D%2C%22ML_Metadata%22%3A%7B%22fields%22%3A%22*%22%2C%22params%22%3A%7B%7D%7D%7D&per_page=800&page=1&group_by=none&_=1769750592655"

# made this to scrape the photoshelter gallery photos so that I don't increase the repo size by 2gb :skull:

# open res.json
with open('res.json', 'r', encoding='utf-8') as f:
    data = json.load(f)

# Extract GalleryMedia array
gallery_media = data.get('data', {}).get('GalleryMedia', [])

# Process each gallery image
result_data = []

for item in gallery_media:
    gallery_image = item.get('GalleryImage', {})
    
    # Extract Image data
    image = gallery_image.get('Image', {})
    image_link = gallery_image.get('ImageLink', {})
    ml_metadata = gallery_image.get('ML_Metadata', {})
    
    # Get image URL from ImageLink
    image_url = image_link.get('link', '')
    
    # Get file name, height, and width from Image
    file_name = image.get('file_name', '')
    height = image.get('height', '')
    width = image.get('width', '')
    
    # Update the fit parameter in the URL to use actual width and height
    if image_url and width and height:
        # Replace fit=500x500 (or any fit parameter) with fit={width}x{height}
        image_url = re.sub(r'fit=\d+x\d+', f'fit={width}x{height}', image_url)
    
    # Extract tags from ML_Metadata -> ml_data -> tag_status -> objects -> attribute (key name)
    tags = []
    if ml_metadata:
        ml_data = ml_metadata.get('ml_data', {})
        if ml_data:
            tag_status = ml_data.get('tag_status', {})
            if tag_status:
                objects = tag_status.get('objects', [])
                if isinstance(objects, list):
                    for obj in objects:
                        if isinstance(obj, dict):
                            # Each object has a single key-value pair where the key is the tag name
                            # Extract all keys from the object (these are the tag names)
                            for key in obj.keys():
                                tags.append(key)
    
    # Create the result object
    result_item = {
        "image_url": image_url,
        "file_name": file_name,
        "height": height,
        "width": width,
        "tags": tags
    }
    
    result_data.append(result_item)

# Create the final JSON structure
output = {
    "data": result_data
}

# Write to urls.json
with open('urls.json', 'w', encoding='utf-8') as f:
    json.dump(output, f, indent=2, ensure_ascii=False)

print(f"Extracted {len(result_data)} images to urls.json")