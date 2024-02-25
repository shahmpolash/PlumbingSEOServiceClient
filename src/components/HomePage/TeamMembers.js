import React, { useEffect, useState } from 'react';

const TeamMembers = () => {

  const [teamtext, setTeamText] = useState([]);

  const [teamitems, setsetTeammember] = useState([]);


  useEffect(() => {
    fetch(`https://plumbingseoservice-e14c7ccb325f.herokuapp.com/teamstext`)
      .then((res) => res.json())
      .then((info) => setTeamText(info));
  }, []);

  useEffect(() => {
    fetch(`https://plumbingseoservice-e14c7ccb325f.herokuapp.com/teamitems`)
      .then((res) => res.json())
      .then((info) => setsetTeammember(info));
  }, []);



  return (
    <>
      <section className="team-area bg-top-center overflow-hidden space">
        <div className="container">
          {
            teamtext.map(t=><div className="title-area text-center">
            <span className="sub-title">{t.teamText}</span>
            <h2 className="sec-title">{t.teamHeading}</h2>
          </div> )
          }
          
          <div className="row slider-shadow th-carousel teamSlide1" id="teamSlide1" data-slide-show={4} data-lg-slide-show={3} data-md-slide-show={2} data-sm-slide-show={2} data-xs-slide-show={1} data-arrows="true">
           {
            teamitems.map(m=> <div className="col-sm-6 col-lg-4 col-xxl-3">
            <div className="th-team team-box wow fadeInUp">
              <div className="team-img">
                <img src={m.teamMemberImg} alt="Team" />
              </div>
              <h3 className="box-title">{m.teamMemberName}</h3>
              <span className="team-desig">{m.teamMemberTitle}</span>

            </div>
          </div>)
           }
            
            
       
          
          

          </div>
        </div>
      </section>


    </>
  );
};

export default TeamMembers;