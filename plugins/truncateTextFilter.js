import Vue from 'vue';

//credit to @Bill Criswell for this filter
Vue.filter('truncate', function (text, stop, clamp) {
    return text.slice(0, stop) + (stop < text.length ? clamp || '...' : '')
});