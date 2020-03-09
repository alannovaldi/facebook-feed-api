# facebook-feed-api
Node JS application for streaming Facebook Feed of a user

Installation and Hosting Instruction

1. Clone this repo

2. Configure Access Token for Facebook User in file config.js

```
const token = "[Your Access Token]";
```

3. On root Directory, run this command
```
node server.js
```

After running those instruction, these are the Endpoints the application can provide.

1. Index Page
    Method: GET
    Endpoint:
    ``` http://localhost:8080/facebook-feed ```
    Description: Stream list of all Feeds your account had posted with pagination and limit of 25 feeds.
2. Next Page of Pagination
    Method: GET
    Endpoint:
    ``` http://localhost:8080/facebook-feed/next ```
    Description: Move into next page for list of all your Feeds.
3. Previous Page of Pagination
    Method: GET
    Endpoint: 
    ``` http://localhost:8080/facebook-feed/prev ```
    Description: Move into previous page for list of all your Feeds.