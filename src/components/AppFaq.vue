<template>
  <section class="faq" id="this">
    <div class="container">
      <div class="faq__content">
        <div class="faq__info">
          <h2 class="title2 faq__title">Ответы на ваши вопросы</h2>
        </div>
        <div class="faq__list">
          <FaqItem
            class="faq__item"
            v-for="item in faqList"
            :key="item"
            :title="item.title"
            :content="item.content"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { reactive } from 'vue';
import FaqItem from '@/components/FaqItem.vue';

const faqList = reactive([
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
    &:not(:first-child) {
      margin-top: 14px;
    }
  }

  @media (max-width: 1240px) {
    padding: 65px 0 75px;

    &__info {
      flex-basis: 370px;
    }

    &__item {
      &:not(:first-child) {
        margin-top: 12px;
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
      &:not(:first-child) {
        margin-top: 8px;
      }
    }
  }
}
</style>
