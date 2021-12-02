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
- Go to this link: 
- login with the spotify email: pietro@momenthouse.com password: momenthouse
- Copy OAuth token in the results
- ![image](https://user-images.githubusercontent.com/15001110/144375770-e46db67d-db96-44c7-b64d-512c748701f4.png)
- go to link a sample link: (ie: https://developer.spotify.com/console/get-new-releases)
- Enter the OAuth Token at the bottom of the page
- Click "Try It"
- Scroll down for response


&nbsp;
# Instructions 📖
1. Fetch and display *Released This Week* songs
  - Use the API path `new-releases`
  - `GET https://api.spotify.com/v1/browse/new-releases`
  - Examples and samples [here](https://developer.spotify.com/console/get-new-releases)
2. Fetch and display *Featured Playlists*
  - Use the API path `featured-playlists`
  - `GET https://api.spotify.com/v1/browse/featured-playlists`
  - Examples and samples [here](https://developer.spotify.com/console/get-featured-playlists)
  - https://developer.spotify.com/console/get-featured-playlists
3. Fetch and display *Browse* genres
  - Use the API path `categories`
  - `GET https://api.spotify.com/v1/browse/categories`
  - Examples and samples [here](https://developer.spotify.com/console/get-browse-categories)
4. Add a Loading state/UI
  - Design up to you.
5. Search functionaliy
 - Add ability to filter all new releases, playlists and categories
 - design and fucntionality up to you
6. Play/Pause Functionality
  - Search for a song, example [here](https://developer.spotify.com/console/get-search-item)
  - use the preview URL in the response
7. Favorite Functionality
  - Does not have to be functional (hitting the spotify api)
  - Add a way to favorite a playlist or a release
  - Add a way to remove favorite from an item
  - Add a way to filter or search for only favorited items

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
