export default function getWeekNumber(startYear, d) {
  // Copy date so don't modify original
  d = new Date(Date.UTC(d.getFullYear(), d.getMonth(), d.getDate()));
  // Set to nearest Thursday: current date + 4 - current day number
  // Make Sunday's day number 7
  d.setUTCDate(d.getUTCDate() + 4 - (d.getUTCDay() || 7));
  // Get first day of year
  const yearStart = new Date(startYear);
  // Calculate full weeks to nearest Thursday
  
  // Return array of year and week number
  return Math.ceil(((d - yearStart) / 86400000 + 1) / 7);
}
