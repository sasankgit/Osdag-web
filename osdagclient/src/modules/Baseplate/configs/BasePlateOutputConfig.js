export const finPlateOutputConfig = {
  sections: {
    "Anchor Bold - Outside Column Flange": [
      { key: "Bolt.Diameter", label: "Diameter (mm)" },
      { key: "Bolt.Grade", label: "Property Class" },
      { key: "Bolt.Grade", label: "No of anchors" },// key to be set for anchors 
      { key: "Bolt.Shear", label: "Shear Capacity (kN)" },
      { key: "Bolt.Bearing", label: "Bearing Capacity (kN)" },
      { key: "Bolt.Capacity", label: "Bolt Capacity (kN)" },
      { key: "Bolt.Grade", label: "Tension Demand" },//key to be set
      { key: "Bolt.Grade", label: "Tension Capacity" },//key to be set
      { key: "Bolt.Grade", label: "Combined capacity" },//key to be set
      { key: "SpacingModal", label: "Anchor Length(mm)" },//key to be set
    ],
    "Anchor Bold - Inside Column Flange": [
      { key: "Bolt.Diameter", label: "Diameter (mm)" },//might need key to be set
      { key: "Bolt.Grade", label: "Property Class" },
      { key: "Bolt.Grade", label: "No of anchors" },// key to be set for anchors 
      { key: "Bolt.Grade", label: "Tension Demand(kN)" },//key to be set
      { key: "Bolt.Grade", label: "Tension Capacity(kN)" },//key to be set
      { key: "SpacingModal", label: "Anchor Length(mm)" },//key to be set
    ],
    
    "Base Plate Connection": [
      { key: "Plate.Thickness", label: "Thickness (mm)" },
      { key: "Plate.Length", label: "Length (mm)" },
      { key: "Plate.Height", label: "width(mm)" },//key to be changed
      { key: "Plate.Height", label: "Bearing Stress(Mpa)" },//key to be changed
      { key: "Plate.Height", label: "Moment Demand(kNm)" },//key to be changed
      { key: "Plate.Height", label: "Typical Sketch" },//key to be changed
    ],
    "Details - Outside Column Flange": [
      { key: "Plate.Thickness", label: "End Distance(mm)" },
      { key: "Plate.Length", label: "Edge Distance(mm)" },
      { key: "Plate.Height", label: "Pitch Distance(mm)" },//key to be changed
      { key: "Plate.Height", label: "Gauge Distance(Mpa)" },//key to be changed
      { key: "Plate.Height", label: "Effecie Projection(mm)" },//key to be changed
      
    ],
    "Details - Inside Column Flange": [
      { key: "Plate.Thickness", label: "End Distance(mm)" },
      { key: "Plate.Length", label: "Edge Distance(mm)" },
      { key: "Plate.Height", label: "Pitch Distance(mm)" },//key to be changed
      { key: "Plate.Height", label: "Gauge Distance(Mpa)" },//key to be changed
      
      
    ],
    "Details": [
      { key: "SectionCapacityModal", label: "Typical Detailing" },
    ],
    "Stiffener Plate along Column flange": [
      { key: "SectionCapacityModal", label: "Stiffener Plate" },
    ],
    "Stiffener Plate along Column Web": [
      { key: "SectionCapacityModal", label: "Stiffener Plate" },
    ],
    "Stiffener Plate across Column Web": [
      { key: "SectionCapacityModal", label: "Stiffener Plate" },
    ],
    "Stiffener Plate": [
      { key: "SectionCapacityModal", label: "Stiffener Plate" },
    ],
    "Shrear Design": [
      { key: "SectionCapacityModal", label: "Shrear Resistance(kN)" },
      { key: "SectionCapacityModal", label: "Key Required?" },
      { key: "SectionCapacityModal", label: "Shear Key" },
      { key: "SectionCapacityModal", label: "Typical Details" },
    ],
  
    "Weld": [
      { key: "Weld.Size", label: "Size at Flange(mm)" },
      { key: "Weld.Strength", label: "Size at Web(mm)" },
      { key: "Weld.Stress", label: "Size at stiffener(mm)" },
      { key: "SectionCapacityModal", label: "Weld" },
    ],
  },

  modals: {
    SpacingModal: { type: "spacing", buttonText: "Spacing" },
    PlateCapacityModal: { type: "capacity", buttonText: "Capacity" },
    SectionCapacityModal: { type: "capacity", buttonText: "Capacity" }
  },

  modalTypes: {
    spacing: {
      title: "Spacing Details",
      width: "68%",
      layout: "two-column",
      hasImage: true,
      note: "Representative image for Spacing Details - 3 x 3 pattern considered"
    },
    capacity: {
      title: "Capacity Details", 
      width: "68%",
      layout: "capacity-complex",
      hasImage: true,
      note: "Representative image for Failure Pattern (Half Plate) - 2 x 3 Bolt pattern considered"
    }
  },

  modalData: {
    spacing: {
      SpacingModal: [
        { key: "Bolt.Pitch", label: "Pitch Distance (mm)" },
        { key: "Bolt.EndDist", label: "End Distance (mm)" },
        { key: "Bolt.Gauge", label: "Gauge Distance (mm)" },
        { key: "Bolt.EdgeDist", label: "Edge Distance (mm)" },
      ]
    },
    capacity: {
      PlateCapacityModal: [
        { key: "Plate.Shear", label: "Shear Yielding Capacity (kN)", section: "Failure Pattern due Shear in Plate" },
        { key: "Plate.Rupture", label: "Rupture Capacity (kN)", section: "Failure Pattern due Shear in Plate" },
        { key: "Plate.BlockShear", label: "Block Shear Capacity (kN)", section: "Failure Pattern due Shear in Plate" },
        
        { key: "Plate.TensionYield", label: "Tension Yielding Capacity (kN)", section: "Failure due Tension in Plate" },
        { key: "Plate.TensionRupture", label: "Tension Rupture Capacity (kN)", section: "Failure due Tension in Plate" },
        { key: "Plate.BlockShearAxial", label: "Axial Block Shear Capacity (kN)", section: "Failure due Tension in Plate" },
        
        { key: "Plate.MomDemand", label: "Moment Demand (kNm)", section: "Moment Analysis" },
        { key: "Plate.MomCapacity", label: "Moment Capacity (kNm)", section: "Moment Analysis" },
      ],
      SectionCapacityModal: [
        { key: "Member.shear_yielding", label: "Shear Yielding Capacity (kN)", section: "Failure Pattern due Shear in Plate" },
        { key: "Member.shear_rupture", label: "Rupture Capacity (kN)", section: "Failure Pattern due Shear in Plate" },
        { key: "Member.shear_blockshear", label: "Block Shear Capacity (kN)", section: "Failure Pattern due Shear in Plate" },
        
        { key: "Member.tension_yielding", label: "Tension Yielding Capacity (kN)", section: "Failure due Tension in Plate" },
        { key: "Member.tension_rupture", label: "Tension Rupture Capacity (kN)", section: "Failure due Tension in Plate" },
        { key: "Member.tension_blockshear", label: "Axial Block Shear Capacity (kN)", section: "Failure due Tension in Plate" },
        
        { key: "Plate.MomDemand", label: "Moment Demand (kNm)", section: "Moment Analysis" },
        { key: "Section.MomCapacity", label: "Moment Capacity (kNm)", section: "Moment Analysis" },
      ]
    }
  }
};