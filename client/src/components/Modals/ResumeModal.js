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
                  <div className='resume__section-text resume__skills'>
                    <div>
                      <h5 className='resume__skills-header'>Front End</h5>
                      <p>HTML5<br />CSS3<br />JavaScript<br />Sass<br /></p>
                    </div>
                    <div>
                      <h5 className='resume__skills-header'>Libraries / Frameworks</h5>
                      <p>React<br />jQuery<br />Materialize<br />Angular<br />Sencha ExtJS</p>
                    </div>
                    <div>
                      <h5 className='resume__skills-header'>Back End / Database</h5>
                      <p>Node / NPM<br />Express<br />C# / .NET <br />MongoDB<br />SQL Server<br />REST/JSON</p>
                    </div>
                    <div>
                      <h5 className='resume__skills-header'>Other</h5>
                      <p>GitHub<br />Azure<br />CI / CD<br />VS Code<br />Visual Studio</p>
                    </div>
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
                  </div>
                </div>

                <div className='resume__section'>
                  <h4 className='resume__section-head'>Professional Experience</h4>

                  <div className='resume__section-text'>
                    <div className='margin-top-small'>
                      <h5>Web Developer<br />
                        Salt Lake County | 2019-Present</h5>
                    </div>
                    <div>
                      <p>Part of the team responsible for implementing a new multi-county property assessment SaaS used by the Salt Lake County Assessor’s office, as well as developing and maintaining tools and applications that integrate with the new software.</p>
                      <ul className='resume__list'>
                        <li>
                          Develop a variety of scripts in SQL and PowerShell to convert main frame data reports into a consumable format for the new software, as well as integrating the Assessors’ office data with other departments within the county.
                        </li>
                        <li>
                          Designed and developed a parcel review application for the Assessor's office using Angular, C# .NET Core, and SQL.
                        </li>
                        <li>
                        Provide ongoing support for parcel review application, updating as user needs change or new features are requested.
                        </li>
                        <li>
                          Refactored complicated data integrations to use Salt Lake County’s large dataset, within the SaaS C# and SQL code base, to improve speed by 600%, allowing these processes to work successfully.
                        </li>
                        <li>
                          Develop frontend user interfaces for various property types within the SaaS code base, using the Sencha ExtJS framework.
                        </li>
                        <li>
                          Write user documentation and How To guides for software’s end users, as well as assist in training features or new applications I develop. 
                        </li>
                        <li>
                          Partner with SaaS team to define requirements for new features based on the unique needs of Salt Lake County, and then often code against those requirements to implement solutions that benefit multiple counties.
                        </li>
                        <li>
                          Work closely with the SaaS provider’s quality assurance tester to define test cases for new features.
                        </li>
                        <li>
                          Responsible for communicating project status and impediments effectively during departmental scrum meetings, on a rotating basis.
                        </li>
                      </ul>  
                    </div>
                    <div className='margin-top-small'>
                      <h5>Web Developer<br />
                        Freelance | 2019-2022</h5>
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