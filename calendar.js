
function sortMeetingsByStartTime(meetings) {
  meetings = meetings.sort(function (a, b) {
    if (a.startTime > b.startTime) {
      return 1;
    } else {
      return -1;
    }
    if (a.startTime < b.startTime) {
      return -1;
    }
    return 0;
    });
    return meetings
}

function checkIfShouldBeCondensed(meetings) {
  return meetings[0].endTime > meetings[1].startTime ?
    [{startTime: meetings[0].startTime, endTime: meetings[1].endTime }] : meetings;
}

module.exports = {
  checkIfShouldBeCondensed: checkIfShouldBeCondensed,
  sortMeetingsByStartTime: sortMeetingsByStartTime
}
