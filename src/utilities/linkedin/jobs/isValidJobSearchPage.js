export default function isValidJobSearchPage(url) {
  return url && url.match(/https:\/\/www\.linkedin\.com\/jobs\/search\//);
}
