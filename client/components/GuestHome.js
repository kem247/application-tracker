import React from 'react'

export default class GuestHome extends React.Component {
  render() {
    return (
      <div style={{textAlign: 'center'}}>
        <h1
          className="corb"
          style={{
            marginTop: '3vw',
            marginBotton: '0vw',
            paddingBottom: '0vw',
            color: '#3c70c0'
          }}
        />
        <h2 className="corb" style={{color: '#3c70c0'}}>
          {/* Well, hello there! <br />
          You must be hungry! */}
          Welcome to Inclusion Application Tracker!
        </h2>
        {/* <br />

        <br /> */}
        {/* <img src="/tasty.jpg" style={{marginBottom: '2vw'}} /> */}
      </div>
    )
  }
}
