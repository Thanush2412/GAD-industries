export interface PipeProductItem {
  id: string;
  name: string;
  category: "plumbing" | "agriculture" | "borewell" | "irrigation" | "drainage" | "cabling";
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
  image: string;
  dimensionsTable: {
    nominalSize: string;
    outerDiameter: string;
    wallThickness: string;
    workingPressure: string;
    burstPressure: string;
  }[];
}

export const GAD_PRODUCT_SPECS: PipeProductItem[] = [
  {
    id: "cpvc-hot-cold",
    name: "FlowMax cPVC Hot & Cold Pipe and Fittings System",
    category: "plumbing",
    categoryLabel: "cPVC Plumbing (Hot & Cold)",
    standard: "ASTM D2846 / ASTM F441 / IS:15778",
    sizeRange: '1/2" (15mm) to 2" (50mm)',
    pressureRating: "SDR-11 (28.1 bar / 400 PSI) & SDR-13.5 (22.5 bar / 320 PSI)",
    maxTemp: "93°C (200°F) Continuous / -5°C Sub-zero",
    burstPressure: "> 87.9 kgf/cm² (1,250 PSI) @ 23°C",
    tensileLoad: "≥ 55 MPa Tensile Strength at Yield",
    materialCompounding: "Chlorinated Polyvinyl Chloride (67–69% Chlorine content) with NSF/ANSI 61 lead-free certification. 100% virgin compounding with Sekisui/Kaneka resins.",
    primaryApplications: [
      "Solar rooftop water heating loops & hot water return headers",
      "High-rise multi-story hot & cold potable water distribution",
      "Hospital, commercial hotel & healthcare sanitized piping circuits",
      "Industrial process chemical conveying lines (mild acids & alkalis)"
    ],
    engineeringRules: [
      "Solar Water Heater Isolation: Never connect CPVC pipe directly to solar heating tank outlet. A 1000mm metallic transition nipple/loop must be installed to isolate extreme thermal buildup.",
      "Support Spacing Rule: Horizontal runs at 82°C require pipe hangers every 0.9m (1/2\") to 1.2m (1\") to prevent thermal deflection and sag."
    ],
    image: "/images/idol/cat_cpvc.webp",
    dimensionsTable: [
      { nominalSize: '1/2" (15mm) SDR 11', outerDiameter: "15.90 ± 0.08 mm", wallThickness: "1.73 ± 0.20 mm", workingPressure: "28.1 bar (400 PSI)", burstPressure: "87.9 kgf/cm²" },
      { nominalSize: '3/4" (20mm) SDR 11', outerDiameter: "22.20 ± 0.08 mm", wallThickness: "2.02 ± 0.20 mm", workingPressure: "28.1 bar (400 PSI)", burstPressure: "87.9 kgf/cm²" },
      { nominalSize: '1" (25mm) SDR 11', outerDiameter: "28.60 ± 0.08 mm", wallThickness: "2.60 ± 0.20 mm", workingPressure: "28.1 bar (400 PSI)", burstPressure: "87.9 kgf/cm²" },
      { nominalSize: '1-1/4" (32mm) SDR 11', outerDiameter: "34.90 ± 0.08 mm", wallThickness: "3.18 ± 0.20 mm", workingPressure: "28.1 bar (400 PSI)", burstPressure: "87.9 kgf/cm²" },
      { nominalSize: '1-1/2" (40mm) SDR 11', outerDiameter: "41.30 ± 0.10 mm", wallThickness: "3.76 ± 0.20 mm", workingPressure: "28.1 bar (400 PSI)", burstPressure: "87.9 kgf/cm²" },
      { nominalSize: '2" (50mm) SDR 11', outerDiameter: "54.00 ± 0.10 mm", wallThickness: "4.91 ± 0.20 mm", workingPressure: "28.1 bar (400 PSI)", burstPressure: "87.9 kgf/cm²" }
    ]
  },
  {
    id: "upvc-plumbing-sch",
    name: "UltraPlumb uPVC Schedule 40 & 80 Plumbing System",
    category: "plumbing",
    categoryLabel: "uPVC Plumbing (SCH 40/80)",
    standard: "ASTM D1785 / ASTM D2466 / ASTM D2467",
    sizeRange: '1/2" (15mm) to 4" (100mm)',
    pressureRating: "SCH-40 (Up to 600 PSI) & SCH-80 (Up to 850 PSI)",
    maxTemp: "60°C (140°F) Operating Threshold",
    burstPressure: "> 140 kgf/cm² (2,000 PSI) Burst Rating",
    tensileLoad: "≥ 50 MPa Tensile Yield Strength",
    materialCompounding: "High impact modified unplasticized Polyvinyl Chloride with heavy-duty titanium dioxide pigment. 100% lead-free, non-toxic formulation for pure drinking water.",
    primaryApplications: [
      "Residential township cold water main riser networks",
      "Swimming pool circulation, filtration headers & water parks",
      "Industrial wastewater treatment & chemical manufacturing plants",
      "Air conditioning chilled water loop headers & drainage"
    ],
    engineeringRules: [
      "Solvent Cement Cure Time: Ensure dual-step primer and heavy-duty solvent cement with minimum 24-hour curing before pressure proof testing at > 10 bar.",
      "UV Sunlight Shielding: For outdoor above-ground installations, paint with water-based latex paint or use protective UV wrap."
    ],
    image: "/images/idol/cat_upvc_plumbing.webp",
    dimensionsTable: [
      { nominalSize: '1/2" (15mm) SCH 40', outerDiameter: "21.34 ± 0.10 mm", wallThickness: "2.77 + 0.51 mm", workingPressure: "41.4 bar (600 PSI)", burstPressure: "131.7 kgf/cm²" },
      { nominalSize: '3/4" (20mm) SCH 40', outerDiameter: "26.67 ± 0.10 mm", wallThickness: "2.87 + 0.51 mm", workingPressure: "33.1 bar (480 PSI)", burstPressure: "105.5 kgf/cm²" },
      { nominalSize: '1" (25mm) SCH 40', outerDiameter: "33.40 ± 0.13 mm", wallThickness: "3.38 + 0.51 mm", workingPressure: "31.0 bar (450 PSI)", burstPressure: "99.1 kgf/cm²" },
      { nominalSize: '1-1/2" (40mm) SCH 40', outerDiameter: "48.26 ± 0.15 mm", wallThickness: "3.68 + 0.51 mm", workingPressure: "22.8 bar (330 PSI)", burstPressure: "73.2 kgf/cm²" },
      { nominalSize: '2" (50mm) SCH 40', outerDiameter: "60.32 ± 0.15 mm", wallThickness: "3.91 + 0.51 mm", workingPressure: "19.3 bar (280 PSI)", burstPressure: "62.6 kgf/cm²" },
      { nominalSize: '1" (25mm) SCH 80', outerDiameter: "33.40 ± 0.13 mm", wallThickness: "4.55 + 0.53 mm", workingPressure: "43.4 bar (630 PSI)", burstPressure: "139.3 kgf/cm²" },
      { nominalSize: '2" (50mm) SCH 80', outerDiameter: "60.32 ± 0.15 mm", wallThickness: "5.54 + 0.66 mm", workingPressure: "27.6 bar (400 PSI)", burstPressure: "89.6 kgf/cm²" }
    ]
  },
  {
    id: "submersible-column-pipe",
    name: "DeepForce Submersible Column & Riser Drop Pipes",
    category: "borewell",
    categoryLabel: "Submersible Column Pipes",
    standard: "Biaxial High-Tensile Orientated / DIN 4925",
    sizeRange: '1" (25mm) to 4" (100mm)',
    pressureRating: "15 to 35 kgf/cm² Working Pressure (Depth up to 350 meters)",
    maxTemp: "50°C Geothermal Well Tolerance",
    burstPressure: "> 50 kgf/cm² Hydrostatic Proof",
    tensileLoad: "Up to 15,000 kgf (15 MT) Hanging Tensile Capacity",
    materialCompounding: "Specially formulated unplasticized PVC with patented bi-axial molecular orientation. Square thread design with polymer lock ring and rubber sealing gasket.",
    primaryApplications: [
      "Deep-well submersible pump water riser installation",
      "Total replacement for corroding Galvanized Iron (GI) pipes",
      "Saline, hard, and chemically aggressive agricultural aquifers",
      "Solar-powered deep bore pump delivery systems"
    ],
    engineeringRules: [
      "Torque Tightening: Tighten square threads by hand until rubber O-ring seats fully, then apply strap wrench 1/2 turn. Never use pipe wrenches with sharp teeth.",
      "Safety Wire Clamping: Always secure safety stainless steel wire rope through bottom pump adapter to surface wellhead."
    ],
    image: "/images/idol/cat_column_pipe.webp",
    dimensionsTable: [
      { nominalSize: '1" (25mm) Medium Riser', outerDiameter: "33.0 mm", wallThickness: "3.5 mm", workingPressure: "15 kgf/cm²", burstPressure: "Tensile: 1,800 kgf" },
      { nominalSize: '1-1/4" (32mm) Standard Riser', outerDiameter: "42.0 mm", wallThickness: "4.0 mm", workingPressure: "18 kgf/cm²", burstPressure: "Tensile: 2,500 kgf" },
      { nominalSize: '1-1/2" (40mm) Heavy Riser', outerDiameter: "48.0 mm", wallThickness: "4.8 mm", workingPressure: "22 kgf/cm²", burstPressure: "Tensile: 3,800 kgf" },
      { nominalSize: '2" (50mm) Super Heavy Riser', outerDiameter: "60.0 mm", wallThickness: "6.0 mm", workingPressure: "27 kgf/cm²", burstPressure: "Tensile: 6,200 kgf" },
      { nominalSize: '3" (80mm) Extreme High Riser', outerDiameter: "88.0 mm", wallThickness: "8.5 mm", workingPressure: "32 kgf/cm²", burstPressure: "Tensile: 11,500 kgf" },
      { nominalSize: '4" (100mm) Heavy Duty Riser', outerDiameter: "114.0 mm", wallThickness: "10.8 mm", workingPressure: "35 kgf/cm²", burstPressure: "Tensile: 15,000 kgf" }
    ]
  },
  {
    id: "upvc-casing-borewell",
    name: "AquaShield uPVC Borehole Casing & Screen Systems",
    category: "borewell",
    categoryLabel: "Borewell Casing & Screen",
    standard: "IS:12818:2010 (CS Shallow & CM Medium) / DIN 4925",
    sizeRange: '1.5" (40mm) to 12" (300mm) Bore Size',
    pressureRating: "Collapse Pressure: > 11.2 kgf/cm² (CS) to > 28.0 kgf/cm² (CM)",
    maxTemp: "60°C Geothermal Aquifer Threshold",
    burstPressure: "> 35 kgf/cm² Internal Hydrostatic",
    tensileLoad: "Trapezoidal Thread Joint Tensile Yield: > 8,100 kgf",
    materialCompounding: "High molecular weight unplasticized PVC with specialized blue pigments and food-grade stabilizers for pure drinking water safety. Impervious to sand abrasion.",
    primaryApplications: [
      "Deep agricultural and municipal tube well lining (Up to 250m)",
      "Ribbed screen percolation pipes for rainwater recharge wells",
      "Dewatering shafts in mining, construction & tunneling projects",
      "Corrosive coastal groundwater extraction"
    ],
    engineeringRules: [
      "Gravel Packing Envelope: Ensure uniform pea gravel (2mm to 4mm) envelope around slotted casing to prevent sand ingress and pump impeller scouring.",
      "Depth Rating Rule: CS (Shallow Well) suitable up to 80m; CM (Medium Well) engineered for depth up to 250m."
    ],
    image: "/images/idol/cat_casing_pipe.webp",
    dimensionsTable: [
      { nominalSize: '100mm (4") CS Shallow Casing', outerDiameter: "113.0 ± 0.30 mm", wallThickness: "5.0 + 0.8 mm", workingPressure: "Collapse: 11.2 kgf/cm²", burstPressure: "Tensile: 3,200 kgf" },
      { nominalSize: '100mm (4") CM Deep Casing', outerDiameter: "113.0 ± 0.30 mm", wallThickness: "7.0 + 1.0 mm", workingPressure: "Collapse: 24.5 kgf/cm²", burstPressure: "Tensile: 4,800 kgf" },
      { nominalSize: '125mm (5") CS Shallow Casing', outerDiameter: "140.0 ± 0.40 mm", wallThickness: "6.5 + 0.9 mm", workingPressure: "Collapse: 12.0 kgf/cm²", burstPressure: "Tensile: 4,100 kgf" },
      { nominalSize: '125mm (5") CM Deep Casing', outerDiameter: "140.0 ± 0.40 mm", wallThickness: "8.5 + 1.2 mm", workingPressure: "Collapse: 26.0 kgf/cm²", burstPressure: "Tensile: 6,200 kgf" },
      { nominalSize: '150mm (6") CS Shallow Casing', outerDiameter: "165.0 ± 0.40 mm", wallThickness: "7.5 + 1.0 mm", workingPressure: "Collapse: 11.8 kgf/cm²", burstPressure: "Tensile: 5,400 kgf" },
      { nominalSize: '150mm (6") CM Deep Casing', outerDiameter: "165.0 ± 0.40 mm", wallThickness: "10.0 + 1.4 mm", workingPressure: "Collapse: 27.5 kgf/cm²", burstPressure: "Tensile: 8,100 kgf" },
      { nominalSize: '200mm (8") CM Deep Casing', outerDiameter: "225.0 ± 0.50 mm", wallThickness: "13.0 + 1.8 mm", workingPressure: "Collapse: 28.0 kgf/cm²", burstPressure: "Tensile: 11,500 kgf" }
    ]
  },
  {
    id: "agriculture-pvc-pipes",
    name: "AgriFlow Agriculture PVC Pipes & Fittings",
    category: "agriculture",
    categoryLabel: "Agriculture PVC Pipes",
    standard: "IS:4985:2000 (Class 1 to Class 5) / ISO 1452",
    sizeRange: "20mm to 250mm Outer Diameter",
    pressureRating: "Class 1 (2.5 bar), Class 2 (4 bar), Class 3 (6 bar), Class 5 (10 bar)",
    maxTemp: "45°C Field Ambient Operating Range",
    burstPressure: "3.2x Working Pressure Proof",
    tensileLoad: "≥ 45 MPa Tensile Strength at Break",
    materialCompounding: "100% Virgin uPVC compounding with ultraviolet stabilizers and mirror-smooth hydraulic bore (Hazen-Williams C=150) reducing friction head losses by 30%.",
    primaryApplications: [
      "Pressurized farm mainline and submains irrigation conveyance",
      "Flood and furrow farm water transit from rivers & canals",
      "Potable rural drinking water supply schemes",
      "Lift irrigation schemes and gravity flow drainage lines"
    ],
    engineeringRules: [
      "Air Valve Rule: Install kinetic air release valves at all pipeline summits and high elevation points to eliminate water hammer shock and vacuum suction collapse.",
      "Trench Bedding: Minimum 30cm clean sand bedding beneath pipe with 60cm soil backfill above crown to isolate heavy tractor wheel loading."
    ],
    image: "/images/idol/cat_garden_hose.webp",
    dimensionsTable: [
      { nominalSize: "63mm Class 2 (4 kgf/cm²)", outerDiameter: "63.0 + 0.3 mm", wallThickness: "1.5 to 1.9 mm", workingPressure: "0.4 MPa (4.0 bar)", burstPressure: "1.28 MPa" },
      { nominalSize: "75mm Class 2 (4 kgf/cm²)", outerDiameter: "75.0 + 0.3 mm", wallThickness: "1.8 to 2.2 mm", workingPressure: "0.4 MPa (4.0 bar)", burstPressure: "1.28 MPa" },
      { nominalSize: "90mm Class 2 (4 kgf/cm²)", outerDiameter: "90.0 + 0.3 mm", wallThickness: "2.1 to 2.6 mm", workingPressure: "0.4 MPa (4.0 bar)", burstPressure: "1.28 MPa" },
      { nominalSize: "110mm Class 2 (4 kgf/cm²)", outerDiameter: "110.0 + 0.4 mm", wallThickness: "2.5 to 3.1 mm", workingPressure: "0.4 MPa (4.0 bar)", burstPressure: "1.28 MPa" },
      { nominalSize: "110mm Class 3 (6 kgf/cm²)", outerDiameter: "110.0 + 0.4 mm", wallThickness: "3.7 to 4.3 mm", workingPressure: "0.6 MPa (6.0 bar)", burstPressure: "1.92 MPa" },
      { nominalSize: "160mm Class 2 (4 kgf/cm²)", outerDiameter: "160.0 + 0.5 mm", wallThickness: "3.6 to 4.4 mm", workingPressure: "0.4 MPa (4.0 bar)", burstPressure: "1.28 MPa" },
      { nominalSize: "200mm Class 2 (4 kgf/cm²)", outerDiameter: "200.0 + 0.6 mm", wallThickness: "4.5 to 5.5 mm", workingPressure: "0.4 MPa (4.0 bar)", burstPressure: "1.28 MPa" }
    ]
  },
  {
    id: "drip-micro-irrigation",
    name: "PrecisionDrop Micro & Drip Irrigation Systems",
    category: "irrigation",
    categoryLabel: "Drip & Micro Irrigation",
    standard: "IS:13488 / IS:12786 / ISO 9261",
    sizeRange: "12mm, 16mm & 20mm Laterals (Flat & Round Dripperlines)",
    pressureRating: "Operating Pressure: 0.7 to 2.5 bar (Dripper Discharge: 2.0 to 4.0 LPH)",
    maxTemp: "60°C Direct High Desert Solar Exposure",
    burstPressure: "> 5.5 bar Hydrostatic Burst",
    tensileLoad: "High Environmental Stress Crack Resistance (ESCR > 500 hrs)",
    materialCompounding: "Virgin Low-Density Polyethylene (LLDPE) compounded with 2.5% masterbatch Carbon Black for extreme UV solar radiation durability.",
    primaryApplications: [
      "Orchards (Mango, Pomegranate, Citrus, Guava, Apple)",
      "Cash row crops (Cotton, Sugarcane, Banana, Maize)",
      "Greenhouses, polyhouses, nursery & hydroponic farms",
      "Water-scarce arid terrains saving up to 60% water"
    ],
    engineeringRules: [
      "Disc Filter Requirement: Maintain 120-mesh (130-micron) disc or screen filtration upstream to prevent micro-dripper labyrinth emitter clogging.",
      "Lateral Flushing: Flush drip laterals every 15 days by opening end flush plugs for 2 minutes to discharge silt deposits."
    ],
    image: "/images/idol/cat_drip_irrigation.webp",
    dimensionsTable: [
      { nominalSize: "16mm Flat Drip Tape (0.25mm Wall)", outerDiameter: "16.0 mm", wallThickness: "10 mil (0.25 mm)", workingPressure: "1.0 bar (14.5 PSI)", burstPressure: "Emitter: 2.0 LPH" },
      { nominalSize: "16mm Flat Drip Tape (0.40mm Wall)", outerDiameter: "16.0 mm", wallThickness: "16 mil (0.40 mm)", workingPressure: "1.5 bar (21.7 PSI)", burstPressure: "Emitter: 4.0 LPH" },
      { nominalSize: "16mm Round Dripperline Class 2", outerDiameter: "16.0 mm", wallThickness: "0.90 mm (Heavy)", workingPressure: "2.5 bar (36.2 PSI)", burstPressure: "Emitter: 2.0 LPH" },
      { nominalSize: "16mm Plain Blind Lateral Pipe", outerDiameter: "16.0 mm", wallThickness: "1.20 mm", workingPressure: "3.0 bar (43.5 PSI)", burstPressure: "Button Ready" }
    ]
  },
  {
    id: "sprinkler-irrigation-system",
    name: "AgriRain Portable Sprinkler Irrigation System",
    category: "irrigation",
    categoryLabel: "Sprinkler Irrigation",
    standard: "IS:14151 (Part 1 & 2) / ISO 7749",
    sizeRange: "63mm & 75mm (Quick-coupled Latch & Clamp Pipes)",
    pressureRating: "2.5 bar to 4.0 bar Operating Pressure (Discharge: 1,200 to 2,500 LPH)",
    maxTemp: "55°C Outdoor Solar Exposure",
    burstPressure: "> 10.0 bar Hydrostatic Burst",
    tensileLoad: "Quick-Lock Coupler Pull-Out Resistance > 1,200 kgf",
    materialCompounding: "High-density Polyethylene (HDPE PE-63 / PE-80) with fused metallic or heavy polymer quick-action latches and brass rotary nozzles.",
    primaryApplications: [
      "Field crops: Wheat, Groundnut, Pulses, Mustard, Potato",
      "Tea, coffee and cardamom plantation frost protection",
      "Dust suppression at mining haul roads & construction sites",
      "Pasture land, sports turf & golf course irrigation"
    ],
    engineeringRules: [
      "Nozzle Overlap: Ensure 50% nozzle spray pattern overlap (triangular or square grid) for uniform precipitation coefficient across uneven fields.",
      "Wind Adjustment: If crosswinds exceed 15 km/h, reduce nozzle spacing by 10% to prevent dry strip pattern distortion."
    ],
    image: "/images/idol/cat_sprinkler.webp",
    dimensionsTable: [
      { nominalSize: "63mm Class 1 Sprinkler Pipe (6m)", outerDiameter: "63.0 mm", wallThickness: "2.5 bar Rating", workingPressure: "2.5 kgf/cm²", burstPressure: "Latch: Quick Lock" },
      { nominalSize: "75mm Class 1 Sprinkler Pipe (6m)", outerDiameter: "75.0 mm", wallThickness: "2.5 bar Rating", workingPressure: "2.5 kgf/cm²", burstPressure: "Latch: Quick Lock" },
      { nominalSize: "63mm Class 2 Sprinkler Pipe (6m)", outerDiameter: "63.0 mm", wallThickness: "3.2 bar Rating", workingPressure: "3.2 kgf/cm²", burstPressure: "Heavy Duty Coupler" },
      { nominalSize: "3/4\" Brass Rotary Sprinkler Nozzle", outerDiameter: "20.0 mm Nozzle", wallThickness: "Twin Nozzle Brass", workingPressure: "2.5 - 3.5 bar", burstPressure: "Radius: 12 - 16m" }
    ]
  },
  {
    id: "swr-drainage-system",
    name: "SilentFlow SWR Soil, Waste & Rainwater Drainage",
    category: "drainage",
    categoryLabel: "SWR Drainage System",
    standard: "IS:13592:2013 (Type A & Type B) / IS:14735",
    sizeRange: '75mm (2-1/2"), 110mm (4") & 160mm (6")',
    pressureRating: "Type A (Rainwater/Vent) & Type B (Soil/Waste Sanitary Lines)",
    maxTemp: "65°C Intermittent Hot Domestic Drainage",
    burstPressure: "Gravity & Syphonic Self-cleansing Flow",
    tensileLoad: "Impact Resistance: Zero cracking under 0°C falling dart test",
    materialCompounding: "Special high-stiffness PVC compound with anti-microbial bacterial repelling additives, rubber ring push-fit sockets for 100% leak-proof thermal movement.",
    primaryApplications: [
      "High-rise commercial & residential sanitary drainage stacks",
      "Rooftop storm water drainage & rainwater harvesting channels",
      "Underground domestic sewage outflow connection to municipal mains",
      "Laboratory chemical waste conveyance stacks"
    ],
    engineeringRules: [
      "Slope Gradient Rule: Horizontal soil and waste branches must be graded at minimum 1:40 to 1:50 slope to guarantee self-cleansing scouring velocity (≥ 0.75 m/s).",
      "Thermal Expansion Socket: Ensure pipe is inserted fully into socket and backed out 10mm to provide thermal expansion gap inside rubber ring fitting."
    ],
    image: "/images/idol/cat_swr_drainage.webp",
    dimensionsTable: [
      { nominalSize: "75mm Type A (Rainwater)", outerDiameter: "75.0 + 0.3 mm", wallThickness: "1.8 to 2.2 mm", workingPressure: "Gravity Drain", burstPressure: "Rainwater Stack" },
      { nominalSize: "75mm Type B (Soil & Waste)", outerDiameter: "75.0 + 0.3 mm", wallThickness: "3.2 to 3.8 mm", workingPressure: "Sanitary Drain", burstPressure: "Underground Stack" },
      { nominalSize: "110mm Type A (Rainwater)", outerDiameter: "110.0 + 0.4 mm", wallThickness: "2.2 to 2.7 mm", workingPressure: "Gravity Drain", burstPressure: "Rainwater Stack" },
      { nominalSize: "110mm Type B (Soil & Waste)", outerDiameter: "110.0 + 0.4 mm", wallThickness: "3.2 to 3.8 mm", workingPressure: "Sanitary Drain", burstPressure: "Multi-story Stack" },
      { nominalSize: "160mm Type B (Main Header)", outerDiameter: "160.0 + 0.5 mm", wallThickness: "4.0 to 4.6 mm", workingPressure: "Heavy Header", burstPressure: "Municipal Outfall" }
    ]
  },
  {
    id: "hdpe-telecom-duct",
    name: "TeraDuct PLB Telecom Optical Fiber Duct Pipes",
    category: "cabling",
    categoryLabel: "HDPE & Telecom Ducts",
    standard: "TEC / G/CDS-08 / IS:4984 / ISO 4427",
    sizeRange: "32/26mm, 40/33mm & 50/42mm Outer/Inner Diameter",
    pressureRating: "PN 6 to PN 16 (Working Pressure up to 16 bar)",
    maxTemp: "60°C Underground Conduit Thermal Limit",
    burstPressure: "> 25 bar Short-term Burst Test",
    tensileLoad: "Tension Pulling Resistance > 1,500 kgf during cable blowing",
    materialCompounding: "High-density Polyethylene (HDPE PE-100) with co-extruded permanently lubricated inner silicone layer (friction coefficient < 0.06).",
    primaryApplications: [
      "Underground optical fiber cable (OFC) blowing and pulling",
      "National 5G telecom backbones, metro rail & highway data networks",
      "Municipal high-pressure potable water distribution (PE-100 PN-10/16)",
      "Gas distribution feeder conduits"
    ],
    engineeringRules: [
      "Cable Blowing Speed: Co-extruded silicone lining permits optical fiber cable blowing speeds up to 80 meters/minute over continuous 2,000m distances without lubricant oil.",
      "Bend Radius: Minimum cold bend radius must be kept greater than 20 times the outside diameter (20 x OD) to avoid duct kinking."
    ],
    image: "/images/idol/cat_telecom_duct.webp",
    dimensionsTable: [
      { nominalSize: "32/26 mm PLB Duct", outerDiameter: "32.0 + 0.3 mm", wallThickness: "3.0 ± 0.2 mm", workingPressure: "10 bar (Cable Blow)", burstPressure: "Friction: < 0.06" },
      { nominalSize: "40/33 mm PLB Duct (Standard)", outerDiameter: "40.0 + 0.4 mm", wallThickness: "3.5 ± 0.2 mm", workingPressure: "12 bar (Cable Blow)", burstPressure: "Tensile: 1,500 kgf" },
      { nominalSize: "50/42 mm PLB Duct", outerDiameter: "50.0 + 0.5 mm", wallThickness: "4.0 ± 0.2 mm", workingPressure: "12 bar (Cable Blow)", burstPressure: "Multi-Duct Ready" },
      { nominalSize: "63mm PE-100 PN-10 Water", outerDiameter: "63.0 + 0.4 mm", wallThickness: "3.8 to 4.4 mm", workingPressure: "10 bar (145 PSI)", burstPressure: "32 bar Proof" }
    ]
  }
];

export const GAD_PLANT_DATA = {
  annualCapacity: "24,000 Metric Tonnes / Annum",
  extruders: "18 Twin-Screw Automated Extrusion Lines (Battenfeld-Cincinnati & KraussMaffei tooling)",
  compoundingUnits: "High-Speed Automated Turbo Mixers with Gravimetric Dosing Control",
  manufacturingUnits: [
    {
      unit: "Unit 01 (Plumbing & Drainage Division)",
      focus: "cPVC Hot & Cold, uPVC SCH-40/80 Plumbing, and SWR Push-Fit Drainage",
      location: "Rajkot - Ahmedabad NH-8B, Dist. Rajkot, Gujarat, India",
      area: "28,000 Sq. Meters",
      capacity: "14,000 MT / Year"
    },
    {
      unit: "Unit 02 (Agriculture & Micro-Irrigation Division)",
      focus: "HDPE Pipes, Borewell Casing, Submersible Columns, and Drip/Sprinkler Systems",
      location: "RK Industrial Zone-8, At-Ranpur (Navagam), Dist. Rajkot, Gujarat, India",
      area: "24,000 Sq. Meters",
      capacity: "10,000 MT / Year"
    }
  ],
  testingFacilities: [
    "Computerized Hydrostatic Long-Term Burst Pressure Station (IS:4985 / ASTM D1598 / ASTM D2846)",
    "Vicat Softening Temperature Tester (ASTM D1525 / IS:15778 ≥ 103°C)",
    "Digital Izod & Falling Dart Impact Testers (-5°C conditioned test)",
    "Carbon Black Content & Dispersion Analyzer for UV Drip Laterals",
    "Tensile Strength & Elongation Electronic Universal Testing Machine (UTM)",
    "Micro-Dripper Coefficient of Variation (Cv) & Discharge Uniformity Rack"
  ],
  exportMarkets: [
    "United Arab Emirates (Dubai & GCC)",
    "Latin America (Mexico, Brazil)",
    "East Africa (Kenya, Tanzania, Uganda)",
    "West Africa (Nigeria, Ghana)",
    "South Asia (Sri Lanka, Bangladesh, Nepal)"
  ]
};

export const GADIN_CORPORATE_DATA = {
  companyName: "GADIN INDUSTRIES TRADING FZCO",
  brandName: "GADIN PIPES & IRRIGATION",
  associateBrand: "IDOL PIPE & FITTINGS",
  shortCode: "GIT",
  tagline: "High-Performance Piping Systems & Precision Irrigation",
  licenseNo: "72748",
  registeredAddress: "IFZA Business Park, Building A1, Dubai Digital Park, Dubai Silicon Oasis, Dubai, United Arab Emirates.",
  manufacturingAddress: "National Highway 8B, Kuwadva & Ranpur Industrial Zones, Rajkot - 360023, Gujarat, India.",
  phone: "+971 50 596 9577",
  indiaPhone: "+91 92654 96492 / +91 99254 55255",
  email: "adityavmgadin@gmail.com",
  salesEmail: "sales@idolpipe.com",
  bankDetails: {
    bankName: "WIO BANK",
    accountName: "GADIN INDUSTRIES TRADING",
    iban: "AE98 0860 0000 0905 7123 919",
    branch: "Etihad Airways Centre 5th floor, Abu Dhabi."
  },
  colors: {
    primaryBlue: "#053C82",
    secondaryBlue: "#073F86",
    accentOrange: "#DD612A",
    highlightOrange: "#EA580C",
    agriGreen: "#16A34A",
    cardBg: "#FFFFFF",
    surfaceBg: "#F8FAFC",
    border: "#CBD5E1"
  }
};
