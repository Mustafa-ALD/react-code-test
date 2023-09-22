Coding Assignment

Create a React Native app that displays 10 randomized Hacker News top stories using the Hacker News API (https://github.com/HackerNews/API). The stories must be listed in ascending order based on the stories score.

The UI must include:
Story title
Story URL
Story timestamp
Story score
Author id
Author karma score

Hint: You’ll be needing the following endpoints:
Top stories: https://hacker-news.firebaseio.com/v0/topstories.json  
Story item: https://hacker-news.firebaseio.com/v0/item/${id}.json 
User: https://hacker-news.firebaseio.com/v0/user/${id}.json 

Requirements:
Use latest version of React Native (>= 0.61)
Application must be written in TypeScript (>= 3.7)

Bonus Points:
Use Redux for state management
Use Redux-Saga

[37580141,37581132,37576633,37580123,37580490,37580113,37559996,37580593,37565688,37579595, ...
37551354,37575694,37564851,37555172,37575333,37553381,37563335,37556160,37558366,37556573]

{
    "by":"rtoway",
    "descendants":80,
    "id":37558366,
    "kids":[37558930,37558916,37559008,37559196,37559437,37558806,37560636,37559029,37558898,37559364,37558794,37559743,37559337,37558929,37559424,37559199],
    "score":38,
    "time":1695054365,
    "title":"Holding Apple Accountable: The Future of the Internet Economy Depends on It",
    "type":"story",
    "url":"https://newsroom.spotify.com/2023-09-18/dustee-jenkins-holding-apple-accountable-internet-economy-fairness-digital-markets-act/"
}