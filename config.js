const config = {
  production: {
    DATABASE: 'mongodb+srv://dbUser:FOSq4oRILYAcHpNQ@cluster0-llvvd.azure.mongodb.net/production?retryWrites=true',
    JWT_SECRET_KEY: 'ANY STRING FOR JWT SECRET KEY'
  },
  test: {
    DATABASE: 'mongodb+srv://dbUser:FOSq4oRILYAcHpNQ@cluster0-llvvd.azure.mongodb.net/test?retryWrites=true',
    JWT_SECRET_KEY: 'ANY STRING FOR JWT SECRET KEY'
  },
  development: {
    DATABASE: 'mongodb+srv://dbUser:FOSq4oRILYAcHpNQ@cluster0-llvvd.azure.mongodb.net/development?retryWrites=true',
    JWT_SECRET_KEY: 'ANY STRING FOR JWT SECRET KEY'
  }
}

exports.get = function get(env) {
  return config[env] || config.development;
}