'use strict';

const songList = [
  {
    "name": "22",
    "album": "Red"
  },
  {
    "name": "A Perfectly Good Heart",
    "album": "Taylor Swift"
  },
  {
    "name": "A Place In This World",
    "album": "Taylor Swift"
  },
  {
    "name": "All Too Well",
    "album": "Red"
  },
  {
    "name": "All You Had To Do Was Stay",
    "album": "1989"
  },
  {
    "name": "Back To December",
    "album": "Speak Now"
  },
  {
    "name": "Bad Blood",
    "album": "1989"
  },
  {
    "name": "Begin Again",
    "album": "Red"
  },
  {
    "name": "Better Than Revenge",
    "album": "Speak Now"
  },
  {
    "name": "Blank Space",
    "album": "1989"
  },
  {
    "name": "Breathe",
    "album": "Fearless"
  },
  {
    "name": "Change",
    "album": "Fearless"
  },
  {
    "name": "Clean",
    "album": "1989"
  },
  {
    "name": "Cold As You",
    "album": "Taylor Swift"
  },
  {
    "name": "Come Back… Be Here (Deluxe Edition)",
    "album": "Red"
  },
  {
    "name": "Come In With The Rain (Platinum Edition)",
    "album": "Fearless"
  },
  {
    "name": "Crazier (“Hannah Montana”)",
    "album": "Soundtracks"
  },
  {
    "name": "Dear John",
    "album": "Speak Now"
  },
  {
    "name": "Enchanted",
    "album": "Speak Now"
  },
  {
    "name": "Everything Has Changed",
    "album": "Red"
  },
  {
    "name": "Eyes Open (“Hunger Games”)",
    "album": "Soundtracks"
  },
  {
    "name": "Fearless",
    "album": "Fearless"
  },
  {
    "name": "Fifteen",
    "album": "Fearless"
  },
  {
    "name": "Forever & Always (Platinum Edition)",
    "album": "Fearless"
  },
  {
    "name": "Girl At Home (Deluxe Edition)",
    "album": "Red"
  },
  {
    "name": "Haunted",
    "album": "Speak Now"
  },
  {
    "name": "Hey Stephen",
    "album": "Fearless"
  },
  {
    "name": "Holy Ground",
    "album": "Red"
  },
  {
    "name": "How You Get The Girl",
    "album": "1989"
  },
  {
    "name": "I Almost Do",
    "album": "Red"
  },
  {
    "name": "I Knew You Were Trouble",
    "album": "Red"
  },
  {
    "name": "I Know Places",
    "album": "1989"
  },
  {
    "name": "I Want You Back",
    "album": "Speak Now"
  },
  {
    "name": "I Wish You Would",
    "album": "1989"
  },
  {
    "name": "I'm Only Me When I'm With You",
    "album": "Taylor Swift"
  },
  {
    "name": "If This Was A Movie (Deluxe Edition)",
    "album": "Speak Now"
  },
  {
    "name": "Innocent",
    "album": "Speak Now"
  },
  {
    "name": "Invisible",
    "album": "Taylor Swift"
  },
  {
    "name": "Jump Then Fall (Platinum Edition)",
    "album": "Fearless"
  },
  {
    "name": "Last Kiss",
    "album": "Speak Now"
  },
  {
    "name": "Long Live",
    "album": "Speak Now"
  },
  {
    "name": "Love Story",
    "album": "Fearless"
  },
  {
    "name": "Mary’s Song (Oh My My MY)",
    "album": "Taylor Swift"
  },
  {
    "name": "Mean",
    "album": "Speak Now"
  },
  {
    "name": "Mine",
    "album": "Speak Now"
  },
  {
    "name": "Never Grow Up",
    "album": "Speak Now"
  },
  {
    "name": "New Romantics",
    "album": "1989"
  },
  {
    "name": "Our Song",
    "album": "Taylor Swift"
  },
  {
    "name": "Ours (Deluxe Edition)",
    "album": "Speak Now"
  },
  {
    "name": "Out Of The Woods",
    "album": "1989"
  },
  {
    "name": "Picture To Burn",
    "album": "Taylor Swift"
  },
  {
    "name": "Red",
    "album": "Red"
  },
  {
    "name": "Sad Beautiful Tragic",
    "album": "Red"
  },
  {
    "name": "Safe and sound (“Hunger Games”)",
    "album": "Soundtracks"
  },
  {
    "name": "Shake It Off",
    "album": "1989"
  },
  {
    "name": "Should’ve Said No",
    "album": "Taylor Swift"
  },
  {
    "name": "Sparks Fly",
    "album": "Speak Now"
  },
  {
    "name": "Speak Now",
    "album": "Speak Now"
  },
  {
    "name": "Starlight",
    "album": "Red"
  },
  {
    "name": "State Of Grace",
    "album": "Red"
  },
  {
    "name": "Stay Beautiful",
    "album": "Taylor Swift"
  },
  {
    "name": "Stay Stay Stay",
    "album": "Red"
  },
  {
    "name": "Style",
    "album": "1989"
  },
  {
    "name": "Superman (Deluxe Edition)",
    "album": "Speak Now"
  },
  {
    "name": "Superstar (Platinum Edition)",
    "album": "Fearless"
  },
  {
    "name": "Sweeter Than Fiction (“Chance” )",
    "album": "Soundtracks"
  },
  {
    "name": "Teardrops On My Guitar",
    "album": "Taylor Swift"
  },
  {
    "name": "Tell Me Why",
    "album": "Fearless"
  },
  {
    "name": "The Best Day",
    "album": "Fearless"
  },
  {
    "name": "The Last Time",
    "album": "Red"
  },
  {
    "name": "The Lucky One",
    "album": "Red"
  },
  {
    "name": "The Moment I Knew (Deluxe Edition)",
    "album": "Red"
  },
  {
    "name": "The Other Side Of The Door (Platinum Edition)",
    "album": "Fearless"
  },
  {
    "name": "The Outside",
    "album": "Taylor Swift"
  },
  {
    "name": "The Story Of Us",
    "album": "Speak Now"
  },
  {
    "name": "The Way I Loved You",
    "album": "Fearless"
  },
  {
    "name": "This Love",
    "album": "1989"
  },
  {
    "name": "Tied Together With A Smile",
    "album": "Taylor Swift"
  },
  {
    "name": "Tim McGraw",
    "album": "Taylor Swift"
  },
  {
    "name": "Today Was A Fairy Tale (“Valentine’s Day”)",
    "album": "Soundtracks"
  },
  {
    "name": "Treacherous",
    "album": "Red"
  },
  {
    "name": "Untouchable (Platinum Edition)",
    "album": "Fearless"
  },
  {
    "name": "We Are Never Ever Getting Back Together",
    "album": "Red"
  },
  {
    "name": "Welcome To New York",
    "album": "1989"
  },
  {
    "name": "White Horse",
    "album": "Fearless"
  },
  {
    "name": "Wildest Dreams",
    "album": "1989"
  },
  {
    "name": "Wonderland",
    "album": "1989"
  },
  {
    "name": "You Are In Love",
    "album": "1989"
  },
  {
    "name": "You Belong With Me",
    "album": "Fearless"
  },
  {
    "name": "You’re Not Sorry",
    "album": "Fearless"
  }
];

module.exports = {
  up: function (queryInterface, Sequelize) {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('Person', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */

    return queryInterface.bulkInsert('Songs', songList, {});

  },

  down: function (queryInterface, Sequelize) {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
  }
};
