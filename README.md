# Portfolio Website
This is the repo for my portfolio site [leichsenring.io](https://leichsenring-portfolio.herokuapp.com/) 

**You may have to refresh if the site doesn't load the first time. This is due to the free Dyno tier on Heroku going to sleep after 30 minutes and having to boot back up. :disappointed:

## Instructions
1. Download repo
2. Using your terminal cd into the project folder
3. Run `npm start`. Once the Express server is running you will see the URL and port printed out

***

The following changes have been made:
* Added favicon
  > layout.pug
    ```
      Generated on https://favicon.io/favicon-generator/
      link(rel='apple-touch-icon', sizes='180x180', href='/static/images/apple-touch-icon.png')
      link(rel='icon', type='image/png', sizes='32x32', href='/static/images/favicon-32x32.png')
      link(rel='icon', type='image/png', sizes='16x16', href='/static/images/favicon-16x16.png')
      link(rel='manifest', href='/static/site.webmanifest')
    ```
* Project images on index transform scale(1.1) on :hover
* Thumbnail images border color change to lime green



