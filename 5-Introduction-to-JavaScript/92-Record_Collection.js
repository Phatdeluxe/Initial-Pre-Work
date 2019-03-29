// great excersise using all the tools just learned. had a lot of fun with this one

// Setup
var collection = {
    "2548": {
      "album": "Slippery When Wet",
      "artist": "Bon Jovi",
      "tracks": [
        "Let It Rock",
        "You Give Love a Bad Name"
      ]
    },
    "2468": {
      "album": "1999",
      "artist": "Prince",
      "tracks": [
        "1999",
        "Little Red Corvette"
      ]
    },
    "1245": {
      "artist": "Robert Palmer",
      "tracks": [ ]
    },
    "5439": {
      "album": "ABBA Gold"
    }
};
// Keep a copy of the collection for tests
var collectionCopy = JSON.parse(JSON.stringify(collection));

// Only change code below this line
// this function, given an id and a value artist, tracks, or album, and the respective name, will set or update the information for that id
function updateRecords(id, prop, value) {
  if (id == "" || prop == ""){
    return "Please enter a valid id and property values";
  }
  else if (value == "") {
    delete collection[id][prop];
    return collection;
  }
  /*else if (collection[id].hasOwnProperty(prop) != true && prop != "tracks") {
    collection[id][prop] = value;
    return prop + " Has been sucessfully added to " + id + " and " + value + " has been assigned to it";
  } This is commented out because I realized that the next statement achieves the same goals*/
  else if (prop != "tracks") {
    collection[id][prop] = value;
    return collection;
  }
  else if (collection[id].hasOwnProperty("tracks") != true) {
    collection[id].tracks = [];
    collection[id][prop].push(value);
    return collection;
  }
  else {
    collection[id][prop].push(value);
    return collection;
  }
  return collection;
}

// Alter values below to test your code
updateRecords(5439, "artist", "ABBA");
