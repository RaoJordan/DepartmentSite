import "./App.css"
import Header from "./components/common/header/Header"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import About from "./components/about/About"
import CourseHome from "./components/allcourses/CourseHome"
import Team from "./components/team/Team"
import ProfessorEdit from "./components/admin/ProfessorEdit"
import Blog from "./components/blog/Blog"
import Contact from "./components/contact/Contact"
import Footer from "./components/common/footer/Footer"
import Home from "./components/home/Home"
import Placement from "./components/home/placements/placement"

import RegistrationForm from "./components/facultyLogin/RegistrationForm"
import LoginForm from "./components/facultyLogin/facultyLogin"
// import FacultyList from "./components/facultyLogin/facultyDetails"


import Pricing from "./components/pricing/Pricing"
import PersonalWebsite from "./components/personalwebsite/PersonalWebsite"
// import FacultyList from "./components/facultylogin/facultydetails"
import FacultyList from "./components/team/TeamCard"
import AdminPage from "./components/admin/AdminEdit"

function App() {
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/about' component={About} />
          <Route exact path='/pricing' component={Pricing} />
          <Route exact path='/courses' component={CourseHome} />
          <Route exact path='/team' component={Team} />
          <Route exact path='/professorEdit' component={ProfessorEdit} />
          <Route exact path='/journal' component={Blog} />
          <Route exact path='/contact' component={Contact} />
          <Route exact path='./placements' component={Placement} />

          <Route exact path='/register' component={RegistrationForm} />
          <Route exact path='/login' component={LoginForm} />
          <Route exact path='/placements' component={Placement} />
          <Route exact path='/faculty/:id' component={PersonalWebsite} />
          <Route exact path='/facultyList' component={FacultyList} />
          <Route exact path='/adminPage' component={AdminPage} />
        </Switch>
        <Footer />
      </Router>
    </>
  )
}

export default App
