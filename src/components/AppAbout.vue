<template>
  <div class="about">
    <div class="container">
      <div class="about__content">
        <div class="about__main about__main--video">
          <h1 class="title4 about__title">О НАС</h1>
          <TextContent class="about__text-content">
            <p>
              Компания TerraRoof успешно работает на рынке Казахстана с 2012 года. За это время мы
              заработали репутацию лучшего партнера в сфере кровельных материалов. Наши эксперты
              знают все об особенностях климата, ландшафта и архитектурных решений, характерных для
              страны. 
            </p>
            <p>
              За годы работы мы реализовали более 4000 проектов. Среди них есть уникальные по
              сложности работы, которые не имеют аналогов. TerraRoof проводит бесплатные экскурсии
              по готовым объектам, чтобы помочь вам в принятии решения.
            </p>
            <p>
              Головной офис компании TerraRoof находится в центре столицы. Здесь вы можете увидеть
              варианты кровли вживую, потрогать и оценить качество продукции. Вы получите бесплатную
              консультацию и первичный просчет проекта. Кроме того, наши клиенты получают много
              бесплатных бонусов к покупке, включая 3D-визуализацию, оформление документации, аренду
              оборудования и обучение монтажной бригады.
            </p>
            <p>
              Мы гарантируем безупречный сервис и выполняем все работы без нареканий и всегда в
              срок.
            </p>
          </TextContent>
          <VideoPlayer
            class="about__video"
            url="main.mp4"
            btn-type="2"
            preview="about/video-preview.jpg"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import VideoPlayer from '@/components/VideoPlayer.vue';
import TextContent from '@/components/TextContent.vue';
</script>

<style lang="less" scoped>
@import '@/assets/less/vars.less';
@import '@/assets/less/mixins.less';

.about {
  &__main {
    display: grid;
    grid-template-areas:
      'title title'
      'text img';
    align-items: flex-start;
    grid-template-columns: 51% 49%;

    &--video {
      grid-template-columns: 46.8% 53.2%;
    }
  }

  &__title {
    grid-area: title;
    margin-bottom: 32px;
    padding-bottom: 24px;
    text-transform: uppercase;
    border-bottom: 0.5px solid rgba(#000, 0.2);
  }

  &__text-content {
    grid-area: text;
    line-height: 1.5;

    p,
    ul,
    ol {
      &:not(:first-child) {
        margin-top: 18px;
      }
    }
  }

  &__img {
    position: relative;
    grid-area: img;
    align-self: flex-start;
    margin-left: 35px;
    padding-top: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #ffffff;
    box-shadow: 0px 0px 50px rgba(0, 0, 0, 0.05);
    border-radius: 16px;
    overflow: hidden;

    img {
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      width: 270px;
      max-height: calc(100% - 40px);
      max-width: calc(100% - 40px);
      object-fit: contain;
    }
  }

  &__video {
    margin-left: 30px;
    padding-top: 68.3%;
    border-radius: 16px;
  }

  &__features {
    margin-top: 102px;
  }

  &__elems {
    margin-top: 72px;
  }

  &__more {
    margin-top: 102px;
  }

  @media (max-width: 1240px) {
    &__title {
      margin-bottom: 24px;
      padding-bottom: 20px;
    }

    &__img {
      margin-left: 25px;

      img {
        width: 210px;
      }
    }

    &__features,
    &__more {
      margin-top: 70px;
    }

    &__elems {
      margin-top: 45px;
    }
  }

  @media (max-width: 991px) {
    &__title {
      margin-bottom: 20px;
      padding-bottom: 16px;
    }

    &__img {
      margin-left: 15px;

      img {
        width: 160px;
      }
    }

    &__features,
    &__more {
      margin-top: 42px;
    }

    &__elems {
      margin-top: 35px;
    }
  }

  @media (max-width: 767px) {
    &__content {
      margin-left: auto;
      margin-right: auto;
      max-width: @content-sm-max-width;
    }

    &__title {
      margin-bottom: 18px;
      padding-top: 14px;
      font-size: 24px;
    }

    &__main {
      grid-template-areas:
        'title'
        'img'
        'text';
      grid-template-columns: 1fr;
    }

    &__img,
    &__video {
      margin-left: 0;
      margin-bottom: 16px;
    }

    &__features,
    &__more {
      margin-top: 24px;
    }

    &__elems {
      margin-top: 24px;
    }
  }
}
</style>
