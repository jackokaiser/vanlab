---
title: Exploration de la France, de l'Espagne et du Portugal
date: 2022-04-09
cover: https://res.cloudinary.com/vanderfool/image/upload/v1650227487/2021-trip/2021_trip_map_fcpvlc.png
---

Cela fait environ un an que nous sommes partis avec le van.
Nous avons été sur la route en vivant dans le van de mai à mi-décembre 2021, en une succession de trois allers-retours.
Depuis décembre, nous sommes de retour chez ma mère, on recommence seulement maintenant à faire des petits voyages.
Nous avions l'intention de retourner dans nos familles pour Noël, mais aussi parce que l'hiver est plus confortable dans une maison que dans un van.
Nous avons suivi nos plans autour de la côte en France, en Espagne et au Portugal (même en Angleterre avec Gibraltar).
Nous étions à temps pour la formation en hypnose de Camille en août à Avignon, et elle a obtenu son diplôme.
De plus, nous avons presque oublié la pandémie, car nous n'avions pas de télévision et n'avons pas rencontré beaucoup de gens non plus.
À cet égard, la vanlife est plutôt solitaire, dans le sens où nous n'avons pu établir que des relations à court terme.

J'ai partagé les jolies photos de paysages sur notre [page instagram](https://www.instagram.com/vanderfool.fr/).
Dans ce billet de blog, je propose une analyse de notre vanlife, étayée par les données que j'ai collectées pendant notre voyage.
Si la méthode vous intéresse, j'ai mis en libre accès [le code](https://github.com/jackokaiser/vanlife_analysis) que j'ai utilisé pour traiter et représenter les données.

## Conduite

Commençons par une carte de nos trois allers-retours, générée automatiquement à partir des données d'historique de localisation de google.

<iframe src="https://www.google.com/maps/d/u/0/embed?mid=1rChaN2ThmCtaWgaOKvEWMAnF3JnIKtLW&ehbc=2E312F" width="640" height="480" style="width:100% ;"></iframe>

En 210 jours de vie en van, nous avons parcouru 16336 km, à une vitesse de croisière moyenne de 78 km par jour.
Ce chiffre est assez élevé pour nous, qui n'avons jamais possédé de voiture auparavant, car nous avons toujours vécu dans des villes bien desservies.
Il reflète également le fait que nous changions de lieu de pour dormir et avancions presque tous les jours.

![Kilomètres parcourus](https://res.cloudinary.com/vanderfool/image/upload/v1652024743/2021-trip/driven_km_b4iyfh.png "Kilomètres parcourus par mois")

Les mois où nous avons parcouru le plus de kilomètres ont été juillet et août, principalement parce que nous devions atteindre Avignon à temps pour la formation de Camille.
Le mois où nous avons le moins roulé pendant le voyage a été septembre avec 1462km, lorsque nous étions dans les Pyrénées : il y avait beaucoup à faire là-bas et nous avons adoré cet endroit.
Depuis décembre, nous sommes de retour à la vie sédentaire (transitoire) chez ma mère et nous avons encore parcouru 2511km en 147 jours (moyenne de 17km/jour).

La vie en van est nouvelle pour nous et très différente de notre ancien mode de vie sédentaire.
Quel a été l'impact de ce changement sur notre empreinte carbone ?
C'était une question importante pour moi, c'est pourquoi j'ai noté tout le carburant que nous avons consommé.

## Empreinte carbone

Les simulateurs disponibles en ligne pour estimer l'empreinte carbone ne sont pas adaptés à la vie en van.
Comme nous avons changé de mode de vie au cours de l'année, le calcul de notre empreinte annuelle est trop compliqué.
Au lieu de cela, je vais ici esquisser les composantes les plus importantes de notre empreinte carbone, en utilisant les données collectées pendant le voyage.
Je vais comparer notre empreinte avec l'empreinte moyenne d'un Français, tirée de cette [étude carbone4](https://www.carbone4.com/myco2-empreinte-moyenne-evolution-methodo).
Comme pour la moyenne des Français, notre empreinte carbone est dominée par le transport.

![Consommation de carburant](https://res.cloudinary.com/vanderfool/image/upload/v1652026878/2021-trip/fuel_consumption_oyzafq.png "Consommation de carburant")

La plupart des camionnettes fonctionnent au diesel.
En revanche, notre camionnette fonctionne à l'essence et au gaz naturel comprimé (GNC) (il s'agit de méthane, ce qui est différent du GPL).
Il possède un réservoir d'essence de 100 litres et un réservoir de GNC de 20 kg.
Il est avantageux de rouler au GNC autant que possible, mais les stations de ravitaillement sont rares : il y en a moins de 200 ouvertes au public en France.
Le gaz naturel est un combustible fossile comme l'essence, alors que le BioGNC est un combustible renouvelable, produit localement à partir de déchets agricoles.
Il y avait de nombreuses stations BioGNC dans l'ouest de la France, lorsque nous y étions en août.
Après avoir traversé la frontière espagnole en octobre, nous avons pu trouver de nombreuses stations GNC, mais aucune station BioGNC.
Les stations GNC standard ont souvent un petit ratio de BioGNC inclu, qui n'a pas été pris en compte dans les calculs suivants.
Selon les routes, notre consommation de carburant E10 était d'environ 15.2L/100km (+/-1.9).
En revanche, la consommation de BioGNC et GNC était plus faible, environ 9kg/100km (+/-0.7).
Nous roulions principalement sur des petites routes de campagne et parfois en montagne, nous utilisions rarement les autoroutes.

![Carburants consommés par mois](https://res.cloudinary.com/vanderfool/image/upload/v1652521787/2021-trip/tanked_volumes_rinjcb.png "Carburants consommés par mois")

Sur l'ensemble de l'année, nous avons consommé 1550L d'essence E10, 530kg de GNC et 295kg de BioGNC.
Pour estimer notre empreinte carbone concernant le transport, j'ai converti ces chiffres en kilogrammes d'équivalent CO2 émis en utilisant les facteurs que j'ai pu trouver en ligne.
Ces facteurs sont différents d'un site web à l'autre, voici donc ceux que j'ai utilisés comme référence :

* 1L d'E10 émet 2,21 kg d'équivalent CO2
* 1 kg de GNC émet 2,96 kg d'équivalent CO2 (1 kg de GNC a plus d'énergie que 1 litre de carburant, comme le montre le graphique de consommation de carburant)
* 1 kg de BioGNC émet 0,61 kg d'équivalent CO2

Cela donne un total de 5176 kg d'équivalent CO2 pour la conduite du van sur une année - ce qui fait 2588 kg d'équivalent CO2 pour chacun de nous.
Un Français moyen émet 2650 kg d'équivalent CO2 en un an pour le transport, ce qui est assez proche de nous.
Notez que nous avons émis plus que la moyenne pendant le voyage, et moins que la moyenne quand nous sommes revenus chez ma mère pour l'hiver.

Donc, en ce qui concerne le transport, notre vie en van a émis à peu près autant de CO2 que celle d'un Français moyen.
Contre-intuitivement, c'est tout de même une réduction importante par rapport à notre empreinte carbone liée au transport lorsque nous vivions en Allemagne.
En effet, nous utilisions uniquement les transports publics à l'époque, mais nous prenions également l'avion pour le travail et les vacances.
À titre d'exemple, lors de nos dernières vacances au Chili en 2019, le vol aller-retour entre Francfort et Santiago a représenté 4100 kg d'équivalent CO2 pour chacun d'entre nous !
Prendre ce vol a émis environ 50 % de carbone de plus que la conduite du van pendant toute l'année.

Notre régime alimentaire n'a pas beaucoup changé entre la vanlife et le mode de vie sédentaire et je n'ai pas suivi notre consommation de viande et de produits laitiers.
Les émissions liées au logement et aux achats étaient beaucoup plus faibles que celles d'un Français moyen, par sobriété.
En effet, nous ne pouvions tout simplement pas acheter grand-chose puisque nous vivions dans un espace confiné.
Nous avons utilisé une seule bouteille de propane de 13 kg pour le chauffage et la cuisine, ce qui représente 150 kg d'équivalent CO2.
Nous n'allumions le chauffage que temporairement, pendant quelques minutes, les matins froids, mais nous ne dormions jamais avec le chauffage allumé.
De plus, nous n'avons pas de climatiseur.
Inutile de dire que la température n'était pas toujours entre 20 et 25°C comme dans une maison, comme nous le verrons dans la section [confort thermique](#thermal).

Nos appareils électriques fonctionnaient tous grâce à l'énergie collectée par nos panneaux solaires de 200W et stockée dans notre batterie.
Un calcul détaillé de l'empreinte carbone devrait prendre en compte le CO2 émis pendant le cycle de vie de la batterie et des panneaux solaires, de leur construction à leur destruction.
Il y a aussi l'énergie que nous avons consommée en camping, pour la lessive, les douches chaudes, etc., ainsi que le gaz et l'électricité que nous avons consommés en restant chez ma mère pendant les 5 derniers mois.
Ces chiffres sont difficils à calculer précisément cette année.

Rien qu'avec la partie transport, 2588 kg d'équivalent CO2 est déjà au-dessus de l'objectif de 2000 kg d'équivalent CO2 de l'Accord de Paris pour un réchauffement global de +2°C.
Il est assez révélateur que le carburant n'ai pas pesé aussi lourd dans notre budget.

## Combien cela a-t-il coûté ?

Nous avons suivi toutes nos dépenses, notamment parce que cela a facilité le partage des factures.
En discutant avec d'autres voyageurs, il semble que nous soyons dans le haut du spectre en ce qui concerne les dépenses.
En tout, nous avons dépensé 11430€ en 144 jours (l'aller-retour bleu sur la carte), soit une moyenne de 2381€ par mois pour nous deux.
Je ne peux pas comparer ce chiffre avec notre mode de vie sédentaire car je n'ai pas noté nos dépenses à l'époque.

![Nos dépenses](https://res.cloudinary.com/vanderfool/image/upload/v1642876868/2021-trip/total_expenses_oynk3f.png "Nos dépenses")

![Coût du carburant](https://res.cloudinary.com/vanderfool/image/upload/v1652026851/2021-trip/fuel_price_jukpzh.png "Coût du carburant")

Nous avons travailler tout au long du voyage, donc nous pouvions dépenser sans trop nous inquiéter.
La nourriture en général (épicerie et restaurants) a représenté 49 % des dépenses totales.
En bons gastronomes, nous avons toujours essayé les bons restaurants dans les villes que nous avons visitées.
Les sorties au restaurant étaient notre principale dépense, représentant 33 % du budget total, soit une moyenne de 183 € par semaine.
Si l'on exclut les points de données inférieures à 10€ (essentiellement des glaces, des crêpes et des tapas), il reste 100 points qui peuvent être considérés comme des repas.
En moyenne, nous avons pris un repas au restaurant 5 fois par semaine, pour un prix de 35€ par repas pour nous deux.
En comparaison, un repas cuisiné à partir de nos courses nous coûtait 6€ en moyenne, en comptant le petit-déjeuner comme un repas.

Pour nous divertir davantage avec des activités sportives, des musées, etc., nous avons dépensé 17% du budget, soit 404€ par mois.
Le camping n'a représenté que 8% de nos dépenses totales, soit 190€ par mois en moyenne.

C'est beaucoup moins que les 800€ que nous payions pour le loyer en Allemagne, même en ajoutant notre consommation de gaz/carburant pour nous déplacer (381€/mois).
Nous avons fait de notre mieux pour rouler autant que possible au GNC et au BioGNC s'il était disponible, qui était beaucoup moins cher au km que l'essence E10 : 0,12€/km pour le GNC contre 0,24€/km pour l'E10.
Pour référence, le coût médian à la pompe était de 1,49€/L pour l'E10 et de 1,08€/kg pour le GNC/BioGNC.

La catégorie "autres" représente principalement les cadeaux locaux que nous avons achetés pour nos amis et notre famille, ainsi que les transports publics.

## <a name="thermal"></a>Confort thermique et qualité de l'air dans le van

Je crois que nous avons consacré beaucoup plus de temps et d'efforts à l'isolation de notre van que la plupart des autres vanlifers.
Surtout pour l'étanchéité à l'air, pour protéger l'isolation de la vapeur d'eau dégagée par la cuisine et la respiration.
Au final, cela en valait la peine.

J'ai mesuré la température et l'humidité dans le van à quatre endroits : dans l'espace de vie, près de l'extérieur (dans le ventilateur), dans l'isolation du toit et de la paroi gauche (chanvre).
En garant le van au soleil pendant les mois d'été, le chanvre dans le toit pouvait dépasser 50°C.
Cependant, à l'intérieur du van, la température n'atteindrait "que" 30°C environ.
Voici le tracé d'une journée d'été chaude représentative : le 21 août à Avignon, j'ai passé toute la journée à travailler dans le van avec la porte ouverte.

![Journée chaude d'été](https://res.cloudinary.com/vanderfool/image/upload/v1649517298/2021-trip/2021-08-21_temperature_twdgnf.png "Journée chaude d'été")

Nous sommes restés en Espagne jusqu'à la fin novembre, et n'avons pas passé l'hiver dans le van, donc nous n'avons pas eu de journées vraiment froides.
Voici le tracé d'une journée froide à Grenade le 18 novembre, avec une pointe basse à 0°C à l'extérieur (je viens de vérifier les données météorologiques historiques).
La température de la pièce était de 5°C supérieure à la température de l'isolation, sans aucun chauffage pendant toute la soirée.
Au réveil, vers 9 heures, nous avons allumé le chauffage pendant quelques minutes, ce qui a rapidement réchauffé la pièce.
Nous avons passé le reste de la journée à visiter Grenade, à l'extérieur du van.

![Journée froide d'hiver](https://res.cloudinary.com/vanderfool/image/upload/v1649517787/2021-trip/2021-11-18_temperature_qgh8hc.png "Journée froide d'hiver")

L'humidité relative dans le chanvre est restée en moyenne inférieure à 70%, même en hiver.
Nous avons également noté que la qualité de l'air était meilleure en hiver qu'en été, probablement parce que la différence de température entre l'intérieur et l'extérieur augmentait la ventilation naturelle.
En général, la qualité de l'air n'était pas bonne selon le capteur : au-dessus de 4000ppm équivalent CO2 la plupart du temps.
Ce capteur n'est cependant pas très fiable car il ne mesure pas directement le CO2.
C'est un point que nous devrions vérifier à l'avenir.
Par ailleurs, le ventilateur d'ordinateur que nous avons installé pour la ventilation était trop bruyant pour le garder allumé la nuit.

## Et maintenant ?

C'était très sympa de voyager, même si c'était parfois un peu fatigant.
L'année prochaine, nous ferons moins de kilomètres, car nous pensons désormais à nous installer.
Pour l'instant, nous utilisons le van pour visiter des éco-villages et participer à des chantiers collaboratifs.
