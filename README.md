# chiper-challenge


Mobile application designed to consume Reddit service, from which you get a list of posts based on a given category that can be "New", "Top", "Hot" or "Controversial". 

It also has 2 types of navigation, the first is Stack type and the second is Tab type, as well as the ability to view the posts by tabbing on any of the items in the list via WebView. 

The data fetching is done in a reusable way thanks to the use of a custom hook that also controls the possibility of dragging to refresh. Also a component called TabLayout was used for each of the categories, thus avoiding duplicate code since the design of each category was essentially the same.
