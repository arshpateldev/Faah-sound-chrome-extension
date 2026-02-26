🚀 FAAH Pro – Custom Tab Close Sound Extension

FAAH Pro is a Chrome Extension built with Manifest V3 that plays a customizable sound effect whenever a browser tab is closed.

It features a modern popup interface with volume control, pitch adjustment, and enable/disable functionality. Built to demonstrate event-driven browser extension architecture using Chrome APIs.

✨ Features

🔊 Plays sound when a tab is closed

🎚 Adjustable volume control

🎵 Adjustable pitch control

🔘 Enable / Disable toggle

💾 Settings saved using chrome.storage.sync

🎨 Custom stylized SVG logo

⚡ Lightweight and fast

🛠 Tech Stack

JavaScript

Chrome Extensions API (Manifest V3)

HTML / CSS

SVG Graphics

Service Workers

🧠 How It Works

The background service worker listens for tab close events using:

chrome.tabs.onRemoved

When triggered:

Retrieves saved settings (volume, pitch, enabled state)

Injects a script into the active tab using:

chrome.scripting.executeScript

Plays the audio with custom settings

Settings are stored using:

chrome.storage.sync
📦 Installation (Development Mode)

Clone this repository:

git clone https://github.com/your-username/faah-pro.git

Open Chrome and go to:

chrome://extensions/

Enable Developer Mode

Click Load Unpacked

Select the project folder

The extension will now appear in your Chrome toolbar.

📁 Project Structure
faah-pro-extension/
│
├── manifest.json
├── background.js
├── popup.html
├── popup.js
├── popup.css
├── faah.mp3
├── logo.svg
🎛 Controls

Inside the popup UI:

Enable/Disable Sound

Adjust Volume (0 – 1)

Adjust Pitch (0.5x – 2x)

Settings are automatically saved.

🔒 Privacy

This extension:

Does NOT collect user data

Does NOT track browsing history

Does NOT send data externally

Everything runs locally in the browser.

🚀 Future Improvements

Multiple sound packs

Random sound mode

Tab close counter

Animated tab-close visual effects

Chrome Web Store publishing

👨‍💻 Author

Built as a Chrome Extension project to explore modern browser APIs and event-driven architecture.
