import random, argparse
import RPi.GPIO as GPIO
from time import sleep  
import Adafruit_DHT

def getdata():
    RH, T = Adafruit_DHT.read_retry(Adafruit_DHT.DHT11, 17)
    # return dict
    return {"RH": RH, "T": T}

# setup GPIO
GPIO.setmode(GPIO.BOARD)

# call main
if __name__ == '__main__':
    main()