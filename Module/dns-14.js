const dns = require("dns");
dns.lookup('www.google.com', function (err, addresses, family)
 {
  console.log(addresses)});
//   this will log different number of server, but always will refer to google.com