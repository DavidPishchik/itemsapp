export const selectedItem = item => {
    return {
        type: 'ITEM_SELECTED',
        payload: item,
    };
};
