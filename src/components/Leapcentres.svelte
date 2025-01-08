<script>
    import { Swiper, SwiperSlide } from 'swiper/svelte';
    import { Autoplay, Navigation } from 'swiper';
    import 'swiper/css';
    import 'swiper/css/navigation';
    import programs from './data/programs.json';
    
</script>

<div class="row">
    <Swiper
        modules={[Autoplay, Navigation]}
        spaceBetween={50}
        slidesPerView={1}
        centeredSlides={true}
        loop={true}
        navigation={true}
        autoplay={{
            delay: 6000,
            disableOnInteraction: false,
        }}
        breakpoints={{
            "768": {
                slidesPerView: 3,
                spaceBetween: 20,
            },
            "1300": {
                slidesPerView: 3,
                spaceBetween: 20,
            },
        }}
    >
        {#each programs as program}
            <SwiperSlide>
                <div class="h-full flex flex-col">
                    <article class="post h-full flex flex-col">
                        <figure class="feature-image">
                            <img src="img/leap/{program.image}" alt="" class="h-48 object-cover w-full">
                        </figure>
                        <div class="entry-content flex-1 flex flex-col justify-between">
                            <h3 class="text-lg font-bold">{program.title}</h3>
                            <div class="flex flex-col">
                                <span class="byline text-sm text-gray-600">{program.address}</span>
                                <span class="byline text-xs text-gray-600 pt-2">{program.poc}</span>
                                <div class="flex flex-row justify-between pt-2 text-xs">
                                    <span class="posted-on">
                                        <a href="mailto:{program.email}">{program.email}</a>
                                    </span>
                                    <span class="comments-link">
                                        <a href="tel:{program.phone}">{program.phone}</a>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </article>
                </div>
            </SwiperSlide>
        {/each}
    </Swiper>
</div>
