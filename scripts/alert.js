var numcharperline = 41
var heightperline = 10

function notifyError(msg) {
    var height = 10

    if (msg !== '') {
        var lines = (msg.length / numcharperline)
        height = heightperline * lines

    }
    Lobibox.notify('error', //AVAILABLE TYPES: "error", "info", "success", "warning", "confirm", "progress", "prompt", "default", "window"
        {
            size: 'mini',
            iconSource: 'fontAwesome',
            rounded: false,
            delayIndicator: false,
            delay: false,
            closeOnClick: true,
            icon: true,
            width: 320,
            height: height,
            position: 'right top',
            messageHeight: 70,
            msg: msg
        });



}

function notifyWarning(msg) {
    var height = 10

    if (msg !== '') {
        var lines = (msg.length / numcharperline)
        height = heightperline * lines

    }
    Lobibox.notify('warning', //AVAILABLE TYPES: "error", "info", "success", "warning", "confirm", "progress", "prompt", "default", "window"
        {
            size: 'mini',
            iconSource: 'fontAwesome',
            delayIndicator: true,
            delay: 4000,
            pauseDelayOnHover: true,
            rounded: false,
            icon: true,
            height: height,
            //messageHeight: 50,
            width: 300,
            position: 'center top',
            msg: msg
        });

}

function notifySuccess(msg) {
    var height = 10

    if (msg != '') {
        var lines = (msg.length / numcharperline)
        height = heightperline * lines

    }
    Lobibox.notify('success', //AVAILABLE TYPES: "error", "info", "success", "warning", "success", "confirm", "progress", "prompt", "default", "window"
        {
            size: 'mini',
            iconSource: 'fontAwesome',
            rounded: false,
            delayIndicator: false,
            pauseDelayOnHover: true,
            continueDelayOnInactiveTab: false,
            icon: true,
            height: height,
            width: 400,
            position: 'center top',
            msg: msg
        });
}

function notifyInfo(msg) {
    var height = 10

    if (msg != '') {
        var lines = (msg.length / numcharperline)
        height = heightperline * lines

    }
    Lobibox.notify('info', //AVAILABLE TYPES: "error", "info", "success", "warning", "confirm", "progress", "prompt", "default", "window"
        {
            size: 'mini',
            iconSource: 'fontAwesome',
            delayIndicator: false,
            delay: 4000,
            pauseDelayOnHover: true,
            rounded: false,
            icon: true,
            height: height,
            //messageHeight: 50,
            width: 400,
            position: 'center top',
            msg: msg
        });

}