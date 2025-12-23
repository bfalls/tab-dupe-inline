<p align="center">
  <img src="assets/icon-128.png" alt="Tab Dupe Inline icon" width="128" height="128">
</p>

# Tab Dupe Inline

Tab Dupe Inline is a lightweight Chrome/Brave extension that duplicates the current tab inline and automatically closes the original.

This restores a behavior many users expect from “Duplicate Tab” but that Chromium browsers do not provide natively.

## Why

Some web apps become slow or unresponsive during long sessions, even though the content is ready for you, but the browser is locked and even Refresh is blocked.

Tab Dupe Inline lets you instantly duplicate the current tab inline and close the original, effectively refreshing the page state without losing your place. This is especially useful for tools like ChatGPT, where long conversations can cause the UI to stall and block browser Refresh, while the response is already available.

This extension gets you back working fast.

## Features

- Duplicates the active tab
- Automatically closes the original tab
- Preserves tab order by relying on the browser’s inline duplicate behavior
- Designed for keyboard-first workflows
- No UI clutter, popups, or configuration required
- No tracking, analytics, or data collection

## Behavior Assumptions

Tab Dupe Inline assumes the browser duplicates tabs **immediately next to the original tab**.

This matches current behavior in Chrome and Brave. If a future browser version changes how tab duplication works, the extension may not behave as intended.

## Usage

1. Install the extension
2. Use the configured keyboard shortcut to duplicate the current tab inline
3. The original tab is closed automatically

The keyboard shortcut can be customized in your browser’s extension shortcuts settings.

## Keyboard Shortcut

Tab Dupe Inline is designed to be used with a keyboard shortcut.

To set or change the shortcut:

1. Open `chrome://extensions/shortcuts`
2. Find **Tab Dupe Inline**
3. Assign a shortcut key

Suggested shortcut:
- Windows / Linux: **Ctrl+Shift+D**
- macOS: **Command+Shift+D**

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
