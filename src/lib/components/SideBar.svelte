<script lang="ts">
 const nav = [
    {
        icon:'homeIcon',
        title:'home'
    },
    {
        icon:'shortsIcon',
        title:'shorts'
    },
    {
        icon:'subIcon',
        title:'subscription'
    },
    {
        icon:'libraryIcon',
        title:'You'
    }
 ]
</script>

<div class="bg-white py-2 flex flex-col px-1 fixed top-[60px]">
    {#each nav as item}
    <a href="/" class="flex items-center justify-center flex-col gap-1 py-4 hover:bg-gray-100 rounded-lg px-4">
        <img src={`icons/${item.icon}.svg`} class="w-5 h-5" alt="">
        <p class="text-xs">{item.title}</p>
    </a>
    {/each}
</div>