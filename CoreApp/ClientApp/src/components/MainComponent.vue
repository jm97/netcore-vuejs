<template>
	<div class="page-container">
		<md-app>


			<md-app-drawer md-permanent="full">
				<md-toolbar class="md-transparent" md-elevation="0">
					MyDatabase Admin
				</md-toolbar>

				<md-list id="nav">
					<md-list-item to="/">
						<md-icon>note</md-icon>
						<span class="md-list-item-text">
							Client List
						</span>
					</md-list-item>

					<md-list-item to="/project-links">
						<md-icon>note</md-icon>
						<span class="md-list-item-text">
							Project Links
						</span>
					</md-list-item>

					<md-list-item to="/dashboard">
						<md-icon>note</md-icon>
						<span class="md-list-item-text">
							Dashboard
						</span>
					</md-list-item>

					<md-list-item to="/logout">
						<md-icon>note</md-icon>
						<span class="md-list-item-text">
							Logout
						</span>
					</md-list-item>
				</md-list>
			</md-app-drawer>

			<md-app-content>
				<router-view />
			</md-app-content>
		</md-app>
	</div>
</template>

<script>
export default {
	name: 'MainComponent'
};
</script>
