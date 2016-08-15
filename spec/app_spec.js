describe("a bike", function() {
  var bike;

  beforeEach(function() {
    bike = new Bike(12847390, "red", 2016)
  });

  it("has an id number", function() {
    expect(bike.id).toEqual(12847390);
  });

  it("has a color", function() {
    expect(bike.color).toEqual("red");
  });

  it("has a model year", function() {
    expect(bike.modelYear).toEqual(2016);
  });

  it("reports whether or not it's damaged", function() {
    expect(bike.isDamaged()).toEqual(false);
  });

  it("add issues to a bike", function() {
    var oldNumOfIssues = bike.issues.length;
    bike.addIssues("broken wheel");
    expect(bike.issues.length).toEqual(oldNumOfIssues += 1);
  });

  it("repairs all issues", function() {
    bike.repairAll();
    expect(bike.issues.length).toEqual(0);
  });
});
