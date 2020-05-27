export function getObjectPropSafely(fn, defaultValue = '') {
  try {
    return fn() || defaultValue;
  } catch (er) {
    return defaultValue;
  }
}

/**
 * Get colors in same gamut, faded over
 * @param {String} color - Base color in HEX
 * @param {*} quantity - Number of colors to create
 */
export function getGamutColors(color, quantity = 32) {
  let colors = [color];

  if (color && color.length > 7) {
    color = color.slice(0, 7);
  }

  let opacity = 256;
  const leap = (opacity * 0.8) / quantity;

  for (let index = 1; index < quantity; index++) {
    opacity -= leap;

    const opacityInHex = Math.floor(opacity).toString(16);

    colors = [...colors, color + opacityInHex];
  }

  return colors;
}

export const colorfulColors = [
  '#AFD2E9',
  '#A690A4',
  '#B1B695',
  '#FCD0A1',
  '#5AD2F4',
  '#62BEC1',
  '#646881',
  '#63595C',
  '#404E4D',
];

/**
 * Combines n functions. It’s a pipe flowing left-to-right, calling each function with the output of the last one.
 * @example
 * pipe(
 *  getName,
 *  uppercase,
 *  get6Characters,
 *  reverse
 * )({ name: 'Buckethead' }) === reverse(get6Characters(uppercase(getName({ name: 'Buckethead' }))));
 * @param  {...Function} fns
 */
export const pipe = (...fns) => (...args) => fns.reduce((result, fn) => fn(...[result, ...args.slice(1)]), args[0]);

/**
 * Combines n functions. It’s a pipe flowing right-to-left, calling each function with the output of the last one.
 * @example
 * pipe(
 * reverse,
 * get6Characters,
 * uppercase,
 * getName
 * )({ name: 'Buckethead' }) === reverse(get6Characters(uppercase(getName({ name: 'Buckethead' }))));
 * @param  {...Function} fns
 */
export const compose = (...fns) => (x) => fns.reduceRight((v, f) => f(v), x);

/**
 * Expose two functions
 *
 * `.keys`: Execute the function with each key of object
 *
 * `.values`: Execute the function with each value in object
 *
 * @example
 * executeWithObject.keys((v) => v + v)({a: 1, b: 2}) = {a: 'aa', b: 'bb'}
 *
 * @example
 * executeWithObject.values((v) => v*2)({a: 1, b: 2}) = {a: 2, b: 4}
 */
export const executeWithObject = (() => {
  const withKey = (fn) => ([k, _]) => fn(k);
  const withVal = (fn) => ([_, v]) => fn(v);
  const withEntry = (fn) => ([k, v]) => fn([k, v]);
  const toEntry = (fn) => ([k, v]) => [k, fn([k, v])];

  const execute = (hof) => (fn) => (obj) => Object.fromEntries(Object.entries(obj).map(toEntry(hof(fn))));

  return {
    keys: execute(withKey),
    values: execute(withVal),
    entries: execute(withEntry),
  };
})();

export const sortBy = (key, dir) => (arr) => arr.slice().sort((a, b) => (() => {
  if (a[key] < b[key]) return -1;
  if (a[key] > b[key]) return 1;
  return 0;
})() * dir);

