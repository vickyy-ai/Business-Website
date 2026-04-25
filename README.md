Business Website
A beautiful, fully responsive haute couture designer portfolio website built with HTML, CSS, and JavaScript.

📁 Project Structure
.
├── index.html          # Main website file
├── style.css           # Styling
├── main.js             # Interactive features
├── assets/             # Optimized assets for web (ALL production files go here)
│   ├── images/         # Compressed JPEG images (responsive, web-optimized)
│   │   ├── awards/     # Award & certification images
│   │   └── work/       # Process workflow images
│   └── videos/         # Optimized video files
├── document/           # IGNORED (original high-res files - not uploaded to GitHub)
└── compress_assets.py  # IGNORED (compression script - optional to keep)
🚀 GitHub Deployment
This project is optimized for GitHub uploads and Vercel deployment:

Total repository size: ~7 MB (well under GitHub's 25 MB file limit)
Optimized assets folder: All images and videos are compressed for web
Original document folder: Excluded via .gitignore to keep repo size small
What's Compressed:
Images: 17 JPEGs compressed to ~3.5 MB

Resized to max 1600px width
Quality: 75% (perfect for web)
Progressive JPEGs for faster loading
Video: Background video compressed to ~4.7 MB

Original: 26 MB (4K UHD 2160p)
Current: 4.7 MB (1280p)
H.264 codec, 30 CRF quality
To Use with Vercel:
Push this repo to GitHub (will automatically exclude document/ folder)
Connect your GitHub repo to Vercel
Vercel will deploy automatically from the main branch
All asset links (pointing to assets/) will work perfectly
⚙️ If You Need Original Assets
The original uncompressed files are stored locally in the document/ folder but are not tracked by Git.

To restore or update assets:

Replace images in document/ with your files
Run: python compress_assets.py
Files are automatically optimized and placed in assets/
Commit only the assets/ folder to Git
📱 Responsive Design
All images and videos are optimized for:

Mobile devices (responsive sizing)
Tablet displays
Desktop viewing
Print (where applicable)
🎨 Customization
To add or update assets:

Place original files in document/ folder (any size)
Run compression script: python compress_assets.py
The script will:
Create optimized versions
Maintain folder structure
Save to assets/ folder
Update index.html paths to reference assets/ folder
Push to GitHub
📄 License
All content and design are proprietary. Please do not redistribute without permission.
