import React from 'react'
import { Page, Text, Document, StyleSheet } from '@react-pdf/renderer'
import PropTypes from 'prop-types'

export default function PDF(props) {
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
          fontFamily: 'Times-Roman'
        },
        text: {
          fontSize: 11,
          textAlign: 'justify',
          fontFamily: 'Times-Roman'
        },
        header: {
          fontSize: 8,
          marginBottom: 20,
          textAlign: 'center',
          color: 'grey',
          fontFamily: 'Times-Roman'
        }
    });
    
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
                <Text style={styles.text}>
                    Activity type: {props.activity_type === 'Filter by Activity Type' ? ('All') : (props.activity_type)}
                </Text>
                <Text style={styles.text}>
                    Start date: {props.start_month} {props.start_day}, {props.start_year}
                </Text>
                <Text style={styles.text}>
                    End date: {props.end_month} {props.end_day}, {props.end_year}
                </Text>
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
}
  