<template>
  <div class="max-w-3xl mx-auto">
    <h1 tabindex="-1" class="sr-only outline-none">About</h1>

    <div class="mb-8 soft-enter flex justify-center">
      <!--
        Gruvbox tricolor halo as nested rings (not box-shadow). Large stacked
        shadows ghost on real iOS WebKit during SPA route swaps; borders don't.
      -->
      <div class="rounded-full bg-cobalt-400 p-[3px]">
        <div class="rounded-full bg-gray-950 p-[3px]">
          <div class="rounded-full bg-sun-400 p-[3px]">
            <div class="rounded-full bg-gray-950 p-[3px]">
              <div class="rounded-full bg-ruby-400 p-[3px]">
                <img
                  src="/assets/images/garret-patten.jpg"
                  alt="Garret Patten"
                  class="block h-32 w-32 md:h-40 md:w-40 rounded-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="max-w-none soft-enter soft-enter-delay-1">
      <p class="font-sans text-gray-300 leading-relaxed mb-6">
        I grew up on the Jersey Shore, in the New York City metro area. My first
        computer science course, at Christian Brothers Academy in Lincroft,
        introduced me to Python and to the modest satisfaction of a program that
        behaves as written.
      </p>

      <p class="font-sans text-gray-300 leading-relaxed mb-6">
        I graduated from Boston College’s Carroll School of Management with a
        concentration in finance and a minor in computer science. I had enrolled
        for finance and business; midway through, a professor recommended
        Computer Science 1, and over time engineering became the sharper focus.
        Finance did not fall away—my career has been in financial technology,
        where both parts of the degree still matter.
      </p>

      <p class="font-sans text-gray-300 leading-relaxed mb-6">
        The summer before graduation I took a QA engineering internship—my
        introduction to software as it is practiced rather than assigned.
        Working with experienced engineers, I found I preferred writing features
        to cataloguing faults in them. Software engineering followed, then
        security, in the same industry I had trained for.
      </p>

      <p class="font-sans text-gray-300 leading-relaxed">
        Today I live in Georgia with my wife, daughter, and a beagle. The same
        inclination appears in different rooms: at work I build secure pipelines
        and automation; at home I keep genealogical records, filled notebooks,
        and the occasional script so that ordinary weeks require less
        improvisation. When time allows, I read, play the guitar, and add another
        name to a chart that keeps growing.
      </p>
    </div>
  </div>
</template>
