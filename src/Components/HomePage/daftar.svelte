<script>
  let items = ["2", "3", "1"];
</script>

<main class="py-14 bg-gradient-to-b from-seccondary to-thirt">
  <div class="mx-auto pb-10">
    <h1 class="text-primary text-center text-3xl max-w-full font-semibold">
      Dapatkan Harga Terbaik di Mogi
    </h1>
  </div>
  <div class="grid lg:grid-cols-3 gap-8 mx-auto max-w-screen-xl">
    {#each items as item}
      <img
        class="aspect-3/2 object-contain my-auto"
        src={"/img/app" + item + ".svg"}
        alt=""
      />
    {/each}
  </div>
</main>
<div class="-mt-10 text-center">
  <button
    class="rounded-full bg-primary border-8 border-white text-white text-3xl px-20 py-4"
    >Daftar</button
  >
</div>

<style>
</style>
