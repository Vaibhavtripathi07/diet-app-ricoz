import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// import Recipes from "./Components/Recipe/Recipes";
// import Signup from "./Components/Account/Signup";
import PersonalDetails from  "./Components/Pesonal_details/PersonalDetails"
// import Store from "./Components/Store/Store";
// import Workoutss from "./Components/Workouts/Workoutss";
// import Workout_Done from "./Components/Workouts/Workout_done";
// import Workoutss from "./Components/Workouts/Workoutss";
// import Home_workout from "./Components/Workouts/Home_workout";
// import payment_gateway from "./Components/Payment_gateway/payment_gateway";
import Bmi from "./Components/BMI/Bmi";
// import TBW from "./Components/TBW/TBW";
// import BmiResult from "./Components/BMI/BmiResult";
// import Course_overview from "./Screens/Course_overview";
// import Nav from "./Components/Top_Nav/Nav";
// import Courses from "./Components/Course_overview/Courses";
// import Course_fullscreen from "./Components/Course_overview/Course_fullscreen";
// import Process_loader from "./Components/Loaders/Processing_loader";
// import Grocery_list from "./Components/Grocery/Grocery_list";

// import Store from "./Components/Store/Store";
// import Workout_fullbody from "./Components/Workouts/Workout_fullbody";
// import Workout_fullbody_Pause from "./Components/Workouts/Workout_fullbody_Pause";
// import Dropdown from "./Components/Dropdowns/Dropdown";
import Videocall from "./Components/Appointment/VideoCall";
import Store from "./Components/Store/Store";
// import MyFavourite from "./Components/MyFavourite/MyFavourite";
import MedcineTracker from "./Components/Chats/chat";
// import ProPic from "./Components/ProPic/ProPic";
// import Sleep_tracker from "./Components/Trackers/Sleep_trackers";
// import TBWresult from "./Components/TBW/TBWresult";
// import Payment_done from "./Components/Payment_gateway/Payment_done";
// import Analyzing_loader from "./Components/Loaders/Analyzing_loader";
import Appointment_overview2 from "./Components/Appointment/Appointment_overview2";
import Appointment_track from "./Components/Appointment/Appointment_track";

// import Nav from "./Components/Top_Nav/Nav";

// import Terms_of_service from "./Screens/Terms_of_service";
import LandingPage from "./Screens/LandingPage";
// import Recipe_list from "./Components/Recipe/Recipe_list";
import Recipe_step from "./Components/Recipe/Recipe_step";

import ProPic from "./Components/ProPic/ProPic";
import Recipes from "./Components/Recipe/Recipes"
import OrderOverview from "./Components/MyOrder/OrderOverview";
import OrderOverview2 from "./Components/MyOrder/OrderOverview2";
// import OrderTracker from "./Components/MyOrder/OrderTracker";
import PersonalDetails2 from "./Components/Pesonal_details/PersonalDetails2"
import ActivateMealPlan from "./Components/MyMealPlan/ActivateMealPlan"
import Password from "./Components/Password/Password"
import ChangePassword from "./Components/Password/ChangePassword";
import SentCode from "./Components/Password/SentCode";
import ProfilePicture from "./Components/ProPic/ProfilePicture";
import Tracker from "./Components/Dashboard/Trackers/Tracker";
import WaterTracker from "./Components/Trackers/main/WaterTracker";
import SleepTracker from "./Components/Trackers/main/SleepTracker";
import StepTracker from "./Components/Trackers/main/StepsTracker";
import StepsTracker from "./Components/Trackers/main/StepsTracker";
import MedicineTracker from "./Components/Trackers/main/MedicineTracker";
import medicine from "./Components/Trackers/main/medicine";
import stepsTracker2 from "./Components/Trackers/main/stepsTracker2";
import MyMealPlan from "./Components/MyMealPlan/MyMealPlan";
import UnitMeasurement from "./Components/UnitMeasurement/UnitMeasurement";
import ProfileOverview from "./Components/ProPic/ProfileOverview";
import MyMealPlan2 from "./Components/MyMealPlan/Meal";
import Foodlog from "./Components/Foodlog/Foodlog";
import Snacks from "./Components/Snacks/Snacks";
import calorieProg from "./Components/Foodlog/calorieProg";
import Dates from "./Components/MyMealPlan/Dates/Dates";
import Meal from "./Components/MyMealPlan/Meal"
import Ques from "./Components/Question/Ques"
import WhoWeAre from "./Components/WhoWeAre/WhoWeAre";
import Terms_of_service from "./Screens/Terms_of_service";
// import WhoWeAre from "./Screens/WhoWeAre";
import FAQ from "./Components/FAQ/FAQs"
import Signup from "./Components/Account/Signup"
import MealPlans from "./Components/MealPlans/MealPlans"
import Home_Workout from "./Components/Workouts/Home_workout";
import Workoutss from "./Components/Workouts/Workoutss";
import Workout_fullbody from "./Components/Workouts/Workout_fullbody";
import Personal_Info from "./Components/Personal_Info/Personal_Info";
import Courses from "./Components/Courses/Cours";
import TBW from "./Components/TBW/TBW";
import Accordion from "./Components/ProPic/Accordion";
import VideoCall from "./Components/Appointment/VideoCall";
import MyOrder from "./Components/MyOrder/MyOrder";
import Login from "./Components/Account/Login";

import ConsultationForm from "./Components/Consultation/ConsultationForm";
import Consultation from "./Components/Consultation/Consulatation";
import Workout_fullbody_Pause from "./Components/Workouts/Workout_fullbody_Pause"
import Workout from "./Components/Workouts/Workout";
import Workout_Done from "./Components/Workouts/Workout_Done";
import FullBodyWorkoutStart from "./Components/Workouts/FullBodyWorkoutStart";
import Recipe_list from "./Components/Recipe/Recipe_list";
import Grocery_list from "./Components/Recipe/Grocery_list";
import MajorRecipe from "./Components/Recipe/MajorRecipe";
import Product_Overview from "./Components/Store/Product_Overview";  
import Payment_gateway from "./Components/Store/Payment_gateway/payment_gateway";  
import Payment_done from "./Components/Store/Payment_gateway/Payment_done";
import course from "./Components/Courses/Course";
import Course_fullscreen from "./Components/Course_overview/Course_fullscreen"
import Course2 from "./Components/Courses/Course2";
import COURCES from "./Components/Course_overview/COURCES";
import Courses3 from "./Components/Course_overview/Courses3"; 
import Courses_main from "./Components/Course_overview/Courses_main"; 
import Appointment_overview from "./Components/Appointment/Appointment_overview";
import chat from "./Components/Chats/chat"
import MealPlans2 from "./Components/MealPlans/MealPlans2";
import TBWresult from "./Components/TBW/TBWresult";
import Apppointment3 from "./Components/Appointment/Apppointment3";
import Result from "./Components/Result/Result";




const App = () => {
  return (
    <>
      <Router>
        <Routes>
        <Route path="/landingPage" Component={Login} />
          <Route path="" Component={LandingPage} />
          <Route path="/MyAccount" Component={Apppointment3} />
          <Route path="/SignUp" Component={Signup} />
          <Route path="/Login" Component={Login} />
          <Route path="/Recipes" Component={Recipes}/>
          <Route path="/Recipes2" Component={MajorRecipe}/>
          <Route path="/Grocerylist" Component={Grocery_list}/>
          <Route path="/Store" Component={Store} />
          <Route path="/ProductOverView" Component={Product_Overview} />
          <Route path="/Payment" Component={Payment_gateway} />
          <Route path="/Payment_Done" Component={Payment_done} />
          <Route path="/Courses" Component={COURCES} />
          {/* <Route path="/OurService" Component={} /> */}
          <Route path="/StartYourJourney" Component={Videocall} />
          <Route path="/WhoWeAre" Component={WhoWeAre} />
          <Route path="/MyAppointment" Component={Appointment_overview} />
          <Route path="/chat" Component={chat} />
          <Route path="/Snacks" Component={Snacks} />
          <Route path="/ChangePassword" Component={ChangePassword} />
          <Route path="/stepTracker2" Component={stepsTracker2} />
          <Route path="/overview" Component={ProfileOverview} />
          <Route path="/Foodlog" Component={Foodlog} />
          <Route path="/MealPlan" Component={MyMealPlan} />
          <Route path="/MealPlan2" Component={Meal} />
          <Route path="/ExploreMealPlan" Component={MealPlans2} />
          <Route path="/Store" Component={Store} />
          <Route path="/TermsOfUse" Component={Terms_of_service} />
          <Route path="/FAQ" Component={FAQ} />
          <Route path="/MealPlans" Component={Ques} />
          <Route path="/Result" Component={Result} />
          <Route path="/Workouts" Component={Workoutss} />
          <Route path="/fullbody" Component={Home_Workout} />
          <Route path="/ProPic" Component={ProPic} />
          <Route path="/ProfilePic_edit" Component={ProfilePicture} />
          <Route path="/MyApppointment" Component={Appointment_overview2} />
          <Route path="/videoCall" Component={VideoCall} />
         <Route path="/Order" Component={MyOrder}/>
          <Route path="/OrderOverview" Component={OrderOverview2} />
          <Route path="/Trackers" Component={Tracker}/>
          <Route path="/changePass" Component={SentCode} />
          <Route path="/WaterTracker" Component={WaterTracker} />
          <Route path="/StepsTracker" Component={StepsTracker} />
          <Route path="/MedicineTracker" Component={MedicineTracker} />
          <Route path="/SleepTracker" Component={SleepTracker} />
          <Route path="/Consultation" Component={Consultation}/>
          <Route path="/ConsultationForm" Component={ConsultationForm}/>
          <Route path="/WorkoutFullbody" Component={FullBodyWorkoutStart}/>
          <Route path="/Workout_Fullbody2" Component={Workout_Done}/>
          {/* <Route path="/changePassword" Component={ChangePassword} /> */}
          <Route path="/changePassword" Component={PersonalDetails2} />
          <Route path="/fullscreen" Component={course} />
          <Route path="/fullscreens" Component={Course_fullscreen} />
          <Route path="/Course_main" Component={Courses_main} />
          <Route path="/UnitMeasurement" Component={UnitMeasurement} />
          <Route path="/EnrollNow" Component={Payment_gateway} />
          <Route path="/chats" Component={chat} />
          <Route path="/Bmi" Component={Bmi} />
          <Route path="/TBW" Component={TBW} />
          <Route path="/TBWresult" Component={TBWresult} />
          
          


        </Routes>
      </Router>
      {/* <Recipes/> */}
    </>
  );
};

export default App;
