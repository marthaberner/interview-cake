
function checkIfShouldBeCondensed(meetings) {
  return meetings[0].endTime > meetings[1].startTime ?
    [{startTime: meetings[0].startTime, endTime: meetings[1].endTime }] : meetings;
}

module.exports = {
  checkIfShouldBeCondensed: checkIfShouldBeCondensed
}
