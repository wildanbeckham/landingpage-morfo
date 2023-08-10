<script>
  import Faq from "./faq.svelte";
</script>

<main class="py-14 bg-gradient-to-b from-thirt to-seccondary">
  <div
    class="mx-auto max-w-screen-xl rounded-xxl lg:flex lg:h-full bg-[url('/img/langganan.svg')] bg-no-repeat bg-right p-16 my-10 border-8 border-white p-8"
  >
    <div class="mt-0">
      <h1 class="text-seccondary text-3xl pb-4 max-w-full font-bold">
        LANGGANAN
      </h1>
      <h1 class="text-white text-6xl max-w-full font-extrabold">
        Ayo,,,Berlangganan
      </h1>
      <h1 class="text-white text-3xl max-w-full font-normal">
        untuk mendapatkan berita Terbaru dari kami
      </h1>
      <div class="mt-16">
        <p class="text-seccondary text-center text-[14px]">
          Silahkan masukkan email kamu di bawah ini, untuk mendapatkan
          berlangganan gratis dari kami
        </p>
        <div
          class="relative flex flex-wrap items-stretch border-4 border-white rounded-large"
        >
          <input
            type="email"
            class="relative m-0 block w-[1px] min-w-0 flex-auto rounded-l-large border border-4 border-primary bg-primary px-3 py-3 px-6 text-base font-normal leading-[1.6] text-neutral-700 outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-primary focus:text-neutral-700 focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:focus:border-primary placeholder:text-white placeholder:italic placeholder:font-abeezee"
            placeholder="Enter Your Email Adress"
            aria-label="Enter Your Email Adress"
            aria-describedby="basic-addon2"
          />
          <a
            href="/"
            class="bg-gradient-to-b from-seccondary to-thirt px-8 text-white rounded-large border border-l-0 border-4 border-primary px-3 py-3 px-6 text-center text-base font-normal leading-[1.6] text-neutral-700 dark:border-neutral-600 dark:text-neutral-200 dark:placeholder:text-neutral-200"
            id="basic-addon2">Coba Gratis</a
          >
        </div>
      </div>
    </div>
  </div>
  <Faq />
</main>

<style>
  input[type="email"] {
    color: white;
  }
</style>
