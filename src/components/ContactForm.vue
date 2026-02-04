<template>
  <form
    @submit.prevent="handleSubmit"
    class="space-y-4"
  >
    <div>
      <label
        for="name"
        class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
      >
        Name
      </label>
      <input
        id="name"
        v-model="form.name"
        type="text"
        name="name"
        required
        class="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-navy-500 dark:focus:ring-pine-500"
        placeholder="Your name"
      />
    </div>

    <div>
      <label
        for="email"
        class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
      >
        Email
      </label>
      <input
        id="email"
        v-model="form.email"
        type="email"
        name="email"
        required
        class="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-navy-500 dark:focus:ring-pine-500"
        placeholder="your.email@example.com"
      />
    </div>

    <div>
      <label
        for="message"
        class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
      >
        Message
      </label>
      <textarea
        id="message"
        v-model="form.message"
        name="message"
        required
        rows="5"
        class="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-navy-500 dark:focus:ring-pine-500 resize-none"
        placeholder="Your message..."
      ></textarea>
    </div>

    <button
      type="submit"
      :disabled="isSubmitting"
      class="w-full md:w-auto px-6 py-2 bg-navy-600 dark:bg-pine-600 text-white rounded-lg font-medium hover:bg-navy-700 dark:hover:bg-pine-700 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-navy-500 dark:focus:ring-pine-500 disabled:opacity-50 disabled:cursor-not-allowed"
    >
      {{ isSubmitting ? 'Sending...' : 'Send Message' }}
    </button>

    <p v-if="submitMessage" class="text-sm" :class="submitMessageType === 'success' ? 'text-green-600 dark:text-green-400' : 'text-red-600 dark:text-red-400'">
      {{ submitMessage }}
    </p>
  </form>
</template>

<script setup>
import { ref } from 'vue'

const form = ref({
  name: '',
  email: '',
  message: ''
})

const isSubmitting = ref(false)
const submitMessage = ref('')
const submitMessageType = ref('')

const handleSubmit = async () => {
  isSubmitting.value = true
  submitMessage.value = ''

  try {
    const response = await fetch('https://formspree.io/f/xnjzegzg', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: form.value.name,
        email: form.value.email,
        message: form.value.message,
        _replyto: form.value.email,
      }),
    })

    if (response.ok) {
      submitMessage.value = 'Message sent! I\'ll get back to you soon.'
      submitMessageType.value = 'success'
      form.value = { name: '', email: '', message: '' }
    } else {
      throw new Error('Failed to send message')
    }
  } catch (error) {
    submitMessage.value = 'Sorry, there was an error sending your message. Please try again later.'
    submitMessageType.value = 'error'
  } finally {
    isSubmitting.value = false
    if (submitMessage.value) {
      setTimeout(() => {
        submitMessage.value = ''
      }, 5000)
    }
  }
}
</script>

