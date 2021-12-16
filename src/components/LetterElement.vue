<template>
  <div>
    <div class="wrapper">
      <ul>
        <li>
          {{ name }}
        </li>
      </ul>
      <button @click="toggleDetails">
        {{ detailsAreVisible ? 'Hide' : 'Show' }}
      </button>
    </div>
    <div
      v-if="detailsAreVisible"
      class="wrap"
    >
      <div class="wrap-2">
        <h3>{{ type }}</h3>
        <a
          :href="link"
          target="_blank"
        >Buy here!</a>
      </div>
      <img
        :src="img"
        alt=""
      >
    </div>
  </div>
</template>

<script lang="ts">
export default {
  props: {
    name: {
      type: String,
      required: true,
    },
    img: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      required: true,
    },
    link: {
      type: String,
      required: true,
    },
  },
  data: (): any => ({
    detailsAreVisible: false,
  }),
  methods: {
    toggleDetails(): void {
      this.detailsAreVisible = !this.detailsAreVisible;
    },
  },
};
</script>

<style scoped lang="scss">
// color variables
@import '../assets/scss/colors.scss';
// font
@import url('https://fonts.googleapis.com/css2?family=Mountains+of+Christmas:wght@700&display=swap');

.wrapper {
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-width: 550px;
    margin-top: 0.8rem;
    margin-left: 3.5rem;
    border-bottom: 1px solid black;

        li {
            padding: 0.8rem;
            font-family: 'Mountains of Christmas';
        }

        button {
            width: 60px;
            height: 30px;
            border: none;
            margin-right: 1rem;
            background-color: $green;
            font-family: 'Mountains of Christmas';
            cursor: pointer;
        }
}

.wrap {
    display: flex;
    justify-content: space-around;
    max-width: 500px;
    margin: 15px auto;
    flex-wrap: wrap;

        img {
            width: 50%;
        }

        .wrap-2 {
            display: flex;
            flex-direction: column;
            justify-content: space-around;

                h3 {
                    font-family: 'Mountains of Christmas';
                }

                a {
                    padding: 1rem;
                    text-decoration: none;
                    color: $red;
                    font-family: 'Mountains of Christmas';
                }
        }
}
</style>
