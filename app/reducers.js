import _ from 'lodash';
let _reducers = {};

const doReduce = (state = null, action = {}) => {
    let reducer = _reducers[action.type];
    if (reducer) {
        state = _.cloneDeep(state);
        return reducer(state, action);
    } else {
        return state;
    }
}

const registerReducer = (type, reducer) => {
    if (_reducers[type]) {
        throw new Error('Duplicated action type : ' +  type);
    }

    _reducers[type] = reducer;
}

export default doReduce;
export { registerReducer };