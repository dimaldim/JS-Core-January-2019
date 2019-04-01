function attachEvents() {
    const url = 'https://baas.kinvey.com/appdata/kid_SyEQ6niOE';

    $('#btnLoadPosts').on('click', loadPosts);
    $('#btnViewPost').on('click', viewPost);

    async function viewPost() {
        let $option = $('option:selected');

        try {
            let post = await $.ajax({
                method: 'GET',
                url: `${url}/posts/${$option.attr('value')}`,
                beforeSend: function (x) {
                    x.setRequestHeader('Authorization', 'Basic auth'/*`Kinvey ${token}`*/);
                }
            });

            $('#post-title').text(post.title);
            $('#post-body').text(post.body);

            let comments = await $.ajax({
                method: 'GET',
                url: `${url}/comments/?query={"post_id":"${$option.attr('value')}"}`,
                beforeSend: function (x) {
                    x.setRequestHeader('Authorization', 'Basic auth'/*`Kinvey ${token}`*/);
                }
            });

            Array.from(comments).forEach(comment => {
                let $li = $('<li>');
                $li.text(comment.text);
                $('#post-comments').append($li);
            });
        } catch (error) {
            console.log(error);
        }
    }

    async function loadPosts() {
        try {
            let posts = await $.ajax({
                method: 'GET',
                url: `${url}/posts`,
                beforeSend: function (x) {
                    x.setRequestHeader('Authorization', 'Basic auth'/*`Kinvey ${token}`*/);
                }
            });

            Array.from(posts).forEach(post => {
                let $option = $(`<option>${post.title}</option>`);
                $option.attr('value', `${post._id}`);
                $('#posts').append($option);
            });
        } catch (error) {
            console.log(error);
        }
    }
}