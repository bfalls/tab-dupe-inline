// Duplicate the active tab, then close the tab to the left (assumed original).
// Note: relying on "left tab is original" can be brittle; see comment below.

chrome.commands.onCommand.addListener(async (command) => {
  if (command !== "dupe-inline") return;

  try {
    const [tab] = await chrome.tabs.query({
      active: true,
      currentWindow: true,
    });
    if (!tab || typeof tab.id !== "number") return;

    const originalId = tab.id;

    // Duplicate the active tab. Chromium generally activates the duplicate.
    await chrome.tabs.duplicate(originalId);

    // Get the now-active tab in the same window (should be the duplicate).
    const [activeNow] = await chrome.tabs.query({
      active: true,
      currentWindow: true,
    });
    if (!activeNow || typeof activeNow.index !== "number") return;

    // Move to the tab immediately to the left of the currently active tab.
    const leftIndex = activeNow.index - 1;
    if (leftIndex < 0) return;

    const tabs = await chrome.tabs.query({ currentWindow: true });
    const leftTab = tabs.find((t) => t.index === leftIndex);
    if (!leftTab || typeof leftTab.id !== "number") return;

    // Close the left tab (assumed original).
    await chrome.tabs.remove(leftTab.id);
  } catch (err) {
    console.error("dupe-inline failed:", err);
  }
});
