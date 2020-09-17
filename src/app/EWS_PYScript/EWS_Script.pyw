import codecs
import datetime
import json
import sched
import time
import urllib.request

while True:
    f=urllib.request.urlopen("http://localhost/EWS_PYScript/News.html")
    msg=str(f.read())
    Bankruptcy= msg.find("file for Bankruptcy")
    operationstop= msg.find("operation stopped")
    sharedrop= msg.find("share dropped by")
    impacted= msg.find("may be impacted")
    counterparty= msg.find("XYZ Funding, LLC")
    NewsAnalyticsScore=0
    if  Bankruptcy > 1 and counterparty > 1:
      NewsAnalyticsScore ="100.00"
    elif operationstop > 1 and counterparty > 1:
      NewsAnalyticsScore ="95.00"
    elif sharedrop > 1 and counterparty > 1:
      NewsAnalyticsScore ="85.00"
    elif impacted > 1 and counterparty > 1:
      NewsAnalyticsScore ="70.00"
    else:
      NewsAnalyticsScore ="60.00"
    with open('../assets/CounterPartyAnalytics.json') as json_file:
        data = json.load(json_file)
        for p in data['CounterParties']:       
            if p['Counterparty'] == "XYZ Funding, LLC":
                x = datetime.datetime.now()
                p['NewsAnalyticsScore']= NewsAnalyticsScore
                p['LastRefreshTime']=x.strftime("%Y-%m-%d %H:%M:%S")
    with open('../assets/CounterPartyAnalytics.json','w') as json_update:
        json.dump(data, json_update)
    time.sleep(10)

# import codecs
# import datetime
# import json
# f=codecs.open("News.html", 'r')                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  
# msg=f.read()
# Bankruptcy= msg.find("file for Bankruptcy")
# operationstop= msg.find("operation stopped")
# sharedrop= msg.find("share dropped by")
# impacted= msg.find("may be impacted")
# counterparty= msg.find("XYZ Funding, LLC")
# NewsAnalyticsScore=0
# if  Bankruptcy > 1 and counterparty > 1:
#   NewsAnalyticsScore =100
# elif operationstop > 1 and counterparty > 1:
#   NewsAnalyticsScore =95
# elif sharedrop > 1 and counterparty > 1:
#   NewsAnalyticsScore =85.5
# elif impacted > 1 and counterparty > 1:
#   NewsAnalyticsScore =70
# else:
#   NewsAnalyticsScore =60
# with open('CounterPartyAnalytics.json') as json_file:
#     data = json.load(json_file)
#     for p in data['CounterParties']:       
#         if p['Counterparty'] == "XYZ Funding, LLC":
#             x = datetime.datetime.now()
#             p['NewsAnalyticsScore']= NewsAnalyticsScore
#             p['LastRefreshTime']=x.strftime("%Y-%m-%d %H:%M:%S")
# with open('../CounterPartyAnalytics.json','w') as json_update:
#     json.dump(data, json_update)