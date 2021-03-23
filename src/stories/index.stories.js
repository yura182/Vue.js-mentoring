import { action } from "@storybook/addon-actions";
import { linkTo } from "@storybook/addon-links";

import SearchBar from "@/components/SearchBar.vue";
import Filter from "@/components/Filter.vue";
import FIlmCardPLP from "@/components/FIlmCardPLP";

import "../app.scss";

export default {
  title: "Films",
};

export const searchBar = () => ({
  render() {
    return <SearchBar />;
  },
});

export const searchFilter = () => ({
  render() {
    return (
      <Filter
        message="SEARCH BY"
        firstButtonTitle="TITLE"
        secondButtonTitle="GENRE"
      />
    );
  },
});

export const orderFilter = () => ({
  render() {
    return (
      <Filter
        message="ORDER BY"
        firstButtonTitle="RELEASE DATE"
        secondButtonTitle="RATING"
      />
    );
  },
});

export const filmCardPLPKong = () => ({
  render() {
    return (
      <FIlmCardPLP
        imageSrc="https://cdn.shopify.com/s/files/1/0359/2201/8348/products/kong-skull-island-movie-poster-2017-1020776812.jpg?v=1598633225"
        title="Kong: Skull Island"
        year="2017"
        genre="Adventure"
      />
    );
  },
});

export const filmCardPLPBohemianRhapsody = () => ({
  render() {
    return (
      <FIlmCardPLP
        imageSrc="https://www.washingtonpost.com/graphics/2019/entertainment/oscar-nominees-movie-poster-design/img/1800/bohemian-rhapsody-web.jpg"
        title="Bohemian Rhapsody"
        year="2010"
        genre="Biography"
      />
    );
  },
});

