<script lang="ts">
  import {
    getDayIntervals,
    getLocateTimeZone,
    getSimplifiedTimeZone,
    timeParts,
  } from "./utils/date";

  const now = new Date();

  const timeZones = Intl.supportedValuesOf("timeZone");
  $: console.log(timeZones);
  $: formatters = timeZones.map(
    (tz) =>
      new Intl.DateTimeFormat("en-US", {
        hour: "numeric",
        minute: "numeric",
        timeZone: tz,
      }),
  );
  $: simplifiedTimeZones = timeZones.map((tz) => getSimplifiedTimeZone(tz));

  const baseIntl = new Intl.DateTimeFormat("en-US", {
    hour: "numeric",
    minute: "numeric",
  });
</script>

<main class="mx-auto mt-5 flex flex-col gap-5 md:max-w-screen-md">
  <h1 class="text-2xl font-bold">TZ</h1>
  <div>
    <div
      class="grid grid-cols-[auto,1fr] gap-4"
      style="--row-count: {timeZones.length + 1};"
    >
      {#each simplifiedTimeZones as tz}
        <div class="col-start-1 col-end-2">{tz}</div>
      {/each}
      <div
        class="col-start-2 col-end-3 row-start-1 row-end-[--row-count] grid grid-cols-[repeat(24,max-content)] grid-rows-subgrid gap-2 overflow-x-scroll"
      >
        {#each formatters as f}
          {#each getDayIntervals(now) as interval}
            {@const t = timeParts(interval, f)}
            <div>{t.hour}:{t.minute} {t.dayPeriod}</div>
          {/each}
        {/each}
      </div>
    </div>
  </div>
</main>
