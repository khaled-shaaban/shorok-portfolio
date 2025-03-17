export const formatTime = (date: string | Date) => {
    var d = new Date(date),
      hour = '' + (d.getHours()),
      minute = '' + d.getMinutes()

  if (hour.length < 2) {
    hour = '0' + hour
  }
  if (minute.length < 2) {
    minute = '0' + minute
  }

  return [hour, minute].join(':')
}