function condenseMeetingTimes(meetings) {
  meetings = sortMeetingsByStartTime(meetings);
  var results = [];
  for(var i=0; i<meetings.length; i++) {
    if(i < meetings.length-1){
     var status = meetingsShouldBeCondensed(meetings[i], meetings[i+1]);
     status ? results.push(status) && i++ : results.push(meetings[i]);
    }
  }
  return results;
}

function sortMeetingsByStartTime(meetings) {
  return meetings.sort(function (a, b) {
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
}

function meetingsShouldBeCondensed(meeting1, meeting2) {
  return meeting1.endTime >= meeting2.startTime ?
    {startTime: meeting1.startTime, endTime: meeting2.endTime } : false;
}

module.exports = {
  meetingsShouldBeCondensed: meetingsShouldBeCondensed,
  sortMeetingsByStartTime: sortMeetingsByStartTime,
  condenseMeetingTimes: condenseMeetingTimes
}
