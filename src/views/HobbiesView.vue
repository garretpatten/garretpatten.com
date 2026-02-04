<template>
  <div class="max-w-4xl mx-auto">

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
      'I have devoted significant free time over the last decade and a half to mapping the family trees of both my wife\'s family and my own. Through research in historical records, census data, and DNA testing, I have traced our direct ancestral lines back to their American beginnings and European origins.',
      'This work has uncovered connections to historical events and previously unknown family stories, deepening our appreciation of the journeys that shaped our heritage.',
      'The trees currently include approximately 600 direct ancestors across both families. They are supported by several hundred historical photographs, roughly one hundred key documents, and several thousand record citations.'
]
  },
  {
    id: 'music',
    title: 'Music',
    content: [
      'Music has long been important to me, and the guitar is my main instrument. I play mostly singer-songwriter material, fingerpicking styles, and a few country songs, favoring the acoustic sound.',
      'My influences come from 1960s and 1970s classic rock—especially Jimi Hendrix, who played a central role in fostering my love of the guitar—and 1990s artists like the Goo Goo Dolls, a childhood favorite. John Mayer is my favorite artist to play, and his work continues to shape my approach to both rhythm and melody.',
      'I took lessons at age twelve and learned basic blues techniques, but most of my progress has come from self-directed practice. Playing the guitar ebbs and flows in my life; it returns as a way to unwind, express myself creatively, and connect more deeply with music. I also play ukulele, where guitar skills transfer easily, and I occasionally play my great-grandmother’s century-old banjolele, which brings together my interests in music and family history.',
      'Below are my favorite guitars in my collection:'
    ],
    list: [
      'Martin D-42',
      'Martin 000-18',
      'Tacoma DF-21'
    ]
  },
  {
    id: 'reading',
    title: 'Reading',
    content: [
      'Reading is a vital part of my life, offering both knowledge and reflection. I gravitate toward books on engineering, systems thinking, self-improvement, history, philosophy, and Christianity, with a particular interest in works that explore faith, discipline, and human nature.',
      'These books provide insight into how we build better systems—whether technical, personal, or spiritual—and help me grow in understanding of myself and the world.',
      'Currently reading: Digital Minimalism by Cal Newport. Below are some books that I have recently read and enjoyed:'
    ],
    list: [
      'Washington: The Indispensable Man by James Thomas Flexner — A comprehensive biography that captures Washington\'s character, leadership, and the pivotal role he played in the founding of America.',
      'What Christians Believe by Bishop Robert Barron — A clear and accessible exploration of core Christian doctrines, explaining the essential beliefs that define the faith.',
      'The Demon of Unrest: A Saga of Hubris, Heartbreak, and Heroism at the Dawn of the Civil War by Erik Larson — A gripping narrative of the lead-up to the American Civil War.',
      'Life Lessons: Fifty Things I Learned in My First Fifty Years by Patrick Madrid — Practical wisdom from a Catholic perspective on living a meaningful life.',
      'G.K. Chesterton: The Apostle of Common Sense by Dale Ahlquist — An accessible introduction to Chesterton’s life, thought, and defense of Christian orthodoxy.',
      'Prayer for Beginners by Peter Kreeft — A clear, thoughtful guide to developing a deeper prayer life.',
      'Essentialism: The Disciplined Pursuit of Less by Greg McKeown — A powerful framework for focusing on what truly matters.',
      'Fire & Blood by George R. R. Martin — A detailed history of House Targaryen, rich in political intrigue and world-building.',
      'Tao Te Ching by Lao Tzu — Timeless wisdom on simplicity, balance, and living in harmony with the natural order.',
      'From Strength to Strength: Finding Success, Happiness, and Deep Purpose in the Second Half of Life by Arthur C. Brooks — Insights on shifting from career achievement to deeper fulfillment.',
      'The Subtle Art of Not Giving a F*ck: A Counterintuitive Approach to Living a Good Life by Mark Manson — A refreshingly honest take on values, responsibility, and living meaningfully.',
      'The Distant Echo by Val McDermid — A compelling crime novel that weaves past and present with emotional depth.'
    ]
  }
])

const activeHobby = computed(() => {
  return hobbies.value.find(h => h.id === activeTab.value) || hobbies.value[0]
})
</script>

