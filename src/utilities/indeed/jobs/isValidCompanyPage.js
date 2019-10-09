export default function isValidCompanyPage(url) {
  return url && url.match(/https:\/\/www\.indeed\.com\/cmp\/[a-zA-Z]+/);
}
