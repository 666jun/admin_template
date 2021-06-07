<template>
  <div class='loader loader1'>
    <div>
      <div>
        <div>
          <div>
            <div>
              <div></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Loading"
  }
</script>

<style scoped lang="scss">
  $grey: rgba(23, 239, 146, 1);
  $blue: rgba(238, 28, 143, 1);

  @keyframes rotate {
    0% {
      transform: rotate(0deg);
    }
    50% {
      transform: rotate(180deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
  div {
    box-sizing: border-box;
  }

  @mixin loaderDivMixin {
    border-radius: 50%;
    padding: 5px;
    border: 4px solid transparent;
    animation: rotate linear 3.5s infinite;
  }

  .loader {
    position: relative;
    margin: 75px auto;
    width: 150px;
    height: 150px;
    display: block;
    overflow: hidden;
    div {
      height: 100%;
    }
  }

  /* loader 1 */
  .loader1, .loader1 div {
    @include loaderDivMixin;
    border-top-color: $grey;
    border-bottom-color: $blue;
  }
  div:hover {
    animation-play-state: paused;
  }

  .loader, .loader * {
    will-change: transform;
  }
</style>
