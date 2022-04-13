
import uuid
import re
import sys
import os
s = os.popen("python")
print(s)

print(':'.join(re.findall('..', '%012x' % uuid.getnode())))
# save the script as hello.py
