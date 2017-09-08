import { betweenComparisionsRegExp, betweenRelExpressionRegExp } from '~/utils/regexp';

export const parseLinkHeader = (linkHeader) => {
  const links = linkHeader.split(',')
    .map((rawLink) => {
      const [rawUrl, rawRel] = rawLink.split(';');
      const url = betweenComparisionsRegExp().exec(rawUrl)[1];
      const rel = betweenRelExpressionRegExp().exec(rawRel)[1];
      return { url, rel };
    });
  return links;
};

export const queryStringParser = (queryString) => {
  const parsed = queryString
    .substr(1)
    .split('&')
    .map(expr => expr.split('='))
    .reduce((object, [key, value]) => {
      object[key] = value;
      return object;
    }, {});
  return parsed;
};

export const createPaginationLinks = (linkHeader, fetchHandler) => {
  const links = parseLinkHeader(linkHeader);
  return links.reduce((paginationLinks, { url, rel }) => {
    const { page } = queryStringParser(new URL(url).search);
    paginationLinks[rel] = { page, fetch: () => fetchHandler({ url, rel, page }) };
    return paginationLinks;
  }, {});
};
