import { createReducer, on } from "@ngrx/store";
import { hide, show } from "./LoadingActions";

const reducer = createReducer({}, 
        on(show, () => {
            return {};
        }),
        on(hide, () => {
            return {};
        })
    );

    export function loadingReducer(state, action){
        return reducer(state, action);
    }