exports.success = function (req, res, messange, status) {
    res.status(status || 200).send({
        error: '',
        body: messange
    });
}

exports.error = function (req ,res, messange, status, details) {
    console.error('[response.error]'+details);
    res.status(status || 500).send({
        error: messange,
        body: ''
    });
}