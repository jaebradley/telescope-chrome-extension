chrome.contextMenus.create({
  id: 'asdfkljz9xkljsfdkladfasdfasdasdfsf',
  title: 'See Glassdoor data',
  contexts: ['selection'],
});

chrome.contextMenus.onClicked.addListener((data) => {
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    chrome.tabs.sendMessage(tabs[0].id, data);
  });
});
