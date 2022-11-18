# News Summary Challenge

This challenge was my first time "Thinking in React", creating a website in which users could scroll through and see the headlines of the day, as well as being able to click on them to get a summary of the story. Clicking on the headline / image again would then direct the user to the Guardian website where they could find more information on the story. The page was designed using ReactJS and received the news by making requests to the Guardian API. 

### User stories
```
As a busy politician
So I know what the big stories of the day are
I can see all of today's headlines in one place
```

```
As a busy politician
So that I have something nice to look at
I can see a relevant picture to illustrate each news article when I browse headlines
```

### Extended

```
As a busy politician
So that I can get an in depth understanding of a very important story
I can click a news headline to see a summary and a photo of the news article
```

```
As a busy politician
So I can get a few more details about an important story
I can see click a news article summary title which links to the original article
```

### Installation

* Clone repo to local machine
* Point terminal to the same folder that package.json is located in and use `npm i`
* Once all packaged are installed, use `npm start`

### Usage

![Headlines Page](images/headlines.png?raw=true)
Here we can see the main headlines page, where react pulls the latest news from the Guardian API.  <br/>
![Article Page](images/article.png?raw=true)
Once you click on a headline, more information about the article is given below the image. <br/>
![Guardian Page](images/redirect.png?raw=true)
If the headline is clicked once more, the user is redirected to the Guardian page for more information. <br/>


### Headlines page wireframe

![Headlines page mockup](/images/news-summary-project-headlines-page-mockup.png)

### Article summary page wireframe

![Article page mockup](/images/news-summary-project-article-page-mockup.png)

## API

### API request rate limits and stubbing

The Guardian and Aylien text summarisation APIs are severely rate-limited.

**Please stub your tests so you don't exceed the daily limit.  Otherwise, all requests will be rejected and your app will stop working!**

### Guardian API example

**Please stub your tests to avoid exceeding the API rate limit**

If you wanted to get the content of an article from the Guardian API, this is the cURL request you might make.  Notice how it has a query parameter for `api-key`.

```sh
# Search endpoint
curl "https://content.guardianapis.com/search?q=coronavirus&show-fields=body&api-key=API_KEY"
```
```sh
# Single Item endpoint
curl "https://content.guardianapis.com/world/2021/mar/22/link-between-diabetes-and-coronavirus-infections?show-fields=body&api-key=API_KEY"
```

#### Example request data

[Mock Data](./mockNewsData.json) - contains a request to the Guardian API with fields selected that will help you with the challenge.  The actual request made was to:

https://content.guardianapis.com/search?order-by=newest&show-fields=byline%2Cthumbnail%2Cheadline%2CbodyText&api-key=INSERT_YOUR_KEY_HERE

You will need to replace `INSERT_YOUR_KEY_HERE` with your own Guardian API key.  Use this data whilst developing, serving it from `json-server` - it will help on the request rate limit in the API.

### Aylien text summarisation API example

**Please stub your tests to avoid exceeding the API rate limit**

If you wanted to use the Aylien API to summarise an article by Bret Victor, this is the cURL request you might make.  Notice how it has headers to authenticate with the Aylien API.

```
curl "https://api.aylien.com/api/v1/summarize?url=http://worrydream.com/MediaForThinkingTheUnthinkable/note.html" \
  -H "X-AYLIEN-TextAPI-Application-ID: APPLICATION_ID" \
  -H "X-AYLIEN-TextAPI-Application-Key: SECRET_APPLICATION_KEY"
```

## Resources

* [Guardian newspaper API homepage](http://open-platform.theguardian.com/documentation/)
* [Aylien text summary API docs](http://docs.aylien.com/docs/summarize)
* cURL [man page](https://curl.haxx.se/docs/manpage.html)
* [Hurl](https://www.hurl.it/), a web interface for sending HTTP requests

---
