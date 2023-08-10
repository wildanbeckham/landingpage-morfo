<script>
  import Patner from "./patner.svelte";
</script>

<main>
  <section
    class="bg-[url('/img/hero.svg')] bg-cover bg-center lg:h-screen bg-primary bg-no-repeat"
  >
    <div
      class="relative mx-auto max-w-screen-xl sm:px-6 lg:h-full grid grid-cols-2"
    >
      <a
        href="/"
        class="bg-primary px-8 py-4 rounded-xxl border-white border-4 absolute left-0"
      >
        <img src="/img/logo.png" class="w-24" alt="" /></a
      >
      <a
        href="/"
        class="bg-white text-end px-8 py-4 rounded-xxl drop-shadow-lg font-bold absolute top-4 end-0"
      >
        Coba Gratis
      </a>
      <div class="max-w-xl my-auto ltr:sm:text-left rtl:sm:text-right">
        <h1 class="text-3xl font-extrabold sm:text-5xl text-primary myclass">
          Aplikasi wirausaha, pengelolaan Bisnis praktis anti ribet!
        </h1>
        <div class="pt-10 flex">
          <a href="/"> <img src="/img/gplay.svg" alt="" /></a>
          <a href="/"> <img src="/img/store.svg" alt="" /></a>
        </div>
      </div>
      <div class="mt-auto mb-32 text-end ltr:sm:text-left rtl:sm:text-right">
        <h2 class="text-2xl fw-extrabold text-primary font-semibold myclass2">
          We help businesses like yours earn more customers, standout from
          competitors, make more money
        </h2>
        <h3 class="text-3xl fw-extrabold text-white font-semibold myclass3">
          #JAGONYA USAHA UMKM
        </h3>
      </div>
    </div>
    <Patner />
  </section>
</main>

<style>
  .myclass {
    text-shadow:
      3px 3px 0 white,
      -3px -3px 0 white,
      3px -3px 0 white,
      -3px 3px white;
  }

  .myclass2 {
    text-shadow:
      2px 2px 0 white,
      -2px -2px 0 white,
      2px -2px 0 white,
      -2px 2px white;
  }

  .myclass3 {
    text-shadow: 0px 4px 4px BLACK;
  }
</style>
