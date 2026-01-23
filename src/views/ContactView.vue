<template>
  <div class="max-w-2xl mx-auto">
    <h2 class="text-sm font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-2">
      Contact
    </h2>
    <h3 class="text-2xl md:text-3xl font-bold text-gray-900 dark:text-gray-100 mb-8">
      Get in Touch
    </h3>

    <div class="prose prose-lg dark:prose-invert max-w-none mb-8">
      <p class="text-gray-700 dark:text-gray-300 leading-relaxed">
        Feel free to reach out if you'd like to connect, collaborate, or just say hello.
        I'll do my best to get back to you promptly.
      </p>
    </div>

    <ContactForm />
  </div>
</template>

<script setup>
import ContactForm from '../components/ContactForm.vue'
</script>

