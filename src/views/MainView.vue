<template>
  <main>
    <div class="wrapper">
      <h1>A very special Christmas list!</h1>
      <p>Don't know what to get for your pretty, little girlfriend? Worry no more! Fortunately for you, she has written a letter to Santa Claus. Use this knowledge wisely! </p>
    </div>
    <div class="wrap">
      <p>Dear Santa...</p>
      <p class="desc">
        This year I was a very good girl and I would like to ask you for a couple things!
      </p>
      <LetterElement
        v-for="gift in gifts"
        :key="gift.id"
        :name="gift.name"
        :img="gift.img"
        :type="gift.type"
        :link="gift.link"
      />
      <p style="text-align: right">
        Love, Agg
      </p>
    </div>
  </main>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import LetterElement from '../components/LetterElement.vue';
// Types
import { IGift } from '../data/types';

// Data
const gifts = ref<IGift[]>([
  {
    id: 1,
    name: 'The Dance by Fleetwood Mac',
    img: 'https://m.media-amazon.com/images/I/81BxzDSlJjL._AC_SL1425_.jpg',
    type: 'Vinyl record',
    link: 'https://www.empik.com/the-dance-fleetwood-mac,p1215917877,muzyka-p',
  },
  {
    id: 2,
    name: 'Stevie Nicks Rarities 1981-1983',
    img: 'https://static-sl.insales.ru/images/products/1/1873/114100049/stevie-nicks-rarities-1981-1983-12-vinyl.jpg',
    type: 'Vinyl record',
    link: 'https://www.discogs.com/sell/item/939526720',
  },
  {
    id: 3,
    name: '24 Karat Gold: Songs from the Vault by Stevie Nicks',
    img: 'https://m.media-amazon.com/images/I/71WMyVx3SqL.jpg',
    type: 'Vinyl record',
    link: 'https://rockserwis.pl/products/153139',
  },
  {
    id: 4,
    name: "It's Not Only Rock 'n' Roll - Iconic Musicians Reveal the Source of their Creativity by Jenny Boyd",
    img: 'https://m.media-amazon.com/images/I/51FIPIR7o4L._AC_SY580_.jpg',
    type: 'Book',
    link: 'https://www.amazon.de/-/pl/dp/1782194622/ref=sr_1_2?__mk_pl_PL=ÅMÅŽÕÑ&keywords=jennifer+juniper&qid=1639390548&s=books&sr=1-2',
  },
  {
    id: 5,
    name: 'The Hippie by Paulo Coelho',
    img: 'https://static.polityka.pl/_resource/res/path/31/75/3175835c-8188-43f6-8a17-7e95e43436a3_900x',
    type: 'Book',
    link: 'https://www.empik.com/hipis-coelho-paulo,p1204886544,ksiazka-p?qa=coelho%20paulo&ac=true',
  },
]);

</script>

<style scoped lang="scss">
// color variables
@import '../assets/scss/colors.scss';
// font
@import url('https://fonts.googleapis.com/css2?family=Mountains+of+Christmas:wght@700&display=swap');

main {
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 100vw;
    background-color: $green;

        .wrapper {
            display: flex;
            flex-direction: column;
            flex-wrap: wrap;
            align-items: center;
            margin: 20px auto 0 auto;

                h1 {
                font-family: 'Mountains of Christmas';
                color: $red;
                font-size: 2.2rem;
                }

                p {
                font-family: 'Mountains of Christmas';
                color: $purple;
                padding: 1rem;
                }
        }

        .wrap {
            width: 700px;
            height: 100%;
            min-height: 900px;
            margin: 20px auto 0 auto;
            border: 20px solid transparent;
            border-image: repeating-linear-gradient(30deg, $purple, $red, white 60px) 60;
            background-color: $letter-white;

                p {
                    margin: 70px 50px 0 50px;
                    font-family: 'Mountains of Christmas';
                    font-size: 1.5rem;
                }

                .desc {
                    font-size: 1rem;
                    margin: 20px 50px 30px 50px;
                }
        }

}
</style>
