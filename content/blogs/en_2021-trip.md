---
title: Exploring France, Spain and Portugal
date: 2022-04-09
cover: https://res.cloudinary.com/vanderfool/image/upload/v1630406350/first_months/IMG_20210607_190053_jq4btj.jpg
---

We've been on the road for this longer trip from mid-July to mid-December.
It was our intention to return to our families for christmas, but also because winter is more comfortable in a house than in a van.
All in all, it went quite well for us, we roughly followed our plans around the coast of France, Spain and Portugal (even England with Gibraltar).
We were in time for Camille's hypnosis training in August in Avignon, and she graduated.
Also, we almost forgot about the pandemic, as we didn't have a TV and didn't meet much people either (vanlife is rather lonely).

I've shared the pretty landscape pictures on our [instagram page](https://www.instagram.com/vanderfool.fr/).
In this blog post, I provide an analysis of our vanlife, supported by data I collected during our trip.
If you're interested in the method, I've open-sourced [the code](https://github.com/jackokaiser/vanlife_analysis) I used to process and plot data.

## Driving

Let's start with a map of our three trips, automatically generated from google location history data.

<iframe src="https://www.google.com/maps/d/u/0/embed?mid=1rChaN2ThmCtaWgaOKvEWMAnF3JnIKtLW&ehbc=2E312F" width="640" height="480" style="width:100%;"></iframe>

For this last trip, we drove 10735 km in 144 days, averaging to an a cruising speed of 75 km/day.
This number is quite high for us, who never owned a car before, as we always lived close to well-connected cities.
It also reflects that we were changing our sleeping spot and moving forward almost every day.

The month we drove the most kilometers was August with 2745 km, mainly because we needed to reach Avignon in time for Camille's training.
The month that we drove the least was September with 1462 km, when we were in the Pyrenees: there was a lot to do there and we loved this place.

Vanlife is new to us and very different from our previous, urban lifestyle.
How did this change impact our carbon footprint?
This was an important question for me, which is why I recorded all the fuel we tanked during the trip.

## Carbon footprint

Disclaimer: the simulators available online to estimate carbon footprint are not adapted to vanlife.
I therefore decided to estimate our carbon footprint from scratch, using the data collected during the trip.
I'm not on expert on this topic so it could be that the reference numbers I have found online are wrong - I'm open to discussion.

Most vans drive with diesel.
In contrast, our van drives with petrol and Compressed Natural Gas (CNG) (it's methane, which is different from LPG).
It has one 100L petrol tank and a 20kg CNG tank.
It's advantageous to drive on CNG as much as possible, but tanking stations are sparse: there are less than 200 open to the public in France.
Natural gas is a fossil fuel just like petrol, whereas but BioGNC is a renewable fuel which is locally produced from agricultural waste.
There were many BioGNC stations in the west of France, in August.
After crossing the border to Spain in October, we could find many CNG stations, but no BioGNC stations.
A van is a big and heavy car: I calculated our E10 fuel consumption to be around 16.8L/100km.

![Driven kilometers](https://res.cloudinary.com/vanderfool/image/upload/v1642884439/2021-trip/driven_km_urc9ph.png "Driven kilometers per month")

In total, we have consumed 767L of E10 petrol, 366kg of GNC and 180kg of BioGNC.
To estimate our carbon footprint, I have converted these numbers into kilograms of equivalent CO2 emitted using the factors I could find online.
These factors are different from one website to another, so here are the ones I used for reference:
- 1L of E10 emits 2.21 kg CO2 equivalent
- 1kg of CNG emits 2.96 kg CO2 equivalent
- 1kg of BioGNC emits 0.61 kg CO2 equivalent
This results in a total of 2888 kg CO2 equivalent for driving the van during 144 days.
We can extrapolate this number to 7320 kg CO2 equivalent for one year, assuming we would have continued cruising similarly.
As we were two people in the van, this rounds up to 3660 kg CO2 equivalent for one year for one person.

In comparison, an average French person emits 5769 kg of CO2 equivalent for transportation (representing 54% of the average footprint).
During our urban lifestyle, we relied mostly on public transportations, but we also used to fly a lot for work and vacations.
The flying part is really what used to ruin our carbon footprint badly.
For example, the last vacations we took while living our urban lifestyle were in Chile in 2019.
Two return tickets from Frankfurt to Santiago account for 8200 kg CO2 equivalent, more than what we would have emitted for the entire year had we continued the vanlife.

The other important categories when it comes to calculating carbon footprint are food diet and housing.
Our food diet didn't change substantially between vanlife and urban style - I didn't track our meat consumption.
Our housing emissions likely decreased compared to our urban lifestyle.
Adopting energy sobriety, most of the electricity we used was produced from our solar panels and stored in our battery.
We never charged the battery from another source than solar, and never reached critical battery levels.
Our setup would probably have been sufficient all year round in Spain, but maybe not for winter in France, when the sun is lower and days are shorter.
There's also the electricity we consumed in campings, for laundry and so on, which is hard to account for (but probably does not weight much).
For heating and cooking, we used a single 13kg bottle of propane, representing 150 kg CO2 equivalent.
We only sporadically turned the heater on for a few minutes in cold mornings, but never slept with the heater on.

Without surprise, transportation was the most important category of our carbon footprint.
Suprisingly though, it did not weight as much in our expenses.

## How much did it cost?

We've tracked all our expenses during the trip, also because it made splitting the bills easier.
Talking to other travellers, it looks like we are on the high-end of the spectrum with respect to spending.
All in all, we've spent 11430€ within 144 days, that's an average of 2381€ per month for the two of us.
I can't compare this figure with our urban lifestyle as I didn't track my expenses back then.

![Expenses plot](https://res.cloudinary.com/vanderfool/image/upload/v1642876868/2021-trip/total_expenses_oynk3f.png "Expenses plot")

![Fuel cost](https://res.cloudinary.com/vanderfool/image/upload/v1642933757/2021-trip/fuel_efficiencies_frcilq.png "Fuel cost")

We were able to work while on the road, so we could spend without worrying too much.
Food in general (groceries and restaurants) represented 49% of the total expenses.
Like proper foodies, we always tried out the nice restaurants in the towns we visited.
Dining out was our most important expense, representing 33% of the total budget, averaging to 183€ per week.
Exluding the entries below 10€ (mostly ice creams, crêpes and tapas), we are left with 100 entries, that can be considered as proper meals.
On average, we ate a meal in a restaurant 5 times a week, for a price of 35€ per meal for the two of us.
In comparison, a meal cooked from our groceries costed us 6€ on average, counting breakfast as a meal.

To entertain ourself further with sporting activities, museums and so on, we spent 17% of the budget, accounting for 404€ per month.
Camping only represented 8% of our total expenses, which averages to 190€ per month.
This is much fewer than the 800€ we were paying for rent in Germany, even when adding up our gas/fuel consumption for driving around (381€/month).
We did our best to drive as much as possible on GNC and BioGNC if available, which was much cheaper per km than E10 petrol: 0.10€/km for GNC versus 0.25€/km for E10.
For reference, during the trip, the median fueling cost per volume was 1.48€/L for E10 and 1.01€/kg for CNG/BioCNG.

The category "other" accounts mainly for local gifts we bought for friends and family, as well as public transportation.


## Thermal comfort and air quality in the van

I believe that we've spent lot more time and effort into insulating our van than most other vanlifers.
Especially for the air tightness, to protect the insulator from the water vapor released by cooking and breathing.
In the end it was worth it.

I have measured temperature and humidity in van at four spots: in the living area, near the exterior (in the fan), in the roof insulator and in the left wall insulator.
Parking the van in the sun during the summer months, the insulator in the roof could exceed 50°C.
Within the van however, the temperature would "only" peak to around 30°.
Here is plot of a representative hot summer day: the 21st of August in Avignon, I spent the whole day working within the van with the door opens.

![Hot summer day](https://res.cloudinary.com/vanderfool/image/upload/v1649517298/2021-trip/2021-08-21_temperature_twdgnf.png "Hot summer day")

We were in Spain until the end of November, and did not spend winter in the van, so we did not have any really cold days.
Here is a plot of a cold day in Grenada on the 18th of November, with a low peak at 0°C outside (just checked historical weather data online).
The room temperature was 5°C above the temperature in the insulators, without any heating throughout the evening.
When waking up around 9am, we turned on the heating a few minutes which quickly warmed the room.
We spent the rest on the day visiting Grenada, outside of the van.

![Cold winter day](https://res.cloudinary.com/vanderfool/image/upload/v1649517787/2021-trip/2021-11-18_temperature_qgh8hc.png "Cold winter day")





9 juin
10 décembre

air quality better in winter








## Our plans now

We're looking for a place to live
