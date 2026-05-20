// 1. DATA POOL
// Note: I added extra details to the first few items as examples. 
// You should add these fields (location, entranceFee, etc.) to all items.
const search_content_pool = [
    {
        name: "White Island",
        img: "images/notblackisland.webp",
        link: "whiteisland.html",
        type: "island",
        location: "Mambajao",
        entranceFee: "₱50.00",
        openingHours: "5:00 AM - 5:00 PM",
        bestTime: "Early Morning",
        description: "A famous uninhabited white sandbar with a stunning view of Mt. Hibok-Hibok.",
        activities: "Swimming, Snorkeling, Sunbathing",
        travelTips: "There is no shade; bring hats and sunblock!"
    },
    {
        name: "Sunken Cemetery",
        img: "images/historyicon.jpg",
        link: "sunkencementery.html",
        type: "diving",
        location: "Catarman",
        entranceFee: "₱100.00 (Boat)",
        openingHours: "8:00 AM - 5:00 PM",
        description: "Marked by a large cross, this cemetery sank during the 1871 volcanic eruption.",
        activities: "Diving, Snorkeling, Photography",
        travelTips: "Hire a local guide for the best snorkeling spots."
    },
    {
        name: "Sto Niño Cold Spring",
        img: "images/spring.JPG",
        link: "stoninocoldspring.html",
        type: "spring",
        location: "Catarman",
        entranceFee: "₱50.00",
        openingHours: "8:00 AM - 5:00 PM",
        description: "A refreshing pool of natural spring water with temperatures around 20°C.",
        activities: "Swimming, Picnicking",
        travelTips: "The water is very cold! Bring extra towels."
    },
    {
        name: "Tuasan Falls",
        img: "images/tuasan.jpg",
        link: "tuasan.html",
        type: "waterfall",
        location: "Catarman",
        entranceFee: "₱50.00",
        openingHours: "8:00 AM - 5:00 PM",
        description: "A powerful, pristine waterfall hidden in the lush jungle of Camiguin.",
        activities: "Swimming, Nature Trekking",
        travelTips: "The road is paved, making it very accessible by motorbike."
    },
    {
        name: "Giant Clam Sanctuary",
        img: "images/dakongatahon.webp",
        link: "clam.html",
        type: "diving",
        location: "Guinsiliban",
        entranceFee: "₱250.00 (Tour + Snorkel)",
        openingHours: "8:00 AM - 4:30 PM",
        description: "Home to over 2,000 giant clams, including endangered species.",
        activities: "Snorkeling, Educational Tour",
        travelTips: "Do not touch the clams; they are very sensitive!"
    },
    {
        name: "Soda Bora Water Spring",
        img: "images/soda.jpg",
        link: "sodabora.html",
        type: "spring",
        location: "Bura, Catarman",
        entranceFee: "₱50.00",
        openingHours: "8:00 AM - 5:00 PM",
        description: "The only soda water spring in the Philippines. It tastes like sparkling water!",
        activities: "Swimming, Water Tasting",
        travelTips: "There are pools specifically for swimming and faucets for drinking."
    },
    {
        name: "Moro Watch Tower",
        img: "images/morotower1.jpg",
        link: "moro.html",
        type: "land",
        location: "Guinsiliban",
        entranceFee: "Free",
        openingHours: "24/7",
        description: "An ancient stone lookout used to spot incoming pirates during the Spanish era.",
        activities: "Sightseeing, History",
        travelTips: "Located right by the sea, it's a great quick stop for photos."
    },
    {
        name: "Mantigue Island",
        img: "images/mantik.jpg",
        link: "mantigue.html",
        type: "island",
        location: "Mahinog",
        entranceFee: "₱75.00 + Boat Fare",
        openingHours: "7:00 AM - 4:00 PM",
        description: "A lush 4-hectare island surrounded by a white sand beach and coral gardens.",
        activities: "Glass Bottom Boat, Snorkeling, Diving",
        travelTips: "The marine sanctuary here is world-class for divers."
    },
    {
        name: "Katunggan Mangrove Park",
        img: "images/mangrove-park.jpg",
        link: "mang.html",
        type: "land",
        location: "Mahinog",
        entranceFee: "₱30.00",
        openingHours: "8:00 AM - 5:00 PM",
        description: "A scenic boardwalk winding through a healthy forest of Black Mangroves.",
        activities: "Walking, Photography",
        travelTips: "Perfect for a quiet afternoon stroll and bird watching."
    },
    {
        name: "Jigdug Reef",
        img: "images/p1070177.webp",
        link: "jigdugreef.html",
        type: "diving",
        location: "Mambajao",
        entranceFee: "Varies by Dive Shop",
        openingHours: "By appointment",
        description: "An underwater paradise featuring vibrant soft corals and diverse fish life.",
        activities: "Scuba Diving",
        travelTips: "Best explored with a certified local dive center."
    },
    {
        name: "Ardent Hot Springs",
        img: "images/ardent.jpg",
        link: "ardent.html",
        type: "spring",
        location: "Mambajao",
        entranceFee: "₱50.00",
        openingHours: "6:00 AM - 10:00 PM",
        description: "Natural geothermal pools heated by Mt. Hibok-Hibok.",
        activities: "Night Swimming, Relaxation",
        travelTips: "Visit in the evening when the air is cooler to enjoy the heat."
    },
    {
        name: "Mt. Hibok-Hibok",
        img: "images/hbk2.jpg",
        link: "hibokhibok.html",
        type: "land",
        location: "Mambajao",
        entranceFee: "₱200.00 (Permit Required)",
        openingHours: "Early morning start",
        description: "An active stratovolcano offering a challenging trek and panoramic island views.",
        activities: "Hiking, Mountain Climbing",
        travelTips: "A local guide and a DENR permit are mandatory for hikers."
    },
    {
        name: "Katibawasan Falls",
        img: "images/katib.jfif",
        link: "katibawasan.html",
        type: "waterfall",
        location: "Mambajao",
        entranceFee: "₱50.00",
        openingHours: "8:00 AM - 5:00 PM",
        description: "A majestic 250-foot waterfall plunging into a rock pool surrounded by ferns.",
        activities: "Swimming, Sightseeing",
        travelTips: "The water is icy cold but incredibly refreshing after a long day."
    },
    {
        name: "Goi Ob Church Ruins",
        img: "images/goy.jpg",
        link: "guiob.html",
        type: "land",
        location: "Catarman",
        entranceFee: "₱20.00",  
        openingHours: "8:00 AM - 5:00 PM",
        description: "The remains of an 18th-century Spanish church destroyed by the 1871 eruption.",
        activities: "History, Photography",
        travelTips: "The ancient tree roots growing on the walls make for great photos."
    },
    {
        name: "Macao Cold Spring",
        img: "images/macao.jpg",
        link: "macao.html",
        type: "spring",
        location: "Mahinog",
        entranceFee: "₱30.00",
        openingHours: "8:00 AM - 5:00 PM",
        description: "A quiet, less-crowded cold spring shaded by century-old trees.",
        activities: "Swimming, Picnic",
        travelTips: "Bring your own food as there are fewer vendors here than Sto. Niño."
    }
];

// Create the filtered pool for the Carousel
const destinations = search_content_pool.filter(item =>
    ['island', 'diving', 'spring', 'waterfall', 'land'].includes(item.type)
);


let destinationModal;


function getItemsPerSlide() {
    if (window.innerWidth < 576) return 1;
    if (window.innerWidth < 992) return 3;
    return 5;
}


function showDestinationDetails(spotName) {
    const spot = search_content_pool.find(d => d.name === spotName);
    if (!spot) return;

    // Map data to HTML IDs
    document.getElementById('destinationModalLabel').innerText = spot.name;
    document.getElementById('modalImg').src = spot.img;
    document.getElementById('modalLocation').innerText = spot.location || "Camiguin";
    document.getElementById('modalCategory').innerText = spot.type.toUpperCase();
    document.getElementById('modalFee').innerText = spot.entranceFee || "Check locally";
    document.getElementById('modalHours').innerText = spot.openingHours || "Daylight hours";
    document.getElementById('modalBestTime').innerText = spot.bestTime || "Morning";
    document.getElementById('modalDescription').innerText = spot.description || "Beautiful spot in Camiguin.";
    document.getElementById('modalActivities').innerText = spot.activities || "Sightseeing, Relaxation";
    document.getElementById('modalTips').innerText = spot.travelTips || "Respect local guidelines and keep the area clean.";
    document.getElementById('modalLink').href = spot.link;

    const bookBtn = document.querySelector('#destinationModal .btn-info');
    if (bookBtn) {
        bookBtn.href = `inquire.html?destination=${encodeURIComponent(spot.name)}`;
    }

    if (destinationModal) {
        destinationModal.show();
    }
}

// 4. DISPLAY LOGIC
function displayDestinations(dataToDisplay = destinations) {
    const container = document.getElementById('carousel-container');
    if (!container) return;

    const itemsPerSlide = getItemsPerSlide();
    let htmlContent = '';

    if (dataToDisplay.length === 0) {
        container.innerHTML = `<div class="carousel-item active text-center py-5"><h3>No matches found.</h3></div>`;
        return;
    }

    for (let i = 0; i < dataToDisplay.length; i += itemsPerSlide) {
        const chunk = dataToDisplay.slice(i, i + itemsPerSlide);
        const isActive = i === 0 ? 'active' : '';  

        htmlContent += `
            <div class="carousel-item ${isActive}">
                <div class="row g-3 text-center justify-content-center">
                    ${chunk.map(spot => {
            let label = spot.type.charAt(0).toUpperCase() + spot.type.slice(1);
            if (spot.type === 'land') label = 'Land Destination';

            return `
                            <div class="col-12 col-sm-6 col-md-4 col-lg">
                                <div class="gallery-item" onclick="showDestinationDetails('${spot.name}')" style="cursor: pointer;">
                                    <img src="${spot.img}" class="img-fluid" alt="${spot.name}">
                                    <div class="desc">${spot.name}</div>
                                    <div class="badge bg-secondary">${label}</div>
                                </div>
                            </div>
                        `;
        }).join('')}
                </div>
            </div>
        `;
    }
    container.innerHTML = htmlContent;
}

// 5. FILTER & SEARCH
function filterCategory(category) {
    const buttons = document.querySelectorAll('.btn-outline-primary');
    buttons.forEach(btn => btn.classList.remove('active'));

    // Find button to set active (simple approach)
    event.target.classList.add('active');

    if (category === 'All') {
        displayDestinations(destinations);
    } else {
        const filteredData = destinations.filter(spot => spot.type === category);
        displayDestinations(filteredData);
    }
}

const searchInput = document.getElementById('searchInput');
const suggestionBox = document.getElementById('suggestionBox');

if (searchInput) {
    searchInput.addEventListener('input', () => {
        const query = searchInput.value.toLowerCase().trim();
        suggestionBox.innerHTML = '';

        if (query.length > 0) {
            const filtered = search_content_pool.filter(spot =>
                spot.name.toLowerCase().includes(query) ||
                spot.type.toLowerCase().includes(query)
            );

            if (filtered.length > 0) {
                suggestionBox.classList.remove('d-none');
                filtered.forEach(spot => {
                    const item = document.createElement('div');
                    item.className = 'list-group-item list-group-item-action';
                    item.style.cursor = 'pointer';
                    // Open modal on click from search
                    item.onclick = () => {
                        showDestinationDetails(spot.name);
                        suggestionBox.classList.add('d-none');
                        searchInput.value = '';
                    };
                    item.innerHTML = `
                        <div class="d-flex align-items-center">
                            <img src="${spot.img}" style="width: 40px; height: 40px; object-fit: cover; border-radius: 5px; margin-right: 10px;">
                            <div>
                                <div class="fw-bold" style="font-size:0.9rem;">${spot.name}</div>
                                <small class="text-muted">${spot.type}</small>
                            </div>
                        </div>`;
                    suggestionBox.appendChild(item);
                });
            } else {
                suggestionBox.classList.add('d-none');
            }
        } else {
            suggestionBox.classList.add('d-none');
        }
    });
}

// 6. INITIALIZATION
document.addEventListener('DOMContentLoaded', () => {
    // 1. Load the Gallery
    displayDestinations();

    // 2. Initialize the Modal once
    const modalEl = document.getElementById('destinationModal');
    if (modalEl) {
        destinationModal = new bootstrap.Modal(modalEl);
    }
});

window.addEventListener('resize', () => displayDestinations());

// Close suggestions on outside click
document.addEventListener('click', (e) => {
    if (searchInput && !searchInput.contains(e.target) && !suggestionBox.contains(e.target)) {
        suggestionBox.classList.add('d-none');
    }
});

(() => {
    'use strict'

    const form = document.getElementById('inquiryForm');
    // Initialize the Bootstrap Modal object
    const successModal = new bootstrap.Modal(document.getElementById('successModal'));

    form.addEventListener('submit', event => {
      // Always prevent default to handle via JS
      event.preventDefault();

      if (!form.checkValidity()) {
        event.stopPropagation();  
      } else {
        // IF FORM IS VALID:
        successModal.show(); // Show the pop-up
        form.reset();        // Optional: Clear the form
        form.classList.remove('was-validated'); // Reset validation styling
        return; 
      }

      form.classList.add('was-validated');
    }, false);
  })();

document.addEventListener('DOMContentLoaded', function() {

    const destinationSelect = document.getElementById('destination');
    
    if (destinationSelect) {
 
        const urlParams = new URLSearchParams(window.location.search);
        const selectedDest = urlParams.get('destination');


        if (selectedDest) {
            destinationSelect.value = selectedDest;
        }
    }
});

