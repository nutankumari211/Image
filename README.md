# Image Processing App
This project consists of a server and a React client for processing and displaying images. The server is built with Node.js using the Express framework, while the client is a React application. The server utilizes the multer middleware for handling file uploads, the exiftool-vendored library for reading image metadata, and the axios library for making HTTP requests from the client.

Server (Node.js)
Dependencies
express: A web application framework for Node.js.
multer: Middleware for handling multipart/form-data, primarily used for file uploads.
fs: Node.js module for file system operations.
cors: Middleware to enable Cross-Origin Resource Sharing.
exiftool-vendored: A Node.js wrapper for the ExifTool library, used for reading image metadata.
path: Node.js module for working with file paths.
Setup
# Install dependencies:
npm install
# Run the server:
npm start

The server will be accessible at http://localhost:3000.

Endpoints
POST /upload: Handles file uploads. Images are saved, previews are extracted, and metadata is read and stored.

GET /images: Retrieves information about processed images.

Usage
Upload images using the /upload endpoint.
Retrieve processed images using the /images endpoint.

# Client (React)
Dependencies
react: JavaScript library for building user interfaces.
axios: A promise-based HTTP client for making requests.
Setup
Install dependencies:
npm install
Run the React app:

npm run dev
The app will be accessible at http://localhost:5173.

# Features
Displays a gallery of images with thumbnails.
Clicking on a thumbnail shows details about the selected image, including metadata.
Load more button toggles between displaying a subset or all metadata.
Download button allows downloading the selected image.
Notes
The client assumes the server is running at http://localhost:3000.

# Image previews and processed images are stored in the /images directory.

# HOW TO RUN: 
1. go to backend folder
2. npm install
3. npm start
4. We have to upload images from postman as currently is stored in local storage - POST -  http://localhost:3000/upload
5. all data are saved to images folder
6. You can see all info from http://localhost:3000/images using GET

7.Go to frontend Folder
8.npm install
9.npm run dev
10.Project starts from localhost:5173


# View screenshots of images
![Screenshot (516)](https://github.com/nutankumari211/Image/assets/31533479/491b6698-7a8f-4713-a0eb-1de61a5cf3c3)

![Screenshot (517)](https://github.com/nutankumari211/Image/assets/31533479/389dca3e-c0ef-4f34-aaae-45ae379de5e2)

![Screenshot (518)](https://github.com/nutankumari211/Image/assets/31533479/89bd37d8-a62f-44e7-b0c4-723f7a7b9dd5)


