// arrays within objects within arrays

var myMusic = [
  {
    "artist": "Billy Joel",
    "title": "Piano Man",
    "release_year": 1973,
    "formats": [
      "CD",
      "8T",
      "LP"
    ],
    "gold": true
  }
  // Add record here
];
myMusic.unshift(
  {
  "artist": "Ronald Jenkees",
  "title": "Rhodes Deep",
  "release_year": 2017,
  "formats": [
    "Vinyl",
    "MP3",
    "CD"
  ]
  }
);
