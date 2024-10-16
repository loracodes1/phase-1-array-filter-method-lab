// Code your solution here
function findMatching(drivers, name) {
    return drivers.filter(driver => driver.toLowerCase() === name.toLowerCase());
  }

  const drivers = ["Bobby", "Sammy", "Sally", "Annette", "Bobby"];
console.log(findMatching(drivers, "Bobby"));  // It outputs ["Bobby", "Bobby"]
console.log(findMatching(drivers, "Sammy"));  // It outputs ["Sammy"]
console.log(findMatching(drivers, "bobby"));  // It outputs ["Bobby", "Bobby"] (case insensitive)

function fuzzyMatch(drivers, letters) {
    return drivers.filter(driver => driver.startsWith(letters));
  }
  
  function matchName(drivers, name) {
    return drivers.filter(driver => driver.name === name);
  }
  
  