const { fromJs } = require('immutable');

export default function getImmutableObject(object) {
  return fromJs(object);
}
