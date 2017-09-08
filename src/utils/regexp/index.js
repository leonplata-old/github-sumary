export const betweenRegExp = (left, right) => new RegExp(`${left}(.*?)${right}`, 'ig');
export const betweenComparisionsRegExp = () => betweenRegExp('<', '>');
export const betweenRelExpressionRegExp = () => betweenRegExp('rel="', '"');
