function driversWithRevenueOver(array, number) {
  return array.filter(function(driver) {
    return driver.revenue > number;
  });
}

function driverNamesWithRevenueOver(array, number) {
  return driversWithRevenueOver(array, number).map(function(driver) {
    return driver.name;
  });
}

function exactMatch(drivers, obj) {
  return drivers.filter(function (driver) {
    
  })
}

function exactMatchToList(drivers, obj) {
  
}

