/* ==========================================================================
   Y2O — data.js
   Shared FAQ content and stat references
   ========================================================================== */

(function () {
  "use strict";

  /* ----------------------------------------------------------------------
     FAQ — sentence-case questions · plain-English answers
     ---------------------------------------------------------------------- */
  var FAQ = {

    home: [
      {
        q: "What is Y2O?",
        a: "Y2O is a student-owned verified growth record for high school students. It helps students track, confirm, and share what they do beyond grades."
      },
      {
        q: "Is Y2O live now?",
        a: "Y2O is in early launch preparation. Students, families, partners, and institutions can join the waitlist as access opens in stages across the GTA."
      },
      {
        q: "What will Y2O cost?",
        a: "Y2O is in early launch preparation. Student starter access will be designed to stay accessible. Family features, expanded visibility, guidance tools, and planning support are expected to be paid. Partner verification should remain simple and free."
      },
      {
        q: "Is Y2O only for volunteer hours?",
        a: "No. Y2O can include work, volunteering, clubs, sports, side projects, community activity, competitions, skills, and other growth experiences."
      },
      {
        q: "Who confirms activities?",
        a: "A person who saw the student do the work, such as a supervisor, coach, teacher, employer, organizer, or community lead."
      },
      {
        q: "Does Y2O replace transcripts or school forms?",
        a: "No. Y2O does not replace transcripts, official school records, or school-board requirements. It helps students build a stronger personal record alongside them."
      },
      {
        q: "Can parents see everything?",
        a: "No. The record is student-owned. Family features are intended to support better conversations and planning, not take control away from the student."
      }
    ],

    students: [
      {
        q: "Can I start in Grade 9?",
        a: "Yes. Grade 9 is the best time to start. Early entries are simple to log and add up to a full record by graduation."
      },
      {
        q: "Who confirms my activities?",
        a: "Anyone who saw the work — coaches, club leads, employers, teachers, or supervisors. They get a short request and confirm with one click."
      },
      {
        q: "What if a confirmer says no?",
        a: "Nothing breaks. The activity stays as self-reported. You can ask a different confirmer or add notes about what you did."
      },
      {
        q: "Do I own my record?",
        a: "Yes. The record is yours. You choose what to share, with whom, and for how long. You can export it any time."
      },
      {
        q: "Will universities accept it?",
        a: "Y2O is not a current admissions tool. It is a record you carry. Use it for applications, jobs, scholarships, and conversations that ask for proof of work."
      }
    ],

    parents: [
      {
        q: "What does my child get from this?",
        a: "A record of effort that grows from Grade 9 onward, confirmed by adults outside the family, and ready when applications, jobs, or scholarships ask for proof."
      },
      {
        q: "Can I see what my child logs?",
        a: "Only if your child shares it with you. The record belongs to the student. Families can be invited to view or help confirm activities."
      },
      {
        q: "Is my child’s data safe?",
        a: "Yes. Data lives in Canada. Students choose what to share. We never sell data and we do not show ads. See the privacy page for details."
      },
      {
        q: "Does this add more work to my child’s plate?",
        a: "Logging takes about two minutes per activity. Confirming is one click for the adult. The goal is less paperwork at application time, not more."
      },
      {
        q: "How much does it cost?",
        a: "Pricing is not finalized. Student starter access will be designed to stay accessible. Family features and planning tools are expected to be paid. Core logging and partner confirmations should remain simple and free."
      }
    ],

    partners: [
      {
        q: "Who counts as a partner?",
        a: "Any group a student works with — clubs, sports teams, employers, volunteer programs, religious groups, arts programs, tutoring, community projects, or side projects. If you saw the work, you can confirm it."
      },
      {
        q: "How does confirming work?",
        a: "A student sends a short request with what they did and when. You read it, then confirm or decline with one click. No account is needed for one-time confirmations."
      },
      {
        q: "What if I run a program with many students?",
        a: "Partner accounts let you confirm activities in bulk, invite students to log under your program, and keep a simple record of who participated."
      },
      {
        q: "Do I see private student data?",
        a: "No. You only see what the student sends you to confirm. You do not see grades, other activities, or contact info beyond what they share."
      },
      {
        q: "Is there a cost for partners?",
        a: "No. Confirming and partner accounts are free. We are not a vendor and we do not sell your data."
      }
    ],

    institutions: [
      {
        q: "Who can use Y2O records?",
        a: "Universities, colleges, employers, scholarship teams, awards offices, co-op and career teams, and youth employment programs. Any team that makes decisions about young people can use a record the student chooses to share."
      },
      {
        q: "How does an institution view a student record?",
        a: "Only when the student shares it. They generate a read-only link, and your team sees verified activities, hours, skills, named confirmers, and Growth Score in one view."
      },
      {
        q: "Can employers use Y2O for early talent?",
        a: "Yes. Employers can see verified work habits and emerging skills before graduation, which helps build early talent pipelines from confirmed student records."
      },
      {
        q: "Can schools use Y2O for recruitment or scholarships?",
        a: "Yes. Institutions use verified records to add context to scholarships, pathways, and recruitment, without extra paperwork for students or staff."
      },
      {
        q: "Can institutions search student records?",
        a: "No. Y2O is not a searchable database. Students share their record one at a time, on their own initiative, with a private link."
      },
      {
        q: "Is Y2O replacing grades or applications?",
        a: "No. Y2O adds verified context next to grades and applications. Your existing process stays yours."
      },
      {
        q: "How do we partner with Y2O?",
        a: "Reach out through the contact page. We work directly with employers, scholarship offices, and institutions across the GTA at launch."
      }
    ],

    research: [
      {
        q: "Is Y2O a research study?",
        a: "Y2O is a product, not a research study. We cite public sources to show the problem we are building against."
      },
      {
        q: "Why does Y2O cite public research?",
        a: "Public data shows the world students are entering: shifting skills, uneven access, and a need for evidence beyond grades. We build against that evidence and link to the source."
      },
      {
        q: "Are these organizations affiliated with Y2O?",
        a: "No. The organizations cited are not affiliated with Y2O and do not endorse the product. We link to their public work so you can read the source."
      },
      {
        q: "How often will the research page be updated?",
        a: "We update sources as new public reports are released or figures change. Each card links to the original so you can check the latest."
      },
      {
        q: "Why does Y2O focus on verified activity records?",
        a: "Unverified activity lists are weak evidence. A record confirmed by named people is stronger for students, schools, and employers."
      },
      {
        q: "Can schools or partners suggest additional sources?",
        a: "Yes. Reach out through the contact page with a public source and why it matters. We review every suggestion before adding it."
      }
    ],

    about: [
      {
        q: "Who built Y2O?",
        a: "Y2O is built in Canada by a family team that started with one student's question. The founder story is on this page."
      },
      {
        q: "Where is Y2O launching first?",
        a: "Y2O Growth Inc. launches first in the Greater Toronto Area. From there we expand across Ontario, then the rest of Canada."
      },
      {
        q: "Why start with work beyond grades?",
        a: "Grades show one part of a student. The effort, skills, and service students build outside class often have no trusted place to live, so we built one."
      },
      {
        q: "Is Y2O an AI tool?",
        a: "No. Y2O is a record students log and real people confirm. The value is human confirmation, not a model output."
      },
      {
        q: "Who owns the student record?",
        a: "The student. The record is student-owned and stays with them across schools, applications, and life after graduation."
      },
      {
        q: "How can schools, employers, or partners get involved?",
        a: "Reach out through the contact page. We work with schools, employers, scholarship teams, and community partners across the GTA at launch."
      },
      {
        q: "What comes after the GTA launch?",
        a: "We expand across Ontario, then scale across Canada. The record is portable by design, so it travels with the student."
      }
    ],

    contact: [
      {
        q: "How fast do you reply?",
        a: "Most messages get a reply within two business days. Waitlist confirmations are instant. Partner enquiries are usually handled within a week."
      },
      {
        q: "I’m a student. Should I sign up?",
        a: "Yes. The waitlist is open. You will get an invite when Y2O is ready in your area. GTA students go first."
      },
      {
        q: "I run a program. How do I become a partner?",
        a: "Use the contact form and mention your program. We will set up a short call to learn what you need and how confirmation should work."
      },
      {
        q: "I’m a parent. Who should I contact?",
        a: "Write to hello@youth2opportunities.ca. We read every message. For privacy questions, write to privacy@youth2opportunities.ca."
      },
      {
        q: "Press and partnerships",
        a: "For press, write to hello@youth2opportunities.ca with your outlet and deadline. For partnership enquiries, please include the program, region, and rough student count."
      }
    ]
  };

  /* ----------------------------------------------------------------------
     STATS
     ---------------------------------------------------------------------- */
  var STATS = {
    NEET_914K: {
      value: "914K",
      label: "Canadian youth aged 15 to 29 are NEET",
      source: "Government of Canada / ESDC 2025"
    },
    SKILLS_39: {
      value: "39%",
      label: "Workers' core skills expected to change by 2030",
      source: "World Economic Forum 2025"
    },
    UBC_87: {
      value: "87%",
      label: "UBC average entrance grade today · up from 70% twenty years ago",
      source: "Fraser Institute 2024"
    },
    ONTARIO_40: {
      value: "40h",
      label: "Ontario community involvement required to graduate",
      source: "Ontario Ministry of Education"
    },
    WATERLOO_ADJUSTMENT: {
      value: "Adj.",
      label: "Waterloo Engineering applies a school-by-school adjustment factor on incoming grades",
      source: "University of Waterloo"
    }
  };

  /* Expose */
  window.Y2O = window.Y2O || {};
  window.Y2O.FAQ = FAQ;
  window.Y2O.STATS = STATS;

  // Also expose at top level for convenience
  window.FAQ = FAQ;
  window.STATS = STATS;
})();
