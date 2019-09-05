export default function always<T> (value: T) {
  return function alwaysValue (): T {
    return value;
  };
}
