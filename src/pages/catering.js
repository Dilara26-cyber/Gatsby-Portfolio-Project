import React from "react"
import Layout from "../components/Layout"
import "../assets/Form.scss"
import SEO from "../components/SEO"
const catering = () => {
  let date = new Date()
  let day = date.getDate()
  let month = date.getMonth() + 1
  let year = date.getUTCFullYear()
  if (day < 10) {
    day = "0" + day
  }
  if (month < 10) {
    month = "0" + month
  }
  let minDate = `${year}-${month}-${day}`
  console.log(minDate)
  return (
    <>
      <Layout>
        <SEO title="Catering" />
        <section className="form">
          <h1>CONTACT US ABOUT YOUR CATERING INQUIRY</h1>
          <form action="#">
            <div className="email">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Email"
                required
              />
            </div>
            <div className="name input__container">
              <label htmlFor="firstName">First Name</label>
              <input
                name="firstName"
                id="firstName"
                placeholder="First Name"
                required
              />
              <label htmlFor="lastName">Last Name</label>
              <input
                name="lastName"
                id="lastName"
                placeholder="Last Name"
                required
              />
            </div>
            <div className="phone__company input__container">
              <label htmlFor="phoneNum">Phone Number</label>
              <input
                type="tel"
                name="phone"
                id="phoneNum"
                placeholder="Phone Number"
                required
              />
              <label htmlFor="company">Company</label>
              <input
                name="company"
                id="company"
                placeholder="Company"
                required
              />
            </div>
            <div className="address input__container">
              <label htmlFor="addressOne">Address 1</label>
              <input
                name="addressOne"
                id="addressOne"
                placeholder="Address 1"
                required
              />
              <label htmlFor="addressTwo">
                Address 2 <em>- Optional</em>
              </label>
              <input
                name="addressTwo"
                id="addressTwo"
                placeholder="Address 2 - Optional"
              />
            </div>
            <div className="city__state input__container">
              <label htmlFor="city">City</label>
              <input name="city" id="city" placeholder="City" required />
              <label htmlFor="state">State</label>
              <select id="state" name="state" required>
                <option value="">State</option>
                <option value="Alabama">Alabama</option>
                <option value="Alaska">Alaska</option>
                <option value="Arizona">Arizona</option>
                <option value="Arkansas">Arkansas</option>
                <option value="California">California</option>
                <option value="Colorado">Colorado</option>
                <option value="Connecticut">Connecticut</option>
                <option value="Delaware">Delaware</option>
                <option value="District Of Columbia">
                  District Of Columbia
                </option>
                <option value="Florida">Florida</option>
                <option value="Georgia">Georgia</option>
                <option value="Idaho">Idaho</option>
                <option value="Hawaii">Hawaii</option>
                <option value="Illinois">Illinois</option>
                <option value="Indiana">Indiana</option>
                <option value="Iowa">Iowa</option>
                <option value="Kansas">Kansas</option>
                <option value="Kentucky">Kentucky</option>
                <option value="Louisiana">Louisiana</option>
                <option value="Maine">Maine</option>
                <option value="Maryland">Maryland</option>
                <option value="Massachusetts">Massachusetts</option>
                <option value="Michigan">Michigan</option>
                <option value="Minnesota">Minnesota</option>
                <option value="Mississippi">Mississippi</option>
                <option value="Missouri">Missouri</option>
                <option value="Montana">Montana</option>
                <option value="Nebraska">Nebraska</option>
                <option value="Nevada">Nevada</option>
                <option value="New Hampshire">New Hampshire</option>
                <option value="New Jersey">New Jersey</option>
                <option value="New Mexico">New Mexico</option>
                <option value="New York">New York</option>
                <option value="North Carolina">North Carolina</option>
                <option value="North Dakota">North Dakota</option>
                <option value="Ohio">Ohio</option>
                <option value="Oklahoma">Oklahoma</option>
                <option value="Oregon">Oregon</option>
                <option value="Pennsylvania">Pennsylvania</option>
                <option value="Rhode Island">Rhode Island</option>
                <option value="South Carolina">South Carolina</option>
                <option value="South Dakota">South Dakota</option>
                <option value="Tennessee">Tennessee</option>
                <option value="Texas">Texas</option>
                <option value="Utah">Utah</option>
                <option value="Vermont">Vermont</option>
                <option value="Virginia">Virginia</option>
                <option value="Washington">Washington</option>
                <option value="West Virginia">West Virginia</option>
                <option value="Wisconsin">Wisconsin</option>
                <option value="Wyoming">Wyoming</option>
              </select>
            </div>
            <div className="zip__evDate input__container">
              <label htmlFor="zip">Zip Code</label>
              <input name="zip" id="zip" placeholder="Zip Code" required />
              <label htmlFor="event">Event Date</label>
              <input
                type="date"
                name="event"
                id="event"
                placeholder="Event Date"
                min={minDate}
                required
              />
            </div>
            <div className="time input__container">
              <label htmlFor="startTime">Start Time</label>
              <select id="startTime" name="startTime" required>
                <option value="">Start Time</option>
                <option value="11:30 PM">11:30 PM</option>
                <option value="11:00 PM">11:00 PM</option>
                <option value="10:30 PM">10:30 PM</option>
                <option value="10:00 PM">10:00 PM</option>
                <option value="9:30 PM">9:30 PM</option>
                <option value="9:00 PM">9:00 PM</option>
                <option value="8:30 PM">8:30 PM</option>
                <option value="8:00 PM">8:00 PM</option>
                <option value="7:30 PM">7:30 PM</option>
                <option value="7:00 PM">7:00 PM</option>
                <option value="6:30 PM">6:30 PM</option>
                <option value="6:00 PM">6:00 PM</option>
                <option value="5:30 PM">5:30 PM</option>
                <option value="5:00 PM">5:00 PM</option>
                <option value="4:30 PM">4:30 PM</option>
                <option value="4:00 PM">4:00 PM</option>
                <option value="3:30 PM">3:30 PM</option>
                <option value="3:00 PM">3:00 PM</option>
                <option value="2:30 PM">2:30 PM</option>
                <option value="2:00 PM">2:00 PM</option>
                <option value="1:30 PM">1:30 PM</option>
                <option value="1:00 PM">1:00 PM</option>
                <option value="12:30 PM">12:30 PM</option>
                <option value="12:00 PM">12:00 PM</option>
                <option value="11:30 AM">11:30 AM</option>
                <option value="11:00 AM">11:00 AM</option>
                <option value="10:30 AM">10:30 AM</option>
                <option value="10:00 AM">10:00 AM</option>
                <option value="9:30 AM">9:30 AM</option>
                <option value="9:00 AM">9:00 AM</option>
                <option value="8:30 AM">8:30 AM</option>
                <option value="8:00 AM">8:00 AM</option>
                <option value="7:30 AM">7:30 AM</option>
                <option value="7:00 AM">7:00 AM</option>
                <option value="6:30 AM">6:30 AM</option>
                <option value="6:00 AM">6:00 AM</option>
                <option value="5:30 AM">5:30 AM</option>
                <option value="5:00 AM">5:00 AM</option>
                <option value="4:30 AM">4:30 AM</option>
                <option value="4:00 AM">4:00 AM</option>
                <option value="3:30 AM">3:30 AM</option>
                <option value="3:00 AM">3:00 AM</option>
                <option value="2:30 AM">2:30 AM</option>
                <option value="2:00 AM">2:00 AM</option>
                <option value="1:30 AM">1:30 AM</option>
                <option value="1:00 AM">1:00 AM</option>
                <option value="12:30 AM">12:30 AM</option>
                <option value="12:00 AM">12:00 AM</option>
              </select>
              <label htmlFor="endTime">End Time</label>
              <select id="endTime" name="endTime" required>
                <option value="">End Time</option>
                <option value="11:30 PM">11:30 PM</option>
                <option value="11:00 PM">11:00 PM</option>
                <option value="10:30 PM">10:30 PM</option>
                <option value="10:00 PM">10:00 PM</option>
                <option value="9:30 PM">9:30 PM</option>
                <option value="9:00 PM">9:00 PM</option>
                <option value="8:30 PM">8:30 PM</option>
                <option value="8:00 PM">8:00 PM</option>
                <option value="7:30 PM">7:30 PM</option>
                <option value="7:00 PM">7:00 PM</option>
                <option value="6:30 PM">6:30 PM</option>
                <option value="6:00 PM">6:00 PM</option>
                <option value="5:30 PM">5:30 PM</option>
                <option value="5:00 PM">5:00 PM</option>
                <option value="4:30 PM">4:30 PM</option>
                <option value="4:00 PM">4:00 PM</option>
                <option value="3:30 PM">3:30 PM</option>
                <option value="3:00 PM">3:00 PM</option>
                <option value="2:30 PM">2:30 PM</option>
                <option value="2:00 PM">2:00 PM</option>
                <option value="1:30 PM">1:30 PM</option>
                <option value="1:00 PM">1:00 PM</option>
                <option value="12:30 PM">12:30 PM</option>
                <option value="12:00 PM">12:00 PM</option>
                <option value="11:30 AM">11:30 AM</option>
                <option value="11:00 AM">11:00 AM</option>
                <option value="10:30 AM">10:30 AM</option>
                <option value="10:00 AM">10:00 AM</option>
                <option value="9:30 AM">9:30 AM</option>
                <option value="9:00 AM">9:00 AM</option>
                <option value="8:30 AM">8:30 AM</option>
                <option value="8:00 AM">8:00 AM</option>
                <option value="7:30 AM">7:30 AM</option>
                <option value="7:00 AM">7:00 AM</option>
                <option value="6:30 AM">6:30 AM</option>
                <option value="6:00 AM">6:00 AM</option>
                <option value="5:30 AM">5:30 AM</option>
                <option value="5:00 AM">5:00 AM</option>
                <option value="4:30 AM">4:30 AM</option>
                <option value="4:00 AM">4:00 AM</option>
                <option value="3:30 AM">3:30 AM</option>
                <option value="3:00 AM">3:00 AM</option>
                <option value="2:30 AM">2:30 AM</option>
                <option value="2:00 AM">2:00 AM</option>
                <option value="1:30 AM">1:30 AM</option>
                <option value="1:00 AM">1:00 AM</option>
                <option value="12:30 AM">12:30 AM</option>
                <option value="12:00 AM">12:00 AM</option>
              </select>
            </div>
            <div className="people input__container">
              <label htmlFor="evType">Type of Event</label>
              <select id="evType" name="startTime" required>
                <option value="">Type of Event</option>
                <option value="Alumni">Alumni</option>
                <option value="Bachelor / Bachelorette">
                  Bachelor / Bachelorette
                </option>
                <option value="Birthday">Birthday</option>
                <option value="Cocktail Reception">Cocktail Reception</option>
                <option value="Corporate Lunch">Corporate Lunch</option>
                <option value="Engagement">Engagement</option>
                <option value="Fundraiser">Fundraiser</option>
                <option value="Graduation">Graduation</option>
                <option value="Holiday">Holiday</option>
                <option value="Meeting / Presentation">
                  Meeting / Presentation
                </option>
                <option value="Photo / Film Shoot">Photo / Film Shoot</option>
                <option value="Private Dinner">Private Dinner</option>
                <option value="Rehearsal Dinner">Rehearsal Dinner</option>
                <option value="Shower">Shower</option>
                <option value="Sporting Event">Sporting Event</option>
                <option value="Wedding">Wedding</option>
                <option value="Other">Other</option>
              </select>
              <label htmlFor="peopleNum">Number of People</label>
              <input type="number" name="peopleNum" id="peopleNum" min="1" />
            </div>
            <div className="text">
              <label htmlFor="info">Additional Information</label>
              <textarea
                placeholder="Additional Information"
                name="info"
                id="info"
                cols="30"
                rows="10"
              ></textarea>
            </div>
          </form>
          <button type="submit" className="catering__btn">
            Submit
          </button>
        </section>
      </Layout>
    </>
  )
}

export default catering
