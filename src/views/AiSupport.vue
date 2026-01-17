<script setup>
import { ref, computed } from 'vue'
import { getAiMessage } from '../services/aiService'

// State
const mood = ref("")
const aiMessage = ref("")
const loading = ref(false)
const history = ref([])
const isOfflineMode = ref(false)
const charLimit = 150

// Challenge: Categories
const categories = ['Stressed', 'Sad', 'Tired', 'Anxious']

const setMood = (cat) => {
  mood.value = `I am feeling ${cat.toLowerCase()}.`
}

// Challenge: Validation
const isOverLimit = computed(() => mood.value.length > charLimit)

const askAI = async () => {
  if (!mood.value || isOverLimit.value) return
  loading.value = true
  
  const response = await getAiMessage(mood.value, isOfflineMode.value)
  
  aiMessage.value = response
  loading.value = false

  // Challenge: History List
  history.value.unshift({
    id: Date.now(),
    text: response,
    timestamp: new Date().toLocaleTimeString(),
    reaction: null
  })
}

// Challenge: Emoji Reactions
const addReaction = (item, emoji) => {
  item.reaction = emoji
}
</script>

<template>
  <div class="p-6 max-w-2xl mx-auto bg-slate-50 min-h-screen">
    <div class="bg-white p-8 rounded-3xl shadow-lg">
      <h1 class="text-3xl font-bold mb-2 text-indigo-800">AI Mood Support</h1>
      
      <div class="flex items-center gap-3 mb-6 bg-indigo-50 p-3 rounded-xl">
        <label class="relative inline-flex items-center cursor-pointer">
          <input type="checkbox" v-model="isOfflineMode" class="sr-only peer">
          <div class="w-11 h-6 bg-gray-200 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-indigo-600"></div>
        </label>
        <span class="text-sm font-medium text-indigo-700">
          {{ isOfflineMode ? 'Offline Mode (Local)' : 'Online Mode (Groq AI)' }}
        </span>
      </div>

      <div class="flex gap-2 mb-4">
        <button v-for="cat in categories" :key="cat" @click="setMood(cat)"
          class="px-4 py-2 bg-white border border-indigo-200 rounded-full text-sm hover:bg-indigo-600 hover:text-white transition">
          {{ cat }}
        </button>
      </div>

      <div class="relative">
        <textarea v-model="mood" 
          class="border-2 p-4 w-full rounded-2xl focus:ring-2 focus:ring-indigo-400 outline-none transition"
          :class="isOverLimit ? 'border-red-400' : 'border-indigo-100'"
          rows="3" placeholder="How are you feeling?"></textarea>
        <p class="text-right text-xs mt-1" :class="isOverLimit ? 'text-red-500 font-bold' : 'text-gray-400'">
          {{ mood.length }} / {{ charLimit }}
        </p>
      </div>

      <div class="flex gap-2">
        <button @click="askAI" :disabled="loading || isOverLimit || !mood"
          class="mt-4 flex-1 bg-indigo-600 text-white font-bold py-3 rounded-xl hover:bg-indigo-700 disabled:opacity-50 transition">
          {{ loading ? 'Thinking...' : 'Get Support Message' }}
        </button>
        <button v-if="aiMessage && !loading" @click="askAI" 
          class="mt-4 px-6 bg-slate-100 rounded-xl hover:bg-slate-200 transition">
          🔄
        </button>
      </div>

      <div v-if="aiMessage" class="mt-8 p-6 bg-indigo-50 border-l-8 border-indigo-400 rounded-xl">
        <p class="italic text-indigo-900 text-lg">"{{ aiMessage }}"</p>
      </div>
    </div>

    <div v-if="history.length > 0" class="mt-10">
      <h2 class="font-bold text-gray-500 uppercase tracking-widest text-sm mb-4">Recent Support</h2>
      <div class="space-y-4">
        <div v-for="item in history" :key="item.id" class="bg-white p-5 rounded-2xl shadow-sm border border-gray-100">
          <p class="text-gray-700 mb-3">{{ item.text }}</p>
          <div class="flex justify-between items-center">
            <span class="text-[10px] text-gray-400">{{ item.timestamp }}</span>
            
            <div class="flex gap-2">
              <span v-if="item.reaction" class="text-lg mr-2">{{ item.reaction }}</span>
              <button @click="addReaction(item, '❤️')" class="hover:scale-125 transition">❤️</button>
              <button @click="addReaction(item, '🙏')" class="hover:scale-125 transition">🙏</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>