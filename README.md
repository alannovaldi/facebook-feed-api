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

1. Index Page&nbsp;
    Method: GET&nbsp;
    Endpoint:&nbsp;
    ``` http://localhost:8080/facebook-feed ```&nbsp;
    Description: Stream list of all Feeds your account had posted with pagination and limit of 25 feeds.&nbsp;
2. Next Page of Pagination&nbsp;
    Method: GET&nbsp;
    Endpoint:&nbsp;
    ``` http://localhost:8080/facebook-feed/next ```&nbsp;
    Description: Move into next page for list of all your Feeds.&nbsp;
3. Previous Page of Pagination&nbsp;
    Method: GET&nbsp;
    Endpoint: &nbsp;
    ``` http://localhost:8080/facebook-feed/prev ```&nbsp;
    Description: Move into previous page for list of all your Feeds.&nbsp;