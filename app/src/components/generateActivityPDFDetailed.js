import jsPDF from "jspdf";
import "jspdf-autotable";
// Date Fns is used to format the dates we receive
// from our API call
import Moment from 'moment';
import { extendMoment } from 'moment-range';

// define a generatePDF function that accepts a tickets argument
const generatePDF = (activities, filters) => {
  // initialize jsPDF
  const doc = new jsPDF();
  const moment = extendMoment(Moment);

  // define the columns we want and their titles
  const tableColumn = ["Activity", "Time", "Avg. Volunteer Time/Person", "Status"];
  // define an empty array of rows
  const tableRows = [];

  const monthMap = new Map()
  monthMap['January'] = 1
  monthMap['February'] = 2
  monthMap['March'] = 3
  monthMap['April'] = 4
  monthMap['May'] = 5
  monthMap['June'] = 6
  monthMap['July'] = 7
  monthMap['August'] = 8
  monthMap['September'] = 9
  monthMap['October'] = 10
  monthMap['November'] = 11
  monthMap['December'] = 12

  // for each activity pass its data into an array
  activities.forEach(a => {
    if((filters['search'] === '' || a.title.toLowerCase().includes(filters['search'].toLowerCase())) &&
       (filters['activity_type'] === 'Filter by Activity Type' || a.activity_type === filters['activity_type']) &&
       (moment().range(
        moment(filters['start_year'] + '-' + monthMap[filters['start_month']] + '-' + filters['start_day'], 'YYYY-MM-DD'),
        moment(filters['end_year'] + '-' + monthMap[filters['end_month']] + '-' + filters['end_day'], 'YYYY-MM-DD'))
        .contains(moment(a.start_time.substr(0, 10), 'YYYY-MM-DD')))) 
    {
        let time = moment(a.start_time).format('LL') + ' between ' + moment(a.start_time).add(new Date(a.start_time).getTimezoneOffset(), 'm').format('LT')
        + ' and ' + moment(a.end_time).add(new Date(a.start_time).getTimezoneOffset(), 'm').format('LT')
        let timePerPersonRequested = a.activity_type !== 'Occasion' ? a.est_hours + ' hours ' + a.est_minutes + ' minutes ' : 'N/A'
        let status = a.is_active ? 'Active' : 'Inactive'
      
        const activityData = [
          a.activity_type + ': ' + a.title,
          time,
          timePerPersonRequested,
          status
        ];
        // push each activity's info into a row
        tableRows.push(activityData);
    }
  });

  // startY is basically margin-top
  doc.autoTable(tableColumn, tableRows, { startY: 20 });
  const date = Date().split(" ");
  // we use a date string to generate our filename.
  const dateStr = date[0] + date[1] + date[2] + date[3] + date[4];
  // ticket title. and margin-top + margin-left
  // doc.text("Activity Report for " + date[0] + ', ' + date[1] + ' ' + date[2] + ', ' + date[3], 14, 15);
  doc.text("Activity Report for " + filters['start_month'] + ' ' + filters['start_day'] + ', ' + filters['start_year'] + ' to ' + filters['end_month'] + ' ' + filters['end_day'] + ', ' + filters['end_year'], 14, 15)
  // we define the name of our PDF file.
  doc.save(`heretoserve_detailed_report_${dateStr}.pdf`);
};

export default generatePDF;