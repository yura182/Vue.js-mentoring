import { ROUTES } from "./routes";

const filmDetailsRoute = id => ({ name: ROUTES.FILM_DETAILS, params: { id } });

export { filmDetailsRoute };
