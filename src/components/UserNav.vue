<template>
  <div class="user-nav header__user-nav">
    <RouterLink class="user-nav__link" :to="{ name: 'cart' }">
      <svg
        class="user-nav__link-icon"
        width="17"
        height="17"
        viewBox="0 0 17 17"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M1 1L1.22076 1.07359C2.32079 1.44026 2.87081 1.6236 3.1854 2.06008C3.5 2.49656 3.5 3.07633 3.5 4.23586V6.41667C3.5 8.77369 3.5 9.9522 4.23223 10.6844C4.96447 11.4167 6.14298 11.4167 8.5 11.4167H15.1667"
          stroke-linecap="round"
        />
        <path
          d="M5.58398 13.5C6.27434 13.5 6.83398 14.0596 6.83398 14.75C6.83398 15.4404 6.27434 16 5.58398 16C4.89363 16 4.33398 15.4404 4.33398 14.75C4.33398 14.0596 4.89363 13.5 5.58398 13.5Z"
        />
        <path
          d="M13.084 13.5001C13.7743 13.5001 14.334 14.0597 14.334 14.7501C14.334 15.4404 13.7743 16.0001 13.084 16.0001C12.3936 16.0001 11.834 15.4404 11.834 14.7501C11.834 14.0597 12.3936 13.5001 13.084 13.5001Z"
        />
        <path
          d="M3.5 3.5H13.042C14.7545 3.5 15.6107 3.5 15.9812 4.06189C16.3517 4.62377 16.0144 5.41078 15.3398 6.9848L14.9827 7.81813C14.6678 8.553 14.5103 8.92044 14.1972 9.12688C13.8841 9.33333 13.4844 9.33333 12.6848 9.33333H3.5"
        />
      </svg>
    </RouterLink>
  </div>
</template>

<script setup></script>

<style lang="less" scoped>
@import '@/assets/less/vars.less';

.user-nav {
  display: flex;
  align-items: center;

  &__link {
    width: 20px;
    height: 20px;
    display: flex;
    align-items: center;
    justify-content: center;

    &-icon {
      stroke: #242728;
    }

    &:hover &-icon {
      stroke: @color-second;
      transition: stroke .3s;
    }

    &:not(:first-child) {
      margin-left: 14px;
    }

    &.router-link-active &-icon {
      stroke: @color-second;
    }
  }
}
</style>
