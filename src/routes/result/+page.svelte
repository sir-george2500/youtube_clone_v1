<script>
	import ChannelCard from "$lib/components/ChannelCard.svelte";
    import SearchVideoCard from "$lib/components/SearchVideoCard.svelte"
</script>

<!-- Need refactoring-->
<div class="flex my-2">
    <div class="flex-grow"></div>
    <button class="font-medium border px-4 py-1 rounded-full">
      Filter
    </button>
  </div>
  <!--above code need refactoring-->
<div class="ml-8 space-y-5">
    <ChannelCard />
    <SearchVideoCard/>
</div>