var clockhands = require("../clockhands");

describe("a clockhand's", function(){

  describe("1:00 angle method", function(){
    it("should return 0 degrees", function(){
      var value = clockhands.divide( 360, 12 );
      expect( value ).toBe( 30 );
    })
  })
})
