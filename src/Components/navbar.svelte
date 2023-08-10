<script>
  let showMenu = false;

  function toggleNavbar() {
    showMenu = !showMenu;
  }

  let navs = [
    { name: "Produk", link: "/" },
    { name: "Solusi", link: "/" },
    { name: "Layanan", link: "/" },
    { name: "Harga", link: "/" },
    { name: "Pelatihan", link: "/" },
  ];
</script>

<main>
  <nav class="bg-primary px-24 py-3 md:flex md:justify-between md:items-center">
    <div class="flex items-center justify-between">
      <div on:click={toggleNavbar} class="flex md:hidden">
        <button
          type="button"
          class="text-gray-800 hover:text-gray-400 focus:outline-none focus:text-gray-400"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-6 h-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </button>
      </div>
    </div>

    <div
      class="flex-col mt-8 space-y-4 md:flex md:space-y-0 md:flex-row md:items-center md:space-x-10 md:mt-0 {showMenu
        ? 'flex'
        : 'hidden'}"
    >
      {#each navs as nav, index}
        <a class="text-white mx-3 text-sm hover:text-white" href="/"
          >{nav.name}</a
        >
      {/each}
      <button class="mx-3 border-white px-8 py-2 text-white rounded-lg border-2"
        >Login</button
      >
      <button
        class="mx-3 bg-gradient-to-b from-seccondary to-thirt px-8 py-2 text-white rounded-lg border-2 border-white"
        >Register</button
      >
    </div>
  </nav>
</main>
