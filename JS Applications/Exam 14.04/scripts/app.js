const handlers = {};

$(() => {
    const app = Sammy('#container', function () {
        this.use('Handlebars', 'hbs');
        // home page routes
        this.get('/index.html', handlers.getHome);
        this.get('/', handlers.getHome);
        this.get('#/home', handlers.getHome);

        this.get('#/register', handlers.getRegister);
        this.get('#/login', handlers.getLogin);
        this.get('#/logout', handlers.logoutUser);
        this.get('#/cinema', handlers.getCinema);
        this.get('#/add', handlers.getAddMovie);
        this.get('#/movie/buyticket/:id', handlers.buyTicket);
        this.get('#/movie/details/:id', handlers.getMovieDetailsPage);
        this.get('#/myMovies', handlers.getMyMoviesPage);
        this.get('#/movie/edit/:id', handlers.getEditMoviePage);
        this.get('#/movie/delete/:id', handlers.getDeleteMoviePage);

        this.post('#/register', handlers.registerUser);
        this.post('#/login', handlers.loginUser);
        this.post('#/movie/create', handlers.addMovie);
        this.post('#/movie/edit/:id', handlers.submitEditMovie);
        this.post('#/movie/delete/:id', handlers.getDeleteMovie);
    });

    app.run('#/home');
});
