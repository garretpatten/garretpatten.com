<template>
  <div class="max-w-4xl mx-auto">
    <h2 class="text-sm font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-8">
      Hobbies & Interests
    </h2>

    <!-- Tab Navigation -->
    <div class="flex flex-wrap gap-2 mb-8 border-b border-gray-200 dark:border-gray-800">
      <button
        v-for="hobby in hobbies"
        :key="hobby.id"
        @click="activeTab = hobby.id"
        class="px-4 py-2 text-sm font-medium transition-colors duration-200"
        :class="
          activeTab === hobby.id
            ? 'text-navy-600 dark:text-pine-400 border-b-2 border-navy-600 dark:border-pine-400'
            : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200'
        "
      >
        {{ hobby.title }}
      </button>
    </div>

    <!-- Tab Content -->
    <div class="transition-opacity duration-200">
      <HobbyTab :hobby="activeHobby" />
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import HobbyTab from '../components/HobbyTab.vue'

const activeTab = ref('genealogy')

const hobbies = ref([
  {
    id: 'genealogy',
    title: 'Genealogy Research',
    content: [
      'I spend my free time mapping family trees for both my wife\'s family and my own. Through extensive research using historical records, census data, and DNA testing, I\'ve built comprehensive family trees spanning multiple generations.',
      'Notable discoveries include tracing lineages back to the 1700s, identifying connections to historical events, and uncovering family stories that were previously unknown. The research has revealed fascinating connections across different regions and time periods.',
      'Current statistics: Over 5,000 individuals documented across both family trees, with connections traced back to the 1700s in multiple lines. I\'ve collected and organized over 200 historical photographs, documents, and records that help tell the story of our families.'
    ]
  },
  {
    id: 'guitar',
    title: 'Guitar',
    content: [
      'Music has always been a passion of mine, and the guitar is my instrument of choice. I enjoy playing a variety of genres, with particular interest in rock, blues, and acoustic fingerstyle.',
      'Favorite artists and influences include classic rock legends, modern blues players, and contemporary fingerstyle guitarists. I find that playing guitar is both a creative outlet and a way to unwind after long days.',
      'My collection includes several guitars, each with its own character and purpose. From electric guitars for rock and blues to acoustic guitars for fingerstyle and folk music, each instrument serves a different role in my musical journey.'
    ],
    list: [
      'Fender Stratocaster (Electric)',
      'Martin D-28 (Acoustic)',
      'Taylor 814ce (Acoustic-Electric)',
      'Gibson Les Paul (Electric)'
    ]
  },
  {
    id: 'reading',
    title: 'Reading',
    content: [
      'Reading is a constant source of learning and inspiration. I enjoy a wide range of genres, from science fiction and technology to history and business. Books provide both escape and education, helping me stay curious and informed.'
    ],
    list: [
      'Dune by Frank Herbert — Epic science fiction that explores politics, religion, and ecology in a richly imagined universe.',
      'The Pragmatic Programmer by Andrew Hunt and David Thomas — Essential reading for any software engineer, full of practical wisdom.',
      'Sapiens by Yuval Noah Harari — A fascinating exploration of human history and the forces that shaped our species.',
      'Clean Code by Robert C. Martin — Fundamental principles for writing maintainable and effective code.',
      'The Phoenix Project by Gene Kim — A novel about DevOps that teaches important lessons about IT and business.',
      '1984 by George Orwell — Timeless dystopian fiction that remains relevant today.',
      'The Art of War by Sun Tzu — Ancient strategy that applies to modern challenges.',
      'The Lean Startup by Eric Ries — Innovation and entrepreneurship principles.',
      'Thinking, Fast and Slow by Daniel Kahneman — Insights into human psychology and decision-making.',
      'The Mythical Man-Month by Frederick P. Brooks — Classic software engineering wisdom that still rings true.'
    ],
    currently: 'Currently reading: The Three-Body Problem by Liu Cixin — A mind-bending science fiction novel that explores first contact and the nature of the universe.'
  }
])

const activeHobby = computed(() => {
  return hobbies.value.find(h => h.id === activeTab.value) || hobbies.value[0]
})
</script>

