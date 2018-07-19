<template>
    <div class="content">
		<table class="table table-bordered">
			<thead>
				<tr>
					<th scope="col">Component</th>
					<th scope="col">Cick</th>
					<th scope="col">Pass</th>
					<th scope="col">Fails</th>
					<th scope="col">Bike count</th>
				</tr>
			</thead>
			<tbody>
				<tr v-for='(item, index) in details.component_check' :key='index'>
					<td>{{ item.component }}</td>
					<td>{{ item.click }}</td>
					<td>
						{{ item.click - item.fail }}
					</td>
					<td>{{ item.fail }}</td>
					<td>{{ item.bike_count }}</td>
				</tr>
			</tbody>
		</table>
    </div>
</template>
<script>
export default {
	props: ['details']
};
</script>

