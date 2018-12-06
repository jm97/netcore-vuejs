<template>
	<div>
		<md-app-toolbar class="md-primary">
			<span class="md-title">Client List</span>
		</md-app-toolbar>
		<md-table>
			<md-table-row>
				<md-table-head md-numeric>ID</md-table-head>
				<md-table-head>Name</md-table-head>
			</md-table-row>

			<md-table-row v-for="(item, index) in clientData" :key="index">
				<md-table-cell md-numeric>{{ item.id }}</md-table-cell>
				<md-table-cell>{{ item.name }}</md-table-cell>
			</md-table-row>
		</md-table>
	</div>
</template>

<script>
import { DataService } from '@/services/data.service';

export default {
	name: 'ClientList',
	data: function() {
		return {
			clientData: []
		};
	},
	mounted() {
		DataService.getClients().then(xhrData => {
			this.clientData = xhrData;
		});
	},
	methods: {
		loadData() {
			this.clientData = [];
		}
	}
};
</script>

<style>
</style>
