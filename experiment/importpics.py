import json
import os

# Get the directory of the current script
script_folder = os.path.dirname(os.path.abspath(__file__))

# Construct the path to the 'list1' folder dynamically
stimulus_folder1 = os.path.join(script_folder, 'list1')

stimuli = []

for stimulus in os.listdir(stimulus_folder1):
   if '.png' in stimulus:
      stimuli.append(stimulus)
        
# Convert the list to a JSON-formatted string
stimuli_json = json.dumps(stimuli)

# Write the string to the file
with open('jspsych_parameters1.json', 'w') as file:
    file.write("let images = " + stimuli_json)




script_folder = os.path.dirname(os.path.abspath(__file__))

# Construct the path to the 'list1' folder dynamically
stimulus_folder2 = os.path.join(script_folder, 'list2')

stimuli2 = []

for stimulus in os.listdir(stimulus_folder2):
   if '.png' in stimulus:
      stimuli2.append(stimulus)
        
# Convert the list to a JSON-formatted string
stimuli_json2 = json.dumps(stimuli2)

# Write the string to the file
with open('jspsych_parameters2.json', 'w') as file:
    file.write("let images2 = " + stimuli_json2)



script_folder = os.path.dirname(os.path.abspath(__file__))

# Construct the path to the 'list1' folder dynamically
stimulus_folder3 = os.path.join(script_folder, 'list3')

stimuli3 = []

for stimulus in os.listdir(stimulus_folder3):
   if '.png' in stimulus:
      stimuli3.append(stimulus)
        
# Convert the list to a JSON-formatted string
stimuli_json3 = json.dumps(stimuli3)

# Write the string to the file
with open('jspsych_parameters3.json', 'w') as file:
    file.write("let images3 = " + stimuli_json3)




script_folder = os.path.dirname(os.path.abspath(__file__))

# Construct the path to the 'list1' folder dynamically
stimulus_folder4 = os.path.join(script_folder, 'list4')

stimuli4 = []

for stimulus in os.listdir(stimulus_folder4):
   if '.png' in stimulus:
      stimuli4.append(stimulus)
        
# Convert the list to a JSON-formatted string
stimuli_json4 = json.dumps(stimuli4)

# Write the string to the file
with open('jspsych_parameters4.json', 'w') as file:
    file.write("let images4 = " + stimuli_json4)



script_folder = os.path.dirname(os.path.abspath(__file__))

# Construct the path to the 'list1' folder dynamically
stimulus_folder5 = os.path.join(script_folder, 'list5')

stimuli5 = []

for stimulus in os.listdir(stimulus_folder5):
   if '.png' in stimulus:
      stimuli5.append(stimulus)
        
# Convert the list to a JSON-formatted string
stimuli_json5 = json.dumps(stimuli5)

# Write the string to the file
with open('jspsych_parameters5.json', 'w') as file:
    file.write("let images5 = " + stimuli_json5)



script_folder = os.path.dirname(os.path.abspath(__file__))

# Construct the path to the 'list1' folder dynamically
stimulus_folder6 = os.path.join(script_folder, 'list6')

stimuli6 = []

for stimulus in os.listdir(stimulus_folder6):
   if '.png' in stimulus:
      stimuli6.append(stimulus)
        
# Convert the list to a JSON-formatted string
stimuli_json6 = json.dumps(stimuli6)

# Write the string to the file
with open('jspsych_parameters6.json', 'w') as file:
    file.write("let images6 = " + stimuli_json6)