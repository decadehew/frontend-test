<template>
    <div class="content container-fluid">
		<div class="search">
			<input 
				class="form-control mr-sm-2" 
				type="search" placeholder="Search" aria-label="Search"
				v-model="search">
			<br>
		</div>
		<table class="table table-bordered table-hover">
			<thead>
				<tr>
					<th scope="col"
						:class="{ 'sorting': sorted('contact')}"
						@click="sortBy('contact')">Contact
						<i :class="{
							'fas fa-sort-up': direction=='asc',
							'fas fa-sort-down': direction=='desc'
						}"
						v-if="sortingKey=='contact'"></i>
					</th>
					<th scope="col">Street</th>
					<th scope="col">Zip</th>
					<th scope="col">City</th>
					<th scope="col" 
						:class="{ 'sorting': sorted('country')}"
						@click="sortBy('country')">Country 
						<i :class="{
							'fas fa-sort-up': direction=='asc',
							'fas fa-sort-down': direction=='desc'
						}"
						v-if="sortingKey=='country'"></i>
					</th>
					<th scope="col">Phone</th>
					<th scope="col">Email</th>
					<th scope="col"
						:class="{ 'sorting': sorted('created_date')}"
						@click="sortBy('created_date')">Created
						<i :class="{
							'fas fa-sort-up': direction=='asc',
							'fas fa-sort-down': direction=='desc'
						}"
						v-if="sortingKey=='created_date'"></i>
					</th>
				</tr>
			</thead>
			<tbody>
				<tr v-for='item in filteredSearch' :key='item.id'>
					<td v-on:click="onCallFunc(item)">
						<router-link 
							:to="{ path: '/info/' + item.id, query: { arr: item }} "
							class="{ 'sorting': sorted('contact')}">{{ item.contact }}</router-link>
					</td>
					<td>{{ item.street }}</td>
					<td>{{ item.zip }}</td>
					<td>{{ item.city }}</td>
					<td :class="{ 'sorting': sorted('country')}">
						{{ item.country }}
					</td>
					<td>{{ item.phone }}</td>
					<td>{{ item.email }}</td>
					<td :class="{ 'sorting': sorted('created_date')}">
						{{ item.created_date }}
					</td>
				</tr>
			</tbody>
		</table>
    </div>
</template>
<script>
export default {
	data() {
		return {
			serviceData: [],
			search: '',
			sortingKey: '',
			direction: 'asc',
		};
	},
  	methods: {
		onCallFunc(item) {
			this.$emit("onTitle", "Info");
		},
		sorted(key) {
			return key === this.sortingKey;
		},
		sortBy(key) {
			if(key === this.sortingKey) {
				this.direction = this.direction === 'asc' ? 'desc' : 'asc';
			}
			this.sortingKey = key;
			this.serviceData = this._.orderBy(this.serviceData, [key], [this.direction]);
		},
  	},
	created() {
		return fetch("https://my.api.mockaroo.com/service_points?key=2715e050", {
			headers: {
				"Content-Type": "application/json",
				"Accept": "application/json"
			}
		})
			.then(response => response.json())
			.then(data => (this.serviceData = data))
			.catch(error => console.log("Looks like there was a problem", error));
	},
	computed: {
		filteredSearch() {
			return this.serviceData.filter(data => {
				return data.contact.toLowerCase().match(this.search);
			});
		}
	}
};
</script>
<style scoped>
.content.container-fluid {
	padding-left: 0;
	padding-right: 0;
}
</style>


