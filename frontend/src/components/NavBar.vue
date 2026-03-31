<template>
  <nav class="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between h-14">
        <!-- Logo -->
        <RouterLink
          to="/"
          class="flex items-center gap-2 font-bold text-gray-900 hover:text-indigo-700 transition-colors"
        >
          <svg class="w-6 h-6 text-indigo-600" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <circle cx="12" cy="6" r="4"/>
              <path d="M12 12c-5.33 0-8 2.69-8 5v1h16v-1c0-2.31-2.67-5-8-5z"/>
            </svg>
          <span class="text-base">影響力ガイド</span>
        </RouterLink>

        <!-- Nav links -->
        <div class="flex items-center gap-1">
          <RouterLink
            to="/principles"
            :class="[
              'px-3 py-1.5 rounded-md text-sm font-medium transition-colors',
              $route.path === '/principles'
                ? 'bg-indigo-50 text-indigo-700'
                : 'text-gray-600 hover:bg-gray-100'
            ]"
          >
            📚 法則を学ぶ
          </RouterLink>
          <RouterLink
            to="/advisor"
            :class="[
              'px-3 py-1.5 rounded-md text-sm font-medium transition-colors',
              $route.path === '/advisor'
                ? 'bg-indigo-50 text-indigo-700'
                : 'text-gray-600 hover:bg-gray-100'
            ]"
          >
            🤖 AIに相談
          </RouterLink>
        </div>
      </div>
    </div>
  </nav>
</template>
