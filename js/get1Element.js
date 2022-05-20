export function get1Element(dataJsValue) {
  return document.querySelector(`[data-js= ${dataJsValue}]`);
}
