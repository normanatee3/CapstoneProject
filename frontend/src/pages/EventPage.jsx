import React, { useState, useEffect } from 'react'
import NewEvent from './newCrud/NewEvent'
import axios from 'axios'
import EditEvent from './editCrud/EditEvent'

function EventPage() {
  const [show, setShow] = useState(false)
  const [showEdit, setShowEdit] = useState(false)
  const [events, setEvents] = useState(false)
  const [activeEvent, setActiveEvent] = useState(false)
  const [refresh, setRefresh] = useState(false)



  const showEventForm = () => {
    setShow(!show)
  }
  const closeEditEventForm = () => {
    setShowEdit(!showEdit)
  }
  const openEditForm = (e) => {
    setShowEdit(!showEdit)
    setActiveEvent(e)
  }
  const refreshFormPage = () => {
    setRefresh(!refresh)
  }

  useEffect(() => {
    axios.get('/api/events/allEvents').then((res) => {
      setEvents(res.data.data)
    })
  }, [showEdit, show, refresh])

  const deleteEvent = (e) => {
    axios.delete(`/api/events/${e}`).then(() => {
      refreshFormPage()
    })
  }


  return (
    <div className='fullPage'>
      <div className="titleBanner">
        {/* title card */}
        <div className="titleImage"></div>
        <div className="titleText">

          <h1>UPCOMING EVENTS</h1>
          <h3> See opportunities/activities open for our members.</h3>
        </div>
      </div>
      {show ? <>
        <NewEvent showEventForm={showEventForm} />
      </>
        :
        <>

          {/* new event button */}
          {showEdit ?
            <>
              <EditEvent activeEvent={activeEvent} closeEditEventForm={closeEditEventForm} />
            </>
            :
            <>
              <br />
              <button onClick={showEventForm} className="button-49 button-newpost">CREATE AN EVENT</button>
              {events ? <>

                {events.map((event, i) => {
                  const fetchedDate = new Date(event.date);
                  const parsedDate = fetchedDate.toDateString();
                  const parsedTime = fetchedDate.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
                  return <>

                    <div className="eventBox">
                      <span style={{ marginLeft: "10px" }} className='eventSubText'>{event.title.toUpperCase()}</span>{" "}
                      <div>
                        <span>HOSTED BY:{" "}</span>
                        <span className='eventSubText'>{event.creator_name}</span>{" "}
                      </div>
                      <div>
                        <span>DATE:{" "}</span>
                        <span className='eventSubText'>{parsedDate}</span>{" "}
                      </div>
                      <div>
                        <span>TIME:{" "}</span>
                        <span className='eventSubText'>{parsedTime}</span>{" "}
                      </div>
                      <div className="buttonBox">

                        {event.link.length > 3 ?
                          <a
                            href={event.link}
                            target="_blank"
                            rel="noopener noreferrer"
                          >More Info</a>
                          : null}

                        <button className='buttonMini' onClick={() => { openEditForm(event) }}>EDIT</button>
                        <button className='buttonMini' onClick={() => { deleteEvent(event._id) }}>DELETE</button>
                      </div>
                    </div>
                  </>
                })}

              </> : null}
            </>}

        </>
      }
    </div>
  )
}

export default EventPage