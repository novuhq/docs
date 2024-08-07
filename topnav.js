const topNavLinks = [
  {
    label: "Pricing",
    url: "https://novu.co/pricing/?utm_campaign=docs_top_nav",
  },
  { label: "Blog", url: "https://novu.co/blog/?utm_campaign=docs_top_nav" },
  {
    label: "Contact us",
    url: "https://novu.co/contact-us/?utm_campaign=docs_top_nav",
  },
];

const topNavCta = {
  label: "Get Started",
  url: "https://dashboard.novu.co?utm_campaign=docs_top_bar_gs",
};

const darkLogo = `<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
viewBox="0 0 2355.4 300" style="enable-background:new 0 0 2355.4 300;" xml:space="preserve" class="hidden dark:block h-7 w-auto">
<style type="text/css">
.st0-dark{fill-rule:evenodd;clip-rule:evenodd;fill:url(#SVGID_1_DARK);}
.st1-dark{fill:#FFFFFF;}
.st2-dark{enable-background:new    ;}
</style>
<linearGradient id="SVGID_1_DARK" gradientUnits="userSpaceOnUse" x1="300.0336" y1="778.0336" x2="3.359374e-02" y2="1078.0336" gradientTransform="matrix(1 0 0 1 0 -778)">
<stop  offset="0.2317" style="stop-color:#FF884D"/>
<stop  offset="0.8017" style="stop-color:#E300BD"/>
</linearGradient>
<path class="st0-dark" d="M231,120.2c0,8.1-9.8,12.1-15.4,6.3L100.1,8.5C115.7,3,132.5,0,150,0c29.8,0,57.6,8.7,81,23.7V120.2z M273,64.1
v56.1c0,45.7-55.5,68.3-87.5,35.7L61.4,29C24.2,56.3,0,100.3,0,150c0,31.9,10,61.6,27,85.9v-55.8c0-45.7,55.5-68.3,87.5-35.7
l124,126.8C275.8,243.9,300,199.8,300,150C300,118.1,290,88.4,273,64.1z M84.4,173.8l115.3,117.8c-15.6,5.5-32.3,8.4-49.7,8.4
c-29.8,0-57.6-8.7-81-23.7v-96.2C69,172,78.8,168,84.4,173.8z"/>
<path class="st1-dark" d="M487.3,223.3v-82.4c0-14.2-3.4-25-10.2-32.4c-6.8-7.4-17.5-11.1-32.2-11.1c-9.9,0-17.8,1-23.7,2.9
c-5.8,1.8-9.6,3-11.1,3.8v119.2H380V84.9c0.8-0.4,2.9-1.3,6.4-2.6c3.5-1.4,8.2-2.8,14-4.4s12.7-2.9,20.5-4.1s16.4-1.8,25.7-1.8
c10.7,0,20.5,1.5,29.2,4.4c8.8,2.7,16.2,6.7,22.2,12c6.2,5.3,11,11.6,14.3,19c3.3,7.4,5,15.8,5,25.1v90.9L487.3,223.3L487.3,223.3z"
/>
<path class="st1-dark" d="M713.3,150c0,11.1-1.9,21.4-5.8,31c-3.7,9.5-9,17.8-15.8,24.8c-6.8,6.8-15,12.3-24.6,16.4
c-9.6,3.9-20.1,5.8-31.6,5.8s-22.1-1.9-31.9-5.8c-9.6-4.1-17.7-9.5-24.6-16.4c-6.8-7-12.2-15.3-16.1-24.8c-3.7-9.5-5.6-19.9-5.6-31
s1.9-21.4,5.6-31c3.9-9.5,9.3-17.7,16.1-24.5c6.8-7,15-12.5,24.6-16.4C613.4,74,624,72,635.5,72s22,2,31.6,6.1
c9.6,3.9,17.7,9.3,24.6,16.4c6.8,6.8,12.1,15,15.8,24.5C711.3,128.6,713.3,138.9,713.3,150z M682,150c0-7.8-1.1-14.9-3.2-21.3
c-2.1-6.6-5.3-12.3-9.4-16.9c-3.9-4.9-8.8-8.6-14.6-11.1c-5.7-2.7-12.1-4.1-19.3-4.1c-7.4,0-14,1.4-19.9,4.1
c-5.7,2.5-10.5,6.2-14.6,11.1c-3.9,4.7-6.9,10.3-9.1,16.9c-2.1,6.4-3.2,13.5-3.2,21.3s1.1,15,3.2,21.6c2.1,6.4,5.2,12.1,9.1,16.9
c4.1,4.7,9,8.4,14.6,11.1c5.8,2.5,12.5,3.8,19.9,3.8c7.2,0,13.6-1.3,19.3-3.8c5.8-2.7,10.7-6.4,14.6-11.1c4.1-4.9,7.2-10.5,9.4-16.9
C680.9,165,682,157.8,682,150z"/>
<path class="st1-dark" d="M888.3,83.1c-1.2,4.3-3.2,10-6.1,17.2c-2.7,7-5.9,14.9-9.6,23.7s-7.8,18-12.3,27.8c-4.3,9.5-8.7,18.9-13.2,28
c-4.3,9-8.5,17.4-12.6,25.4c-3.9,7.8-7.3,14.3-10.2,19.6H793c-3.5-6.2-7.2-13-11.1-20.4c-3.7-7.6-7.5-15.2-11.4-22.8
c-3.7-7.8-7.3-15.5-10.8-23.1s-6.8-14.6-9.9-21c-2.9-6.6-5.6-12.5-7.9-17.5c-2.1-5.1-3.8-9-5-11.7s-2.3-5.6-3.5-8.8
c-1.2-3.1-1.8-6-1.8-8.8c0-3.5,1.2-6.7,3.5-9.6s6.3-4.4,12-4.4c3.9,0,6.9,0.4,9.1,1.2c2.1,0.8,3.3,1.3,3.5,1.5
c3.3,9.2,7.1,19.2,11.4,30.1c4.5,10.9,9,21.7,13.5,32.4c4.7,10.5,9.2,20.6,13.4,30.4c4.3,9.5,8.1,17.6,11.4,24.2
c2.3-4.5,5.4-10.8,9.1-19c3.9-8.4,7.9-17.5,12-27.5c4.3-9.9,8.6-20.2,12.9-30.7s8.1-20.2,11.4-28.9c1.6-4.3,3.5-7.6,5.8-9.9
c2.3-2.5,6.2-3.8,11.7-3.8c4.7,0,8.4,0.9,11.1,2.6C886.2,81.1,887.9,82.3,888.3,83.1z"/>
<path class="st1-dark" d="M1018.9,90.4c0-4.7,1.4-8.1,4.1-10.2c2.7-2.3,6.6-3.5,11.7-3.5c3.3,0,6.2,0.4,8.8,1.2c2.7,0.8,4.6,1.4,5.6,1.8
v143.7c-1.4,0.4-3.8,0.8-7.3,1.2c-3.3,0.4-7.4,0.8-12.3,1.2c-4.9,0.6-10.2,1-16.1,1.2c-5.9,0.4-11.8,0.6-17.8,0.6
c-17.7,0-32.2-2.1-43.3-6.4c-10.9-4.3-19.6-10.5-26-18.7c-8-10.3-12-24.1-12-41.2V90.4c0-4.7,1.4-8.1,4.1-10.2
c2.7-2.3,6.6-3.5,11.7-3.5c3.3,0,6.2,0.4,8.8,1.2c2.7,0.8,4.6,1.4,5.6,1.8V158c0,14.8,3.7,25.9,11.1,33.3
c7.6,7.4,20.4,11.1,38.3,11.1c6.8,0,12.3-0.2,16.4-0.6c4.3-0.6,7.2-1.1,8.8-1.5V90.4H1018.9z"/>
<g class="st2-dark">
<path class="st1-dark" d="M1230.5,203.5h-6.8v-11.3c0-3.7,0.5-6.5,0.5-6.5h-0.3c-4.5,10-16.5,19.8-30.8,19.8
   c-21.7,0-37.4-18.6-37.4-42.4c0-24.3,15.7-42.4,37.4-42.4c14.3,0,26.2,9.7,30.8,19.8h0.3c0,0-0.5-2.8-0.5-6.5v-47h6.8V203.5z
    M1162.8,163c0,20.1,11.8,35.8,30.3,35.8c14.4,0,30.8-10.7,30.8-35.8c0-25.1-16.4-35.8-30.8-35.8
   C1174.6,127.2,1162.8,142.4,1162.8,163z"/>
<path class="st1-dark" d="M1339.5,163c0,24.3-17.2,42.4-40.3,42.4s-40.3-18.1-40.3-42.4c0-24.3,17.2-42.4,40.3-42.4
   S1339.5,138.7,1339.5,163z M1332.4,163c0-20.6-13.8-35.8-33.2-35.8S1266,142.4,1266,163c0,20.6,13.8,35.8,33.2,35.8
   S1332.4,183.5,1332.4,163z"/>
<path class="st1-dark" d="M1406.9,198.8c12.3,0,20.3-3.7,26.7-7.6v7.5c-6.5,3.4-14.3,6.8-26.7,6.8c-23.5,0-40.7-18.1-40.7-42.4
   c0-24.3,17.2-42.4,40.7-42.4c12.5,0,19.8,3.4,26.2,6.8v7.5c-6.5-3.9-13.9-7.6-26.2-7.6c-19.8,0-33.5,15.2-33.5,35.8
   C1373.4,183.5,1387.1,198.8,1406.9,198.8z"/>
<path class="st1-dark" d="M1457.1,122.5h6.6v48.9c0,14.1,1.8,27.4,19.9,27.4c20.3,0,33.2-17.8,33.2-36.8v-39.5h6.8v81h-6.8v-14.3
   c0-3.7,0.6-6.6,0.6-6.6h-0.3c-2.8,7.6-13.9,22.8-33.5,22.8c-19.9,0-26.6-11-26.6-31.6V122.5z"/>
<path class="st1-dark" d="M1566.2,122.5v14.3c0,3.7-0.6,6.6-0.6,6.6h0.3c4-12.2,18.5-22.8,31.1-22.8c16.2,0,23.8,7.6,25.6,22h0.3
   c4.5-11.3,16.8-22,30.8-22c20.9,0,27.1,12.3,27.1,31.6v51.4h-6.8v-48.9c0-15.2-3.1-27.4-20.2-27.4c-19,0-30.1,19.8-30.1,36.8v39.5
   h-6.8v-48.9c0-13.9-1.9-27.4-19.8-27.4c-18.8,0-30.8,19.4-30.8,36.8v39.5h-6.8v-81H1566.2z"/>
<path class="st1-dark" d="M1781.3,158.4v3.9h-66.7v1.5c0,20.7,13.8,35,33.4,35c10.7,0,21.5-3.1,30.5-8.9v7.5c-7.5,4.5-18.3,8.1-30.3,8.1
   c-23.5,0-40.7-17.2-40.7-42.4c0-24.5,16.7-42.4,38.4-42.4C1768.5,120.5,1781.3,138.5,1781.3,158.4z M1745.6,127.2
   c-17.8,0-28.7,14.6-30.6,29.5h58.8C1773.8,141.7,1764.1,127.2,1745.6,127.2z"/>
<path class="st1-dark" d="M1815.6,122.5v14.3c0,3.7-0.6,6.6-0.6,6.6h0.3c2.8-7.6,14.1-22.8,34.3-22.8c21.1,0,26.7,12.5,26.7,31.6v51.4
   h-6.8v-48.9c0-14.1-1.8-27.4-19.9-27.4c-19.3,0-34,16-34,36.8v39.5h-6.8v-81H1815.6z"/>
<path class="st1-dark" d="M1910.9,122.5V98.2h6.8v24.3h27.1v6h-27.1v51.8c0,13.9,5.7,18.8,13.8,18.8c4.9,0,11-1.3,16.2-3.9v6.3
   c-3.7,2.1-9.9,3.9-16.7,3.9c-10.4,0-20.1-5.7-20.1-24.5v-52.5h-15.1v-6H1910.9z"/>
<path class="st1-dark" d="M1968.7,126.8c4.5-2.6,14.9-6.3,27.2-6.3c21.1,0,31.1,10.4,31.1,30.6v52.3h-6.8V192c0-4.4,0.6-7.3,0.6-7.3
   h-0.3c0.2,0-10.2,20.7-31.9,20.7c-14.9,0-24.8-9.2-24.8-21.5c0-20.7,23.2-30.8,56.4-25.8v-6.8c0-18-9.9-24.1-24.6-24.1
   c-12.1,0-22.8,4.2-26.9,6.8V126.8z M2020.2,164.3c-30-4.9-49.2,3.2-49.2,19.1c0,8.9,7,15.4,18,15.4
   C2007.1,198.8,2020.2,180.8,2020.2,164.3z"/>
<path class="st1-dark" d="M2065.6,122.5V98.2h6.8v24.3h27.1v6h-27.1v51.8c0,13.9,5.7,18.8,13.8,18.8c4.9,0,11-1.3,16.2-3.9v6.3
   c-3.7,2.1-9.9,3.9-16.7,3.9c-10.4,0-20.1-5.7-20.1-24.5v-52.5h-15.1v-6H2065.6z"/>
<path class="st1-dark" d="M2125.2,93c3.2,0,5.7,2.4,5.7,5.7s-2.4,5.7-5.7,5.7s-5.7-2.4-5.7-5.7S2122,93,2125.2,93z M2128.6,122.5v81
   h-6.8v-81H2128.6z"/>
<path class="st1-dark" d="M2237.6,163c0,24.3-17.2,42.4-40.3,42.4c-23.2,0-40.3-18.1-40.3-42.4c0-24.3,17.2-42.4,40.3-42.4
   C2220.5,120.5,2237.6,138.7,2237.6,163z M2230.5,163c0-20.6-13.8-35.8-33.2-35.8s-33.2,15.2-33.2,35.8c0,20.6,13.8,35.8,33.2,35.8
   S2230.5,183.5,2230.5,163z"/>
<path class="st1-dark" d="M2272.8,122.5v14.3c0,3.7-0.6,6.6-0.6,6.6h0.3c2.8-7.6,14.1-22.8,34.3-22.8c21.1,0,26.7,12.5,26.7,31.6v51.4
   h-6.8v-48.9c0-14.1-1.8-27.4-19.9-27.4c-19.3,0-34,16-34,36.8v39.5h-6.8v-81H2272.8z"/>
</g>
</svg>
`;

const lightLogo = `<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
viewBox="0 0 2355.4 300" style="enable-background:new 0 0 2355.4 300;" class="block dark:hidden h-7 w-auto" xml:space="preserve">
<style type="text/css">
.st0-white{fill-rule:evenodd;clip-rule:evenodd;fill:url(#SVGID_1_LIGHT);}
.st1-white{enable-background:new    ;}
</style>
<linearGradient id="SVGID_1_LIGHT" gradientUnits="userSpaceOnUse" x1="300.0336" y1="778.0336" x2="3.359374e-02" y2="1078.0336" gradientTransform="matrix(1 0 0 1 0 -778)">
<stop  offset="0.2317" style="stop-color:#FF884D"/>
<stop  offset="0.8017" style="stop-color:#E300BD"/>
</linearGradient>
<path class="st0-white" d="M231,120.2c0,8.1-9.8,12.1-15.4,6.3L100.1,8.5C115.7,3,132.5,0,150,0c29.8,0,57.6,8.7,81,23.7V120.2z M273,64.1
v56.1c0,45.7-55.5,68.3-87.5,35.7L61.4,29C24.2,56.3,0,100.3,0,150c0,31.9,10,61.6,27,85.9v-55.8c0-45.7,55.5-68.3,87.5-35.7
l124,126.8C275.8,243.9,300,199.8,300,150C300,118.1,290,88.4,273,64.1z M84.4,173.8l115.3,117.8c-15.6,5.5-32.3,8.4-49.7,8.4
c-29.8,0-57.6-8.7-81-23.7v-96.2C69,172,78.8,168,84.4,173.8z"/>
<path d="M487.3,223.3v-82.4c0-14.2-3.4-25-10.2-32.4c-6.8-7.4-17.5-11.1-32.2-11.1c-9.9,0-17.8,1-23.7,2.9c-5.8,1.8-9.6,3-11.1,3.8
v119.2H380V84.9c0.8-0.4,2.9-1.3,6.4-2.6c3.5-1.4,8.2-2.8,14-4.4s12.7-2.9,20.5-4.1s16.4-1.8,25.7-1.8c10.7,0,20.5,1.5,29.2,4.4
c8.8,2.7,16.2,6.7,22.2,12c6.2,5.3,11,11.6,14.3,19c3.3,7.4,5,15.8,5,25.1v90.9L487.3,223.3L487.3,223.3z"/>
<path d="M713.3,150c0,11.1-1.9,21.4-5.8,31c-3.7,9.5-9,17.8-15.8,24.8c-6.8,6.8-15,12.3-24.6,16.4c-9.6,3.9-20.1,5.8-31.6,5.8
s-22.1-1.9-31.9-5.8c-9.6-4.1-17.7-9.5-24.6-16.4c-6.8-7-12.2-15.3-16.1-24.8c-3.7-9.5-5.6-19.9-5.6-31s1.9-21.4,5.6-31
c3.9-9.5,9.3-17.7,16.1-24.5c6.8-7,15-12.5,24.6-16.4C613.4,74,624,72,635.5,72s22,2,31.6,6.1c9.6,3.9,17.7,9.3,24.6,16.4
c6.8,6.8,12.1,15,15.8,24.5C711.3,128.6,713.3,138.9,713.3,150z M682,150c0-7.8-1.1-14.9-3.2-21.3c-2.1-6.6-5.3-12.3-9.4-16.9
c-3.9-4.9-8.8-8.6-14.6-11.1c-5.7-2.7-12.1-4.1-19.3-4.1c-7.4,0-14,1.4-19.9,4.1c-5.7,2.5-10.5,6.2-14.6,11.1
c-3.9,4.7-6.9,10.3-9.1,16.9c-2.1,6.4-3.2,13.5-3.2,21.3s1.1,15,3.2,21.6c2.1,6.4,5.2,12.1,9.1,16.9c4.1,4.7,9,8.4,14.6,11.1
c5.8,2.5,12.5,3.8,19.9,3.8c7.2,0,13.6-1.3,19.3-3.8c5.8-2.7,10.7-6.4,14.6-11.1c4.1-4.9,7.2-10.5,9.4-16.9
C680.9,165,682,157.8,682,150z"/>
<path d="M888.3,83.1c-1.2,4.3-3.2,10-6.1,17.2c-2.7,7-5.9,14.9-9.6,23.7s-7.8,18-12.3,27.8c-4.3,9.5-8.7,18.9-13.2,28
c-4.3,9-8.5,17.4-12.6,25.4c-3.9,7.8-7.3,14.3-10.2,19.6H793c-3.5-6.2-7.2-13-11.1-20.4c-3.7-7.6-7.5-15.2-11.4-22.8
c-3.7-7.8-7.3-15.5-10.8-23.1s-6.8-14.6-9.9-21c-2.9-6.6-5.6-12.5-7.9-17.5c-2.1-5.1-3.8-9-5-11.7s-2.3-5.6-3.5-8.8
c-1.2-3.1-1.8-6-1.8-8.8c0-3.5,1.2-6.7,3.5-9.6s6.3-4.4,12-4.4c3.9,0,6.9,0.4,9.1,1.2c2.1,0.8,3.3,1.3,3.5,1.5
c3.3,9.2,7.1,19.2,11.4,30.1c4.5,10.9,9,21.7,13.5,32.4c4.7,10.5,9.2,20.6,13.4,30.4c4.3,9.5,8.1,17.6,11.4,24.2
c2.3-4.5,5.4-10.8,9.1-19c3.9-8.4,7.9-17.5,12-27.5c4.3-9.9,8.6-20.2,12.9-30.7s8.1-20.2,11.4-28.9c1.6-4.3,3.5-7.6,5.8-9.9
c2.3-2.5,6.2-3.8,11.7-3.8c4.7,0,8.4,0.9,11.1,2.6C886.2,81.1,887.9,82.3,888.3,83.1z"/>
<path d="M1018.9,90.4c0-4.7,1.4-8.1,4.1-10.2c2.7-2.3,6.6-3.5,11.7-3.5c3.3,0,6.2,0.4,8.8,1.2c2.7,0.8,4.6,1.4,5.6,1.8v143.7
c-1.4,0.4-3.8,0.8-7.3,1.2c-3.3,0.4-7.4,0.8-12.3,1.2c-4.9,0.6-10.2,1-16.1,1.2c-5.9,0.4-11.8,0.6-17.8,0.6
c-17.7,0-32.2-2.1-43.3-6.4c-10.9-4.3-19.6-10.5-26-18.7c-8-10.3-12-24.1-12-41.2V90.4c0-4.7,1.4-8.1,4.1-10.2
c2.7-2.3,6.6-3.5,11.7-3.5c3.3,0,6.2,0.4,8.8,1.2c2.7,0.8,4.6,1.4,5.6,1.8V158c0,14.8,3.7,25.9,11.1,33.3
c7.6,7.4,20.4,11.1,38.3,11.1c6.8,0,12.3-0.2,16.4-0.6c4.3-0.6,7.2-1.1,8.8-1.5V90.4H1018.9z"/>
<g class="st1-white">
<path d="M1230.5,203.5h-6.8v-11.3c0-3.7,0.5-6.5,0.5-6.5h-0.3c-4.5,10-16.5,19.8-30.8,19.8c-21.7,0-37.4-18.6-37.4-42.4
   c0-24.3,15.7-42.4,37.4-42.4c14.3,0,26.2,9.7,30.8,19.8h0.3c0,0-0.5-2.8-0.5-6.5v-47h6.8V203.5z M1162.8,163
   c0,20.1,11.8,35.8,30.3,35.8c14.4,0,30.8-10.7,30.8-35.8c0-25.1-16.4-35.8-30.8-35.8C1174.6,127.2,1162.8,142.4,1162.8,163z"/>
<path d="M1339.5,163c0,24.3-17.2,42.4-40.3,42.4s-40.3-18.1-40.3-42.4c0-24.3,17.2-42.4,40.3-42.4S1339.5,138.7,1339.5,163z
    M1332.4,163c0-20.6-13.8-35.8-33.2-35.8S1266,142.4,1266,163c0,20.6,13.8,35.8,33.2,35.8S1332.4,183.5,1332.4,163z"/>
<path d="M1406.9,198.8c12.3,0,20.3-3.7,26.7-7.6v7.5c-6.5,3.4-14.3,6.8-26.7,6.8c-23.5,0-40.7-18.1-40.7-42.4
   c0-24.3,17.2-42.4,40.7-42.4c12.5,0,19.8,3.4,26.2,6.8v7.5c-6.5-3.9-13.9-7.6-26.2-7.6c-19.8,0-33.5,15.2-33.5,35.8
   C1373.4,183.5,1387.1,198.8,1406.9,198.8z"/>
<path d="M1457.1,122.5h6.6v48.9c0,14.1,1.8,27.4,19.9,27.4c20.3,0,33.2-17.8,33.2-36.8v-39.5h6.8v81h-6.8v-14.3
   c0-3.7,0.6-6.6,0.6-6.6h-0.3c-2.8,7.6-13.9,22.8-33.5,22.8c-19.9,0-26.6-11-26.6-31.6V122.5z"/>
<path d="M1566.2,122.5v14.3c0,3.7-0.6,6.6-0.6,6.6h0.3c4-12.2,18.5-22.8,31.1-22.8c16.2,0,23.8,7.6,25.6,22h0.3
   c4.5-11.3,16.8-22,30.8-22c20.9,0,27.1,12.3,27.1,31.6v51.4h-6.8v-48.9c0-15.2-3.1-27.4-20.2-27.4c-19,0-30.1,19.8-30.1,36.8v39.5
   h-6.8v-48.9c0-13.9-1.9-27.4-19.8-27.4c-18.8,0-30.8,19.4-30.8,36.8v39.5h-6.8v-81H1566.2z"/>
<path d="M1781.3,158.4v3.9h-66.7v1.5c0,20.7,13.8,35,33.4,35c10.7,0,21.5-3.1,30.5-8.9v7.5c-7.5,4.5-18.3,8.1-30.3,8.1
   c-23.5,0-40.7-17.2-40.7-42.4c0-24.5,16.7-42.4,38.4-42.4C1768.5,120.5,1781.3,138.5,1781.3,158.4z M1745.6,127.2
   c-17.8,0-28.7,14.6-30.6,29.5h58.8C1773.8,141.7,1764.1,127.2,1745.6,127.2z"/>
<path d="M1815.6,122.5v14.3c0,3.7-0.6,6.6-0.6,6.6h0.3c2.8-7.6,14.1-22.8,34.3-22.8c21.1,0,26.7,12.5,26.7,31.6v51.4h-6.8v-48.9
   c0-14.1-1.8-27.4-19.9-27.4c-19.3,0-34,16-34,36.8v39.5h-6.8v-81H1815.6z"/>
<path d="M1910.9,122.5V98.2h6.8v24.3h27.1v6h-27.1v51.8c0,13.9,5.7,18.8,13.8,18.8c4.9,0,11-1.3,16.2-3.9v6.3
   c-3.7,2.1-9.9,3.9-16.7,3.9c-10.4,0-20.1-5.7-20.1-24.5v-52.5h-15.1v-6H1910.9z"/>
<path d="M1968.7,126.8c4.5-2.6,14.9-6.3,27.2-6.3c21.1,0,31.1,10.4,31.1,30.6v52.3h-6.8V192c0-4.4,0.6-7.3,0.6-7.3h-0.3
   c0.2,0-10.2,20.7-31.9,20.7c-14.9,0-24.8-9.2-24.8-21.5c0-20.7,23.2-30.8,56.4-25.8v-6.8c0-18-9.9-24.1-24.6-24.1
   c-12.1,0-22.8,4.2-26.9,6.8V126.8z M2020.2,164.3c-30-4.9-49.2,3.2-49.2,19.1c0,8.9,7,15.4,18,15.4
   C2007.1,198.8,2020.2,180.8,2020.2,164.3z"/>
<path d="M2065.6,122.5V98.2h6.8v24.3h27.1v6h-27.1v51.8c0,13.9,5.7,18.8,13.8,18.8c4.9,0,11-1.3,16.2-3.9v6.3
   c-3.7,2.1-9.9,3.9-16.7,3.9c-10.4,0-20.1-5.7-20.1-24.5v-52.5h-15.1v-6H2065.6z"/>
<path d="M2125.2,93c3.2,0,5.7,2.4,5.7,5.7s-2.4,5.7-5.7,5.7s-5.7-2.4-5.7-5.7S2122,93,2125.2,93z M2128.6,122.5v81h-6.8v-81H2128.6
   z"/>
<path d="M2237.6,163c0,24.3-17.2,42.4-40.3,42.4c-23.2,0-40.3-18.1-40.3-42.4c0-24.3,17.2-42.4,40.3-42.4
   C2220.5,120.5,2237.6,138.7,2237.6,163z M2230.5,163c0-20.6-13.8-35.8-33.2-35.8s-33.2,15.2-33.2,35.8c0,20.6,13.8,35.8,33.2,35.8
   S2230.5,183.5,2230.5,163z"/>
<path d="M2272.8,122.5v14.3c0,3.7-0.6,6.6-0.6,6.6h0.3c2.8-7.6,14.1-22.8,34.3-22.8c21.1,0,26.7,12.5,26.7,31.6v51.4h-6.8v-48.9
   c0-14.1-1.8-27.4-19.9-27.4c-19.3,0-34,16-34,36.8v39.5h-6.8v-81H2272.8z"/>
</g>
</svg>
`;

const navbar = document.getElementById("navbar");

const navItemClassStyles =
  "font-medium text-gray-600 dark:text-gray-400 hover:border-b-[1.5px] hover:border-gray-200 dark:hover:border-gray-700 hover:text-gray-800 dark:hover:text-gray-300";

// Create the navigation component
const navComponent = document.createElement("div");
navComponent.id = "primary-nav";
navComponent.innerHTML = `
<div class="navbar-transition relative max-w-8xl mx-auto border-b border-gray-500/10 lg:border-0 dark:border-gray-300/10 lg:border-b lg:border-gray-500/5 dark:border-gray-50/[0.06] backdrop-blur flex-none transition-colors duration-500 supports-backdrop-blur:bg-background-light/95 dark:bg-background-dark/75">
    <div class="py-4 lg:px-12 mx-4 lg:mx-0">
        <div class="flex items-center justify-between">
            <a href="/">${lightLogo}${darkLogo}</a>
            <div class="flex items-center space-x-16 lg:space-x-8" style="margin-left: 8px">
                <nav class="hidden lg:block">
                    <ul class="flex space-x-8 md:hidden px-8">
                        ${topNavLinks
                          .map(
                            (link) =>
                              `<li class="inline-block mx-8 p-2"><a class="inline-block leading-none text-sm ${navItemClassStyles} transition-colors duration-200" href="${link.url}" target="_blank">${link.label}</a></li>`
                          )
                          .join("")}
                    </ul>
                </nav>
                <div class="flex space-x-5 md:hidden">
                    <a style="background-color: rgba(0, 85, 255, 0.8)" class="inline-flex items-center justify-center !leading-none text-center whitespace-nowrap rounded transition-[colors, opacity] duration-200 outline-none uppercase font-medium h-10 px-5 text-xs bg-primary/50 dark:bg-white text-white hover:bg-[rgba(255,255,255,1)]" href="${
                      topNavCta.url
                    }" target="_blank">
                        ${topNavCta.label}
                    </a>
                </div>
            </div>
            <button class="relative h-8 w-6 hidden md:block" type="button" aria-label="Menu">
                <span class="absolute left-0 top-[7px] block h-0.5 w-6 rounded-full bg-white"></span>
                <span class="absolute left-0 top-[15px] block h-0.5 w-4 rounded-full bg-white"></span>
                <span class="absolute bottom-[7px] left-0 block h-0.5 w-6 rounded-full bg-white"></span>
            </button>
        </div>
    </div>
</div>
`;

// Prepend the navigation component as the first child of the navbar
navbar.insertBefore(navComponent, navbar.firstChild);
