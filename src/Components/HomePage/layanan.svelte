<script>
  import {
    Swiper,
    SwiperSlide,
  } from "../../../node_modules/swiper/svelte/swiper-svelte";

  import "../../../node_modules/swiper/swiper-bundle.css";

  let swiper;

  let imgs = ["1", "2", "1", "2"];
</script>

<svelte:head>
  <link
    rel="stylesheet"
    href="https://unpkg.com/swiper@8.2.4/swiper-bundle.css"
  />
</svelte:head>

<main>
  <div class="mx-auto max-w-screen-xl pt-10 sm:px-6 lg:flex lg:h-full">
    <h1 class="text-primary text-3xl max-w-full font-semibold">Layanan</h1>
  </div>
  <div class="text-center bg-primary py-4 mt-10 sm:px-6 lg:h-full">
    <h1 class="text-seccondary font-bold text-2xl mx-auto">
      kami mendukung berbagai macam jenis Bisnis Kamu
    </h1>
  </div>
  <div class="mx-auto max-w-screen-xxl sm:px-6 lg:flex lg:h-full px-8">
    <Swiper
      on:swiper={(e) => (swiper = e.detail[0])}
      spaceBetween={50}
      slidesPerView={2}
      centeredSlides={true}
    >
      {#each imgs as img}
        <SwiperSlide class="py-10 text-center">
          <img src={"/img/l" + img + ".svg"} alt="Layanan 1" />
        </SwiperSlide>
      {/each}
    </Swiper>
  </div>
  <div class="text-center bg-primary py-6 sm:px-6 lg:h-full"></div>
  <div
    class="mx-auto max-w-screen-xl justify-around pt-8 mb-10 sm:px-6 lg:flex"
  >
    <button type="button" class="" on:click={() => swiper.slidePrev()}
      ><img src="/img/left.svg" alt="" /></button
    >
    <button type="button" class="" on:click={() => swiper.slideNext()}
      ><img src="/img/right.svg" alt="" /></button
    >
    test
  </div>
</main>
