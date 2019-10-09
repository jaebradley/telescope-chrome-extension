export default function isValidJobPage(url) {
  return url && url.match(/https:\/\/www.indeed.com\/viewjob/);
}
