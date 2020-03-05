const initialState = {
  users: []
}

export const globalReducer = (state = initialState, actions) => {
  switch (actions.type) {
    case 'SETGLOBALDATA':
      return {
        ...state,
        ...actions.payload
      }
    default :
      return {
        ...state
      }
  }
}