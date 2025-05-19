# YouTube Unrestrict

Bypass the "This video is unavailable with Restricted Mode enabled" message on YouTube by automatically redirecting to an alternative site.

## How It Works

When a restricted video is detected, the extension opens the same video on [yout-ube.com](https://yout-ube.com), which bypasses YouTube's restricted mode.

## Features

- Detects restricted videos on YouTube.
- Automatically redirects to an unrestricted mirror site.
- Opens the unrestricted video in a new tab (or same tab if popups are blocked).

## Installation

1. Download or clone this repository.
2. Open [chrome://extensions](chrome://extensions) in your browser.
3. Enable **Developer mode** (top right).
4. Click **Load unpacked** and select the `youtube-unrestrict` folder.

## Usage

1. Visit a YouTube video page.
2. If the video is restricted, the extension will automatically redirect you to the alternative site.

## How It Works (Technical)

- The extension injects a content script (`content.js`) on YouTube video pages.
- It waits for the error message container to appear.
- If the message "Video unavailable" is detected, it redirects to the same video on `yout-ube.com`.

## File Overview

- `manifest.json` – Chrome extension manifest.
- `content.js` – Main logic for detecting and redirecting restricted videos.

## Disclaimer

This extension is for educational purposes only. Use at your own risk.
