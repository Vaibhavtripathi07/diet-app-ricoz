// import Footer from "../Components/Footer/Footer";
import Nav from "../Components/Top_Nav/Nav";
import Welcome from "../Components/Welcome/Welcome";
import Feature from "../Components/Features/Feature"
import Health_tracker from "../Components/Trackers/Health_tracker";
import Mealplan from "../Components/Welcome/Mealplan";
import Workout from "../Components/Workouts/Workout";
import Services from "../Components/Welcome/Services";
import Testimonial from "../Components/Welcome/Testimonial";
import Faq from "../Components/Welcome/Faq";
import Footer from "../Components/Footer/Footer";

const LandingPage = () => {
  return (
    <>
      <div className="relative top-0 bg-beige  h-[9258px] overflow-hidden text-left text-5xl text-dark-green-color font-open-sans">
        <div className="absolute top-[128px] left-[756px] bg-whitesmoke w-[756px] h-[9130px]" />
        <Nav />
        <Welcome />
        <Feature/>
        <Health_tracker/>
        <Mealplan/>
        <Workout/>
        <Services/>
        <Testimonial/>
        <Faq/>
        <Footer/>
      </div>
    </>
  );
};

export default LandingPage;
