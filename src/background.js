chrome.contextMenus.create({
  id: 'asdfkljz9xkljsfdkladfasdfasdasdfsf',
  title: 'See Glassdoor Data',
  contexts: ['selection'],
});

chrome.contextMenus.onClicked.addListener((data) => {
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    chrome.tabs.sendMessage(tabs[0].id, data);
  });
});

// On popup click, look at current tab URL and open search results window with highest level subdomain
chrome.browserAction.onClicked.addListener(() => {
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    const currentTab = tabs[0];
    const url = new URL(currentTab.url);
    const hosts = url.hostname.split('.');
    const subdomain = hosts[hosts.length - 2];
    chrome.tabs.sendMessage(tabs[0].id, { selectionText: subdomain });
  });
});

chrome.tabs.onUpdated.addListener((tabId, changeInfo) => {
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    const currentTab = tabs[0];
    if (currentTab.id === tabId) {
      if (changeInfo && changeInfo.status === 'complete') {
        chrome.tabs.sendMessage(tabId, { type: 'ACTIVE_TAB_PAGE_LOAD' });
      }
    }
  });
});
