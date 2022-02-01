function conditionalRender(condition, trueElement, falseElement) {
  if (condition) {
    return trueElement;
  } else {
    return falseElement;
  }
}

function renderIfTrue(condition, element) {
  return conditionalRender(condition, element, null);
}

function deepCopy(object) {
  return JSON.parse(JSON.stringify(object));
}

export { renderIfTrue, conditionalRender, deepCopy };
