handlers.getHome = function (ctx) {
    ctx.isAuth = userService.isAuth();
    ctx.username = sessionStorage.getItem('username');

    ctx.loadPartials({
        header: './views/common/header.hbs',
        footer: './views/common/footer.hbs'
    })
        .then(function () {
            this.partial('./views/home.hbs');
        })
        .catch(function (err) {
            notifications.showError(err);
        });
};

