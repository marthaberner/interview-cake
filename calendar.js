
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

function meetingsShouldBeCondensed(meeting1, meeting2) {
  return meeting1.endTime > meeting2.startTime ?
    {startTime: meeting1.startTime, endTime: meeting2.endTime } : false;
}

module.exports = {
  meetingsShouldBeCondensed: meetingsShouldBeCondensed,
  sortMeetingsByStartTime: sortMeetingsByStartTime
}
