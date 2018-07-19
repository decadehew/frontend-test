<template>
    <div class="content">
		<table class="table table-bordered">
			<thead>
				<tr>
					<th scope="col">Date</th>
					<th scope="col">VIN</th>
					<th scope="col">Customer name</th>
				</tr>
			</thead>
			<tbody>
                <tr v-for='(item, index) in details.diagnostics_connection' :key='index'>
                    <td>{{ item.date }}</td>
                    <td>
                        <a href="#">{{ item.vin }}</a>
                    </td>
                    <td>{{ item.customer_name }}</td>
                </tr>
			</tbody>
		</table>
    </div>
</template>
<script>
export default {
    props: ['details'],
};
</script>

