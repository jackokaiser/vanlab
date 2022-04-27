---
title: Exploration de la France, de l'Espagne et du Portugal
date: 2022-04-09
cover: https://res.cloudinary.com/vanderfool/image/upload/v1650227487/2021-trip/2021_trip_map_fcpvlc.png
---

Nous avons été sur la route pour ce long voyage de mi-juillet à mi-décembre.
C'était notre intention de retourner dans nos familles pour les fêtes de Noël, mais aussi parce que l'hiver est plus confortable dans une maison que dans un van.
Dans l'ensemble, ça s'est plutôt bien passé pour nous, nous avons à peu près suivi nos plans autour des côtes de France, d'Espagne et du Portugal (même l'Angleterre avec Gibraltar).
Nous étions à temps pour la formation d'hypnose de Camille en août à Avignon, et elle a obtenu son diplôme.
De plus, nous avons presque oublié la pandémie, car nous n'avions pas de télévision et n'avons pas rencontré beaucoup de gens non plus.
À cet égard, la vie en van est plutôt solitaire, dans le sens où nous n'avons pu établir que de courtes relations.

J'ai partagé les jolies photos de paysages sur notre [page instagram](https://www.instagram.com/vanderfool.fr/).
Dans ce billet de blog, je propose une analyse de notre vanlife, étayée par les données que j'ai recueilli pendant notre voyage.
Si la méthode vous intéresse, j'ai mis en libre accès [le code](https://github.com/jackokaiser/vanlife_analysis) que j'ai utilisé pour traiter et représenter les données.

## Conduite

Commençons par une carte de nos trois voyages, générée automatiquement à partir des données d'historique de localisation de google.

<iframe src="https://www.google.com/maps/d/u/0/embed?mid=1rChaN2ThmCtaWgaOKvEWMAnF3JnIKtLW&ehbc=2E312F" width="640" height="480" style="width:100% ;"></iframe>

Pour ce dernier voyage, nous avons parcouru 10735 km en 144 jours, à une vitesse de croisière moyenne de 75 km/jour.
Ce chiffre est assez élevé pour nous, qui n'avons jamais possédé de voiture auparavant, car nous avons toujours vécu à proximité de villes bien desservies.
Il reflète également le fait que nous changions de lieu de sommeil et avancions presque tous les jours.

Le mois où nous avons parcouru le plus de kilomètres a été le mois d'août avec 2745 km, principalement parce que nous devions atteindre Avignon à temps pour la formation de Camille.
Le mois où nous avons le moins roulé est septembre avec 1462 km, lorsque nous étions dans les Pyrénées : il y avait beaucoup à faire là-bas et nous avons adoré cet endroit.

La vie en van est nouvelle pour nous et très différente de notre ancien mode de vie sédentaire.
Quel impact ce changement a-t-il eu sur notre empreinte carbone ?
C'était une question importante pour moi, c'est pourquoi j'ai noté tout le carburant que nous avons consommé pendant le voyage.

## Empreinte carbone

Avertissement : les simulateurs disponibles en ligne pour estimer l'empreinte carbone ne sont pas adaptés à la vie en van.
J'ai donc décidé d'estimer notre empreinte carbone en utilisant les données collectées pendant le voyage.
Je ne suis pas un expert en la matière, il se peut que j'ai fait des erreurs de calculs - je suis ouvert à la discussion.

La plupart des van roulent au diesel.
En revanche, notre van fonctionne à l'essence et au gaz naturel comprimé (GNC) (il s'agit de méthane, ce qui est différent du GPL).
Le van possède un réservoir d'essence de 100 litres et un réservoir de GNC de 20 kg.
Il est avantageux de rouler au GNC autant que possible, mais les stations de ravitaillement sont rares : il y en a moins de 200 ouvertes au public en France.
Le gaz naturel est un combustible fossile comme l'essence, alors que le BioGNC est un combustible renouvelable, produit localement à partir de déchets agricoles.
Il y avait de nombreuses stations BioGNC dans l'ouest de la France, lorsque nous y étions en août.
Après avoir traversé la frontière espagnole en octobre, nous avons pu trouver de nombreuses stations GNC, mais aucune station BioGNC.
Un van est une voiture grande et lourde : J'ai calculé que notre consommation de carburant E10 était d'environ 16,5L/100km (+/-1,6 selon les routes).

![kilomètres parcourus](https://res.cloudinary.com/vanderfool/image/upload/v1642884439/2021-trip/driven_km_urc9ph.png "kilomètres parcourus par mois")

Au total, nous avons consommé 767L d'essence E10, 366kg de GNC et 180kg de BioGNC.
Pour estimer notre empreinte carbone, j'ai converti ces chiffres en kilogrammes d'équivalent CO2 émis en utilisant les facteurs que j'ai pu trouver en ligne.
Ces facteurs sont différents d'un site Web à l'autre, voici donc ceux que j'ai utilisés à titre de référence :

* 1L d'E10 émet 2,21 kg d'équivalent CO2
* 1 kg de GNC émet 2,96 kg d'équivalent CO2 (1 kg de GNC contient plus d'énergie que 1 litre de carburant).
* 1 kg de BioGNC émet 0,61 kg d'équivalent CO2.

Cela donne un total de 2888 kg d'équivalent CO2 pour la conduite de la camionnette pendant 144 jours.

Je vais établir quelques comparaisons avec les chiffres français tirés de cette [étude carbone4](https://www.carbone4.com/myco2-empreinte-moyenne-evolution-methodo).
Dans le même laps de temps, un Français moyen aurait émis 1045 kg d'équivalent CO2 pour le transport (2650 kg équivalent CO2 en un an).
En ce qui concerne le transport, notre vanlife émet donc plus de CO2 qu'un Français moyen.
De manière contre-intuitive, il s'agit tout de même d'une réduction par rapport à notre mode de vie sédentaire.
En effet, à l'époque, nous n'utilisions que les transports en commun, mais nous prenions aussi l'avion pour le travail et les vacances.
A titre d'exemple, pour nos dernières vacances au Chili en 2019, le vol aller-retour Francfort-Santiago représentait 4100 kg équivalent CO2 chacun !

Notre régime alimentaire n'a pas beaucoup changé entre le vanlife et le mode de vie sédentaire et je n'ai pas suivi notre consommation de viande.
Les émissions liées au logement et aux achats étaient beaucoup plus faibles que celles d'un Français moyen, grâce à la sobriété.
En effet, nous ne pouvions tout simplement pas acheter grand-chose puisque nous vivions dans un espace confiné.
Nous avons utilisé une seule bouteille de propane de 13 kg pour le chauffage et la cuisine, ce qui représente 150 kg d'équivalent CO2.
Nous n'allumions le chauffage que sporadiquement, pendant quelques minutes, les matins froids, mais nous ne dormions jamais avec le chauffage allumé.
De plus, il n'y a pas de climatiseur.
Inutile de dire qu'il ne faisait pas tout le temps les 20°C optimaux comme dans une maison, comme nous le verrons dans la section [confort thermique](#thermique).
En comparaison, un Français moyen émet 1180 kg équivalent CO2 avec le gaz et le carburant pour le logement.

Nos appareils électriques fonctionnaient tous grâce à l'énergie collectée par nos panneaux solaires de 200W et stockée dans notre batterie.
Un calcul détaillé de l'empreinte carbone devrait prendre en compte le CO2 émis pour le cycle de vie de la batterie et des panneaux solaires, de leur construction à leur destruction.
Il y a aussi l'énergie que nous avons consommée en camping, pour la lessive, les douches chaudes, etc.
Ces chiffres sont difficiles à comptabiliser.

Sans surprise, notre empreinte carbone est dominée par le transport, malgré le réservoir GNC.
Même en atténuant avec sobriété sur les autres catégories, conduire à ce rythme est incompatible avec l'objectif climatique de 2000 kg équivalent CO2 par personne et par an.
Il est assez révélateur que la conduite n'ait pas pesé aussi lourd dans nos dépenses.

## Combien cela a-t-il coûté ?

Nous avons suivi toutes nos dépenses pendant le voyage, notamment parce que cela a facilité la répartition des factures.
En discutant avec d'autres voyageurs, il semble que nous nous situions dans le haut du spectre en ce qui concerne les dépenses.
En tout, nous avons dépensé 11430€ en 144 jours, soit une moyenne de 2381€ par mois pour nous deux.
Je ne peux pas comparer ce chiffre avec notre mode de vie sédentaire car je n'ai pas suivi mes dépenses à l'époque.

![Tracé des dépenses](https://res.cloudinary.com/vanderfool/image/upload/v1642876868/2021-trip/total_expenses_oynk3f.png "Tracé des dépenses")

![Coût du carburant](https://res.cloudinary.com/vanderfool/image/upload/v1642933757/2021-trip/fuel_efficiencies_frcilq.png "Coût du carburant")

Nous pouvions travailler tout en étant sur la route, donc nous pouvions dépenser sans trop nous inquiéter.
La nourriture en général (épicerie et restaurants) a représenté 49 % des dépenses totales.
En bons gastronomes, nous avons toujours essayé les bons restaurants dans les villes que nous avons visitées.
Les sorties au restaurant ont constitué notre dépense la plus importante, représentant 33 % du budget total, soit une moyenne de 183 € par semaine.
Si l'on exclut les entrées inférieures à 10€ (essentiellement des glaces, des crêpes et des tapas), il reste 100 entrées qui peuvent être considérées comme des repas corrects.
On average, we ate a meal in a restaurant 5 times a week, for a price of 35€ per meal for the two of us.
In comparison, a meal cooked from our groceries cost us 6€ on average, counting breakfast as a meal.

To entertain ourselves further with sporting activities, museums and so on, we spent 17% of the budget, accounting for 404€ per month.
Camping only represented 8% of our total expenses, which averages to 190€ per month.
This is much less than the 800€ we were paying for rent in Germany, even when adding up our gas/fuel consumption for driving around (381€/month).
We did our best to drive as much as possible on GNC and BioGNC if available, which was much cheaper per km than E10 petrol: 0.10€/km for GNC versus 0.25€/km for E10.
For reference, during the trip, the median fueling cost per volume was 1.48€/L for E10 and 1.01€/kg for CNG/BioCNG.

The category "other" accounts mainly for local gifts we bought for friends and family, as well as public transportation.


## <a name="thermal"></a>Confort thermique et qualité de l'air dans le van

Je crois que nous avons consacré beaucoup plus de temps et d'efforts à l'isolation de notre van que la plupart des autres vanlifers.
Surtout pour l'étanchéité à l'air, pour protéger l'isolation de la vapeur d'eau dégagée par la cuisine et la respiration.
Au final, cela en valait la peine.

J'ai mesuré la température et l'humidité dans le van à quatre endroits : dans l'espace de vie, près de l'extérieur (dans le ventilateur), et dans l'isolation du toit et de la paroi gauche (chanvre).
En garant le van au soleil pendant les mois d'été, la température du chanvre dans le toit pouvait dépasser 50°C.
Cependant, à l'intérieur de la camionnette, la température n'atteindrait "que" 30° environ.
Voici le tracé d'une journée d'été chaude représentative : le 21 août à Avignon, j'ai passé toute la journée à travailler dans le van avec la porte ouverte.

![Journée chaude d'été](https://res.cloudinary.com/vanderfool/image/upload/v1649517298/2021-trip/2021-08-21_temperature_twdgnf.png "Journée chaude d'été")

Nous sommes restés en Espagne jusqu'à fin novembre, et n'avons pas passé l'hiver dans le van, donc nous n'avons pas eu de journées vraiment froides.
Voici le tracé d'une journée froide à Grenade le 18 novembre, avec une pointe basse à 0°C à l'extérieur (je viens de vérifier les données météorologiques historiques en ligne).
La température de la pièce était de 5°C supérieure à la température de l'isolation, sans aucun chauffage pendant toute la soirée.
Au réveil, vers 9 heures, nous avons allumé le chauffage pendant quelques minutes, ce qui a rapidement réchauffé la pièce.
Nous avons passé le reste de la journée à visiter Grenade, à l'extérieur du van.

![Journée froide d'hiver](https://res.cloudinary.com/vanderfool/image/upload/v1649517787/2021-trip/2021-11-18_temperature_qgh8hc.png "Journée froide d'hiver")

L'humidité relative dans le chanvre est restée inférieure à 70% même en hiver.
Nous avons également noté que la qualité de l'air était meilleure en hiver qu'en été, probablement parce que la différence de température entre l'intérieur et l'extérieur augmentait la ventilation naturelle.
En général, la qualité de l'air n'était pas bonne selon le capteur : au-dessus de 4000ppm équivalent CO2 la plupart du temps.
Ce capteur n'est cependant pas très fiable car il ne mesure pas directement le CO2.
C'est un point que nous devrions vérifier à l'avenir.
De plus, le ventilateur d'ordinateur que nous avons installé pour la ventilation était trop bruyant pour que je puisse dormir.
