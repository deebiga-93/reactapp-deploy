import React, { Component } from 'react';
import Widecard from '../Components/widecard';
class Education extends Component {
render() {
return (
<div className="condiv">
<h1 className="subtopic">My Education</h1>
<Widecard title="Master's in Business Adminstration" where="Anna University" from="August 2015" to="May 2017" CGPA="7.56"/>
<Widecard title="Bachelor's Computer science and engineering" where="Anna university" from="2011" to="2015" CGPA="7.45"/>
</div>
)
}
}
export default Education