/**
 * S.V Caterers - Culinary Data Store
 * Managed by Rakesh | Contact: +91 95736 05102
 */

const SV_DATA = {
    brand: {
        name: "S.V Caterers",
        tagline: "Where Royal Tradition Meets Exquisite Flavors",
        subtitle: "Premier Event & Wedding Catering with Impeccable Hospitality",
        owner: "Rakesh",
        phone: "9573605102",
        phoneDisplay: "+91 95736 05102",
        whatsappNumber: "919573605102",
        email: "svcaterers.events@gmail.com",
        location: "Hyderabad, Telangana & Andhra Pradesh",
        stats: {
            events: "850+",
            guests: "300,000+",
            years: "12+",
            rating: "4.9/5"
        }
    },

    categories: [
        { id: "all", name: "All Specialties", icon: "utensils" },
        { id: "traditional", name: "Traditional Feasts", icon: "leaf" },
        { id: "royal-north", name: "Royal Mughlai & North", icon: "crown" },
        { id: "live-counters", name: "Live Chaat & Stalls", icon: "flame" },
        { id: "starters", name: "Gourmet Starters", icon: "sparkles" },
        { id: "desserts", name: "Artisanal Desserts", icon: "cake" }
    ],

    menuItems: [
        {
            id: 1,
            category: "royal-north",
            name: "Shahi Hyderabadi Dum Biryani",
            type: "nonveg",
            badge: "Chef Rakesh's Signature",
            description: "Aromatic long-grain aged basmati rice slow-dum cooked with tender spiced cuts, saffron milk, fried cashews, and rich caramelized shallots.",
            image: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?q=80&w=800&auto=format&fit=crop"
        },
        {
            id: 2,
            category: "traditional",
            name: "Grand Banana Leaf Bhojanam",
            type: "veg",
            badge: "South Indian Classic",
            description: "Traditional celebratory banquet: Hot Ghee Rice, Sambar, Pepper Rasam, Gutti Vankaya curry, Pulihora, Appalam, Avial, and homemade Payasam.",
            image: "https://images.unsplash.com/photo-1610057099431-d73a1c9d2f2f?q=80&w=800&auto=format&fit=crop"
        },
        {
            id: 3,
            category: "royal-north",
            name: "Shahi Paneer Tikka Masala",
            type: "veg",
            badge: "Bestseller",
            description: "Charcoal-tandoor smoked malai paneer simmered in a velvety golden cashew, cardamom, and sun-ripened tomato gravy.",
            image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?q=80&w=800&auto=format&fit=crop"
        },
        {
            id: 4,
            category: "starters",
            name: "Crispy Golden Corn Cornetto & Hara Bhara Kabab",
            type: "veg",
            badge: "Hot Starter",
            description: "Spinach, green pea and aromatic spice patties stuffed with soft cheese, served with fresh mint-coriander emulsion and tang.",
            image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?q=80&w=800&auto=format&fit=crop"
        },
        {
            id: 5,
            category: "live-counters",
            name: "Interactive Live Chaat & Pani Puri Hub",
            type: "veg",
            badge: "Live Interactive Stall",
            description: "Crisp golden puris filled with spiced sprouts and potatoes, served with 5 flavors of chilled herbal waters & authentic Dahi Papdi Chaat.",
            image: "https://images.unsplash.com/photo-1606491956689-2ea866880c84?q=80&w=800&auto=format&fit=crop"
        },
        {
            id: 6,
            category: "royal-north",
            name: "Dal Makhani Dum Pukht",
            type: "veg",
            badge: "Slow Cooked 18 Hrs",
            description: "Black lentils and kidney beans simmered overnight on slow charcoal embers, finished with churned white butter and pure cream.",
            image: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?q=80&w=800&auto=format&fit=crop"
        },
        {
            id: 7,
            category: "desserts",
            name: "Kesar Angoori Rasmalai & Malai Rabdi",
            type: "veg",
            badge: "Royal Delicacy",
            description: "Mini soft chhena dumplings steeped in condensed saffron cardamom milk, garnished with Iranian pistachios and silver foil.",
            image: "https://images.unsplash.com/photo-1598866594230-a7c12756260f?q=80&w=800&auto=format&fit=crop"
        },
        {
            id: 8,
            category: "live-counters",
            name: "Live Tawa Dosa & Podi Mini Idli Island",
            type: "veg",
            badge: "Live Cooking Station",
            description: "Crispy ghee roast dosas, spring vegetable dosas, and mini gun powder idlis prepared hot on order with 4 artisanal fresh chutneys.",
            image: "https://images.unsplash.com/photo-1668236543090-82eba5ee5976?q=80&w=800&auto=format&fit=crop"
        },
        {
            id: 9,
            category: "starters",
            name: "Murgh Malai Tikka & Tandoori Platter",
            type: "nonveg",
            badge: "Smoky Tandoor",
            description: "Tender chicken morsels marinated in fresh malai, white pepper, royal cheese, and roasted over clay hearths until meltingly tender.",
            image: "https://images.unsplash.com/photo-1599488615731-7e5c2823ff28?q=80&w=800&auto=format&fit=crop"
        },
        {
            id: 10,
            category: "desserts",
            name: "Hot Gulab Jamun with Shahi Rabdi",
            type: "veg",
            badge: "Wedding Favorite",
            description: "Mawa dumplings golden-fried in pure desi ghee, soaked in rose cardamom syrup and served hot alongside thick chilled malai rabdi.",
            image: "https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?q=80&w=800&auto=format&fit=crop"
        },
        {
            id: 11,
            category: "traditional",
            name: "Gutti Vankaya & Bagara Rice",
            type: "veg",
            badge: "Telangana Heritage",
            description: "Stuffed tender baby brinjals in a roasted sesame, poppy seed, and peanut gravy paired with fragrant seasoned Bagara rice.",
            image: "https://images.unsplash.com/photo-1589302168068-964664d93dc0?q=80&w=800&auto=format&fit=crop"
        },
        {
            id: 12,
            category: "live-counters",
            name: "Exotic Welcome Mocktails & Shakes",
            type: "veg",
            badge: "Welcome Beverage",
            description: "Live welcome counter with Smoked Tender Coconut Punch, Blue Lagoon Spritz, Kesar Badam Milk, and Fresh Mint Mojitos.",
            image: "https://images.unsplash.com/photo-1551024709-8f23befc6f87?q=80&w=800&auto=format&fit=crop"
        }
    ],

    packages: [
        {
            id: "silver",
            name: "Silver Classic Feast",
            tagline: "Ideal for Engagements, Gruhapravesam & Family Functions",
            basePrice: 450,
            popular: false,
            features: [
                "2 Welcome Mocktails / Beverages",
                "2 Vegetarian Starters (Crispy Veg / Manchuria)",
                "3 Main Course Specialties (Paneer Butter Masala, Veg Kurma)",
                "Bagara / Jeera Rice + Steamed Basmati Rice",
                "Traditional Dal Tadka, Sambar & Curd",
                "Assorted Tandoori Rotis & Butter Naan",
                "2 Traditional Sweets (Gulab Jamun, Mysore Pak)",
                "Complete Buffet Setup & Mineral Water"
            ]
        },
        {
            id: "gold",
            name: "Gold Royal Banquet",
            tagline: "Our Most Popular Choice for Grand Weddings & Receptions",
            basePrice: 650,
            popular: true,
            features: [
                "3 Luxury Welcome Drinks & Shakes",
                "3 Gourmet Starters (Veg & Non-Veg options)",
                "1 Live Interactive Counter (Chaat / Dosa / Tandoor)",
                "Signature Hyderabadi Dum Biryani + Mirchi Ka Salan",
                "4 Specialty Curries & Shahi Dal Makhani",
                "Assorted Tandoori Breads (Butter Naan, Kulcha, Roti)",
                "Hot Sweet Counter (Live Jalebi with Rabdi)",
                "3 Desserts + Matka Kulfi Counter",
                "VIP Crockery, Uniformed Captains & Ambiance Decor"
            ]
        },
        {
            id: "platinum",
            name: "Platinum Maharaja Spread",
            tagline: "Supreme Luxury Experience for Destination & Elite Weddings",
            basePrice: 950,
            popular: false,
            features: [
                "Full Mocktail & Liquid Lounge Station",
                "5 Chef Special Starters (Live Grills & Barbeque)",
                "3 Interactive Live Stalls (Chaat, Pasta, Dosa/Dimsum)",
                "Awadhi Dum Biryani / Royal Pulao Bar",
                "6 Specialty Main Courses & Exotic Vegetable Medley",
                "Live Bread Hearth & Artisanal Roti Basket",
                "Grand Dessert Island (Rasmalai, Baklava, Rabdi, Ice Creams)",
                "Paan & Royal Mukhwas Counter with Brass Urns",
                "VIP Table Service, Executive Chefs On-Site & Ambiance Lighting"
            ]
        }
    ],

    services: [
        {
            icon: "sparkles",
            title: "Grand Wedding Banquets",
            description: "Magnificent multi-course banquets crafted to make your wedding memorable. From royal welcome drinks to opulent dessert displays."
        },
        {
            icon: "flame",
            title: "Live Interactive Food Stations",
            description: "Sizzling live dosa tawas, charcoal barbeque grills, steaming dim sums, and vibrant chaat streets that captivate guests."
        },
        {
            icon: "home",
            title: "Gruhapravesam & Traditional Poojas",
            description: "Pure Satvik, pure ghee traditional banana leaf feasts prepared with utmost sanctity and regional authenticity."
        },
        {
            icon: "briefcase",
            title: "Corporate Meets & Galas",
            description: "Punctual, hygienic, and executive-level breakfast, lunch, and high-tea setups for conferences and corporate celebrations."
        },
        {
            icon: "party-popper",
            title: "Sangeet, Haldi & Birthdays",
            description: "Youthful, vibrant food concepts, fusion finger bites, mocktail bars, and dessert counters tailored for fun evenings."
        },
        {
            icon: "award",
            title: "Complete Event Hospitality",
            description: "Professional uniformed captains, elegant chaffing dishes, luxury bone-china dinnerware, and dedicated floor supervisors."
        }
    ],

    testimonials: [
        {
            name: "Srinivas Rao & Family",
            event: "Daughter's Grand Wedding (1,200 Guests)",
            location: "Gachibowli, Hyderabad",
            rating: 5,
            review: "Rakesh garu took care of our daughter's wedding catering like his own family event. The Hyderabadi Dum Biryani and the live Chaat counter were the talk of the evening. Every single guest praised the taste, warmth, and hygiene!",
            date: "Recent Wedding"
        },
        {
            name: "Dr. Ananya Reddy",
            event: "Reception & Sangeet (650 Guests)",
            location: "Secunderabad",
            rating: 5,
            review: "S.V Caterers delivered beyond our highest expectations! The presentation was regal, the staff was extremely courteous, and Rakesh personally supervised every single counter. Best catering in town!",
            date: "Recent Reception"
        },
        {
            name: "Mahesh Silveri",
            event: "Gruhapravesam Ceremony (350 Guests)",
            location: "Warangal",
            rating: 5,
            review: "Authentic traditional banana leaf meals with pure ghee aroma. The Gutti Vankaya and hot Kesar Rasmalai were unbelievable. Dealing directly with Rakesh on WhatsApp made planning completely hassle-free.",
            date: "Recent Event"
        }
    ],

    faqs: [
        {
            q: "How far in advance should we book S.V Caterers?",
            a: "For auspicious wedding dates, we recommend booking 3 to 6 weeks in advance. However, for immediate or smaller gatherings, you can contact Rakesh directly at 9573605102 to check date availability."
        },
        {
            q: "Do you offer food tasting before booking?",
            a: "Yes! We gladly organize a personalized food tasting session for weddings and large events so your family can experience our signature recipes and confirm the menu with complete confidence."
        },
        {
            q: "Can you customize the menu according to our regional traditions?",
            a: "Absolutely. Rakesh works with you one-on-one to create a customized menu tailored to your preferences, whether Pure Veg Satvik, Jain, Telangana, Andhra, or North Indian Mughlai."
        },
        {
            q: "What safety and hygiene standards do you maintain?",
            a: "We practice 5-star hygiene: 100% RO-purified water for all cooking, fresh grade-A ingredients, pure desi ghee, and uniformed catering personnel equipped with caps and gloves."
        },
        {
            q: "What is your guest capacity?",
            a: "We cater to intimate family events starting at 50 guests up to mega wedding gatherings exceeding 5,000+ guests with complete infrastructure."
        }
    ],

    gallery: [
        {
            title: "Royal Wedding Dining Hall",
            category: "Ambiance",
            image: "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=800&auto=format&fit=crop"
        },
        {
            title: "Live Barbeque & Kebabs Counter",
            category: "Live Stalls",
            image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=800&auto=format&fit=crop"
        },
        {
            title: "Grand Dessert & Sweet Display",
            category: "Sweets",
            image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?q=80&w=800&auto=format&fit=crop"
        },
        {
            title: "Authentic Banana Leaf Feast",
            category: "Traditional",
            image: "https://images.unsplash.com/photo-1610057099431-d73a1c9d2f2f?q=80&w=800&auto=format&fit=crop"
        },
        {
            title: "Exquisite Gold Banquet Cutlery Setup",
            category: "Ambiance",
            image: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?q=80&w=800&auto=format&fit=crop"
        },
        {
            title: "Signature Dum Biryani Serving",
            category: "Royal Dishes",
            image: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?q=80&w=800&auto=format&fit=crop"
        }
    ]
};
