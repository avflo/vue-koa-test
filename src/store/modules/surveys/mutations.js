export const mutations = {
    /* setSurveys(state, products) {
        Vue.set(state, 'products', products);
    }, */
    addSurveyRes(state, res) {
        state.survey_res.push(res);
    },
};