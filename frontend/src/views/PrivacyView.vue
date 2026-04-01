<template>
  <div class="max-w-3xl mx-auto px-4 py-12">
    <h1 class="text-2xl font-bold text-gray-900 mb-2">プライバシーポリシー</h1>
    <p class="text-sm text-gray-400 mb-10">最終更新日：2026年4月1日</p>

    <div class="space-y-8 text-sm text-gray-700 leading-relaxed">
      <section>
        <h2 class="text-base font-bold text-gray-900 mb-3">1. 収集する情報</h2>
        <p class="mb-2">本サービスでは、以下の情報を収集することがあります。</p>
        <ul class="list-disc pl-5 space-y-1">
          <li><strong>アカウント情報：</strong>メールアドレス（登録・ログイン時）</li>
          <li><strong>利用状況：</strong>AIアドバイスの月間利用回数</li>
          <li><strong>決済情報：</strong>プレミアムプラン契約者の決済状態（カード情報はStripe社が管理し、当サービスでは保持しません）</li>
          <li><strong>アクセス情報：</strong>IPアドレス、ブラウザの種類、アクセス日時（ログとして自動収集）</li>
        </ul>
      </section>

      <section>
        <h2 class="text-base font-bold text-gray-900 mb-3">2. 情報の利用目的</h2>
        <ul class="list-disc pl-5 space-y-1">
          <li>本サービスの提供・運営・改善</li>
          <li>ユーザー認証およびアカウント管理</li>
          <li>プレミアムプランの管理・課金処理</li>
          <li>利用規約違反の調査・対応</li>
          <li>重要なお知らせのメール送信</li>
        </ul>
      </section>

      <section>
        <h2 class="text-base font-bold text-gray-900 mb-3">3. 第三者への提供</h2>
        <p class="mb-2">当運営は、以下の場合を除き、ユーザーの個人情報を第三者に提供しません。</p>
        <ul class="list-disc pl-5 space-y-1">
          <li>ユーザーの同意がある場合</li>
          <li>法令に基づく場合</li>
          <li>人の生命・身体・財産の保護のために必要な場合</li>
        </ul>
      </section>

      <section>
        <h2 class="text-base font-bold text-gray-900 mb-3">4. 利用する外部サービス</h2>
        <div class="space-y-3">
          <div class="bg-gray-50 rounded-xl p-4">
            <div class="font-semibold text-gray-800 mb-1">Supabase</div>
            <p class="text-gray-600">ユーザー認証およびデータベース管理に使用。詳細はSupabaseのプライバシーポリシーをご参照ください。</p>
          </div>
          <div class="bg-gray-50 rounded-xl p-4">
            <div class="font-semibold text-gray-800 mb-1">Stripe</div>
            <p class="text-gray-600">決済処理に使用。クレジットカード情報はStripeのPCI DSS準拠環境で管理されます。</p>
          </div>
          <div class="bg-gray-50 rounded-xl p-4">
            <div class="font-semibold text-gray-800 mb-1">Anthropic (Claude AI)</div>
            <p class="text-gray-600">AIアドバイス生成に使用。ユーザーが入力したテキストはAI処理のためAnthropicのAPIに送信されます。Anthropicのプライバシーポリシーに従って処理されます。</p>
          </div>
        </div>
      </section>

      <section>
        <h2 class="text-base font-bold text-gray-900 mb-3">5. Cookieの使用</h2>
        <p>本サービスは、ユーザーのセッション管理のためにCookieおよびローカルストレージを使用することがあります。ブラウザの設定でCookieを無効にした場合、一部の機能が正常に動作しないことがあります。</p>
      </section>

      <section>
        <h2 class="text-base font-bold text-gray-900 mb-3">6. 個人情報の開示・訂正・削除</h2>
        <p>ユーザーは、自身の個人情報の開示・訂正・削除を当運営に請求することができます。お問い合わせページよりご連絡ください。本人確認のうえ、合理的な期間内に対応します。</p>
      </section>

      <section>
        <h2 class="text-base font-bold text-gray-900 mb-3">7. セキュリティ</h2>
        <p>当運営は、収集した個人情報の漏洩・不正アクセス・改ざんを防ぐため、適切な安全管理措置を講じます。ただし、インターネット上での完全な安全を保証するものではありません。</p>
      </section>

      <section>
        <h2 class="text-base font-bold text-gray-900 mb-3">8. 本ポリシーの変更</h2>
        <p>当運営は、必要に応じて本ポリシーを変更することがあります。変更後に本サービスを利用した場合、変更後のポリシーに同意したものとみなします。</p>
      </section>

      <section>
        <h2 class="text-base font-bold text-gray-900 mb-3">9. お問い合わせ</h2>
        <p>個人情報の取り扱いに関するご質問・ご要望は、<RouterLink to="/contact" class="text-indigo-600 hover:underline">お問い合わせページ</RouterLink>よりご連絡ください。</p>
      </section>
    </div>
  </div>
</template>
