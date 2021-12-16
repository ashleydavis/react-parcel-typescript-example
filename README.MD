# Simple example: React, Parcel + TypeScript (also Tailwind & React Router)

This is the simplest possible example of a frontend built with TypeScript and React and bundled with Parcel (v1).

Includes Tailwind CSS (configured as per [these instructions](https://tailwindcss.com/docs/installation#using-tailwind-cli)).

Includes [React Router v6](https://reactrouter.com/docs/en/v6).

If you like this project, please star this repo and [support my work](https://www.codecapers.com.au/about#support-my-work)

## Setup

You need [Node.js](https://nodejs.org/en/) installed to use this code.

Clone this repo then install dependenices:

```bash
npm install
```

## Serve the web page with live reload

```bash
npm start
```

Open a browser and navigate to [http://localhost:1234/](http://localhost:1234/).

## Build the static web page

```bash
npm run bundle
```

The static web page is output to the `out` subdirectory.

You can test it using `live-server`:

```bash
cd out
npx live-server
```

## Build the TypeScript code

Do this if you want to check for compile errors.

```bash
npm run build
```

Like this example? Be sure to star the repo and [follow the author](https://twitter.com/ashleydavis75) on Twitter for more!

## Debugging

You need to have a `/temp` directory on your system. This is used to load a new instance of Chrome from a seperate profile for debugging.

Launch the dev server:

```bash
npm start
```

Set breakpoints in your code.

In VS Code open the debugging pane, choose "Launch Chrome" then hit F5.

Refresh the browser to trigger your breakpoints again.