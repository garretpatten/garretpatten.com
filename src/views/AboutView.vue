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
        I grew up on the Jersey Shore in the New York City metro area. At 
        Christian Brothers Academy in Lincroft, I took my first computer science
        class which introduced me to Python and to the modest satisfaction of a
        program that behaves as written.
      </p>

      <p class="font-sans text-gray-300 leading-relaxed mb-6">
        Following high school, I enrolled in Boston College’s Carroll School of
        Management. I had enrolled
        in the business school with the intention of pursuing a career in finance.
        Midway through my tenure though, I did not feel so sure. Over coffee, a professor
        recommended I try out a Computer Science course since it was something I had briefly enjoyed in high school. 
        Over the next few semesters, programming slowly became the
        sharper focus of my education.
      </p>

      <p class="font-sans text-gray-300 leading-relaxed mb-6">
        The summer before graduation, I accepted an offer for a QA engineering
        internship which served as my introduction to software development as it is
        practiced rather than taught. Working with experienced engineers, I began
        to fall in love with the discipline as I watched features slowly
        come together one small, expertly planned iteration at a time. After that
        summer, finance -- while still a passion -- took a backseat.
      </p>


      <p class="font-sans text-gray-300 leading-relaxed mb-6">
        After securing an offer to be an associate software developer, I completed
        my finance degree having picked up a minor in Computer Science. Following
        graduation, I began my product
        engineering journey not yet knowing it would lead me to security.
        While building out a customer-facing portal environment with my first team,
        I dealt firsthand with concepts like authentication, authorization, trust boundaries,
        validation and sanitization; while I enjoyed the frontend work and delivering
        smooth user experiences, I always found myself jumping to pick up the security work.
        Over time, designing the
        frameworks for access provisioning, auditability, and permissions
        management shifted my focus more and more towards securing the
        application’s core infrastructure as opposed to just shipping new features.
      </p>

      <p class="font-sans text-gray-300 leading-relaxed">
        Today I live in Georgia with my wife, daughter, and our beagle. The same
        systems thinking manifests in different areas: at work I build secure pipelines
        and automations; at home I amass genealogical records, fill up notebooks,
        and write the occasional script so that ordinary weeks require less
        improvisation. In my spare time, I read, journal, play the guitar, and 
        play with my daughter.
      </p>
    </div>
  </div>
</template>
