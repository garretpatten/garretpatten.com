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
      "For roughly fifteen years I have devoted a meaningful portion of my spare time to two family trees—my wife’s and my own. Census records, parish registers, military documents, land schedules, and the patient analysis of them have carried our direct lines into early America and across the Atlantic.",
      "The work has produced veterans, immigrants, and entire branches absent from the stories we were told at home. We document them now to preserve that history for future generations.",
      "The combined trees hold about six hundred direct ancestors, over one thousand documents and photographs, and several thousand citations I can return to.",
    ],
  },
  {
    id: "journaling",
    title: "Journaling",
    content: [
      "To counterbalance the digital nature and overstimulation of modern life, I maintain a deliberate daily journaling practice using analog tools. I journal every day, finding clarity and focus through the physical act of writing by hand. My primary setup includes a Traveler’s Company Traveler’s Notebook (passport size), Field Notes pocket notebooks, and Midori notebooks for longer reflective sessions.",
      "For over two years, I have kept structured daily logs of my workdays: each entry captures my most important goals, notes taken throughout the day, and brief wrap-up reflections to set clear intentions for the following day. Every pocket notebook I carry—usually a Field Notes—serves as my constant companion. I index each completed notebook, label it with the date range it covers, and archive it in a birch wood box. This simple, tactile system helps me stay grounded, intentional, and present amid an increasingly screen-dominated world."
    ],
  },
  {
    id: "music",
    title: "Music",
    content: [
      "Music has long been important to me, and the guitar is my main instrument. I play mostly singer-songwriter material, fingerpicking styles, and a few country songs, favoring the acoustic sound.",
      "My influences come from 1960s and 1970s classic rock—especially Jimi Hendrix, who played a central role in fostering my love of the guitar—and Jack Johnson, a childhood favorite. John Mayer is my favorite artist to play, and his work continues to shape my approach to both rhythm and melody.",
      "I took lessons at age twelve and learned basic blues techniques, but most of my progress has come from self-directed practice. Playing the guitar ebbs and flows in my life; it returns as a way to unwind, express myself creatively, and connect more deeply with music. I also play ukulele, where guitar skills transfer easily, and I occasionally play my great-grandmother’s century-old banjolele, which brings together my interests in music and family history.",
      "Below are my favorite guitars in my collection"
    ],
    list: ["Martin D-42", "Martin 000-18", "Tacoma DF-21"],
  },
  {
    id: "systems",
    title: "Personal System Design",
    content: [
      "I am deeply committed to essentialism—the disciplined pursuit of less in order to focus on what truly matters. This principle shapes my approach to personal systems design, where I build minimal, intentional structures that eliminate noise and protect time and attention for my family, work, and personal growth.",
      "I automate data backups across devices and services, capture and organize personal ideas and logs in Standard Notes, coordinate complex family planning with my wife in Notion, manage shared household projects and tasks in Todoist, and track our family's commitments, appointments, and events (including birthdays and anniversaries) in Proton Calendar. These carefully chosen tools support clarity, reduce friction, and allow me to live and work with greater focus and simplicity."
    ],
  },
  {
    id: "reading",
    title: "Reading",
    content: [
      "Reading is a vital part of my life, offering both knowledge and reflection. I gravitate toward books on engineering, systems thinking, self-improvement, history, philosophy, and Christianity, with a particular interest in works that explore faith, discipline, and human nature.",
      "These books provide insight into how we build better systems—whether technical, personal, or spiritual—and help me grow in understanding of myself and the world.",
      "Currently reading: Who Am I, Lord? Finding Your Identity in Christ by Joe Heschmeyer.",
      "Below are some books that I have recently read and enjoyed:"
    ],
    list: [
      "Blink: The Power of Thinking Without Thinking by Malcolm Gladwell — Snap judgments examined as skill, not magic; the lesson is knowing which moments deserve the first read.",
      "Digital Minimalism: Choosing a Focused Life in a Noisy World by Cal Newport — Technology kept on purpose, not by default; a quiet book about a noisy problem.",
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
