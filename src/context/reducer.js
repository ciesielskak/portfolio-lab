export const initialState = {
    foundations: true,
    organizations: false,
    locals: false,
    user: null,
    radio: ''
}

export const reducer = (state, action) => {
     switch (action.type) {
         case 'showOrganizations' :
             return {
                 ...state,
                 foundations: false,
                 organizations: true,
                 locals: false
             }
         case 'showFoundations' :
             return {
                 ...state,
                 foundations: true,
                 organizations: false,
                 locals: false
             }
         case 'showLocals' :
             return {
                 ...state,
                 foundations: false,
                 organizations: false,
                 locals: true
             }
         case 'setUser' :
             return {
                 ...state,
                 user: action.user
             }
         case 'setRadio' :
             return {
                 ...state,
                 radio: action.payload
             }
         default:
             return state;
     }

}