const state = {
    list: [
        {
            "id": 1,
            "name": "Shoes 1"
        },
        {
            "id": 2,
            "name": "Shoes 2"
        },
        {
            "id": 3,
            "name": "Shoes 3"
        },
        {
            "id": 4,
            "name": "Shoes 4"
        },
        {
            "id": 5,
            "name": "T-shirt 1"
        },
        {
            "id": 6,
            "name": "T-shirt 2"
        },
        {
            "id": 7,
            "name": "T-shirt 3"
        },
        {
            "id": 8,
            "name": "T-shirt 4"
        },
    ],
    selected: [],
    count: 6,
};

const mutations = {
    selectSelf (state, id) {
        if (!state.selected.includes(id) && state.selected.length < state.count) {
            state.selected = [...state.selected, id];
        } else if (state.selected.includes(id)) {
            state.selected = state.selected.filter(selected => selected !== id);
        }
    },
};

const actions = {
    selectSelf (context, id) {
        context.commit('selectSelf', id);
    }
};

export default {
    state,
    actions,
    mutations,
}