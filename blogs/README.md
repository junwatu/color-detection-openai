# Color Palettes Extraction Using Webcam and AI

![image cover](images/webcam-ai-processing.jpg)

## Table of Contents

 1. [Introduction](#introduction)
 2. [Prerequisites](#prerequisites)
 3. [Running The Project](#running-the-project)
 4. [Setting Up the Environment](#setting-up-the-environment)
 5. [Capturing Images with Node.js](#capturing-images-with-nodejs)
 6. [Processing Images with OpenAI](#processing-images-with-openai)
 7. [Storing Data in GridDB](#storing-data-in-griddb)
 8. [Integrating the Workflow](#building-color-palettes-ui)
 9. [Further Enhancements](#further-enhancements)

## Introduction

In this tutorial, we will explore how to extract color palettes from images captured via a webcam using Node.js, GridDB, and OpenAI. By leveraging Node.js for server-side scripting, GridDB for efficient data storage, and OpenAI for advanced image processing, we will create a seamless pipeline to capture images, analyze them, and generate dynamic color palettes. This guide will walk you through setting up your environment, capturing images from your webcam, and using AI to extract and store color data effectively.

## Prerequisites

Before we dive in, ensure you have the following installed on your machine:

- Node.js
- GridDB
- OpenAI API access
- A webcam

## Running The Project

Clone the source code from this [GitHub repository](https://github.com/junwatu/color-detection-openai).

```shell
git clone https://github.com/junwatu/color-detection-openai.git
```

You also need to install [Node.js](#1-installing-nodejs) and [GridDB](#2-setting-up-griddb) for this project to run. If the software requirements are installed, change the directory to the `apps` project directory and then install all the dependencies:

```shell
cd color-detection-openai
cd apps
npm install
```

Create a `.env` file and copy all environment variables from the `.env.example` file. You need an OpenAI key for this project, please look in [this section](#3-get-the-openai-key) on how to get the key.

```ini
OPENAI_API_KEY=sk-proj-secret
VITE_APP_URL=http://localhost:3000
```

You can change the `VITE_APP_URL` to your needs and then run the project by running this command:

```shell
npm run start:build
```

## Setting Up the Environment

### 1. Installing Node.js

This project will run on the Node.js platform. You need to install it from [here](https://nodejs.org/en/download). For this project, we will use the `nvm` package manager and Node.js v16.20.2 LTS version.

```shell
# installs nvm (Node Version Manager)
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash

# download and install Node.js
nvm install 16

# verifies the right Node.js version is in the environment
node -v # should print `v16.20.2`

# verifies the right NPM version is in the environment
npm -v # should print `8.19.4``
```

To connect Node.js and GridDB database, you need the [gridb-node-api](https://github.com/nodejs/node-addon-api) npm package which is a Node.js binding developed using GridDB C Client and Node addon API.

### 2. Setting Up GridDB

We will use the GridDB database to save recipes and it's nutrition analysis. Please look at the [guide](https://docs.griddb.net/latest/gettingstarted/using-apt/#install-with-apt-get) for detailed installation. We will use Ubuntu 20.04 LTS here.

Run GridDB and check if the service is running. Use this command:

```shell
sudo systemctl status gridstore
```

If not running try to run the database with this command:

```shell
sudo systemctl start gridstore
```

### 3. Get The OpenAI Key

To get the OpenAI key, create a project first and then [create a key](https://platform.openai.com/api-keys). The important thing is you should save the OpenAI key on the `.env` file and ensure not to include it in version control by adding it to the `.gitignore`.

```ini
OPENAI_API_KEY=sk-proj-secret
```

Another crucial factor is to select models that are accessible for the project. For this project, we will utilize `gpt-4o` models for image recognition and extracting colors from the image.

![limit LLMs](images/limit-models.png)

## Capturing Images with Node.js

To capture image, we can use [MediaStream API](https://developer.mozilla.org/en-US/docs/Web/API/Media_Capture_and_Streams_API). It is an API related to WebRTC which provides support for streaming audio and video data. Before capturing an image from the web camera, first we need to initialize the web camera:

```js
const initializeWebcam = () => {
  navigator.mediaDevices.getUserMedia({ video: true })
   .then(stream => {
    videoRef.current.srcObject = stream
   })
   .catch(error => {
    console.error('getUserMedia error:', error)
   })
 }
```

And then to capture the image fromt the video on the specific frame, we can use the `drawImage()` function:

```js
const captureImage = () => {
  const context = canvasRef.current.getContext('2d')
  context.drawImage(videoRef.current, 0, 0, canvasRef.current.width, canvasRef.current.height)

  const base64Image = canvasRef.current.toDataURL('image/jpeg')
  processImage(base64Image)
}
```


## Processing Images with OpenAI

## Storing Data in GridDB

## Building Color Palettes UI

## Further Enhancements
