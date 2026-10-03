function htmlEncode(str) {
  const replacements = {
    '&': '&amp;',

    '<': '&lt;',

    '>': '&gt;',

    '"': '&quot;',

    "'": '&#39;',
  };
  // Your code here
  for (let [key, value] of Object.entries(replacements)) {
    str = str.replaceAll(key, value);
  }
  return str;
}
