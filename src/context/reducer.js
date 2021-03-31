export const initialState = {
    foundations: true,
    organizations: false,
    locals: false,
    user: null
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
         default:
             return state;
     }

}