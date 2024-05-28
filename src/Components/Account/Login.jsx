import { useCallback } from "react";
import { Link } from "react-router-dom";
import Logo from "../../asset/Logo.png";
import Lines from "../../asset/Lines.png";
import Google_logo from "../../asset/Google_logo.png";
import Subtract from "../../asset/Subtract.png";

const Login = () => {
  const onGroupContainer3Click = useCallback(() => {
    // Please sync "LANDING" to the project
  }, []);

  const onAlreadyHaveAnClick = useCallback(() => {
    // Please sync "LogIN" to the project
  }, []);

  return (
//     <form
//       className="relative bg-whitesmoke w-[1512px] h-[982px] overflow-hidden font-sans text-5xl  xl:w-full"
//       id="SIGNUP"
//     >
//       <div className="absolute top-[0px] left-[756px] bg-whitesmoke w-[756px] h-[982px]" />
//       <div className="absolute top-[40px] left-[299px] w-[158px] h-[114px]">
//         <Link to="ProPic">
//         <img src={Logo} alt="" /></Link>
//       </div>
//       <div className="absolute top-[294px] left-[897px] w-[474px] h-7">
//         <img
//           className="absolute top-[13.5px] left-[-0.5px] w-[212px] h-px object-cover"
//           alt="line"
//           src={Lines}
//         />
//         <p
//           className="m-0 absolute top-[0px] left-[228px] text-base leading-[174.53%] font-semibold font-open-sans text-grey-color text-center inline-block w-[18px]"
//           id="or"
//         >
//           or
//         </p>
//         <img
//           className="absolute top-[13.5px] left-[262.5px] w-[212px] h-px object-cover"
//           alt="line1"
//           src={Lines}
//         />
//       </div>
//       <div
//         className="absolute top-[198px] left-[891px] w-[486px] h-[68px] cursor-pointer"
//         onClick={onGroupContainer3Click}
//       >
// {/*         <Link
//           to={"https://accounts.google.com/signin"}
//           className="[text-decoration:none] absolute top-[-1px] left-[-1px] rounded-lg bg-whitesmoke box-border w-[488px] h-[70px] border-[1px] border-solid border-grey-color"
//           id="signin"
//           target="_blank"
//         /> */}
//         <div className="absolute top-[18px] left-[100px] w-[286px] h-8">
          
//           <p
//             className="m-0 absolute font-inherit top-[0px] left-[62px] text-5xl leading-[120.03%] font-semibold  text-black text-left inline-block w-56 h-7"
//             id="sign_in"
//           >
//             Sign in with Google
//           </p>
//           <img
//             className="absolute top-[0px] left-[0px] rounded w-8 h-8 object-cover"
//             alt="Google_logo"
//             src={Google_logo}
//           />
//         </div>
//       </div>
//       <div className="absolute top-[350px] left-[891px] w-[486px] h-[102px]">
//         <label
//           className="cursor-pointer absolute font-inherit top-[0px] left-[6px] text-5xl leading-[174.53%] font-semibold text-black text-left inline-block w-[70px] h-[34px]"
//           htmlFor="Name"
//         >
//           Name
//         </label>
//         <input
//           className="placeholder:pl-3  pl-3 font-inherit bg-whitesmoke absolute top-[41px] left-[-1px] rounded-lg box-border w-[488px] h-[62px] border-[1px] border-solid border-grey-color"
//           name="text"
//           id="Name"
//           placeholder="Enter your Name"
//           type="text"
//         />
//       </div>
//       <div className="absolute top-[476px] left-[891px] w-[486px] h-[102px]">
//         <label
//           className="cursor-pointer absolute font-inherit top-[0px] left-[6px] text-5xl leading-[174.53%] font-semibold  text-black text-left inline-block w-[97px] h-[34px]"
//           htmlFor="Email-ID"
//         >
//           Email-ID
//         </label>
//         <input
//           className="placeholder:pl-pl-3  pl-3 font-inherit bg-whitesmoke absolute top-[41px] left-[-1px] rounded-lg box-border w-[488px] h-[62px] border-[1px] border-solid border-grey-color"
//           name="Email"
//           id="Email"
//           placeholder="Enter your Email-ID"
//           type="email"
//         />
//       </div>
//       <div className="absolute top-[602px] left-[891px] w-[486px] h-[102px]">
//         <label
//           className="cursor-pointer absolute font-inherit top-[0px] left-[6px] text-5xl leading-[174.53%] font-semibold  text-black text-left inline-block w-28 h-[34px]"
//           htmlFor="Password"
//         >
//           Password
//         </label>
//         <input
//           className="placeholder:pl-3  pl-3 font-inherit bg-whitesmoke absolute top-[41px] left-[-1px] rounded-lg box-border w-[488px] h-[62px] border-[1px] border-solid border-grey-color"
//           name="Password"
//           id="Password"
//           placeholder="Enter Password"
//           type="password"
//         />
//       </div>
//       <button
//         className="cursor-pointer py-7 px-[73px] bg-[transparent] absolute top-[764px] left-[1017px] rounded-2xl [background:linear-gradient(93.37deg,_rgba(175,_228,_126,_0.4),_rgba(216,_250,_185,_0.4))] overflow-hidden flex flex-row items-center justify-center border-[1px] border-solid border-palegoldenrod"
//         // autoFocus={true}
//         id="Btn"
//       >
//         <button className="cursor-pointer outline-none border-none p-0 bg-[transparent] relative text-5xl leading-[120%] font-semibold font-open-sans text-dark-green-color text-left inline-block">
//           Sign Up
//         </button>
//       </button>
//       <div className="relative rounded-[18px] w-[554px] h-[547px] bg-[url('/public/subtract@3x.png')] bg-cover bg-no-repeat bg-[top]">
//         <img
//           className="absolute top-[calc(50%_-_35.5px)] left-[101px] rounded-[36px] w-[554px] h-[547px] object-cover"
//           alt="healthy_foods"
//           id="healthy_foods"
//           src={Subtract}
//         />
//         <div className="absolute top-[645.92px] left-[569.84px] rounded-[50%] bg-gainsboro w-[170.32px] h-[158.69px]" />
//         <p
//           className="m-0 ml-10 absolute top-[839px] left-[101px] text-5xl leading-[120%] font-semibold font-open-sans text-dark-green-color text-left"
//           id="tag_line"
//         >
//           Let’s get fit together
//         </p>
//       </div>
//       {/* p tag */}
//       <a
//         className="text-decoration-none absolute top-[889px] left-[1010px] text-base leading-[174.53%] font-semibold font-open-sans text-left cursor-pointer"
//         id="Login"
//         onClick={onAlreadyHaveAnClick}
//       >
//         <span className="text-black">{`Already have an account? `}</span>
//     <Link to="/Login"><span className="text-dark-green-color">Log In</span></Link> 
//       </a>
// {/* create acc prob */}
//       <h1 className="absolute top-[50px] font-sans left-[936px] text-[40px] leading-[174.53%] font-semibold  text-black text-center inline-block w-[396px]">
//             Create your Account
//           </h1>
// {/* create acc prob */}
//     </form>
//  <div className="w-[1512px] min-h-screen overflow-hidden">
//   <div className="w-1/2  bg-Lightgreen">
//     <h1>Sign up</h1>
//   </div>
// </div> 

<div className="relative min-h-screen flex font-sans">
  <div className="flex flex-col sm:flex-row items-center md:items-start sm:justify-center md:justify-start flex-auto min-w-0 bg-white">
    <div className="sm:w-1/2 xl:w-1/2 h-full hidden md:flex flex-auto items-center justify-center p-10 overflow-hidden bg-purple-900 text-white bg-no-repeat bg-cover relative">

      <div className="absolute bg-[#EFFDE2] inset-0 z-0"></div>
      <div className="w-full  max-w-md z-10 shadow-none">
        <div className="sm:text-4xl xl:text-5xl font-bold leading-tight mb-6">
          <img src={Logo} alt="" />
        </div>
        <div className="sm:text-sm xl:text-md text-gray-200 font-normal "><img src={Subtract} className="object-cover ] " alt=""/> </div>
      </div>

    </div>
    <div className="md:flex md:items-center md:justify-center w-full sm:w-auto md:h-full  xl:w-2/5 p-8  md:p-10 lg:p-14 sm:rounded-lg md:rounded-none bg-white">
      <div className="max-w-md w-full space-y-8">
        <div className="text-center">
          <h2 className="mt-6 text-3xl font-bold text-gray-900">
            Welcome Back!
          </h2>
          <p className="mt-2 text-[40px]  text-black font-sans font-semibold">Log in to your Account</p>
        </div>

        <div class="flex flex-row justify-center items-center space-x-3 ">
            <a href="https://www.behance.net/" target="_blank"
              class="w-11 h-11 items-center justify-center inline-flex rounded-2xl text-blacl font-bold text-lg  bg-blue hover:shadow-lg cursor-pointer transition ease-in duration-300"><img
                className="w-4 h-4"
                src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDI0IDI0IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA1MTIgNTEyIiB4bWw6c3BhY2U9InByZXNlcnZlIiBjbGFzcz0iIj48Zz48cGF0aCB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGQ9Im0xNS45OTcgMy45ODVoMi4xOTF2LTMuODE2Yy0uMzc4LS4wNTItMS42NzgtLjE2OS0zLjE5Mi0uMTY5LTMuMTU5IDAtNS4zMjMgMS45ODctNS4zMjMgNS42Mzl2My4zNjFoLTMuNDg2djQuMjY2aDMuNDg2djEwLjczNGg0LjI3NHYtMTAuNzMzaDMuMzQ1bC41MzEtNC4yNjZoLTMuODc3di0yLjkzOWMuMDAxLTEuMjMzLjMzMy0yLjA3NyAyLjA1MS0yLjA3N3oiIGZpbGw9IiNmZmZmZmYiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIHN0eWxlPSIiIGNsYXNzPSIiPjwvcGF0aD48L2c+PC9zdmc+"/></a>
            <a href="https://twitter.com/" target="_blank"
              class="w-11 h-11 items-center justify-center inline-flex rounded-2xl font-bold text-lg  text-white bg-blue hover:shadow-lg cursor-pointer transition ease-in duration-300"><img
                className="w-4 h-4"
                src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDY4MS4zMzQ2NCA2ODEiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMiA1MTIiIHhtbDpzcGFjZT0icHJlc2VydmUiPjxnPjxwYXRoIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgZD0ibTIwMC45NjQ4NDQgNTE1LjI5Mjk2OWMyNDEuMDUwNzgxIDAgMzcyLjg3MTA5NC0xOTkuNzAzMTI1IDM3Mi44NzEwOTQtMzcyLjg3MTA5NCAwLTUuNjcxODc1LS4xMTcxODgtMTEuMzIwMzEzLS4zNzEwOTQtMTYuOTM3NSAyNS41ODU5MzctMTguNSA0Ny44MjQyMTgtNDEuNTg1OTM3IDY1LjM3MTA5NC02Ny44NjMyODEtMjMuNDgwNDY5IDEwLjQ0MTQwNi00OC43NTM5MDcgMTcuNDYwOTM3LTc1LjI1NzgxMyAyMC42MzY3MTggMjcuMDU0Njg3LTE2LjIzMDQ2OCA0Ny44MjgxMjUtNDEuODk0NTMxIDU3LjYyNS03Mi40ODgyODEtMjUuMzIwMzEzIDE1LjAxMTcxOS01My4zNjMyODEgMjUuOTE3OTY5LTgzLjIxNDg0NCAzMS44MDg1OTQtMjMuOTE0MDYyLTI1LjQ3MjY1Ni01Ny45NjQ4NDMtNDEuNDAyMzQ0LTk1LjY2NDA2Mi00MS40MDIzNDQtNzIuMzY3MTg4IDAtMTMxLjA1ODU5NCA1OC42ODc1LTEzMS4wNTg1OTQgMTMxLjAzMTI1IDAgMTAuMjg5MDYzIDEuMTUyMzQ0IDIwLjI4OTA2MyAzLjM5ODQzNyAyOS44ODI4MTMtMTA4LjkxNzk2OC01LjQ4MDQ2OS0yMDUuNTAzOTA2LTU3LjYyNS0yNzAuMTMyODEyLTEzNi45MjE4NzUtMTEuMjUgMTkuMzYzMjgxLTE3Ljc0MjE4OCA0MS44NjMyODEtMTcuNzQyMTg4IDY1Ljg3MTA5MyAwIDQ1LjQ2MDkzOCAyMy4xMzY3MTkgODUuNjA1NDY5IDU4LjMxNjQwNyAxMDkuMDgyMDMyLTIxLjUtLjY2MDE1Ni00MS42OTUzMTMtNi41NjI1LTU5LjM1MTU2My0xNi4zODY3MTktLjAxOTUzMS41NTA3ODEtLjAxOTUzMSAxLjA4NTkzNy0uMDE5NTMxIDEuNjcxODc1IDAgNjMuNDY4NzUgNDUuMTcxODc1IDExNi40NjA5MzggMTA1LjE0NDUzMSAxMjguNDY4NzUtMTEuMDE1NjI1IDIuOTk2MDk0LTIyLjYwNTQ2OCA0LjYwOTM3NS0zNC41NTg1OTQgNC42MDkzNzUtOC40Mjk2ODcgMC0xNi42NDg0MzctLjgyODEyNS0yNC42MzI4MTItMi4zNjMyODEgMTYuNjgzNTk0IDUyLjA3MDMxMiA2NS4wNjY0MDYgODkuOTYwOTM3IDEyMi40MjU3ODEgOTEuMDIzNDM3LTQ0Ljg1NTQ2OSAzNS4xNTYyNS0xMDEuMzU5Mzc1IDU2LjA5NzY1Ny0xNjIuNzY5NTMxIDU2LjA5NzY1Ny0xMC41NjI1IDAtMjEuMDAzOTA2LS42MDU0NjktMzEuMjYxNzE4OC0xLjgxNjQwNyA1Ny45OTk5OTk4IDM3LjE3NTc4MSAxMjYuODcxMDkzOCA1OC44NzEwOTQgMjAwLjg4NjcxODggNTguODcxMDk0IiBmaWxsPSIjZmZmZmZmIiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBzdHlsZT0iIj48L3BhdGg+PC9nPjwvc3ZnPg=="/></a>
            <a href="https://in.linkedin.com/" target="_blank"
              class="w-11 h-11 items-center justify-center inline-flex rounded-2xl font-bold text-lg   text-white bg-blue hover:shadow-lg bg-blend-color-dodge cursor-pointer transition ease-in duration-300"><img
                src="data:image/png;base64,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"
                className="w-4 h-4 mix-blend-contrast rounded-full"/></a>
          </div>


        <div className="flex items-center justify-center space-x-2">
          <span className="h-px w-16 bg-gray-200"></span>
          <span className="text-gray-300 font-normal">or continue with</span>
          <span className="h-px w-16 bg-gray-200"></span>
        </div>
        <form className="mt-8 space-y-6" action="" method="POST">
          <input type="hidden" name="remember" />
          <div className="relative">
            <label htmlFor="email" className="ml-3  font-bold text-black text-5xl ">Email-ID</label>
            <input
              className="w-full text-base px-4 py-2 border border-solid border-grey-color rounded-lg outline-none  focus:border-[#CFF7AA]"
              type="email" placeholder="mail@gmail.com"  />
          </div>
          <div className="mt-8 content-center">
            <label htmlFor="password" className="ml-3 text-5xl font-bold text-gray-700 ">Password</label>
            <input
              className="w-full content-center text-base px-4 py-2 border border-solid border-grey-color rounded-lg  outline-none focus:border-[#CFF7AA]"
              type="password" placeholder="Enter your password" />
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input id="remember_me" name="remember_me" type="checkbox" className="h-4 w-4 bg-blue-500 focus:ring-blue-400 accent-dark-green-color  border-gray-300 rounded" />
              <label htmlFor="remember_me" className="ml-2 block text-sm text-gray-900">Remember me</label>
            </div>
            <div className="text-sm">
              <a href="/" className="text-dark-green-color text-base font-semibold hover:text-green-500">Forgot your password?</a>
            </div>
          </div>
          <div>
            <button
              type="submit"
              className="w-full flex justify-center [background:linear-gradient(93.37deg,_rgba(175,_228,_126,_0.4),_rgba(216,_250,_185,_0.4))] border border-solid border-[#CFF7A] text-dark-green-color p-4 text-5xl  rounded-2xl tracking-wide font-semibold  cursor-pointer transition ease-in duration-500"
            >
              Sign in
            </button>
          </div>
          <p className="flex  items-center justify-center mt-10 text-center text-md text-gray-500">
            <span>Don't have an account?</span>
            <a href="/signup" className="text-dark-green-color hover:text-lime-600  font-semibold cursor-pointer transition ease-in duration-300">Sign up</a>
          </p>
        </form>
      </div>
    </div>
  </div>
</div>


  );
};

export default Login;
