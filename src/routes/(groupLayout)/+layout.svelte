<script>
	import SideBar  from '$lib/components/SideBar.svelte';
</script>
<div class="">
	<SideBar/>
	<main class="ml-[74px] p-6">
        <slot />
	</main>
</div>