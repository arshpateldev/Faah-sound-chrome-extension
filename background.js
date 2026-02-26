chrome.tabs.onRemoved.addListener(() => {
    chrome.storage.sync.get(["enabled", "volume", "pitch"], (data) => {

        if (data.enabled === false) return;

        const soundUrl = chrome.runtime.getURL("faah.mp3");

        chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
            if (!tabs.length) return;

            chrome.scripting.executeScript({
                target: { tabId: tabs[0].id },
                args: [soundUrl, data.volume || 1, data.pitch || 1],
                func: (url, volume, pitch) => {

                    const audio = new Audio(url);
                    audio.volume = volume;

                    audio.playbackRate = pitch;

                    audio.play().catch(err => console.log(err));
                }
            });
        });
    });
});