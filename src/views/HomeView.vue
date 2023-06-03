<template>
  <AppMain class="main--home">
    <AppBanner />
    <MainProduct class="main__main-product" />
    <CallbackBg class="main__section" id="callback" bg="callback-bg.jpg" :backdrop="false">
      <template #title
        >Заменим старую кровлю <br />
        на новую за 2 недели!</template
      >
      <template #formTitle>Заказать звонок специалиста</template>
    </CallbackBg>
    <AppFeatures class="main__section" />
    <AppArticle class="main__section" />
    <AppOffer class="main__section" />
    <ProductsSection class="main__section" title="Oтличные предложения" />
    <VideoSection class="main__section" />
    <CategoriesSection class="main__section" />
    <CallbackBg class="main__section" bg="callback-bg2.jpg" :backdrop="false">
      <template #title
        >Самый большой склад <br />
        в Центральной Азии более 30 000 кв.м</template
      >
      <template #formTitle>Отгрузим день в день, свяжитесь с нами</template>
    </CallbackBg>
    <ImagesSection class="main__section" />
    <InfoSection class="main__section" />
    <AppPartners class="main__section" />
    <AppFaq class="main__faq" />
    <PriceList class="main__section" />
    <AppSocial class="main__section" />
    <AppGallery
      class="main__gallery"
      :list="instagramGalleryList"
      btn-text="Подписаться"
      btn-link="https://www.instagram.com/"
      :long-title="true"
    >
      <template #title
        >Подпишись на наш инстаграм и следи за новостями, акциями и спец.предложениями!</template
      >
    </AppGallery>
    <AppGallery
      class="main__gallery"
      type="video"
      :list="youtubeGalleryList"
      btn-text="Подписаться"
      btn-link="https://www.youtube.com/"
    >
      <template #title>Подпишись на наш Youtube-канал и следи за новыми видео</template>
    </AppGallery>
  </AppMain>
</template>

<script setup>
import AppMain from '@/components/AppMain.vue';
import AppBanner from '@/components/AppBanner.vue';
import MainProduct from '@/components/MainProduct.vue';
import CallbackBg from '@/components/CallbackBg.vue';
import AppFeatures from '@/components/AppFeatures.vue';
import AppArticle from '@/components/AppArticle.vue';
import AppOffer from '@/components/AppOffer.vue';
import VideoSection from '@/components/VideoSection.vue';
import CategoriesSection from '@/components/CategoriesSection.vue';
import ImagesSection from '@/components/ImagesSection.vue';
import InfoSection from '@/components/InfoSection.vue';
import AppPartners from '@/components/AppPartners.vue';
import AppFaq from '@/components/AppFaq.vue';
import PriceList from '@/components/PriceList.vue';
import AppSocial from '@/components/AppSocial.vue';
import AppGallery from '@/components/AppGallery.vue';
import ProductsSection from '@/components/ProductsSection.vue';
import { reactive } from 'vue';

const instagramGalleryList = reactive([
  {
    link: 'https://www.instagram.com/p/CnTT-QcI4WS/',
    img: 'instagram-images/1.jpg'
  },
  {
    link: 'https://www.instagram.com/p/CngNTTuILS6/',
    img: 'instagram-images/2.jpg'
  },
  {
    link: 'https://www.instagram.com/p/CnEriSwrxyo/',
    img: 'instagram-images/3.jpg'
  }
]);

const youtubeGalleryList = reactive([
  {
    type: 'video',
    link: 'https://www.youtube.com/embed/Gx543KbuGFY',
    img: 'youtube-previews/1.jpg'
  },
  {
    type: 'video',
    link: 'https://www.youtube.com/embed/Gx543KbuGFY',
    img: 'youtube-previews/2.jpg'
  },
  {
    type: 'video',
    link: 'https://www.youtube.com/embed/Gx543KbuGFY',
    img: 'youtube-previews/3.jpg'
  }
]);
</script>

<style lang="less" scoped></style>
