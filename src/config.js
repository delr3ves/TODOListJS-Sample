const mongo = {
  url: process.env.MONGO_URL || "localhost",
  port: process.env.MONGO_PORT || 27017,
  database: process.env.MONGO_DATABASE || "tasks",
  user: process.env.MONGO_USER || "",
  password: process.env.MONGO_PASSWORD || "",
}

const config = {
  server: {
    port: process.env.PORT || 3000
  },
  mongo: {
    ...mongo,
    connectionUrl: () => {
      const auth = mongo.user ? `${mongo.user}:${mongo.password}@`:"";
      return `mongodb://${auth}${mongo.url}:${mongo.port}/${mongo.database}`;
    }
  }
}

module.exports = config;

