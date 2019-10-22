export const ADD_FEATURE = 'ADD_FEATURE';
export const REMOVE_FEATURE = 'REMOVE_FEATURE';

export function addFeature(item) {
    return {
        type: ADD_FEATURE,
        payload: item
    }
}

export function removeFeature(id) {
    return {
        type: REMOVE_FEATURE,
        payload: id
    }
}