import { useState, useEffect } from "react";
import { jsPDF } from "jspdf"; // 1. Import jsPDF
import tf from "../assets/tf.png";

const HeroSection = () => {
  const [points, setPoints] = useState(0);
  const [showTasks, setShowTasks] = useState(false);
  const [task1Done, setTask1Done] = useState(false);
  const [task2Done, setTask2Done] = useState(false);
  const [task3Done, setTask3Done] = useState(false);
  const [link1, setLink1] = useState("");
  const [link2, setLink2] = useState("");
  const [link3, setLink3] = useState("");

  useEffect(() => {
    const handleHashChange = () => {
      if (window.location.hash === "#tasks") setShowTasks(true);
    };
    handleHashChange();
    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  const yellWheresYoLink = () => {
    alert("YO WHERES YOUR LINK??!!!");
  };

  // 2. The PDF Generation Engine
  const generateOfferLetterPDF = (fullName) => {
    const doc = new jsPDF({
      orientation: "portrait",
      unit: "mm",
      format: "a4"
    });

    // --- Styling Constants ---
    const primaryColor ="#8a2be2"; // Purple #8a2be2
    const textColor ="grey";     // Dark grey

    // --- Header / Border ---
    doc.setDrawColor(primaryColor[0], primaryColor[1], primaryColor[2]);
    doc.setLineWidth(1);
    doc.rect(10, 10, 190, 277); // Elegant border around page

    // Title / Institution Header
    doc.setFont("Helvetica", "bold");
    doc.setFontSize(24);
    doc.setTextColor(primaryColor[0], primaryColor[1], primaryColor[2]);
    doc.text("TECHFEST, IIT BOMBAY", 105, 30, { align: "center" });

    doc.setFontSize(10);
    doc.setTextColor(120, 120, 120);
    doc.text("Asia's Largest Science & Technology Festival", 105, 36, { align: "center" });

    // Decorative horizontal separator line
    doc.setDrawColor(200, 200, 200);
    doc.line(20, 42, 190, 42);

    // --- Metadata Row ---
    doc.setFont("Helvetica", "normal");
    doc.setTextColor(100, 100, 100);
    doc.text(`Date: ${new Date().toLocaleDateString()}`, 20, 52);
    doc.text("Ref: TF-CA/2026/OFFER", 190, 52, { align: "right" });

    // --- Letter Subject ---
    doc.setFont("Helvetica", "bold");
    doc.setFontSize(14);
    doc.setTextColor(textColor[0], textColor[1], textColor[2]);
    doc.text("SUB: OFFER OF CAMPUS AMBASSADORSHIP", 105, 68, { align: "center" });

    // --- Body Text Content ---
    doc.setFont("Helvetica", "normal");
    doc.setFontSize(12);
    doc.text(`Dear ${fullName.toUpperCase()},`, 20, 85);

    const bodyParagraph1 = 
      "We are absolutely thrilled to extend an official offer to join the Techfest, IIT Bombay family as a College Campus Ambassador. Out of thousands of submissions across various competitive tracking cycles, your proactive task execution highlighted outstanding structural leadership capability.";

    const bodyParagraph2 = 
      "As a designated Campus Ambassador, you will serve as the premier point-of-contact representing Asia's largest Science & Technology festival within your collegiate ecosystem. Your duties encompass fostering community engineering engagement, leading promotional operations, and mobilizing project delegations.";

    const bodyParagraph3 = 
      "By fulfilling the core benchmarks of this journey, you are entitled to earn exclusive credential certifications, industry-standard networking mentorships, and direct VIP passes to the main event arena at the IIT Bombay campus.";

    // Split paragraphs into multi-line strings automatically wrapping to fit margins smoothly
    const marginWidth = 170; 
    const p1Lines = doc.splitTextToSize(bodyParagraph1, marginWidth);
    const p2Lines = doc.splitTextToSize(bodyParagraph2, marginWidth);
    const p3Lines = doc.splitTextToSize(bodyParagraph3, marginWidth);

    // Write paragraph layout flows dynamically spacing downwards
    doc.text(p1Lines, 20, 95);
    doc.text(p2Lines, 20, 125);
    doc.text(p3Lines, 20, 160);

    doc.setFont("Helvetica", "bold");
    doc.text("We look forward to breaking milestones together. Welcome aboard!", 20, 195);

    // --- Signatures Footer Section ---
    doc.setDrawColor(220, 220, 220);
    doc.line(20, 225, 190, 225);

    doc.setFont("Helvetica", "normal");
    doc.setFontSize(10);
    doc.text("Sincerely yours,", 20, 238);
    
    doc.setFont("Helvetica", "bold");
    doc.setTextColor(primaryColor[0], primaryColor[1], primaryColor[2]);
    doc.text("Team Techfest", 20, 255);
    doc.setFont("Helvetica", "normal");
    doc.setTextColor(120, 120, 120);
    doc.text("Public Relations & Student Operations", 20, 260);
    doc.text("Indian Institute of Technology, Bombay", 20, 265);

    // 3. Save / Download Document
    doc.save(`Techfest_Offer_Letter_${fullName.replace(/\s+/g, '_')}.pdf`);
  };

  // 4. Handle Unlock Check Loop
  const handleOfferLetterClick = () => {
    if (points >= 300) {
      const name = prompt("Enter your full name for the certificate document:");
      if (name && name.trim() !== "") {
        generateOfferLetterPDF(name.trim()); // Fires PDF Generator instantly
      } else {
        alert("Please Enter a name!");
      }
    } else {
      alert(`Your points should avail 300 or more to get your offer letter. Current: ${points}`);
      setShowTasks(true);
      window.location.hash = "#tasks";
    }
  };

  const submit1 = () => { if (task1Done) return; if (!link1.trim()) yellWheresYoLink(); else { setPoints(p => p + 100); setTask1Done(true); } };
  const submit2 = () => { if (task2Done) return; if (!link2.trim()) yellWheresYoLink(); else { setPoints(p => p + 150); setTask2Done(true); } };
  const submit3 = () => { if (task3Done) return; if (!link3.trim()) yellWheresYoLink(); else { setPoints(p => p + 100); setTask3Done(true); } };

  return (
    <div id="home" className="flex flex-col items-center mt-2 lg:mt-20 font-['Poppins'] text-white">
      <img src={tf} alt="Techfest Logo" />
      <br /><br />
      
      <h1 className="text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide" id="head">
        COLLEGE <span className="bg-gradient-to-r from-blue-500 to-pink-800 text-transparent bg-clip-text"> AMBASSADOR </span> PROGRAM 
      </h1>
      
      <p className="mt-10 text-lg text-center text-neutral-500 max-w-4xl" id="font">
        Be the face of Asia's largest Science & Technology festival at your college - represent, lead, and inspire the community around you.
      </p>

      <p className="mt-4 text-xl font-bold text-neutral-300">🪙 Points: {points}</p>

      <div className="flex justify-center my-10">
        <a href="https://techfest.org" className="bg-gradient-to-r from-pink-500 to-blue-800 py-3 px-4 mx-3 text-white font-semibold" id="button">
          Techfest, IIT Bombay
        </a>
        <button 
          onClick={handleOfferLetterClick} 
          className="py-3 px-4 mx-3 rounded-md border bg-purple-700 text-white font-semibold hover:bg-purple-800 transition" 
          id="get"
        >
          Get your Offer Letter
        </button>
      </div>

      {showTasks && (
        <div id="tasks" className="tasks bg-white p-6 rounded-xl shadow-lg flex flex-col gap-4 max-w-2xl w-full text-black scroll-mt-24">
          <p className="text-xl font-bold text-purple-700 border-b pb-2">🎯 Core Missions</p>
          <div>
            <h1 className="font-semibold text-sm">Make a webpage (paste google drive link) <span className="text-sm text-amber-600 font-bold">100 pts 🪙</span></h1>
            <div className="flex gap-2 mt-1">
              <input className="border p-2 rounded-md flex-grow" placeholder="https://drive..." value={link1} onChange={e => setLink1(e.target.value)} disabled={task1Done} />
              <button onClick={submit1} className={`px-4 py-2 rounded-md font-bold text-white transition ${task1Done ? 'bg-green-600 cursor-not-allowed' : 'bg-purple-600 hover:bg-purple-700'}`}>{task1Done ? "Submitted ✓" : "Submit"}</button>
            </div>
          </div>
          <div>
            <h1 className="font-semibold text-sm">Make a reel (paste google drive link) <span className="text-sm text-amber-600 font-bold">150 pts 🪙</span></h1>
            <div className="flex gap-2 mt-1">
              <input className="border p-2 rounded-md flex-grow" placeholder="https://drive..." value={link2} onChange={e => setLink2(e.target.value)} disabled={task2Done} />
              <button onClick={submit2} className={`px-4 py-2 rounded-md font-bold text-white transition ${task2Done ? 'bg-green-600 cursor-not-allowed' : 'bg-purple-600 hover:bg-purple-700'}`}>{task2Done ? "Submitted ✓" : "Submit"}</button>
            </div>
          </div>
          <div>
            <h1 className="font-semibold text-sm">Draft an E-Mail (paste google drive link) <span className="text-sm text-amber-600 font-bold">100 pts 🪙</span></h1>
            <div className="flex gap-2 mt-1">
              <input className="border p-2 rounded-md flex-grow" placeholder="https://drive..." value={link3} onChange={e => setLink3(e.target.value)} disabled={task3Done} />
              <button onClick={submit3} className={`px-4 py-2 rounded-md font-bold text-white transition ${task3Done ? 'bg-green-600 cursor-not-allowed' : 'bg-purple-600 hover:bg-purple-700'}`}>{task3Done ? "Submitted ✓" : "Submit"}</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default HeroSection;
