<template>
  <div class="max-w-3xl mx-auto px-4 py-12">
    <h1 class="text-2xl font-bold text-gray-900 mb-8">{{ t('legal.title') }}</h1>

    <div class="bg-white rounded-2xl border border-gray-200 overflow-hidden">
      <table class="w-full text-sm">
        <tbody>
          <tr class="border-b border-gray-100">
            <th class="bg-gray-50 px-6 py-4 text-left font-semibold text-gray-700 w-1/3 align-top">{{ t('legal.seller') }}</th>
            <td class="px-6 py-4 text-gray-700">{{ t('legal.sellerValue') }}</td>
          </tr>
          <tr class="border-b border-gray-100">
            <th class="bg-gray-50 px-6 py-4 text-left font-semibold text-gray-700 align-top">{{ t('legal.representative') }}</th>
            <td class="px-6 py-4 text-gray-700">{{ t('legal.sellerValue') }}</td>
          </tr>
          <tr class="border-b border-gray-100">
            <th class="bg-gray-50 px-6 py-4 text-left font-semibold text-gray-700 align-top">{{ t('legal.address') }}</th>
            <td class="px-6 py-4 text-gray-700">{{ t('legal.addressValue') }}</td>
          </tr>
          <tr class="border-b border-gray-100">
            <th class="bg-gray-50 px-6 py-4 text-left font-semibold text-gray-700 align-top">{{ t('legal.email') }}</th>
            <td class="px-6 py-4 text-gray-700">y.k199xtbma@gmail.com</td>
          </tr>
          <tr class="border-b border-gray-100">
            <th class="bg-gray-50 px-6 py-4 text-left font-semibold text-gray-700 align-top">{{ t('legal.serviceName') }}</th>
            <td class="px-6 py-4 text-gray-700">{{ t('legal.serviceValue') }}</td>
          </tr>
          <tr class="border-b border-gray-100">
            <th class="bg-gray-50 px-6 py-4 text-left font-semibold text-gray-700 align-top">{{ t('legal.price') }}</th>
            <td class="px-6 py-4 text-gray-700">{{ t('legal.priceValue') }}</td>
          </tr>
          <tr class="border-b border-gray-100">
            <th class="bg-gray-50 px-6 py-4 text-left font-semibold text-gray-700 align-top">{{ t('legal.payment') }}</th>
            <td class="px-6 py-4 text-gray-700">{{ t('legal.paymentValue') }}</td>
          </tr>
          <tr class="border-b border-gray-100">
            <th class="bg-gray-50 px-6 py-4 text-left font-semibold text-gray-700 align-top">{{ t('legal.paymentTiming') }}</th>
            <td class="px-6 py-4 text-gray-700">{{ t('legal.paymentTimingValue') }}</td>
          </tr>
          <tr class="border-b border-gray-100">
            <th class="bg-gray-50 px-6 py-4 text-left font-semibold text-gray-700 align-top">{{ t('legal.delivery') }}</th>
            <td class="px-6 py-4 text-gray-700">{{ t('legal.deliveryValue') }}</td>
          </tr>
          <tr class="border-b border-gray-100">
            <th class="bg-gray-50 px-6 py-4 text-left font-semibold text-gray-700 align-top">{{ t('legal.cancellation') }}</th>
            <td class="px-6 py-4 text-gray-700">{{ t('legal.cancellationValue') }}</td>
          </tr>
          <tr>
            <th class="bg-gray-50 px-6 py-4 text-left font-semibold text-gray-700 align-top">{{ t('legal.refund') }}</th>
            <td class="px-6 py-4 text-gray-700">{{ t('legal.refundValue') }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script setup>
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
</script>
