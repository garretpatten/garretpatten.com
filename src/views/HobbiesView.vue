<template>
  <div class="max-w-4xl mx-auto">
    <h1 id="hobbies-page-title" tabindex="-1" class="sr-only outline-none">
      Hobbies
    </h1>

    <!-- Mobile: Dropdown Navigation -->
    <div class="md:hidden mb-6 soft-enter">
      <label for="hobby-select" class="sr-only">Hobby category</label>
      <select
        id="hobby-select"
        v-model="activeTab"
        class="interactive-focus w-full px-4 py-3 text-sm font-medium bg-gray-900 border border-gray-600 rounded-lg text-gray-100 interactive-lift"
        @change="announceHobbyChange"
      >
        <option v-for="hobby in hobbies" :key="hobby.id" :value="hobby.id">
          {{ hobby.title }}
        </option>
      </select>
    </div>

    <!-- Desktop: Tab Navigation -->
    <div
      role="tablist"
      aria-label="Hobby categories"
      class="hidden md:flex flex-wrap gap-2 mb-8 border-b border-gray-700 soft-enter soft-enter-delay-1"
    >
      <button
        v-for="hobby in hobbies"
        :key="hobby.id"
        type="button"
        role="tab"
        :id="`hobby-tab-${hobby.id}`"
        :aria-selected="activeTab === hobby.id"
        :aria-controls="`hobby-panel-${hobby.id}`"
        @click="selectHobby(hobby.id)"
        class="interactive-focus px-4 py-2 text-md font-medium transition-colors duration-[230ms] interactive-lift"
        :class="
          activeTab === hobby.id
            ? 'text-sun-400 border-b-2 border-torch-400'
            : 'text-gray-300 hover:text-ruby-400'
        "
      >
        {{ hobby.title }}
      </button>
    </div>

    <!-- Tab Content -->
    <div class="hobby-content">
      <div
        aria-live="polite"
        aria-atomic="true"
        class="sr-only"
      >
        {{ hobbyAnnouncement }}
      </div>

      <Transition name="hobby-swap" mode="out-in">
        <div
          :id="`hobby-panel-${activeHobby.id}`"
          role="tabpanel"
          :aria-labelledby="
            isDesktopTablist
              ? `hobby-tab-${activeHobby.id}`
              : 'hobbies-page-title'
          "
          :key="activeHobby.id"
        >
          <HobbyTab :hobby="activeHobby" />
        </div>
      </Transition>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from "vue";
import HobbyTab from "../components/HobbyTab.vue";

const activeTab = ref("genealogy");
const hobbyAnnouncement = ref("");
const isDesktopTablist = ref(false);

const hobbies = [
  {
    id: "genealogy",
    title: "Genealogy Research",
    content: [
      "For roughly fifteen years I have devoted much of my spare time to two family trees—my wife’s and my own. Census records, parish registers, DNA results, and patient comparison have carried our direct lines into early America and across the Atlantic.",
      "The work has produced veterans, immigrants, and entire branches absent from the stories we were told at home. We document them now because the paper outlasts the telling.",
      "The combined trees hold about six hundred direct ancestors, several hundred photographs, a hundred documents worth keeping, and several thousand citations I can return to.",
    ],
  },
  {
    id: "journaling",
    title: "Journaling",
    content: [
      "Each workday I keep a log in a pocket notebook, most often Field Notes: priorities for the day, notes from meetings, a short closing line for whoever opens the book tomorrow. Finished volumes receive a date range on the spine and a place on the shelf.",
      "Longer entries go into a passport-size Traveler’s Notebook or a Midori or Moleskine. The pen is slower than the keyboard; it is also harder to mistake for urgent mail.",
    ],
  },
  {
    id: "music",
    title: "Music",
    content: [
      "The guitar is what I play when I play—mostly acoustic, mostly singer-songwriter and fingerstyle, with some country when the song asks for it.",
      "Hendrix came first, in the way influence often does, before I knew what I was learning. The Goo Goo Dolls belong to childhood radio. John Mayer is the artist I return to; his sense of rhythm and melody is the standard I measure against, knowing I fall short.",
      "I took lessons at twelve and learned enough blues to recognize the form. The rest came from practice fit around a job and a household. The instrument waits patiently; when I pick it up again it is usually late, and usually worth the trouble. I play ukulele as well, and sometimes a banjolele that belonged to my great-grandmother—a small overlap between music and family history I did not set out to make.",
      "Guitars I return to most often:",
    ],
    list: ["Martin D-42", "Martin 000-18", "Tacoma DF-21"],
  },
  {
    id: "systems",
    title: "Personal System Design",
    content: [
      "A household and a career do not organize themselves. I keep the machinery small: backups that run whether I remember them or not, one calendar my wife and I both consult, a few shared lists so we are not conducting our lives by text message.",
      "Standard Notes for personal writing, Notion and Todoist for plans we share, Proton Calendar for the dates that recur every year. The point is not the stack; the point is to spend less attention on where things were written down.",
    ],
  },
  {
    id: "reading",
    title: "Reading",
    content: [
      "I read across engineering, history, philosophy, and Christian thought—genres that disagree on the shelf but agree that people are habitual creatures, for better and worse.",
      "Currently reading: Digital Minimalism, by Cal Newport.",
      "Books I finished recently and would lend:",
    ],
    list: [
      "Washington: The Indispensable Man by James Thomas Flexner — Long and unsparing; it rewards the reader who wants judgment under strain, not anecdote.",
      "What Christians Believe by Bishop Robert Barron — An orderly introduction to what Christians hold in common, without pretending the subject is simple.",
      "The Demon of Unrest: A Saga of Hubris, Heartbreak, and Heroism at the Dawn of the Civil War by Erik Larson — The months before the Civil War, narrated with the pace of events that could not be stopped.",
      "Life Lessons: Fifty Things I Learned in My First Fifty Years by Patrick Madrid — Fifty short lessons; most of them about showing up.",
      "G.K. Chesterton: The Apostle of Common Sense by Dale Ahlquist — Chesterton introduced as a mind rather than a mascot.",
      "Essentialism: The Disciplined Pursuit of Less by Greg McKeown — On the discipline of refusing what does not matter.",
    ],
  },
];

const activeHobby = computed(() => {
  return hobbies.find((h) => h.id === activeTab.value) || hobbies[0];
});

const announceHobby = (hobbyId) => {
  const hobby = hobbies.find((h) => h.id === hobbyId);
  if (hobby) {
    hobbyAnnouncement.value = `${hobby.title} selected`;
  }
};

const selectHobby = (hobbyId) => {
  activeTab.value = hobbyId;
  announceHobby(hobbyId);
};

const announceHobbyChange = () => {
  announceHobby(activeTab.value);
};

const updateTablistMode = () => {
  isDesktopTablist.value = window.matchMedia("(min-width: 768px)").matches;
};

onMounted(() => {
  updateTablistMode();
  window.addEventListener("resize", updateTablistMode);
});

onUnmounted(() => {
  window.removeEventListener("resize", updateTablistMode);
});

</script>

<style scoped>
.hobby-content {
  position: relative;
}

.hobby-swap-enter-active {
  transition: opacity 220ms var(--motion-ease-standard);
}

.hobby-swap-enter-from {
  opacity: 0;
}

.hobby-swap-leave-active {
  transition: opacity 120ms linear;
  pointer-events: none;
}

.hobby-swap-leave-from {
  opacity: 1;
}

.hobby-swap-leave-to {
  opacity: 0;
}
</style>
