<template>
  <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
    <!-- Page Header -->
    <div class="text-center mb-10">
      <h1 class="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">{{ t('principles.title') }}</h1>
      <p class="text-gray-500 text-sm sm:text-base max-w-2xl mx-auto">
        {{ t('principles.desc') }}
      </p>
    </div>

    <!-- Scenario Filter Tabs -->
    <div class="flex gap-2 flex-wrap justify-center mb-4">
      <button
        @click="selectScenario('all')"
        :class="['px-4 py-2 rounded-full text-sm font-medium transition-colors border',
          selectedScenario === 'all'
            ? 'bg-indigo-600 text-white border-indigo-600'
            : 'bg-white text-gray-600 border-gray-200 hover:bg-gray-50']"
      >
        {{ t('principles.allFilter') }}
      </button>
      <button
        v-for="(meta, key) in scenarioLabels" :key="key"
        @click="selectScenario(key)"
        :class="['px-4 py-2 rounded-full text-sm font-medium transition-colors border',
          selectedScenario === key
            ? 'bg-indigo-600 text-white border-indigo-600'
            : 'bg-white text-gray-600 border-gray-200 hover:bg-gray-50']"
      >
        {{ meta.emoji }} {{ meta.label }}
      </button>
    </div>

    <!-- Sub-tabs -->
    <div v-if="selectedScenario !== 'all' && currentSubs"
      class="flex gap-2 flex-wrap justify-center mb-6 bg-indigo-50 rounded-2xl px-4 py-3">
      <button
        v-for="(sub, key) in currentSubs" :key="key"
        @click="selectedSub = key"
        :class="['px-3 py-1.5 rounded-full text-xs font-medium transition-colors border',
          selectedSub === key
            ? 'bg-indigo-600 text-white border-indigo-600'
            : 'bg-white text-gray-600 border-gray-200 hover:bg-gray-50']"
      >
        {{ sub.emoji }} {{ sub.label }}
      </button>
    </div>
    <div v-else class="mb-6"></div>

    <!-- Principles Grid -->
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <div v-for="p in principles" :key="p.id"
        class="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">

        <!-- Card Header -->
        <div class="border-l-4 pl-4 pr-4 pt-5 pb-3" :style="{ borderColor: colorMap[p.color] }">
          <div class="flex items-start gap-3">
            <span class="text-3xl">{{ p.emoji }}</span>
            <div class="flex-1 min-w-0">
              <div class="flex items-center gap-2 flex-wrap">
                <h2 class="text-lg font-bold text-gray-900">{{ p.name }}</h2>
                <span class="text-xs font-medium px-2 py-0.5 rounded-full"
                  :style="{ backgroundColor: colorMap[p.color] + '20', color: colorMap[p.color] }">
                  {{ p.subtitle }}
                </span>
              </div>
            </div>
          </div>
        </div>

        <div class="px-5 pb-5">
          <!-- Description -->
          <p class="text-gray-700 text-sm leading-relaxed mb-3">{{ p.description }}</p>

          <!-- Mechanism -->
          <p class="text-xs text-gray-400 leading-relaxed mb-4 italic">💡 {{ p.mechanism }}</p>

          <!-- Scenario Content -->
          <div v-if="selectedScenario !== 'all'" class="mb-4">
            <div class="rounded-xl p-4 mb-3" :style="{ backgroundColor: colorMap[p.color] + '0d' }">
              <!-- Sub-label -->
              <div class="text-xs font-bold mb-2" :style="{ color: colorMap[p.color] }">
                {{ currentSubs[selectedSub].emoji }} {{ currentSubs[selectedSub].label }}{{ t('principles.usageLabel') }}
              </div>

              <!-- Tips -->
              <ul class="space-y-1.5 mb-4">
                <li v-for="(tip, i) in currentTips(p)" :key="i"
                  class="flex items-start gap-2 text-sm text-gray-700">
                  <span class="mt-0.5 text-xs" :style="{ color: colorMap[p.color] }">●</span>
                  <span>{{ tip }}</span>
                </li>
              </ul>

              <!-- Scripts -->
              <div class="space-y-2">
                <div class="text-xs font-semibold text-gray-500 mb-1">{{ t('principles.scriptLabel') }}</div>
                <blockquote v-for="(script, i) in currentScripts(p)" :key="i"
                  class="border-l-2 pl-3 text-sm text-gray-600 italic leading-relaxed"
                  :style="{ borderColor: colorMap[p.color] }">
                  {{ script }}
                </blockquote>
              </div>
            </div>
          </div>

          <!-- Caution -->
          <div class="bg-amber-50 border border-amber-100 rounded-xl p-3">
            <div class="text-xs font-bold text-amber-700 mb-1">{{ t('principles.cautionLabel') }}</div>
            <p class="text-xs text-amber-800 leading-relaxed">{{ p.caution }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { principles as principlesJa, businessSubs as businessSubsJa, romanceSubs as romanceSubsJa, friendshipSubs as friendshipSubsJa, negotiationSubs as negotiationSubsJa } from '../data/principles.js'
import { principles as principlesEn, businessSubs as businessSubsEn, romanceSubs as romanceSubsEn, friendshipSubs as friendshipSubsEn, negotiationSubs as negotiationSubsEn } from '../data/principles_en.js'

const { t, locale } = useI18n()

const principles = computed(() => locale.value === 'en' ? principlesEn : principlesJa)

const selectedScenario = ref('business')
const selectedSub = ref('proposal')

const scenarioLabels = computed(() => ({
  business:    { label: t('advisor.contexts.business.label'),    emoji: '💼' },
  romance:     { label: t('advisor.contexts.romance.label'),     emoji: '💕' },
  friendship:  { label: t('advisor.contexts.friendship.label'),  emoji: '👫' },
  negotiation: { label: t('advisor.contexts.negotiation.label'), emoji: '🤝' },
}))

// Merge translated labels with emojis from principles data
const rawSubsMap = computed(() => locale.value === 'en' ? {
  business:    businessSubsEn,
  romance:     romanceSubsEn,
  friendship:  friendshipSubsEn,
  negotiation: negotiationSubsEn,
} : {
  business:    businessSubsJa,
  romance:     romanceSubsJa,
  friendship:  friendshipSubsJa,
  negotiation: negotiationSubsJa,
})

const subsMap = computed(() => {
  const result = {}
  for (const [scenario, subs] of Object.entries(rawSubsMap.value)) {
    result[scenario] = Object.fromEntries(
      Object.entries(subs).map(([key, val]) => [
        key,
        { ...val, label: t(`principlesSubs.${scenario}.${key}`) },
      ])
    )
  }
  return result
})

const defaultSub = {
  business:    'proposal',
  romance:     'approach',
  friendship:  'newFriend',
  negotiation: 'price',
}

const currentSubs = computed(() => subsMap.value[selectedScenario.value] ?? null)

function selectScenario(key) {
  selectedScenario.value = key
  if (defaultSub[key]) {
    selectedSub.value = defaultSub[key]
  }
}

const colorMap = {
  blue: '#3b82f6', violet: '#8b5cf6', emerald: '#10b981',
  amber: '#f59e0b', pink: '#ec4899', rose: '#f43f5e', teal: '#14b8a6',
}

function currentTips(p) {
  const scenario = p.scenarios[selectedScenario.value]
  if (!scenario) return []
  return scenario[selectedSub.value]?.tips ?? []
}

function currentScripts(p) {
  const scenario = p.scenarios[selectedScenario.value]
  if (!scenario) return []
  return scenario[selectedSub.value]?.scripts ?? []
}
</script>
