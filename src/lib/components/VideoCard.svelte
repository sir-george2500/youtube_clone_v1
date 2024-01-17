<script lang="ts">
export let title: string;
export let publishedTimeText: string;
export let views: number;
export let videoId: string;
export let thumbnail: string;
export let channelName: string;
export let avatar: string;
</script>


<a href={`/${videoId}`} class="relative">
    <div class="relative ">
        <div class="absolute bg-black/80 text-white text-xs font-semibold rounded bottom-0 right-1 px-1">10:30</div>
        <img src={thumbnail} alt="" class="sm:h-[208px] h-[250px] w-full object-cover rounded-2xl bg-gray-200">
    </div>
    <div class="flex gap-3 mt-3">
        <img src={avatar}  alt="" class="h-9 w-9 bg-gray-100 rounded-full">
        <div class="flex flex-col">
            <h3 class="capitalize font-medium">
                {title}
            </h3>
            <p class="text-gray-600 capitalize mt-1">
                {channelName}
            </p>
            <div class="text-gray-600 text-sm flex items-center">
                <span>
                    {views} views
                </span>
                <span class="h-1  w-1 rounded-full bg-gray-600 ml-2 mr-2"></span>
                <span>
                    {publishedTimeText}
                </span>
            </div>
        </div>
    </div>
</a>
