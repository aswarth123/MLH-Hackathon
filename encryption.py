password = input()
p = list(password)

for i in range(0,len(p)):
    p[i] = chr((ord(p[i]) + 10)%26 + 97)

enc_password = ""
print(enc_password.join(p))
