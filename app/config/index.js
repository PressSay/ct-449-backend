const config = {
    app: {
        port: process.env.PORT || 3000
    },
    db: {
        uri: process.env.MONGODB_URI || "mongodb://lpq:io@127.0.0.1:27017/contactbook?authSource=admin"
    }
};

module.exports = config