export const curry = (fn) => {
  const arity = fn.length;

  return function $curry(...args) {
    if (args.length < arity) {
      return $curry.bind(null, ...args);
    }

    return fn.call(null, ...args);
  };
};

export const pipe = (...sequence) => sequence
  .reduce((res, current) => res
    ? current(res)
    : current);
