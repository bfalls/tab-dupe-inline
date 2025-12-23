// Duplicate the active tab, then switch to the tab to the left (original) and close it.
// The duplicate tab becomes active and is placed next to the original (typical Chromium behavior).

chrome.action.onClicked.addListener(async (tab) => {
  try {
    if (!tab || typeof tab.id !== "number") return;

    const originalId = tab.id;

    // Duplicate the active tab. Chromium generally activates the duplicate.
    await chrome.tabs.duplicate(originalId);

    // Get the now-active tab in the same window (should be the duplicate).
    const [activeNow] = await chrome.tabs.query({ active: true, currentWindow: true });
    if (!activeNow || typeof activeNow.index !== "number") return;

    // Move to the tab immediately to the left of the currently active tab.
    const leftIndex = activeNow.index - 1;
    if (leftIndex < 0) return;

    const tabs = await chrome.tabs.query({ currentWindow: true });
    const leftTab = tabs.find(t => t.index === leftIndex);
    if (!leftTab || typeof leftTab.id !== "number") return;

    // Activate the left tab (original), then close it.
    await chrome.tabs.update(leftTab.id, { active: true });
    await chrome.tabs.remove(leftTab.id);

    // Nothing left to do, the duplicated tab to the right is now active.
  } catch (err) {
    console.error("Duplicate+CloseLeft failed:", err);
  }
});
