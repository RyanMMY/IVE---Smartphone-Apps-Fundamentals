import Vue from 'nativescript-vue';

import MainScreen from './components/MainScreen';
import GameScreen from './components/GameScreen';

// Uncommment the following to see NativeScript-Vue output logs
Vue.config.silent = false;

const routes = {
    main: MainScreen,
    game: GameScreen
}

new Vue({
    render: h => h('Frame' ,[h(routes.main)])
}).$start();