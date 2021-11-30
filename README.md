# Momenthouse Interview Coding Challenge - Spotify Connection 🎧 &nbsp; ![hard](https://img.shields.io/badge/-Hard-red) ![time](https://img.shields.io/badge/%E2%8F%B0-60m-blue) 

&nbsp;
# Setup
-  Run `yarn` to install the repo.
- Make sure you are running at least node v8.0.0.
- Run `yarn start` to run the react app.

&nbsp;
# Goals/Outcomes ✨
- To test knowledge of consuming APIs and handling responses
- Loading state and knowing where and how to make multiple API calls efficiently


&nbsp;
# Instructions to use Spotify API
- Copy OAuth token
- `BQBeR68cwBpig3-IthnoP8qmrqmkONdzSP5amdgc3Q6vDamt85JEmTLv8NWJYlknw-nhieKbvWXR6XfSQ9zL2pwMa2CM508dq_8gfX8jpAWumXBz9nNYzKn1ig11nmDjCMl9xgcIg6YESeDL6B_ppPHyg8Esb56LY0g`
- go to link(ie: https://developer.spotify.com/console/get-new-releases)
- Enter the OAuth Token at the bottom of the page
- Click "Try It"
- Scroll down for response


&nbsp;
# Requirements 📖
- Fetch and display *Released This Week* songs
  - Use the API path `new-releases`
  - https://developer.spotify.com/console/get-new-releases
- Fetch and display *Featured Playlists*
  - Use the API path `featured-playlists`
  - https://developer.spotify.com/console/get-featured-playlists
- Fetch and display *Browse* genres
  - Use the API path `categories`
  - https://developer.spotify.com/console/get-browse-categories
- Search functionaliy
- Play/Pause Functionality
  - Search for a song IE:
`curl -X "GET" "https://api.spotify.com/v1/search?q=artist:Lady+Gaga+title:Bad+Romance&type=track&limit=1" -H "Accept: application/json" -H "Content-Type: application/json" -H "Authorization: Bearer BQBeR68cwBpig3-IthnoP8qmrqmkONdzSP5amdgc3Q6vDamt85JEmTLv8NWJYlknw-nhieKbvWXR6XfSQ9zL2pwMa2CM508dq_8gfX8jpAWumXBz9nNYzKn1ig11nmDjCMl9xgcIg6YESeDL6B_ppPHyg8Esb56LY0g"`
  - use the preview URL in the response
- Loading state/UI *(optional, current UX is already clean)*

&nbsp;
# Think about 💡
- Do you resolve each API request one after the other or in parallel?
- Where do you make the API requests?
- How much logic do you offload out of the UI components?

&nbsp;
# What's Already Been Done 🏁
- UI/UX for all elements, including previews (mobile responsive)

&nbsp;
# Screenshots 🌄
&nbsp;
![screenshot-desktop](https://puu.sh/GwPLE/3be580156a.png)
<img alt="screenshot-mobile" width=400 src="https://puu.sh/GwPLS/0bcb566d23.png" />
