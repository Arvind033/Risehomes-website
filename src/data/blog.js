export const blogCategories = ['All', 'Construction', 'Interiors', 'Planning & Budget']

export const blogContent = {
  eyebrow: 'The Rise Homes Journal',
  title: 'Ideas for building better.',
  description: 'Practical guidance on construction, interiors and the decisions that shape a home\u2014from early planning to the finishing details.',
  contact: {
    title: 'Planning a home of your own?',
    description: 'Tell us what you have in mind. We can help you explore the next steps for construction or interiors.',
  },
}

export const blogArticles = [
  {
    slug: 'before-you-build-a-home-in-bengaluru',
    title: 'Before You Build a Home in Bengaluru: What to Plan First',
    category: 'Construction',
    readingMinutes: 6,
    featured: true,
    image: 'house',
    summary: 'A practical starting point for thinking through your plot, requirements, budget, approvals and construction scope before work begins.',
    introduction: 'A home begins long before the first excavation. The early decisions about your site, the way you live and what you can comfortably commit to will shape almost every decision that follows. In Bengaluru, where site conditions and the authority responsible for a property can vary, it is especially useful to establish the basics before comparing designs or construction proposals.',
    sections: [
      {
        id: 'understand-the-plot',
        title: 'Start with the plot, not the floor plan',
        paragraphs: [
          'Gather the available property documents and have a qualified property lawyer review ownership, title and any restrictions relevant to the site. A tax record or a seller\'s description should not be treated as a complete legal assessment. Ask what remains to be verified and keep a written record of the advice before making commitments based on the plot.',
          'Arrange a measured site survey rather than relying only on dimensions in a brochure. Boundaries, road levels, access, neighbouring structures, slopes and existing trees can affect what is practical to build. Ask the architect and structural engineer what investigations are needed, including a site-appropriate ground assessment. These observations inform the design; they are not details to resolve after foundations have been priced.',
        ],
      },
      {
        id: 'write-a-brief',
        title: 'Describe everyday life before listing rooms',
        paragraphs: [
          'Write a short household brief. Who will use the home now, and how might that change? Include working from home, visiting family, storage, cooking habits, parking and any need for step-free access. A list of room names says less than a description of what each room must accommodate. Note which activities happen at the same time and which need privacy.',
          'Separate essentials from preferences. For example, a comfortable ground-floor bedroom may be essential, while an additional balcony may be flexible. Collect a small set of reference images and write down what you like about each: daylight, privacy, a material or the relationship between rooms. This helps avoid copying a look that does not suit your plot or routines.',
        ],
      },
      {
        id: 'check-feasibility',
        title: 'Check feasibility and approvals early',
        paragraphs: [
          'Ask your architect to identify the planning authority and current requirements applicable to the specific property. Permitted use, setbacks, height, buildable area, parking and other conditions depend on the site and applicable rules. Do not assume that a neighbouring building, an online example or an old approval establishes what you can build today.',
          'Make a simple approvals register: what is needed, who prepares it, who submits it and what must be in place before each stage starts. Confirm any applicable completion or occupancy requirements as well. Keep approved drawings and later revisions organised. A contractor\'s readiness to mobilise is not a substitute for obtaining the permissions required for your project.',
        ],
      },
      {
        id: 'set-a-complete-budget',
        title: 'Build a budget around the whole project',
        paragraphs: [
          'Look beyond the building shell. Allow for professional services, investigations, applicable approval costs, site preparation, structure, finishes, building services, interiors and external works. Clarify how taxes, utility connections, temporary arrangements and any finance-related costs are treated. Keep land acquisition separate if you want to compare the cost of construction itself.',
          'Agree a contingency allowance based on the uncertainties in your site and brief rather than treating every available rupee as a spending target. Keep this distinct from upgrades you already want. Compare proposals against a common scope and specification: a lower total may simply omit work that another proposal includes. Ask how variations will be priced and authorised.',
        ],
      },
      {
        id: 'coordinate-services',
        title: 'Think about water, power and interiors together',
        paragraphs: [
          'Discuss the available water supply, drainage, electrical connection and access for construction deliveries with the relevant professionals and service providers. Consider where tanks, pumps, meters and maintenance access might sit. Do not assume that a connection exists or has enough capacity just because neighbouring properties have one.',
          'Even if detailed interiors come later, early furniture layouts help locate doors, windows, sockets, plumbing and lighting. Identify likely appliance positions and storage needs before structural and service drawings are finalised. Keep decisions that affect waterproofing, ventilation or structure within the coordinated design process, rather than leaving each trade to make independent choices on site.',
        ],
      },
      {
        id: 'agree-the-next-step',
        title: 'Make responsibilities and decisions visible',
        paragraphs: [
          'Before committing to construction, agree the scope, exclusions, drawing set, material specifications, payment milestones and process for checking completed work. Ask who coordinates design questions and who is authorised to approve a change. A short decision log with an owner and a needed-by date is more useful than scattered messages that different people interpret differently.',
          'Base the programme on the actual design, approvals, site constraints and procurement needs. Identify decisions needed early, such as windows or service layouts, without turning an initial programme into a guaranteed completion promise. Your first useful milestone is a shared understanding of what will be built, what remains uncertain and how those uncertainties will be resolved.',
        ],
      },
    ],
    takeaway: 'Before asking for a detailed construction proposal, bring these essentials into one place.',
    checklist: [
      'Property review, measured site information and a list of unresolved checks.',
      'A household brief with essential needs separated from optional features.',
      'An approvals plan confirmed for the specific site by the appropriate professionals.',
      'A whole-project budget, contingency and clearly stated scope exclusions.',
      'Named responsibilities for design coordination, decisions and change approval.',
    ],
  },
  {
    slug: 'understanding-the-stages-of-home-construction',
    title: 'Understanding the Stages of Home Construction',
    category: 'Construction',
    readingMinutes: 4,
    image: 'hero',
    summary: 'From the first site checks to handover, understand the sequence of work and the decisions that keep each stage connected.',
    introduction: 'Construction is a coordinated sequence, not a collection of independent jobs. Understanding the stages helps you ask better questions, make decisions at the right time and know what should be checked before work is covered up. The exact sequence depends on the design and construction method, so use this as an overview to discuss with your project team.',
    sections: [
      {
        id: 'brief-and-design',
        title: 'Define, design and coordinate',
        paragraphs: [
          'The starting point is a clear brief, site information and a feasible design. Architectural layouts, structural requirements and building services need to be considered together. A pleasing floor plan is not, by itself, a complete set of instructions for construction.',
          'Agree the required approvals, scope, specifications and drawing responsibilities before work starts. Ask which drawings are issued for construction and how revisions will reach the people on site. Using superseded drawings can create avoidable conflicts between work already completed and work still to come.',
        ],
      },
      {
        id: 'site-and-foundations',
        title: 'Prepare the site and establish the foundations',
        paragraphs: [
          'Site preparation includes access, setting out, temporary services and arrangements to protect workers, neighbours and the public. Excavation and foundation design must respond to the ground conditions and engineered design. They should not be selected by copying another nearby house.',
          'Agree inspection points with the structural engineer before critical work is concealed or concrete is placed. Keep the specified inspection and material records. As a homeowner, your role is to confirm that qualified supervision and checks are arranged, not to make structural decisions from photographs.',
        ],
      },
      {
        id: 'structure-and-enclosure',
        title: 'Build the structure and weather enclosure',
        paragraphs: [
          'The structural system, walls, roof and openings establish the shape of the home. Coordinate door and window sizes, service routes and level changes against the approved drawings before work reaches the point where an adjustment would require demolition.',
          'Weather protection deserves deliberate attention at roofs, terraces, external walls and openings. Discuss waterproofing details and the specified checks with the team. Concealing work quickly is not the same as completing it correctly; inspections and any necessary testing should happen at the appropriate stage.',
        ],
      },
      {
        id: 'services-and-finishes',
        title: 'Coordinate services before closing surfaces',
        paragraphs: [
          'Plumbing and electrical work need to align with furniture, appliances, sanitary fittings and ceiling layouts. Confirm positions on coordinated drawings and review them on site with the responsible professionals before plaster, tiling or joinery limits access.',
          'Finishes then bring together flooring, painting, fittings and interior elements. Follow the specified preparation, drying and curing requirements rather than compressing every activity into the same space. Record approved samples and protect completed work while other trades are still operating.',
        ],
      },
      {
        id: 'testing-and-handover',
        title: 'Check, document and hand over',
        paragraphs: [
          'Before handover, walk through the home with a written snag list. Check accessible doors, windows, fittings and finishes, and ask the appropriate professionals to complete the required service testing. Assign each outstanding item an owner and record its agreed resolution.',
          'Collect relevant approvals, as-built information where provided, product manuals, supplier warranties and maintenance instructions. Confirm any applicable completion or occupancy process with the project professionals. Handover should leave you knowing how the home operates and whom to contact about unresolved items.',
        ],
      },
    ],
    takeaway: 'At every stage, ask what must be decided, checked and recorded before the next stage begins.',
    checklist: [
      'Work from the current coordinated drawings and an agreed scope.',
      'Identify inspection points before important work is concealed.',
      'Confirm service positions before finishes and interiors begin.',
      'Keep a snag list and collect operating and maintenance documents.',
    ],
  },
  {
    slug: 'how-to-plan-a-home-construction-budget',
    title: 'How to Plan a Home Construction Budget',
    category: 'Planning & Budget',
    readingMinutes: 4,
    image: 'house',
    summary: 'Build a clearer budget with defined scope, comparable proposals, a contingency allowance and a practical way to track decisions.',
    introduction: 'A useful construction budget is a decision-making tool, not just a total at the bottom of a quotation. It connects what you want to build with what is included, what remains uncertain and when money will be needed. Start with a complete picture before choosing finishes or comparing headline prices.',
    sections: [
      {
        id: 'define-the-boundary',
        title: 'Decide what your budget must cover',
        paragraphs: [
          'Write down the boundary of the project. Are you budgeting for construction alone, or also for land, design services, approvals, interiors, appliances and external works? Keep these headings separate so that nothing quietly disappears when you compare proposals.',
          'Think about costs outside the visible finished home: investigations, site access, temporary services, utility connections, applicable taxes and fees, and any accommodation or storage arrangements during the work. Confirm relevance and amounts with the appropriate providers rather than assuming these are included in a contractor\'s total.',
        ],
      },
      {
        id: 'work-from-scope',
        title: 'Connect the estimate to drawings and specifications',
        paragraphs: [
          'An estimate becomes more useful as the design and specifications become clearer. Ask what information a proposal is based on, what quantities are assumed and which items are allowances rather than firm selections. Record the proposal date and any stated validity conditions.',
          'A rate per unit of area can be a starting comparison, but it does not explain differences in site conditions, structure, materials or inclusions. Ask how the area is measured and what is excluded. Review the scope with your designer or quantity-surveying professional before treating two totals as directly comparable.',
        ],
      },
      {
        id: 'separate-contingency',
        title: 'Keep contingency separate from optional upgrades',
        paragraphs: [
          'Set aside an allowance for uncertainty with advice from your project team. Its size should reflect the maturity of the design, site knowledge and remaining risks, rather than a universal percentage copied from another project. Keep a note of what the allowance is intended to address.',
          'Planned upgrades are different from unforeseen work. Put wish-list items in a separate column and decide what can be reduced, deferred or removed if necessary. Do not spend the contingency twice by counting it both as a risk reserve and as money available for extra finishes.',
        ],
      },
      {
        id: 'plan-cash-flow',
        title: 'Understand when payments will be needed',
        paragraphs: [
          'Map the expected payment stages to the agreed scope and verification process. Include advance orders and professional fees where relevant. A project can appear affordable in total while creating difficulty if several payments fall due before funds are available.',
          'Where borrowing is involved, confirm eligibility, disbursement conditions and charges directly with the lender. Align the construction payment plan with confirmed arrangements rather than assumed approval dates. Keep an accessible record of invoices, receipts and what each payment covers.',
        ],
      },
      {
        id: 'track-changes',
        title: 'Give every change a visible cost consequence',
        paragraphs: [
          'Maintain a simple budget tracker with the original allowance, committed amount, paid amount and forecast remaining cost for each heading. Update it as selections and quotations become firm. This is more informative than recording payments alone, which does not show obligations still ahead.',
          'Before approving a change, request its scope, price and programme effect in writing. Check whether it affects another trade, such as a revised kitchen layout changing electrical or plumbing work. A small-looking design change can have several connected costs that are easier to assess before work proceeds.',
        ],
      },
    ],
    takeaway: 'A clear budget makes assumptions visible and gives you a consistent basis for choosing between options.',
    checklist: [
      'List all project cost headings and explicit exclusions.',
      'Compare proposals using the same drawings and specifications.',
      'Separate contingency, committed costs and optional upgrades.',
      'Track future commitments as well as completed payments.',
      'Approve the cost and scope of changes before work starts.',
    ],
  },
  {
    slug: 'choosing-materials-for-a-practical-long-lasting-home',
    title: 'Choosing Materials for a Practical, Long-Lasting Home',
    category: 'Planning & Budget',
    readingMinutes: 4,
    image: 'details',
    summary: 'Look beyond a sample\'s appearance to suitability, installation, maintenance and the everyday conditions a material will face.',
    introduction: 'A material that looks beautiful in a photograph may not be right for every room or household. A practical selection considers where it will be used, how it will be installed and what it takes to maintain. The goal is not to find one perfect material for the whole home, but to make deliberate choices for each situation.',
    sections: [
      {
        id: 'match-the-use',
        title: 'Begin with the conditions of use',
        paragraphs: [
          'Describe what the surface or component will experience: water, sunlight, heat, heavy foot traffic, cleaning products or frequent handling. Entrance flooring, a shower area and a bedroom cabinet face different demands. Ask suppliers for product information relevant to the actual use, not just a display label.',
          'Structural and safety-critical materials must follow the project specifications and professional design. Do not substitute them based on appearance or price alone. For finishes, discuss the properties that matter in the location, such as appropriate slip resistance, moisture performance or compatibility with the supporting surface.',
        ],
      },
      {
        id: 'review-real-samples',
        title: 'See samples in the space they will belong to',
        paragraphs: [
          'Review samples under daylight and the lighting planned for the room. Place neighbouring materials together: flooring beside a cabinet finish, or a wall colour beside the intended worktop. Screen images and isolated showroom displays can hide differences in colour, texture and reflectivity.',
          'For materials with natural variation, ask what range is normal and how it is handled during selection and installation. Confirm the exact product, finish, size and batch information where relevant. Keep an approved sample or a clearly identified record so that ordering and site decisions have a common reference.',
        ],
      },
      {
        id: 'consider-installation',
        title: 'Treat installation as part of the material choice',
        paragraphs: [
          'The substrate, preparation, adhesives, joints and edge details can be as important as the visible surface. Ask the designer, installer and supplier to confirm a compatible system and the manufacturer\'s installation requirements. A more expensive finish does not compensate for unsuitable preparation.',
          'Review transitions between materials and access for future maintenance before ordering. In wet areas, a finish should not be treated as a substitute for a properly designed waterproofing system. Agree any required tests and inspections before the work is covered or the space is put into use.',
        ],
      },
      {
        id: 'look-at-upkeep',
        title: 'Be realistic about care and repair',
        paragraphs: [
          'Ask how the material is cleaned, whether any periodic treatment is required and what products should be avoided. Match the care routine to the household rather than choosing a surface whose upkeep will be frustrating. Request written care instructions instead of relying on a general claim that something is maintenance-free.',
          'Consider whether a damaged piece, fitting or component can be replaced. Check availability of compatible spares and discuss an appropriate spare-material allowance with the team. Retain product identification and supplier details so that a future repair does not begin with trying to identify an unknown finish.',
        ],
      },
      {
        id: 'compare-complete-cost',
        title: 'Compare the complete installed choice',
        paragraphs: [
          'Compare supply, transport, preparation, installation, associated fittings and expected maintenance, not only the price of a sample or a single unit. Confirm quantities and wastage assumptions with the person responsible for measurement. A different format may change cutting, labour or detailing requirements.',
          'Check availability against the project sequence before finalising the selection. If a replacement product is proposed, review its suitability and appearance again and record approval before purchase. Ask what a warranty actually covers and which conditions apply; do not assume all products or installations carry the same protection.',
        ],
      },
    ],
    takeaway: 'Choose materials as a complete system: use, appearance, installation and upkeep all belong in the decision.',
    checklist: [
      'Confirm suitability for the location and intended use.',
      'Review physical samples with adjacent finishes and lighting.',
      'Record the specified product and approved installation method.',
      'Understand cleaning, repair, availability and warranty conditions.',
    ],
  },
  {
    slug: 'planning-lighting-for-every-room',
    title: 'Planning Lighting for Every Room',
    category: 'Interiors',
    readingMinutes: 4,
    image: 'living',
    summary: 'Plan lighting around activities, furniture and daylight, with considered layers and controls rather than a ceiling full of fittings.',
    introduction: 'Good lighting begins with what happens in a room, not with a shopping list of fittings. Reading, cooking, getting dressed and relaxing need different kinds of light. Planning those activities alongside furniture and electrical layouts helps create a home that feels comfortable throughout the day.',
    sections: [
      {
        id: 'map-activities',
        title: 'Map furniture and activities first',
        paragraphs: [
          'Mark the likely positions of the sofa, dining table, bed, desk and main work surfaces. Then note the activities that need focused light and the routes people use through the room. A centrally placed ceiling fitting may not illuminate a reading chair or a kitchen worktop effectively.',
          'Observe daylight and reflections at different times if you can access the space. Windows, shading, surface colours and neighbouring buildings affect how the room feels. Use this information to discuss the lighting layout with your designer; do not assume the same fitting count will work in every room of similar size.',
        ],
      },
      {
        id: 'build-layers',
        title: 'Use layers with distinct jobs',
        paragraphs: [
          'Ambient light supports general movement and visibility. Task light helps with specific activities, such as reading or food preparation. Accent light can highlight a texture or object, but it is optional rather than a requirement for every wall. Each fitting should have a clear purpose.',
          'Consider how the layers work independently. A living room may benefit from gentle general light and a separate reading source; a kitchen needs useful light at the work surface without the person working there casting a strong shadow. Avoid assuming that increasing brightness everywhere will solve a poorly positioned source.',
        ],
      },
      {
        id: 'check-comfort',
        title: 'Think about glare, colour and reflections',
        paragraphs: [
          'Review where a light source will sit in relation to seated and standing eye levels. Exposed bright sources, reflections on a television or a glossy worktop, and harsh shadows can make a room uncomfortable even when it is well lit. Shielding, aiming and placement deserve attention alongside the appearance of the fitting.',
          'Compare sample light sources with the actual finishes where possible. Colour temperature and colour rendering affect the appearance of walls, fabrics and food. Discuss consistent choices for connected spaces, while allowing different rooms to serve different activities. Ask for a demonstration rather than choosing solely from a product photograph.',
        ],
      },
      {
        id: 'plan-controls',
        title: 'Make controls easy to reach and understand',
        paragraphs: [
          'Think through entering a room, sitting down and leaving it at night. Locate controls where they support those movements, including bedside access where needed. Separate groups of lights when there is a useful reason to operate them independently, rather than creating an unnecessarily complicated switch arrangement.',
          'If dimming or smart controls are planned, have the electrical professional confirm compatibility between the light source, driver and control. Discuss a straightforward manual way to operate essential lighting. Record circuit and control intentions before ceilings or joinery limit access for changes.',
        ],
      },
      {
        id: 'coordinate-safely',
        title: 'Coordinate safety and future maintenance',
        paragraphs: [
          'Have a qualified electrical professional design and install the electrical work, including the appropriate protection and fittings for wet or outdoor areas. Decorative choices should not override safety requirements. This planning guide is not a wiring or installation instruction.',
          'Check access for replacing lamps, drivers and other components, especially where lights are integrated into ceilings or cabinetry. Review the lighting on site before final finishes where practical, and again at completion. Keep product information and circuit labels so that maintaining the installation remains manageable.',
        ],
      },
    ],
    takeaway: 'A lighting plan should explain what each source does and how the people using the room will control it.',
    checklist: [
      'Locate furniture and task areas before selecting fitting positions.',
      'Balance ambient and task light; use accent light with purpose.',
      'Review glare, reflections and samples with the intended finishes.',
      'Confirm controls, compatibility and maintenance access.',
      'Use qualified professionals for electrical design and installation.',
    ],
  },
  {
    slug: 'a-room-by-room-guide-to-interior-planning',
    title: 'A Room-by-Room Guide to Interior Planning',
    category: 'Interiors',
    readingMinutes: 4,
    image: 'openPlan',
    summary: 'Start with routines, circulation and storage to make connected decisions for the living room, kitchen, bedrooms and supporting spaces.',
    introduction: 'Interior planning works best when rooms are considered as part of one home. A cabinet that adds storage may reduce circulation; a beautiful light may be awkward above the wrong furniture position. Start with measured information and everyday routines, then develop the details room by room.',
    sections: [
      {
        id: 'entry-and-living',
        title: 'Entry and living: leave room for movement',
        paragraphs: [
          'Think about arriving home with bags, shoes or deliveries. Identify a place for everyday items without blocking the entrance or door swing. In the living area, arrange seating around the way you spend time: conversation, reading, television or a combination of activities.',
          'Check circulation using the actual furniture dimensions rather than attractive images alone. Include doors, windows and the space needed to use storage. Mark sockets and lighting against the furniture plan, and consider how glare or reflections might affect screens and seated comfort.',
        ],
      },
      {
        id: 'kitchen-and-dining',
        title: 'Kitchen and dining: follow the daily routine',
        paragraphs: [
          'List appliances, cooking habits and the items you need to store before deciding the cabinet layout. Consider the sequence of taking out ingredients, washing, preparation, cooking and cleaning. Allow the team to coordinate appliance requirements, plumbing, power and ventilation with the actual selected products.',
          'Test how doors and drawers open in relation to one another and how more than one person might use the space. For dining, check the room with chairs pulled out, not just pushed under the table. Choose surfaces with cleaning and maintenance in mind, and keep service access available rather than concealing it permanently.',
        ],
      },
      {
        id: 'bedrooms-and-storage',
        title: 'Bedrooms: plan around rest and storage',
        paragraphs: [
          'Position the bed with attention to movement around it, window access, privacy and likely lighting needs. Think through charging devices, reading and operating switches from the bed. Use the intended mattress and bed-frame dimensions so that circulation is not based on an undersized drawing symbol.',
          'Inventory clothing and household storage before deciding wardrobe internals. Hanging space, drawers, shelves and less frequently used items need different arrangements. Review door movement, handles, lighting and access to high shelves. A storage plan should make everyday use easier, not simply fill every available wall.',
        ],
      },
      {
        id: 'bathrooms-and-utility',
        title: 'Bathrooms and utility: coordinate before finishing',
        paragraphs: [
          'Bathrooms bring together plumbing, ventilation, waterproofing, electrical safety and fittings in a compact space. Have the responsible professionals coordinate these requirements before tile layouts and cabinetry are finalised. Do not move a fixture on site without checking the effects on services and the waterproofing design.',
          'Plan places for towels, cleaning supplies, laundry and drying as well as the main fixtures. In a utility area, confirm appliance connections, access for maintenance and space to open doors fully. Think about how water will be managed and how the space will be cleaned, rather than treating these rooms as leftover areas.',
        ],
      },
      {
        id: 'work-and-flexibility',
        title: 'Work areas and shared decisions: keep the home adaptable',
        paragraphs: [
          'A work area needs useful light, a suitable desk position, power and consideration of noise and video-call backgrounds. It does not always need to be a separate room, but it should not interrupt an essential circulation route. Consider whether a room may need a different purpose as household needs change.',
          'Bring the room plans together before ordering. Review the material palette, service drawings, ceiling layouts and storage decisions as a coordinated set. Keep a record of approved dimensions and selections, and confirm measurements on site before fabrication. Resolve a clash on a drawing before it becomes a clash between completed installations.',
        ],
      },
    ],
    takeaway: 'Plan the activities first, test the dimensions second, and select finishes with the whole home in view.',
    checklist: [
      'Use measured rooms and actual furniture and appliance dimensions.',
      'Check movement, door swings and access to storage.',
      'Coordinate lighting, power, plumbing and ventilation early.',
      'Confirm maintenance access and realistic care requirements.',
      'Review the complete plan before ordering or fabrication.',
    ],
  },
]