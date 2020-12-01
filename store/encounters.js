import { services, models } from '@aaronmyatt/relations-data-model';

export const state = function(){
    return {
        all: []
    };
};

export const mutations = {
    update(state, encounters) {
        state.all = encounters;
    }
};

export const actions = {
    async save({ dispatch }, { contactId, details, how, when }) {
        const encounter = new models.Encounter(contactId, details, how, when);
        await services.encounterService.addOne(encounter);
        dispatch('load');
    },
    async edit({ dispatch }, encounter) {
        await services.encounterService.updateOne(encounter);
        dispatch('load');
    },
    async delete({ dispatch }, encounter) {
        await services.encounterService.deleteOne(encounter.id);
        dispatch('load');
    },
    async load({ commit }) {
        const encounters = await services.encounterService.fetchAll().toArray();
        commit('update', encounters);
    },
};