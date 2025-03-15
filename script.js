
// Global Variables and Initialization
let selectedLocation = localStorage.getItem('selectedLocation');
let selectedLocationName = localStorage.getItem('selectedLocationName');
const locationNames = {
  location1: "Brandon Park",
  location2: "Southland",
  location3: "Pakenham",
  location4: "Stud Park",
  location5: "Heidelberg"
};

// Initialize the dropdown button text
if (selectedLocationName) {
  document.getElementById('selected-location').textContent = selectedLocationName;
}

// Set the current year in the footer
document.getElementById('year').textContent = new Date().getFullYear();

// Mobile Menu Toggle
document.getElementById('mobile-menu-btn').addEventListener('click', function() {
  const mobileMenu = document.getElementById('mobile-menu');
  const menuIcon = document.getElementById('menu-icon');
  
  if (mobileMenu.classList.contains('show')) {
    mobileMenu.classList.remove('show');
    menuIcon.classList.remove('ri-close-line');
    menuIcon.classList.add('ri-menu-line');
  } else {
    mobileMenu.classList.add('show');
    menuIcon.classList.remove('ri-menu-line');
    menuIcon.classList.add('ri-close-line');
  }
});

// Location Dropdown Toggle
document.getElementById('location-dropdown-btn').addEventListener('click', function() {
  document.getElementById('location-dropdown-content').classList.toggle('show');
});

// Close the dropdown if clicked outside
window.addEventListener('click', function(event) {
  if (!event.target.matches('.location-btn') && !event.target.matches('#selected-location')) {
    const dropdown = document.getElementById('location-dropdown-content');
    if (dropdown.classList.contains('show')) {
      dropdown.classList.remove('show');
    }
  }
});

// Scroll to Section Function
function scrollToSection(sectionId) {
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
}

// Location Selection Function
function selectLocation(locationId, locationName) {
  // Store the selected location
  selectedLocation = locationId;
  selectedLocationName = locationName;
  localStorage.setItem('selectedLocation', locationId);
  localStorage.setItem('selectedLocationName', locationName);
  
  // Update UI elements
  document.getElementById('selected-location').textContent = locationName;
  if (document.getElementById('location-display')) {
    document.getElementById('location-display').textContent = `Showing prices for: ${locationName}`;
  }
  
  // Close dropdown
  document.getElementById('location-dropdown-content').classList.remove('show');
  
  // If on services page, update service prices
  if (document.getElementById('services-container')) {
    hideLocationPrompt();
    loadServices();
  }
  
  // If on locations page, update selected location
  if (document.getElementById('locations-container')) {
    updateLocationCards();
  }
}

// Load services based on selected location
function loadServices() {
  if (!selectedLocation) {
    showLocationPrompt();
    return;
  }
  
  const servicesContainer = document.getElementById('services-container');
  servicesContainer.innerHTML = ''; // Clear previous content
  
  // Service data
  const servicesData = {
    'facialServices': {
      title: 'Facial Services',
      items: [
        {
          title: 'Eyebrow Threading/Waxing',
          description: 'Precisely shaped eyebrows using ancient threading technique',
          locationPrices: {
            location1: '$14',
            location2: '$15',
            location3: '$13',
            location4: '$14',
            location5: '$15'
          },
          image: 'https://media.istockphoto.com/id/1219595426/photo/applying-gold-colored-wax-with-spatula-on-womans-face-stock-photo.jpg?s=612x612&w=0&k=20&c=5foFCtmRPF-SWRmcOn8MpNZCnEM4KIgvbyN6sRqtnKQ='
        },
        {
          title: 'Upper Lip',
          description: 'Gentle hair removal for your upper lip area',
          locationPrices: {
            location1: '$8',
            location2: '$9',
            location3: '$8',
            location4: '$8',
            location5: '$9'
          },
          image: 'https://media.istockphoto.com/id/1075627666/photo/therapist-waxing-womans-upper-lip.jpg?s=612x612&w=0&k=20&c=_HVVmbTzVMuhpOQD1ZpLteJQdX4Yf5fJL1oFn3mohXg='
        },
        {
          title: 'Forehead',
          description: 'Smooth and hair-free forehead',
          locationPrices: {
            location1: '$10',
            location2: '$10',
            location3: '$9',
            location4: '$10',
            location5: '$10'
          },
          image: 'https://media.istockphoto.com/id/1083288278/photo/eyebrow-threading-epilation-procedure-for-brow-shape-correction.jpg?s=612x612&w=0&k=20&c=ql2jQHMHAYhUxEMcP0RLVujWbCnHgjoRqWSvkBmS_G4='
        },
        {
          title: 'Chin',
          description: 'Precise hair removal for the chin area',
          locationPrices: {
            location1: '$8',
            location2: '$9',
            location3: '$8',
            location4: '$8',
            location5: '$10'
          },
          image: 'https://media.istockphoto.com/id/163736832/photo/beauty-salon.jpg?s=612x612&w=0&k=20&c=RntBzJuayNaeSmw1LKvjVTAIJbYxWPfhIwBwr4dlHUc='
        }
      ]
    },
    'bodyServices': {
      title: 'Body Services',
      items: [
        {
          title: 'Full Body',
          description: 'Complete hair removal package for full body',
          locationPrices: {
            location1: '$110',
            location2: '$120',
            location3: '$100',
            location4: '$110',
            location5: '$120'
          },
          image: 'https://t4.ftcdn.net/jpg/04/64/67/01/240_F_464670170_zmkaTyJxOmLIgq8GwwJrf3XQ4COJa9i8.jpg'
        },
        {
          title: 'Half Arm',
          description: 'Hair removal for half arm',
          locationPrices: {
            location1: '$25',
            location2: '$28',
            location3: '$24',
            location4: '$25',
            location5: '$28'
          },
          image: 'https://t4.ftcdn.net/jpg/00/78/84/03/240_F_78840300_rGL4knquOPQPdhQF6Ljn5dPc3NSYTWTA.jpg'
        }
      ]
    },
    'facialTreatments': {
      title: 'Facial Treatments',
      items: [
        {
          title: 'Mini Facial',
          description: 'Refreshing facial treatment for quick rejuvenation',
          locationPrices: {
            location1: '$45',
            location2: '$50',
            location3: '$45',
            location4: '$45',
            location5: 'Not Available'
          },
          image: 'https://t3.ftcdn.net/jpg/01/92/98/42/240_F_192984281_jF619bZ4SwP0IgyCT5nPnQrpYi6dXQt7.jpg'
        },
        {
          title: 'Full Facial',
          description: 'Complete facial treatment for deep rejuvenation',
          locationPrices: {
            location1: '$80',
            location2: '$85',
            location3: '$75',
            location4: '$80',
            location5: 'Not Available'
          },
          image: 'https://t3.ftcdn.net/jpg/08/74/09/20/240_F_874092052_tyNQTd1VKpLnMF8FjGGTQMSJgechEHSK.jpg'
        }
      ]
    }
  };

  // Create HTML for each service category
  Object.entries(servicesData).forEach(([key, category]) => {
    const availableServices = category.items.filter(service => {
      if (service.locationPrices[selectedLocation] === 'Not Available') return false;
      return true;
    });

    if (availableServices.length === 0) return;

    const categoryElement = document.createElement('div');
    categoryElement.className = 'service-category';
    
    categoryElement.innerHTML = `
      <h3>${category.title}</h3>
      <div class="services-grid">
        ${availableServices.map(service => `
          <div class="service-card">
            <div class="service-image">
              <img src="${service.image}" alt="${service.title}">
            </div>
            <div class="service-details">
              <h4>${service.title}</h4>
              <p class="description">${service.description}</p>
              <p class="price">${service.locationPrices[selectedLocation]}</p>
            </div>
          </div>
        `).join('')}
      </div>
    `;
    
    servicesContainer.appendChild(categoryElement);
  });
}

// Show location prompt when no location is selected
function showLocationPrompt() {
  document.getElementById('location-prompt').style.display = 'block';
}

// Hide location prompt
function hideLocationPrompt() {
  document.getElementById('location-prompt').style.display = 'none';
}

// Update locations page
function loadLocations() {
  if (!document.getElementById('locations-container')) return;
  
  const locationsData = [
    {
      id: 1,
      name: "Brandon Park Shopping Centre",
      address: "Brandon Park Dr, Wheelers Hill VIC 3150",
      description: "Located in the heart of Wheelers Hill, our Brandon Park location offers expert threading and beauty services.",
      phone: "+61415469594",
      hours: {
        "Monday": "9:00 AM - 5:30 PM",
        "Tuesday": "9:00 AM - 5:30 PM",
        "Wednesday": "9:00 AM - 5:30 PM",
        "Thursday": "9:00 AM - 7:00 PM",
        "Friday": "9:00 AM - 7:00 PM",
        "Saturday": "9:00 AM - 5:00 PM",
        "Sunday": "9:00 AM - 5:00 PM"
      },
      image: "https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=600&q=80",
      storeId: "location1",
      coordinates: { lat: -37.9082, lng: 145.1647 }
    },
    {
      id: 2,
      name: "Southland Shopping Centre",
      address: "1239 Nepean Hwy, Cheltenham VIC 3192",
      description: "Visit our Southland location for premium beauty services in a convenient shopping center setting.",
      phone: "+61415469594",
      hours: {
        "Monday": "9:00 AM - 5:30 PM",
        "Tuesday": "9:00 AM - 5:30 PM",
        "Wednesday": "9:00 AM - 5:30 PM",
        "Thursday": "9:00 AM - 7:00 PM",
        "Friday": "9:00 AM - 7:00 PM",
        "Saturday": "9:00 AM - 5:00 PM",
        "Sunday": "9:00 AM - 5:00 PM"
      },
      image: "https://images.unsplash.com/photo-1613843448974-715d4e2772fd?auto=format&fit=crop&w=600&q=80",
      storeId: "location2",
      coordinates: { lat: -37.9591, lng: 145.0539 }
    },
    {
      id: 3,
      name: "Pakenham Central Marketplace",
      address: "50-54 John St, Pakenham VIC 3810",
      description: "Our Pakenham location offers the same high-quality services at competitive rates.",
      phone: "+61415469594",
      hours: {
        "Monday": "9:00 AM - 5:30 PM",
        "Tuesday": "9:00 AM - 5:30 PM",
        "Wednesday": "9:00 AM - 5:30 PM",
        "Thursday": "9:00 AM - 7:00 PM",
        "Friday": "9:00 AM - 7:00 PM",
        "Saturday": "9:00 AM - 5:00 PM",
        "Sunday": "9:00 AM - 5:00 PM"
      },
      image: "https://images.unsplash.com/photo-1612837017251-5b4b999883fb?auto=format&fit=crop&w=600&q=80",
      storeId: "location3",
      coordinates: { lat: -38.0742, lng: 145.4842 }
    },
    {
      id: 4,
      name: "Stud Park Shopping Centre",
      address: "Stud Rd, Rowville VIC 3178",
      description: "Conveniently located in Rowville, our Stud Park location provides expert threading services.",
      phone: "+61415469594",
      hours: {
        "Monday": "9:00 AM - 5:30 PM",
        "Tuesday": "9:00 AM - 5:30 PM",
        "Wednesday": "9:00 AM - 5:30 PM",
        "Thursday": "9:00 AM - 7:00 PM",
        "Friday": "9:00 AM - 7:00 PM",
        "Saturday": "9:00 AM - 5:00 PM",
        "Sunday": "9:00 AM - 5:00 PM"
      },
      image: "https://images.unsplash.com/photo-1579975096649-e773152cd3dc?auto=format&fit=crop&w=600&q=80",
      storeId: "location4",
      coordinates: { lat: -37.9275, lng: 145.2359 }
    },
    {
      id: 5,
      name: "Warringal Shopping Centre",
      address: "Burgundy St, Heidelberg VIC 3084",
      description: "Visit our newest location in Heidelberg for all your threading and beauty needs.",
      phone: "+61415469594",
      hours: {
        "Monday": "9:00 AM - 5:30 PM",
        "Tuesday": "9:00 AM - 5:30 PM",
        "Wednesday": "9:00 AM - 5:30 PM",
        "Thursday": "9:00 AM - 7:00 PM",
        "Friday": "9:00 AM - 7:00 PM",
        "Saturday": "9:00 AM - 5:00 PM",
        "Sunday": "9:00 AM - 5:00 PM"
      },
      image: "https://images.unsplash.com/photo-1470074292333-06772c993f6b?auto=format&fit=crop&w=600&q=80",
      storeId: "location5",
      coordinates: { lat: -37.7559, lng: 145.0707 }
    }
  ];

  const locationsContainer = document.getElementById('locations-container');
  
  locationsData.forEach(location => {
    const locationCard = document.createElement('div');
    locationCard.className = `location-card ${location.storeId === selectedLocation ? 'selected' : ''}`;
    locationCard.id = `location-card-${location.storeId}`;
    locationCard.dataset.locationId = location.storeId;
    
    locationCard.innerHTML = `
      <div class="location-image">
        <img src="${location.image}" alt="${location.name}">
      </div>
      <div class="location-content">
        <div class="location-header">
          <div>
            <h3 class="location-name">${location.name}</h3>
            <p class="location-address" onclick="openDirections('${location.name}', '${location.address}')">${location.address}</p>
          </div>
          <button class="location-call" onclick="callLocation(event, '${location.phone}')">
            <i class="ri-phone-line"></i>
            <span>Call Now</span>
          </button>
        </div>
        
        ${location.description ? `<p class="location-description">${location.description}</p>` : ''}
        
        <div class="location-hours">
          <h4 class="location-hours-title">Opening Hours:</h4>
          <div class="hours-grid">
            ${Object.entries(location.hours).map(([day, hours]) => `
              <div class="hour-item">
                <span class="day-name">${day}</span>
                <span class="day-hours">${hours}</span>
              </div>
            `).join('')}
          </div>
        </div>
        
        <button 
          class="select-location-btn ${location.storeId === selectedLocation ? 'selected-btn' : 'select-btn'}"
          onclick="selectLocationFromCard(event, '${location.storeId}', '${location.name}')"
        >
          ${location.storeId === selectedLocation ? 'Selected Location' : 'Select This Location'}
        </button>
      </div>
    `;
    
    locationsContainer.appendChild(locationCard);
  });

  // Initialize Google Map
  window.initMap = function() {
    const mapCenter = { lat: -37.9082, lng: 145.2305 };
    const map = new google.maps.Map(document.getElementById('locations-map'), {
      zoom: 10,
      center: mapCenter,
      styles: [
        {
          featureType: "all",
          elementType: "all",
          stylers: [{ saturation: -100 }],
        },
      ],
    });

    // Add markers for each location
    locationsData.forEach(location => {
      const marker = new google.maps.Marker({
        position: location.coordinates,
        map: map,
        title: location.name,
        animation: location.storeId === selectedLocation ? google.maps.Animation.BOUNCE : null
      });

      const infoWindow = new google.maps.InfoWindow({
        content: `
          <div style="padding: 10px; max-width: 200px;">
            <h3 style="margin: 0 0 5px; font-weight: 600;">${location.name}</h3>
            <p style="margin: 0; font-size: 14px;">${location.address}</p>
          </div>
        `
      });

      marker.addListener('click', () => {
        selectLocation(location.storeId, location.name);
        
        // Set animation for selected marker
        locationsData.forEach(loc => {
          const otherMarker = markers.find(m => m.title === loc.name);
          if (otherMarker) {
            otherMarker.setAnimation(null);
          }
        });
        marker.setAnimation(google.maps.Animation.BOUNCE);
        
        infoWindow.open(map, marker);
      });

      marker.addListener('mouseover', () => {
        infoWindow.open(map, marker);
      });

      marker.addListener('mouseout', () => {
        infoWindow.close();
      });

      markers.push(marker);
    });
  };
}

let markers = [];

// Select location from location card
function selectLocationFromCard(event, locationId, locationName) {
  event.stopPropagation();
  selectLocation(locationId, locationName);
  
  // Show toast message
  showToast(`You've selected ${locationName} as your preferred location.`);
}

// Update location cards when a location is selected
function updateLocationCards() {
  const locationCards = document.querySelectorAll('.location-card');
  locationCards.forEach(card => {
    const cardLocationId = card.dataset.locationId;
    
    if (cardLocationId === selectedLocation) {
      card.classList.add('selected');
      card.querySelector('.select-location-btn').textContent = 'Selected Location';
      card.querySelector('.select-location-btn').className = 'select-location-btn selected-btn';
    } else {
      card.classList.remove('selected');
      card.querySelector('.select-location-btn').textContent = 'Select This Location';
      card.querySelector('.select-location-btn').className = 'select-location-btn select-btn';
    }
  });
}

// Open directions in Google Maps
function openDirections(name, address) {
  window.open(
    `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
      `${name} ${address}`
    )}`,
    "_blank"
  );
}

// Call location
function callLocation(event, phone) {
  event.stopPropagation();
  window.location.href = `tel:${phone}`;
}

// Show toast message
function showToast(message) {
  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.textContent = message;
  
  document.body.appendChild(toast);
  
  setTimeout(() => {
    toast.classList.add('show');
  }, 100);
  
  setTimeout(() => {
    toast.classList.remove('show');
    setTimeout(() => {
      document.body.removeChild(toast);
    }, 300);
  }, 3000);
}

// Add CSS for toast
const toastStyle = document.createElement('style');
toastStyle.textContent = `
  .toast {
    position: fixed;
    bottom: 20px;
    left: 50%;
    transform: translateX(-50%) translateY(100px);
    background-color: var(--secondary);
    color: var(--white);
    padding: 12px 24px;
    border-radius: 4px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
    z-index: 9999;
    opacity: 0;
    transition: transform 0.3s, opacity 0.3s;
  }
  
  .toast.show {
    transform: translateX(-50%) translateY(0);
    opacity: 1;
  }
`;
document.head.appendChild(toastStyle);

// Handle location select in service page
if (document.getElementById('location-select')) {
  document.getElementById('location-select').addEventListener('change', function() {
    const locationId = this.value;
    if (locationId) {
      selectLocation(locationId, locationNames[locationId]);
    }
  });
}

// reCAPTCHA
let recaptchaVerified = false;

function onRecaptchaLoad() {
  if (document.getElementById('recaptcha')) {
    grecaptcha.render('recaptcha', {
      'sitekey': '6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI', // Replace with your reCAPTCHA site key
      'callback': onRecaptchaVerified
    });
  }
}

function onRecaptchaVerified() {
  recaptchaVerified = true;
  const submitBtn = document.getElementById('submit-btn');
  if (submitBtn) {
    submitBtn.disabled = false;
  }
}

// Contact form submission
if (document.getElementById('contact-form')) {
  document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    if (!recaptchaVerified) {
      showToast('Please complete the captcha verification');
      return;
    }
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    
    // In a real implementation, you'd send this data to your server
    console.log('Form submitted:', { name, email, message });
    
    // Show success message
    showToast('Your message has been sent successfully');
    
    // Reset form
    this.reset();
    recaptchaVerified = false;
    document.getElementById('submit-btn').disabled = true;
    grecaptcha.reset();
  });
}

// Initialize page-specific functionality
document.addEventListener('DOMContentLoaded', function() {
  // If we're on the services page
  if (document.getElementById('services-container')) {
    if (selectedLocation) {
      hideLocationPrompt();
      loadServices();
      document.getElementById('location-display').textContent = `Showing prices for: ${selectedLocationName}`;
    } else {
      showLocationPrompt();
    }
  }
  
  // If we're on the locations page
  if (document.getElementById('locations-container')) {
    loadLocations();
  }
});
