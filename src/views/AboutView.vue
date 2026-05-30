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
                  src="/assets/images/garret-patten.jpeg"
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
        I grew up on the Jersey Shore in the New York City metro area. I
        always loved computers growing up because it felt like they offered endless
        possibilities: research, blogs, forums, games, art, and more. At Christian
        Brothers Academy in Lincroft, I took my first computer science class which
        introduced me to Python and to the satisfaction of a program that behaves
        as written.
      </p>

      <p class="font-sans text-gray-300 leading-relaxed mb-6">
        Following high school, I enrolled in Boston College’s Carroll School of
        Management. I originally intended to pursue a career in finance as I thought
        that was the best path — one that my father and brothers had followed.
        Midway through my tenure, I felt unsure about it. Over coffee, a professor
        recommended I try out a computer science course since it was something I had
        enjoyed in high school. Over the next few semesters, programming slowly became
        the sharper focus of my education.
      </p>

      <p class="font-sans text-gray-300 leading-relaxed mb-6">
        The summer before my senior year, I accepted an offer for a QA engineering
        internship. This experience introduced me to software development as it is
        practiced rather than taught. Working with experienced engineers, I began
        to fall in love with the discipline as I watched features slowly come
        together one small, expertly planned iteration at a time.
      </p>

      <p class="font-sans text-gray-300 leading-relaxed mb-6">
        After returning to school, I completed my finance degree with a minor in
        computer science. Once I graduated, I began my product engineering journey
        not yet knowing it would lead me to security. While building out a
        customer-facing portal, I dealt firsthand with concepts like authentication,
        authorization, trust boundaries, validation, and sanitization. While I enjoyed
        building out new functionality and delivering smooth user experiences, I always
        found myself jumping to pick up the security work. When a spot opened up on
        my company’s newly established Product Security team, I made the jump. Four
        years later, I now serve as the team’s technical lead.
      </p>

      <p class="font-sans text-gray-300 leading-relaxed">
        Working remotely, I live in Georgia with my wife, daughter, and our beagle.
        The same systems-thinking approach manifests across my life: at work, I build
        secure pipelines and development tooling; at home, I create systems and build
        automations to help manage my family commitments and home projects. In my spare
        time, I read, journal, play guitar, research genealogy, and hang out with my
        family.
      </p>
    </div>
  </div>
</template>
