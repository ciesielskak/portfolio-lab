
export const initialState = {
    foundations: true,
    organizations: false,
    locals: false,
    user: null,
    radio: '',
    selectBag: '',
    city: '',
        homeless: '',
        singleMoms: '',
        kids: '',
        handicapped: '',
        elderly: '',
    stepOne: true,
    stepTwo: false,
    stepThree: false
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
         case 'selectBags' :
             return {
                 ...state,
                 selectBag: action.payload
             }
         case 'selectCity' :
             return {
                 ...state,
                 city: action.payload
             }
         case 'helpKids' :
             return {
                 ...state,
                 kids: action.payload
             }
         case 'helpSingleMoms' :
             return {
                 ...state,
                 singleMoms: action.payload
             }
         case 'helpElderly' :
             return {
                 ...state,
                 elderly: action.payload
             }
         case 'helpHandicapped' :
             return {
                 ...state,
                 handicapped: action.payload
             }
         case 'helpHomeless' :
             return {
                 ...state,
                 homeless: action.payload
             }

         case 'showStepOne' :
             return {
                 ...state,
                 stepOne: true,
                 stepTwo: false,
                 stepThree: false
             }
         case 'showStepTwo' :
             return {
                 ...state,
                 stepOne: false,
                 stepTwo: true,
                 stepThree: false
             }
         case 'showStepThree' :
             return {
                 ...state,
                 stepOne: false,
                 stepTwo: false,
                 stepThree: true
             }
         default:
             return state;
     }

}