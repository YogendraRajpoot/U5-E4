export const IS_AUTH = "IS_AUTH";

// action creator
// function which create action object

export const isAuthAccount = (payload) => {
  return {
    type: IS_AUTH,
    payload,
  };
};
