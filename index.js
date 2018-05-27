export default function always(value) {
  return function alwaysValue() {
    return value;
  };
}
