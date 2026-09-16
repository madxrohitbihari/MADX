// AroLinks Integration for Get Key
function openAroLinks() {
    const apiToken = "828c34db80ec53e94e7174f5f52e0b274a38ab2d";
    const targetUrl = "https://madxrohitbihari.github.io/MADX-KEY/";
    const apiUrl = `https://arolinks.com/api?api=${apiToken}&url=${encodeURIComponent(targetUrl)}`;

    const msgDiv = document.getElementById("status-msg");
    msgDiv.style.color = "var(--accent-gold)";
    msgDiv.innerText = "Generating Link...";
    showToast("Generating Access Link...");
    
    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            if (data.status === "success" && data.shortenedUrl) {
                window.location.href = data.shortenedUrl;
            } else {
                msgDiv.style.color = "#ff4444";
                msgDiv.innerText = "Error generating link!";
                showToast("Error generating link!");
            }
        })
        .catch(() => {
            msgDiv.style.color = "#ff4444";
            msgDiv.innerText = "Network Error!";
            showToast("Network Error!");
        });
}

// High Security Key Verification Logic (35 Characters + MAD prefix & APK suffix)
function verifyUserKey() {
    const userKey = document.getElementById("accessKeyInput").value.trim().toUpperCase();
    const msgDiv = document.getElementById("status-msg");
    
    const targetLen = 35; 
    if (userKey.length !== targetLen || !userKey.startsWith("MAD") || !userKey.endsWith("APK")) {
        msgDiv.style.color = "#ff4444";
        msgDiv.innerText = "⚠️ Invalid key format!";
        showToast("⚠️ Invalid key format!");
        return;
    }

    let usedKeys = JSON.parse(localStorage.getItem("usedKeysRegistry")) || {};
    const currentTime = new Date().getTime();

    // Check if this specific key was already used before
    if (usedKeys[userKey]) {
        msgDiv.style.color = "#ff4444";
        msgDiv.innerText = "⚠️ This key has already been used! Please get a new key.";
        showToast("⚠️ Key already used! Get a new key");
        return;
    }

    // Mark this specific key as used permanently
    usedKeys[userKey] = currentTime;
    localStorage.setItem("usedKeysRegistry", JSON.stringify(usedKeys));

    // Set global session validity for 24 hours
    const keyExpiryDuration = 24 * 60 * 60 * 1000;
    const globalExpiryTime = currentTime + keyExpiryDuration; 
    localStorage.setItem("appAuthExpiry", globalExpiryTime);
    
    msgDiv.style.color = "var(--neon-green)";
    msgDiv.innerText = "Portal Unlocked Successfully!";
    showToast("Portal Unlocked Successfully!");

    setTimeout(() => {
        document.getElementById("authScreenWrapper").style.display = "none";
    }, 600);
}

const defaultNewImg = "https://i.postimg.cc/8kv2Mtxv/IMG-20260731-232847-281.jpg";  
const upcomingCommonLink = "https://madxrohitbihar-app.github.io/UPDATE-POUP/";

const activeApps = [  
    { id: 1, name: "1. CAREER WILL", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmYE_faasYwfAs0rQKDf4GcuoV7_Ws6ZUqWwmIpuHVSw&s", link: "https://madxrohitbihari.github.io/Cw-test/" },  
    { id: 2, name: "2. KHAN GLOBAL STUDIES", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuCiwfy76ica73byqKIURXqN2Zi2h2Sdw0VJooGkXsyg&s", link: "https://vidyaverse-kgs.vercel.app/" },  
    { id: 3, name: "3. SELECTION WAY", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRquIqVyakcgsPuAsFkSm34nPLKZ_IY2W0-Rj5sd1-T-g&s=10", link: "https://selection-ways-ten.vercel.app/" },  
    { id: 4, name: "4. ROJGAR WITH ANKIT", img: "https://i.postimg.cc/fTfdSHbT/image-search-1783668281136.png", link: "https://rwa-website-sandy.vercel.app/" },  
    { id: 5, name: "5. PHYSICS WALLA", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1plcMrWwVtz1_zK8I6kbPtktbGikeJ55Ukuaad408XQ&s", link: "https://pwthor.live/study/batches" },  
    { id: 6, name: "6. FUTUREKUL", img: "https://i.postimg.cc/CK0zWrN0/image-search-1784218678678.png", link: "https://futurekul.sumit.qzz.io/" },  
    { id: 7, name: "7. SACHIN ACADEMY", img: "https://i.postimg.cc/MphZTcLR/image-search-1783742533521.jpg", link: "https://sachinclassex1.vercel.app" },  
    { id: 8, name: "8. TEST SERIES", img: "https://i.postimg.cc/Bb9C4KYz/image-search-1785225815998.png", link: "https://repeatermock.com/" },  
    { id: 9, name: "9. CW CTET", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAB_URIwHn37n8wv-FR6lhXAS7clYsz2wD_VbdNlJlGVj6S3KVb1i0cXbi&s=10", link: "https://sangam.free.nf/CW/course_index.html" },  
    { id: 10, name: "10. IFAS ACADEMY", img: "https://i.postimg.cc/XJdZmMRz/image-search-1784219774648.png", link: "https://sangam.free.nf/IFAS/" },  
    { id: 11, name: "11. MD CLASSES", img: "https://i.postimg.cc/4dv9v9dL/image-search-1785224691176.png", link: "https://mdclassesx.vercel.app/" },  
    { id: 12, name: "12. UNACADEMY", img: "https://i.postimg.cc/Wz6xPX4L/image-search-1785224943445.jpg", link: "https://nexthope.pages.dev/uncoffline/" },  
    { id: 13, name: "13. NEXT TOPPERS", img: "https://i.postimg.cc/PqjZCyfr/image-search-1785225080041.jpg", link: "https://vidyaverse-nt.vercel.app/" },  
    { id: 14, name: "14. UNACADEMY OFFLINE", img: "https://i.postimg.cc/Wz6xPX4L/image-search-1785224943445.jpg", link: "https://uc-web.uc27.workers.dev/" },  
    { id: 15, name: "15. KGS TEST ", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuCiwfy76ica73byqKIURXqN2Zi2h2Sdw0VJooGkXsyg&s", link: "https://studyapkmodkgs.vercel.app/kgstest" },  
    { id: 16, name: "16. GS VISION", img: "https://i.postimg.cc/YSLHMFjS/image-search-1785250907310.png", link: "https://nexthope.pages.dev/gsvision/" },  
    { id: 17, name: "17. VIBRANT ACADEMY", img: "https://i.postimg.cc/mgx3mfCs/image-search-1785251111107.png", link: "https://www.learnxpw.site/study/vibrant" },  
    { id: 18, name: "18. PHYSICS PI", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1plcMrWwVtz1_zK8I6kbPtktbGikeJ55Ukuaad408XQ&s", link: "https://pi.pwmarco.info/" },  
    { id: 19, name: "19. CDS JOURNEY", img: "https://i.postimg.cc/tRKNBNTh/image-search-1787230401173.webp", link: "https://cds.streamfiles.eu.org/" },  
    { id: 58, name: "20. APNA COLLEGE", img: "https://i.postimg.cc/jS76CFc0/image-search-1783748117436.png", link: "https://studyapkmod-apnacollege.vercel.app/" },  
    { id: 59, name: "21. STUDY IQ", img: "https://i.postimg.cc/850xN6Wz/image-search-1788171724038.jpg", link: "https://spidyiq.vercel.app/" },  
    { id: 60, name: "22. MAGNET BRAIN", img: "https://i.postimg.cc/J4VMkfDz/image-search-1788171765952.png", link: "https://www.magnetbrains.com/" },
    { id: 61, name: "23. VIDYAKUL", img: "https://i.postimg.cc/9Qr5MJ2g/image-search-1787482867101.png", link: "https://vidyakool.streamfiles.eu.org/" },
    { id: 62, name: "24. EDUTERIA", img: "https://i.postimg.cc/13xCjMbD/image-search-1787721768673.webp", link: "https://yourbad.freedev.app/edu/?i=1" },
    { id: 63, name: "25. VIDYAGRAM", img: "https://i.postimg.cc/ZqNXqthT/image-search-1788787763752.png", link: "https://studyapkmod-vidyagramx.vercel.app/" },
    { id: 64, name: "26. TARGET BOARD", img: "https://i.postimg.cc/PqHQ1BwZ/image-search-1788787719649.png", link: "https://studyapkmod-targetboard.vercel.app/index.html" },
    { id: 65, name: "27. TOPPER'S WISDOM", img: "https://i.postimg.cc/4x6z4BFq/image-search-1788787742041.jpg", link: "https://nexthope.pages.dev/tw/" }
];  

const upcomingApps = [  
    { id: 19, name: "1. GYAN BINDU", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCFvhxybNgyZB2ctiSjQkoDvGk9KjyK-tG34NGXWwaRA&s=10", link: upcomingCommonLink },  
    { id: 20, name: "2. RG VIKRAMJEET", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvpPDIhLQa9pfBaInjOqZgxFsWpDwSWghhJBmHFEti9w&s=10", link: upcomingCommonLink },  
    { id: 21, name: "3. VIDYAGRAM", img: "https://i.postimg.cc/rp74fjNW/image-search-1785091744942.png", link: upcomingCommonLink },  
    { id: 22, name: "4. ROJGAR WITH ANKIT", img: "https://i.postimg.cc/fTfdSHbT/image-search-1783668281136.png", link: upcomingCommonLink },  
    { id: 23, name: "5. KAUTILYA CLASSES", img: "https://i.postimg.cc/gkTMQkvN/image-search-1783667928451.png", link: upcomingCommonLink },  
    { id: 24, name: "6. WINNERS INSTITUTE", img: defaultNewImg, link: upcomingCommonLink },  
    { id: 25, name: "7. LAKSHAY CLASSES", img: "https://i.postimg.cc/vHTy5TYz/image-search-1783668410024.jpg", link: upcomingCommonLink },  
    { id: 26, name: "8. PARMAR ACADEMY", img: "https://i.postimg.cc/vZvCjdZF/image-search-1783668554942.webp", link: upcomingCommonLink },  
    { id: 27, name: "9. AASH EDUCATION", img: defaultNewImg, link: upcomingCommonLink },  
    { id: 28, name: "10. PHYSICS WITH UMESH RAJORIA", img: defaultNewImg, link: upcomingCommonLink },  
    { id: 29, name: "11. ASTHA IAS", img: defaultNewImg, link: upcomingCommonLink },  
    { id: 30, name: "12. EXAMPUR", img: defaultNewImg, link: upcomingCommonLink },  
    { id: 31, name: "13. BOOSTER ACADEMY", img: defaultNewImg, link: upcomingCommonLink },  
    { id: 32, name: "14. DP SIR MATHS", img: defaultNewImg, link: upcomingCommonLink },  
    { id: 33, name: "15. ALPHA INSTITUTE PRO", img: defaultNewImg, link: upcomingCommonLink },  
    { id: 34, name: "16. ANKIT SINGH", img: defaultNewImg, link: upcomingCommonLink },  
    { id: 35, name: "17. SCIENCE MAGNET", img: defaultNewImg, link: upcomingCommonLink },  
    { id: 36, name: "18. SPRING BOARD", img: defaultNewImg, link: upcomingCommonLink },  
    { id: 37, name: "19. ASHISH SINGH LECTURES", img: defaultNewImg, link: upcomingCommonLink },  
    { id: 38, name: "20. VK KNOWLEDGE", img: defaultNewImg, link: upcomingCommonLink },  
    { id: 39, name: "21. PHYSICS BY UMESH SIR", img: defaultNewImg, link: upcomingCommonLink },  
    { id: 40, name: "22. TANDAV CLASSES", img: defaultNewImg, link: upcomingCommonLink },  
    { id: 41, name: "23. YODHA CLASSES", img: defaultNewImg, link: upcomingCommonLink },  
    { id: 42, name: "24. YODHA APP", img: defaultNewImg, link: upcomingCommonLink },  
    { id: 43, name: "25. KISHOR SIR MATHS", img: defaultNewImg, link: upcomingCommonLink },  
    { id: 44, name: "26. MATHS BY DEEPAK SIR", img: defaultNewImg, link: upcomingCommonLink },  
    { id: 45, name: "27. UNIQ SCIENCE ACADEMY", img: defaultNewImg, link: upcomingCommonLink },  
    { id: 46, name: "28. YESH OFFICER", img: defaultNewImg, link: upcomingCommonLink },  
    { id: 47, name: "29. STAR MATHEMATICS", img: defaultNewImg, link: upcomingCommonLink },  
    { id: 48, name: "30. SAMYAK IAS", img: defaultNewImg, link: upcomingCommonLink },  
    { id: 49, name: "31. SACHIN ACADEMY APP", img: defaultNewImg, link: upcomingCommonLink },  
    { id: 50, name: "32. AMPLITUDE PHYSICS CLASSES", img: defaultNewImg, link: upcomingCommonLink },  
    { id: 51, name: "33. ARMY STUDY", img: defaultNewImg, link: upcomingCommonLink },  
    { id: 52, name: "34. PARAM ACADEMY", img: defaultNewImg, link: upcomingCommonLink },  
    { id: 53, name: "35. KALAM ACADEMY", img: defaultNewImg, link: upcomingCommonLink },  
    { id: 54, name: "36. GYANODAY KE GURUJI", img: defaultNewImg, link: upcomingCommonLink },  
    { id: 55, name: "37. BSC PRO CLASSES", img: defaultNewImg, link: upcomingCommonLink },  
    { id: 56, name: "38. ADDA247", img: defaultNewImg, link: upcomingCommonLink },  
    { id: 57, name: "39. VIDYAKHUL", img: defaultNewImg, link: upcomingCommonLink }  
];  

let favorites = JSON.parse(localStorage.getItem('userFavs')) || [];  

function openExternal(url) {
    window.open(url, '_blank');
}

function showToast(msg) {  
    const toast = document.getElementById('toast');  
    toast.innerText = msg;  
    toast.classList.add('show');  
    setTimeout(() => toast.classList.remove('show'), 2000);  
}  

function renderApps() {  
    const activeContainer = document.getElementById('active-apps-list');  
    document.getElementById('active-count').innerText = `${activeApps.length} Available`;  

    activeContainer.innerHTML = activeApps.map(app => `  
        <div class="app-card" data-name="${app.name.toLowerCase()}">  
            <div class="app-info">  
                <img src="${app.img}" class="app-icon" alt="${app.name}" onerror="this.src='https://via.placeholder.com/48/0d1424/fff?text=App'">  
                <div class="app-details">  
                    <span class="app-name">${app.name}</span>  
                    <span class="app-tag">Free Server Active</span>  
                </div>  
            </div>  
            <div class="app-actions">  
                <button class="fav-btn ${favorites.includes(app.id) ? 'active' : ''}" onclick="toggleFavorite(${app.id})">  
                    <i class="fa-${favorites.includes(app.id) ? 'solid' : 'regular'} fa-heart"></i>  
                </button>  
                <span onclick="openExternal('${app.link}')" class="open-btn">Open</span>  
            </div>  
        </div>  
    `).join('');  

    const upcomingContainer = document.getElementById('upcoming-apps-list');  
    document.getElementById('upcoming-count').innerText = `${upcomingApps.length} Coming Soon`;  

    upcomingContainer.innerHTML = upcomingApps.map(app => `  
        <div class="app-card" data-name="${app.name.toLowerCase()}">  
            <div class="app-info">  
                <img src="${app.img}" class="app-icon" alt="${app.name}" onerror="this.src='https://via.placeholder.com/48/0d1424/fff?text=App'">  
                <div class="app-details">  
                    <span class="app-name">${app.name}</span>  
                    <span class="app-tag">Coming Soon</span>  
                </div>  
            </div>  
            <div class="app-actions">  
                <button class="fav-btn ${favorites.includes(app.id) ? 'active' : ''}" onclick="toggleFavorite(${app.id})">  
                    <i class="fa-${favorites.includes(app.id) ? 'solid' : 'regular'} fa-heart"></i>  
                </button>  
                <span onclick="openExternal('${app.link}')" class="open-btn">Open</span>  
            </div>  
        </div>  
    `).join('');  
      
    renderFavorites();  
}  

function toggleFavorite(id) {  
    if (favorites.includes(id)) {  
        favorites = favorites.filter(favId => favId !== id);  
        showToast("Removed from Favorites");  
    } else {  
        favorites.push(id);  
        showToast("Added to Favorites");  
    }  
    localStorage.setItem('userFavs', JSON.stringify(favorites));  
    renderApps();  
}  

function renderFavorites() {  
    const favContainer = document.getElementById('favorites-apps-list');  
    const favApps = activeApps.concat(upcomingApps).filter(app => favorites.includes(app.id));  
      
    if (favApps.length === 0) {  
        favContainer.innerHTML = `<div class="no-data">No favorite apps saved yet.</div>`;  
        return;  
    }  

    favContainer.innerHTML = favApps.map(app => `  
        <div class="app-card">  
            <div class="app-info">  
                <img src="${app.img}" class="app-icon" alt="${app.name}" onerror="this.src='https://via.placeholder.com/48/0d1424/fff?text=App'">  
                <div class="app-details">  
                    <span class="app-name">${app.name}</span>  
                    <span class="app-tag">Saved Item</span>  
                </div>  
            </div>  
            <div class="app-actions">  
                <button class="fav-btn active" onclick="toggleFavorite(${app.id})">  
                    <i class="fa-solid fa-heart"></i>  
                </button>  
                <span onclick="openExternal('${app.link}')" class="open-btn">Open</span>  
            </div>  
        </div>  
    `).join('');  
}  

function switchTab(tabName, element) {  
    document.querySelectorAll('.bottom-nav .nav-item').forEach(item => item.classList.remove('active'));  
    if(element) element.classList.add('active');  

    ['apps', 'upcoming', 'favorites'].forEach(tab => {  
        document.getElementById(`tab-${tab}`).classList.add('hidden');  
    });  

    document.getElementById(`tab-${tabName}`).classList.remove('hidden');  
    window.scrollTo({ top: 0, behavior: 'smooth' });  
    
    sessionStorage.setItem('currentActiveTab', tabName);
}  

function filterApps() {  
    const query = document.getElementById('searchInput').value.toLowerCase();  
    document.querySelectorAll('.app-card').forEach(card => {  
        const name = card.getAttribute('data-name');  
        card.style.display = (name && name.includes(query)) ? 'flex' : 'none';  
    });  
}  

document.addEventListener("contextmenu", (e) => {
    e.preventDefault();
    return false;
});

document.addEventListener("DOMContentLoaded", () => {  
    const splash = document.getElementById("splash-screen");  
      
    if (!sessionStorage.getItem('splashShown')) {  
        setTimeout(() => {  
            splash.classList.add("hide-splash");  
            sessionStorage.setItem('splashShown', 'true');  
        }, 1600);  
    } else {  
        splash.style.display = 'none';  
    }  

    const expiryTime = localStorage.getItem("appAuthExpiry");
    const currentTime = new Date().getTime();
    const isVerified = expiryTime && currentTime < expiryTime;

    if (!sessionStorage.getItem('popupShown')) {
        setTimeout(() => {  
            document.getElementById('popupModal').style.display = 'flex';  
        }, 500);
    }

    if (isVerified) {
        document.getElementById('authScreenWrapper').style.display = 'none';
    }

    const savedTab = sessionStorage.getItem('currentActiveTab');
    if (savedTab) {
        const targetNav = document.getElementById(`nav-${savedTab}`);
        if (targetNav) {
            switchTab(savedTab, targetNav);
        }
    }
});  

function closePopupAndShowAuth() {  
    document.getElementById('popupModal').style.display = 'none';  
    sessionStorage.setItem('popupShown', 'true'); 

    const expiryTime = localStorage.getItem("appAuthExpiry");
    const currentTime = new Date().getTime();
    
    if (!expiryTime || currentTime >= expiryTime) {
        document.getElementById('authScreenWrapper').style.display = 'flex';
    }
}  

renderApps();
