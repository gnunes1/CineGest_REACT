export const ROUTES = {
    Welcome: "/",
    Login: "/login",
    Signup: "/signup",
    Movie: (id) => {
        if (id) {
            return (`/movie/${id}`);
        }
        return (`/movie/:movieId`);
    },
    Tickets: "/tickets",
    Settings: "/settings",
    CinemasDashboard: "/dashboard/cinemas",
    MoviesDashboard: "/dashboard/movies",
    UsersDashboard: "/dashboard/users",
    TicketsDashboard: "/dashboard/tickets",
    SessionsDashboard: "/dashboard/sessions"
}