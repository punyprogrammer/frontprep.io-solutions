export const pokemonRating = {
  bulbasaur: '10',
  pikachu: '30',
  charmander: '50',
};

/**
 * @param {Record<string, string>} obj - Object mapping Pokemon names to ratings
 * @param {string} name - The Pokemon name to look up
 * @returns {HTMLDivElement} A div element containing the rating text
 */
export function makeDivWithText(obj, name) {
  // Your code here
  const rating = obj[name];
  const divElement = document.createElement('div');
  divElement.textContent = `${name} is rated a ${rating}`;
  return divElement;
}
