import SearchBar from "@/components/SearchBar.vue";
import FilterButtons from "@/components/FilterButtons.vue";
import FilmCard from "@/components/FilmCard";
import Logo from "@/components/Logo";
import Header from "@/components/mainPage/Header";
import MiddleBlock from "@/components/mainPage/MiddleBlock";
import ResultList from "@/components/mainPage/ResultList";
import FilmDetailsHeader from "@/components/filmDetailsPage/FilmInfo";
import MainPage from "@/components/mainPage/Page";

import "../app.scss";

export default {
  title: "Films"
};

export const searchBar = () => ({
  render() {
    return <SearchBar />;
  }
});

export const searchFilter = () => ({
  render() {
    return (
      <FilterButtons
        message="SEARCH BY"
        firstButtonTitle="TITLE"
        secondButtonTitle="GENRE"
      />
    );
  }
});

export const orderFilter = () => ({
  render() {
    return (
      <FilterButtons
        message="ORDER BY"
        firstButtonTitle="RELEASE DATE"
        secondButtonTitle="RATING"
      />
    );
  }
});

export const filmCardPLPKong = () => ({
  render() {
    return (
      <FilmCard
        imageSrc="https://cdn.shopify.com/s/files/1/0359/2201/8348/products/kong-skull-island-movie-poster-2017-1020776812.jpg?v=1598633225"
        title="Kong: Skull Island"
        year="2017"
        genre="Adventure"
      />
    );
  }
});

export const filmCardPLPBohemianRhapsody = () => ({
  render() {
    return (
      <FilmCard
        imageSrc="https://www.washingtonpost.com/graphics/2019/entertainment/oscar-nominees-movie-poster-design/img/1800/bohemian-rhapsody-web.jpg"
        title="Bohemian Rhapsody"
        year="2010"
        genre="Biography"
      />
    );
  }
});

export const logo = () => ({
  render() {
    return <Logo firstPart="netflix" secondPart="roulette" />;
  }
});

export const header = () => ({
  render() {
    return <Header />;
  }
});

export const middle = () => ({
  render() {
    return <MiddleBlock />;
  }
});

export const resultList = () => ({
  render() {
    return <ResultList />;
  }
});

export const filmDetails = () => ({
  render() {
    return (
      <FilmDetailsHeader
        imageSrc="https://cdn.shopify.com/s/files/1/0359/2201/8348/products/kong-skull-island-movie-poster-2017-1020776812.jpg?v=1598633225"
        title="Kong: Skull Island"
        year="2017"
        genre="Adventure"
        rating="2.7"
        description="Pulp  Fiction is a 1994 American neo-noir black comedy crime film written and directed by Quentin Tarantino, who conceived it with Roger Avary. Starring John Travolta, Samuel L. Jackson, Bruce Willis, Tim Roth, Ving Rhames, and Uma Thurman, it tells several stories of criminal Los Angeles"
        duration="155"
      />
    );
  }
});

export const mainPage = () => ({
  render() {
    return <MainPage />;
  }
});
