<template>
  <div class="w-full max-w-4xl mx-auto">
    <h1 id="hobbies-page-title" tabindex="-1" class="sr-only outline-none">
      Hobbies
    </h1>

    <div class="space-y-4">
      <HobbyTab
        v-for="(hobby, index) in hobbies"
        :key="hobby.id"
        :hobby="hobby"
        :is-expanded="activeHobbyId === hobby.id"
        @toggle="toggleHobby(hobby.id)"
        :class="[
          'soft-enter',
          index === 0 && 'soft-enter-delay-1',
          index === 1 && 'soft-enter-delay-2',
        ]"
      />
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import HobbyTab from "../components/HobbyTab.vue";

const activeHobbyId = ref("genealogy");

const toggleHobby = (hobbyId) => {
  activeHobbyId.value = activeHobbyId.value === hobbyId ? null : hobbyId;
};

const hobbies = [
  {
    id: "genealogy",
    title: "Genealogy",
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
      "To offset the overstimulation of digital life, I keep a daily analog journaling practice. Writing by hand brings clarity and focus. My usual setup is a passport-size Traveler's Notebook for daily entries and on-the-go notes, plus a Midori A5 for longer reflective sessions.",
      "For more than two years I have kept structured workday logs: daily goals, notes, and a brief wrap-up to set intentions for the next day. When a Traveler's Notebook insert is full, I date it with its range and archive it in a birch wood box alongside the Field Notes of years past. The system is tactile, simple, and grounding."
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
    id: "reading",
    title: "Reading",
    content: [
      "Reading is a vital part of my life, offering both knowledge and reflection. I gravitate toward books on engineering, systems thinking, self-improvement, history, philosophy, and Christianity—especially works that explore faith, discipline, and human nature.",
      "These books help me build better systems, whether technical, personal, or spiritual, and grow in understanding of myself and the world.",
      "Below are some books I have recently read and enjoyed:"
    ],
    list: [
      "Blink: The Power of Thinking Without Thinking by Malcolm Gladwell — Snap judgments as a skill; the lesson is knowing when to trust the first read.",
      "Dead Wake by Erik Larson — The sinking of the Lusitania, traced through the passengers, captain, and U-boat commander whose paths converged in May 1915.",
      "Deep Work by Cal Newport — Rules for focused success in a distracted world; the case for protecting attention like a scarce resource.",
      "Digital Minimalism: Choosing a Focused Life in a Noisy World by Cal Newport — Technology kept on purpose, not by default.",
      "Essentialism: The Disciplined Pursuit of Less by Greg McKeown — On the discipline of refusing what does not matter.",
      "G.K. Chesterton: The Apostle of Common Sense by Dale Ahlquist — Chesterton introduced as a mind rather than a mascot.",
      "Life Lessons: Fifty Things I Learned in My First Fifty Years by Patrick Madrid — Fifty short lessons; most of them about showing up.",
      "The Demon of Unrest: A Saga of Hubris, Heartbreak, and Heroism at the Dawn of the Civil War by Erik Larson — The months before the Civil War, narrated with the pace of events that could not be stopped.",
      "Washington: The Indispensable Man by James Thomas Flexner — Long and unsparing; it rewards readers who want judgment under strain, not anecdote.",
    ],
  },
];
</script>
