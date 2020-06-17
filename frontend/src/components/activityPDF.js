import React, { useState, useEffect, useCallback } from 'react'
import { Page, Text, Document, StyleSheet, View } from '@react-pdf/renderer'
import PropTypes from 'prop-types'
import axios from 'axios'
import Moment from 'moment';
import { extendMoment } from 'moment-range';


export default function PDF(props) {
  const BORDER_COLOR = '#bfbfbf'
  const BORDER_STYLE = 'solid'
  const COL1_WIDTH = 10
  const COLN_WIDTH = (100 - COL1_WIDTH) / 3
  const styles = StyleSheet.create({
    body: {
      paddingTop: 30,
      paddingBottom: 65,
      paddingHorizontal: 35,
      fontFamily: 'Times-Roman'
    },
    title: {
      fontSize: 18,
      textAlign: 'center',
      marginBottom: 10,
      fontFamily: 'Times-Roman'
    },
    helpText: {
      fontSize: 8,
      marginBottom: 10,
      color: 'grey',
      fontFamily: 'Times-Roman'
    },
    subtitle: {
      fontSize: 12,
      fontFamily: 'Times-Roman',
      marginBottom: '2%'
    },
    text: {
      fontSize: 11,
      textAlign: 'justify',
      fontFamily: 'Times-Roman',
      marginBottom: '2%'
    },
    header: {
      fontSize: 8,
      marginBottom: 20,
      textAlign: 'center',
      color: 'grey',
      fontFamily: 'Times-Roman'
    },
    table: { 
      display: "table", 
      width: "auto", 
      borderStyle: BORDER_STYLE, 
      borderColor: BORDER_COLOR,
      borderWidth: 1, 
      borderRightWidth: 0, 
      borderBottomWidth: 0 
    }, 
    tableRow: { 
      margin: "auto", 
      flexDirection: "row" 
    }, 
    tableCol1Header: { 
      width: COL1_WIDTH + '%', 
      borderStyle: BORDER_STYLE, 
      borderColor: BORDER_COLOR,
      borderBottomColor: '#000',
      borderWidth: 1, 
      borderLeftWidth: 0, 
      borderTopWidth: 0
    },     
    tableColHeader: { 
      width: COLN_WIDTH + "%", 
      borderStyle: BORDER_STYLE, 
      borderColor: BORDER_COLOR,
      borderBottomColor: '#000',
      borderWidth: 1, 
      borderLeftWidth: 0, 
      borderTopWidth: 0
    },   
    tableCol1: { 
      width: COL1_WIDTH + '%', 
      borderStyle: BORDER_STYLE, 
      borderColor: BORDER_COLOR,
      borderWidth: 1, 
      borderLeftWidth: 0, 
      borderTopWidth: 0 
    },   
    tableCol: { 
      width: COLN_WIDTH + "%", 
      borderStyle: BORDER_STYLE, 
      borderColor: BORDER_COLOR,
      borderWidth: 1, 
      borderLeftWidth: 0, 
      borderTopWidth: 0 
    }, 
    tableCellHeader: {
      margin: 5, 
      fontSize: 12,
      fontWeight: 500
    },  
    tableCell: { 
      margin: 5, 
      fontSize: 10 
    }
  });

  const [activities, setActivities] = useState([])
  const moment = extendMoment(Moment);

  useEffect(() => {
    axios
      .get('/activity', {
        headers: {
          Authorization: `JWT ${localStorage.getItem('token')}`,
        },
      })
      .then(
        (response) => {
          setActivities(response.data)
        },
        (error) => {
          console.log(error)
        }
      )
  }, [])

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

  return (
    <Document>
      <Page style={styles.body}>
        <Text style={styles.header} fixed>
          Created on {(new Date()).toString()}
        </Text>
        <Text style={styles.title}>Activity Report for {localStorage.getItem('community-name')}'s Community</Text>
        <Text style={styles.helpText}>
          All tasks in the above event for the selected dates below are shown. To view a different date range,
          please select the dates and click on the View Report button.
                </Text>
        <Text style={styles.subtitle}>
          Filtering parameters:
        </Text>
        {props.search !== '' ?
          (<Text style={styles.text}>
          Search term: {props.search}
          </Text>)
          :
          (<></>)
        }
        <Text style={styles.text}>
          Activity type: {props.activity_type === 'Filter by Activity Type' ? ('All') : (props.activity_type)}
        </Text>
        <Text style={styles.text}>
          Start date: {props.start_month} {props.start_day}, {props.start_year}
        </Text>
        <Text style={styles.text}>
          End date: {props.end_month} {props.end_day}, {props.end_year}
        </Text>
        <View style={styles.table}>
          <View style={styles.tableRow}>
            <View style={styles.tableCol}>
              <Text style={styles.tableCell}>Activity</Text>
            </View>
            <View style={styles.tableCol}>
              <Text style={styles.tableCell}>Time</Text>
            </View>
            <View style={styles.tableCol}>
              <Text style={styles.tableCell}>Status</Text>
            </View>
            <View style={styles.tableCol}>
              <Text style={styles.tableCell}>Avg. Volunteer Time/Person (Requested)</Text>
            </View>
            <View style={styles.tableCol}>
              <Text style={styles.tableCell}>Avg. Volunteer Time/Person (Actual)</Text>
            </View>
          </View>
          {activities.filter(
            (a) =>
              (props.search === '' || (a.title).toLowerCase().includes(props.search.toLowerCase()))
              &&
              (props.activity_type === 'Filter by Activity Type' || a.activity_type === props.activity_type)
              &&
              (moment().range(
                moment(props.start_year + '-' + monthMap[props.start_month] + '-' + props.start_day, 'YYYY-MM-DD'), 
                moment(props.end_year + '-' + monthMap[props.end_month] + '-' + props.end_day, 'YYYY-MM-DD'))
                .contains(moment(a.start_time.substr(0, 10), 'YYYY-MM-DD'))
              )
            ).length > 0 ? (
              activities.filter(
                (a) =>
                  (props.search === '' || (a.title).toLowerCase().includes(props.search.toLowerCase()))
                  &&
                  (props.activity_type === 'Filter by Activity Type' || a.activity_type === props.activity_type)
                  &&
                  (moment().range(
                    moment(props.start_year + '-' + monthMap[props.start_month] + '-' + props.start_day, 'YYYY-MM-DD'), 
                    moment(props.end_year + '-' + monthMap[props.end_month] + '-' + props.end_day, 'YYYY-MM-DD'))
                    .contains(moment(a.start_time.substr(0, 10), 'YYYY-MM-DD'))
                  )              )
                .map((a) => (
                  <View style={styles.tableRow} key={a.id}>
                    <View style={styles.tableCol}>
                      <Text style={styles.tableCell}>{a.activity_type}: {a.title}</Text>
                    </View>
                    <View style={styles.tableCol}>
                      <Text style={styles.tableCell}>{
                        moment(a.start_time).format('LL')}{' '}
                        between {moment(a.start_time).add(new Date(a.start_time).getTimezoneOffset(), 'm').format('LT')}{' '}
                        and {moment(a.end_time).add(new Date(a.start_time).getTimezoneOffset(), 'm').format('LT')}
                      </Text>
                    </View>
                    <View style={styles.tableCol}>
                      <Text style={styles.tableCell}>
                        {a.est_hours_per_volunteer} hours <br />{Math.round(a.est_minutes_per_volunteer)} minutes
                      </Text>
                    </View>
                    <View style={styles.tableCol}>
                        {a.actual_hours_per_volunteer !== 0 && a.actual_minutes_per_volunteer !== 0  ?
                          <Text style={styles.tableCell}>{a.actual_hours_per_volunteer} hours {Math.round(a.actual_minutes_per_volunteer)} minutes</Text>
                          :
                          <Text style={styles.tableCell}>No volunteers have signed-up</Text>
                        }
                    </View>
                  </View>
                ))
            ) : (
              <Text style={styles.text}>
                No activities match this search.
              </Text>
            )}
        </View>
      </Page>
    </Document>
  )
}

PDF.propTypes = {
  activity_type: PropTypes.string.isRequired,
  start_day: PropTypes.string.isRequired,
  start_month: PropTypes.string.isRequired,
  start_year: PropTypes.string.isRequired,
  end_day: PropTypes.string.isRequired,
  end_month: PropTypes.string.isRequired,
  end_year: PropTypes.string.isRequired,
  search: PropTypes.string.isRequired,
}
