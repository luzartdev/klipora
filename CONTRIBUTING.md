# Contributing

Thanks for helping improve Klipora. Before starting a larger change, open an issue to discuss the use case and proposed approach.

## Development

Klipora is a static browser app and does not need a package install or build step. Node.js 22 or later is only needed for the static checks. From the project directory, run:

```sh
node scripts/check.mjs
```

To try the app locally, run:

```sh
python -m http.server 8000
```

Open `http://localhost:8000/` in a current browser. Speech recognition downloads its selected model on first use, so an internet connection is needed for that test.

## Before Opening a Pull Request

- Keep changes focused and avoid adding a backend or uploading user media.
- Test the affected flow in a current desktop browser and at a narrow mobile width.
- When relevant, test project import/export, subtitle formats, and video export.
- Describe browser support or model limitations honestly in the README and interface.
- Never attach private video/audio, API keys, or other personal data to an issue or pull request.

The CI workflow checks inline JavaScript syntax and essential HTML structure. There is no automated browser test suite yet. Include the manual checks you performed in your pull request.
