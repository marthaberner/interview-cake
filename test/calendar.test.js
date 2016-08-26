var assert = require('assert');
var funcs = require('../calendar');

describe('Calendar', function () {
  describe('#meetingsShouldBeCondensed', function () {
    it('should not be condensed', function () {
      var input1 = {startTime: 0, endTime: 1}
      var input2 = {startTime: 3, endTime: 5}

      assert.deepEqual(funcs.meetingsShouldBeCondensed(input1, input2), false);
    })
    it('should be condensed', function () {
      var input1 = {startTime: 3, endTime: 5}
      var input2 = {startTime: 4, endTime: 8}
      var expected = {startTime: 3, endTime: 8}
      assert.deepEqual(funcs.meetingsShouldBeCondensed(input1, input2), expected)
    });
  })
  describe('Sort Meetings', function () {
    it('#sortMeetingsByStartTime', function () {
      var input = [
        {startTime: 0,  endTime: 1},
        {startTime: 3,  endTime: 5},
        {startTime: 4,  endTime: 8},
        {startTime: 10, endTime: 12},
        {startTime: 9,  endTime: 10},
      ]
      var expected = [
        {startTime: 0, endTime: 1},
        {startTime: 3, endTime: 5},
        {startTime: 4, endTime: 8},
        {startTime: 9, endTime: 10},
        {startTime: 10, endTime: 12}
       ]
       assert.deepEqual(funcs.sortMeetingsByStartTime(input), expected);
    })
  })
  xit('#condenseMeetingTimes', function () {
    var input =   [
      {startTime: 0,  endTime: 1},
      {startTime: 3,  endTime: 5},
      {startTime: 4,  endTime: 8},
      {startTime: 10, endTime: 12},
      {startTime: 9,  endTime: 10},
    ]
    var expected =   [
      {startTime: 0, endTime: 1},
      {startTime: 3, endTime: 8},
      {startTime: 9, endTime: 12},
    ]
    assert.equal(funcs.condenseMeetingTimes(input), expected);
  })
})
