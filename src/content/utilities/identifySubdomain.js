export default function identifySubdomain(url) {
  const u = new URL(url);
  const hosts = u.hostname.split('.');
  return hosts[hosts.length - 2];
}
