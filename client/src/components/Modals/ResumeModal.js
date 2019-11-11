import React, {useContext, useEffect} from 'react';
import { GlobalContext } from '../../context/GlobalState';
import { PrinterIcon } from '../Icons';

export const ResumeModal = () => {

  const context = useContext(GlobalContext);

  //this prevents scrolling of the body when modals are open
  useEffect(() => {
      context.state.showResumeModal ? document.body.style.overflow = 'hidden' : document.body.style.overflow = 'unset';
  }, [context.state.showResumeModal]);

  return (
    <GlobalContext.Consumer>
      {context => {
        const showHide = context.state.showResumeModal ? 'modal modal--display' : 'modal modal--hidden'
        return (
          <div className={showHide}>
            <div className='modal__main'>
              <h2 className='modal__header resume__header'>My Resume</h2>
              <div className='modal__body'>

                <div className='resume__section'>
                  <h4 className="resume__section-head">Summary</h4>
                  <div className="resume__section-text">
                    <p>Detail-oriented full stack Software Engineer and Certified Usability Analyst passionate about creating
                      mobile responsive web applications with excellent design and usability. Highly skilled in Agile methodology. Strong communicator and ongoing learner.
                    </p>
                  </div>
                </div>

                <div className='resume__section'>
                  <h4 className='resume__section-head'>Skills</h4>
                  <div className='resume__section-text'>
                    <table className='resume__table'>
                      <thead className='resume__table-head'>
                        <tr>
                          <th>Front End</th>
                          <th>Libraries / Frameworks</th>
                          <th>Back End / Database</th>
                          <th>Other</th>
                        </tr>
                      </thead>
                      <tbody className='resume__table-body'>
                        <tr>
                          <td>HTML5<br />CSS3<br />JavaScript (ES6)<br />Sass<br />.NET Core</td>
                          <td>React<br />jQuery<br />Materialize<br />Bootstrap<br />Handlebars</td>
                          <td>Node / NPM<br />Express<br />C#<br />MongoDB<br />MySQL / SQL<br />REST/JSON API</td>
                          <td>GitHub<br />Slack<br />Zoom<br />Trello<br />VS Code<br />Visual Studio</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                <div className='resume__section'>
                  <h4 className='resume__section-head'>Certifications</h4>
                  <div className='resume__section-text'>
                    <p>
                      University of Utah<br />
                      Full Stack Web Development Certification
                    </p>
                    <p>
                      Human Factors International<br />
                      Certified Usability Analyst (#2013-4550)
                    </p>
                    <p>
                      Project Management Institute<br />
                      Certified Associate in Project Management (#2212176)
                    </p>
                  </div>
                </div>

                <div className='resume__section'>
                  <h4 className='resume__section-head'>Professional Experience</h4>

                  <div className='resume__section-text'>
                    <div className='margin-top-small'>
                      <h5>Front End Developer<br />
                        Salt Lake County | 2019-Present</h5>
                    </div>
                    <div>
                      <p>Part of the team responsible for implementing a new multi-county property assessment software for Salt Lake County Assessor's office.</p>
                      <ul className='resume__list'>
                        <li>
                          Conducted manual user testing of the new system.
                        </li>
                        <li>
                          Wrote user documentation and How To guides for software’s end users.
                        </li>
                        <li>
                          Built bridge systems to compensate for unique items needed by Salt Lake County that are not needed by less populated counties in the state.
                        </li>
                      </ul>  
                    </div>
                    <div className='margin-top-small'>
                      <h5>Web Developer<br />
                        Freelance | 2019-Present</h5>
                    </div>
                    <div>
                      <p>Collaborated with clients to transform their visions and goals 
                        into beautiful and responsive websites, using modern development stacks. 
                      </p>
                      <ul className='resume__list'>
                        <li>
                          Build mock-ups for customer approval during the early stages of development.
                        </li>
                        <li>
                          Provide continual updates and weekly check-ins with clients to ensure a high level of understanding of the development process.
                        </li>
                        <li>
                          Design a unique brand and aesthetics for their websites.
                        </li>
                        <li>
                          Provide on going support and additional feature implementation.
                        </li>
                      </ul>
                    </div>
                    <div className='margin-top-small'>
                      <h5>Project Management Support and Special Projects <br />
                        Verizon | 2016-2018</h5>
                    </div>
                    <div>
                      <p>Tracked and monitored Associate Director’s team’s projects, maintaining yearly
                        roadmap of projects, providing
                        monthly, yearly and ad hoc reports of our team’s accomplishments. Reviewed
                        potential
                        new technology for team use.
                      </p>
                      <ul className='resume__list'>
                        <li>Heightened the visibility and accountability with leadership for team’s
                          projects by tracking and reporting
                          out on my manager’s teams project status, work in progress and work
                          completed on
                          a weekly, monthly, and yearly basis.</li>
                        <li>Improved yearly roadmap awareness by owning and maintaining team’s
                          roadmap, working with managers to ensure their
                          work was completed on time, or monitoring any delays or roadblocks to
                          projects.</li>
                        <li>
                          Increased awareness and knowledge of Robotic Process Automation and
                          Artificial Intelligence with team by evaluating
                          the feasibility of these technologies to use on team’s back office
                          processes; wrote business case, defined use cases,
                          vetted and interviewed potential vendors, and presented findings back to
                          the team.
                        </li>
                      </ul>
                    </div>

                    <div className='margin-top-small'>
                      <h5>Product Manager<br />
                        Verizon | 2011-2016</h5>
                    </div>
                    <div>
                      <p>Managed 8-10 internal tools used by over 30,000 front line representatives which
                        included implementing changes based on
                        business needs, reviewing and implementing user feedback, communication and
                        training
                        on tool updates. Created process
                        maps and flows from different reference materials into one guided flow for
                        users.
                      </p>
                      <ul className='resume__list'>
                        <li>Reduced call handle time, on average 10-15 seconds per call, and
                            increased
                            user
                            experience by creating smarter versions
                            of several guided flow tools, incorporating account specific
                            information,
                            via billing account APIs, directly into the tool
                            where it was needed.</li>
                        <li>Enhanced user experience by redesigning an our information portal to
                            allow
                            for easier access to information and the
                            ability to customize the information they saw.</li>
                        <li>Elevated First Call Resolution and representative understanding on new
                            products or services by collaborating with subject
                            matter experts during launches to create or update tools that provided
                            relevant and accessible information.</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className='resume__section'>
                  <h4 className='resume__section-head'>Education</h4>
                  <div className='resume__section-text'>
                    <p>
                      University of Wyoming; Laramie, WY<br />
                      Completed coursework towards Bachelor of Arts in Communication
                    </p>
                  </div>
                </div>
              </div>

              <div className='modal__footer margin-top-small'>
                <a className='link resume__link' href='https://drive.google.com/file/d/1hB0AoGsu32JdPabVup_wFEPWvfgFx_x4/view?usp=sharing' target='_blank' rel='noopener noreferrer'><PrinterIcon /></a>
                <button className='btn btn__primary modal__button' onClick={context.hideModal}>Close</button>
              </div>
            </div>
          </div>
        )
      }}
    </GlobalContext.Consumer>
  );
};

// export default ResumeModal;