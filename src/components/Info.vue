<template>
    <div class="info container-fluid">
        <div class="info-list">
            <ul>
                <li>
                    <span>Contact:</span>
                    {{ myInfo.contact }}
                </li>
                <li>
                    <span>Email:</span>
                    {{ myInfo.email }}
                </li>
                <li>
                    <span>Phone:</span>
                    {{ myInfo.phone }}
                </li>
                <li>
                    <span>Address Street:</span>
                    {{ myInfo.street }}
                </li>
            </ul>
        </div>
        <div class="line"></div>
        <Header :myTitle="titleArr[0]"/>
        <hr>
        <WebTable :details="details"/>

        <div class="line"></div>
        <Header :myTitle="titleArr[1]"/>
        <hr>
        <ComponentCheck :details="details"/>

        <div class="line"></div>
        <Header :myTitle="titleArr[2]"/>
        <hr>
        <Bike :details="details"/>
    </div>
</template>
<script>
import Header from './Header';
import ComponentCheck from './ComponentCheck';
import WebTable from './WebTable';
import Bike from './Bike';

export default {
    components: {
        Header,
        WebTable,
        ComponentCheck,
        Bike,
    },
    data() {
        return {
            id: this.$route.params.id,
            myInfo: this.$route.query.arr,
            titleArr: ['Web', 'Component check', 'Bike diagnostics connections'],
            details: [],
        };
    },
    created() {
		return fetch("https://my.api.mockaroo.com/service_points_detail?key=2715e050", {
			headers: {
				"Content-Type": "application/json",
				"Accept": "application/json"
			}
		})
			.then(response => response.json())
			.then(data => (this.details = data))
			.catch(error => console.log("Looks like there was a problem", error));
	},
    
};
</script>

<style scoped>
.info-list ul {
    list-style: none;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    padding: 0 20px;
}

.info-list li {
    padding-bottom: 10px;
}

.info-list li span {
    font-weight: 600;
    padding-right: 5px;
    padding-left: 5px;
}

.info.container-fluid {
	padding-left: 0;
	padding-right: 0;
}

</style>


