<script>
	import SearchBar from "./SearchBar.svelte";

</script>
<header class="flex px-4 items-center h-[64px] py-2 bg-white z-10 justify-between sticky top-0 left-0">
    <div class="flex gap-4 items-center">
        <img src="/icons/bugerIcon.svg" alt="" class="p-3 rounded-full hover:bg-gray-200 cursor-pointer">
        <img src="/icons/ytLogo.svg" alt="">
    </div>
    <SearchBar />
    <div class="flex gap-3 items-center">
        <img src="/icons/createIcon.svg" alt="" class="p-3 rounded-full hover:bg-gray-200 cursor-pointer">
        <img src="/icons/notIcon.svg" alt="" class="p-3 rounded-full hover:bg-gray-200 cursor-pointer">
        <img src="/avatar.jpg" alt="" class="bg-gray-200 h-8 w-8 rounded-full">

    </div>
</header>