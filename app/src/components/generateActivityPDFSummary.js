import jsPDF from "jspdf";
import "jspdf-autotable";
// Date Fns is used to format the dates we receive
// from our API call
import Moment from 'moment';
import { extendMoment } from 'moment-range';

// define a generatePDF function that accepts a tickets argument
const generatePDFSummary = (activities, filters) => {
  // initialize jsPDF
  const doc = new jsPDF();
  const moment = extendMoment(Moment);

  // define the columns we want and their titles
  const tableColumn = ["Activity Type", "Total volunteers", "Total hours", "Total minutes"];
  // define an empty array of rows
  const tableRows = []


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
        const activityData = [
            a.activity_type,
            a.total_volunteers,
            a.total_hours,
            a.total_minutes,
        ];
        // push each activity's info into a row
        tableRows.push(activityData);
  });

  // startY is basically margin-top
  doc.autoTable(tableColumn, tableRows, { startY: 20 });
  const date = Date().split(" ");
  // we use a date string to generate our filename.
  const dateStr = date[0] + date[1] + date[2] + date[3] + date[4];
  // ticket title. and margin-top + margin-left
  doc.text("Activity Report for " + filters['start_month'] + ' ' + filters['start_day'] + ', ' + filters['start_year'] + ' to ' + filters['end_month'] + ' ' + filters['end_day'] + ', ' + filters['end_year'], 14, 15)
  // we define the name of our PDF file.
  doc.save(`heretoserve_summary_report_${dateStr}.pdf`);
};

export default generatePDFSummary;