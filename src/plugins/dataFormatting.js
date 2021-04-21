import { FILTERS } from "@/filters/filters";
import filters from "@/filters";

export default {
  install: function(Vue) {
    Vue.filter(FILTERS.PARSE_YEAR, filters[FILTERS.PARSE_YEAR]);
    Vue.filter(FILTERS.GET_ONE_GENRE, filters[FILTERS.GET_ONE_GENRE]);
    Vue.filter(FILTERS.PARSE_GENRES, filters[FILTERS.PARSE_GENRES]);
    Vue.filter(FILTERS.PARSE_RATING, filters[FILTERS.PARSE_RATING]);
  }
};
