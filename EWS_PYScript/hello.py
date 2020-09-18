import codecs
import datetime
import json
f=codecs.open("News.html", 'r')
msg=f.read()
Bankruptcy= msg.find("file for Bankruptcy")
operationstop= msg.find("operation stopped")
sharedrop= msg.find("share dropped by")
impacted= msg.find("may be impacted")
counterparty= msg.find("XYZ Funding, LLC")
NewsAnalyticsScore=0
if  Bankruptcy > 1 and counterparty > 1:
  NewsAnalyticsScore =100
elif operationstop > 1 and counterparty > 1:
  NewsAnalyticsScore =95
elif sharedrop > 1 and counterparty > 1:
  NewsAnalyticsScore =85
elif impacted > 1 and counterparty > 1:
  NewsAnalyticsScore =70
else:
  NewsAnalyticsScore =60
with open('CounterPartyAnalytics.json') as json_file:
    data = json.load(json_file)
    for p in data['counterparties']:       
        if p['Counterparty'] == "XYZ Funding, LLC":
            x = datetime.datetime.now()
            p['NewsAnalyticsScore']= NewsAnalyticsScore
            p['LastRefreshTime']=x.strftime("%Y-%m-%d %H:%M:%S")
with open('CounterPartyAnalytics.json','w') as json_update:
    json.dump(data, json_update)


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