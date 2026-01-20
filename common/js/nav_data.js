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
      href: "/ict8/ict8_index.html",
      units: {
        unit1: {
          title: "U1 Essential Skills",
          href: "/ict8/unit1/u1_index.html",
          pages: {
            lesson1: { title: "1.1 Welcome to ICT 8",       href: "/ict8/unit1/lesson1/1.1_index.html" },
            lesson2: { title: "1.2 File Management",        href: "/ict8/unit1/lesson2/1.2_index.html" },
            lesson3: { title: "1.3 Parts of My Computer",   href: "/ict8/unit1/lesson3/1.3_index.html" },
          }
        },
        unit2: {
          title: "U2 Digital Media",
          href: "/ict8/unit2/u2_index.html",
          pages: {
            lesson1: { title: "2.1 Canva: About Me",        href: "/ict8/unit2/lesson1/2.1_index.html" },
            lesson2: { title: "2.2 Excel: Class Data",      href: "/ict8/unit2/lesson2/2.2_index.html" },
            lesson3: { title: "2.3 Image Editing",          href: "/ict8/unit2/lesson3/2.3_index.html" },

            
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
            lesson1: { title: "Editing Your HTML",         href: "/ict8/unit4/edit_html_steps/u4_index.html" },
            lesson2: { title: "All Done? Do This!",        href: "/ict8/unit4/u4_extension.html" },
            lesson3: { title: "Showcase Sites",            href: "/ict8/unit4/web_dev/master_index.html" }
          }
        }
      }
    },
  
    ict9: {
      title: "ICT 9",
      href: "/ict9/index.html",
      units: {
        unit1: {
          title: "U1 Essential Skills",
          href: "/ict9/unit1/index.html",
          pages: {
            lesson1: { title: "1.1 Welcome to ICT 9!",    href: "/ict9/unit1/lesson1/index.html" },
            lesson2: { title: "1.2 ",                     href: "/ict9/unit1/lesson2/index.html" }
          }
        },
        unit2: {
          title: "U2 Game Development",
          href: "/ict9/unit2/index.html",
          pages: {
            label1: { title: "2.1 Game Setup",         href: "/ict9/unit2/lesson1/index.html" },
            label2: { title: "2.2 Adding Platforms",   href: "/ict9/unit2/lesson2/index.html" },
            label3: { title: "2.3 Adding the Player",  href: "/ict9/unit2/lesson3/index.html" },
            label4: { title: "2.4 Adding Enemies",     href: "/ict9/unit2/lesson4/index.html" },
            label5: { title: "2.5 Game Mechanics",     href: "/ict9/unit2/lesson5/index.html" },
            label6: { title: "2.6 Enhancements",       href: "/ict9/unit2/lesson6/index.html" },
            label7: { title: "U2 Final Project",       href: "/ict9/unit2/unit_project/index.html" }

          }
        },
        unit3: {
          title: "U3 Game Promotion & Branding",
          href: "/ict9/unit3/index.html",
          pages: {
            lesson1: { title: "3.1 Understanding Promotion",  href: "/ict9/unit3/lesson1/index.html" },
            lesson2: { title: "3.2 Brand Identity Design",    href: "/ict9/unit3/lesson2/3.2_index.html" },
            lesson3: { title: "3.3 Asset Creation",           href: "/ict9/unit3/lesson3/3.3_index.html" },
            lesson4: { title: "3.4 Poster Design",            href: "/ict9/unit3/lesson4/3.4_index.html" },
            lesson5: { title: "3.5 Game Trailer Production",  href: "/ict9/unit3/lesson5/3.5_index.html" },
            lesson6: { title: "3.6 Website Design",           href: "/ict9/unit3/lesson6/3.6_index.html" },
            lesson7: { title: "Game Websites Showcase",            href: "/ict9/unit3/student_sites/student_sites_index.html" }
          }
        },
        unit4: {
          title: "Unit 4",
          href: "/ict9/unit4/index.html",
          pages: {
            lesson1: { title: "4.1",     href: "" },
            lesson2: { title: "4.2",     href: "" }
          }
        },
        unit5: {
          title: "Unit 5",
          href: "/ict9/unit5/index.html",
          pages: {
            lesson1: { title: "5.1",     href: "" },
            lesson2: { title: "5.2",     href: "" }
          }
        }
      }
    },
  
    dc1011: {
      title: "Digital Communications 10/11",
      href: "/dc1011/index.html",
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
  
