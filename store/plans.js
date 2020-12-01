import { services, models } from '@aaronmyatt/relations-data-model';

function nextWeek(date) {
    let newDate = date || new Date();
    return new Date(newDate.setDate(newDate.getDate() + 7));
}

function offsetDate(date, offset){
    return new Date(date.setDate(date.getDate() + offset));
}

export const state = function () {
    return {
        all: []
    };
};

export const mutations = {
    update(state, plans) {
        state.all = plans;
    }
};

export const actions = {
    async save({ dispatch }, { contactId, when, sooner, later }) {
        const plan = new models.Plan(contactId, when, sooner, later);
        await services.planService.addOne(plan);
        dispatch('load');
    },
    async edit({ dispatch }, plan) {
        await services.planService.updateOne(plan);
        dispatch('load');
    },
    async delete({ dispatch }, plan) {
        await services.planService.deleteOne(plan.id);
        dispatch('load');
    },
    async load({ commit }) {
        const plans = await services.planService.fetchAll().toArray();
        commit('update', plans);
    },
    initialPlan({ dispatch }, { contact }) {
        return dispatch('save', {
            contactId: contact.id,
            when: nextWeek(),
            sooner: false,
            later: false
        });
    },
    async addSoonerFor({ dispatch }, { contact }) {
        const numberOfFuturePlans = await services.planService.fetchFutureFor(contact).count();
        if (numberOfFuturePlans > 0) {
            // Do nothing since we already have a plan lined up for this contact
        } else {
            let nextDate = new Date();
            const daysBetweenLastPlans = await services.planService.daysBetweenLastPlans(contact);

            if (daysBetweenLastPlans > 1) {
                const delayDateOffset = Math.round(daysBetweenLastPlans / 2);
                nextDate = offsetDate(nextDate, delayDateOffset);
            } else {
                nextDate = offsetDate(nextDate, 4);
            }

            await dispatch('save', {
                contactId: contact.id,
                when: new Date(nextDate),
                sooner: true,
                later: false
            });
            dispatch('load');
        }
    },
    async addLaterFor({ dispatch }, { contact }) {
        const numberOfFuturePlans = await services.planService.fetfetchFutureFor(contact).count();
        if (numberOfFuturePlans > 0) {
            // Do nothing since we already have a plan lined up for this contact
        } else {
            let nextDate = new Date();
            const daysBetweenLastPlans = await services.planService.daysBetweenLastPlans(contact);

            if (daysBetweenLastPlans > 1) {
                const extendedDateOffset = daysBetweenLastPlans*2;
                nextDate = offsetDate(nextDate, extendedDateOffset);
            } else {
                nextDate = offsetDate(nextDate, 14);
            }

            await dispatch('save', {
                contactId: contact.id,
                when: new Date(nextDate),
                sooner: false,
                later: true
            });
            dispatch('load');
        }
    },
};