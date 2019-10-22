import React, { Component } from 'react';
import ContentWrapper from '../Layout/ContentWrapper';
import { Card, CardBody } from 'reactstrap';
// Calendar
import HTML5Backend from 'react-dnd-html5-backend'
import { DragDropContext } from 'react-dnd'
import BigCalendar from 'react-big-calendar'
import withDragAndDrop from 'react-big-calendar/lib/addons/dragAndDrop'
import events from './Calendar.events'
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css'
import 'react-big-calendar/lib/addons/dragAndDrop/styles.css'

// Setup the localizer by providing the moment
BigCalendar.momentLocalizer(moment);

const DragAndDropCalendar = withDragAndDrop(BigCalendar)

/* eslint jsx-a11y/anchor-has-content: "off" */
class Calendar extends Component {

    constructor(props) {
        super(props)
        this.state = {
          events: events,
        }

        this.moveEvent = this.moveEvent.bind(this)
    }

    moveEvent({ event, start, end }) {
        const { events } = this.state

        const idx = events.indexOf(event)
        const updatedEvent = { ...event, start, end }

        const nextEvents = [...events]
        nextEvents.splice(idx, 1, updatedEvent)

        this.setState({
          events: nextEvents,
        })

        console.log(`${event.title} was dropped onto ${event.start}`)
    }

    selectEvent = event => {
        if(event.url)
            alert(`Event can redirect to: ${event.url}`)
    };

    parseStyleProp = ({style}) => style ? { style } : {}

    resizeEvent = (resizeType, { event, start, end }) => {
        const { events } = this.state

        const nextEvents = events.map(existingEvent => {
          return existingEvent.id === event.id
            ? { ...existingEvent, start, end }
            : existingEvent
        })

        this.setState({
          events: nextEvents,
        })

        console.log(`${event.title} was resized to ${start}-${end}`)
    }

    render() {
        return (
            <ContentWrapper>
                <div className="content-heading">
                   <div>Big Calendar
                      <small>React gcal/outlook like calendar component</small>
                   </div>
                </div>
                { /* START row */ }
                <div className="calendar-app">
                    { /* START panel */ }
                    <Card className="card-default">
                        <CardBody>
                            { /* START calendar */ }
                            <DragAndDropCalendar
                                    style={{minHeight: 500}}
                                    selectable
                                    events={this.state.events}
                                    onEventDrop={this.moveEvent}
                                    resizable
                                    onEventResize={this.resizeEvent}
                                    onSelectEvent={this.selectEvent}
                                    defaultView="month"
                                    defaultDate={new Date()}
                                    eventPropGetter={this.parseStyleProp}
                                  />
                            { /* END calendar */ }
                        </CardBody>
                    </Card>
                    { /* END panel */ }
                </div>
            </ContentWrapper>
            );
    }

}

export default  DragDropContext(HTML5Backend)(Calendar);


