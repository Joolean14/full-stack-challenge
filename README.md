WHAT WE LOOK FOR:
2 years+ experienced full stack developers who love music and want to join a team of experienced Music industry professionals to maintain and develop new tools for Artists, Music Labels, Songwriters and Music Publishers.
Required Technical Knowledge:

    PHP / JS
    Laravel 7.0+ / Express JS
    Angular 8+ / React JS
    AWS
    SQL / MySQL

Required Non-Technical Knowledge:

    Comfortable to communicate in English (Written and/or spoken)

It’s a Plus if you:

    Have experience working in (music) copyright companies/projects.
    Have experience working with entertainment/music apps APIs (i.e. YouTube, Deezer, Spotify, Apple Music, etc.).
    Have previous experience with music rights management
    Speak/Write Spanish and Portuguese

If you are interested, please take a look in our full-stack-challenge and send a résumé to ithires@onerpm.com and diego@onerpm.com

ONErpm is an equal opportunity employer encouraging diversity in the workplace. All qualified applicants will receive consideration for employment without regard to race, color, national origin, gender, age, religion, disability, sexual orientation, or veteran status, or any other status or characteristic protected by law.

---

Once you have sent the documentation please proceed to complete the following test and submit to ithires@onerpm.com and diego@onerpm.com

---

Welcome to the world of music tech.

Currently, we need to consume data from music tracks using the ISRC code, this is one of the most important things in the music industry.

The ISRC (International Standard Recording Code) is an international standard code for the unique identification of recordings (tracks). It resembles a barcode a sound recording.

PROBLEM:

After closing a contract with a music producer, he provided 10 ISRCs that were not included in our databases, these are shown below:

    US7VG1846811
    US7QQ1846811
    BRC310600002
    BR1SP1200071
    BR1SP1200070
    BR1SP1500002
    BXKZM1900338
    BXKZM1900345
    QZNJX2081700
    QZNJX2078148

We need to gather and publish the following metadata associated to these ISRC’s.

    Thumbnail
    Release date
    Album Title
    Album Artist(s)
    Length in minutes and seconds (mm:ss)
    Player with audio preview
    Spotify’s Album Link
    Signal whether the album is available in Brazil or not.

From a tech point of view, we need to store this information in a database. To do this, feel free to create the necessary structure to store the information you find relevant from the tracks.

Once the data is stored, we need to display it through a public webpage, alphabetically ordered by track title.

REQUIREMENTS

-Fork this repository and open a PR when it is finished.

-The backend must be done in the Laravel 7.0 or higher framework.

-The database must be MySQL.

-The page must be responsive to suit all types of devices.

-Use the Spotify API: https://developer.spotify.com/ to collect track data.

PLUS

- Develop frontend in Angular 8 or later.

- Test single operations and integrations

WHAT WILL BE EVALUATED

-Fidelity to instructions.

-Design patterns.

-Clean Code and good practices.

-Good versioning practices.

## To-dos

1. Tests +++

   - Check if tests are too hard to do.
   - Unit tests and Integration tests.

2. Create db schema.

   Thumbnail _BLOB_
   Release date _Date_
   Album Title _VARCHAR_
   Album Artist(s) _VARCHAR_
   Length in minutes and seconds (mm:ss) _TIME_
   Player with audio preview posiblemente es un _VARCHAR_ ???
   Spotify’s Album Link _VARCHAR_
   Signal whether the album is available in Brazil or not. _BOOLEAN_

   CREATE TABLE tracks (
   id INT NOT NULL AUTO_INCREMENT,     
   thumbnail BLOB,
   release_date DATE,
   album_title VARCHAR(255),
   album_artists VARCHAR(255),
   length TIME,
   audio_preview BLOB,
   album_link VARCHAR(255),
   available_in_brazil BOOLEAN,
   PRIMARY KEY (id)
   );

   Todo esto depende de API de spotify.

3. Create database in MySQL.

4. Create backend in Express JS

   - Connect to DB.
   - Connect to EJS or Handlebars.
   - FETCH data from https://developer.spotify.com/ How to use the API??? START HERE !

     - http://jsfiddle.net/JMPerez/0u0v7e1b/
     - https://developer.spotify.com/console/get-search-item/
     - Get your auth token to use the web console.
       https://developer.spotify.com/documentation/general/guides/authorization-guide/

     - https://isrcsearch.ifpi.org/#!/search?isrcCode=US7VG1846811&tab=lookup&showReleases=0&start=0&number=10

   - Store in db in AWS.
   - Routes :
     - '/' display data alphabetically ordered my track title.

5. Responsive

  -  Bootstrap card templates --> https://getbootstrap.com/docs/5.0/examples/album/
   - Integrate Handlebars

6. Front-end in React +++

   - Check if connecting to Express is too hard to do.
