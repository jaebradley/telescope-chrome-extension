export default function isValidCompanyPage(url) {
  return url && url.match(/https:\/\/www\.linkedin\.com\/company\/\S+\//);
}
