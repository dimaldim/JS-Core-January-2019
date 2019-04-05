function attachEvents() {
    var url = 'https://baas.kinvey.com/appdata/kid_HkCk8Rg_4/biggestCatches';
    $('button.load').on('click', load);
    $('button.add').on('click', add);

    async function load() {
        let catches = await $.ajax({
            method: 'GET',
            url: url,
            beforeSend: function (x) {
                x.setRequestHeader('Authorization', 'Basic ' + btoa('guest:guest'))
            }
        });

        displayCatches(catches);
    }

    async function add() {
        await $.ajax({
            method: 'POST',
            url: url,
            beforeSend: function (x) {
                x.setRequestHeader('Authorization', 'Basic ' + btoa('guest:guest'))
            },
            data: {
                angler: $('#addForm input.angler').val(),
                weight: Number($('#addForm input.weight').val()),
                species: $('#addForm input.species').val(),
                location: $('#addForm input.location').val(),
                bait: $('#addForm input.bait').val(),
                captureTime: Number($('#addForm input.captureTime').val())
            }
        });

        $('#catches').empty();
        await load();
    }

    function displayCatches(catches) {
        let $catches = $('#catches');
        for (let item of catches) {
            let $div = $('<div>').addClass('catch').attr('data-id', item._id);
            $div.append(`<label>Angler</label>`);
            $div.append(`<input type="text" class="angler" value="${item.angler}" />`);
            $div.append(`<label>Weight</label>`);
            $div.append(`<input type="number" class="weight" value="${item.weight}" />`);
            $div.append(`<label>Species</label>`);
            $div.append(`<input type="text" class="species" value="${item.species}" />`);
            $div.append(`<label>Location</label>`);
            $div.append(`<input type="text" class="location" value="${item.location}" />`);
            $div.append(`<label>Bait</label>`);
            $div.append(`<input type="text" class="bait" value="${item.bait}" />`);
            $div.append(`<label>Capture Time</label>`);
            $div.append(`<input type="number" class="captureTime" value="${item.captureTime}" />`);

            let $updateButton = $(`<button class="update">Update</button>`);
            $updateButton.on('click', async function (e) {
                let $parent = e.target.parentElement;
                await $.ajax({
                    method: 'PUT',
                    url: `${url}/${item._id}`,
                    beforeSend: function (x) {
                        x.setRequestHeader('Authorization', 'Basic ' + btoa('guest:guest'))
                    },
                    data: {
                        angler: $parent.querySelector('.angler').value,
                        weight: Number($parent.querySelector('.weight').value),
                        species: $parent.querySelector('.species').value,
                        location: $parent.querySelector('.location').value,
                        bait: $parent.querySelector('.bait').value,
                        captureTime: Number($parent.querySelector('.captureTime').value)
                    }
                });

                $('#catches').empty();
                await load();
            });
            $div.append($updateButton);

            let $deleteButton = $(`<button class="delete">Delete</button>`);
            $deleteButton.on('click', async function (e) {
                await $.ajax({
                    method: 'DELETE',
                    url: `${url}/${item._id}`,
                    beforeSend: function (x) {
                        x.setRequestHeader('Authorization', 'Basic ' + btoa('guest:guest'))
                    },
                });

                $('#catches').empty();
                await load();
            });
            $div.append($deleteButton);

            $catches.append($div);
        }
    }
}