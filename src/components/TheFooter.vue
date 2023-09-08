<template>
  <footer class="footer">
    <div class="container">
      <div class="footer__content">
        <div class="footer__top">
          <a class="footer__logo" href="#">
            <img class="footer__logo-img" src="@/assets/img/logo-white.png" alt="" />
          </a>
          <ul class="footer__menu">
            <li class="footer__menu-item" v-for="item in menuList" :key="item">
              <RouterLink class="footer__menu-link" :to="{ name: item.routerName }">{{
                item.text
              }}</RouterLink>
            </li>
          </ul>
          <SocialLinks :list="socialLinks" />
        </div>
        <div class="footer__bottom">
          <div class="footer__bottom-main">
            <div class="footer__copyright">
              <div class="footer__copyright-title">Группа компаний «TWR Group»</div>
              <div class="footer__copyright-text">© 2023. Все права защищены</div>
            </div>
            <a
              class="footer__company"
              :href="company.link"
              v-for="company in companies"
              :key="company"
            >
              <img class="footer__company-img" :src="getImage(company.img)" alt="" />
              <img
                class="footer__company-img footer__company-img--hover"
                :src="getImage(company.imgHover)"
                alt=""
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { reactive } from 'vue';
import SocialLinks from '@/components/SocialLinks.vue';
import { useImage } from '@/hooks/img';

const { getImage } = useImage();
const menuList = reactive([
  {
    routerName: 'about',
    text: 'О компании'
  },
  {
    routerName: 'about',
    text: 'Публичная оферта'
  },
  {
    routerName: 'about',
    text: 'Политика конфиденциальности'
  }
]);
const socialLinks = reactive([
  {
    link: 'https://www.instagram.com/',
    icon: 'icons/social/instagram-white.svg'
  },
  {
    link: 'https://www.facebook.com/',
    icon: 'icons/social/facebook-white.svg'
  },
  {
    link: 'https://www.youtube.com/',
    icon: 'icons/social/youtube-white.svg'
  }
]);

const companies = reactive([
  {
    link: '#',
    img: 'footer-companies/terrawood.png',
    imgHover: 'footer-companies/terrawood-hover.png'
  },
  {
    link: '#',
    img: 'footer-companies/noblex.png',
    imgHover: 'footer-companies/noblex-hover.png'
  },
  {
    link: '#',
    img: 'footer-companies/metrotile.png',
    imgHover: 'footer-companies/metrotile-hover.png'
  }
]);
</script>

<style lang="less" scoped>
@import '@/assets/less/vars.less';

.footer {
  margin-top: auto;
  padding: 46px 0 8px;
  background-color: @color-black;

  &__top {
    display: flex;
    align-items: center;
  }

  &__logo {
    &-img {
      max-width: 192px;
    }
  }

  &__menu {
    padding-left: 103px;
    padding-right: 30px;
    margin: -10px -26px 0;
    display: flex;
    flex-wrap: wrap;

    &-item {
      min-width: 112px;
      margin: 10px 26px 0;
    }

    &-link {
      font-size: 14px;
      line-height: 1.375;
      color: #929394;
    }
  }

  &__social-links {
    margin-left: auto;
    flex: 0 0 auto;
  }

  &__bottom {
    margin-top: 34px;
    padding-top: 12px;
    border-top: 1px solid rgba(#fff, 0.5);

    &-main {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
  }

  &__copyright {
    flex: 0 0 193px;

    &-title {
      font-size: 18px;
      font-weight: 700;
      line-height: 1.39;
      color: #fff;
    }

    &-text {
      margin-top: 8px;
      font-size: 14px;
      line-height: 1.36;
      color: rgba(#fff, 0.5);
    }
  }

  &__company {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 270px;
    height: 130px;

    &-img {
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      display: block;
      object-fit: contain;
      transition: opacity 0.4s, visibility 0.4s;

      &--hover {
        visibility: hidden;
        opacity: 0;
      }
    }

    &:hover &-img {
      opacity: 0;
      visibility: hidden;

      &--hover {
        opacity: 1;
        visibility: visible;
      }
    }
  }

  @media (max-width: 1240px) {
    padding-top: 36px;

    &__logo {
      &-img {
        max-width: 172px;
      }
    }

    &__menu {
      padding-left: 70px;

      &-item {
        margin-left: 15px;
        margin-right: 15px;
        min-width: auto;
      }
    }

    &__bottom {
      margin-top: 24px;
      padding-right: 0;
    }

    &__copyright {
      flex-basis: 184px;

      &-title {
        font-size: 16px;
      }

      &-text {
        font-size: 13px;
      }
    }

    &__company {
      height: 105px;

      &-img {
        transform: scale(0.85) translate(-60%, -60%);
      }
    }
  }

  @media (max-width: 991px) {
    padding-top: 32px;

    &__logo {
      &-img {
        max-width: 112px;
      }
    }

    &__menu {
      padding-left: 45px;

      &-item {
        margin-left: 10px;
        margin-right: 10px;
      }

      &-link {
        font-size: 13px;
      }
    }

    &__bottom {
      margin-top: 18px;
    }

    &__copyright {
      flex-basis: 170px;

      &-title {
        font-size: 15px;
      }

      &-text {
        font-size: 12px;
      }
    }

    &__company {
      height: 90px;
    }
  }

  @media (max-width: 767px) {
    padding: 27px 0;

    &__content {
      margin-left: auto;
      margin-right: auto;
      max-width: @content-sm-max-width;
    }

    &__top {
      flex-wrap: wrap;
    }

    &__logo {
      &-img {
        max-width: 72px;
      }
    }

    &__menu {
      margin: 13px 0 0;
      padding-left: 0;
      order: 2;
      width: 100%;
      flex-direction: column;

      &-item {
        margin: 0;

        &:not(:first-child) {
          margin-top: 2px;
        }
      }
    }

    &__bottom {
      margin-top: 15px;
      padding-top: 8px;

      &-main {
        flex-wrap: wrap;
      }
    }

    &__copyright {
      margin-top: 6px;
      width: 50%;
      flex: none;

      &-title {
        font-size: 14px;
        font-weight: 400;
        max-width: 114px;
      }

      &-text {
        margin-top: 12px;
      }
    }

    &__copyright &__copyright-text {
      display: none;
    }

    &__company {
      margin-top: 6px;
      margin-right: 0;
      width: 50%;
      height: 45px;

      &:nth-last-child(2) {
        order: 2;
      }

      &-img {
        transform: scale(1) translate(0, -50%);
        left: 0;
        max-width: 92px;
        max-height: 34px;
      }
    }
  }
}
</style>
