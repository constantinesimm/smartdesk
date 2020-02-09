<template>
	<div class="app-page-title-bar">
		<div class="level">
			<div class="level-left">
				<div class="level-item">
					<h1 class="title">
						<slot/>
					</h1>
				</div>
			</div>
			<div class="level-right">
				<div class="level-item"/>
			</div>
		</div>
	</div>
</template>

<script>
    export default {
        name: "TitleBar"
    }
</script>

<style scoped>
	.title {
		font-weight: 500;
	}
	.app-page-title-bar {
		background-color: #fff;
		padding: 1rem 0.75rem;
		border: 1px solid rgba(24,28,33,.06);
	}
</style>
