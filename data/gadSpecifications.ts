export interface UPVCSpecItem {
  id: string;
  name: string;
  category: "casement" | "sliding" | "tilt-turn" | "bifold" | "facade";
  categoryLabel: string;
  standard: string;
  sizeRange: string;
  pressureRating: string;
  maxTemp: string;
  burstPressure: string;
  tensileLoad: string;
  materialCompounding: string;
  primaryApplications: string[];
  engineeringRules: string[];
  dimensionsTable: {
    nominalSize: string;
    outerDiameter: string;
    wallThickness: string;
    workingPressure: string;
    burstPressure: string;
  }[];
}

export const GAD_PRODUCT_SPECS: UPVCSpecItem[] = [
  {
    id: "upvc-casement-windows",
    name: "GADIN PrimaTherm 60/70mm uPVC Casement Windows & Doors",
    category: "casement",
    categoryLabel: "Casement & French Doors",
    standard: "EN 12608 Class A / IS 875 / BS 6375",
    sizeRange: "60mm (3-Chamber) & 70mm (5-Chamber) Frame Depths",
    pressureRating: "Wind Load: Class C5 (Up to 3,000 Pa / 3.0 kPa)",
    maxTemp: "Tropical Compound (Class S) UV Rated for 50°C+ Gulf / Tropical Climates",
    burstPressure: "Water Tightness: Class 9A (600 Pa Driving Rain Proof)",
    tensileLoad: "Galvanized Steel Core: 1.5mm - 2.0mm Hot-Dip (Tensile Yield > 280 MPa)",
    materialCompounding: "High impact modified tropicalized uPVC with 8.5% Titanium Dioxide (TiO2) UV shields. Lead-free formulation (RoHS compliant).",
    primaryApplications: [
      "Luxury residential villas & high-rise apartment facades",
      "Acoustic soundproof bedrooms facing highways/airports (Up to 42 dB reduction)",
      "High-rise windward coastal towers requiring hurricane structural stability",
      "Green building certified projects requiring low U-values (< 1.4 W/m²K)"
    ],
    engineeringRules: [
      "Steel Reinforcement Rule: Galvanized steel reinforcement (min 1.5mm) must be fastened every 300mm to resist cyclic thermal expansion and high-velocity wind loads.",
      "Drainage Slots: Water weep holes must be drilled at 150mm from corners with non-return flap caps to prevent wind-driven rainwater backflow."
    ],
    dimensionsTable: [
      { nominalSize: "60mm 3-Chamber Casement Outer Frame", outerDiameter: "60.0 x 58.0 mm", wallThickness: "2.8 mm (Class A)", workingPressure: "Wind: 2,400 Pa (Class C4)", burstPressure: "Water: 600 Pa (Class 9A)" },
      { nominalSize: "60mm Outward Opening Window Sash", outerDiameter: "60.0 x 74.0 mm", wallThickness: "2.8 mm (Class A)", workingPressure: "Air: Class 4 (EN 12207)", burstPressure: "Sound: 38 dB DGU" },
      { nominalSize: "70mm 5-Chamber Heavy Casement Frame", outerDiameter: "70.0 x 68.0 mm", wallThickness: "3.0 mm (Class A)", workingPressure: "Wind: 3,000 Pa (Class C5)", burstPressure: "Water: 900 Pa (Class E900)" },
      { nominalSize: "70mm Heavy Door Sash (T-Sash)", outerDiameter: "70.0 x 105.0 mm", wallThickness: "3.0 mm (Class A)", workingPressure: "Load: 140 kg/sash", burstPressure: "Sound: 42 dB DGU" }
    ]
  },
  {
    id: "upvc-sliding-patio",
    name: "GADIN GlideMax Multi-Track uPVC Sliding Windows & Patio Doors",
    category: "sliding",
    categoryLabel: "Sliding Patio & Multi-Track",
    standard: "EN 12608 / ASTM E330 / IS 875",
    sizeRange: "80mm 2-Track, 112mm 3-Track, and 140mm 4-Track Systems",
    pressureRating: "Wind Resistance: Up to 2,500 Pa (230 km/h Gale Resistance)",
    maxTemp: "Air-conditioned interior to 55°C exterior delta",
    burstPressure: "Air Leakage: Class 3 (< 1.5 m³/h.m² @ 100 Pa)",
    tensileLoad: "Tandem Stainless Steel Roller Capacity: Up to 180 kg per sliding sash",
    materialCompounding: "Precision multi-cavity uPVC extrusion with co-extruded EPDM weather-pile seals and 304 Grade Stainless Steel guide rail.",
    primaryApplications: [
      "Large-span living room balcony patio doors (Spans up to 6.0 meters wide)",
      "High-wind oceanfront luxury resorts and villa developments",
      "Apartment bedroom sliding windows with integrated SS insect mesh track",
      "Commercial showroom panoramic glass entrances"
    ],
    engineeringRules: [
      "Interlock Wind Bracing: Sashes exceeding 2.4m height must incorporate external aluminum/steel inertia fin interlocks to keep deflection within L/175.",
      "Anti-Lift Blocks: Security anti-lift stops must be installed in upper head tracks to prevent unauthorized sash lifting from the exterior."
    ],
    dimensionsTable: [
      { nominalSize: "80mm 2-Track Sliding Outer Frame", outerDiameter: "80.0 x 52.0 mm", wallThickness: "2.5 mm (Heavy Duty)", workingPressure: "Wind: 2,000 Pa", burstPressure: "Rollers: 90 kg load" },
      { nominalSize: "112mm 3-Track Frame (Glass + Mesh)", outerDiameter: "112.0 x 52.0 mm", wallThickness: "2.6 mm (Heavy Duty)", workingPressure: "Wind: 2,500 Pa", burstPressure: "Rollers: 160 kg load" },
      { nominalSize: "Heavy Patio Sliding Sash (Single)", outerDiameter: "42.0 x 82.0 mm", wallThickness: "2.8 mm (Class A)", workingPressure: "Air: Class 3", burstPressure: "DGU Glass: 24-28mm" },
      { nominalSize: "Interlock Section with Aluminum Fin", outerDiameter: "42.0 x 38.0 mm", wallThickness: "2.5 mm + 2.0mm Alum", workingPressure: "Moment Ix: 18.5 cm⁴", burstPressure: "Deflection: < L/175" }
    ]
  },
  {
    id: "upvc-tilt-turn",
    name: "GADIN EuroVent 70mm Tilt & Turn Architectural Systems",
    category: "tilt-turn",
    categoryLabel: "Tilt & Turn High-Rise",
    standard: "DIN 18055 / EN 13126 / RC2 Burglar Resistance",
    sizeRange: "70mm System Depth with 24mm to 36mm Triple Glazing",
    pressureRating: "Wind Pressure: 3,000 Pa / Water Tightness: Class 9A",
    maxTemp: "-20°C to +50°C",
    burstPressure: "Water Column: 900 Pa Driving Rain Resistance",
    tensileLoad: "Peripheral Mushroom Cam Hardware: 130 kg Sash Rating",
    materialCompounding: "German engineered 5-chamber uPVC profile with central sealing gasket (MD System) delivering passive house thermal performance.",
    primaryApplications: [
      "Modern luxury urban developments with dual ventilation requirements",
      "High-rise penthouses where outward-opening windows are prohibited",
      "Sound-sensitive hospital suites and recording studios (Triple Glazed)",
      "High-security residential villas (European RC2 security hardware)"
    ],
    engineeringRules: [
      "Corner Transmission: Ensure perimeter gear drives engage on all 4 sides with minimum 6 locking mushroom points per sash.",
      "Thermal Insulation: Combine 5-chamber frame with Argon-filled Low-E Double Glazing (Ug=1.1) to achieve whole-window Uw < 1.3 W/m²K."
    ],
    dimensionsTable: [
      { nominalSize: "70mm 5-Chamber Tilt & Turn Frame", outerDiameter: "70.0 x 70.0 mm", wallThickness: "3.0 mm (Class A)", workingPressure: "Wind: 3,000 Pa (Class C5)", burstPressure: "Water: 900 Pa (9A)" },
      { nominalSize: "70mm Inward Opening Z-Sash", outerDiameter: "70.0 x 80.0 mm", wallThickness: "3.0 mm (Class A)", workingPressure: "Burglar: RC2 Class", burstPressure: "Sound: 44 dB" },
      { nominalSize: "70mm Fixed Mullion / Transom Profile", outerDiameter: "70.0 x 84.0 mm", wallThickness: "3.0 mm (Class A)", workingPressure: "Moment Ix: 12.8 cm⁴", burstPressure: "Reinforced 2.0mm" }
    ]
  },
  {
    id: "upvc-bifold-panoramic",
    name: "GADIN PanoramaFold Heavy-Duty uPVC Slide & Fold Balcony Doors",
    category: "bifold",
    categoryLabel: "Slide & Fold (Bi-Fold)",
    standard: "EN 14351-1 / BS 6375 Part 1 & 2 / PAS 24",
    sizeRange: "3-Panel to 7-Panel Spans up to 7.0 Meters Width",
    pressureRating: "Wind Load: Class C3 (1,800 Pa) / Dynamic Water Proofing: 450 Pa",
    maxTemp: "Tropical Compound (Class S) - 50°C Desert Heat",
    burstPressure: "Acoustic Attenuation: 40 dB with 28mm Laminated DGU",
    tensileLoad: "Heavy-Duty Top Guide & Bottom Bogie Wheels: Up to 100 kg per panel",
    materialCompounding: "Reinforced 70mm multi-chamber profile with heavy-gauge galvanized steel box reinforcement and flush sunken threshold option.",
    primaryApplications: [
      "Luxury villa terrace & swimming pool deck panoramic transitions",
      "Penthouse roof gardens and sea-facing viewing lounges",
      "High-end restaurant indoor-outdoor alfresco dining partitions",
      "Modern residential grand patio openings"
    ],
    engineeringRules: [
      "Structural Header Lintels: Due to top-hung/bottom-rolling load distributions, the overhead lintel deflection must be restricted to under 3mm under full panel weight.",
      "Multi-Point Panel Interlock: Each fold hinge junction must feature double EPDM compression gaskets to eliminate air infiltration."
    ],
    dimensionsTable: [
      { nominalSize: "70mm Heavy Bi-fold Outer Perimeter Frame", outerDiameter: "70.0 x 64.0 mm", wallThickness: "2.8 mm (Class A)", workingPressure: "Wind: 1,800 Pa", burstPressure: "Water: 450 Pa" },
      { nominalSize: "70mm Folding Intermediate Sash Profile", outerDiameter: "70.0 x 78.0 mm", wallThickness: "2.8 mm (Class A)", workingPressure: "Hinge Load: 100 kg/panel", burstPressure: "Sound: 40 dB DGU" },
      { nominalSize: "Sunken Barrier-Free Threshold Track", outerDiameter: "70.0 x 22.0 mm", wallThickness: "2.5 mm Heavy Alum", workingPressure: "ADA Wheelchair Ready", burstPressure: "Sub-floor Weep Drains" }
    ]
  },
  {
    id: "upvc-fixed-facade",
    name: "GADIN SkyView Architectural Fixed Glazing & Curtain Wall Systems",
    category: "facade",
    categoryLabel: "Panoramic Fixed & Facade",
    standard: "ASTM E283 / ASTM E331 / EN 13830",
    sizeRange: "Custom Oversized Spans up to 3.2m Height per Module",
    pressureRating: "Extreme Wind Pressure: Up to 3,500 Pa (Category 5 Hurricane Safe)",
    maxTemp: "-10°C to +55°C Ambient Range",
    burstPressure: "Water Tightness: Class E1200 (1,200 Pa Test Pressure)",
    tensileLoad: "Heavy Internal Box Steel Reinforcement: Ix > 32 cm⁴",
    materialCompounding: "High-modulus uPVC profile co-extruded with UV stabilizers, engineered for direct structural glazing and high-rise curtain mullions.",
    primaryApplications: [
      "Commercial office tower panoramic ribbon windows",
      "Villa double-height foyer grand glass facades",
      "Hospital & institution energy-efficient curtain walls",
      "Coastal hotel viewing decks facing open seas"
    ],
    engineeringRules: [
      "Expansion Joints: Architectural curtain spans exceeding 6 meters must integrate thermal expansion coupling adapters allowing 2.5mm per meter movement.",
      "Dead Load Glass Setting Blocks: Heavy DGU glasses exceeding 100 kg must be supported on rigid Neoprene setting blocks positioned at 1/4 points."
    ],
    dimensionsTable: [
      { nominalSize: "80mm High-Inertia Facade Mullion Frame", outerDiameter: "80.0 x 108.0 mm", wallThickness: "3.0 mm (Class A)", workingPressure: "Wind: 3,500 Pa (Class C5)", burstPressure: "Steel Core: 2.5mm Box" },
      { nominalSize: "Heavy Structural Transom Profile", outerDiameter: "80.0 x 86.0 mm", wallThickness: "3.0 mm (Class A)", workingPressure: "Moment Ix: 28.4 cm⁴", burstPressure: "Glass: Up to 36mm" },
      { nominalSize: "Snap-on Contemporary Glazing Bead", outerDiameter: "28.0 x 20.0 mm", wallThickness: "2.0 mm Co-extruded", workingPressure: "Gasket: EPDM Co-ex", burstPressure: "Security: Anti-Pry" }
    ]
  }
];

export const GAD_PLANT_DATA = {
  annualCapacity: "15,000 MT / 450,000 Windows Annually",
  extruders: "12 KraussMaffei (Germany) Twin-Screw High-Output Profile Extrusion Lines",
  fabricationTooling: "Urban & Rotox (Germany) 4-Head Seamless Welders & CNC Corner Cleaners",
  reinforcementSteel: "Automated Roll-Forming Lines for Hot-Dip Galvanized Steel Cores (1.5mm - 2.5mm)",
  testingFacilities: [
    "EN 12211 Dynamic Wind Load Pressure Testing Chamber (Up to 4,000 Pa)",
    "EN 1027 Water Penetration Pulsed Spray Rack (Driving Rain Simulation)",
    "EN 1026 Air Infiltration & Permeability Mass Flow Chamber",
    "ISO 4892-2 Xenon Arc Accelerated Weathering & Tropical UV Aging Lab",
    "EN 1191 Cyclic Hardware Endurance Testing (25,000 Open/Close Cycles)",
    "Charpy Impact & Corner Weld Mechanical Tensile Fracture Rig"
  ],
  exportMarkets: [
    "United Arab Emirates (Dubai / Abu Dhabi)",
    "Saudi Arabia & GCC Countries",
    "India & South Asian Territories",
    "East & West African Building Corridors",
    "Latin America & Caribbean Coastal Markets"
  ]
};

export const GADIN_CORPORATE_DATA = {
  companyName: "GADIN INDUSTRIES TRADING FZCO",
  brandName: "GADIN INDUSTRIES",
  shortCode: "GIT",
  tagline: "Precision uPVC Windows, Doors & Architectural Systems",
  licenseNo: "72748",
  registeredAddress: "IFZA Business Park, Building A1, Dubai Digital Park, Dubai Silicon Oasis, Dubai, United Arab Emirates.",
  phone: "+971 50 596 9577",
  email: "adityavmgadin@gmail.com",
  salesEmail: "adityavmgadin@gmail.com",
  bankDetails: {
    bankName: "WIO BANK",
    accountName: "GADIN INDUSTRIES TRADING",
    iban: "AE98 0860 0000 0905 7123 919",
    branch: "Etihad Airways Centre 5th floor, Abu Dhabi."
  },
  services: [
    "GADIN PrimaTherm Casement Windows & French Doors (60mm & 70mm)",
    "GADIN GlideMax Multi-Track Sliding Patio Doors with SS Insect Mesh",
    "GADIN EuroVent Inward Tilt & Turn Dual-Action High-Rise Systems",
    "GADIN PanoramaFold Heavy-Duty Panoramic Slide & Fold Balcony Doors",
    "Multi-Chamber Class A Tropicalized uPVC Profiles with Galvanized Steel Cores"
  ],
  colors: {
    primaryBlue: "#053C82",
    secondaryBlue: "#073F86",
    accentOrange: "#DD612A",
    highlightOrange: "#EA580C",
    cardBg: "#FFFFFF",
    surfaceBg: "#F8FAFC",
    border: "#CBD5E1"
  }
};
