import sanityClient from "@sanity/client";
export default sanityClient({
  projectId: "INSERT_YOUR_PROJECT_ID_HERE",
  dataset: "production",
  // authenticated requests can't be cached so we have to set useCdn to false
  useCdn: false, 
  token: "skxddIw8qPi9SGEPbag616V2YM3r0GflJgLmbhvP7UyTZwphmtY9ALWHuGzQATYoO7DaBhHKlNyqZLYembVjS4EqDg5s3GmK94BDUX80R8Ik9hx8csjBWif8jUanbPo91nikHZDc7nBn5oHKppXz6X7Q1kIzwIqRpc4NjHsIZh5U2Xv1ZWnx"   
});