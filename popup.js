
document.addEventListener("DOMContentLoaded", () => {

    const enabled = document.getElementById("enabled");
    const volume = document.getElementById("volume");
    const pitch = document.getElementById("pitch");

    chrome.storage.sync.get(["enabled", "volume", "pitch"], (data) => {
        enabled.checked = data.enabled !== false;
        volume.value = data.volume || 1;
        pitch.value = data.pitch || 1;
    });

    enabled.addEventListener("change", () => {
        chrome.storage.sync.set({ enabled: enabled.checked });
    });

    volume.addEventListener("input", () => {
        chrome.storage.sync.set({ volume: parseFloat(volume.value) });
    });

    pitch.addEventListener("input", () => {
        chrome.storage.sync.set({ pitch: parseFloat(pitch.value) });
    });

});