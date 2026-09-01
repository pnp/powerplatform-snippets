udfGetLoadingPhrase() : Text = {
    Index(nfLoadingPhrases, RandBetween(1, CountRows(nfLoadingPhrases))).Value;
};

udfMoveX(
    slideInEnd: Number,
    slideOutStart: Number,
    currentTime: Number,
    restX: Number,
    slideSpeed: Number
): Number =
    If(
        currentTime < slideInEnd,
        restX - (slideInEnd - currentTime) * slideSpeed / 1000,
        currentTime < slideOutStart,
        restX,
        restX + (currentTime - slideOutStart) * slideSpeed / 1000
    );

udfFadeWhiteInOut(
    fadeInStart: Number, 
    fadeInEnd: Number, 
    fadeOutStart: Number, 
    fadeOutEnd: Number, 
    currentTime: Number
): Color =
    With(
        { 
            tIn: Max(0, Min(1, (currentTime - fadeInStart) / (fadeInEnd - fadeInStart))),
            tOut: Max(0, Min(1, (currentTime - fadeOutStart) / (fadeOutEnd - fadeOutStart)))
        },
        RGBA(255, 255, 255, tIn * (1 - tOut))
    );

nfLoadingPhrases = [
    "Negotiating With Dataverse Spirits",
    "Convincing Power Automate to Behave",
    "Synchronizing SharePoint Dimensions",
    "Calibrating Low-Code Chaos Levels",
    "Untangling Recursive Flow Conditions",
    "Rendering 47 Invisible Containers",
    "Debugging Delegation Nightmares",
    "Summoning Premium Connectors",
    "Hydrating Dataverse Tables",
    "Compressing Unnecessarily Large JSON",
    "Refactoring Mildly Questionable Expressions",
    "Appeasing Environment Variable Gods",
    "Loading Components Nobody Documented",
    "Applying Conditional Formatting Diplomacy",
    "Generating Pixel-Perfect Galleries",
    "Searching for Missing Semicolons",
    "Stabilizing Experimental Canvas Sorcery",
    "Resolving Circular Dependencies Politely",
    "Refreshing Data Sources for the 12th Time",
    "Optimizing Flows That Ran Perfectly Yesterday",
    "Calculating Estimated Licensing Anxiety",
    "Assembling Highly Responsive Containers",
    "Normalizing Corporate Buzzwords",
    "Mapping Forms Across Parallel Environments",
    "Persuading Copilot to Stay On Topic",
    "Escaping Nested With() Statements"
];

nfLogo = "<svg width='100%' viewBox='0 0 680 520' role='img' xmlns='http://www.w3.org/2000/svg' style=''>
<title style='fill:rgb(0, 0, 0);stroke:none;color:rgb(255, 255, 255);stroke-width:1px;stroke-linecap:butt;stroke-linejoin:miter;opacity:1;font-family:&quot;Segoe UI&quot;, -apple-system, BlinkMacSystemFont, &quot;Segoe UI&quot;, sans-serif;font-size:16px;font-weight:400;text-anchor:start;dominant-baseline:auto'>Animated Power Platform logo</title>
<desc style='fill:rgb(0, 0, 0);stroke:none;color:rgb(255, 255, 255);stroke-width:1px;stroke-linecap:butt;stroke-linejoin:miter;opacity:1;font-family:&quot;Segoe UI&quot;, -apple-system, BlinkMacSystemFont, &quot;Segoe UI&quot;, sans-serif;font-size:16px;font-weight:400;text-anchor:start;dominant-baseline:auto'>The official Power Platform logo with a large teal-green glow behind it, gently floating up and down, with a soft shifting shadow underneath.</desc>
<defs>
<radialGradient id='ppGlow' cx='50%' cy='50%' r='50%'>
<stop offset='0%' stop-color='#3FE0C8' stop-opacity='0.65'/>
<stop offset='55%' stop-color='#1FA68E' stop-opacity='0.25'/>
<stop offset='100%' stop-color='#0A4A8A' stop-opacity='0'/>
</radialGradient>
<filter id='ppMask' filterUnits='userSpaceOnUse' x='2.1' y='1.1' width='15.5' height='16.2'>
<feColorMatrix type='matrix' values='1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 1 0'/>
</filter>
<mask id='ppLogoMask' maskUnits='userSpaceOnUse' x='2.1' y='1.1' width='15.5' height='16.2'>
<path fill='#FFFFFF' filter='url(#ppMask)' d='M7.9,1.1h7c2,0,3.2,2,2.4,3.8l0.1-0.3L15,9.5c0,0,0,0,0,0l-0.4,0.8L15,9.6c-0.4,0.9-1.4,1.5-2.4,1.5H8.4l-3,6c-0.2,0.5-0.9,0.5-1.1,0l-2.1-4.2c-0.2-0.4-0.2-0.8,0-1.1l2.3-4.6c0.2-0.4,0.7-0.7,1.1-0.7h8.8C14,6,13.3,5.7,12.6,5.7H6.2c-0.5,0-0.8-0.5-0.6-0.9l1.7-3.3C7.5,1.2,7.7,1.1,7.9,1.1z'/>
</mask>
<linearGradient id='ppG1' gradientUnits='userSpaceOnUse' x1='4.9354' y1='9.4639' x2='6.7063' y2='2.7347' gradientTransform='matrix(1 0 0 -1 0 20)'>
<stop offset='0' stop-color='#159455'/>
<stop offset='1' stop-color='#3FBDA9'/>
</linearGradient>
<linearGradient id='ppG2' gradientUnits='userSpaceOnUse' x1='5.9391' y1='18.3394' x2='16.2129' y2='13.7717' gradientTransform='matrix(1 0 0 -1 0 20)'>
<stop offset='0' stop-color='#23A794'/>
<stop offset='0.5684' stop-color='#007A84'/>
<stop offset='1' stop-color='#005158'/>
</linearGradient>
<linearGradient id='ppG3' gradientUnits='userSpaceOnUse' x1='13.1727' y1='11.6202' x2='11.3134' y2='16.49' gradientTransform='matrix(1 0 0 -1 0 20)'>
<stop offset='0' stop-color='#004A8B'/>
<stop offset='0.4056' stop-color='#105DA8' stop-opacity='0.5002'/>
<stop offset='1' stop-color='#2170C6' stop-opacity='0'/>
</linearGradient>
<linearGradient id='ppG4' gradientUnits='userSpaceOnUse' x1='5.1362' y1='14.1387' x2='14.433' y2='9.5345' gradientTransform='matrix(1 0 0 -1 0 20)'>
<stop offset='0' stop-color='#7FD9A2'/>
<stop offset='0.1961' stop-color='#47BF79'/>
<stop offset='0.7139' stop-color='#009280'/>
<stop offset='1' stop-color='#007A84'/>
</linearGradient>
<linearGradient id='ppG5' gradientUnits='userSpaceOnUse' x1='5.0676' y1='13.9756' x2='7.1926' y2='12.9131' gradientTransform='matrix(1 0 0 -1 0 20)'>
<stop offset='0' stop-color='#A8E47C' stop-opacity='0.86'/>
<stop offset='0.3675' stop-color='#87D152' stop-opacity='0.2'/>
<stop offset='1' stop-color='#58BE5A' stop-opacity='0'/>
</linearGradient>
</defs>

<ellipse cx='340' cy='240' rx='240' ry='260' fill='url(#ppGlow)' style='stroke:none;color:rgb(255, 255, 255);stroke-width:1px;stroke-linecap:butt;stroke-linejoin:miter;opacity:1;font-family:&quot;Segoe UI&quot;, -apple-system, BlinkMacSystemFont, &quot;Segoe UI&quot;, sans-serif;font-size:16px;font-weight:400;text-anchor:start;dominant-baseline:auto'>
<animate attributeName='rx' values='240;265;240' dur='3s' repeatCount='indefinite' style='stroke:none;color:rgb(255, 255, 255);stroke-width:1px;stroke-linecap:butt;stroke-linejoin:miter;opacity:1;font-family:&quot;Segoe UI&quot;, -apple-system, BlinkMacSystemFont, &quot;Segoe UI&quot;, sans-serif;font-size:16px;font-weight:400;text-anchor:start;dominant-baseline:auto'/>
<animate attributeName='ry' values='260;285;260' dur='3s' repeatCount='indefinite' style='stroke:none;color:rgb(255, 255, 255);stroke-width:1px;stroke-linecap:butt;stroke-linejoin:miter;opacity:1;font-family:&quot;Segoe UI&quot;, -apple-system, BlinkMacSystemFont, &quot;Segoe UI&quot;, sans-serif;font-size:16px;font-weight:400;text-anchor:start;dominant-baseline:auto'/>
</ellipse>

<g style='fill:rgb(0, 0, 0);stroke:none;color:rgb(255, 255, 255);stroke-width:1px;stroke-linecap:butt;stroke-linejoin:miter;opacity:1;font-family:&quot;Segoe UI&quot;, -apple-system, BlinkMacSystemFont, &quot;Segoe UI&quot;, sans-serif;font-size:16px;font-weight:400;text-anchor:start;dominant-baseline:auto'>
<animateTransform attributeName='transform' type='translate' values='0,0; 0,-22; 0,0; 0,22; 0,0' dur='3s' repeatCount='indefinite' additive='sum' style='fill:rgb(0, 0, 0);stroke:none;color:rgb(255, 255, 255);stroke-width:1px;stroke-linecap:butt;stroke-linejoin:miter;opacity:1;font-family:&quot;Segoe UI&quot;, -apple-system, BlinkMacSystemFont, &quot;Segoe UI&quot;, sans-serif;font-size:16px;font-weight:400;text-anchor:start;dominant-baseline:auto'/>
<g transform='translate(170 100) scale(17)' style='fill:rgb(0, 0, 0);stroke:none;color:rgb(255, 255, 255);stroke-width:1px;stroke-linecap:butt;stroke-linejoin:miter;opacity:1;font-family:&quot;Segoe UI&quot;, -apple-system, BlinkMacSystemFont, &quot;Segoe UI&quot;, sans-serif;font-size:16px;font-weight:400;text-anchor:start;dominant-baseline:auto'>
<g mask='url(#ppLogoMask)' style='fill:rgb(0, 0, 0);stroke:none;color:rgb(255, 255, 255);stroke-width:1px;stroke-linecap:butt;stroke-linejoin:miter;opacity:1;font-family:&quot;Segoe UI&quot;, -apple-system, BlinkMacSystemFont, &quot;Segoe UI&quot;, sans-serif;font-size:16px;font-weight:400;text-anchor:start;dominant-baseline:auto'>
<path fill='url(#ppG1)' d='M3.3,11h5.1l-3,6c-0.2,0.5-0.9,0.5-1.1,0l-2.1-4.2C1.8,12,2.4,11,3.3,11z' style='stroke:none;color:rgb(255, 255, 255);stroke-width:1px;stroke-linecap:butt;stroke-linejoin:miter;opacity:1;font-family:&quot;Segoe UI&quot;, -apple-system, BlinkMacSystemFont, &quot;Segoe UI&quot;, sans-serif;font-size:16px;font-weight:400;text-anchor:start;dominant-baseline:auto'/>
<path fill='url(#ppG2)' d='M7.9,1.1h7c2,0,3.3,2.1,2.4,3.8L15,9.5c0,0,0,0,0,0l-0.4,0.8L15,9.5c0.8-1.8-0.4-3.8-2.4-3.8H6.2c-0.5,0-0.8-0.5-0.6-0.9l1.7-3.3C7.5,1.2,7.7,1.1,7.9,1.1z' style='stroke:none;color:rgb(255, 255, 255);stroke-width:1px;stroke-linecap:butt;stroke-linejoin:miter;opacity:1;font-family:&quot;Segoe UI&quot;, -apple-system, BlinkMacSystemFont, &quot;Segoe UI&quot;, sans-serif;font-size:16px;font-weight:400;text-anchor:start;dominant-baseline:auto'/>
<path fill='url(#ppG3)' d='M7.9,1.1h7c2,0,3.3,2.1,2.4,3.8L15,9.5c0,0,0,0,0,0L14.8,10L15,9.5c0.9-1.8-0.4-3.8-2.4-3.8H6.2c-0.5,0-0.8-0.5-0.6-0.9l1.7-3.3C7.5,1.2,7.7,1.1,7.9,1.1z' style='stroke:none;color:rgb(255, 255, 255);stroke-width:1px;stroke-linecap:butt;stroke-linejoin:miter;opacity:1;font-family:&quot;Segoe UI&quot;, -apple-system, BlinkMacSystemFont, &quot;Segoe UI&quot;, sans-serif;font-size:16px;font-weight:400;text-anchor:start;dominant-baseline:auto'/>
<path fill-opacity='0.24' d='M12.6,11.1H3.3c-0.5,0-0.9,0.3-1.1,0.7l2.3-4.6c0.2-0.4,0.7-0.7,1.1-0.7h9.3c1,0,1.9-0.6,2.4-1.5l0.2-0.3L15,9.6C14.5,10.5,13.6,11.1,12.6,11.1z' style='fill:rgb(0, 0, 0);stroke:none;color:rgb(255, 255, 255);stroke-width:1px;stroke-linecap:butt;stroke-linejoin:miter;opacity:1;font-family:&quot;Segoe UI&quot;, -apple-system, BlinkMacSystemFont, &quot;Segoe UI&quot;, sans-serif;font-size:16px;font-weight:400;text-anchor:start;dominant-baseline:auto'/>
<path fill-opacity='0.32' d='M12.6,11.4H3.3c-0.5,0-0.9,0.3-1.1,0.7l2.3-4.6C4.7,7,5.2,6.8,5.6,6.8h9.3c1,0,1.9-0.6,2.4-1.5L17.4,5L15,9.9C14.5,10.8,13.6,11.4,12.6,11.4z' style='fill:rgb(0, 0, 0);stroke:none;color:rgb(255, 255, 255);stroke-width:1px;stroke-linecap:butt;stroke-linejoin:miter;opacity:1;font-family:&quot;Segoe UI&quot;, -apple-system, BlinkMacSystemFont, &quot;Segoe UI&quot;, sans-serif;font-size:16px;font-weight:400;text-anchor:start;dominant-baseline:auto'/>
<path fill='url(#ppG4)' d='M12.6,11H3.3c-0.5,0-0.9,0.3-1.1,0.7l2.3-4.6c0.2-0.4,0.7-0.7,1.1-0.7h9.3c1,0,1.9-0.6,2.4-1.5l0.2-0.3L15,9.6C14.5,10.5,13.6,11,12.6,11z' style='stroke:none;color:rgb(255, 255, 255);stroke-width:1px;stroke-linecap:butt;stroke-linejoin:miter;opacity:1;font-family:&quot;Segoe UI&quot;, -apple-system, BlinkMacSystemFont, &quot;Segoe UI&quot;, sans-serif;font-size:16px;font-weight:400;text-anchor:start;dominant-baseline:auto'/>
<path fill='url(#ppG5)' opacity='0.7' d='M12.6,11H3.4c-0.5,0-0.9,0.3-1.1,0.7l2.3-4.6c0.2-0.4,0.7-0.7,1.1-0.7H15c1,0,1.9-0.5,2.3-1.4L15,9.6C14.5,10.5,13.6,11,12.6,11z' style='stroke:none;color:rgb(255, 255, 255);stroke-width:1px;stroke-linecap:butt;stroke-linejoin:miter;opacity:0.7;font-family:&quot;Segoe UI&quot;, -apple-system, BlinkMacSystemFont, &quot;Segoe UI&quot;, sans-serif;font-size:16px;font-weight:400;text-anchor:start;dominant-baseline:auto'/>
</g>
</g>
</g>

<ellipse cx='340' cy='450' rx='120' ry='14' fill='#000000' opacity='0.18' style='fill:rgb(0, 0, 0);stroke:none;color:rgb(255, 255, 255);stroke-width:1px;stroke-linecap:butt;stroke-linejoin:miter;opacity:0.181683;font-family:&quot;Segoe UI&quot;, -apple-system, BlinkMacSystemFont, &quot;Segoe UI&quot;, sans-serif;font-size:16px;font-weight:400;text-anchor:start;dominant-baseline:auto'>
<animate attributeName='rx' values='120;100;120;140;120' dur='3s' repeatCount='indefinite' style='fill:rgb(0, 0, 0);stroke:none;color:rgb(255, 255, 255);stroke-width:1px;stroke-linecap:butt;stroke-linejoin:miter;opacity:1;font-family:&quot;Segoe UI&quot;, -apple-system, BlinkMacSystemFont, &quot;Segoe UI&quot;, sans-serif;font-size:16px;font-weight:400;text-anchor:start;dominant-baseline:auto'/>
<animate attributeName='opacity' values='0.18;0.22;0.18;0.14;0.18' dur='3s' repeatCount='indefinite' style='fill:rgb(0, 0, 0);stroke:none;color:rgb(255, 255, 255);stroke-width:1px;stroke-linecap:butt;stroke-linejoin:miter;opacity:1;font-family:&quot;Segoe UI&quot;, -apple-system, BlinkMacSystemFont, &quot;Segoe UI&quot;, sans-serif;font-size:16px;font-weight:400;text-anchor:start;dominant-baseline:auto'/>
</ellipse>
</svg>"