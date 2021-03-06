import React from "react"
import { Parallax } from 'react-scroll-parallax';
import JSONData from '../data/scheduleData.json'
import scheduleTableStyles from '../styles/schedule-table.module.css'


export default class ScheduleTable extends React.Component {

  constructor(props) {
    super();
    this.state = {
      dayIndex: 0,
      width: 0, 
      height: 0
    };
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);

  }

  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener('resize', this.updateWindowDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowDimensions);
  }

  updateWindowDimensions() {
    this.setState({ width: window.innerWidth, height: window.innerHeight });
  }

  setDay(index) {
    this.setState({ dayIndex: index })
  }

  render() {
    return (
      this.state.width > 700 ? 
        <Parallax x={[-10, 10]}>
        {JSONData.map((event, index) =>
          <div className={scheduleTableStyles.dayButton}>
            <a
              onClick={() => this.setDay(index)}
              className={`btn btn-primary ${index === this.state.dayIndex ? scheduleTableStyles.currentButton : scheduleTableStyles.filler} px-5 my-2 ml-0 text-left js-ht-download-link`}
            >
              {event.day}
            </a>
          </div>)}
        <table className={`table table-hover table-primary ${scheduleTableStyles.scheduleTable}`}>
          <thead style={{ border: "none" }}>
            <th style={{ border: "none" }}>Event Name</th>
            <th style={{ border: "none" }}>Host</th>
            <th style={{ border: "none" }}>Time Block</th>
          </thead>
          <tbody>
            {JSONData[this.state.dayIndex].events.map((event, index) =>
              <tr>
                <td>{event.name}</td>
                <td>{event.host}</td>
                <td>{event.timeBlock}</td>
              </tr>

            )}
          </tbody>
        </table>
      </Parallax>: <div>{JSONData.map((event, index) =>
          <div className={scheduleTableStyles.dayButton}>
            <a
              onClick={() => this.setDay(index)}
              className={`btn btn-primary ${index === this.state.dayIndex ? scheduleTableStyles.currentButton : scheduleTableStyles.filler} px-5 my-2 ml-0 text-left js-ht-download-link`}
            >
              {event.day}
            </a>
          </div>)}
        <table className={`table table-hover table-primary ${scheduleTableStyles.scheduleTable}`}>
          <thead style={{ border: "none" }}>
            <th style={{ border: "none" }}>Event Name</th>
            <th style={{ border: "none" }}>Host</th>
            <th style={{ border: "none" }}>Time Block</th>
          </thead>
          <tbody>
            {JSONData[this.state.dayIndex].events.map((event, index) =>
              <tr>
                <td>{event.name}</td>
                <td>{event.host}</td>
                <td>{event.timeBlock}</td>
              </tr>

            )}
          </tbody>
        </table>
        </div>
    )
  }
}
