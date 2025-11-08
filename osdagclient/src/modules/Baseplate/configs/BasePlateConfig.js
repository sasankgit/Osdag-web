import { UI_STRINGS } from './UIStrings';
import { MODULE_KEY_BASE_PLATE, MODULE_DISPLAY_BASE_PLATE } from '../../../constants/DesignKeys';

export const basePlateConfig = {
  sessionName: MODULE_DISPLAY_BASE_PLATE,
  routePath: "/design/connections/base_plate/:projectId?", 
  designType: MODULE_KEY_BASE_PLATE, 
  cameraKey: "BasePlateConnection",  
  cadOptions: ["Model", "Column", "BasePlate", "Anchor"],
  
  defaultInputs: {
    // Anchor Bolt Inside Column Flange (ICF)
    anchor_bolt_icf_diameter: [],
    anchor_bolt_icf_grade: [],
    anchor_bolt_icf_type: "End Plate Type",
    
    // Anchor Bolt Outside Column Flange (OCF)
    anchor_bolt_ocf_diameter: [],
    anchor_bolt_ocf_grade: [],
    anchor_bolt_ocf_type: "End Plate Type",
    
    // Base Plate
    base_plate_material: "E 250 (Fe 410 W)A",
    base_plate_fy: "230",
    base_plate_fu: "410",
    
    // Member
    member_designation: "Select Section",
    member_material: "E 250 (Fe 410 W)A",
    
    // Connectivity
    connectivity: "Welded Column Base",
    end_condition: "Pinned",
    
    // Loads
    load_axial_compression: "",
    load_axial_tension: "",
    load_moment_major: "",
    load_moment_minor: "",
    load_shear_major: "",
    load_shear_minor: "",
    
    // Footing
    footing_grade: "Select Grade",
    
    // Weld
    weld_type: "Groove Weld",
    weld_fab: "Shop Weld",
    weld_material_grade: "410",
    
    // Stiffener Key
    stiffener_material: "E 250 (Fe 410 W)A",
    stiffener_fy: "230",
    stiffener_fu: "410",
    
    // Design Preferences (Hardcoded defaults)
    design_method: "Limit State Design",
    design_base_plate_method: "Effective Area Method",
    anchor_bolt_friction_coefficient: "0.3",
    
    // ICF Design Preferences
    anchor_bolt_icf_bolt_hole_type: "Over-sized",
    anchor_bolt_icf_designation: "M20X0 IS5624 GALV",
    anchor_bolt_icf_galvanized: "Yes",
    anchor_bolt_icf_length: "0",
    anchor_bolt_icf_material_grade: "410",
    
    // OCF Design Preferences
    anchor_bolt_ocf_bolt_hole_type: "Over-sized",
    anchor_bolt_ocf_designation: "M20X0 IS5624 GALV",
    anchor_bolt_ocf_galvanized: "Yes",
    anchor_bolt_ocf_length: "0",
    anchor_bolt_ocf_material_grade: "410",
    
    // Detailing
    detailing_corr_status: "Yes",
    detailing_edge_type: "a - Sheared or hand flame cut",
    
    module: MODULE_KEY_BASE_PLATE,
  },

  modalConfig: [
    { key: "anchorBoltIcfDiameter", inputKey: "anchor_bolt_icf_diameter", dataSource: "anchorBoltIcfDiameterList" },
    { key: "anchorBoltIcfGrade", inputKey: "anchor_bolt_icf_grade", dataSource: "anchorBoltIcfGradeList" },
    { key: "anchorBoltOcfDiameter", inputKey: "anchor_bolt_ocf_diameter", dataSource: "anchorBoltOcfDiameterList" },
    { key: "anchorBoltOcfGrade", inputKey: "anchor_bolt_ocf_grade", dataSource: "anchorBoltOcfGradeList" },
  ],

  selectionConfig: [
    { key: "anchorBoltIcfDiameterSelect", inputKey: "anchor_bolt_icf_diameter", defaultValue: "All" },
    { key: "anchorBoltIcfGradeSelect", inputKey: "anchor_bolt_icf_grade", defaultValue: "All" },
    { key: "anchorBoltOcfDiameterSelect", inputKey: "anchor_bolt_ocf_diameter", defaultValue: "All" },
    { key: "anchorBoltOcfGradeSelect", inputKey: "anchor_bolt_ocf_grade", defaultValue: "All" },
  ],

  validateInputs: (inputs) => {
    if (!inputs.member_designation || inputs.member_designation === "Select Section") {
      return { isValid: false, message: UI_STRINGS.PLEASE_INPUT_ALL_FIELDS };
    }
    
    if (!inputs.footing_grade || inputs.footing_grade === "Select Grade") {
      return { isValid: false, message: UI_STRINGS.PLEASE_INPUT_ALL_FIELDS };
    }
    
    return { isValid: true };
  },

  buildSubmissionParams: (inputs, allSelected, lists, extraState) => {
    return {
      // Anchor Bolt Inside Column Flange
      "Anchor Bolt.ICF.Diameter": allSelected.anchor_bolt_icf_diameter 
        ? lists.anchorBoltIcfDiameterList 
        : inputs.anchor_bolt_icf_diameter,
      "Anchor Bolt.ICF.Grade": allSelected.anchor_bolt_icf_grade 
        ? lists.anchorBoltIcfGradeList 
        : inputs.anchor_bolt_icf_grade,
      "Anchor Bolt.Type": inputs.anchor_bolt_icf_type,
      
      // Anchor Bolt Outside Column Flange
      "Anchor Bolt.OCF.Diameter": allSelected.anchor_bolt_ocf_diameter 
        ? lists.anchorBoltOcfDiameterList 
        : inputs.anchor_bolt_ocf_diameter,
      "Anchor Bolt.OCF.Grade": allSelected.anchor_bolt_ocf_grade 
        ? lists.anchorBoltOcfGradeList 
        : inputs.anchor_bolt_ocf_grade,
      
      // Base Plate
      "Base_Plate.Material": inputs.base_plate_material,
      "Base_Plate.Fy": inputs.base_plate_fy,
      "Base_Plate.Fu": inputs.base_plate_fu,
      
      // Member
      "Member.Designation": inputs.member_designation,
      "Member.Material": inputs.member_material,
      
      // Connectivity
      "Connectivity *": inputs.connectivity,
      "End Condition": inputs.end_condition,
      
      // Loads
      "Load.Axial_Compression": inputs.load_axial_compression || "",
      "Load.Axial_Tension": inputs.load_axial_tension || "",
      "Load.Moment.Major": inputs.load_moment_major || "",
      "Load.Moment.Minor": inputs.load_moment_minor || "",
      "Load.Shear.Major": inputs.load_shear_major || "",
      "Load.Shear.Minor": inputs.load_shear_minor || "",
      
      // Footing
      "Footing.Grade": inputs.footing_grade,
      
      // Weld
      "Weld.Type": inputs.weld_type,
      "Weld.Fab": inputs.weld_fab,
      "Weld.Material_Grade_OverWrite": inputs.weld_material_grade,
      
      // Stiffener Key
      "Stiffener_Key.Material": inputs.stiffener_material,
      "Stiffener_Key.Fy": inputs.stiffener_fy,
      "Stiffener_Key.Fu": inputs.stiffener_fu,
      
      // Design Method
      "Design.Design_Method": inputs.design_method,
      "DesignPreferences.Design.Base_Plate": inputs.design_base_plate_method,
      
      // Design Preferences - Anchor Bolt
      "DesignPreferences.Anchor_Bolt.Friction_coefficient": inputs.anchor_bolt_friction_coefficient,
      
      // ICF Design Preferences
      "DesignPreferences.Anchor_Bolt.ICF.Bolt_Hole_Type": inputs.anchor_bolt_icf_bolt_hole_type,
      "DesignPreferences.Anchor_Bolt.ICF.Designation": inputs.anchor_bolt_icf_designation,
      "DesignPreferences.Anchor_Bolt.ICF.Galvanized": inputs.anchor_bolt_icf_galvanized,
      "DesignPreferences.Anchor_Bolt.ICF.Length": inputs.anchor_bolt_icf_length,
      "DesignPreferences.Anchor_Bolt.ICF.Material_Grade_OverWrite": inputs.anchor_bolt_icf_material_grade,
      "DesignPreferences.Anchor_Bolt.ICF.Type": inputs.anchor_bolt_icf_type,
      
      // OCF Design Preferences
      "DesignPreferences.Anchor_Bolt.OCF.Bolt_Hole_Type": inputs.anchor_bolt_ocf_bolt_hole_type,
      "DesignPreferences.Anchor_Bolt.OCF.Designation": inputs.anchor_bolt_ocf_designation,
      "DesignPreferences.Anchor_Bolt.OCF.Galvanized": inputs.anchor_bolt_ocf_galvanized,
      "DesignPreferences.Anchor_Bolt.OCF.Length": inputs.anchor_bolt_ocf_length,
      "DesignPreferences.Anchor_Bolt.OCF.Material_Grade_OverWrite": inputs.anchor_bolt_ocf_material_grade,
      "DesignPreferences.Anchor_Bolt.OCF.Type": inputs.anchor_bolt_ocf_type,
      
      // Detailing
      "Detailing.Corrosive_Influences": inputs.detailing_corr_status,
      "Detailing.Edge_type": inputs.detailing_edge_type,
      
      // Material (top-level)
      "Material": inputs.base_plate_material,
      
      // Module
      "Module": MODULE_KEY_BASE_PLATE,
    };
  },

  inputSections: [
    {
      title: UI_STRINGS.CONNECTING_MEMBERS,
      fields: [
        {
          key: "connectivity",
          label: UI_STRINGS.CONNECTIVITY,
          type: "select",
          options: [{ id: "Welded Column Base", Grade: "Welded Column Base" }],
          disabled: true // Since there's only one option
        },
        {
          key: "end_condition",
          label: UI_STRINGS.ENDCONDITION,
          type: "select",
          options: [
            { id: "Pinned", Grade: "Pinned" },
            { id: "Fixed", Grade: "Fixed" }
          ]
        },
        {
          key: "member_designation", 
          label: UI_STRINGS.COLUMN_SECTION,
          type: "select",
          options: "columnList"
        },
        {
          key: "member_material",
          label: UI_STRINGS.MATERIAL,
          type: "select",
          options: "materialList",
          onChange: (value, inputs, setInputs, materialList) => {
            const material = materialList.find(item => item.id === value);
            setInputs({
              ...inputs,
              member_material: material.Grade,
            });
          }
        }
      ]
    },
    {
      title: UI_STRINGS.FACTORED_LOADS,
      fields: [
        { 
          key: "load_axial_compression", 
          label: UI_STRINGS.AXIAL_COMPRESSION, 
          type: "number",
          placeholder: "kN"
        },
        { 
          key: "load_axial_tension", 
          label: UI_STRINGS.AXIAL_LIFT_UPLIFT, 
          type: "number",
          placeholder: "kN"
        },
        { 
          key: "load_moment_major", 
          label: UI_STRINGS.ALONG_MAJOR_AXISZ, 
          type: "number",
          placeholder: "kNm"
        },
        { 
          key: "load_moment_minor", 
          label: UI_STRINGS.ALONG_MAJOR_AXISY, 
          type: "number",
          placeholder: "kNm"
        },
        { 
          key: "load_shear_major", 
          label: UI_STRINGS.SHEAR_FORCE + " (Major)", 
          type: "number",
          placeholder: "kN"
        },
        { 
          key: "load_shear_minor", 
          label: UI_STRINGS.SHEAR_FORCE + " (Minor)", 
          type: "number",
          placeholder: "kN"
        }
      ]
    },
    {
      title: UI_STRINGS.ANCHOR_BOLT_INSIDE_COLUMN_FLANGE,
      fields: [
        {
          key: "anchor_bolt_icf_diameter",
          label: UI_STRINGS.DIAMETER,
          type: "customizable",
          selectionKey: "anchorBoltIcfDiameterSelect",
          modalKey: "anchorBoltIcfDiameter",
          dataSource: "anchorBoltIcfDiameterList"
        },
        {
          key: "anchor_bolt_icf_grade",
          label: UI_STRINGS.PROPERTY_CLASS,
          type: "customizable",
          selectionKey: "anchorBoltIcfGradeSelect",
          modalKey: "anchorBoltIcfGrade",
          dataSource: "anchorBoltIcfGradeList"
        },
        {
          key: "anchor_bolt_icf_type",
          label: UI_STRINGS.ANCHOR_TYPE,
          type: "select",
          options: [{ id: "End Plate Type", Grade: "End Plate Type" }],
          disabled: true
        }
      ]
    },
    {
      title: UI_STRINGS.ANCHOR_BOLT_OUTSIDE_COLUMN_FLANGE,
      fields: [
        {
          key: "anchor_bolt_ocf_diameter",
          label: UI_STRINGS.DIAMETER,
          type: "customizable",
          selectionKey: "anchorBoltOcfDiameterSelect",
          modalKey: "anchorBoltOcfDiameter",
          dataSource: "anchorBoltOcfDiameterList"
        },
        {
          key: "anchor_bolt_ocf_grade",
          label: UI_STRINGS.PROPERTY_CLASS,
          type: "customizable",
          selectionKey: "anchorBoltOcfGradeSelect",
          modalKey: "anchorBoltOcfGrade",
          dataSource: "anchorBoltOcfGradeList"
        },
        {
          key: "anchor_bolt_ocf_type",
          label: UI_STRINGS.ANCHOR_TYPE,
          type: "select",
          options: [{ id: "End Plate Type", Grade: "End Plate Type" }],
          disabled: true
        }
      ]
    },
    {
      title: UI_STRINGS.PEDESTAL_FOOTING,
      fields: [
        { 
          key: "footing_grade", 
          label: UI_STRINGS.GRADE, 
          type: "select",
          options: "footingGradeList" // need to provide this in the backend
        }
      ]
    },
    {
      title: UI_STRINGS.WELD,
      fields: [
        { 
          key: "weld_type", 
          label: UI_STRINGS.TYPE, 
          type: "select",
          options: [
            { id: "Groove Weld", Grade: "Groove Weld" },
            { id: "Fillet Weld", Grade: "Fillet Weld" }
          ]
        }
      ]
    }
  ]
};