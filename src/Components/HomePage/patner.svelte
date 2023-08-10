<script>
  let imgs = ["1", "2", "3"];
</script>

<main class="patner rounded-full">
  <div class="rounded-full">
    <div class="flex bg-white justify-center mx-20 rounded-full py-2">
      {#each imgs as img}
        <img src={"/img/" + img + ".svg"} class="patner-img px-4" alt="" />
      {/each}
    </div>
  </div>
</main>

<style>
  .patner {
    margin-top: -80px;
  }

  .rounded-full {
    border-radius: 30px;
  }
</style>
