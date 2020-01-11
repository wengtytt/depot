const uuidV4 = require('uuid/v4');

module.exports = {
    setUpRoutes: setUpRoutes
}

function setUpRoutes(router) {
    router.all('*', (request, result, next) => {
        request.uuid = uuidV4();
        next();
    });


}