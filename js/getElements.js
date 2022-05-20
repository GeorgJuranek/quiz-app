export function getElements(dataJsValue) {
  return document.querySelectorAll(`[data-js= ${dataJsValue}]`);
}
