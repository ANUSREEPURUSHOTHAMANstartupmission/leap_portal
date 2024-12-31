<script>
    import { Swiper, SwiperSlide } from 'swiper/svelte';
    import { Autoplay, Navigation } from 'swiper';
    import 'swiper/css';
    import 'swiper/css/navigation';
    import programs from './data/programs.json';
</script>

<style is:global>
  /* Custom styles for the navigation arrows */
  .swiper-button-next, .swiper-button-prev {
      color: #ff5722; /* Custom arrow color (e.g., orange) */
      font-weight: bold; /* Make the arrows bolder */
      background-color: #e64a19;
  }
  .swiper-button-next:hover, .swiper-button-prev:hover {
      color: #e64a19; /* Darker color on hover */
  }
</style>

<div class="row">
  <Swiper
      modules="{[Autoplay, Navigation]}"
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
              <div>
                  <article class="post">
                      <figure class="feature-image">
                          <img src="img/{program.image}" alt="" class="h-48">
                      </figure>
                      <div class="entry-content">
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
