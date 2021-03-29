<template>
  <div class="films-list">
    <div class="film-card" v-for="film in films" v-bind:key="film.title">
      <FilmCardPLP
        :imageSrc="film.image"
        :title="film.title"
        :year="film.year"
        :genre="film.genre"
      />
    </div>
  </div>
</template>

<script>
import FilmCardPLP from "@/components/FilmCardPLP";
export default {
  components: {
    FilmCardPLP
  },
  data() {
    return {
      films: [
        {
          image:
            "https://cdn.shopify.com/s/files/1/0359/2201/8348/products/kong-skull-island-movie-poster-2017-1020776812.jpg?v=1598633225",
          title: "Kong: Skull Island",
          year: "2010",
          genre: "Adventure"
        },
        {
          image:
            "https://www.washingtonpost.com/graphics/2019/entertainment/oscar-nominees-movie-poster-design/img/1800/bohemian-rhapsody-web.jpg",
          title: "Bohemian Rhapsody",
          year: "2010",
          genre: "Biography"
        },
        {
          image:
            "https://www.vintagemovieposters.co.uk/wp-content/uploads/2019/06/IMG_9698.jpeg",
          title: "Once Upon a Time in Hollywood",
          year: "2019",
          genre: "Comedy"
        },
        {
          image:
            "https://www.vintagemovieposters.co.uk/wp-content/uploads/2020/12/IMG_1021-scaled.jpeg",
          title: "Back To The Future",
          year: "1985",
          genre: "Sci-Fi"
        },
        {
          image: "https://i.ebayimg.com/images/g/lMkAAOSw5OpZuBh9/s-l1600.jpg",
          title: "The Matrix",
          year: "1999",
          genre: "Action, Sci-Fi"
        },
        {
          image:
            "https://images-na.ssl-images-amazon.com/images/I/51O-Xu4MkrL.jpg",
          title: "The Shining",
          year: "1980",
          genre: "Drama, Horror "
        }
      ]
    };
  }
};
</script>

<style scoped>
.films-list {
  width: 100%;
  background-color: #232323;
  padding: 30px;
}

.film-card {
  padding: 8px;
  display: inline-block;
}
</style>
