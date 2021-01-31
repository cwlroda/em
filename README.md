# em
Curated, personalized exercise programs for women to reduce period pain and discomfort.

## Inspiration
Our female team members discovered that exercise helps to greatly relieve the discomfort associated with periods. This is supported by several studies. We wanted to create a solution that helps empower as many women as possible, and we realized that our web application could have a direct impact on the day-to-day well-being of women around the world. We wanted to encourage users to continue using our application, and we believe that helping women empower other women was a good motivator. We thus thought of partnering with companies such as Estée Lauder and NGOs such as ActionAid to supply women in less developed countries with essential sanitary products. 

## What it does
em. creates curated, personalized exercise programs for women to reduce period pain and discomfort. Firstly, the user indicates sore body parts, the desired exercise duration and intensity. Our program then generates a 7-day exercise program for the user, with at least 2 different exercise videos per day. The user can rate the program and our program uses machine learning to generate better programs. Users can also save their favorite programs by creating an account with us. To help alleviate period poverty, we partner companies such as Estée Lauder and NGOs like ActionAid to supply sanitary products to women in less developed countries. With every program completed, we supply one month’s supply of sanitary products to an underprivileged woman. In this way, our users can help empower other women around the world.

## How I built it
We scraped Youtube for fitness and yoga videos targeting the various body parts and categorised them based on duration and intensity, forming our main database. The front-end sends the user’s preferences to the back-end, where the individual categories are queried against the database. A list of potential fitness and yoga videos are returned. The backend algorithm then sorts the list and picks the top 14 videos to be split amongst the 7 exercise days. Since there are 2 videos per day, the algorithm ensures that the total length would not exceed the duration specified by the user. If multiple body parts are selected, the algorithm will ensure that the exercises corresponding to each body part will be alternated.

## Challenges I ran into
There were certain module limitations when integrating the user interface with the Wix back-end, as the latter did not support module imports. We circumvented this by building an API that handled requests and return values from both ends. The query limit of 10 imposed in Firestore also meant that we could not perform a single compound query to obtain the relevant data. Instead, we had to break up the queries into batches. This slightly slowed down the computational time of the algorithm, but it is still robust enough to handle multiple requests.

## Accomplishments that I'm proud of
We are proud that we managed to think of a creative idea, gather a sizable database, and customize our website using code within 24 hours. 

## What I learned
Building a full-stack web application with NodeJS.

## What's next for em.
Though em. is still in its early stages, we have plenty of exciting developments lined up! Users will soon be able to indicate their mood and preferences for em. to generate a curated Spotify playlist for mental wellness. We aim to start a social movement to raise awareness of period poverty and there will also be a global scoreboard for users who have contributed the most to our efforts. We look forward to collaborating with popular fitness vloggers such as Chloe Ting and Pamela Reif on topics such as healthy diets and best exercises to target period pain.
