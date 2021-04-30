type ActionsType=ReturnType<typeof setAppActions>

export type initialStateType={
}

const initialState={
}

export const AppReducer = (state: initialStateType=initialState, action: ActionsType) => {
    switch (action.type) {
        case '':
            return state
        default:
            return state
    }
}

//actions
export const setAppActions=()=> ({
    type:''
}as const)