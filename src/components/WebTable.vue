<template>
    <div class="content">
        <div class="page-views">
            <div class="circle-data">
                <span>{{ pageViews = this.details.page_views }}</span>
            </div>
            <span>Page Views</span>
        </div>
        <div class="total-session-time">
            <div class="circle-data">
                <span>{{ timer(timeInSeconds = this.details.total_session_time_in_seconds) }}</span>
            </div>
            <span>Total Session Time</span>
        </div>
		<table class="table table-sm table-bordered">
			<thead>
				<tr>
					<th scope="col">Page</th>
					<th scope="col">Visit</th>
					<th scope="col">Average Session</th>
				</tr>
			</thead>
			<tbody>
                <tr v-for='(item, index) in details.web_page' :key='index'>
                    <td>{{ item.page }}</td>
                    <td>{{ item.visit }}</td>
                    <td>{{ item.average_session_in_seconds }}</td>
                </tr>
			</tbody>
		</table>
    </div>
</template>
<script>
export default {
    props: ['details'],
    data() {
        return {
            pageViews: 0,
            timeInSeconds: 0,
        }
    },
    methods: {
        timer(second) {
            const h = Math.floor(second / 3600);
            const m = Math.floor(second % 3600 / 60);

            return ('0' + h).slice(-2) + ":" + ('0' + m).slice(-2);
        }
    },
};
</script>

<style scoped>
.content {
    display: flex;
    justify-content: space-around;
}
.table {
    width: 60% !important;
}

.circle-data {
    border: 1px solid black;
    border-radius: 100%;
    width: 100%;
    height: 70px;
    margin-bottom: 5px;
}

.circle-data span {
    display: inline-block;
    text-align: center;
    width: 100%;
    height: 50%;
    margin-top: 15px;
}
</style>

