// Production keys here

module.exports = {
    mongoUri: process.env.MONGO_URI,
    secret: process.env.SECRET,
    frontendServer: process.env.FRONTEND_SERVER,
    backendServer: process.env.BACKEND_SERVER,
    gmailUser: process.env.GMAIL_USER,
    gmailPassword: process.env.GMAIL_PASSWORD
};