#!/usr/bin/env python3
import json
import os

# Header mapping from visual overview export
headers_data = {
    "28:352": {"name": "Header 92", "file": "Header-92.png"},
    "28:351": {"name": "Header 91", "file": "Header-91.png"},
    "28:260": {"name": "Header 2", "file": "Header-2.png"},
    "28:261": {"name": "Header 3", "file": "Header-3.png"},
    "28:262": {"name": "Header 4", "file": "Header-4.png"},
    "28:263": {"name": "Header 5", "file": "Header-5.png"},
    "28:264": {"name": "Header 6", "file": "Header-6.png"},
    "28:265": {"name": "Header 7", "file": "Header-7.png"},
    "28:266": {"name": "Header 8", "file": "Header-8.png"},
    "28:267": {"name": "Header 9", "file": "Header-9.png"},
    "28:268": {"name": "Header 10", "file": "Header-10.png"},
    "28:269": {"name": "Header 11", "file": "Header-11.png"},
    "28:270": {"name": "Header 12", "file": "Header-12.png"},
    "28:271": {"name": "Header 13", "file": "Header-13.png"},
    "28:288": {"name": "Header 21", "file": "Header-21.png"},
    "28:287": {"name": "Header 22", "file": "Header-22.png"},
    "28:285": {"name": "Header 24", "file": "Header-24.png"},
    "28:284": {"name": "Header 25", "file": "Header-25.png"},
    "28:283": {"name": "Header 26", "file": "Header-26.png"},
    "28:282": {"name": "Header 27", "file": "Header-27.png"},
    "28:281": {"name": "Header 28", "file": "Header-28.png"},
    "28:280": {"name": "Header 29", "file": "Header-29.png"},
    "28:279": {"name": "Header 30", "file": "Header-30.png"},
    "28:278": {"name": "Header 31", "file": "Header-31.png"},
    "28:277": {"name": "Header 32", "file": "Header-32.png"},
    "28:276": {"name": "Header 33", "file": "Header-33.png"},
    "28:275": {"name": "Header 33", "file": "Header-33-1.png"},
    "28:289": {"name": "Header 39", "file": "Header-39.png"},
    "28:290": {"name": "Header 40", "file": "Header-40.png"},
    "28:291": {"name": "Header 41", "file": "Header-41.png"},
    "28:292": {"name": "Header 42", "file": "Header-42.png"},
    "28:293": {"name": "Header 43", "file": "Header-43.png"},
    "112:4025": {"name": "Header 23", "file": "Header-23.png"},
    "28:294": {"name": "Header 44", "file": "Header-44.png"},
    "28:295": {"name": "Header 16", "file": "Header-16.png"},
    "28:296": {"name": "Header 45", "file": "Header-45.png"},
    "28:297": {"name": "Header 46", "file": "Header-46.png"},
    "28:298": {"name": "Header 47", "file": "Header-47.png"},
    "28:299": {"name": "Header 48", "file": "Header-48.png"},
    "28:300": {"name": "Header 18", "file": "Header-18.png"},
    "28:301": {"name": "Header 49", "file": "Header-49.png"},
    "28:302": {"name": "Header 50", "file": "Header-50.png"},
    "28:303": {"name": "Header 51", "file": "Header-51.png"},
    "28:304": {"name": "Header 52", "file": "Header-52.png"},
    "28:305": {"name": "Header 53", "file": "Header-53.png"},
    "28:329": {"name": "Header 58", "file": "Header-58.png"},
    "28:328": {"name": "Header 59", "file": "Header-59.png"},
    "28:327": {"name": "Header 60", "file": "Header-60.png"},
    "28:326": {"name": "Header 61", "file": "Header-61.png"},
    "28:325": {"name": "Header 62", "file": "Header-62.png"},
    "28:324": {"name": "Header 63", "file": "Header-63.png"},
    "28:323": {"name": "Header 19", "file": "Header-19.png"},
    "28:322": {"name": "Header 64", "file": "Header-64.png"},
    "28:321": {"name": "Header 65", "file": "Header-65.png"},
    "28:320": {"name": "Header 66", "file": "Header-66.png"},
    "28:319": {"name": "Header 67", "file": "Header-67.png"},
    "28:318": {"name": "Header 17", "file": "Header-17.png"},
    "28:317": {"name": "Header 68", "file": "Header-68.png"},
    "28:316": {"name": "Header 69", "file": "Header-69.png"},
    "28:315": {"name": "Header 70", "file": "Header-70.png"},
    "28:314": {"name": "Header 71", "file": "Header-71.png"},
    "28:313": {"name": "Header 72", "file": "Header-72.png"},
    "28:312": {"name": "Header 35", "file": "Header-35.png"},
    "28:311": {"name": "Header 73", "file": "Header-73.png"},
    "28:330": {"name": "Header 77", "file": "Header-77.png"},
    "28:331": {"name": "Header 78", "file": "Header-78.png"},
    "28:332": {"name": "Header 79", "file": "Header-79.png"},
    "28:333": {"name": "Header 80", "file": "Header-80.png"},
    "28:334": {"name": "Header 81", "file": "Header-81.png"},
    "28:335": {"name": "Header 82", "file": "Header-82.png"},
    "28:340": {"name": "Header 83", "file": "Header-83.png"},
    "28:341": {"name": "Header 84", "file": "Header-84.png"},
    "28:342": {"name": "Header 85", "file": "Header-85.png"},
    "28:343": {"name": "Header 86", "file": "Header-86.png"},
    "28:344": {"name": "Header 87", "file": "Header-87.png"},
    "28:345": {"name": "Header 88", "file": "Header-88.png"},
    "28:346": {"name": "Header 89", "file": "Header-89.png"},
    "28:347": {"name": "Header 1", "file": "Header-1.png"},
    "28:306": {"name": "Header 54", "file": "Header-54.png"},
    "28:274": {"name": "Header 34", "file": "Header-34.png"},
    "28:310": {"name": "Header 74", "file": "Header-74.png"},
    "28:307": {"name": "Header 55", "file": "Header-55.png"},
    "28:309": {"name": "Header 75", "file": "Header-75.png"},
    "28:273": {"name": "Header 36", "file": "Header-36.png"},
    "28:308": {"name": "Header 56", "file": "Header-56.png"},
    "28:259": {"name": "Header 90", "file": "Header-90.png"},
    "74:395": {"name": "Header 37", "file": "Header-37.png"},
    "74:394": {"name": "Header 14", "file": "Header-14.png"},
    "122:1384": {"name": "Header 93", "file": "Header-93.png"},
    "122:3056": {"name": "Header 15", "file": "Header-15.png"},
    "122:4444": {"name": "Header 94", "file": "Header-94.png"},
    "122:5530": {"name": "Header 96-98", "file": "Header-96-98.png"},
    "122:5532": {"name": "Header 99-100+", "file": "Header-99-100.png"},
    "122:5536": {"name": "Header 38", "file": "Header-38.png"},
    "122:5592": {"name": "Header 57", "file": "Header-57.png"},
    "122:5647": {"name": "Header 76", "file": "Header-76.png"},
    "132:1673": {"name": "Header 95", "file": "Header-95.png"},
    "132:1713": {"name": "Header 20", "file": "Header-20.png"}
}

# Generate frames array sorted by header number
frames = []
for node_id, data in headers_data.items():
    header_name = data["name"]
    # Extract number from header name (e.g., "Header 1" -> 1)
    parts = header_name.replace("Header ", "").split("-")
    try:
        header_num = int(parts[0])
    except:
        header_num = 999  # Put special cases at end

    route = f"/header-{header_num}"

    frames.append({
        "name": header_name,
        "node_id": node_id,
        "gt_image": data["file"],
        "target_route": route,
        "header_number": header_num
    })

# Sort by header number
frames.sort(key=lambda x: x["header_number"])

# Create manifest
manifest = {
    "figma_file_key": "Xp265ZvpH5p8xlI33C0bLQ",
    "page_name": "Header",
    "page_node_id": "10:95",
    "total_frames": len(frames),
    "frames": frames,
    "description": "101+ Free Website Headers for web design v1.2 - A comprehensive collection of header templates"
}

# Write to file
output_path = "/figma-claude-sonnet/c413f4df-d644-4d34-b76e-d36d60857af8/ground_truth/manifest.json"
with open(output_path, "w") as f:
    json.dump(manifest, f, indent=2)

print(f"✓ Ground truth manifest created: {len(frames)} headers")
print(f"✓ Output: {output_path}")
