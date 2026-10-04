# Klipora

Klipora is an on-device subtitle studio for creating, editing, and exporting video captions in your browser.

## Features

- On-device speech recognition powered by Whisper
- Readability and style suggestions use local heuristics, not a second AI model
- Sentence, word-group, single-word, and dynamic karaoke subtitle layouts
- Timeline editing, word-level timing controls, and preset typography styles
- SRT, VTT, JSON project, and burned-in video export
- Local project settings saved in your browser
- Static GitHub Pages deployment with no application server or build dependencies

## Usage

Open the published page in a recent version of Chrome, Edge, or Safari. The selected model is downloaded the first time you run speech recognition; Tiny is recommended on mobile. Your video and audio files are not uploaded.

Video export support varies by browser and device. Keep the tab open while exporting. Model downloads and some browser features require HTTPS or `localhost`.

For local use, open `stuido.html`. The GitHub Pages deployment serves the app at the site root as `index.html`.