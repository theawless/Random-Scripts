# College proxies often block pinging.
# This code pings through www.spfld.com and trace route through www.congentco.com

import requests
from lxml import html
from datetime import datetime


def delim():
    return "\n################" + str(datetime.now()) + "################\n"


def ping(website, packet_size, count):
    payload = {"remote_host": website, "size": packet_size,
               "dns": "on", "count": count}
    r = requests.get('http://www.spfld.com/cgi-bin/ping', params=payload)
    with open("/home/theawless/Documents/ping_results", "a+") as f:
        f.write(delim() + r.text)


def trace_route(website):
    payload = {"FKT": "go!", "CMD": "T4", "LOC": "vie01", "DST": website}
    r = requests.post("http://www.cogentco.com/lookingglass.php", data=payload)
    data = html.fromstring(r.content).xpath("/html/body/pre/text()")
    f = open("/home/theawless/Documents/trace_results", "a+")
    for line in data:
        f.writelines(delim() + str(line))
    f.close()


def main():
    websites = (
        "www.iitg.ac.in",
        "www.msu.ru",
        "www.google.com",
        "www.fmu.ac.jp",
        "www.ox.ac.uk",
    )

    for website in websites:
        ping(website, 64, 20)
        trace_route(website)

    for size in (2 ** i for i in range(6, 11)):
        ping(websites[3], size, 20)


if __name__ == "__main__":
    main()