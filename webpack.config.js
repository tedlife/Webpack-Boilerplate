module.exports = () => {
  let env;

  switch (process.env.NODE_ENV) {
    case "development":
      env = "dev";
      break;
    case "production":
      env = "prod";
      break;
    default:
      env = "dev";
  }

  return require(`./config/webpack.config.${env}.js`)({
    ROOTPATH: __dirname,
    env
  });
};
