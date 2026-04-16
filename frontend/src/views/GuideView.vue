<template>
  <div class="max-w-3xl mx-auto px-4 py-12">
    <div class="text-center mb-10">
      <h1 class="text-2xl font-bold text-gray-900 mb-2">{{ t('guide.title') }}</h1>
      <p class="text-gray-500 text-sm">{{ t('guide.desc') }}</p>
    </div>

    <!-- Quick Navigation -->
    <div class="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-12">
      <a href="#principles" class="bg-white border border-gray-200 rounded-xl p-3 text-center text-sm font-medium text-gray-700 hover:border-indigo-300 hover:text-indigo-700 transition-colors">
        {{ t('guide.navPrinciples') }}
      </a>
      <a href="#advisor" class="bg-white border border-gray-200 rounded-xl p-3 text-center text-sm font-medium text-gray-700 hover:border-indigo-300 hover:text-indigo-700 transition-colors">
        {{ t('guide.navAdvisor') }}
      </a>
      <a href="#plan" class="bg-white border border-gray-200 rounded-xl p-3 text-center text-sm font-medium text-gray-700 hover:border-indigo-300 hover:text-indigo-700 transition-colors">
        {{ t('guide.navPlan') }}
      </a>
      <a href="#faq" class="bg-white border border-gray-200 rounded-xl p-3 text-center text-sm font-medium text-gray-700 hover:border-indigo-300 hover:text-indigo-700 transition-colors">
        {{ t('guide.navFaq') }}
      </a>
    </div>

    <div class="space-y-12 text-sm text-gray-700 leading-relaxed">

      <!-- Section 1 -->
      <section id="principles">
        <div class="flex items-center gap-3 mb-5">
          <div class="w-10 h-10 bg-indigo-100 rounded-xl flex items-center justify-center text-xl">📚</div>
          <h2 class="text-lg font-bold text-gray-900">{{ t('guide.sec1Title') }}</h2>
        </div>
        <div class="bg-white border border-gray-100 rounded-2xl p-6 space-y-4 shadow-sm">
          <p>トップナビの「法則を学ぶ」から、チャルディーニ博士が発見した7つの影響力の法則を確認できます。</p>
          <div class="space-y-3">
            <div class="flex items-start gap-3">
              <span class="text-indigo-600 font-bold mt-0.5">1.</span>
              <div>
                <div class="font-semibold text-gray-800">シナリオフィルター</div>
                <p class="text-gray-500">「ビジネス」「恋愛」「友人関係」「交渉」の4タブを切り替えることで、そのシーンに特化した事例や活用法が表示されます。</p>
              </div>
            </div>
            <div class="flex items-start gap-3">
              <span class="text-indigo-600 font-bold mt-0.5">2.</span>
              <div>
                <div class="font-semibold text-gray-800">法則カードをクリック</div>
                <p class="text-gray-500">各法則のカードをクリックすると詳細が展開され、具体的な活用事例と実践のポイントが確認できます。</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Section 2 -->
      <section id="advisor">
        <div class="flex items-center gap-3 mb-5">
          <div class="w-10 h-10 bg-violet-100 rounded-xl flex items-center justify-center text-xl">🤖</div>
          <h2 class="text-lg font-bold text-gray-900">{{ t('guide.sec2Title') }}</h2>
        </div>
        <div class="bg-white border border-gray-100 rounded-2xl p-6 space-y-5 shadow-sm">
          <div class="bg-amber-50 border border-amber-200 rounded-xl p-4 text-amber-800 text-xs font-medium">
            AIアドバイザーの利用にはアカウント登録（無料）が必要です
          </div>

          <div class="space-y-4">
            <div class="flex items-start gap-4">
              <div class="w-8 h-8 bg-indigo-600 text-white rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0">1</div>
              <div>
                <div class="font-semibold text-gray-800 mb-1">コンテキストを選ぶ</div>
                <p class="text-gray-500">画面左のサイドバー（スマホはタブ）からシーンを選択します。「ビジネス」「恋愛」「友人関係」「交渉」の4種類から状況に合ったものを選んでください。</p>
              </div>
            </div>
            <div class="flex items-start gap-4">
              <div class="w-8 h-8 bg-indigo-600 text-white rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0">2</div>
              <div>
                <div class="font-semibold text-gray-800 mb-1">状況を入力する</div>
                <p class="text-gray-500">テキストエリアに悩んでいる状況を具体的に書いてください。詳細に書くほど、より的確なアドバイスが返ってきます。</p>
                <div class="mt-2 bg-gray-50 rounded-lg p-3 text-gray-600 text-xs">
                  <div class="font-semibold mb-1">入力例</div>
                  「上司に新しい企画を提案したいのですが、いつも話を聞いてもらえません。今週金曜にプレゼンの機会があります。どうすれば通せるでしょうか？」
                </div>
              </div>
            </div>
            <div class="flex items-start gap-4">
              <div class="w-8 h-8 bg-indigo-600 text-white rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0">3</div>
              <div>
                <div class="font-semibold text-gray-800 mb-1">送信する</div>
                <p class="text-gray-500">「送信」ボタンをクリック、またはキーボードの <code class="bg-gray-100 px-1.5 py-0.5 rounded text-xs">⌘ + Enter</code>（Windowsは <code class="bg-gray-100 px-1.5 py-0.5 rounded text-xs">Ctrl + Enter</code>）で送信できます。</p>
              </div>
            </div>
            <div class="flex items-start gap-4">
              <div class="w-8 h-8 bg-indigo-600 text-white rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0">4</div>
              <div>
                <div class="font-semibold text-gray-800 mb-1">アドバイスを受け取る</div>
                <p class="text-gray-500">AIがリアルタイムで回答を生成します。適用すべき法則の解説、具体的なアドバイス、実際に使えるセリフ例が返ってきます。</p>
              </div>
            </div>
          </div>

          <div class="border-t border-gray-100 pt-4">
            <div class="font-semibold text-gray-800 mb-2">より良いアドバイスをもらうコツ</div>
            <ul class="list-disc pl-4 space-y-1 text-gray-500">
              <li>相手との関係性（上司・初対面・長年の友人など）を書く</li>
              <li>過去に試みた行動があれば記載する</li>
              <li>達成したい具体的なゴールを書く</li>
              <li>いつまでに解決したいかの期限があれば書く</li>
            </ul>
          </div>
        </div>
      </section>

      <!-- Section 3 -->
      <section id="plan">
        <div class="flex items-center gap-3 mb-5">
          <div class="w-10 h-10 bg-emerald-100 rounded-xl flex items-center justify-center text-xl">💳</div>
          <h2 class="text-lg font-bold text-gray-900">{{ t('guide.sec3Title') }}</h2>
        </div>
        <div class="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm">
          <div class="grid sm:grid-cols-2 gap-4">
            <div class="border-2 border-gray-200 rounded-xl p-5">
              <div class="font-bold text-gray-900 mb-1">{{ t('pricing.freePlan') }}</div>
              <div class="text-2xl font-bold text-gray-900 mb-3">¥0 <span class="text-sm font-normal text-gray-400">{{ t('pricing.perMonth') }}</span></div>
              <ul class="space-y-2 text-gray-600 text-xs">
                <li class="flex items-center gap-1.5"><span class="text-emerald-500 font-bold">✓</span> {{ t('pricing.feature1') }}</li>
                <li class="flex items-center gap-1.5"><span class="text-emerald-500 font-bold">✓</span> {{ t('pricing.feature2') }}</li>
              </ul>
            </div>
            <div class="border-2 border-indigo-600 bg-indigo-600 rounded-xl p-5">
              <div class="font-bold text-white mb-1">{{ t('pricing.premiumPlan') }}</div>
              <div class="text-2xl font-bold text-white mb-3">¥980 <span class="text-sm font-normal text-indigo-200">{{ t('pricing.perMonth') }}</span></div>
              <ul class="space-y-2 text-indigo-100 text-xs">
                <li class="flex items-center gap-1.5"><span class="text-white font-bold">✓</span> {{ t('pricing.feature1') }}</li>
                <li class="flex items-center gap-1.5"><span class="text-white font-bold">✓</span> {{ t('pricing.feature3') }}</li>
                <li class="flex items-center gap-1.5"><span class="text-white font-bold">✓</span> {{ t('pricing.feature4') }}</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <!-- FAQ -->
      <section id="faq">
        <div class="flex items-center gap-3 mb-5">
          <div class="w-10 h-10 bg-amber-100 rounded-xl flex items-center justify-center text-xl">❓</div>
          <h2 class="text-lg font-bold text-gray-900">{{ t('guide.faqTitle') }}</h2>
        </div>
        <div class="space-y-3">
          <div v-for="faq in faqs" :key="faq.q" class="bg-white border border-gray-100 rounded-xl shadow-sm overflow-hidden">
            <button
              @click="faq.open = !faq.open"
              class="w-full text-left px-5 py-4 flex items-center justify-between gap-3 hover:bg-gray-50 transition-colors"
            >
              <span class="font-semibold text-gray-900 text-sm">{{ faq.q }}</span>
              <span class="text-gray-400 flex-shrink-0 transition-transform" :class="faq.open ? 'rotate-180' : ''">▾</span>
            </button>
            <div v-if="faq.open" class="px-5 pb-4 text-gray-600 text-sm leading-relaxed border-t border-gray-50">
              <div class="pt-3">{{ faq.a }}</div>
            </div>
          </div>
        </div>
      </section>

    </div>

    <div class="mt-12 text-center bg-indigo-50 rounded-2xl p-6">
      <p class="text-gray-600 text-sm mb-3">{{ t('guide.contactCta') }}</p>
      <RouterLink to="/contact" class="inline-block bg-indigo-600 hover:bg-indigo-700 text-white font-semibold px-6 py-2.5 rounded-xl text-sm transition-colors">
        {{ t('guide.contactBtn') }}
      </RouterLink>
    </div>
  </div>
</template>

<script setup>
import { reactive } from 'vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

const faqs = reactive([
  {
    q: 'AIアドバイザーはどのAIを使っていますか？',
    a: 'Anthropic社のClaude（claude-sonnet-4-6）を使用しています。チャルディーニの7つの法則を元に状況を分析し、具体的なアドバイスと実践的なセリフ例を生成します。',
    open: false,
  },
  {
    q: '月5回のカウントはいつリセットされますか？',
    a: '毎月1日にリセットされます。例えば3月中に5回使い切っても、4月1日になると再び5回ご利用いただけます。',
    open: false,
  },
  {
    q: 'AIに入力した内容は保存されますか？',
    a: 'チャット履歴はブラウザのセッション内のみで保持され、サーバーへは保存されません。ページを閉じると会話内容はリセットされます。なお、AI処理のためAnthropicのAPIにテキストが送信されます。',
    open: false,
  },
  {
    q: 'プレミアムプランに変更したのに「残り0回」と表示されます',
    a: 'ページをリロードしてください。決済完了後にアカウント情報が更新されます。それでも解消しない場合はお問い合わせください。',
    open: false,
  },
  {
    q: '解約はどこからできますか？',
    a: '料金ページからサブスクリプション管理画面を開き、解約手続きができます。次回更新日の前日までに解約すれば翌月分の請求は発生しません。',
    open: false,
  },
  {
    q: 'スマートフォンでも使えますか？',
    a: 'はい。スマートフォン・タブレットに対応したレスポンシブデザインになっています。アプリのインストールは不要で、ブラウザからそのままご利用いただけます。',
    open: false,
  },
])
</script>
