import os
import json

# Get the directory of the current script
script_folder = os.path.dirname(os.path.abspath(__file__))

# Loop through list1 to list6
for i in range(1, 7):
    # Construct the path to the current list folder
    list_folder = f"list{i}"
    stimulus_folder = os.path.join(script_folder, list_folder)
    
    # Check if the folder exists
    if not os.path.exists(stimulus_folder):
        print(f"Warning: {list_folder} does not exist. Skipping.")
        continue
    
    stimuli = []

    for stimulus in os.listdir(stimulus_folder):
      if '.png' in stimulus:
       stimuli.append(stimulus)
        
   # Convert the list to a JSON-formatted string
    stimuli_json = json.dumps(stimuli)
    # Construct the output file path for the current list
    output_file = os.path.join(script_folder, f'jspsych_parameters{i}.json')
    
    # Write the JSON string to the file
    with open(output_file, 'w') as file:
        file.write("let images = " + stimuli_json)
    
    print(f"Processed {list_folder}: {len(stimuli)} stimuli found and written to {output_file}")