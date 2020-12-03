import { services, models } from '@aaronmyatt/relations-data-model';

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
        when = await doNotExceedMaxPlansPerDay(when);
        const plan = new models.Plan(contactId, when, sooner, later);
        await services.planService.addOne(plan);
        dispatch('load');
    },
    async edit({ dispatch }, plan) {
        plan.when = await doNotExceedMaxPlansPerDay(plan.when);
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
        let nextDate = await determineNextPlanDate(contact, 4, delayDateOffset);

        if (nextDate) {
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
        let nextDate = await determineNextPlanDate(contact, 14, extendedDateOffset);

        if (nextDate) {
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

function nextWeek(date) {
    let newDate = date || new Date();
    return new Date(newDate.setDate(newDate.getDate() + 7));
}

function offsetDate(date, offset) {
    return new Date(date.setDate(date.getDate() + offset));
}

const delayDateOffset = (days) => Math.round(days / 2);

const extendedDateOffset = (days) => Math.round(days * 2);

const minDaysBetweenPlans = async () => await services.settingService.table.where("name").equals("minDaysBetweenPlans").first();
const maxPlansPerDay = async () => await services.settingService.table.where("name").equals("maxPlansPerDay").first();

async function determineNextPlanDate(contact, defaultOffset, offsetFunction) {
    const minDaysBetweenPlansSetting = await minDaysBetweenPlans();

    const numberOfFuturePlans = await services.planService.fetchFutureFor(contact).count();
    if (numberOfFuturePlans > 0) return false;
    // Do nothing since we already have a plan lined up for this contact
    let nextDate = new Date();
    const daysBetweenLastPlans = await services.planService.daysBetweenLastPlans(contact);

    if (daysBetweenLastPlans > minDaysBetweenPlansSetting.value) {
        nextDate = offsetDate(nextDate, offsetFunction(daysBetweenLastPlans));
    } else {
        nextDate = offsetDate(nextDate, defaultOffset);
    }
    return nextDate;
}

async function doNotExceedMaxPlansPerDay(date){
    const maxPlansPerDaySetting = await maxPlansPerDay();
    const plansOnDay = await services.planService.fetchAllForDate(date).count();
    if(plansOnDay >= maxPlansPerDaySetting.value){
        return doNotExceedMaxPlansPerDay(offsetDate(date, 1));
    }else{
        return date;
    }
}