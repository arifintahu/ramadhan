<template>
	<div class="container">
		<div class="loadingio-spinner-cube-2n5rla4eg8q">
			<div class="ldio-lokbol8m3q">
				<div></div><div></div><div></div><div></div>
			</div>
		</div>
	</div>
</template>

<script>
  export default {
    name: 'Loader',
  }
</script>


<style scoped>
	@keyframes ldio-lokbol8m3q {
	  0% { transform: scale(1.1500000000000001) }
	  100% { transform: scale(1) }
	}
	.ldio-lokbol8m3q div {
	  position: absolute;
	  width: 80px;
	  height: 80px;
	  top: 13.333333333333336px;
	  left: 13.333333333333336px;
	  background: #0055a5;
	  animation: ldio-lokbol8m3q 1s cubic-bezier(0,0.5,0.5,1) infinite;
	  animation-delay: -0.3s;
	}
	.ldio-lokbol8m3q div:nth-child(2) {
	  top: 13.333333333333336px;
	  left: 106.66666666666666px;
	  background: #45aee7;
	  animation-delay: -0.2s;
	}
	.ldio-lokbol8m3q div:nth-child(3) {
	  top: 106.66666666666666px;
	  left: 13.333333333333336px;
	  background: #ce64a6;
	  animation-delay: 0s;
	}
	.ldio-lokbol8m3q div:nth-child(4) {
	  top: 106.66666666666666px;
	  left: 106.66666666666666px;
	  background: #bda0b2;
	  animation-delay: -0.1s;
	}
	.loadingio-spinner-cube-2n5rla4eg8q {
	  width: 200px;
	  height: 200px;
	  display: inline-block;
	  overflow: hidden;
	  background: transparent;
	}
	.ldio-lokbol8m3q {
	  width: 100%;
	  height: 100%;
	  position: relative;
	  transform: translateZ(0) scale(1);
	  backface-visibility: hidden;
	  transform-origin: 0 0; /* see note above */
	}
	.ldio-lokbol8m3q div { box-sizing: content-box; }
</style>