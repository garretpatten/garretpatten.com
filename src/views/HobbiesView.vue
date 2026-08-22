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
        class="interactive-focus w-full px-4 py-3 text-base font-medium bg-gray-900 border border-gray-600 rounded-lg text-gray-100 interactive-lift"
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
        class="interactive-focus px-4 py-2 text-lg font-medium transition-colors duration-[230ms]"
        :class="getTabClasses(hobby.id)"
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

const getTabClasses = (hobbyId) => {
  if (activeTab.value === hobbyId) {
    return "text-cobalt-400 border-b-2 border-cobalt-400";
  }
  return "text-gray-300 hover:text-cobalt-300";
};

const hobbies = [
  {
    id: "genealogy",
    title: "Genealogy Research",
    content: [
      "For roughly fifteen years I have devoted spare time to two family trees—my wife’s and my own. Census records, parish registers, military documents, land schedules, and patient analysis have carried our direct lines into early America and across the Atlantic.",
      "The work has produced veterans, immigrants, and entire branches absent from the stories we were told at home. We document them now to preserve that history for future generations.",
      "The combined trees hold about six hundred direct ancestors, over one thousand documents and photographs, and several thousand citations.",
    ],
  },
  {
    id: "journaling",
    title: "Journaling",
    content: [
      "To offset the overstimulation of digital life, I keep a daily analog journaling practice. Writing by hand brings clarity and focus. My usual setup is a passport-size Traveler’s Notebook for daily entries and a Midori A5 for longer reflective sessions.",
      "For more than two years I have kept structured workday logs: daily goals, notes, and a brief wrap-up to set intentions for the next day. Pocket notebooks—usually Field Notes—go everywhere with me. When one is full, I index it, label it with its date range, and archive it in a birch wood box. The system is tactile, simple, and grounding."
    ],
  },
  {
    id: "music",
    title: "Music",
    content: [
      "Music has long been important to me, and the guitar is my main instrument. I play mostly singer-songwriter material, fingerpicking styles, and a few country songs, favoring the acoustic sound.",
      "My primary influences include Jack Johnson, Jimi Hendrix, and John Mayer. Their work continues to shape my approach to rhythm and melody.",
      "I took lessons at age twelve and learned basic blues techniques, but most of my progress has come from self-directed practice. Guitar ebbs and flows in my life; it returns as a way to unwind, create, and connect more deeply with music. I also play ukulele, and I occasionally pick up my great-grandmother’s century-old banjolele, which brings together my interests in music and family history.",
      "Below are my favorite guitars in my collection."
    ],
    list: ["Martin D-42", "Martin 000-18", "Tacoma DF-21"],
  },
  {
    id: "systems",
    title: "Personal System Design",
    content: [
      "I am committed to essentialism—the disciplined pursuit of less in order to focus on what matters. That principle shapes the personal systems I build: minimal, intentional structures that eliminate noise and protect time and attention for family, work, and growth.",
      "I automate system configuration through code, capture ideas and logs in Standard Notes, coordinate household projects with my wife in Notion and Todoist, and manage our family schedule in Proton Calendar. These tools reduce friction so I can live and work with greater focus."
    ],
  },
  {
    id: "reading",
    title: "Reading",
    content: [
      "Reading is a vital part of my life, offering both knowledge and reflection. I gravitate toward books on engineering, systems thinking, self-improvement, history, philosophy, and Christianity—especially works that explore faith, discipline, and human nature.",
      "These books help me build better systems, whether technical, personal, or spiritual, and grow in understanding of myself and the world.",
      "Below are some books I have recently read and enjoyed:"
    ],
    currently: "Who Am I, Lord? Finding Your Identity in Christ by Joe Heschmeyer",
    list: [
      "Blink: The Power of Thinking Without Thinking by Malcolm Gladwell — Snap judgments as a skill; the lesson is knowing when to trust the first read.",
      "Digital Minimalism: Choosing a Focused Life in a Noisy World by Cal Newport — Technology kept on purpose, not by default.",
      "Washington: The Indispensable Man by James Thomas Flexner — Long and unsparing; it rewards readers who want judgment under strain, not anecdote.",
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
