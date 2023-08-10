<script>
  let items = [
    {
      free: true,
      type: "Basic Plan",
      price: "Free Trial",
      featured: [
        "All Limited Links",
        "Chat Support",
        "Product Unlimited",
        "Stoc",
      ],
    },
    {
      free: false,
      type: "Standart Plan",
      price: "30.000",
      featured: [
        "All Limited Links",
        "Chat Support",
        "Product Unlimited",
        "Stoc",
        "Multiple Outler",
        "Stuck Without Watermark",
      ],
    },
    {
      free: false,
      type: "Premium Plan",
      price: "50.000",
      featured: [
        "All Limited Links",
        "Chat Support",
        "Product Unlimited",
        "Stoc",
        "Multiple Outler",
        "Stuck Without Watermark",
        "Transfer Stok to Anouther Outler",
        "Report Pro (Export to another format)",
      ],
    },
  ];
</script>

<section class="mx-auto max-w-screen-xl pt-10 sm:px-6 lg:flex lg:h-full">
  <div class="ms-auto">
    <h1 class="text-primary text-center text-9xl max-w-full font-extrabold">
      GRATIS
    </h1>
    <h1 class="text-primary text-center text-3xl max-w-full font-extrabold">
      Nikmati Semua Fitur Selama 3 Bulan Pertama
    </h1>
  </div>
</section>

<div
  class="mx-auto max-w-screen-xl rounded-xxl mb-20 p-10 border-25 border-primary lg:h-full"
>
  <div class="grid grid-cols-3 gap-8">
    {#each items as item}
      <div>
        {#if item.free}
          <div
            class="bungkus1 shadow-sm bg-primary rounded-xxl border-6 border-primary -mt-28 mb-28"
          >
            <div
              class="border-6 border-seccondary rounded-xxl sm:px-8 text-white lg:py-12"
            >
              <h5
                class="font-xs rounded-full mb-8 ms-auto w-max px-4 py-2 bg-white text-primary"
              >
                MOST POPULAR
              </h5>
              <div class="text-start">
                <h2 class="text-4xl font-bold">{item.price}</h2>
                <p class="mt-2 sm:mt-4">
                  <strong class="text-3xl font-bold"> {item.type} </strong>
                </p>
              </div>
              <div class="mt-6 mb-2">
                <h2 class="text-xl font-bold">Feature</h2>
              </div>
              <ul class=" space-y-2 h-72">
                {#each item.featured as benefit}
                  <li class="flex items-center gap-1 py-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      class="h-5 w-5 text-indigo-700 bg-seccondary rounded-full"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M4.5 12.75l6 6 9-13.5"
                      />
                    </svg>

                    <span class="text-gray-700"> {benefit} </span>
                  </li>
                {/each}
              </ul>

              <a
                href="/"
                class="mt-8 block rounded-full border border-indigo-600 bg-white px-12 py-3 text-center text-sm font-medium text-primary hover:ring-1 hover:ring-indigo-600 focus:outline-none focus:ring active:text-indigo-500 duration-300"
              >
                Get Started
              </a>
            </div>
          </div>
        {:else}
          <div class="shadow-sm rounded-xxl hover:bg-primary duration-300">
            <div
              class="bungkus text-primary rounded-xxl sm:px-8 lg:py-12 hover:text-white duration-300"
            >
              <div class="text-start">
                <h2 class="text-4xl font-bold">
                  {"Rp." + item.price + "/Bulan"}
                </h2>

                <p class="mt-2 sm:mt-4">
                  <strong class="text-3xl font-bold"> {item.type} </strong>
                </p>
              </div>
              <div class="mt-6 mb-2">
                <h2 class="text-xl font-bold">Feature</h2>
              </div>
              <ul class=" space-y-2 h-80">
                {#each item.featured as benefit}
                  <li class="flex items-center gap-1 py-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      class="h-5 w-5 text-indigo-700 bg-seccondary rounded-full"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M4.5 12.75l6 6 9-13.5"
                      />
                    </svg>

                    <span class="text-gray-700"> {benefit} </span>
                  </li>
                {/each}
              </ul>

              <a
                href="/"
                class="mt-8 block rounded-full border border-indigo-600 bg-white px-12 py-3 text-center text-sm font-medium text-indigo-600 hover:ring-1 hover:ring-indigo-600 focus:outline-none focus:ring active:text-indigo-500 duration-300"
              >
                Get Started
              </a>
            </div>
          </div>
        {/if}
      </div>
    {/each}
  </div>
</div>

<style>
  .bungkus:hover a {
    color: #5a5ba7;
  }

  .bungkus1:hover a {
    background-color: #0ceac6;
    color: #fff;
  }
</style>
