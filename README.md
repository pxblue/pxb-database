# pxb-database

This repo contains data used within the [PX Blue Home](https://pxblue.github.io) documentation website.
The database is accessible in a JSON format and is enforced and built using typescript.

Our database is served through the Github API.

The index.ts is a Node.js script which is used to create the `/deployed` folder.

## Developers

To build and run the script used to create or update the database, update the roadmap in `/src` and run:

```
yarn && yarn start
```
