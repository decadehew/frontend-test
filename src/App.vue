<template>
	<div id="app" class="container-fluid">
		<Nav @onTitle="changeTitle($event)" />
		<div class="line"></div>
		<Header :myTitle="title"  />
		<div class="line"></div>
		<router-view @onTitle="changeTitle($event)"></router-view>
	</div>
</template>

<script>
import Nav from './components/Nav';
import Header from './components/Header';
import ServicePoint from './components/ServicePoint';
import Info from './components/Info';

export default {
	name: 'app',
	components: {
		Nav,
		Header,
		ServicePoint,
		Info,
	},
	data() {
		return {
		title: 'Service Points',
		selected: false,
		}
	},
	methods: {
		changeTitle(data) {
		this.title = data;
		}
	},
};
</script>

<style>
.line {
    border: 1px solid black;
    margin-bottom: 10px;
}

.container-fluid {
	padding-left: 30px;
	padding-right: 30px;
}

hr {
	border-top: 1px solid rgba(0, 0, 0, 0.78);
}
</style>
