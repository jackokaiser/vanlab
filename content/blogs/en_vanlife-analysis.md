---
title: Exploring France, Spain and Portugal
date: 2022-04-09
cover: https://res.cloudinary.com/vanderfool/image/upload/v1650227487/2021-trip/2021_trip_map_fcpvlc.png
---

We've been on the road for this longer trip from mid-July to mid-December.
It was our intention to return to our families for christmas, but also because winter is more comfortable in a house than in a van.
All in all, it went quite well for us, we roughly followed our plans around the coast of France, Spain and Portugal (even England with Gibraltar).
We were in time for Camille's hypnosis training in August in Avignon, and she graduated.
Also, we almost forgot about the pandemic, as we didn't have a TV and didn't meet much people either.
In that respect, vanlife is rather lonely, in the sense that we could only establish short relationships.

I've shared the pretty landscape pictures on our [instagram page](https://www.instagram.com/vanderfool.fr/).
In this blog post, I provide an analysis of our vanlife, supported by data I collected during our trip.
If you're interested in the method, I've open-sourced [the code](https://github.com/jackokaiser/vanlife_analysis) I used to process and plot data.

## Driving

Let's start with a map of our three trips, automatically generated from google location history data.

<iframe src="https://www.google.com/maps/d/u/0/embed?mid=1rChaN2ThmCtaWgaOKvEWMAnF3JnIKtLW&ehbc=2E312F" width="640" height="480" style="width:100%;"></iframe>

For this last trip, we drove 10735 km in 144 days, averaging to a cruising speed of 75 km/day.
This number is quite high for us, who never owned a car before, as we always lived close to well-connected cities.
It also reflects that we were changing our sleeping spot and moving forward almost every day.

![Driven kilometers](https://res.cloudinary.com/vanderfool/image/upload/v1652024743/2021-trip/driven_km_b4iyfh.png "Driven kilometers per month")

The month we drove the most kilometers was August with 2745 km, mainly because we needed to reach Avignon in time for Camille's training.
The month that we drove the least was September with 1462 km, when we were in the Pyrenees: there was a lot to do there and we loved this place.
We did not drive much in the cold winter months, since we came back to my mother place.

Vanlife is new to us and very different from our previous, sedentary lifestyle.
How did this change impact our carbon footprint?
This was an important question for me, which is why I recorded all the fuel we tanked during the trip.

## Carbon footprint

Disclaimer: the simulators available online to estimate carbon footprint are not adapted to vanlife.
I'm here sketching some components of our carbon footprint from scratch, using the data collected during the trip.

![Tanked fuels](https://res.cloudinary.com/vanderfool/image/upload/v1652024745/2021-trip/tanked_volumes_wfbkyl.png "Tanked fuels per month")

Most vans drive with diesel.
In contrast, our van drives with petrol and Compressed Natural Gas (CNG) (it's methane, which is different from LPG).
It has one 100L petrol tank and a 20kg CNG tank.
It's advantageous to drive on CNG as much as possible, but tanking stations are sparse: there are less than 200 open to the public in France.
Natural gas is a fossil fuel just like petrol, whereas BioGNC is a renewable fuel which is locally produced from agricultural waste.
There were many BioGNC stations in the west of France, when we were there in August.
After crossing the border to Spain in October, we could find many CNG stations, but no BioGNC stations.
Standard GNC stations often have a small ratio of BioGNC included, which was disregarded in the following calculations.

![Fuel consumption](https://res.cloudinary.com/vanderfool/image/upload/v1652026878/2021-trip/fuel_consumption_oyzafq.png "Fuel consumption")

Depending on the roads, our E10 fuel consumption was around 15.2L/100km (+/-1.9).
Over the whole year, we have consumed 1550L of E10 petrol, 530kg of CNG and 295kg of BioGNC.
To estimate our carbon footprint, I have converted these numbers into kilograms of equivalent CO2 emitted using the factors I could find online.
These factors are different from one website to another, so here are the ones I used for reference:

* 1L of E10 emits 2.21 kg CO2 equivalent
* 1kg of CNG emits 2.96 kg CO2 equivalent (1kg of CNG has more energy than 1L of fuel, as seen in the fuel consumption plot)
* 1kg of BioGNC emits 0.61 kg CO2 equivalent

This results in a total of 5176 kg CO2 equivalent for driving the van over one year - which makes 2588 kg CO2 equivalent for each of us.
I'll draw some comparisons between our footprint and an average French footprint, taken from this [carbone4 study](https://www.carbone4.com/myco2-empreinte-moyenne-evolution-methodo).
An average French peron emits 2650 kg CO2 equivalent in one year for transportation, which is fairly close to us.
Note that we have been emitting above average during the trip, and below average when we came back to my mother for winter.

So with respect to transportation, our vanlife has emitted about as much CO2 than an average French would.
Counterintuitively, it's still a reduction compared to our sedentary lifestyle though.
Indeed, we relied solely on public transportations back then, but we also used to take planes for both work and vacations.
As an example, for our last vacation in Chile in 2019, the return flight from Frankfurt to Santiago accounted for 4100 kg CO2 equivalent each!

Our food diet didn't change substantially between vanlife and sedentary lifestyle and I didn't track our meat consumption.
Housing and purchasing emissions were much smaller than an average French person, thanks to sobriety.
Primarily, we simply couldn't buy much at all since we were living in a confined space.
We used a single 13kg bottle of propane for heating and cooking, accounting for 150 kg CO2 equivalent.
We only sporadically turned the heater on for a few minutes on cold mornings, but we never slept with the heater on.
Also, there's no air conditioner.
Needless to say that it wasn't the optimal 20°C all the time like in a house, as we will see in the [thermal comfort section](#thermal).

Our electric appliances were all running using the energy collected from our 200W solar panels and stored in our battery.
A detailed carbon footprint calculation should take into account the CO2 emitted for the lifecycle of the battery and the solar panels, from construction to destruction.
There's also the energy we consumed in campings, for laundry, hot showers and so on.
We should also take into account the gas and electricity that we have consumed while we stayed at my mother place for the last 5 months.
These numbers are hard to account for.

Without surprise, our carbon footprint is dominated by transportation, despite the GNC tank.
Even when mitigating with sobriety on the other categories, driving at this pace is incompatible with the climate target of 2000 kg CO2 equivalent per person per year.
It's quite telling, that driving did not weigh quite as much in our expenses.

## How much did it cost?

We've tracked all our expenses during the trip, also because it made splitting the bills easier.
Talking to other travellers, it looks like we are on the high-end of the spectrum with respect to spending.
All in all, we've spent 11430€ within 144 days, that's an average of 2381€ per month for the two of us.
I can't compare this figure with our sedentary lifestyle as I didn't track my expenses back then.

![Expenses plot](https://res.cloudinary.com/vanderfool/image/upload/v1642876868/2021-trip/total_expenses_oynk3f.png "Expenses plot")

![Fuel cost](https://res.cloudinary.com/vanderfool/image/upload/v1652026851/2021-trip/fuel_price_jukpzh.png "Fuel cost")

We were able to work while on the road, so we could spend without worrying too much.
Food in general (groceries and restaurants) represented 49% of the total expenses.
Like proper foodies, we always tried out the nice restaurants in the towns we visited.
Dining out was our most important expense, representing 33% of the total budget, averaging to 183€ per week.
Excluding the entries below 10€ (mostly ice creams, crêpes and tapas), we are left with 100 entries that can be considered as proper meals.
On average, we ate a meal in a restaurant 5 times a week, for a price of 35€ per meal for the two of us.
In comparison, a meal cooked from our groceries cost us 6€ on average, counting breakfast as a meal.

To entertain ourselves further with sporting activities, museums and so on, we spent 17% of the budget, accounting for 404€ per month.
Camping only represented 8% of our total expenses, which averages to 190€ per month.
This is much less than the 800€ we were paying for rent in Germany, even when adding up our gas/fuel consumption for driving around (381€/month).
We did our best to drive as much as possible on GNC and BioGNC if available, which was much cheaper per km than E10 petrol: 0.12€/km for GNC versus 0.24€/km for E10.
For reference, the median fueling cost per volume was 1.49€/L for E10 and 1.08€/kg for CNG/BioCNG.

The category "other" accounts mainly for local gifts we bought for friends and family, as well as public transportation.


## <a name="thermal"></a>Thermal comfort and air quality in the van

I believe that we've spent a lot more time and effort into insulating our van than most other vanlifers.
Especially for the air tightness, to protect the insulation from the water vapor released by cooking and breathing.
In the end it was worth it.

I have measured temperature and humidity in the van at four spots: in the living area, near the exterior (in the fan), and in the roof and left wall insulation (hemp).
Parking the van in the sun during the summer months, the hemp in the roof could exceed 50°C.
Within the van however, the temperature would "only" peak to around 30°.
Here is a plot of a representative hot summer day: the 21st of August in Avignon, I spent the whole day working within the van with the door opens.

![Hot summer day](https://res.cloudinary.com/vanderfool/image/upload/v1649517298/2021-trip/2021-08-21_temperature_twdgnf.png "Hot summer day")

We were in Spain until the end of November, and did not spend winter in the van, so we did not have any really cold days.
Here is a plot of a cold day in Grenada on the 18th of November, with a low peak at 0°C outside (just checked historical weather data online).
The room temperature was 5°C above the temperature in the insulation, without any heating throughout the evening.
When waking up around 9am, we turned on the heating for a few minutes which quickly warmed the room.
We spent the rest of the day visiting Grenada, outside of the van.

![Cold winter day](https://res.cloudinary.com/vanderfool/image/upload/v1649517787/2021-trip/2021-11-18_temperature_qgh8hc.png "Cold winter day")

Relative humidity in the hemp remained below 70% even in winter.
We've also noted that air quality was better in winter than in summer, likely because the temperature difference between inside and outside increased natural ventilation.
In general, air quality wasn't good according to the sensor: above 4000ppm equivalent CO2 most of the time.
This sensor isn't very reliable as it doesn't measure CO2 directly though.
This is something we should check in the future.
Also, the computer fan we installed for ventilation was too loud for me to sleep.
