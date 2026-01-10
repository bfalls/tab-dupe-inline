// src/background.js
// Tab Dupe Inline: duplicate the active tab, close the original, focus the duplicate.
// Works from BOTH:
//  - hotkey command ("dupe-inline")
//  - toolbar icon click (chrome.action.onClicked)
//
// Designed to avoid brittle index assumptions and to work without "tabs" permission.

let inFlight = false;

async function dupeAndCloseActiveTab(tabFromGesture) {
  if (inFlight) return;
  inFlight = true;

  try {
    // Prefer the tab object passed by chrome.action.onClicked (best signal / no extra query).
    let tab = tabFromGesture;

    if (!tab || typeof tab.id !== "number") {
      const [active] = await chrome.tabs.query({
        active: true,
        lastFocusedWindow: true,
      });
      tab = active;
    }

    if (!tab || typeof tab.id !== "number") return;

    const originalId = tab.id;

    // Duplicate the active tab; the returned tab object is the duplicate.
    const dup = await chrome.tabs.duplicate(originalId);
    if (!dup || typeof dup.id !== "number") return;

    // Close the original tab by ID (do NOT rely on index/position).
    await chrome.tabs.remove(originalId);

    // Usually already active, but make it explicit.
    if (!dup.active) {
      await chrome.tabs.update(dup.id, { active: true });
    }
  } catch (err) {
    console.error("Tab Dupe Inline failed:", err);
  } finally {
    inFlight = false;
  }
}

// Triggered by hotkey
chrome.commands.onCommand.addListener(async (command) => {
  if (command !== "dupe-inline") return;
  await dupeAndCloseActiveTab();
});

// Triggered by toolbar icon click
chrome.action.onClicked.addListener(async (tab) => {
  await dupeAndCloseActiveTab(tab);
});
