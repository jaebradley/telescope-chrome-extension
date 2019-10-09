export default function isValidJobSearchPage(url) {
  return url && url.match(/https:\/\/www\.indeed\.com\/jobs/);
}
