import { services, models } from '@aaronmyatt/relations-data-model';

export const state = function(){
    return {
        all: []
    };
};

export const mutations = {
    update(state, contacts) {
        state.all = contacts;
    }
};

export const actions = {
    async save({ dispatch }, { firstName, lastName, email, telephone, birthday }) {
        const contact = new models.Contact(firstName, lastName, email, telephone, birthday);
        await services.contactService.addOne(contact);
        dispatch('plans/initialPlan', { contact }, { root: true });
        dispatch('load');
    },
    async edit({ dispatch }, contact) {
        await services.contactService.updateOne(contact);
        dispatch('load');
    },
    async delete({ dispatch }, contact) {
        await services.contactService.deleteOne(contact.id);
        dispatch('load');
    },
    async load({ commit }) {
        const contacts = await services.contactService.fetchAll().toArray();
        commit('update', contacts);
    },
};