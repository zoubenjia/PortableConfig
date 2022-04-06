from copy import Error
from pythonping import ping
for i in range(3000,4002):
    url='1.'+str(i)+'blg.xyz'
    print(url)
    try:
        ping(url, count=1,timeout=1,verbose=True)
    except RuntimeError as err:
        print(err)






