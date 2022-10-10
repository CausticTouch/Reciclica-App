import { loadingReducer } from "./loading.reducers";
import { show } from "./LoadingActions";
import { LoadingState } from "./LoadingState"

describe('Loading store', () => {
    it ('show', () => {
        const initialState: LoadingState = {show: false};
        const newState = loadingReducer(initialState, show());

        expect(newState).toEqual({show: true});
    })
})