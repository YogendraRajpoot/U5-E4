import { IS_AUTH } from "../Action/action";

export const reducer = (store, { type, payload }) => {
  switch (type) {
    case IS_AUTH:
      return {
        isauth: payload,
      };

    default:
      return store;
  }
};
