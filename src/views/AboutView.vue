<template>
  <div class="max-w-3xl mx-auto">
    <h1 tabindex="-1" class="sr-only outline-none">About</h1>

    <div class="mb-8 soft-enter flex justify-center">
      <!--
        Ordered warm-to-cool halo as nested rings (not box-shadow). Large stacked
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
      <p class="font-sans text-lg text-gray-300 leading-relaxed mb-6">
        I grew up on the Jersey Shore in the New York City metro area and fell for
        computers early: research, blogs, forums, games, art, and more. At Christian
        Brothers Academy in Lincroft, my first computer science class introduced me
        to Python and to the quiet satisfaction of a program that behaves exactly as
        written.
      </p>

      <p class="font-sans text-lg text-gray-300 leading-relaxed mb-6">
        Following high school, I enrolled in Boston College’s Carroll School of
        Management and planned to pursue finance — the path my father and brothers
        had taken. Midway through, I felt unsure. Over coffee, a professor suggested
        I try a computer science course, remembering how much I had enjoyed it in
        high school. Over the next few semesters, programming became the sharper
        focus of my education.
      </p>

      <p class="font-sans text-lg text-gray-300 leading-relaxed mb-6">
        The summer before my senior year, I accepted a QA engineering internship and
        saw software development as it is practiced rather than taught. Working with
        experienced engineers, I fell in love with the discipline as features came
        together one small, expertly planned iteration at a time.
      </p>

      <p class="font-sans text-lg text-gray-300 leading-relaxed mb-6">
        After returning to school, I completed my finance degree with a minor in
        computer science. Once I graduated, I began my product engineering journey not
        yet knowing it would lead me to security. While building a customer-facing
        portal, I dealt firsthand with authentication, authorization, trust boundaries,
        validation, and sanitization. I enjoyed delivering smooth user experiences, but I
        kept volunteering for the security work. When a spot opened on my company’s
        newly established Product Security team, I made the jump. Four years later, I
        serve as the team’s technical lead.
      </p>

      <p class="font-sans text-lg text-gray-300 leading-relaxed">
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
