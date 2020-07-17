## pxb-database

This repo contains data used within the [PX Blue Home](https://pxblue.github.io) documentation website.
The database is accessible in a JSON format and is enforced and built using typescript.

Our database is available through the Github API:

```
https://raw.githubusercontent.com/pxblue/pxb-database/master/deployed/doc-it/R17Roadmap.json
```

The index.ts is a Node.js script which is used to create the `/deployed` folder.

###

To build and run the script used to create or update the database, run:

```
yarn start
```
