/**
 * Created by Yaroslav on 02.01.2017.
 */
export const EDIT_ITEM = 'EDIT_ITEM';

export function editItem(item) {
    const {id, name, youtube} = item;
    return {
        type: EDIT_ITEM,
        id, name, youtube
    };
}

