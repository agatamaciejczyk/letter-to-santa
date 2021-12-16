<template>
  <div>
    <h1>Welcome to Agg's interactive letter to Santa!</h1>
    <button>
      <RouterLink
        to="/main"
      >
        Enter
      </RouterLink>
    </button>
  </div>
</template>

<style scoped lang="scss">
// font
@import url('https://fonts.googleapis.com/css2?family=Mountains+of+Christmas:wght@700&display=swap');
// color variables
@import '../assets/scss/colors.scss';

div {
    position: relative;
    background-color: $red;
    background-image: url('../assets/snow.gif');
    height: 100vh;
    width: 100vw;

    h1 {
        position: absolute;
        top: 40%;
        left: 50%;
        transform: translate(-50%, -50%);
        font-family: 'Mountains of Christmas', cursive;
        word-spacing: 0.2rem;
        font-size: 2.5rem;
        color: $green;
        transition: 1s;
        cursor: pointer;

        &:hover {
            border-radius: 10px;
            box-shadow: 0 0 20px white;
        }
    }

    button {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 150px;
        padding: 0.6rem;
        border: none;
        background-color: #A9DBB8;
        font-family: 'Mountains of Christmas';
        font-size: 1.5rem;
        color: white;
        transition: 1s;
        cursor: pointer;

        a {
            text-decoration: none;
            color: white;
        }

        &:hover {
            transform: translate(-50%, -50%) rotate(360deg) scale(1.5);
        }
    }
}
</style>
