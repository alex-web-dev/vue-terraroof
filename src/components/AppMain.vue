<template>
  <main class="main">
    <slot></slot>
  </main>
</template>

<script setup></script>

<style lang="less">
.main {
  padding-top: calc(88px + 34px);
  padding-bottom: 102px;
  flex: 1 1 auto;
  overflow: hidden;

  &__main-product {
    margin-top: 52px;
  }

  &__section {
    margin-top: 112px;

    &--mt-82 {
      margin-top: 82px;
    }

    &--mt-72 {
      margin-top: 72px;
    }
  }

  &__faq {
    margin-top: 60px;
  }

  &__social {
    margin-top: 102px;
  }

  &__gallery {
    margin-top: 146px;
  }

  &__callback {
    margin-top: 102px;
  }

  &__blog-cards {
    margin-top: 86px;
  }

  &__article-callback {
    margin-top: 72px;
  }

  &__create {
    margin-top: 72px;
  }

  &__steps {
    margin-top: 72px;
  }

  &--home {
    padding-top: calc(88px + 24px);
  }

  &--about {
    padding-bottom: 60px;
  }

  @media (max-width: 1240px) {
    padding-bottom: 70px;

    &__main-product {
      margin-top: 42px;
    }

    &__section {
      margin-top: 80px;
    }

    &__faq {
      margin-top: 50px;
    }

    &__social {
      margin-top: 70px;
    }

    &__gallery {
      margin-top: 100px;
    }

    &__callback {
      margin-top: 70px;
    }

    &__blog-cards {
      margin-top: 55px;
    }

    &__article-callback {
      margin-top: 45px;
    }

    &--home {
      padding-bottom: 90px;
    }
  }

  @media (max-width: 991px) {
    padding-top: calc(77px + 24px);
    padding-bottom: 42px;

    &__main-product {
      margin-top: 32px;
    }

    &__section {
      margin-top: 52px;
    }

    &__faq {
      margin-top: 40px;
    }

    &__social {
      margin-top: 42px;
    }

    &__gallery {
      margin-top: 60px;
    }

    &__callback {
      margin-top: 42px;
    }

    &__blog-cards {
      margin-top: 45px;
    }

    &__article-callback {
      margin-top: 35px;
    }

    &__create {
      margin-top: 52px;
    }

    &__steps {
      margin-top: 52px;
    }

    &--home {
      padding-top: calc(77px + 24px);
      padding-bottom: 70px;
    }
  }

  @media (max-width: 767px) {
    padding-bottom: 24px;

    &__main-product {
      margin-top: 24px;
    }

    &__section {
      margin-top: 24px;
    }

    &__faq {
      margin-top: 24px;
    }

    &__social {
      margin-top: 18px;
    }

    &__gallery {
      margin-top: 24px;
    }

    &__callback {
      margin-top: 24px;
    }

    &__blog-cards {
      margin-top: 24px;
    }

    &__article-callback {
      margin-top: 24px;
    }

    &__create {
      margin-top: 32px;
    }

    &__steps {
      margin-top: 32px;
    }

    &--home {
      padding-bottom: 32px;
    }
  }

  @media (max-width: 640px) {
    padding-top: calc(54px + 16px);

    &--home {
      padding-top: calc(54px + 24px);
    }
  }
}
</style>
