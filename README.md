# Tab Dupe Inline

Tab Dupe Inline is a lightweight Chrome/Brave extension that duplicates the current tab inline and automatically closes the original.

This restores a behavior many users expect from “Duplicate Tab” but that Chromium browsers do not provide natively.

Use this when ChatGPT UI starts to lock up after long discussions, the response is actually available but the UI won't respond. This extension gets you back working fast.

## Features

- Duplicates the active tab
- Automatically closes the original tab
- Preserves tab order instead of sending duplicates to the end
- Designed for keyboard-first workflows
- No UI clutter, popups, or configuration required
- No tracking, analytics, or data collection

## Usage

1. Install the extension
2. Use the configured keyboard shortcut to duplicate the current tab inline
3. The original tab is closed automatically

The keyboard shortcut can be customized in your browser’s extension shortcuts settings.

## Permissions

Tab Dupe Inline only requires the `tabs` permission, which is necessary to duplicate and close tabs.  
No other permissions are requested.

## Supported Browsers

- Google Chrome
- Brave

Other Chromium-based browsers may work but are not explicitly tested.

## Development

To load the extension locally:

1. Clone this repository
2. Open `chrome://extensions` (or `brave://extensions`)
3. Enable Developer Mode
4. Click **Load unpacked**
5. Select the extension directory

## License

This project is licensed under the MIT License.
