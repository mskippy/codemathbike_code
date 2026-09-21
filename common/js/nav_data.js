/* Version 2.0 layout – established Oct 2025
   Single source of truth for the sidebar + breadcrumbs.
   Folder naming assumed:
   /{course}/{unit}/{page}/index.html
   where course ∈ [ict8, ict9, dc1011],
         unit   ∈ [unit1, unit2, unit3, unit4],
         page   ∈ [lesson1, lesson2, topic1, …]
*/

window.NAV_DATA = {
    ict8: {
      title: "ICT 8",
      href: "/ict8/index.html",
      icon: "/shared_course_assets/images/ict8logo.png",
      units: {
        unit1: {
          title: "U1 Essential Skills",
          href: "/ict8/unit1/index.html",
          pages: {
            lesson1: { title: "1.1 Welcome & Get Connected",             href: "/ict8/unit1/lesson1/1.1_index.html" },
            lesson2: { title: "1.2 The Essential Skills Ladder",         href: "/ict8/unit1/lesson2/1.2_index.html" },
            lesson3: { title: "1.3 Know Your Computer WebQuest",         href: "/ict8/unit1/lesson3/1.3_index.html" }
          }
        },
        unit2: {
          title: "U2 Digital Media",
          href: "/ict8/unit2/index.html",
          pages: {
            lesson1: { title: "2.1 Canva: About Me",              href: "/ict8/unit2/lesson1/2.1_index.html" },
            lesson2: { title: "2.2 Removing a Photobomber",       href: "/ict8/unit2/lesson2/2.2_index.html" },
            lesson3: { title: "2.3 Combine & Create",             href: "/ict8/unit2/lesson3/2.3_index.html" }
          }
        },
        unit3: {
          title: "U3 Game Development",
          href: "/ict8/unit3/lesson0/3.0_index.html",
          pages: {
            lesson1: { title: "3.1 Adding the Background",  href: "/ict8/unit3/lesson1/3.1_index.html" },
            lesson2: { title: "3.2 Adding the Player",      href: "/ict8/unit3/lesson2/3.2_index.html" },
            lesson3: { title: "3.3 Adding the Enemy",       href: "/ict8/unit3/lesson3/3.3_index.html" },
            lesson4: { title: "3.4 More Game Mechanics",    href: "/ict8/unit3/lesson4/3.4_index.html" },
            lesson5: { title: "3.5 HUD",                    href: "/ict8/unit3/lesson5/3.5_index.html" },
            lesson6: { title: "3.6 Game Enhancements",      href: "/ict8/unit3/lesson6/3.6_index.html" }
          }
        },
        unit4: {
          title: "U4 Web Development",
          href: "/ict8/unit4/index.html",
          pages: {
            lesson1: { title: "Editing Your HTML",         href: "/ict8/unit4/edit_html_steps/index.html" },
            lesson2: { title: "All Done? Do This!",        href: "/ict8/unit4/u4_extension.html" },
            lesson3: { title: "Showcase Sites",            href: "/ict8/unit4/web_dev/master_index.html" }
          }
        }
      }
    },
  
    ict9: {
      title: "ICT 9",
      href: "/ict9/index.html",
      icon: "/shared_course_assets/images/ict9logo.png",
      units: {
        unit1: {
          title: "U1 IT Onboarding",
          href: "/ict9/unit1/index.html",
          pages: {
            lesson1: { title: "1.1 Welcome to the Studio",  href: "/ict9/unit1/lesson1/1.1_index.html" },
            lesson2: { title: "1.2 Setting Up Shop",        href: "/ict9/unit1/lesson2/1.2_index.html" },
            lesson3: { title: "1.3 Ready for Day One",      href: "/ict9/unit1/lesson3/1.3_index.html" }
          }
        },
        unit2: {
          title: "U2 Web Department",
          href: "/ict9/unit2/u2_index.html",
          pages: {
            lesson1: { title: "2.1 HTML: Studio Profile Setup", href: "/ict9/unit2/lesson1/2.1_index.html" },
            lesson2: { title: "2.2 CSS: Style Your Site",       href: "/ict9/unit2/lesson2/2.2_index.html" },
            lesson3: { title: "2.3 JS: Add Interactivity",      href: "/ict9/unit2/lesson3/2.3_index.html" },
            lesson4: { title: "2.4 Assembly & Publish",         href: "/ict9/unit2/lesson4/2.4_index.html" },
            studio:  { title: "Studio Directory",               href: "/ict9/unit2/studio/studio_index.html" }
          }
        },
        unit3: {
          title: "U3 Dev Team",
          href: "/ict9/unit3/u3_index.html",
          pages: {
            lesson1: { title: "3.1 Understanding Promotion",  href: "/ict9/unit3/lesson1/3.1_index.html" },
            lesson2: { title: "3.2 Brand Identity Design",    href: "/ict9/unit3/lesson2/3.2_index.html" },
            lesson3: { title: "3.3 Asset Creation",           href: "/ict9/unit3/lesson3/3.3_index.html" },
            lesson4: { title: "3.4 Poster Design",            href: "/ict9/unit3/lesson4/3.4_index.html" },
            lesson5: { title: "3.5 Game Trailer Production",  href: "/ict9/unit3/lesson5/3.5_index.html" },
            lesson6: { title: "3.6 Website Design",           href: "/ict9/unit3/lesson6/3.6_index.html" },
            lesson7: { title: "Game Websites Showcase",            href: "/ict9/unit3/student_sites/student_sites_index.html" }
          }
        },
        unit4: {
          title: "U4 Innovation Lab",
          href: "/ict9/unit4/index.html",
          pages: {
            lesson1: { title: "4.1",     href: "" },
            lesson2: { title: "4.2",     href: "" }
          }
        }
      }
    },
  
    cp1112: {
      title: "Computer Programming 11/12",
      href: "/cp1112/index.html",
      icon: "/shared_course_assets/images/cp1112logo.png",
      units: {
        unit0: {
          title: "U0 Launch & Diagnostic",
          href: "/cp1112/unit0/u0_index.html",
          pages: {
            lesson1: { title: "0.1 Course Launch and Diagnostic", href: "/cp1112/unit0/lesson1/0.1_index.html" },
            lesson2: { title: "0.2 GitHub Setup", href: "/cp1112/unit0/lesson2/0.2_index.html" },
            lesson3: { title: "0.3 GitHub Workflow", href: "/cp1112/unit0/lesson3/0.3_index.html" }
          }
        },
        unit1: {
          title: "U1 Python Foundations",
          href: "/cp1112/unit1/u1_index.html",
          pages: {
            core_lesson1: { title: "1.1 Variables & Data Types", href: "/cp1112/unit1/core/lesson1/1.1_index.html" },
            core_lesson2: { title: "1.2 Input/Output & f-strings", href: "/cp1112/unit1/core/lesson2/1.2_index.html" },
            core_lesson3: { title: "1.3 Operators & Expressions", href: "/cp1112/unit1/core/lesson3/1.3_index.html" },
            core_lesson4: { title: "1.4 Conditionals", href: "/cp1112/unit1/core/lesson4/1.4_index.html" },
            core_project1a: { title: "Project 1A — Character & First Choice", href: "/cp1112/unit1/core/project1a/index.html" },
            core_lesson5: { title: "1.5 Loops", href: "/cp1112/unit1/core/lesson5/1.5_index.html" },
            core_lesson6: { title: "1.6 Functions", href: "/cp1112/unit1/core/lesson6/1.6_index.html" },
            core_project1b: { title: "Project 1B — The Adventure Loops", href: "/cp1112/unit1/core/project1b/index.html" },
            core_lesson7: { title: "1.7 Lists & Strings", href: "/cp1112/unit1/core/lesson7/1.7_index.html" },
            core_lesson8: { title: "1.8 Debugging Basics", href: "/cp1112/unit1/core/lesson8/1.8_index.html" },
            core_project1c: { title: "Project 1C — Inventory & the Full Game", href: "/cp1112/unit1/core/project1c/index.html" },
            ext_lesson1: { title: "1.EXT.1 Fundamentals Refresher", href: "/cp1112/unit1/extended/lesson1/1.ext1_index.html" },
            ext_lesson2: { title: "1.EXT.2 Building on Basics", href: "/cp1112/unit1/extended/lesson2/1.ext2_index.html" },
            ext_project1x: { title: "Project 1X — Shared Start", href: "/cp1112/unit1/extended/project1x/index.html" },
            ext_project1y: { title: "Project 1Y — Diverges", href: "/cp1112/unit1/extended/project1y/index.html" },
            ext_project1z: { title: "Project 1Z — Open Stretch", href: "/cp1112/unit1/extended/project1z/index.html" }
          }
        },
        unit2: {
          title: "U2 Guided Project 1",
          href: "/cp1112/unit2/u2_index.html",
          pages: {}
        },
        unit3: {
          title: "U3 Choice Project 2",
          href: "/cp1112/unit3/u3_index.html",
          pages: {}
        },
        unit4: {
          title: "U4 Independent / Specialization Project",
          href: "/cp1112/unit4/u4_index.html",
          pages: {}
        },
        unit5: {
          title: "U5 Capstone Showcase",
          href: "/cp1112/unit5/u5_index.html",
          pages: {}
        },
        unit6: {
          title: "U6 Wrap-Up & Reflection",
          href: "/cp1112/unit6/u6_index.html",
          pages: {}
        }
      }
    },

    dc1011: {
      title: "Digital Communications 10/11",
      href: "/dc1011/index.html",
      icon: "/shared_course_assets/images/digi_media_10.png",
      units: {
        unit1: {
          title: "U1 Intro to Digital Communications",
          href: "/dc1011/unit1/index.html",
          pages: {
            lesson1: { title: "1.1 Digital Media in our Lives",         href: "/dc1011/unit1/lesson1/index.html" },
            lesson2: { title: "1.2 Digital Citizenship & Footprint",    href: "/dc1011/unit1/lesson2/index.html" },
            lesson3: { title: "1.3 File Management",                    href: "/dc1011/unit1/lesson3/index.html" },
            lesson4: { title: "1.4 Design Principles Basics",           href: "/dc1011/unit1/lesson4/index.html" },
            lesson5: { title: "1.5 My Digital Identity",                href: "/dc1011/unit1/lesson5/index.html" }
          }
        },
        unit2: {
          title: "U2 Building Your Digital Identity",
          href: "/dc1011/unit2/index.html",
          pages: {
            lesson1: { title: "2.1 Building Your Personal Brand",   href: "/dc1011/unit2/lesson1/index.html" },
            lesson2: { title: "2.2 Personal Style Guide",           href: "/dc1011/unit2/lesson2/index.html" },
            lesson3: { title: "2.3 Monogram & Header",              href: "/dc1011/unit2/lesson3/index.html" },
            lesson4: { title: "2.4 Visual Storytelling",            href: "/dc1011/unit2/lesson4/index.html" }
          }
        },
        unit3: {
          title: "U3 Creating Podcasts & Audio Stories",
          href: "/dc1011/unit3/index.html",
          pages: {
            lesson1: { title: "3.1 Intro to Audio Storytelling",    href: "/dc1011/unit3/topic1/index.html" },
            lesson2: { title: "3.2 Scriptwriting",                  href: "/dc1011/unit3/topic2/index.html" },
            lesson3: { title: "3.3 Audio Production",               href: "/dc1011/unit3/topic3/index.html" },
            lesson4: { title: "3.4 Publishing & Showcase",          href: "/dc1011/unit3/topic4/index.html" },
            lesson5: { title: "Student Podcast Gallery",            href: "/dc1011/unit3/podcasts/podcast_index.html" }
          }
        },
        unit4: {
          title: "U4 Video Production for the Web",
          href: "/dc1011/unit4/index.html",
          pages: {
            lesson1: { title: "4.1 Video in Digital Communication",   href: "/dc1011/unit4/lesson1/4.1_index.html" },
            lesson2: { title: "4.2 Concept & Pre-Production",         href: "/dc1011/unit4/lesson2/4.2_index.html" },
            lesson3: { title: "4.3 Filming Essentials",               href: "/dc1011/unit4/lesson3/4.3_index.html" },
            lesson4: { title: "4.4 Video Production",                 href: "/dc1011/unit4/lesson4/4.4_index.html" },
            lesson5: { title: "4.5 Class Video Showcase",                href: "/dc1011/unit4/lesson5/4.5_index.html" },
            lesson6: { title: "4.6 Reflection & Peer Feedback",         href: "/dc1011/unit4/lesson6/4.6_index.html" },
            lesson7: { title: "Student Video Gallery",                 href: "/dc1011/unit4/lesson7/gallery_index.html" }
          }
        },
        unit5: {
          title: "U5 Web Design & Development",
          href: "/dc1011/unit5/u5_index.html",
          pages: {
            lesson1: { title: "5.1 Intro to Web Design",                  href: "/dc1011/unit5/lesson1/5.1_index.html" },
            lesson2: { title: "5.2 Website Content",                      href: "/dc1011/unit5/lesson2/5.2_index.html" },
            lesson3: { title: "5.3 Building Our Website Pages",             href: "/dc1011/unit5/lesson3/5.3_index.html" },
            lesson4: { title: "5.4 Formatting Our Website",                    href: "/dc1011/unit5/lesson4/5.4_index.html" },
            lesson5: { title: "5.5 Publishing Your Website",             href: "/dc1011/unit5/lesson5/5.5_index.html" },
            lesson6: { title: "5.6 Final Polish & Submission",                  href: "/dc1011/unit5/lesson6/5.6_index.html" }
          }
        }
      }
    }
  };
  
