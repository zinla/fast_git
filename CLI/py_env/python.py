import os
os.system("python")
os.popen("import uuid")
os.popen("import re")
os.popen("print(':'.join(re.findall('..', '%012x' % uuid.getnode())))")

