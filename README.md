# Klipora

**Create, style, and export video subtitles without uploading your media.**

[![Live app](https://img.shields.io/badge/Live%20app-Open%20Klipora-22d3ee?logo=githubpages&logoColor=111111)](https://luzartdev.github.io/klipora/)
[![Pages deployment](https://github.com/luzartdev/klipora/actions/workflows/pages.yml/badge.svg?branch=main)](https://github.com/luzartdev/klipora/actions/workflows/pages.yml)

Klipora is a browser-based subtitle editor with on-device Whisper speech recognition. Your video and audio stay on your device; only model files and app dependencies are downloaded from their providers.

## What You Can Do

- Transcribe speech locally with Whisper Tiny, Base, Small, or Medium.
- Choose from automatic detection and ten language options.
- Create sentence, word-group, single-word, or dynamic karaoke captions.
- Edit text, segment and word timings, and preview changes on a timeline.
- Style captions with presets, fonts, colors, outlines, shadows, positioning, and animation.
- Export SRT and VTT files, save or exchange JSON projects, or record a video with captions burned in.
- Save project settings in the browser for the next visit.

## Quick Start

1. Open the [Klipora web app](https://luzartdev.github.io/klipora/) in a supported browser.
2. Choose an MP4, WebM, MOV, or M4V video from your device.
3. Select the spoken language and a Whisper model, then choose **Generate subtitles**.
4. Review the transcript, timing, and style in the editor.
5. Export SRT/VTT, a JSON project backup, or a subtitled video.

The first transcription downloads the selected model. You need an internet connection for the app dependencies and first model download. The browser may cache downloaded files for later use.

## Models

Model sizes are approximate and depend on the files and browser cache. Larger models can improve recognition quality but need more download time, memory, and processing power.

| Model | Approx. download | Recommended for |
| --- | ---: | --- |
| Whisper Tiny | 40 MB | Phones, slower devices, quick drafts |
| Whisper Base | 75 MB | A balance of speed and quality |
| Whisper Small | 250 MB | More capable devices |
| Whisper Medium | 760 MB | Powerful computers and best available quality |

Tiny is selected by default. Klipora does not silently switch to a larger model if recognition fails. Try another model or check the language and audio when a transcript is empty or inaccurate.

## Browser Support

Use a recent version of Chrome, Edge, or Safari over HTTPS. Speech recognition requires WebAssembly, browser audio decoding, and a connection to download the model. Worker restrictions vary by browser; if workers cannot start, Klipora may fall back to the main thread, which can make the page temporarily unresponsive.

Video playback depends on the codecs supported by your browser. Burned-in video export additionally needs `MediaRecorder` and canvas capture support; the resulting format may be MP4 or WebM. Keep the tab open and the device awake during export. SRT, VTT, and JSON downloads are available independently of video-recording support.

## Privacy and AI

- Video and audio are processed in the browser and are not uploaded to a Klipora server. Klipora has no application backend.
- The browser downloads the app's speech-recognition library and selected Whisper model from third-party providers. Those requests reveal normal connection metadata to the providers, but do not include your media.
- Project settings and automatic project snapshots are stored in browser `localStorage`. Use **Export JSON** to keep a portable backup.
- Whisper performs the speech recognition. Readability estimates, text cleanup, timing adjustments, density changes, and style suggestions are lightweight local heuristics, not a second generative AI model. Review their output before exporting.

## Troubleshooting

| Problem | Try this |
| --- | --- |
| Model stays on “Preparing” or does not download | Check your connection, disable blocking extensions for the app, and reload. The first download can take time. |
| No speech is detected | Confirm the spoken-language setting, check that the video has an audio track, or try another model. |
| Video will not open | Try MP4 with H.264 video and AAC audio, or a browser-compatible WebM file. |
| Phone runs out of memory or becomes slow | Use a shorter video and Whisper Tiny. Large videos must be decoded in browser memory. |
| Video export is unavailable or downloads as WebM | This depends on browser recording support. SRT, VTT, and JSON remain available. |
| Export pauses or stops | Keep the page in the foreground, prevent the device from sleeping, and avoid switching apps. |
| Project does not persist | Browser privacy settings may block local storage. Export a JSON backup before closing the tab. |

## Local Development

Klipora is a static app with no package installation or build step. To run the maintainers' structural and JavaScript syntax checks, use Node.js 22 or later:

```sh
node scripts/check.mjs
```

For the most reliable browser APIs, serve the project over localhost instead of opening the HTML directly:

```sh
python -m http.server 8000
```

Then open `http://localhost:8000/`. The GitHub Pages workflow publishes the app at the repository root and runs automatically on pushes to `main`; it can also be started manually from the Actions tab.

Pull requests and pushes also run the static checks in the **Check Klipora** workflow. These checks catch syntax and markup-structure regressions; they do not replace browser testing or guarantee that every codec and device is supported.

## Repository Layout

- `index.html` — the complete client-side app
- `.github/workflows/pages.yml` — GitHub Pages build and deployment
- `.github/workflows/checks.yml` — static checks on pushes and pull requests
- `scripts/check.mjs` — dependency-free structural and syntax check
- `CONTRIBUTING.md` and `SECURITY.md` — contributor and security guidance

## Keyboard Shortcuts

| Shortcut | Action |
| --- | --- |
| Space | Play or pause the video when a text field is not focused |
| Ctrl+S / Cmd+S | Save the project in this browser |
| Ctrl+O / Cmd+O | Import a JSON project |
| Escape | Cancel video export |

## Project Notes

Klipora is a client-side editor and does not include cloud transcription, team workspaces, or server-side video rendering. Recognition quality and export capabilities depend on the selected model, device, media codecs, and browser. Model and library licenses are provided by their respective upstream projects; review those terms when redistributing their assets.

See [Contributing](CONTRIBUTING.md) for development and pull request guidance, and [Security](SECURITY.md) for private vulnerability reporting.

## License

No license has been selected for Klipora's source code yet. Public availability on GitHub does not by itself grant permission to reuse or redistribute the project. Third-party libraries and model files have separate licenses and terms.