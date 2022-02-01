import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';

Vue.use(Vuetify);

export default new Vuetify({
    vuetify: {
        customVariables: ['~/assets/variables.scss'],
        treeShake: true
    },
    theme: {
        options: {
            customProperties: true,
        },
        themes: {
            light: {
                primary:    '#8B39E5',
                gray:       '#808080',
                grayLight:  '#9DA8AD',
                grayLighter: '#C7C7C7',
                white:      '#FFFFFF',
                vChipColor: '#EEF2F8'
            },
        },
    },
    icons: {
        iconfont: 'fa',
    },
});
