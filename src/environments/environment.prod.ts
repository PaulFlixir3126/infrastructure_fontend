// const env = ('../../node-env.js')
const envObject = {
  BACKEND_URL: '/api/backend'
};

console.log("production env mm")
export const environment = {
  production: false,
  serviceUrl: envObject.BACKEND_URL
};
