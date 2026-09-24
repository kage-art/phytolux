/**
 * Phytolux Bio Science - Data Store
 * Structured database of Bio-Fertilizers, Crop Solutions, Knowledge Resources, FAQs
 */

const PHYTOLUX_DATA = {
  categories: [
    { id: 'all', name: 'All Products' },
    { id: 'bio-fertilizers', name: 'Bio-Fertilizers' },
    { id: 'bio-stimulants', name: 'Bio-Stimulants' },
    { id: 'organic-fertilizers', name: 'Organic Fertilizers' },
    { id: 'micronutrients', name: 'Micronutrients' },
    { id: 'soil-management', name: 'Soil Management' }
  ],

  products: [
    {
      id: 'psb',
      category: 'bio-fertilizers',
      categoryName: 'Bio-Fertilizers',
      name: 'PSB – Phosphate Solubilizing Bacteria',
      tagline: 'Biological phosphorus solubilization and root architecture enhancer',
      overview: 'Phytolux PSB contains specialized beneficial strains of Bacillus megaterium and Pseudomonas striata. In Indian soils, up to 75-80% of applied chemical phosphatic fertilizers become chemically fixed and unavailable to plants. Phytolux PSB secretes organic acids (citric, gluconic, succinic) that solubilize insoluble tricalcium phosphate into monocalcium forms readily absorbed by roots.',
      form: 'Liquid Ferment / Carrier Powder',
      composition: 'Bacillus megaterium var. phosphaticum / Pseudomonas striata (Min. 1 × 10⁸ CFU/ml or 5 × 10⁷ CFU/g carrier)',
      benefits: [
        'Solubilizes insoluble phosphates fixed in alkaline and acidic soils',
        'Improves root development and early seedling vigor',
        'Reduces dependency on synthetic phosphatic fertilizers (DAP/SSP) by 20–25%',
        'Enhances soil biological activity and microbial diversity'
      ],
      suitableCrops: ['Paddy', 'Wheat', 'Maize', 'Pulses', 'Vegetables', 'Horticultural Crops'],
      application: {
        seedTreatment: '10 ml / kg of seed (or 250 ml / acre requirement) mixed in rice starch or jaggery water.',
        soilApplication: '1–2 Litres / acre blended with 100 kg well-decomposed organic manure or Phytolux Vermi-Power, applied near root zone.',
        dripIrrigation: '1 Litre / acre mixed in fertigation tank during early vegetative and flowering stages.',
        seedlingDip: '250 ml in 25 Litres of water for 30-minute root dip before transplanting.'
      },
      packaging: '500 ml, 1 Litre, 5 Litres (Liquid); 1 kg, 4 kg (Carrier Granules)'
    },
    {
      id: 'ksb',
      category: 'bio-fertilizers',
      categoryName: 'Bio-Fertilizers',
      name: 'KSB – Potassium Solubilizing Bacteria',
      tagline: 'Biological potash mobilizer for enhanced grain weight, fruit size and disease resistance',
      overview: 'Phytolux KSB is formulated with high-potency strains of Frateuria aurantia. It secretes natural organic chelating agents that unlock locked potassium minerals from soil clays and silicate matrices, transforming them into plant-usable potash ions.',
      form: 'Liquid Ferment / Bio-Granules',
      composition: 'Frateuria aurantia (Min. 1 × 10⁸ CFU/ml or 5 × 10⁷ CFU/g carrier)',
      benefits: [
        'Mobilizes insoluble and mineral potassium from soil reserves',
        'Improves crop drought tolerance, stem strength, and lodging resistance',
        'Enhances grain luster, grain test weight, fruit sweetness (Brix) and color',
        'Improves post-harvest shelf life of fruits and vegetables'
      ],
      suitableCrops: ['Paddy', 'Wheat', 'Maize', 'Cotton', 'Sugarcane', 'Potato', 'Tomato', 'Banana', 'Grapes', 'Pome Fruits'],
      application: {
        seedTreatment: '10 ml / kg of seed with protective coating.',
        soilApplication: '1–2 Litres / acre mixed with moist soil or FYM before flowering and tuber/grain initiation.',
        dripIrrigation: '1–1.5 Litres / acre through venturi or drip system at fruit development phase.'
      },
      packaging: '1 Litre, 5 Litres (Liquid); 4 kg pouch'
    },
    {
      id: 'azotobacter',
      category: 'bio-fertilizers',
      categoryName: 'Bio-Fertilizers',
      name: 'Azotobacter Bio-Fertilizer',
      tagline: 'Free-living biological nitrogen fixation for non-leguminous crops',
      overview: 'Phytolux Azotobacter contains pure cultures of Azotobacter chroococcum. Being a free-living aerobic bacterium, it fixes atmospheric nitrogen into ammoniacal forms directly in the rhizosphere while synthesizing plant growth-promoting substances (auxins, gibberellins, vitamins).',
      form: 'Liquid Bio-Inoculant',
      composition: 'Azotobacter chroococcum (Min. 1 × 10⁸ CFU/ml)',
      benefits: [
        'Fixes 20–25 kg of biological nitrogen per hectare per season',
        'Synthesizes auxins and gibberellins that stimulate rapid root development',
        'Produces antifungal compounds providing biological protection against soil pathogens',
        'Improves seed germination percentage and seedling stand'
      ],
      suitableCrops: ['Wheat', 'Maize', 'Mustard', 'Cotton', 'Sugarcane', 'Vegetables', 'Plantation Crops'],
      application: {
        seedTreatment: '10 ml / kg of seed before sowing.',
        soilApplication: '1 Litre / acre mixed in organic compost or vermicompost applied at final land preparation.',
        dripIrrigation: '1 Litre / acre during vegetative stage.'
      },
      packaging: '500 ml, 1 Litre, 5 Litres'
    },
    {
      id: 'azospirillum',
      category: 'bio-fertilizers',
      categoryName: 'Bio-Fertilizers',
      name: 'Azospirillum Bio-Fertilizer',
      tagline: 'Associative nitrogen fixer tailored for paddy, millets and sugarcane',
      overview: 'Phytolux Azospirillum contains associative symbiotic bacteria (Azospirillum brasilense) that colonize root interiors and rhizosphere soils of cereals and grasses. Particularly effective in submerged and upland paddy soils.',
      form: 'Liquid Ferment / Carrier Peat',
      composition: 'Azospirillum brasilense (Min. 1 × 10⁸ CFU/ml)',
      benefits: [
        'Supplies biological nitrogen and enhances vegetative tiller count',
        'Stimulates adventitious root branching for greater water and nutrient uptake',
        'Enhances chlorophyll content and delayed leaf senescence',
        'Saves 20–30% of synthetic chemical nitrogen (urea) applications'
      ],
      suitableCrops: ['Paddy', 'Sorghum', 'Pearl Millet (Bajra)', 'Maize', 'Sugarcane', 'Fodder Grasses'],
      application: {
        seedlingDip: '250–500 ml in 30 Litres water for paddy nursery root dip.',
        soilApplication: '1–2 Litres / acre applied 15–20 days after transplanting or sowing.'
      },
      packaging: '1 Litre, 5 Litres'
    },
    {
      id: 'rhizobium',
      category: 'bio-fertilizers',
      categoryName: 'Bio-Fertilizers',
      name: 'Rhizobium Bio-Fertilizer',
      tagline: 'Symbiotic root nodule nitrogen fixing specialist for pulses and oilseeds',
      overview: 'Phytolux Rhizobium provides crop-specific strains (R. leguminosarum, R. japonicum) that form healthy, pink leghemoglobin-rich root nodules on pulse crops, converting ambient air nitrogen into organic amino compounds.',
      form: 'Liquid Inoculant / Carrier Peat',
      composition: 'Rhizobium spp. (Min. 1 × 10⁸ CFU/ml)',
      benefits: [
        'Fixes up to 40–80 kg of atmospheric nitrogen per hectare',
        'Leaves residual fertility in the soil benefiting succeeding crop cycles',
        'Significantly increases pod count and seed filling in pulse crops',
        'Enhances protein synthesis in grain legumes'
      ],
      suitableCrops: ['Gram (Chickpea)', 'Soybean', 'Arhar (Pigeon Pea)', 'Moong', 'Urad', 'Groundnut', 'Peas'],
      application: {
        seedTreatment: '10–15 ml / kg of seed uniformly coated with 10% jaggery solution, dried in shade for 30 minutes before immediate sowing.'
      },
      packaging: '500 ml, 1 Litre'
    },
    {
      id: 'consortia',
      category: 'bio-fertilizers',
      categoryName: 'Bio-Fertilizers',
      name: 'Consortia Bio-Fertilizer (N-P-K Synergy)',
      tagline: 'Complete tripartite biological consortium for comprehensive nutrient mobilization',
      overview: 'Phytolux Consortia combines compatible strains of Azotobacter/Azospirillum, PSB, and KSB in a single stabilized liquid fermentation matrix. Ensures simultaneous nitrogen fixation, phosphorus dissolution, and potassium mobilization without antagonism.',
      form: 'Stabilized Multi-Strain Liquid',
      composition: 'Total viable count min. 1 × 10⁸ CFU/ml (N-Fixers + P-Solubilizers + K-Mobilizers)',
      benefits: [
        'Comprehensive 3-in-1 nutritional bio-activation for all crop stages',
        'Saves up to 25–30% of total synthetic NPK chemical fertilizers',
        'Restores micro-ecological balance of intensive cultivation soils',
        'Simplifies field application with a single balanced formulation'
      ],
      suitableCrops: ['All Cereals', 'Pulses', 'Oilseeds', 'Vegetables', 'Fruits', 'Cash Crops'],
      application: {
        soilApplication: '1–2 Litres / acre via drip irrigation or flood irrigation blended with compost.',
        dripIrrigation: '1 Litre / acre at vegetative, early flowering, and fruit-set stages.'
      },
      packaging: '1 Litre, 5 Litres, 20 Litres'
    },
    {
      id: 'bio-zyme',
      category: 'bio-stimulants',
      categoryName: 'Bio-Stimulants',
      name: 'Phytolux Bio-Zyme Liquid',
      tagline: 'Cold-extracted marine algae bio-stimulant with natural plant vigor hormones',
      overview: 'Formulated from premium cold-water Ascophyllum nodosum brown marine algae, enriched with natural cytokinins, betaines, auxins, and trace amino complexes to overcome abiotic stress.',
      form: 'Soluble Concentrated Liquid',
      composition: 'Ascophyllum nodosum Seaweed Extract 18% w/w + Enzymatic Bio-Actives',
      benefits: [
        'Protects crops against drought, heat, cold, and transplant shock',
        'Significantly reduces flower and immature fruit shedding',
        'Enhances lateral root development and chlorophyll synthesis',
        'Improves uniform fruit sizing, weight, and market grade'
      ],
      suitableCrops: ['Cotton', 'Chilli', 'Tomato', 'Paddy', 'Watermelon', 'Pomegranate', 'Horticulture'],
      application: {
        foliarSpray: '2–2.5 ml / Litre of water at vegetative flush, pre-flowering, and fruit development.'
      },
      packaging: '250 ml, 500 ml, 1 Litre'
    },
    {
      id: 'humic-active',
      category: 'bio-stimulants',
      categoryName: 'Bio-Stimulants',
      name: 'Phytolux Humic Active 85%',
      tagline: 'High-purity potassium humate and fulvic acid soil conditioner',
      overview: 'Extracted from natural oxidized leonardite mineral deposits, containing 85% active humic matter and 15% bio-available fulvic acids.',
      form: 'Water Soluble Flakes / Liquid',
      composition: 'Potassium Humate 85% + Fulvic Acid min 12% + K2O 10%',
      benefits: [
        'Increases cation exchange capacity (CEC) of sandy and degraded soils',
        'Stimulates deep feeder root proliferation and micro-hair density',
        'Chelates soil micronutrients preventing fixation and leaching',
        'Enhances soil moisture retention capacity during dry spells'
      ],
      suitableCrops: ['All agricultural and horticultural crops'],
      application: {
        dripIrrigation: '500g – 1 kg / acre via drip or 1 Litre / acre liquid form.',
        foliarSpray: '1–1.5 g / Litre of water for vegetative recovery.'
      },
      packaging: '500g, 1 kg, 5 kg'
    },
    {
      id: 'vermi-power',
      category: 'organic-fertilizers',
      categoryName: 'Organic Fertilizers',
      name: 'Phytolux Vermi-Power Enriched Organic Input',
      tagline: 'Microbially stabilized vermicompost fortified with Trichoderma & Mycorrhiza',
      overview: 'Pure, scientifically matured vermicompost processed from organic agricultural residues, fortified with beneficial fungal biocontrol agents and endomycorrhizal spores.',
      form: 'Humus Rich Granular Organic Matter',
      composition: 'Organic Carbon min 14%, Total NPK 2.5–3.0%, C:N ratio < 18:1, moisture 15–20%',
      benefits: [
        'Restores depleted soil organic carbon (SOC) levels',
        'Provides sustained slow-release plant nutrition over entire crop lifecycle',
        'Improves soil tilth, aeration, and porosity in heavy clay soils',
        'Completely weed-seed free, pathogen-screened, and odorless'
      ],
      suitableCrops: ['Vegetables', 'Fruit Orchards', 'Protected Floriculture', 'Organic Farming'],
      application: {
        soilApplication: '200–500 kg / acre at final land preparation or basin application in orchards.'
      },
      packaging: '25 kg, 50 kg HDPE bags'
    },
    {
      id: 'chelated-zinc',
      category: 'micronutrients',
      categoryName: 'Micronutrients',
      name: 'Phytolux Chelated Zinc 12% (EDTA)',
      tagline: 'High bioavailability chelated zinc for instant correction of Khaira disease & stunted growth',
      overview: 'Pure 100% water-soluble EDTA chelated zinc designed for rapid foliar absorption and soil fertigation without precipitation.',
      form: 'Micro-Granular Soluble Powder',
      composition: 'Zinc as Zn-EDTA: 12.0% min (FCO 1985 compliant specifications)',
      benefits: [
        'Instantly corrects zinc deficiency (Khaira disease in paddy, white bud in maize)',
        'Crucial for synthesis of tryptophan, the precursor to natural plant auxin',
        'Non-scorching to tender foliage even at sensitive flowering stages',
        'Remains stable in a wide soil pH range (pH 4.0 to 9.0)'
      ],
      suitableCrops: ['Paddy', 'Maize', 'Wheat', 'Sugarcane', 'Cotton', 'Citrus', 'Tomato'],
      application: {
        foliarSpray: '1.0 g / Litre of water at early vegetative stage.',
        dripIrrigation: '500 g – 1 kg / acre based on soil test report.'
      },
      packaging: '250g, 500g, 1 kg'
    },
    {
      id: 'boron-20',
      category: 'micronutrients',
      categoryName: 'Micronutrients',
      name: 'Phytolux Boron 20%',
      tagline: 'Disodium octaborate tetrahydrate for fruit setting, pollination and sugar translocation',
      overview: 'High-purity soluble boron essential for pollen tube germination, cell division in growing meristems, and translocation of sugars.',
      form: 'Water Soluble Fine Powder',
      composition: 'Boron (as B): 20.0% min (Water-soluble FCO standard)',
      benefits: [
        'Prevents blossom drop and enhances successful pollination and fruit set',
        'Prevents internal fruit browning, hollow heart, and fruit cracking in watermelon & tomato',
        'Assists calcium uptake and cell wall structural integrity',
        'Improves uniform seed filling in sunflower, mustard, and pulses'
      ],
      suitableCrops: ['Tomato', 'Chilli', 'Watermelon', 'Cauliflower', 'Mustard', 'Cotton', 'Pulses'],
      application: {
        foliarSpray: '1.0–1.25 g / Litre of water before flowering and after fruit set.'
      },
      packaging: '250g, 500g, 1 kg'
    },
    {
      id: 'soil-regen',
      category: 'soil-management',
      categoryName: 'Soil Management',
      name: 'Phytolux Soil-ReGen Microbial Conditioner',
      tagline: 'Biological soil rejuvenator for salinity buffering and hardpan alleviation',
      overview: 'Advanced consortia of soil microbial probiotics, organic humic polymers, and calcium carriers developed specifically to detoxify compacted soils, buffer excess salts, and restore rhizosphere biological equilibrium.',
      form: 'Granular Soil Inoculant',
      composition: 'Beneficial Soil Microbes min 1 × 10⁷ CFU/g + Organic Marine Extract + Calcium Complex',
      benefits: [
        'Disperses compacted plow pans and improves root penetration depth',
        'Buffers sodium salinity stress in canal-irrigated and borewell soils',
        'Stimulates earthworm activity and aerobic soil flora',
        'Prevents crust formation on topsoil following heavy irrigation or rain'
      ],
      suitableCrops: ['Sugarcane', 'Cotton', 'Paddy', 'Potato', 'Vegetables', 'Fruit Orchards'],
      application: {
        soilApplication: '4–8 kg / acre broadcasted evenly during field preparation or first inter-culture.'
      },
      packaging: '4 kg bucket, 10 kg bag'
    }
  ],

  cropSolutions: {
    cereals: [
      {
        id: 'paddy',
        name: 'Paddy (Rice)',
        icon: '🌾',
        category: 'Cereals',
        challenges: [
          'High fixation and leaching loss of phosphorus under flooded anaerobic conditions',
          'Poor tiller emergence and weak root anchorage in puddled soil',
          'Nitrogen volatilization losses from urea applications',
          'Zinc deficiency causing rusty-brown leaf patches (Khaira disease)'
        ],
        products: [
          { id: 'psb', name: 'PSB Liquid', role: 'Phosphorus Solubilizer' },
          { id: 'azospirillum', name: 'Azospirillum', role: 'Associative N-Fixation' },
          { id: 'chelated-zinc', name: 'Chelated Zinc 12%', role: 'Khaira Prevention' }
        ],
        applicationSchedule: [
          { stage: 'Seedling Nursery (1-2 days before pulling)', method: 'Root dip in 250ml Azospirillum + 250ml PSB in 30L water' },
          { stage: 'Early Tillering (15-20 DAT)', method: '1L Consortia + 500g Chelated Zinc/acre via flood or basal application' },
          { stage: 'Panicle Initiation', method: 'Foliar spray with Phytolux Bio-Zyme at 2ml/L to enhance grain filling' }
        ]
      },
      {
        id: 'wheat',
        name: 'Wheat',
        icon: '🌾',
        category: 'Cereals',
        challenges: [
          'Low soil temperature limiting early phosphorus and microbial mobilization',
          'Poor crown root development reducing plant anchorage and tillering',
          'Terminal heat stress during grain filling causing shriveled grains'
        ],
        products: [
          { id: 'azotobacter', name: 'Azotobacter', role: 'Free-Living N-Fixer' },
          { id: 'psb', name: 'PSB Bio-Fertilizer', role: 'Crown Root Nutrition' },
          { id: 'boron-20', name: 'Boron 20%', role: 'Pollen Viability & Grain Weight' }
        ],
        applicationSchedule: [
          { stage: 'Sowing Seed Treatment', method: '10ml Azotobacter + 10ml PSB per kg of wheat seed' },
          { stage: 'First Irrigation (CRI Stage, 21 DAS)', method: '1L Consortia per acre mixed with irrigation water' },
          { stage: 'Boot Leaf to Heading', method: 'Foliar spray with Boron 20% (1g/L) for complete grain set' }
        ]
      },
      {
        id: 'maize',
        name: 'Maize (Corn)',
        icon: '🌽',
        category: 'Cereals',
        challenges: [
          'Heavy nutrient consumer requiring rapid early vegetative uptake',
          'Severe white-bud symptom from early zinc deficiency',
          'Poor cob tip filling under moisture and potassium stress'
        ],
        products: [
          { id: 'consortia', name: 'Consortia Bio-Fertilizer', role: 'Tripartite NPK Balance' },
          { id: 'chelated-zinc', name: 'Chelated Zinc 12%', role: 'White Bud Prevention' },
          { id: 'ksb', name: 'KSB Potash Mobilizer', role: 'Cob Filling & Girth' }
        ],
        applicationSchedule: [
          { stage: 'Seed Inoculation', method: '10ml/kg seed treatment with Consortia Bio-Fertilizer' },
          { stage: 'Knee-High Stage (30 DAS)', method: 'Chelated Zinc (1g/L) foliar spray + 1L KSB/acre soil application' },
          { stage: 'Tasseling & Silking', method: 'Foliar Bio-Zyme (2ml/L) to prevent cob abortion' }
        ]
      }
    ],

    pulses: [
      {
        id: 'gram',
        name: 'Gram (Chickpea)',
        icon: '🌱',
        category: 'Pulses',
        challenges: [
          'Weak root nodulation in residual moisture and dry soils',
          'Root rot and wilt complexes in early vegetative phase',
          'Premature flower drop and reduced pod count under winter temperature fluctuations'
        ],
        products: [
          { id: 'rhizobium', name: 'Rhizobium (Cicer)', role: 'Specific Symbiotic N-Fixation' },
          { id: 'psb', name: 'PSB Bio-Fertilizer', role: 'Root Nodule Phosphorus' },
          { id: 'boron-20', name: 'Boron 20%', role: 'Flower Retention & Pod Filling' }
        ],
        applicationSchedule: [
          { stage: 'Pre-Sowing Seed Treatment', method: '10ml Rhizobium + 10ml PSB/kg seed in 10% jaggery solution' },
          { stage: 'Branching Phase (25-30 DAS)', method: 'Humic Active (1g/L) foliar spray for root system expansion' },
          { stage: 'Pre-Flowering', method: 'Boron 20% (1g/L) + Bio-Zyme (2ml/L) for maximum pod set' }
        ]
      },
      {
        id: 'soybean',
        name: 'Soybean',
        icon: '🫘',
        category: 'Pulses',
        challenges: [
          'Slow early nodule initiation in continuous soybean cropped fields',
          'Interveinal chlorosis and yellowing due to micronutrient imbalances',
          'Poor oil synthesis and small seed weight under late-season moisture stress'
        ],
        products: [
          { id: 'rhizobium', name: 'Rhizobium japonicum', role: 'Soybean-Specific Inoculant' },
          { id: 'ksb', name: 'KSB Potash Mobilizer', role: 'Seed Boldness & Oil Content' },
          { id: 'bio-zyme', name: 'Bio-Zyme Liquid', role: 'Abiotic Stress Shield' }
        ],
        applicationSchedule: [
          { stage: 'Seed Inoculation', method: '10ml/kg seed treatment 1-2 hours before sowing' },
          { stage: 'Vegetative (30-35 DAS)', method: '1L KSB/acre soil applied with inter-cultivation' },
          { stage: 'Pod Formation', method: 'Bio-Zyme (2.5ml/L) foliar spray for seed boldness' }
        ]
      },
      {
        id: 'other-pulses',
        name: 'Other Pulses (Arhar, Moong, Urad)',
        icon: '🌿',
        category: 'Pulses',
        challenges: [
          'Short crop window requiring rapid vegetative-to-reproductive shift',
          'Nodule senescence under waterlogging or extended dry spells',
          'High percentage of unfertilized or aborted pods'
        ],
        products: [
          { id: 'consortia', name: 'Consortia Bio-Fertilizer', role: 'Balanced Biological NPK' },
          { id: 'boron-20', name: 'Boron 20%', role: 'Pollen Viability' }
        ],
        applicationSchedule: [
          { stage: 'Seed Coating', method: 'Consortia seed slurry treatment (10ml/kg)' },
          { stage: 'Flowering Initiation', method: 'Boron 20% (1g/L) foliar spray' }
        ]
      }
    ],

    vegetables: [
      {
        id: 'tomato',
        name: 'Tomato',
        icon: '🍅',
        category: 'Vegetables',
        challenges: [
          'Severe transplanting root shock in open field and polyhouse',
          'Blossom end rot and flower drop under erratic temperatures',
          'Heavy calcium and potassium exhaustion during continuous picking'
        ],
        products: [
          { id: 'ksb', name: 'KSB Liquid', role: 'Fruit Firmness & Brix' },
          { id: 'psb', name: 'PSB Liquid', role: 'Root Depth & Feeder Roots' },
          { id: 'bio-zyme', name: 'Bio-Zyme', role: 'Flower Retention & Uniform Sizing' }
        ],
        applicationSchedule: [
          { stage: 'Transplant Root Dip', method: '10ml PSB + 10ml Bio-Zyme per Litre water for 20 mins' },
          { stage: 'Active Vegetative (15 DAT)', method: '1L Consortia/acre via drip irrigation' },
          { stage: 'Fruiting & Picking (Every 15-20 days)', method: '1L KSB/acre drip + Bio-Zyme (2ml/L) foliar' }
        ]
      },
      {
        id: 'chilli',
        name: 'Chilli',
        icon: '🌶️',
        category: 'Vegetables',
        challenges: [
          'Leaf curl and virus vulnerability driven by environmental stress',
          'Massive flower shedding under high temperatures',
          'Color fading and low capsaicin development'
        ],
        products: [
          { id: 'consortia', name: 'Consortia Bio-Fertilizer', role: 'Continuous Nutrient Release' },
          { id: 'humic-active', name: 'Humic Active 85%', role: 'Root Zone Bio-Buffer' },
          { id: 'boron-20', name: 'Boron 20%', role: 'Pollen Setting' }
        ],
        applicationSchedule: [
          { stage: 'Seedling Establishment', method: 'Drip application of Humic Active (500g/acre)' },
          { stage: 'Pre-Flowering', method: 'Boron 20% (1g/L) + Bio-Zyme (2ml/L) foliar spray' },
          { stage: 'Peak Flush', method: '1L Consortia + 1L KSB/acre monthly drip schedule' }
        ]
      },
      {
        id: 'cucumber',
        name: 'Cucumber',
        icon: '🥒',
        category: 'Vegetables',
        challenges: [
          'Low ratio of female flowers leading to reduced yield',
          'Rapid root senescence in hot plastic mulches',
          'Fruit curvature and bitter end development from water-nutrient stress'
        ],
        products: [
          { id: 'bio-zyme', name: 'Bio-Zyme Liquid', role: 'Female Flower Induction' },
          { id: 'soil-regen', name: 'Soil-ReGen', role: 'Salinity & Root Buffer' }
        ],
        applicationSchedule: [
          { stage: 'Bed Preparation', method: 'Soil-ReGen (4kg/acre) broadcasted into bed soil' },
          { stage: '5-6 Leaf Stage', method: 'Bio-Zyme (2.5ml/L) foliar to enhance female flower count' }
        ]
      },
      {
        id: 'cauliflower',
        name: 'Cauliflower & Cabbage',
        icon: '🥦',
        category: 'Vegetables',
        challenges: [
          'Boron deficiency causing brown curd rot and hollow stem disorders',
          'Whiptail and stunted vegetative frame in acidic or alkaline soils',
          'Loose curd/head formation reducing market grade'
        ],
        products: [
          { id: 'boron-20', name: 'Boron 20%', role: 'Hollow Stem & Browning Prevention' },
          { id: 'consortia', name: 'Consortia Bio-Fertilizer', role: 'Dense Curd Formation' }
        ],
        applicationSchedule: [
          { stage: 'Early Vegetative', method: '1L Consortia/acre root drenching or drip' },
          { stage: 'Curd Initiation (Button Stage)', method: 'Boron 20% (1.25g/L) foliar spray' }
        ]
      },
      {
        id: 'okra',
        name: 'Okra (Bhindi)',
        icon: '🌱',
        category: 'Vegetables',
        challenges: [
          'Short picking cycles causing rapid soil fatigue',
          'Yellow vein mosaic susceptibility under stress conditions',
          'Fibrous, oversized pods from erratic nutrient uptake'
        ],
        products: [
          { id: 'consortia', name: 'Consortia Bio-Fertilizer', role: 'Nutrient Longevity' },
          { id: 'bio-zyme', name: 'Bio-Zyme', role: 'Tender Pod Development' }
        ],
        applicationSchedule: [
          { stage: 'Sowing Treatment', method: 'Consortia seed coating (10ml/kg)' },
          { stage: 'Harvest Phase', method: 'Bio-Zyme foliar every 12 days after alternate pickings' }
        ]
      }
    ],

    fruits: [
      {
        id: 'watermelon',
        name: 'Watermelon & Muskmelon',
        icon: '🍉',
        category: 'Fruits & Horticulture',
        challenges: [
          'Fruit cracking and rind burst during sudden irrigation or rain',
          'Low total soluble solids (Brix / sweetness) and pale flesh color',
          'Root-knot nematode and Fusarium wilt pressure in continuous vine soil'
        ],
        products: [
          { id: 'ksb', name: 'KSB Potash Mobilizer', role: 'Brix & Sugar Accumulation' },
          { id: 'boron-20', name: 'Boron 20%', role: 'Fruit Wall Elasticity & Anti-Crack' },
          { id: 'soil-regen', name: 'Soil-ReGen', role: 'Sub-Surface Soil Vitality' }
        ],
        applicationSchedule: [
          { stage: 'Bed Preparation', method: 'Soil-ReGen 4kg/acre blended with manure' },
          { stage: 'Fruit Setting (Lemon Size)', method: 'Boron 20% (1g/L) foliar spray to prevent rind cracking' },
          { stage: 'Sizing to Ripening', method: '1.5L KSB/acre weekly drip fertigation for high sweetness' }
        ]
      },
      {
        id: 'fruits-orchard',
        name: 'Fruit Orchards (Pomegranate, Citrus, Mango, Guava)',
        icon: '🍊',
        category: 'Fruits & Horticulture',
        challenges: [
          'Heavy premature fruit drop during fruit set and sudden weather shifts',
          'Soil compaction and root suffocation beneath drip emitter zones',
          'Inconsistent fruit grading, skin blemishes, and low sugar development'
        ],
        products: [
          { id: 'consortia', name: 'Consortia Bio-Fertilizer', role: 'Continuous Tree Nutrition' },
          { id: 'ksb', name: 'KSB Potash Mobilizer', role: 'Fruit Sizing & Coloration' },
          { id: 'bio-zyme', name: 'Bio-Zyme Liquid', role: 'Anti-Abscission Fruit Retention' }
        ],
        applicationSchedule: [
          { stage: 'Bahar Rest / Initiation', method: '2L Consortia + 1kg Humic Active per acre basin drench' },
          { stage: 'Post-Bloom Set', method: 'Bio-Zyme (2ml/L) + Boron (1g/L) foliar spray' },
          { stage: 'Color Break to Maturity', method: '2L KSB/acre through drip system' }
        ]
      },
      {
        id: 'horticultural-crops',
        name: 'Protected Horticultural Crops (Polyhouse / Floriculture)',
        icon: '🌺',
        category: 'Fruits & Horticulture',
        challenges: [
          'Accumulation of chemical fertilizer salts (EC spike) in media',
          'Depleted natural microflora in sterilized or coco-peat substrates',
          'High demand for pure, non-precipitating biological inputs'
        ],
        products: [
          { id: 'consortia', name: 'Consortia Bio-Fertilizer', role: 'Substrate Bio-Restoration' },
          { id: 'humic-active', name: 'Humic Active 85%', role: 'Salinity Buffer' }
        ],
        applicationSchedule: [
          { stage: 'Substrate Priming', method: '1L Consortia + 500g Humic Active per 1000 sq. meters' },
          { stage: 'Weekly Fertigation Cycle', method: 'Continuous low-dose biological drenching' }
        ]
      }
    ]
  },

  resources: [
    {
      id: 'res-brochure',
      type: 'Product Brochure',
      format: 'PDF Catalog (2026)',
      title: 'Phytolux Comprehensive Agricultural Solutions Catalogue',
      description: 'Complete 32-page technical guide covering Bio-Fertilizers, Bio-Stimulants, Micronutrients, verified compositions, and crop dosage charts.',
      fileSize: '4.8 MB',
      downloadUrl: '#download-brochure'
    },
    {
      id: 'res-tds-psb',
      type: 'Technical Data Sheet',
      format: 'Official TDS',
      title: 'Technical Data Sheet: Phytolux PSB Bacterial Inoculant',
      description: 'Laboratory verified microbiological specifications, strain identities, CFU viability guarantees, carrier purity, and FCO parameters.',
      fileSize: '1.2 MB',
      downloadUrl: '#download-psb-tds'
    },
    {
      id: 'res-dosage-guide',
      type: 'Application Guide',
      format: 'Printable Chart',
      title: 'All-Crop Bio-Fertilizer Application & Compatibility Protocol',
      description: 'Comprehensive chart detailing seed treatment, soil broadcasting, drip fertigation rates, and safe tank-mix guidelines with other farm inputs.',
      fileSize: '2.1 MB',
      downloadUrl: '#download-dosage-guide'
    },
    {
      id: 'res-soil-health',
      type: 'Crop Guide',
      format: 'Field Advisory',
      title: 'Sustainable Soil Biology Management Manual for Indian Farmers',
      description: 'Practical field manual explaining methods to restore soil organic carbon, buffer soil salinity, and lower cultivation costs using bio-inputs.',
      fileSize: '3.4 MB',
      downloadUrl: '#download-soil-manual'
    }
  ],

  faqs: [
    {
      question: 'What are bio-fertilizers and how do they differ from chemical fertilizers?',
      answer: 'Bio-fertilizers are scientifically cultured preparations of living beneficial microorganisms (like PSB, KSB, Azotobacter, Rhizobium). Unlike chemical fertilizers that directly supply synthetic mineral salts (which can leach or fix into soil), bio-fertilizers biologically convert atmospheric nitrogen into usable forms and unlock locked soil minerals (phosphorus, potassium) through natural enzymatic processes, permanently enhancing soil organic fertility and crop resilience.'
    },
    {
      question: 'Can Phytolux bio-fertilizers be used alongside conventional farm inputs?',
      answer: 'Yes! Phytolux bio-fertilizers complement standard nutrient management practices. While they should not be mixed directly in the same tank with concentrated chemical bactericides or concentrated copper fungicides, they can be applied via soil, drip, or seed coating within recommended windows. Over 1–2 cropping seasons, farmers using Phytolux products routinely reduce synthetic chemical fertilizer costs by 20–30% while harvesting higher quality produce.'
    },
    {
      question: 'What is the CFU count and why is it critical for product efficacy?',
      answer: 'CFU stands for Colony Forming Units—the verified number of viable, living bacterial cells per milliliter or gram of product. The Government of India’s Fertilizer Control Order (FCO 1985) mandates strict minimum CFU thresholds (min 1 × 10⁸ CFU/ml for liquids). Phytolux products are manufactured in sterile bio-fermenters and batch-tested to exceed standard viability counts, guaranteeing live, active bacteria when applied in the field.'
    },
    {
      question: 'How do I become an authorized Phytolux dealer or distributor?',
      answer: 'Agricultural retailers, wholesalers, FPOs (Farmer Producer Organizations), and input distributors can submit their credentials via our Dealer & Distributor section. Our regional channel development team provides protected territory allocation, marketing and field demonstration support, product training, and competitive dealer margins.'
    },
    {
      question: 'How does the Farmer WhatsApp Agronomy Helpline work?',
      answer: 'Farmers can click the WhatsApp button anywhere on our website or submit our Farmer Enquiry form. A dedicated regional agronomist will review your crop photos, soil condition, and issues, providing free customized product and dosage guidance directly on WhatsApp in your regional language.'
    }
  ],

  articles: [
    {
      title: 'Unlocking Fixed Soil Phosphorus: The Science Behind PSB Inoculation',
      category: 'Soil Science',
      date: 'March 2026',
      readTime: '4 min read',
      snippet: 'Learn how organic acid secretion by Bacillus megaterium converts non-exchangeable tricalcium phosphates into plant-available monocalcium orthophosphates.'
    },
    {
      title: 'Mitigating Heat and Moisture Stress in Summer Crops with Marine Bio-Stimulants',
      category: 'Crop Physiology',
      date: 'February 2026',
      readTime: '5 min read',
      snippet: 'Scientific evaluation of glycine betaine and cytokinin pathways in cold-water Ascophyllum nodosum algae for protecting flowers and fruit sets.'
    },
    {
      title: 'Biological Potassium Mobilization: Boosting Grain Weight Without Excess Potash Costs',
      category: 'Nutrient Efficiency',
      date: 'January 2026',
      readTime: '4 min read',
      snippet: 'How Frateuria aurantia solubilizes potassium trapped in mica and feldspar clay lattices for improved grain luster and higher test weight.'
    }
  ]
};

// Export to window
window.PHYTOLUX_DATA = PHYTOLUX_DATA;
