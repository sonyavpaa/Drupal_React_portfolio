# Drupal React Portfolio

School project done during web dev studies in Business College Helsinki in autumn 2022; a custom React theme to be used inside Drupal 9. Place the folder inside Drupal project root folder's theme folder, clear cache and install it in site/admin/appearance. When making changes inside React theme, go to React theme's root folder and run npm start to view changes.

<img alt="Drupal Logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png" height="50px">
<img alt="Drupal Logo" src="https://www.drupal.org/files/Wordmark_blue_RGB.png" height="50px">

---

Cat Api

- the React App is using images from The Cat Api https://thecatapi.com/: to make the fetch work, you (should) need your own api key. To get one, register at the web site and place it in custom/react/js/src/components/Main.js:

```js
await axios.get(
  `https://api.thecatapi.com/v1/images/search?header=YOUR_API_KEY_HERE`
);
```

If wanting to fetch more than one picture, check The Cat Api documentation.
