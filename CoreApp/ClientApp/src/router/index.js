import Vue from 'vue';
import Router from 'vue-router';
//import Home from '@/views/Home.vue';
import ClientList from '@/views/ClientList.vue';

Vue.use(Router);

export default new Router({
	mode: 'history',
	routes: [
		{
			path: '/',
			name: 'home',
			component: ClientList
		}
	]
});
