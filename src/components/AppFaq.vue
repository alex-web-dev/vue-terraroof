<template>
  <section class="faq" id="this">
    <div class="container">
      <div class="faq__content">
        <div class="faq__info">
          <h2 class="title2 faq__title">Ответы на ваши вопросы</h2>
        </div>
        <div class="faq__list">
          <AppAccordion
            class="faq__item"
            v-for="item in faqList"
            :key="item"
            header-class="faq__item-header"
            main-class="faq__item-main"
          >
            <template #btn>
              {{ item.title }}
              <span class="faq__item-arrow"></span>
            </template>
            <template #content>
              <div class="text faq__item-text" v-html="item.content"></div>
            </template>
          </AppAccordion>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue';
import AppAccordion from '@/components/AppAccordion.vue';
const faqList = ref([
  {
    title: 'Хочу заменить старую кровлю. Как это будет происходить?',
    content: `
      <p>Мы предоставляем услугу ре-руфинга (замены устаревшей кровли) в любое время года. В среднем процесс занимает от 2-ух недель, в течение которых смена кровельного покрытия происходит частями. Таким образом, хозяевам дома нет необходимости съезжать или каким-то другим образом менять привычный ритм жизни. Более того, благодаря нашей инновационной линейке скрытого крепления в некоторых случаях можно уложить новую черепичную крышу поверх существующей, экономя время и деньги на демонтаже. Точный ответ для вашего случая сможет дать эксперт после осмотра.</p>
    `
  },
  {
    title: 'При какой погоде можно делать монтаж?',
    content: `
      <p>Переживаете, что для монтажа кровли нужны идеальные погодные условия? Рады заверить вас, что это не так. Компания TerraRoof имеет опыт и знания, чтобы заменить старую кровлю или уложить новый кровельный материал в любых погодных условиях, будь то жаркое лето или зима с температурой до -30 градусов. Единственным ограничением может быть штормовой ветер, но это редкое явление, которое не длится долго и не может критично повлиять на ход работ. Наши высококвалифицированные эксперты, обученные по международным стандартам, с многолетним опытом работы и глубоким знанием всех тонкостей климатических условий Казахстана смогут сделать монтаж в любой сезон.</p>
    `
  },
  {
    title: 'Какой материал подходит для экстремальных погодных условий?',
    content: `
      <p>Вся представленная компанией TerraRoof продукция подобрана исходя из знания резко-континентального климата Казахстана. Все бренды, включая европейские марки кровельных покрытий, могут десятилетиями выдерживать воздействие экстремальных погодных условий, включая ветер, жару, влажность и дождь. TerraRoof располагает многочисленными международными отчетами об испытаниях и фактическими результатами полевых работ, подтверждающими, что продукция устойчива к землетрясениям, пожарам и замораживанию / оттаиванию и может выдерживать ураганные ветра со скоростью до 193 км/ч. При минимальном объеме периодического технического обслуживания выбранная кровля прослужит десятилетия.</p>
    `
  },
  {
    title: 'Точно ли все работы будут сделаны в срок? Какие я получу гарантии?',
    content: `
      <p>Репутация компании TerraRoof является для нас первостепенной, поэтому мы всегда выполняем все договорные обязательства точно, качественно и в срок. Кроме того, наши клиенты защищены гарантиями непосредственно производителей материалов, представленных в нашей линейке. Гарантийные сроки зависят от конкретного кровельного материала и составляют от 30 до 100+ (в случае сланцевой кровли) лет.</p>
    `
  }
]);
</script>

<style lang="less" scoped>
@import '@/assets/less/vars.less';
@import '@/assets/less/mixins.less';

.faq {
  padding: 80px 0 95px;
  background-color: @color-primary;

  &__content {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
  }

  &__info {
    flex: 0 1 382px;
  }

  &__title {
    color: #fff;
  }

  &__list {
    flex: 0 0 57.75%;
  }

  &__item {
    padding: 19px 24px;
    background-color: #fff;
    border-radius: 16px;

    &:not(:first-child) {
      margin-top: 14px;
    }

    :deep(&-header) {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: space-between;
      text-align: left;
      font-size: 24px;
      font-weight: 600;
      line-height: 1.375;
    }

    &-header.accordion__btn--active &-arrow {
      &:before {
        transform: rotate(90deg);
      }
    }

    &-arrow {
      margin-left: 8px;
      width: 42px;
      height: 42px;
      flex: 0 0 auto;
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: #e4f5ff;
      border-radius: 50%;

      &:before {
        .pseudo-icon('../img/icons/right.svg', 9px, 20px);
        transition: transform 0.4s;
      }
    }

    :deep(&-main) {
      padding: 10px 60px 18px 0;
    }

    &-text {
      line-height: 1.375;
    }
  }

  @media (max-width: 1240px) {
    padding: 65px 0 75px;

    &__info {
      flex-basis: 370px;
    }

    &__item {
      padding: 17px 22px;

      &:not(:first-child) {
        margin-top: 12px;
      }

      &-header {
        font-size: 22px;
      }

      &-arrow {
        width: 38px;
        height: 38px;

        &:before {
          width: 8px;
          height: 18px;
        }
      }

      &-main {
        padding-right: 40px;
        padding-bottom: 12px;
      }
    }
  }

  @media (max-width: 1140px) {
    &__info {
      flex-basis: 310px;
    }
  }

  @media (max-width: 991px) {
    padding: 55px 0 60px;

    &__item {
      &-header {
        font-size: 18px;
      }

      &-arrow {
        width: 36px;
        height: 36px;
      }
    }
  }

  @media (max-width: 767px) {
    padding: 24px 0 46px;

    &__content {
      margin-left: auto;
      margin-right: auto;
      flex-direction: column;
      max-width: @content-sm-max-width;
    }

    &__info {
      margin-bottom: 18px;
      flex: none;
      max-width: 170px;
    }

    &__title {
      font-size: 24px;
    }

    &__item {
      padding: 12px 14px;

      &:not(:first-child) {
        margin-top: 8px;
      }

      &-header {
        font-size: 16px;
      }

      &-arrow {
        width: 32px;
        height: 32px;

        &:before {
          width: 7px;
          height: 15px;
        }
      }

      &-header.accordion__btn--active &-arrow {
        &:before {
          transform: rotate(90deg) translateX(1px);
        }
      }

      &-main {
        padding: 8px 0 7px;
      }
    }
  }
}
</style>
