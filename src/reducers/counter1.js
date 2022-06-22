import * as types from '../store/action-types';

const initialState = {number: 0};

export default function(state=initialState, action) {
  switch (action.type) {
    case types.ADD1:
      return {number: state.number + 1};
    case types.MINUS1:
      return {number: state.number - 1};
    default:
      return state;
  }
}
