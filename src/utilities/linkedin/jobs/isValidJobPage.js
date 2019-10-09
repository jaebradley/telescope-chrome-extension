export default function isValidJobPage(url) {
  return url && url.match(/https:\/\/www\.linkedin\.com\/jobs\/view\/\d+\//);
}
