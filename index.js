function driversWithRevenueOver(array, number) {
  return array.filter(function(driver) {
    return driver.revenue > number;
  });
}