<script>
	import ChannelCard from "$lib/components/ChannelCard.svelte";
    import SearchVideoCard from "$lib/components/SearchVideoCard.svelte"
</script>

<!-- Need refactoring-->
<div class="flex my-2">
    <div class="flex-grow"></div>
    <button class="flex gap-2 font-medium border hover:bg-gray-200 px-4 py-1 rounded-full items-center">
      Filter <img src="/icons/filter.svg" class="w-5 h-5" alt="">
    </button>
  </div>
  <!--above code need refactoring-->
<div class="ml-8 space-y-5">
    <ChannelCard />
    <SearchVideoCard/>
</div>