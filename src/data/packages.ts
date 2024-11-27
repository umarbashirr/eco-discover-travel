import { ITravelPackage } from "@/interfaces/package.interface";

export const TravelPackages: ITravelPackage[] = [
  {
    title: "Kashmir 4 Nights & 5 Days Tour",
    slug: "kashmir-4n-5d-tour",
    short_desc:
      "A 4-night, 5-day tour to experience the beauty of Kashmir’s landscapes, culture, and historical sites.",
    overview:
      "This 4-night, 5-day tour will take you through some of the most beautiful places in Kashmir, including Srinagar, Gulmarg, and Pahalgam. You will explore gardens, temples, valleys, and enjoy local culture while experiencing the natural beauty of the region.",
    duration: {
      days: 5,
      nights: 4,
    },
    destination: "Kashmir",
    highlights: [
      "Explore the beautiful Mughal Gardens in Srinagar.",
      "Visit the famous Shankaracharya Temple for panoramic views.",
      "Take a scenic drive to Gulmarg, with a Gondola ride to Apharwat Peak.",
      "Discover the snow-covered landscapes of Gulmarg and Drung Waterfall.",
      "Relax in Pahalgam and visit Betaab Valley and Aru Valley.",
      "Enjoy a traditional Shikara ride on Dal Lake in Srinagar.",
    ],
    itinerary: [
      {
        title: "Arrival in Srinagar",
        details: [
          "Arrive in Srinagar and transfer to your accommodation.",
          "Visit the Mughal Gardens: Shalimar Bagh, Nishat Bagh, and Chashme Shahi.",
          "Visit Shankaracharya Temple for a view of Srinagar and Dal Lake.",
          "Explore Jamia Masjid and Hazratbal Shrine.",
          "Walk through the local markets to shop for Kashmiri handicrafts.",
        ],
      },
      {
        title: "Gulmarg Day Trip (60km/2hrs)",
        details: [
          "Drive to Gulmarg and enjoy the snowy landscapes.",
          "Take a Gondola ride to Apharwat Peak for scenic views.",
          "Visit the Gulmarg Golf Course.",
          "On the way back, stop at Drung Waterfall.",
          "Return to Srinagar for the night.",
        ],
      },
      {
        title: "Pahalgam Overnight Stay (160km/2hrs)",
        details: [
          "Drive to Pahalgam and visit the saffron fields and Awantipora Ruins.",
          "Explore Betaab Valley, Aru Valley, and Chandanwari.",
          "Relax and explore the local market in Pahalgam.",
          "Stay overnight in Pahalgam.",
        ],
      },
      {
        title: "Pahalgam to Srinagar (160km/2hrs)",
        details: [
          "Explore Pahalgam in the morning.",
          "Drive back to Srinagar and enjoy a Shikara ride on Dal Lake.",
          "Spend the evening at leisure in Srinagar.",
        ],
      },
      {
        title: "Departure",
        details: [
          "Spend the morning in Srinagar for last-minute shopping or sightseeing.",
          "Check out from your accommodation and proceed to your onward destination.",
        ],
      },
    ],
    image_gallery: ["/gulmarg-bg.jpg", "/pahalgam-bg.jpg", "/srinagar.jpg"],
    featured_image: "/pahalgam-bg.jpg",
    includes: [
      "Accommodation at all Destinations as per itinerary",
      "Dinner & Breakfast at all Destinations as per Itinerary",
      "Comfortable non-AC Innova/Xylo/Tempo for all days as per the itinerary",
      "Reliable, experienced, and adept English-speaking local driver with great knowledge of the area and the terrain",
      "Driver charges, driver accommodation, fuel, and inter-state toll",
      "Welcome Drink (Kashmir saffron tea)",
      "First Aid Box",
      "Guide",
    ],
    excludes: [
      "Any Personal Expenses / Tips / Beverages and meals that are not mentioned in the itinerary",
      "Any cost arising out of unforeseen circumstances including medical emergencies and acts of God",
      "Anything that is not mentioned in the above list of inclusions",
      "Monastery / Museum Entrance Fees",
      "Airfare to and from Leh or any other destination",
      "Medical and Travel Insurance",
      "Additional costs due to flight cancellations, roadblocks, natural calamities, and natural fury",
      "Adventure activity costs (Pony ride, camel safari, rafting, paragliding, mountain biking, etc.)",
    ],
  },
  {
    title: "Kashmir 5 Nights & 6 Days Tour",
    slug: "kashmir-5n-6d-tour",
    short_desc:
      "A 5-night, 6-day tour to explore the natural beauty and cultural heritage of Kashmir.",
    overview:
      "This 5-night, 6-day tour offers a more in-depth experience of Kashmir. From Srinagar's gardens and temples to the snowy peaks of Gulmarg and the serene beauty of Pahalgam and Sonmarg, this itinerary provides a thorough exploration of the region’s attractions.",
    duration: {
      days: 6,
      nights: 5,
    },
    destination: "Kashmir",
    highlights: [
      "Visit the Mughal Gardens and cultural sites of Srinagar.",
      "Take a scenic drive to Sonmarg and enjoy views of Thajiwas Glacier.",
      "Experience the Gondola ride in Gulmarg with stunning snowy landscapes.",
      "Discover Betaab Valley, Aru Valley, and Chandanwari in Pahalgam.",
      "Enjoy a traditional Shikara ride on Dal Lake.",
      "Explore the lush green landscapes and local culture of Pahalgam.",
    ],
    itinerary: [
      {
        title: "Arrival in Srinagar",
        details: [
          "Arrive in Srinagar and transfer to your accommodation.",
          "Visit the Mughal Gardens: Shalimar Bagh, Nishat Bagh, and Chashme Shahi.",
          "Visit Shankaracharya Temple for a panoramic view of Srinagar and Dal Lake.",
          "Explore Jamia Masjid and Hazratbal Shrine.",
          "End the day with a Shikara ride on Dal Lake.",
        ],
      },
      {
        title: "Sonmarg Day Trip",
        details: [
          "Drive to Sonmarg, enjoying the view along the Sindh River.",
          "Explore Thajiwas Glacier with the option for a short trek or pony ride.",
          "Return to Srinagar in the evening.",
        ],
      },
      {
        title: "Gulmarg Day Trip (60km/2hrs)",
        details: [
          "Travel to Gulmarg and enjoy the snowy scenery.",
          "Take a Gondola ride to Apharwat Peak for stunning views.",
          "Visit the Gulmarg Golf Course.",
          "On the way back, stop at Drung Waterfall.",
          "Return to Srinagar in the evening.",
        ],
      },
      {
        title: "Pahalgam Overnight Stay (160km/2hrs)",
        details: [
          "Head to Pahalgam and visit the saffron fields and Awantipora Ruins.",
          "Explore Betaab Valley, Aru Valley, and Chandanwari.",
          "Relax and explore the local market in Pahalgam.",
          "Stay overnight in Pahalgam.",
        ],
      },
      {
        title: "Pahalgam to Srinagar (160km/2hrs)",
        details: [
          "Explore Pahalgam in the morning.",
          "Drive back to Srinagar and enjoy a Shikara ride on Dal Lake.",
          "Spend the evening at leisure.",
        ],
      },
      {
        title: "Departure",
        details: [
          "Spend the morning in Srinagar for last-minute shopping or sightseeing.",
          "Check out from your accommodation and proceed to the airport for your departure.",
        ],
      },
    ],
    image_gallery: ["/gulmarg.jpg", "/pahalgam-bg.jpg", "/srinagar.jpg"],
    featured_image: "/srinagar.jpg",
    includes: [
      "Accommodation at all Destinations as per itinerary",
      "Dinner & Breakfast at all Destinations as per Itinerary",
      "Comfortable non-AC Innova/Xylo/Tempo for all days as per the itinerary",
      "Reliable, experienced, and adept English-speaking local driver with great knowledge of the area and the terrain",
      "Driver charges, driver accommodation, fuel, and inter-state toll",

      "Welcome Drink (Kashmir saffron tea)",
      "First Aid Box",
      "Guide",
    ],
    excludes: [
      "Any Personal Expenses / Tips / Beverages and meals that are not mentioned in the itinerary",
      "Any cost arising out of unforeseen circumstances including medical emergencies and acts of God",
      "Anything that is not mentioned in the above list of inclusions",
      "Monastery / Museum Entrance Fees",
      "Airfare to and from Leh or any other destination",
      "Medical and Travel Insurance",
      "Additional costs due to flight cancellations, roadblocks, natural calamities, and natural fury",
      "Adventure activity costs (Pony ride, camel safari, rafting, paragliding, mountain biking, etc.)",
    ],
  },
  {
    title: "Kashmir 6 Nights & 7 Days Tour",
    slug: "kashmir-6n-7d-tour",
    short_desc:
      "A 6-night, 7-day tour through the scenic valleys of Kashmir, covering Srinagar, Gulmarg, Sonmarg, and Pahalgam.",
    overview:
      "This 6-night, 7-day tour offers a complete Kashmir experience, from exploring Srinagar’s historical gardens and religious sites to visiting the snow-capped peaks of Gulmarg, the picturesque Sonmarg, and the peaceful town of Pahalgam. The trip provides a balanced blend of cultural heritage and natural beauty.",
    duration: {
      days: 7,
      nights: 6,
    },
    destination: "Kashmir",
    highlights: [
      "Explore Srinagar’s Mughal Gardens, Shankaracharya Temple, and cultural sites.",
      "Take a scenic trip to Sonmarg and enjoy views of Thajiwas Glacier.",
      "Visit Gulmarg for Gondola rides and scenic snowy landscapes.",
      "Relax and explore Pahalgam, including Betaab Valley, Aru Valley, and Chandanwari.",
      "Enjoy a Shikara ride on Dal Lake in Srinagar.",
      "Witness the stunning Drung Waterfall near Gulmarg.",
    ],
    itinerary: [
      {
        title: "Arrival in Srinagar",
        details: [
          "Arrive in Srinagar and transfer to your accommodation.",
          "Visit Mughal Gardens: Shalimar Bagh, Nishat Bagh, and Chashme Shahi.",
          "Visit Shankaracharya Temple for panoramic views of Srinagar and Dal Lake.",
          "Explore Jamia Masjid and Hazratbal Shrine.",
          "End the day with a Shikara ride on Dal Lake.",
        ],
      },
      {
        title: "Sonmarg Day Trip",
        details: [
          "Drive to Sonmarg, about 3 hours from Srinagar, with views of the Sindh River.",
          "Explore Thajiwas Glacier with options for a trek or pony ride.",
          "Return to Srinagar in the evening.",
        ],
      },
      {
        title: "Gulmarg Day Trip (60km/2hrs)",
        details: [
          "Drive to Gulmarg, a popular winter destination.",
          "Take the Gondola ride to Apharwat Peak for breathtaking views.",
          "Visit the historic Gulmarg Golf Course.",
          "On the return, stop at Drung Waterfall.",
          "Return to Srinagar for the night.",
        ],
      },
      {
        title: "Pahalgam Overnight Stay (97km/2-3hrs)",
        details: [
          "Travel to Pahalgam, visiting saffron fields, Avantipura Ruins, and Bijbehara.",
          "Explore Apple Valley and Lidder Valley on the way.",
          "Spend the night at your accommodation in Pahalgam.",
        ],
      },
      {
        title: "Pahalgam Local Sightseeing",
        details: [
          "Visit Betaab Valley, Aru Valley, and Chandanwari, known for their natural beauty.",
          "Relax and explore the local markets of Pahalgam.",
          "Stay overnight in Pahalgam.",
        ],
      },
      {
        title: "Pahalgam to Srinagar (160km/2hrs)",
        details: [
          "Explore Pahalgam in the morning.",
          "Drive back to Srinagar in the afternoon.",
          "Spend the evening at leisure in Srinagar.",
        ],
      },
      {
        title: "Departure",
        details: [
          "Depending on your departure time, enjoy some free time for shopping or sightseeing.",
          "Check out from your accommodation and head to the airport.",
        ],
      },
    ],
    image_gallery: ["/gulmarg.jpg", "/pahalgam-bg.jpg", "/srinagar.jpg"],
    featured_image: "/gulmarg-bg.jpg",
    includes: [
      "Accommodation at all Destinations as per itinerary",
      "Dinner & Breakfast at all Destinations as per Itinerary",
      "Comfortable non-AC Innova/Xylo/Tempo for all days as per the itinerary",
      "Reliable, experienced, and adept English-speaking local driver with great knowledge of the area and the terrain",
      "Driver charges, driver accommodation, fuel, and inter-state toll",
      "Welcome Drink (Kashmir saffron tea)",
      "First Aid Box",
      "Guide",
    ],
    excludes: [
      "Any Personal Expenses / Tips / Beverages and meals that are not mentioned in the itinerary",
      "Any cost arising out of unforeseen circumstances including medical emergencies and acts of God",
      "Anything that is not mentioned in the above list of inclusions",
      "Monastery / Museum Entrance Fees",
      "Airfare to and from Leh or any other destination",
      "Medical and Travel Insurance",
      "Additional costs due to flight cancellations, roadblocks, natural calamities, and natural fury",
      "Adventure activity costs (Pony ride, camel safari, rafting, paragliding, mountain biking, etc.)",
    ],
  },
  {
    title: "Kashmir 7 Nights & 8 Days Tour (Pickup from Katra)",
    slug: "kashmir-7n-8d-tour-katra",
    short_desc:
      "A 7-night, 8-day journey from Katra to Kashmir, including Srinagar, Sonmarg, Gulmarg, and Pahalgam.",
    overview:
      "This 7-night, 8-day tour takes you from Katra to the scenic valleys of Kashmir. Explore the historical and cultural sites of Srinagar, enjoy the beauty of Sonmarg and Gulmarg, and unwind in the picturesque town of Pahalgam. A perfect blend of nature, culture, and adventure.",
    duration: {
      days: 8,
      nights: 7,
    },
    destination: "Kashmir",
    highlights: [
      "Travel from Katra to Srinagar and enjoy the scenic journey.",
      "Explore Sonmarg's breathtaking natural beauty and Thajiwas Glacier.",
      "Discover Srinagar’s Mughal Gardens, Shankaracharya Temple, and Tulip Garden.",
      "Take the Gondola ride in Gulmarg and visit Drung Waterfall.",
      "Travel through saffron fields, Avantipora Ruins, and Apple Valley en route to Pahalgam.",
      "Visit Betaab Valley, Aru Valley, and Chandanwari in Pahalgam.",
      "Relax along the Lidder River and explore local markets in Pahalgam.",
    ],
    itinerary: [
      {
        title: "Arrival in Srinagar from Katra",
        details: [
          "Start early from Katra and travel to Srinagar (approx. 265 km, 7-8 hours).",
          "Arrive in Srinagar by late afternoon or evening and check into your hotel.",
          "Spend the rest of the day relaxing and exploring local surroundings.",
          "Overnight stay in Srinagar.",
        ],
      },
      {
        title: "Sonmarg Night Halt",
        details: [
          "Drive to Sonmarg (approx. 3 hours).",
          "Explore Thajiwas Glacier, and enjoy trekking or pony rides.",
          "Relax in the serene surroundings of Sonmarg.",
          "Overnight stay in Sonmarg.",
        ],
      },
      {
        title: "Sonmarg-Srinagar",
        details: [
          "Wake up early and explore Sonmarg further.",
          "Visit Zojila Pass and enjoy a picnic lunch amidst scenic beauty.",
          "Return to Srinagar in the evening.",
          "Check into your accommodation in Srinagar and explore local markets.",
          "Overnight stay in Srinagar.",
        ],
      },
      {
        title: "Srinagar Local Sightseeing",
        details: [
          "Explore Mughal Gardens: Shalimar Bagh, Nishat Bagh, and Chashme Shahi.",
          "Visit Shankaracharya Temple and enjoy panoramic views of Srinagar.",
          "Explore Jamia Masjid and Hazratbal Shrine.",
          "If visiting in spring, don't miss the Tulip Garden (Indira Gandhi Memorial).",
          "Enjoy shopping in Srinagar’s local markets for Kashmiri handicrafts.",
          "Overnight stay in Srinagar.",
        ],
      },
      {
        title: "Gulmarg Day Trip (60km/2hrs)",
        details: [
          "Depart for Gulmarg and enjoy the scenic drive.",
          "Take the Gondola ride to Apharwat Peak and enjoy the snow-covered landscapes.",
          "Visit the Gulmarg Golf Course, one of the highest golf courses in the world.",
          "Stop at Drung Waterfall on your return journey to Srinagar.",
          "Return to Srinagar in the evening and overnight stay.",
        ],
      },
      {
        title: "Pahalgam Overnight Stay (160km/2hrs)",
        details: [
          "Travel from Srinagar to Pahalgam (approx. 95 km).",
          "En route, visit the saffron fields, Avantipora Ruins, and Apple Valley.",
          "Check into your hotel in Pahalgam and visit the Lidder River.",
          "Relax by the river and enjoy the peaceful surroundings.",
          "Overnight stay in Pahalgam.",
        ],
      },
      {
        title: "Pahalgam Sightseeing",
        details: [
          "Visit Betaab Valley, known for its stunning snow-capped mountains.",
          "Explore Aru Valley and Chandanwari, famous for meadows and scenic views.",
          "Enjoy pony rides and local culture in Pahalgam.",
          "Spend the evening exploring the local market.",
          "Overnight stay in Pahalgam.",
        ],
      },
      {
        title: "Pahalgam to Jammu Drop",
        details: [
          "After breakfast, check out from your hotel in Pahalgam.",
          "Travel to Jammu (approx. 285 km).",
          "Arrive in Jammu by afternoon and continue your onward journey.",
        ],
      },
    ],
    image_gallery: ["/gulmarg.jpg", "/pahalgam-bg.jpg", "/srinagar.jpg"],
    featured_image: "/hero.jpg",
    includes: [
      "Accommodation at all Destinations as per itinerary",
      "Dinner & Breakfast at all Destinations as per Itinerary",
      "Comfortable non-AC Innova/Xylo/Tempo for all days as per the itinerary",
      "Reliable, experienced, and adept English-speaking local driver with great knowledge of the area and the terrain",
      "Driver charges, driver accommodation, fuel, and inter-state toll",
      "Welcome Drink (Kashmir saffron tea)",
      "First Aid Box",
      "Guide",
    ],
    excludes: [
      "Any Personal Expenses / Tips / Beverages and meals that are not mentioned in the itinerary",
      "Any cost arising out of unforeseen circumstances including medical emergencies and acts of God",
      "Anything that is not mentioned in the above list of inclusions",
      "Monastery / Museum Entrance Fees",
      "Airfare to and from Leh or any other destination",
      "Medical and Travel Insurance",
      "Additional costs due to flight cancellations, roadblocks, natural calamities, and natural fury",
      "Adventure activity costs (Pony ride, camel safari, rafting, paragliding, mountain biking, etc.)",
    ],
  },
  {
    title: "4N 5D Trip to Ladakh Valley",
    slug: "ladakh-4n-5d-trip",
    short_desc:
      "A 5-day journey through the stunning landscapes of Leh, Nubra Valley, and Pangong Lake.",
    overview:
      "Explore the magical valleys of Ladakh in this 4-night, 5-day trip. Experience the mesmerizing landscapes, high-altitude adventures, and cultural gems of Leh, Nubra Valley, and Pangong Lake.",
    duration: {
      days: 5,
      nights: 4,
    },
    destination: "Ladakh",
    highlights: [
      "Arrive in Leh and acclimatize to the high-altitude atmosphere.",
      "Visit the historical and cultural sites of Leh, including the Hall of Fame, Magnetic Hill, Gurudwara Pather Sahib, and Leh Palace.",
      "Travel to Nubra Valley via Khardungla Top, the world's second highest motorable road.",
      "Explore the Diskit Monastery and take a camel ride on the white sand dunes of Hundar.",
      "Journey to Pangong Lake through the Shayok River Road and witness the changing colors of the lake.",
      "Return to Leh via Changla Pass and visit Thiksey Monastery, Shey Palace, and Rancho School.",
    ],
    itinerary: [
      {
        title: "Arrival in Leh",
        details: [
          "Touch down in Leh at an elevation of 3500m.",
          "Check into your hotel and spend the day acclimatizing to the altitude.",
          "Explore the local market in the evening.",
          "Overnight stay in Leh.",
        ],
      },
      {
        title: "Leh Local Sightseeing",
        details: [
          "Visit the Hall of Fame to honor Indian soldiers.",
          "Experience the Magnetic Hill, where objects appear to defy gravity.",
          "Visit Gurudwara Pather Sahib for spiritual solace.",
          "Converge at the Sangam Spituk where the Zanskar and Indus Rivers meet.",
          "Explore the Leh Palace and enjoy views from the Shanti Stupa.",
          "Overnight stay in Leh.",
        ],
      },
      {
        title: "Leh to Nubra Valley (140kms / 4hrs)",
        details: [
          "Drive to Nubra Valley, passing through Khardungla Top, the second highest motorable road in the world.",
          "Visit the Diskit Monastery, the oldest and largest in Nubra Valley.",
          "Check into your hotel and take an afternoon trip to the white sand dunes of Hundar.",
          "Optional camel ride on the double-humped camels (at your own expense).",
          "Overnight stay in Nubra Valley.",
        ],
      },
      {
        title: "Nubra Valley to Pangong Lake to Leh (150kms / 5hrs)",
        details: [
          "Travel from Nubra Valley to Pangong Lake via the Shayok River Road.",
          "Admire the changing colors of the lake and its pristine beauty.",
          "On the return journey, stop at the Changla Pass, Thiksey Monastery, Shey Palace, and the Rancho School.",
          "Overnight stay in Leh.",
        ],
      },
    ],
    image_gallery: [
      "/ladakh-2.jpg",
      "/ladakh-3.jpg",
      "/ladakh-4.jpg",
      "/ladakh-5.jpg",
      "/ladakh-6.jpg",
    ],
    featured_image: "/nubra.jpg",
    includes: [
      "Accommodation at all Destinations as per itinerary",
      "Dinner & Breakfast at all Destinations as per Itinerary",
      "Comfortable non-AC Innova/Xylo/Tempo for all days as per the itinerary",
      "Reliable, experienced, and adept English-speaking local driver with great knowledge of the area and the terrain",
      "Driver charges, driver accommodation, fuel, and inter-state toll",
      "Inner Line Permit",
      "Welcome Drink (Kashmir saffron tea)",
      "1 Medium-sized oxygen cylinder",
      "First Aid Box",
      "Guide",
    ],
    excludes: [
      "Any Personal Expenses / Tips / Beverages and meals that are not mentioned in the itinerary",
      "Any cost arising out of unforeseen circumstances including medical emergencies and acts of God",
      "Anything that is not mentioned in the above list of inclusions",
      "Monastery / Museum Entrance Fees",
      "Airfare to and from Leh or any other destination",
      "Medical and Travel Insurance",
      "Additional costs due to flight cancellations, roadblocks, natural calamities, and natural fury",
      "Adventure activity costs (Pony ride, camel safari, rafting, paragliding, mountain biking, etc.)",
    ],
  },
  {
    title: "5N 6D Trip to Ladakh Valley",
    slug: "ladakh-5n-6d-trip",
    short_desc:
      "A 6-day adventure through the mesmerizing landscapes of Leh, Nubra Valley, and Pangong Lake.",
    overview:
      "Discover the breathtaking beauty of Ladakh in this 5-night, 6-day trip. From the vibrant town of Leh to the serene Nubra Valley and the magical Pangong Lake, experience nature and culture like never before.",
    duration: {
      days: 6,
      nights: 5,
    },
    destination: "Ladakh",
    highlights: [
      "Arrive in Leh, acclimatize to the high-altitude atmosphere.",
      "Explore the local attractions of Leh, including the Hall of Fame, Magnetic Hill, and Leh Palace.",
      "Travel to Nubra Valley via Khardungla Top, the 2nd highest motorable road in the world.",
      "Visit the Diskit Monastery and experience the camel ride at Hundar's white sand dunes.",
      "Journey to Pangong Lake via the scenic Shayok River Road.",
      "Return to Leh via Changla Pass, and visit Thiksey Monastery, Shey Palace, and Rancho School.",
    ],
    itinerary: [
      {
        title: "Arrival in Leh",
        details: [
          "Arrive in Leh at an elevation of 3500m.",
          "Transfer to hotel for check-in and spend the day acclimatizing.",
          "Leisure evening walk through Leh market to adapt to the high-altitude atmosphere.",
          "Overnight stay in Leh.",
        ],
      },
      {
        title: "Leh Local Sightseeing",
        details: [
          "Visit Hall of Fame to pay tribute to Indian soldiers.",
          "Experience the mystery of Magnetic Hill.",
          "Seek solace at Gurudwara Pather Sahib and witness the convergence of Zanskar and Indus Rivers at Sangam Spituk.",
          "Explore Leh Palace and enjoy a sunset view from Shanti Stupa.",
          "Overnight stay in Leh.",
        ],
      },
      {
        title: "Leh to Nubra Valley (140kms / 4hrs)",
        details: [
          "Drive to Nubra Valley, passing through Khardungla Top (5570m).",
          "Explore the Diskit Monastery, the oldest in Nubra Valley.",
          "Check-in at the hotel and enjoy an afternoon visit to Hundar’s white sand dunes.",
          "Optional camel ride on the double-humped camels (at your own expense).",
          "Overnight stay in Nubra Valley.",
        ],
      },
      {
        title: "Nubra to Pangong Lake (150kms / 5hrs)",
        details: [
          "Travel from Nubra to Pangong Lake via Shayok River Road.",
          "Marvel at the stunning color changes of the lake.",
          "Relax by the lake and enjoy the sunset on its shores.",
          "Overnight stay near Pangong Lake.",
        ],
      },
      {
        title: "Pangong Lake to Leh via Changla Pass (150kms / 5hrs)",
        details: [
          "Leave Pangong Lake early to catch a mesmerizing sunrise.",
          "Drive back to Leh via the Changla Pass (5347m), the world's second highest motorable road.",
          "Enroute, visit Thiksey Monastery and Shey Palace.",
          "If time permits, visit Rancho School.",
          "Overnight stay in Leh.",
        ],
      },
      {
        title: "Departure from Leh",
        details: [
          "Enjoy a hearty breakfast at the hotel.",
          "Transfer to the airport for your onward flight, taking with you cherished memories of Ladakh.",
        ],
      },
    ],
    image_gallery: [
      "/ladakh-2.jpg",
      "/ladakh-3.jpg",
      "/ladakh-4.jpg",
      "/ladakh-5.jpg",
      "/ladakh-6.jpg",
    ],
    featured_image: "/leh.jpg",
    includes: [
      "Accommodation at all Destinations as per itinerary",
      "Dinner & Breakfast at all Destinations as per Itinerary",
      "Comfortable non-AC Innova/Xylo/Tempo for all days as per the itinerary",
      "Reliable, experienced, and adept English-speaking local driver with great knowledge of the area and the terrain",
      "Driver charges, driver accommodation, fuel, and inter-state toll",
      "Inner Line Permit",
      "Welcome Drink (Kashmir saffron tea)",
      "1 Medium-sized oxygen cylinder",
      "First Aid Box",
      "Guide",
    ],
    excludes: [
      "Any Personal Expenses / Tips / Beverages and meals that are not mentioned in the itinerary",
      "Any cost arising out of unforeseen circumstances including medical emergencies and acts of God",
      "Anything that is not mentioned in the above list of inclusions",
      "Monastery / Museum Entrance Fees",
      "Airfare to and from Leh or any other destination",
      "Medical and Travel Insurance",
      "Additional costs due to flight cancellations, roadblocks, natural calamities, and natural fury",
      "Adventure activity costs (Pony ride, camel safari, rafting, paragliding, mountain biking, etc.)",
    ],
  },
  {
    title: "6N 7D Trip to Ladakh Valley",
    slug: "ladakh-6n-7d-trip",
    short_desc:
      "A 7-day journey through the stunning landscapes of Leh, Nubra Valley, Turtuk, Pangong Lake, and back to Leh.",
    overview:
      "Explore the captivating beauty of Ladakh in this 6-night, 7-day journey. From the serene town of Leh to the remote Turtuk village, and the stunning Pangong Lake, this itinerary blends adventure, culture, and nature.",
    duration: {
      days: 7,
      nights: 6,
    },
    destination: "Ladakh",
    highlights: [
      "Arrive in Leh and acclimatize to the high-altitude atmosphere.",
      "Visit the historical and cultural landmarks of Leh including the Hall of Fame, Magnetic Hill, and Leh Palace.",
      "Travel to Nubra Valley via Khardungla Top, the world’s second highest motorable road.",
      "Explore Turtuk, a charming village on the India-Pakistan border with Balti culture and apricot orchards.",
      "Journey to Pangong Lake via the scenic Shayok River Road.",
      "Return to Leh via Changla Pass, the world's second-highest motorable road, and explore local monasteries and historical sites.",
    ],
    itinerary: [
      {
        title: "Arrival in Leh",
        details: [
          "Arrive in Leh at an elevation of 3500m.",
          "Transfer to hotel for check-in and acclimatize to the high-altitude environment.",
          "Leisure evening walk through Leh market.",
          "Overnight stay in Leh.",
        ],
      },
      {
        title: "Leh Local Sightseeing",
        details: [
          "Visit the Hall of Fame to honor the sacrifices of Indian soldiers.",
          "Experience the mysterious Magnetic Hill and defy gravity.",
          "Visit Gurudwara Pather Sahib and the confluence of Zanskar and Indus Rivers at Sangam Spituk.",
          "Explore Leh Palace and the serene Shanti Stupa.",
          "Overnight stay in Leh.",
        ],
      },
      {
        title: "Leh to Nubra Valley (140kms / 4hrs)",
        details: [
          "Drive to Nubra Valley, crossing the Khardungla Top (5570m).",
          "Explore Diskit Monastery, the oldest in Nubra Valley.",
          "Check-in at the hotel and visit the white sand dunes of Hundar for a camel ride (at your own expense).",
          "Overnight stay in Nubra Valley.",
        ],
      },
      {
        title: "Nubra to Turtuk (80kms / 3hrs)",
        details: [
          "Travel to Turtuk, the northernmost village in India, famous for apricot orchards and Balti culture.",
          "Explore the unique village and the nearby Thang village, a border area near Pakistan.",
          "Experience local hospitality and culture.",
          "Return to Nubra for an overnight stay.",
        ],
      },
      {
        title: "Nubra to Pangong Lake (150kms / 5hrs)",
        details: [
          "Drive towards Pangong Lake via Shayok River Road, known for its scenic views and waterfalls.",
          "Arrive at Pangong Lake and witness its mesmerizing color changes throughout the day.",
          "Enjoy the sunset on the banks of Pangong Lake.",
          "Overnight stay near Pangong Lake.",
        ],
      },
      {
        title: "Pangong Lake to Leh via Changla Pass (150kms / 5hrs)",
        details: [
          "Leave Pangong early to catch the stunning sunrise over the lake.",
          "Drive back to Leh via Changla Pass (5347m), the second-highest motorable road in the world.",
          "Visit Thiksey Monastery, Shey Palace, and possibly Rancho School.",
          "Overnight stay in Leh.",
        ],
      },
      {
        title: "Departure from Leh",
        details: [
          "Enjoy a final breakfast in Leh before checking out.",
          "Transfer to the airport for your departure flight, carrying unforgettable memories of Ladakh.",
        ],
      },
    ],
    image_gallery: [
      "/ladakh-2.jpg",
      "/ladakh-3.jpg",
      "/ladakh-4.jpg",
      "/ladakh-5.jpg",
      "/ladakh-6.jpg",
    ],
    featured_image: "/pangong.jpg",
    includes: [
      "Accommodation at all Destinations as per itinerary",
      "Dinner & Breakfast at all Destinations as per Itinerary",
      "Comfortable non-AC Innova/Xylo/Tempo for all days as per the itinerary",
      "Reliable, experienced, and adept English-speaking local driver with great knowledge of the area and the terrain",
      "Driver charges, driver accommodation, fuel, and inter-state toll",
      "Inner Line Permit",
      "Welcome Drink (Kashmir saffron tea)",
      "1 Medium-sized oxygen cylinder",
      "First Aid Box",
      "Guide",
    ],
    excludes: [
      "Any Personal Expenses / Tips / Beverages and meals that are not mentioned in the itinerary",
      "Any cost arising out of unforeseen circumstances including medical emergencies and acts of God",
      "Anything that is not mentioned in the above list of inclusions",
      "Monastery / Museum Entrance Fees",
      "Airfare to and from Leh or any other destination",
      "Medical and Travel Insurance",
      "Additional costs due to flight cancellations, roadblocks, natural calamities, and natural fury",
      "Adventure activity costs (Pony ride, camel safari, rafting, paragliding, mountain biking, etc.)",
    ],
  },
  {
    title: "7N 8D Trip to Ladakh Valley",
    slug: "ladakh-7n-8d-trip",
    short_desc:
      "An 8-day journey through the mesmerizing landscapes of Leh, Nubra Valley, Pangong Lake, and Kargil.",
    overview:
      "Discover the stunning valleys of Ladakh in this 7-night, 8-day trip. Experience breathtaking high-altitude adventures, serene monasteries, and cultural gems in Leh, Nubra Valley, Pangong Lake, and Kargil.",
    duration: {
      days: 8,
      nights: 7,
    },
    destination: "Ladakh",
    highlights: [
      "Arrive in Leh and acclimatize to the high-altitude atmosphere.",
      "Explore Leh’s cultural sites like Leh Palace and Shanti Stupa.",
      "Drive to Kargil via Fotula Pass and Lamayuru Monastery.",
      "Visit Drass War Memorial and the Hall of Fame museum.",
      "Travel to Nubra Valley via Khardungla Top, the world's highest motorable road.",
      "Explore Diskit Monastery and enjoy a camel ride at Hundar sand dunes.",
      "Journey to Turtuk, the northernmost village in India.",
      "Witness the changing colors of Pangong Lake and return to Leh via Changla Pass.",
    ],
    itinerary: [
      {
        title: "Arrival in Leh",
        details: [
          "Touch down in Leh at an elevation of 3500m.",
          "Check into your hotel and spend the day acclimatizing to the altitude.",
          "Evening stroll through Leh Market.",
          "Visit Leh Palace and Shanti Stupa.",
          "Overnight stay in Leh.",
        ],
      },
      {
        title: "Leh to Kargil (250km / 4hrs)",
        details: [
          "After breakfast, drive to Kargil via Fotula Pass (4,108m).",
          "Stop at Lamayuru Monastery, one of Ladakh's oldest monasteries.",
          "Cross Namika La, known as the 'Pillar of the Sky Pass.'",
          "Arrive in Kargil and check into your hotel.",
          "Overnight stay in Kargil.",
        ],
      },
      {
        title: "Kargil - Drass - Leh (310km / 6hrs)",
        details: [
          "Visit the Drass War Memorial, a tribute to the 1999 Kargil War heroes.",
          "Drive back to Leh with stops at the Hall of Fame and Magnetic Hill.",
          "Visit Gurudwara Pather Sahib and Sangam Spituk (Zanskar-Indus confluence).",
          "Overnight stay in Leh.",
        ],
      },
      {
        title: "Leh to Nubra Valley (140km / 4hrs)",
        details: [
          "Travel to Nubra Valley via Khardungla Top (5,570m), the world’s highest motorable road.",
          "Visit Diskit Monastery, the oldest in Nubra Valley.",
          "Check into your hotel and explore the white sand dunes at Hundar.",
          "Optional camel ride on double-humped camels (at your own expense).",
          "Overnight stay in Nubra Valley.",
        ],
      },
      {
        title: "Nubra Valley to Turtuk (80km / 3hrs)",
        details: [
          "Journey to Turtuk, the northernmost village in India, along the Shayok River.",
          "Explore Turtuk’s orchards and unique Balti culture.",
          "Optional visit to Thang village, the last outpost before Pakistan-administered territory.",
          "Return to Nubra Valley for an overnight stay.",
        ],
      },
      {
        title: "Nubra Valley to Pangong Lake (150km / 5hrs)",
        details: [
          "Travel from Nubra Valley to Pangong Lake via the Shayok River Road.",
          "Witness the changing colors of Pangong Lake.",
          "Check into your campsite by the lake.",
          "Overnight stay at Pangong Lake.",
        ],
      },
      {
        title: "Pangong Lake to Leh via Changla Pass (150km / 5hrs)",
        details: [
          "Start the day with a sunrise view at Pangong Lake.",
          "Drive back to Leh via Changla Pass (5,347m), the world’s second-highest motorable road.",
          "Visit Thiksey Monastery, Shey Palace, and Rancho School enroute.",
          "Overnight stay in Leh.",
        ],
      },
      {
        title: "Departure from Leh",
        details: [
          "Bid farewell to Ladakh and transfer to Leh airport for your departure.",
        ],
      },
    ],
    image_gallery: [
      "/ladakh-2.jpg",
      "/ladakh-3.jpg",
      "/ladakh-4.jpg",
      "/ladakh-5.jpg",
      "/ladakh-6.jpg",
    ],
    featured_image: "/ladakh-3.jpg",
    includes: [
      "Accommodation at all destinations as per itinerary.",
      "Dinner and breakfast at all destinations as per itinerary.",
      "Comfortable non-AC vehicle for all days as per the itinerary.",
      "Experienced English-speaking local driver with knowledge of the terrain.",
      "Driver charges, driver accommodation, fuel, and inter-state toll.",
      "Inner Line Permit.",
      "Welcome drink (Kashmiri saffron tea).",
      "1 medium-sized oxygen cylinder.",
      "First aid box.",
    ],
    excludes: [
      "Personal expenses, tips, and meals not mentioned in the itinerary.",
      "Costs arising from unforeseen circumstances like medical emergencies or natural calamities.",
      "Monastery and museum entrance fees.",
      "Airfare to/from Leh.",
      "Medical and travel insurance.",
      "Adventure activity costs (camel safari, rafting, mountain biking, etc.).",
    ],
  },
  {
    title: "08N 09D Trip to Ladakh Valley",
    slug: "ladakh-8n-9d-trip",
    short_desc:
      "An extensive 9-day journey exploring Leh, Nubra, Turtuk, Siachen, Pangong, and Tsomoriri.",
    overview:
      "Embark on an unforgettable 8-night, 9-day adventure across the stunning landscapes of Ladakh, visiting iconic destinations like Nubra Valley, Turtuk, Pangong Lake, and the pristine Tsomoriri Lake.",
    duration: {
      days: 9,
      nights: 8,
    },
    destination: "Ladakh",
    highlights: [
      "Explore Leh and acclimatize to the high-altitude atmosphere.",
      "Visit Sham Valley, Magnetic Hill, and cultural landmarks like Gurudwara Pather Sahib and Shanti Stupa.",
      "Drive through Khardungla Top to Nubra Valley, Diskit Monastery, and the Hundar Sand Dunes.",
      "Experience the Balti culture in Turtuk and witness the beauty of Shayok River.",
      "Visit the Siachen Base Camp, the highest battleground in the world.",
      "Marvel at Pangong Lake and its changing colors.",
      "Explore Tsomoriri Lake, a high-altitude sanctuary of beauty and tranquility.",
    ],
    itinerary: [
      {
        title: "Day 1: Arrival in Leh",
        details: [
          "Arrive in Leh at an elevation of 3500m and check into the hotel.",
          "Spend the day acclimatizing to the high altitude.",
          "Take a leisurely walk through the local market in the evening.",
          "Overnight stay in Leh.",
        ],
      },
      {
        title: "Day 2: Leh Local Sightseeing - Sham Valley",
        details: [
          "Visit the Hall of Fame, Magnetic Hill, and Sangam Spituk (confluence of Zanskar and Indus Rivers).",
          "Explore Gurudwara Pather Sahib, Leh Palace, and Shanti Stupa.",
          "Return to the hotel for an overnight stay in Leh.",
        ],
      },
      {
        title: "Day 3: Leh to Nubra Valley (140km / 4hrs approx.)",
        details: [
          "Drive to Nubra Valley via Khardungla Top, the highest motorable road at 5570m.",
          "Visit Diskit Monastery and check in at your hotel.",
          "Enjoy a camel ride on the white sand dunes at Hundar (at your own expense).",
          "Overnight stay in Nubra Valley.",
        ],
      },
      {
        title: "Day 4: Nubra Valley to Turtuk and Back (80km / 3hrs approx.)",
        details: [
          "Travel to Turtuk, the northernmost village of India near the Pakistan border.",
          "Explore the Balti culture, apricot orchards, and historical artifacts.",
          "Return to Nubra Valley for an overnight stay.",
        ],
      },
      {
        title: "Day 5: Nubra to Siachen Base Camp (130km / 4hrs approx.)",
        details: [
          "Drive to Siachen Base Camp, the world's highest battleground.",
          "Visit Panamik Hot Springs and interact with army personnel at the base.",
          "Return to Nubra via Sumoor for an overnight stay.",
        ],
      },
      {
        title: "Day 6: Nubra to Pangong Lake (150km / 5hrs approx.)",
        details: [
          "Travel to Pangong Lake via the scenic Shayok River Road.",
          "Marvel at the changing colors of the lake and enjoy a peaceful sunset.",
          "Stay overnight near Pangong Lake.",
        ],
      },
      {
        title: "Day 7: Pangong Lake to Tsomoriri Lake (220km / 6-7hrs approx.)",
        details: [
          "Drive to Tsomoriri Lake via the Chanthang plateau.",
          "Stop at Puga Valley and Chusul en route.",
          "Enjoy the pristine beauty of the lake and the surrounding landscape.",
          "Stay overnight in a tented camp at Tsomoriri.",
        ],
      },
      {
        title:
          "Day 8: Tsomoriri Lake to Leh via Tso Kar Lake (240km / 7-8hrs approx.)",
        details: [
          "Witness a serene sunrise at Tsomoriri Lake.",
          "Visit Tso Kar Lake during the return journey to Leh.",
          "Arrive in Leh and check into your hotel for an overnight stay.",
        ],
      },
      {
        title: "Day 9: Departure from Leh",
        details: [
          "Check out from the hotel and transfer to Leh airport.",
          "Conclude your Ladakh adventure.",
        ],
      },
    ],
    image_gallery: [
      "/ladakh-2.jpg",
      "/ladakh-3.jpg",
      "/ladakh-4.jpg",
      "/ladakh-5.jpg",
      "/ladakh-6.jpg",
    ],
    featured_image: "/ladakh-6.jpg",
    includes: [
      "Accommodation at all destinations as per itinerary.",
      "Dinner and breakfast at all destinations as per itinerary.",
      "Comfortable non-AC vehicles for all days as per the itinerary.",
      "Experienced English-speaking local driver.",
      "Driver charges, accommodation, fuel, and inter-state tolls.",
      "Inner Line Permit.",
      "Welcome drink (Kashmiri saffron tea).",
      "One medium-sized oxygen cylinder.",
      "First aid box.",
    ],
    excludes: [
      "Personal expenses, tips, beverages, and meals not mentioned in the itinerary.",
      "Costs arising from unforeseen circumstances like medical emergencies, natural calamities, etc.",
      "Entrance fees for monasteries and museums.",
      "Airfare to and from Leh or any other destination.",
      "Medical and travel insurance.",
      "Additional costs for activities like rafting, camel rides, or mountain biking.",
    ],
  },
  {
    title: "10N 11D Trip to Ladakh Valley",
    slug: "ladakh-10n-11d-trip",
    short_desc:
      "An immersive 11-day journey exploring Leh, Nubra, Turtuk, Pangong, Hanle, Tsomoriri, and more.",
    overview:
      "Discover the majestic landscapes and rich culture of Ladakh with this 10-night, 11-day itinerary covering the breathtaking valleys and lakes including Nubra, Turtuk, Pangong, Hanle, and Tsomoriri.",
    duration: {
      days: 11,
      nights: 10,
    },
    destination: "Ladakh",
    highlights: [
      "Acclimatize in Leh and explore local markets.",
      "Visit the Hall of Fame, Magnetic Hill, and Gurudwara Pather Sahib.",
      "Drive through Khardungla to Nubra Valley and ride on double-humped camels.",
      "Discover the remote village of Turtuk and its rich Balti heritage.",
      "Experience the serenity of Pangong Lake and its stunning color-changing waters.",
      "Visit the Hanle Observatory and explore the scenic Changthang region.",
      "Explore Tsomoriri Lake and its surrounding tranquil beauty.",
    ],
    itinerary: [
      {
        title: "Day 1: Arrive in Leh",
        details: [
          "Touch down in Leh at an elevation of 3500m and check into your hotel.",
          "Spend the day acclimatizing and enjoy a leisurely walk through Leh's markets.",
          "Overnight stay in Leh.",
        ],
      },
      {
        title: "Day 2: Local Sightseeing - Sham Valley",
        details: [
          "Visit Hall of Fame, Magnetic Hill, Gurudwara Pather Sahib, and Sangam Spituk.",
          "Explore Alchi, Likir, and Lamayuru monasteries.",
          "Overnight stay in Leh.",
        ],
      },
      {
        title: "Day 3: Leh to Nubra Valley (140kms / 4hrs)",
        details: [
          "Drive to Nubra Valley via the world’s highest motorable road, Khardungla Pass.",
          "Visit Diskit Monastery and explore the white sand dunes of Hundar.",
          "Optional camel ride on the double-humped camels.",
          "Overnight stay in Nubra Valley.",
        ],
      },
      {
        title: "Day 4: Nubra to Turtuk and Return (80 km / 3hrs)",
        details: [
          "Journey to Turtuk, the northernmost village in India, rich in Balti culture.",
          "Visit orchards and historical landmarks, including the Thang village.",
          "Return to Nubra for an overnight stay.",
        ],
      },
      {
        title: "Day 5: Nubra to Pangong Lake (150kms / 5hrs)",
        details: [
          "Travel via Shayok River Road to Pangong Lake at 4350m.",
          "Enjoy the changing colors of the lake and a beautiful sunset.",
          "Overnight stay at Pangong Lake.",
        ],
      },
      {
        title: "Day 6: Pangong Lake to Hanle (120 km / 4hrs)",
        details: [
          "Drive to the remote village of Hanle via Lukung and Chushul Valley.",
          "Visit the Chandra Telescope at the Indian Institute of Astrophysics.",
          "Overnight stay in Hanle.",
        ],
      },
      {
        title: "Day 7: Hanle to Tsomoriri Lake (161 km / 6hrs)",
        details: [
          "Travel to Tsomoriri Lake via Puga Valley and Kyon Tso.",
          "Explore the tranquil Korzok village by the lake.",
          "Overnight stay at Tsomoriri Lake.",
        ],
      },
      {
        title: "Day 8: Tsomoriri Lake to Leh via Tso Kar Lake (240km / 7-8hrs)",
        details: [
          "Drive back to Leh, passing by Tso Kar Lake and its unique salt flats.",
          "Arrive in Leh and check in for an overnight stay.",
        ],
      },
      {
        title: "Day 9: Leh Local Leisure Day",
        details: [
          "Enjoy a day at leisure in Leh for shopping, relaxation, or additional sightseeing.",
          "Optional visit to local attractions like Leh Palace or Thiksey Monastery.",
          "Overnight stay in Leh.",
        ],
      },
      {
        title: "Day 10: Departure from Leh",
        details: [
          "Check out from the hotel and transfer to Leh airport.",
          "End your Ladakh adventure with fond memories.",
        ],
      },
    ],
    image_gallery: [
      "/ladakh-2.jpg",
      "/ladakh-3.jpg",
      "/ladakh-4.jpg",
      "/ladakh-5.jpg",
      "/ladakh-6.jpg",
    ],
    featured_image: "/ladakh-4.jpg",
    includes: [
      "Accommodation at all destinations as per the itinerary.",
      "Breakfast and dinner at all destinations.",
      "Comfortable non-AC vehicle for all days as per the itinerary.",
      "Experienced English-speaking driver.",
      "Driver charges, accommodation, fuel, and inter-state tolls.",
      "Inner Line Permit.",
      "Welcome drink (Kashmiri saffron tea).",
      "Oxygen cylinder for emergency use.",
      "First aid box.",
    ],
    excludes: [
      "Personal expenses, tips, beverages, and meals not mentioned in the itinerary.",
      "Costs arising from unforeseen circumstances like medical emergencies, natural calamities, etc.",
      "Entrance fees for monuments and monasteries.",
      "Airfare to and from Leh or other destinations.",
      "Medical and travel insurance.",
      "Optional activities like camel rides, rafting, or additional excursions.",
    ],
  },
  {
    title: "5N 6D Trip to Ladakh Valley from SXR",
    slug: "ladakh-5n-6d-trip-sxr",
    short_desc:
      "An adventurous 6-day journey exploring the stunning landscapes of Sonmarg, Kargil, Leh, Nubra, Pangong, and more.",
    overview:
      "Embark on a 5-night, 6-day journey through the breathtaking valleys and lakes of Ladakh, covering iconic destinations like Sonmarg, Kargil, Leh, Nubra Valley, Pangong Lake, and more.",
    duration: {
      days: 6,
      nights: 5,
    },
    destination: "Ladakh",
    highlights: [
      "Scenic drive through Sonmarg, Kargil, and Leh.",
      "Visit to the Kargil War Memorial and Drass Village.",
      "Journey through Fotula Pass and Lamayuru Monastery.",
      "Explore Nubra Valley via Khardungla Pass.",
      "Camel ride on double-humped camels at Hundar Sand Dunes.",
      "Marvel at the color-changing waters of Pangong Lake.",
      "Cross Changla Pass, the world's second-highest motorable road.",
      "Visit Thiksey Monastery and the historic Shey Palace.",
    ],
    itinerary: [
      {
        title: "Day 1: Srinagar - Sonmarg - Kargil",
        details: [
          "Drive from Srinagar to Kargil, passing through Sonmarg, covering 200 km in 5 hours.",
          "Stop at Zoila Pass (11,575 ft) and Drass Village, the second coldest inhabited place in the world.",
          "Visit Kargil War Memorial to pay tribute to the soldiers of the 1999 Kargil War.",
        ],
      },
      {
        title: "Day 2: Kargil - Leh",
        details: [
          "Drive from Kargil to Leh (200 km / 4 hrs), passing through Fotula Pass and Lamayuru Monastery.",
          "Visit Sangam Spituk (confluence of Zanskar and Indus rivers) and Magnetic Hill.",
          "Explore Hall of Fame, a museum dedicated to Indian soldiers, and Gurudwara Pather Sahib.",
        ],
      },
      {
        title: "Day 3: Leh - Nubra Valley (140 km / 4 hrs)",
        details: [
          "Drive to Nubra Valley via Khardungla Pass, the highest motorable road in the world.",
          "Visit Diskit Monastery and explore the white sand dunes at Hundar.",
          "Optional camel ride on double-humped camels.",
        ],
      },
      {
        title: "Day 4: Nubra to Pangong Lake (150 km / 5 hrs)",
        details: [
          "Drive to Pangong Lake via the Shayok River Road.",
          "Enjoy the scenic beauty and color-changing waters of the lake.",
          "Overnight stay at Pangong Lake.",
        ],
      },
      {
        title: "Day 5: Pangong Lake to Leh via Changla Pass (150 km / 5 hrs)",
        details: [
          "Drive back to Leh via Changla Pass, the world's second-highest motorable road.",
          "Visit Thiksey Monastery and Shey Palace.",
          "Optional visit to the Rancho School.",
        ],
      },
      {
        title: "Day 6: Leh - Departure",
        details: [
          "After breakfast, transfer to Leh airport for your onward journey.",
          "End of the trip with fond memories of Ladakh.",
        ],
      },
    ],
    image_gallery: [
      "/ladakh-2.jpg",
      "/ladakh-3.jpg",
      "/ladakh-4.jpg",
      "/ladakh-5.jpg",
      "/ladakh-6.jpg",
    ],
    featured_image: "/ladakh-3.jpg",
    includes: [
      "Accommodation as per the itinerary.",
      "Breakfast and dinner at all destinations.",
      "Comfortable non-AC vehicle for all days as per the itinerary.",
      "Experienced English-speaking driver.",
      "Driver charges, accommodation, fuel, and inter-state tolls.",
      "Inner Line Permit.",
      "Welcome drink (Kashmiri saffron tea).",
      "Oxygen cylinder for emergency use.",
      "First aid box.",
    ],
    excludes: [
      "Personal expenses, tips, beverages, and meals not mentioned in the itinerary.",
      "Costs arising from unforeseen circumstances like medical emergencies, natural calamities, etc.",
      "Entrance fees for monuments and monasteries.",
      "Airfare to and from Leh or other destinations.",
      "Medical and travel insurance.",
      "Optional activities like camel rides, rafting, or additional excursions.",
    ],
  },
  {
    title: "6N 7D Trip to Ladakh Valley from Srinagar",
    slug: "ladakh-6n-7d-trip-sxr",
    short_desc:
      "An immersive 7-day journey through Srinagar, Sonmarg, Kargil, Leh, Nubra, and Pangong.",
    overview:
      "Experience the beauty and culture of Ladakh with this 6-night, 7-day itinerary. Journey from Srinagar to Kargil, Leh, Nubra, Pangong, and back, exploring the breathtaking landscapes and cultural landmarks.",
    duration: {
      days: 7,
      nights: 6,
    },
    destination: "Ladakh",
    highlights: [
      "Visit the historic Drass War Memorial and Zoila Pass.",
      "Travel through the mesmerizing Fotula Pass and Lamayuru Monastery.",
      "Explore the confluence of Zanskar and Indus rivers at Sangam Spituk.",
      "Marvel at the optical illusion at Magnetic Hill.",
      "Experience the tranquil Shanti Stupa and Leh Palace.",
      "Drive to Nubra Valley via Khardungla Top and ride double-humped camels.",
      "Discover the beauty of Pangong Lake with its color-changing waters.",
      "Visit the cultural richness of Thiksey Monastery and Shey Palace.",
    ],
    itinerary: [
      {
        title:
          "Day 1: Srinagar to Sonmarg to Kargil (5hrs / 200km, Elevation 3500m)",
        details: [
          "Embark on a scenic journey from Srinagar to Kargil, passing through Sonmarg and covering 200km in 5 hours.",
          "Visit the Zoila Pass (11575 ft) and Drass War Memorial.",
          "Explore Drass Village, the second coldest inhabited place in the world.",
          "Overnight stay in Kargil.",
        ],
      },
      {
        title: "Day 2: Kargil to Leh (4hrs / 200km, Elevation 2676m)",
        details: [
          "Drive from Kargil to Leh, covering 200km in 4 hours.",
          "Visit Fotula Pass, Lamayuru Monastery, Sangam Spituk, Magnetic Hill, and Hall of Fame.",
          "Explore the Gurudwara Pather Sahib.",
          "Overnight stay in Leh.",
        ],
      },
      {
        title: "Day 3: Rest & Explore Leh (Elevation 3500m)",
        details: [
          "Rest and acclimatize to the high altitude.",
          "Visit Shanti Stupa for a famous sunset view.",
          "Explore Leh Palace and local markets.",
          "Overnight stay in Leh.",
        ],
      },
      {
        title: "Day 4: Leh to Nubra Valley (140kms / 4hrs)",
        details: [
          "Drive from Leh to Nubra Valley, covering 140km in 4 hours.",
          "Cross Khardungla Pass, the world's highest motorable road at 5570m.",
          "Visit Diskit Monastery and the white sand dunes in Hundar.",
          "Optional camel ride on double-humped camels (at own expense).",
          "Overnight stay in Nubra Valley.",
        ],
      },
      {
        title: "Day 5: Nubra to Pangong Lake (150kms / 5hrs, Elevation 4350m)",
        details: [
          "Drive from Nubra Valley to Pangong Lake, via Shayok River Road.",
          "Witness the color-changing waters of Pangong Lake.",
          "Enjoy the sunset over Pangong Lake.",
          "Overnight stay at Pangong Lake.",
        ],
      },
      {
        title: "Day 6: Pangong Lake to Leh via Changla Pass (150kms / 5hrs)",
        details: [
          "Drive back to Leh via Changla Pass (second-highest motorable road at 5347m).",
          "Visit Thiksey Monastery and Shey Palace.",
          "Optional visit to Rancho School.",
          "Overnight stay in Leh.",
        ],
      },
      {
        title: "Day 7: Departure from Leh",
        details: [
          "Breakfast at the hotel.",
          "Transfer to Leh airport for departure.",
          "End your Ladakh journey with cherished memories.",
        ],
      },
    ],
    image_gallery: [
      "/ladakh-2.jpg",
      "/ladakh-3.jpg",
      "/ladakh-4.jpg",
      "/ladakh-5.jpg",
      "/ladakh-6.jpg",
    ],
    featured_image: "/ladakh-4.jpg",
    includes: [
      "Accommodation at all destinations as per the itinerary.",
      "Breakfast and dinner at all destinations.",
      "Comfortable non-AC vehicle for all days as per the itinerary.",
      "Experienced English-speaking driver.",
      "Driver charges, accommodation, fuel, and inter-state tolls.",
      "Inner Line Permit.",
      "Welcome drink (Kashmiri saffron tea).",
      "Oxygen cylinder for emergency use.",
      "First aid box.",
    ],
    excludes: [
      "Personal expenses, tips, beverages, and meals not mentioned in the itinerary.",
      "Costs arising from unforeseen circumstances like medical emergencies, natural calamities, etc.",
      "Entrance fees for monuments and monasteries.",
      "Airfare to and from Leh or other destinations.",
      "Medical and travel insurance.",
      "Optional activities like camel rides, rafting, or additional excursions.",
    ],
  },
];
