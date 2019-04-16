handlers.getCinema = function (ctx) {
    ctx.isAuth = userService.isAuth();
    ctx.username = sessionStorage.getItem('username');

    movieService.getAllMovies()
        .then(function (res) {
            let userId = sessionStorage.getItem('id');

            let movies = res;

            ctx.movies = movies;

            ctx.loadPartials({
                header: './views/common/header.hbs',
                footer: './views/common/footer.hbs'
            })
                .then(function () {

                    this.partial('./views/movie/cinema.hbs')

                })
                .catch(function (error) {
                    notifications.handleError(error);
                })
        })
};
handlers.addMovie = function (ctx) {
    ctx.isAuth = userService.isAuth();
    ctx.username = sessionStorage.getItem('username');

    let data = {...ctx.params};
    var re = new RegExp("^(http|https)://", "i");
    if (data.title.length < 6) {
        notifications.showError('Title should be at least 6 characters.');
    } else if (data.description.length < 10) {
        notifications.showError('Description should be at least 10 characters.');
    } else if (!re.test(data.imageUrl)) {
        notifications.showError('Image URL should start with http or https.');
    } else if (isNaN(data.tickets)) {
        notifications.showError('Tickets should be number(integer).');
    } else {

        movieService.createMovie(data)
            .then(function () {

                notifications.showInfo('Movie created successfully.');

                ctx.redirect('#/home');

            })
            .catch(function (error) {
                notifications.handleError(error);
            })
    }
};
handlers.getAddMovie = function (ctx) {
    ctx.isAuth = userService.isAuth();
    ctx.username = sessionStorage.getItem('username');

    ctx.loadPartials({
        header: './views/common/header.hbs',
        footer: './views/common/footer.hbs'
    })
        .then(function () {

            this.partial('./views/movie/add.hbs')
        })
        .catch(function (error) {
            notifications.handleError(error);
        })
};

handlers.buyTicket = function (ctx) {
    ctx.isAuth = userService.isAuth();
    ctx.username = sessionStorage.getItem('username');

    let id = ctx.params.id;

    movieService.getMovieDetails(id)
        .then(function (res) {
            let movie = res;

            let newTickets = Number(movie.tickets) - 1;
            if (newTickets < 0) {
                notifications.showError('There are no available tickets for ' + movie.title);
                ctx.redirect('#/cinema');
            } else {
                movie.tickets = newTickets;

                movieService.buyTicket(id, movie)
                    .then(function () {
                        notifications.showInfo('Successfully bought ticket for ' + movie.title);

                        ctx.redirect('#/cinema');
                    })
                    .catch(function (error) {
                        notifications.handleError(error);
                    })
            }
        });
};
handlers.getMovieDetailsPage = function (ctx) {
    ctx.isAuth = userService.isAuth();
    ctx.username = sessionStorage.getItem('username');

    let id = ctx.params.id;

    movieService.getMovieDetails(id)
        .then(function (res) {
            let userId = sessionStorage.getItem('id');

            ctx.title = res.title;
            ctx.description = res.description;
            ctx.imageUrl = res.imageUrl;
            ctx.tickets = res.tickets;
            ctx.genres = res.genres.split(' ');
            ctx.isCreator = res._acl.creator === userId;
            ctx.id = id;
            console.log(ctx);
            ctx.loadPartials({
                header: './views/common/header.hbs',
                footer: './views/common/footer.hbs'
            })
                .then(function () {

                    this.partial('./views/movie/details.hbs');
                })
                .catch(function (error) {
                    notifications.handleError(error);
                })
        })
        .catch(function (error) {
            notifications.handleError(error);
        })
};
handlers.getMyMoviesPage = function (ctx) {
    ctx.isAuth = userService.isAuth();
    ctx.username = sessionStorage.getItem('username');

    let userId = sessionStorage.getItem('id');


    movieService.getMyMovies(userId)
        .then(function (res) {

            ctx.myMovies = res;

            ctx.loadPartials({
                header: './views/common/header.hbs',
                footer: './views/common/footer.hbs'
            })
                .then(function () {

                    this.partial('./views/movie/myMovies.hbs')

                })
                .catch(function (error) {
                    notifications.handleError(error);
                })
        })
};
handlers.getEditMoviePage = function (ctx) {
    ctx.isAuth = userService.isAuth();
    ctx.username = sessionStorage.getItem('username');

    let id = ctx.params.id;

    movieService.getMovieDetails(id)
        .then(function (res) {
            let userId = sessionStorage.getItem('id');

            ctx.title = res.title;
            ctx.description = res.description;
            ctx.imageUrl = res.imageUrl;
            ctx.tickets = res.tickets;
            ctx.genres = res.genres.split(' ');
            ctx.isCreator = res._acl.creator === userId;
            ctx.id = id;
            console.log(ctx);
            ctx.loadPartials({
                header: './views/common/header.hbs',
                footer: './views/common/footer.hbs'
            })
                .then(function () {

                    this.partial('./views/movie/editMovie.hbs');
                })
                .catch(function (error) {
                    notifications.handleError(error);
                })
        })
        .catch(function (error) {
            notifications.handleError(error);
        })
};
handlers.submitEditMovie = function (ctx) {
    ctx.isAuth = userService.isAuth();
    ctx.username = sessionStorage.getItem('username');

    let id = ctx.params.id;

    movieService.getMovieDetails(id)
        .then(function (res) {
            let data = {...res};

            data.title = ctx.params.title;
            data.description = ctx.params.description;
            data.imageUrl = ctx.params.imageUrl;
            data.genres = ctx.params.genres;
            data.tickets = ctx.params.tickets;

            movieService.editMovie(id, data)
                .then(function () {
                    notifications.showInfo('Updated successfully!');

                    ctx.redirect('#/cinema');
                })
                .catch(function (error) {
                    notifications.handleError(error);
                })
        });
};
handlers.getDeleteMoviePage = function (ctx) {
    ctx.isAuth = userService.isAuth();
    ctx.username = sessionStorage.getItem('username');

    let id = ctx.params.id;

    movieService.getMovieDetails(id)
        .then(function (res) {
            let userId = sessionStorage.getItem('id');

            ctx.title = res.title;
            ctx.description = res.description;
            ctx.imageUrl = res.imageUrl;
            ctx.tickets = res.tickets;
            ctx.genres = res.genres.split(' ');
            ctx.isCreator = res._acl.creator === userId;
            ctx.id = id;
            console.log(ctx);
            ctx.loadPartials({
                header: './views/common/header.hbs',
                footer: './views/common/footer.hbs'
            })
                .then(function () {

                    this.partial('./views/movie/deleteMovie.hbs');
                })
                .catch(function (error) {
                    notifications.handleError(error);
                })
        })
        .catch(function (error) {
            notifications.handleError(error);
        })
};
handlers.getDeleteMovie = function (ctx) {
    ctx.isAuth = userService.isAuth();
    ctx.username = sessionStorage.getItem('username');

    let id = ctx.params.id;

    movieService.deleteMovie(id)
        .then(function () {

            notifications.showInfo('Movie was removed successfully!');

            ctx.redirect('#/cinema');
        })
        .catch(function (error) {
            notifications.handleError(error);
        })

};
