const lfm = (options) => {
    const domain = window.location.origin;
    let button = document.getElementById("lfm");
    var route_prefix = (options && options.prefix) ? options.prefix : '/laravel-filemanager';
    var target_input = document.getElementById(button.getAttribute('data-input'));
    var target_preview = document.getElementById(button.getAttribute('data-preview'));

    window.open(route_prefix + '?type=' + 'image', 'FileManager', 'width=900,height=600');
    window.SetUrl = function (items) {
        var file_path = JSON.stringify(items);

        if (file_path !== '') {
            // set the value of the desired input to image url
            target_input.value = file_path;
            // clear previous preview

            let img = document.querySelector('.a_img');
            img.setAttribute('src', items[0].url);
        }

        button.dispatchEvent(new Event('change'));


    };

};

export default lfm;

