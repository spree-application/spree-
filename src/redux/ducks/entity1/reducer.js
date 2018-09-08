const initialState = {
  a: 21121212
};

export default function (
  state = initialState,
  {
    type, payload, error, meta
  }
) {
  switch (type) {
    default:
      return state;
  }
}
