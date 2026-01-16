/* Version 2.0 layout – established Oct 2025
   Single source of truth for the sidebar + breadcrumbs.
   Folder naming assumed:
   /code/{course}/{unit}/{page}/index.html
   where course ∈ [ict8, ict9, dc1011],
         unit   ∈ [unit1, unit2, unit3, unit4],
         page   ∈ [lesson1, lesson2, topic1, …]
*/

window.NAV_DATA = {
    ict8: {
      title: "ICT 8",
      href: "/code/ict8/index.html",
      units: {
        unit1: {
          title: "U1 Essential Skills",
          href: "/code/ict8/unit1/index.html",
          pages: {
            lesson1: { title: "1.1 Welcome to ICT 8",       href: "/code/ict8/unit1/lesson1/index.html" },
            lesson2: { title: "1.2 File Management",        href: "/code/ict8/unit1/lesson2/index.html" },
            lesson3: { title: "1.3 Parts of My Computer",   href: "/code/ict8/unit1/lesson3/index.html" },
          }
        },
        unit2: {
          title: "U2 Digital Media",
          href: "/code/ict8/unit2/index.html",
          pages: {
            lesson1: { title: "2.1 Canva: About Me",        href: "/code/ict8/unit2/lesson1/2.1_index.html" },
            lesson2: { title: "2.2 Excel: Class Data",      href: "/code/ict8/unit2/lesson2/2.2_index.html" },
            lesson3: { title: "2.3 Image Editing",          href: "/code/ict8/unit2/lesson3/2.3_index.html" },

            
          }
        },
        unit3: {
          title: "U3 Game Development",
          href: "/code/ict8/unit3/lesson0/index.html",
          pages: {
            lesson1: { title: "3.1 Adding the Background",  href: "/code/ict8/unit3/lesson1/index.html" },
            lesson2: { title: "3.2 Adding the Player",      href: "/code/ict8/unit3/lesson2/index.html" },
            lesson3: { title: "3.3 Adding the Enemy",       href: "/code/ict8/unit3/lesson3/index.html" },
            lesson4: { title: "3.4 More Game Mechanics",    href: "/code/ict8/unit3/lesson4/index.html" },
            lesson5: { title: "3.5 HUD",                    href: "/code/ict8/unit3/lesson5/index.html" },
            lesson6: { title: "3.6 Game Enhancements",      href: "/code/ict8/unit3/lesson6/index.html" }
          }
        },
        unit4: {
          title: "U4 Web Development",
          href: "/code/ict8/unit4/index.html",
          pages: {
            lesson1: { title: "Editing Your HTML",     href: "/code/ict8/unit4/edit_html_steps/index.html" },
            lesson2: { title: "All Done? Do This!",        href: "/code/ict8/unit4/extension.html" },
            lesson3: { title: "Showcase Sites",        href: "/code/ict8/unit4/web_dev/master_index.html" }
          }
        }
      }
    },
  
    ict9: {
      title: "ICT 9",
      href: "/code/ict9/index.html",
      units: {
        unit1: {
          title: "U1 Essential Skills",
          href: "/code/ict9/unit1/index.html",
          pages: {
            lesson1: { title: "1.1 Welcome to ICT 9!",    href: "/code/ict9/unit1/lesson1/index.html" },
            lesson2: { title: "1.2 ",                     href: "/code/ict9/unit1/lesson2/index.html" }
          }
        },
        unit2: {
          title: "U2 Game Development",
          href: "/code/ict9/unit2/index.html",
          pages: {
            label1: { title: "2.1 Game Setup",         href: "/code/ict9/unit2/lesson1/index.html" },
            label2: { title: "2.2 Adding Platforms",   href: "/code/ict9/unit2/lesson2/index.html" },
            label3: { title: "2.3 Adding the Player",  href: "/code/ict9/unit2/lesson3/index.html" },
            label4: { title: "2.4 Adding Enemies",     href: "/code/ict9/unit2/lesson4/index.html" },
            label5: { title: "2.5 Game Mechanics",     href: "/code/ict9/unit2/lesson5/index.html" },
            label6: { title: "2.6 Enhancements",       href: "/code/ict9/unit2/lesson6/index.html" },
            label7: { title: "U2 Final Project",       href: "/code/ict9/unit2/unit_project/index.html" }

          }
        },
        unit3: {
          title: "U3 Game Promotion & Branding",
          href: "/code/ict9/unit3/index.html",
          pages: {
            lesson1: { title: "3.1 Understanding Promotion",  href: "/code/ict9/unit3/lesson1/index.html" },
            lesson2: { title: "3.2 Brand Identity Design",    href: "/code/ict9/unit3/lesson2/3.2_index.html" },
            lesson3: { title: "3.3 Asset Creation",           href: "/code/ict9/unit3/lesson3/3.3_index.html" },
            lesson4: { title: "3.4 Poster Design",            href: "/code/ict9/unit3/lesson4/3.4_index.html" },
            lesson5: { title: "3.5 Game Trailer Production",  href: "/code/ict9/unit3/lesson5/3.5_index.html" },
            lesson6: { title: "3.6 Website Design",           href: "/code/ict9/unit3/lesson6/3.6_index.html" },
            lesson7: { title: "Game Websites Showcase",            href: "/code/ict9/unit3/student_sites/student_sites_index.html" }
          }
        },
        unit4: {
          title: "Unit 4",
          href: "/code/ict9/unit4/index.html",
          pages: {
            lesson1: { title: "4.1",     href: "" },
            lesson2: { title: "4.2",     href: "" }
          }
        },
        unit5: {
          title: "Unit 5",
          href: "/code/ict9/unit5/index.html",
          pages: {
            lesson1: { title: "5.1",     href: "" },
            lesson2: { title: "5.2",     href: "" }
          }
        }
      }
    },
  
    dc1011: {
      title: "Digital Communications 10/11",
      href: "/code/dc1011/index.html",
      units: {
        unit1: {
          title: "U1 Intro to Digital Communications",
          href: "/code/dc1011/unit1/index.html",
          pages: {
            lesson1: { title: "1.1 Digital Media in our Lives",         href: "/code/dc1011/unit1/lesson1/index.html" },
            lesson2: { title: "1.2 Digital Citizenship & Footprint",    href: "/code/dc1011/unit1/lesson2/index.html" },
            lesson3: { title: "1.3 File Management",                    href: "/code/dc1011/unit1/lesson3/index.html" },
            lesson4: { title: "1.4 Design Principles Basics",           href: "/code/dc1011/unit1/lesson4/index.html" },
            lesson5: { title: "1.5 My Digital Identity",                href: "/code/dc1011/unit1/lesson5/index.html" }
          }
        },
        unit2: {
          title: "U2 Building Your Digital Identity",
          href: "/code/dc1011/unit2/index.html",
          pages: {
            lesson1: { title: "2.1 Building Your Personal Brand",   href: "/code/dc1011/unit2/lesson1/index.html" },
            lesson2: { title: "2.2 Personal Style Guide",           href: "/code/dc1011/unit2/lesson2/index.html" },
            lesson3: { title: "2.3 Monogram & Header",              href: "/code/dc1011/unit2/lesson3/index.html" },
            lesson4: { title: "2.4 Visual Storytelling",            href: "/code/dc1011/unit2/lesson4/index.html" }
          }
        },
        unit3: {
          title: "U3 Creating Podcasts & Audio Stories",
          href: "/code/dc1011/unit3/index.html",
          pages: {
            lesson1: { title: "3.1 Intro to Audio Storytelling",    href: "/code/dc1011/unit3/topic1/index.html" },
            lesson2: { title: "3.2 Scriptwriting",                  href: "/code/dc1011/unit3/topic2/index.html" },
            lesson3: { title: "3.3 Audio Production",               href: "/code/dc1011/unit3/topic3/index.html" },
            lesson4: { title: "3.4 Publishing & Showcase",          href: "/code/dc1011/unit3/topic4/index.html" },
            lesson5: { title: "Student Podcast Gallery",            href: "/code/dc1011/unit3/podcasts/podcast_index.html" }
          }
        },
        unit4: {
          title: "U4 Video Production for the Web",
          href: "/code/dc1011/unit4/index.html",
          pages: {
            lesson1: { title: "4.1 Video in Digital Communication",   href: "/code/dc1011/unit4/lesson1/4.1_index.html" },
            lesson2: { title: "4.2 Concept & Pre-Production",         href: "/code/dc1011/unit4/lesson2/4.2_index.html" },
            lesson3: { title: "4.3 Filming Essentials",               href: "/code/dc1011/unit4/lesson3/4.3_index.html" },
            lesson4: { title: "4.4 Video Production",                 href: "/code/dc1011/unit4/lesson4/4.4_index.html" },
            lesson5: { title: "4.5 Class Video Showcase",                href: "/code/dc1011/unit4/lesson5/4.5_index.html" },
            lesson6: { title: "4.6 Reflection & Peer Feedback",         href: "/code/dc1011/unit4/lesson6/4.6_index.html" },
            lesson7: { title: "Student Video Gallery",                 href: "/code/dc1011/unit4/lesson7/gallery_index.html" }
          }
        },
        unit5: {
          title: "U5 Web Design & Development",
          href: "/code/dc1011/unit5/u5_index.html",
          pages: {
            lesson1: { title: "5.1 Intro to Web Design",                  href: "/code/dc1011/unit5/lesson1/5.1_index.html" },
            lesson2: { title: "5.2 Website Content",                      href: "/code/dc1011/unit5/lesson2/5.2_index.html" },
            lesson3: { title: "5.3 Building Our Website Pages",             href: "/code/dc1011/unit5/lesson3/5.3_index.html" },
            lesson4: { title: "5.4 Formatting Our Website",                    href: "/code/dc1011/unit5/lesson4/5.4_index.html" },
            lesson5: { title: "5.5 Publishing Your Website",             href: "/code/dc1011/unit5/lesson5/5.5_index.html" },
            lesson6: { title: "5.6 Final Polish & Submission",                  href: "/code/dc1011/unit5/student_sites/student_sites_index.html" }
          }
        }
      }
    }
  };
  
