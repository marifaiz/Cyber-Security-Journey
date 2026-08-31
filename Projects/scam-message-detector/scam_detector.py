# Scam/Fraud Message Detector - analyzes text messages for common fraud red flags.

# Tell the user to input the message
scam_message = input ("Type or paste your message: ")
print(scam_message)

#red flag categories
red_flags = []

# Check if the message asks for a PIN, OTP, or verification code — a common fraud red flag
if "pin" in scam_message.lower():
    red_flags.append("message asked for PIN")
if "otp" in scam_message.lower():
    red_flags.append("message asked for OTP")
if "code" in scam_message.lower():
    red_flags.append("message asked for code")

#check if the message contain urgency language 

if "urgent" in scam_message.lower():
    red_flags.append("message contain urgent")
if "immediately" in scam_message.lower():
    red_flags.append("message contain immediately")
if "act now" in scam_message.lower():
    red_flags.append("message contain act now")

#check if the message Request for money transfer

if "send money" in scam_message.lower():
    red_flags.append("message request for money transfer")
if "refund" in scam_message.lower():
    red_flags.append("message request for money transfer")
if "wrong account" in scam_message.lower():
   red_flags.append("message request for money transfer")
if "transfer" in scam_message.lower():
   red_flags.append("message request for money transfer")

#check if the message are contains both "dial" and "*"
if "dial" in scam_message.lower() and "*" in scam_message.lower():
    red_flags.append("message contain dial and *")


#check if the message are Too-good-to-be-true offers
if "congratulations" in scam_message.lower():
    red_flags.append("message contain congratulations")
if "you have won" in scam_message.lower():
    red_flags.append("message contain you have won")
if "selected " in scam_message.lower():
   red_flags.append("message contain selected")

#check if the message contain Suspicious/shortened links
if "bit.ly" in scam_message.lower():
    red_flags.append("message contain bit.ly")
if "click here" in scam_message.lower():
    red_flags.append("message contain click here")
if "http" in scam_message.lower():
   red_flags.append("message contain http")
if "whatsapp.me" in scam_message.lower():
   red_flags.append("message contain whatsapp.me")

#determine the risk level
number_of_flags = len(red_flags)

if number_of_flags == 0:
    print("SAFE")
elif number_of_flags <= 2:
    print("LOW RISK")
else:
    print ("HIGH RISK")

# show the actual flags found, if any
if red_flags:
    print("Red flags found:", red_flags)