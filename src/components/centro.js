import React from 'react';
import { SketchPicker } from 'react-color';

class Component extends React.Component {

  render() {
    return <SketchPicker />;
  }
}
const Centro = () => {
    return (
        <div className="centro px-4 py-5 my-5 text-center">
        <img className="d-block mx-auto mb-4" src="https://static.vecteezy.com/system/resources/thumbnails/000/210/703/small/vinyl_4-01.jpg" alt="" width="90" height="90" />
        <h1 className="display-5 fw-bold">Caco Music</h1>
        <div className="col-lg-6 mx-auto">
          <p className="lead mb-4">Online shopping from a great selection at CDs & Vinyl Store. Shop our huge collection of vinyl records at Urban Outfitters. Find a classic vinyl record to fit your mood with punk, hip-hop, and alternative artists.</p>
          <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
            <button type="button" className="btn btn btn-lg px-4 gap-3"style={{background: "#e08763"}}>Primary button</button>
            <button type="button" className="btn btn-outline-secondary btn-lg px-4">Secondary</button>
          </div>
        </div>
      </div>
    )
}

export default Centro;