import arrow from "../assets/arrow.png"
import img1 from "../assets/Image.png"
import img2 from "../assets/Image2.png"
import img4 from "../assets/Image4.png"
import img5 from "../assets/Image5.png"
import img6 from "../assets/Image6.png"
import img8 from "../assets/Image5.png"
import img9 from "../assets/Image9.png"
import img10 from "../assets/Image10.png"
import img11 from "../assets/Image11.png"
import container from "../assets/container.png"
import sarah from "../assets/Sarah.png"
import emily from '../assets/Emily.png'
import michael from "../assets/Michael.png"
import jason from "../assets/Jason.png"


export const navLinks = [

    {
        name: "Home",
        path: "/",
    },
    {
        name: "Courses",
        path: "/courses",
    },
    {
        name: "About Us",
        path: "/aboutUs",
    },
    {
        name: "Contact",
        path: "/contact",
    },
    {
        name: "Pricing",
        path: "/pricing",
    },
]


export const gridBenefits = [
    {
        number: "01",
        heading: "Flexible Interviewing Schedule",
        description: "Fit your interviews according to your time schedule either online or on-site",
        icon: arrow
    },
    {
        number: "02",
        heading: "Expert instruction",
        description: "Learn from experts in your field from your diferent companies of internship.",
        icon: arrow
    },
    {
        number: "03",
        heading: "Diverse Course Offerings",
        description: "Explore a wide range of design and development courses covering various topics.",
        icon: arrow
    },
    {
        number: "04",
        heading: "Updated Curriculum",
        description: "Access courses with uo-to-date content reflecting the latest trends and industry practices.",
        icon: arrow
    },
    {
        number: "05",
        heading: "Practical Projects and Assignment",
        description: "Develop a portfolio showcasing your skills and abilities to potential employers.",
        icon: arrow
    },
    {
        number: "06",
        heading: "Interactive Learning Environment",
        description: "Fit your interviews according to your time schedule either online or on-site",
        icon: arrow
    },
    {
        number: "07",
        heading: "Flexible interviewing schedule",
        description: "Fit your interviews according to your time schedule either online or on-site",
        icon: arrow
    },
    {
        number: "08",
        heading: "Flexible interviewing schedule",
        description: "Fit your interviews according to your time schedule either online or on-site",
        icon: arrow
    },
]


export const courseGrid = [
  {
    image: img1,
    btn1: "4 Weeks",
    btn2: "Beginner",
    stakeholder: "By John Smith",
    title: "Web Design Fundamentals",
    desc: "Learn the fundamentals of web design, including HTML, CSS and responsive design principles. Develop the skills to create visually appealing and user friendly websites.",
    enroll: "Get it Now"
  },
  {
    image: container,
    btn1: "4 Weeks",
    btn2: "Intermediate",
    stakeholder: "By Emily Johnson",
    title: "Instant",
    desc: "Get your long searched for internship at a very low cost that suits your demand according to your location and country.",
    enroll: "Get it Now"
  },
  {
    image: img9,
    btn1: "8 Weeks",
    btn2: "Intermediate",
    stakeholder: "By David Brown",
    title: "Mobile App Development",
    desc: "Dive into the world of oppotunities with the skills learnt from your internship.",
    enroll: "Get it Now"
  },
  {
    image: img4,
    btn1: "10 Weeks",
    btn2: "Beginner",
    stakeholder: "By Sarah Thompson",
    title: "Graphic Design for Beginners",
    desc: "Find your way around our different companies and universities using Google maps provided to you in our platform.",
    enroll: "Get it Now"
  },
  {
    image: img5,
    btn1: "10 Weeks",
    btn2: "Intermediate",
    stakeholder: "By Michael Adams",
    title: "Front-End Web Development",
    desc: "Become proficient in your field through orientations and mentorship from professionals.",
    enroll: "Get it Now"
  },
  {
    image: img11,
    btn1: "6 Weeks",
    btn2: "Advance",
    stakeholder: "By Jennifer Wilson",
    title: "Advance JavaScript",
    desc: "Take your career to the next level by working with experts from the field which will help you expertise in you field.",
    enroll: "Get it Now"
  },
  {
    image: img8,
    btn1: "8 Weeks",
    btn2: "Beginer",
    stakeholder: "By John Smith",
    title: "Web Design Fundamentals",
    desc: "Learn the fundamentals of web design, including HTML, CSS and responsive design principles. Develop the skills to create visually appealing and user friendly websites.",
    enroll: "Get it Now"
  },
  {
    image: img6,
    btn1: "4 Weeks",
    btn2: "Beginner",
    stakeholder: "By John Smith",
    title: "Web Design Fundamentals",
    desc: "Learn the fundamentals of web design, including HTML, CSS and responsive design principles. Develop the skills to create visually appealing and user friendly websites.",
    enroll: "Get it Now"
  },
]

// testimonial array
export const testimonials = [
  {
    text: "The internships provided a solid foundation for me. The instructors and mentors were knowledgeable and supportive, and the interactive environment was engaging. I highly recommend it!",
    profile: sarah,
    userName: "Sarah L",
    all: "Read Full Story"
  },
  {
    text: "The academic and career orientations exceeded my expectations. The intructor's expertise and practical assignments helped me get a clear vision of what I really wanted to do. I feel more confident to in career now. Thank you!",
    profile: jason,
    userName: "Jason M",
    all: "Read Full Story"
  },
  {
    text: "The international opportunity given to me helped gain knowledgeable from experts from other parts of the world it also helped me divesify.",
    profile: emily,
    userName: "Emily R",
    all: "Read Full Story"
  },
  {
    text: "I enrolled in the online interview as a beginner, and it was the perfect starting point. The instructor's guidance and feedback significantly facilitated my begining!",
    profile: michael,
    userName: "Michael K",
    all: "Read Full Story"
  },
  {
    text: "The internships provided a solid foundation for me. The instructors and mentors were knowledgeable and supportive, and the interactive environment was engaging. I highly recommend it!",
    profile: sarah,
    userName: "Sarah L",
    all: "Read Full Story"
  },
  {
    text: "The internships provided a solid foundation for me. The instructors and mentors were knowledgeable and supportive, and the interactive environment was engaging. I highly recommend it!",
    profile: emily,
    userName: "Emily R",
    all: "Read Full Story"
  },
]

// pricing section array
export const priceBtn = [
  {
    id: 1,
    buttonName: "Monthly",
    content: [
      {
        plan: "Free Plan",
        money: "$0",
        planHead: "Available Feartures",
        features: [
            {
              valid: true,
              option1: "Access to select free courses",
            },
            {
              valid: true,
              option2: "Free career and academic orientations.",
            },
            {
              valid: valid,
              option3: "Basic community support.",
            },
            {
              valid: true,
              option4: "Certification upon completion.",
            },
            {
              valid: true,
              option5: "Ad-supported platform.",
            },
            {
              valid: true,
              option6: "Access to exclusive Pro program community forums.",
            },
            {
              valid: true,
              option7: "Early access internships and updates.",
            },
          ],
      },
      {
        plan: "Pro Plan",
        money: "$79",
        features: [
            {
              valid: true,
              option1: "Unlimited access to all interviews.",
            },
            {
              valid: true,
              option2: "Unlimited course materials and resources.",
            },
            {
              valid: true,
              option3: "Priority support from instructors.",
            },
            {
              valid: true,
              option4: "Course completion certificates.",
            },
            {
              valid: true,
              option5: "Ad-free experience.",
            },
            {
              valid: true,
              option6: "Access to exclusive Pro program community forums.",
            },
            {
              valid: true,
              option7: "Early access internships and updates.",
            },
          ],
      },
    ],
  },
  
  {
    id: 2,
    buttonName: "Yearly",
    content: [
        {
          plan: "Free Plan",
          money: "$50",
          features: [
              {
                valid: true,
                option1: "Access to select free courses",
              },
              {
                valid: true,
                option2: "Free career and academic orientations.",
              },
              {
                valid: true,
                option3: "Basic community support.",
              },
              {
           valid: true,
                option4: "Certification upon completion.",
              },
              {
               valid: true,
                option5: "Ad-supported platform.",
              },
              {
                valid: true,
                option6: "Access to exclusive Pro program community forums.",
              },
              {
               valid: true,
                option7: "Early access internships and updates.",
              },
            ],
        },
        {
          plan: "Pro Plan",
          money: "$1000",
          features: [
              {
               valid: true,
                option1: "Unlimited access to all interviews.",
              },
              {
              valid: true,
                option2: "Unlimited course materials and resources.",
              },
              {
                valid: true,
                option3: "Priority support from instructors.",
              },
              {
                valid: true,
                option4: "Course completion certificates.",
              },
              {
                valid: true,
                option5: "Ad-free experience.",
              },
              {
                valid: true,
                option6: "Access to exclusive Pro program community forums.",
              },
              {
                valid: true,
                option7: "Early access internships and updates.",
              },
            ],
        },
      ],
  },
];



// function Navbar() {
//   const { pathname } = useLocation();

//   return (
//     <div className="sticky top-0 z-[999] bg-orange-500">
//       <div className="flex items-center justify-between p-4 md:px-10">
        {/* Logo Section */}
        // <div className="flex items-center">
        //   <Link to="/" className="p-2 bg-orange-600 rounded mr-4">
        //     <img src={logo} alt="Logo" className="w-8 h-8" />
        //   </Link>
        // </div>

        {/* Nav Links - Hidden on Small Screens */}
        // <div className="hidden md:flex space-x-4 items-center">
        //   {navLinks.map((item) => {
        //     const isActive = pathname === item.path;
        //     return (
        //       <Link
        //         key={item.name}
        //         to={item.path}
        //         className={`rounded py-2 px-4 ${
        //           isActive ? "bg-slate-200" : "hover:bg-slate-100"
        //         }`}
        //       >
        //         {item.name}
        //       </Link>
        //     );
        //   })}
        // </div>

        {/* Action Buttons */}
        // <div className="hidden md:flex space-x-4">
        //   <Link className="hover:text-white">Sign Up</Link>
        //   <Link className="px-4 py-2 bg-orange-600 rounded-md text-white">
        //     Login
        //   </Link>
        // </div>

        {/* Mobile Menu Button */}
        // <div className="flex md:hidden">
        //   <button className="p-2 rounded-md bg-orange-600 text-white">
            {/* Icon or Hamburger menu here */}
      //       ☰
      //     </button>
      //   </div>
      // </div>

      {/* Mobile Menu (Initially Hidden) */}
//       <div className="md:hidden px-4 py-2 bg-orange-500 space-y-2">
//         {navLinks.map((item) => (
//           <Link
//             key={item.name}
//             to={item.path}
//             className={`block py-2 px-4 rounded ${
//               pathname === item.path ? "bg-slate-200" : "hover:bg-slate-100"
//             }`}
//           >
//             {item.name}
//           </Link>
//         ))}
//         <div className="flex flex-col space-y-2 mt-2">
//           <Link className="block py-2 text-center">Sign Up</Link>
//           <Link className="block py-2 text-center bg-orange-600 text-white rounded-md">
//             Login
//           </Link>
//         </div>
//       </div>
//     </div>
//   );
// }




// function BenefitContent() {
//   return (
//     <div className="py-16 px-4 md:px-20 lg:px-40 xl:px-60">
//       <BenefitSection />
//     </div>
//   );
// }

// const BenefitSection = () => {
//   return (
//     <div className="space-y-6">
      {/* Main Title Section */}
      // <div className="relative flex items-center bg-white p-4 rounded justify-center shadow-md">
      //   <div className="absolute -top-4 -left-4">
      //     <img src={lines} className="w-8 h-8" alt="Decorative lines" />
      //   </div>
      //   <span className="p-2 bg-orange-100 rounded">
      //     <img src={thunder} className="w-6 h-6" alt="Thunder icon" />
      //   </span>
      //   <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold ml-4 leading-snug text-center md:text-left">
      //     <span className="text-orange-500">Unlock</span> your potential with
      //     instant
      //   </h1>
      // </div>

      {/* Subtitle Section */}
      // <div className="text-center">
      //   <p className="text-lg md:text-xl leading-loose text-gray-700">
      //     Internships, career orientation, and job offers to elevate your
      //     career.
      //   </p>
      //   <p className="text-sm text-gray-500 mt-2">
      //     Learn from industry experts and enhance your skills.
      //   </p>
      // </div>

      {/* Action Buttons */}
//       <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mt-4">
//         <button className="bg-orange-500 text-white py-2 px-6 rounded-md hover:bg-orange-600 transition">
//           Explore Internships
//         </button>
//         <button className="bg-white border border-orange-500 text-orange-500 py-2 px-6 rounded-md hover:bg-orange-100 transition">
//           View Pricing
//         </button>
//       </div>
//     </div>
//   );
// };
