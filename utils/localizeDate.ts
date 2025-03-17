export const localizeDate = (date: string | Date) => {
    
  const monthNames = ["Jan", "Feb", "Mar", "Apr",
                      "May", "Jun", "Jul", "Aug",
                      "Sep", "Oct", "Nov", "Dec"]
  
  var d = new Date(date),
    month = (d.getMonth() + 1),
    day = '' + d.getDate(),
    year = d.getFullYear()

  if (day.length < 2) {
    day = '0' + day
  }

  return `${day} ${monthNames[month]} - ${year}`;
}