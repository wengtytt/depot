const node_env = process.env.NODE_ENV || 'development';
const node_port = process.env.PORT || 3333;
const jwt_secret = process.env.SECRET || 'ONLY ME KNOW IT!';

module.exports = {
    node_env: node_env,
    node_port: node_port,
    jwt_secret: jwt_secret,
}