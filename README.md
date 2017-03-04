# Jomelify

This is a small express app with the intended purpose of Jomelifying an image. It uses the [chrisify command line tool](https://github.com/zikes/chrisify) to accomplish this.

The chrisify app is wrapped in a docker container, with an express app that has an endpoint that accepts an image, and returns a Jomelified image.

# Use

To run the service, run
```
docker build -t jomelface .
docker run -it -p 3000:3000 jomelface:latest
 ```

and to interface with the app, you can use the form in the `index.html`

If you would like to use a picture of someone other than Jomel (not sure why you would, but it's up to you ;) ) put their picture files into the `./faces` directory before you build the container.
