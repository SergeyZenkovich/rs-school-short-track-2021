/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  const objAppearanceOfDNS = {

  };
  const reverseDomains = domains.map((el) => el.split('.').reverse());
  reverseDomains.forEach((el) => {
    let tempDomain = '';
    el.forEach((domain) => {
      tempDomain += `.${domain}`;
      if (tempDomain in objAppearanceOfDNS) {
        objAppearanceOfDNS[tempDomain] += 1;
      } else {
        objAppearanceOfDNS[tempDomain] = 1;
      }
    });
  });
  return objAppearanceOfDNS;
}

module.exports = getDNSStats;
