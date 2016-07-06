function clearModal(){clear($modalBody),$modal.style.display="none",document.body.style.overflow="visible"}var $=function(a){function b(a){var b=a.substr(1);return b}if(a.indexOf("#")>-1){var c=b(a),d=document.getElementById(c);return d}var e=b(a),f=document.getElementsByClassName(e);return f.length>1?f:f[0]},clear=function(a){if(Array.isArray(a)){var b=a.length;for(i=b;i--;)a[i].textContent=""}else a.textContent=""},getNthChild=function(a,b){if(!Array.isArray(a)){var c=a.childNodes[b];return c}},projects={project:[{projectName:"SURFLIST",modalBanner:"/img/surflist_banner.svg",bannerDescription:"surflist banner",shortDescription:"made a wave finder app for surfers",projectDescription:"This is a single-page, responsive web application built from scratch where surfers can discover waves that fit their individual needs and criteria. Users can find a new wave break simply by scrolling through the list of locations. Locations are also searchable and can be explored via Google maps.",infoBullets:["JavaScript design patterns","JavaScript frameworks such as Knockout.js (MVVM)","loading data via AJAX requests","implementation of third-party APIs","storing assets to local storage for faster loading","caching application assets and files for faster loading","building with Grunt and Node.js modules for streamlining the build process","implementing image sprite sheets as well as external svg sprite sheets","utilizing Firebase for hosting, user authentication, and back-end data storage"],externalLink:"https://dazzling-torch-4012.firebaseapp.com/",cssClass:"surflist"},{projectName:"CARTMAN CRUSH",modalBanner:"/img/cartmancrush_banner.png",bannerDescription:"cartman crush banner",shortDescription:"created a frogger-like arcade game",projectDescription:"This is a desktop-based Frogger-like game where the player, Eric Cartman, must navigate a street filled with killer bugs in order to reach the water on the opposite side.",infoBullets:["closures","object prototype chains","variable scope","HTML5 Canvas for game animation"],externalLink:"https://ndnewell.github.io/frontend-nanodegree-arcade-game/",cssClass:"ccrush"},{projectName:"UdaciFeeds",modalBanner:"/img/udacifeeds.svg",bannerDescription:"udacifeeds banner",shortDescription:"completed testing for this web app",projectDescription:"This project consisted of being given a web-based application that reads RSS feeds. The original developer included an incomplete testing suite using Jasmine. The project aim was to complete the testing suite by writing tests that pass.",infoBullets:["ensuring loops work properly","determining if URLs are defined","checking if name fields are completed","ensuring the menu element is hidden by default","checking if the menu changes visiblity when clicked","making sure the feeds load properly"],externalLink:"http://NDNewell.github.io/frontend-nanodegree-feedreader",cssClass:"udacifeeds"},{projectName:"Web Performance Optimization",modalBanner:"/img/perfopt.jpg",bannerDescription:"web performance optimization banner",shortDescription:"optimized loading and performance",projectDescription:"This project involved being provided two websites with performance related issues. For Cam's Profile website, the goal was to optimize the page loading speed to a PageSpeed score of above 90. For Cam's Pizzeria website, the goal was to increase the frames per second (FPS) to 60+ by reviewing and replacing inefficient code with more succinct constructions.",infoBullets:["optimization of the critical rendering path (CRP)","profiling sites through a mobile phone via Chrome Canary","optimizing the DOM","unblocking CSS with media queries","asyncing JavaScript","workflow (Gulp and Grunt)"],externalLink:"https://ndnewell.github.io/frontend-nanodegree-mobile-portfolio",cssClass:"perf"}]};menu.addEventListener("click",function(a){drawer.classList.toggle("open"),a.stopPropagation(),document.body.style.overflow="hidden"}),drawer.addEventListener("click",function(a){drawer.classList.toggle("open"),a.stopPropagation(),document.body.style.overflow="visible"});var $projectSection=$(".projects"),$modal=$("#project-modal"),$modalBody=$(".modal-body"),$closeModalBtn=$(".close"),projectsConstructor=function(){function a(a){var c=document.createElement("div");c.className=a.cssClass+"-card project",h.appendChild(c);var d=$("."+a.cssClass+"-card"),e=document.createElement("img");e.src=a.modalBanner,e.alt=a.bannerDescription,d.appendChild(e);var f=document.createElement("p"),g=document.createTextNode(a.shortDescription);f.appendChild(g),d.appendChild(f);var i=document.createElement("button");i.type="button",i.className=a.cssClass+"-info-btn";var j=document.createTextNode("more info");i.appendChild(j),d.appendChild(i);var k=$("."+a.cssClass+"-info-btn");b(k,a)}function b(a,b){a.addEventListener("click",function(a){return function(){modalConstructor(b),$modal.style.display="block",document.body.style.overflow="hidden"}}(b))}var c=document.createElement("div");c.className="projects-card card",$projectSection.appendChild(c);var d=$(".projects-card"),e=document.createElement("h3"),f=document.createTextNode("-work-");e.appendChild(f),d.appendChild(e);var g=document.createElement("div");g.className="projects-container",d.appendChild(g);var h=$(".projects-container"),j=projects.project.length;for(i=0;i<j;i++){var k=projects.project[i];a(k)}}(),modalConstructor=function(a){var b=document.createElement("div");b.className="modal-img-container",$modalBody.appendChild(b);var c=$(".modal-img-container"),d=document.createElement("img");d.src=a.modalBanner,d.alt=a.bannerDescription,c.appendChild(d);var e=document.createElement("div");e.className="modal-txt-container",$modalBody.appendChild(e);var f=$(".modal-txt-container"),g=document.createElement("h3"),h=document.createTextNode(a.projectName);g.appendChild(h),f.appendChild(g);var i=document.createElement("p"),j=document.createTextNode(a.projectDescription);i.appendChild(j),f.appendChild(i);var k=document.createElement("hX"),l=document.createTextNode("The project focused on:");k.appendChild(l),f.appendChild(k);var m=document.createElement("ul");m.className=a.cssClass+"-ul-list",f.appendChild(m);for(var n=a.infoBullets.length,o=$("."+a.cssClass+"-ul-list"),p=0;p<n;p++){var q=document.createElement("li"),r=document.createTextNode(a.infoBullets[p]);q.appendChild(r),o.appendChild(q)}var s=document.createElement("div");s.className="link-container",f.appendChild(s);var t=$(".link-container"),u=document.createElement("a");u.href=a.externalLink,u.target="_blank",u.className=a.cssClass+"-link",t.appendChild(u),$extLinkElem=$("."+a.cssClass+"-link");var v=document.createElement("img");v.src="/img/publish.svg",v.alt="link to project icon",$extLinkElem.appendChild(v)};$closeModalBtn.addEventListener("click",function(a){clearModal()}),window.addEventListener("click",function(a){a.target==$modal&&clearModal()});