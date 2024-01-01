# i will store the inputs in a file called list.txt, then i want to read that file and write a new file with the list in double quotes around each line

# Open the file
with open('list.txt', 'r') as f:
    input_list = f.readlines()

print(input_list)

# create a new file with the lines in an array and comma separated

with open('output.txt', 'w') as f:
    for item in input_list:
        f.write("\"" + item.rstrip() + "\"" + "," + "\n")