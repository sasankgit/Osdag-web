from .input_data_base import InputDataBase
from rest_framework import status
from rest_framework.response import Response
from osdag.models import Columns, Material, CustomMaterials

class BasePlateInputData(InputDataBase):
    def process(self, **kwargs):
        email = kwargs.get("email")

        print("Processing Base Plate Input Data - Complete Dataset")

        # Always return ALL data needed for this module
        response = {}

        try:
            # Connectivity List (Base Plate has only one option)
            response['connectivityList'] = ['Welded Column Base']
            
            # End Condition List
            response['endConditionList'] = ['Pinned', 'Fixed']

            # Column List (Base Plate uses columns, not beams)
            response['columnList'] = list(Columns.objects.values_list('Designation', flat=True))

            # Material List (for base plate material)
            materialList = list(Material.objects.all().values())
            if email:
                custom_material = list(CustomMaterials.objects.filter(email=email).values())
                materialList += custom_material
            materialList.append({"id": -1, "Grade": 'Custom'})
            response['materialList'] = materialList

            # Anchor Bolt ICF (Inside Column Flange) - Diameter List
            response['anchorBoltIcfDiameterList'] = [
                'M20', 'M24', 'M30', 'M36', 'M42', 'M48', 'M56', 'M64', 'M72'
            ]

            # Anchor Bolt ICF - Property Class (Grade) List
            response['anchorBoltIcfGradeList'] = [
                '3.6', '4.6', '4.8', '5.6', '5.8', '6.8', '8.8', '9.8', '10.9', '12.9'
            ]

            # Anchor Bolt OCF (Outside Column Flange) - Diameter List
            response['anchorBoltOcfDiameterList'] = [
                'M20', 'M24', 'M30', 'M36', 'M42', 'M48', 'M56', 'M64', 'M72'
            ]

            # Anchor Bolt OCF - Property Class (Grade) List
            response['anchorBoltOcfGradeList'] = [
                '3.6', '4.6', '4.8', '5.6', '5.8', '6.8', '8.8', '9.8', '10.9', '12.9'
            ]
            
            # Anchor Bolt Type List
            response['anchorBoltTypeList'] = ['End Plate Type']

            # Footing Grade List (Concrete grades)
            response['footingGradeList'] = [
                {'id': 'M20', 'Grade': 'M20'},
                {'id': 'M25', 'Grade': 'M25'},
                {'id': 'M30', 'Grade': 'M30'},
                {'id': 'M35', 'Grade': 'M35'},
                {'id': 'M40', 'Grade': 'M40'},
                {'id': 'M45', 'Grade': 'M45'},
                {'id': 'M50', 'Grade': 'M50'},
            ]
            
            # Weld Type List
            response['weldTypeList'] = ['Groove Weld', 'Fillet Weld']
            
            # Weld Fabrication List
            response['weldFabList'] = ['Shop Weld', 'Field Weld']
            
            # Design Method List
            response['designMethodList'] = ['Limit State Design', 'Working Stress Design']
            
            # Base Plate Design Method List
            response['basePlateDesignMethodList'] = ['Effective Area Method', 'Moment Capacity Method']
            
            # Detailing - Corrosive Influences
            response['detailingCorrosiveList'] = ['Yes', 'No']
            
            # Detailing - Edge Type List
            response['detailingEdgeTypeList'] = [
                'a - Sheared or hand flame cut',
                'b - Rolled, machine-flame cut, sawn and planed',
                'c - Automatic machine flame cut'
            ]
            
            # Bolt Hole Type List
            response['boltHoleTypeList'] = ['Standard', 'Over-sized', 'Short-slotted', 'Long-slotted']
            
            # Galvanized Options
            response['galvanizedList'] = ['Yes', 'No']

            print("Base Plate Complete Response: ", {k: len(v) if isinstance(v, list) else v for k, v in response.items()})
            return Response(response, status=status.HTTP_200_OK)

        except Exception as err:
            print(f"Error in BasePlate input handler: {err}")
            return Response({"error": "Database error"}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)