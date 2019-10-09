export default function isValidProfilePage(url) {
  return url && url.match(/https:\/\/www\.linkedin\.com\/in\/\S+\//);
}
