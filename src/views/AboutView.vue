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
        I grew up on the Jersey Shore in the New York City metro area. At
        Christian Brothers Academy in Lincroft, I took my first computer science
        class and learned Python. The thrill of writing code and watching it run
        in the terminal awakened a lasting passion for technology.
      </p>

      <p class="font-sans text-gray-300 leading-relaxed mb-6">
        I later attended Boston College’s Carroll School of Management,
        initially intent on a career in finance and business. Halfway through,
        however, I realized that path did not suit me. On a professor’s
        suggestion, I enrolled in Computer Science 1 — and fell in love with the
        discipline.
      </p>

      <p class="font-sans text-gray-300 leading-relaxed mb-6">
        The summer prior to graduation, a QA Engineering internship introduced
        me to professional software development. Working alongside talented
        engineers, I gradually gravitated toward the creative act of building
        rather than merely testing. That shift launched my career in software
        engineering and, eventually, security.
      </p>

      <p class="font-sans text-gray-300 leading-relaxed">
        Today I live in Georgia with my wife, daughter, and beagle. Here I
        continue to design and refine systems that support both work and family
        life. In my spare time I pursue genealogy research, play music, and read
        widely. Above all, I find deep satisfaction in creating elegant,
        reliable systems — whether for secure infrastructure or for the routines
        that save my family time and energy.
      </p>
    </div>
  </div>
</template>
