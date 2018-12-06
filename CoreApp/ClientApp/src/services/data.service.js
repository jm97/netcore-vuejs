import axios from 'axios';

export const DataService = {
	getClients() {
		return axios.get('http://localhost:5000/api/clients/list').then(xhr => xhr.data);
	}
};
