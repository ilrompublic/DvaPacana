const state = {
    list: [
        {
            "id": 11,
            "name": "Jacket 1"
        },
        {
            "id": 12,
            "name": "Jacket 2"
        },
        {
            "id": 13,
            "name": "Jacket 3"
        },
        {
            "id": 14,
            "name": "Jacket 4"
        },
        {
            "id": 15,
            "name": "Hoodie 1"
        },
        {
            "id": 16,
            "name": "Hoodie 2"
        },
        {
            "id": 17,
            "name": "Hoodie 3"
        },
        {
            "id": 18,
            "name": "Hoodie 4"
        },
    ],
    selected: [],
    count: 1,
};

const mutations = {
    selectOther (state, id) {
        if (!state.selected.includes(id) && state.selected.length < state.count) {
            state.selected = [...state.selected, id];
        } else if (state.selected.includes(id)) {
            state.selected = state.selected.filter(selected => selected !== id);
        }
    },
};

const actions = {
    selectOther (context, id) {
        context.commit('selectOther', id);
    }
};

export default {
    state,
    actions,
    mutations,
}