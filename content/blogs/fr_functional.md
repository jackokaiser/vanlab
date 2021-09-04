---
title: Le van est fonctionnel
date: 2021-04-04
cover: https://res.cloudinary.com/vanderfool/image/upload/v1630405779/functional/IMG_20210320_124433_ysqqg5.jpg
---

Après 7 mois de construction à temps partiel, le van est entièrement fonctionnel.
Nous avons déjà fait 3 week-ends de tests, incluant dodo, randonnée et télétravail.
Nous devons encore trouver quoi enmener pour les longs voyages et comment optimiser l'espace de stockage, mais sinon, tout fonctionne.
Dans ce post, je vous présente les dernières fonctionnalités du van, qui font toute la différence.

Les deux panneaux solaires de 100W sont solidement fixés et installés sur le toit.
Nous les avons montés proche du métal du toit, afin qu'ils ne prennent pas le vent et restent discrets.
Ils sont vissés par le côté à l'aide de rivets écrous que j'ai sertis directement sur le cadre des panneaux.

![2x100W panneaux photovoltaïques](https://res.cloudinary.com/vanderfool/image/upload/v1630405777/functional/IMG-20210316-WA0008_xahfgb.jpg "2x100W panneaux photovoltaïques")

La table tournante est en place, Jean-Marc nous a trouvé des tubes métalliques solides et filetés dont nous avions besoin.
Il s'agit des tubes "My Tubes" de Leroy Merlin, au rayon étagères et décoration.
La table a un support sur sa face inférieure, qui se visse dans un tube en forme de L, lui-même inséré dans un tube plus grand (un pied de trampoline) fixé dans le coin d'un tabouret.
Il y a deux centres de rotation : un dans le grand tube près du tabouret, et l'autre centre de la table avec le support.
La nuit, on enlève le tube en forme de L et la table s'insère entre les deux tabourets pour compléter le sommier du lit.
Camille a fait beaucoup de couture pour diviser les deux matelats du futon en quatre pièces chacun (deux tabourets, une table, un lit statique).

<div class="row-image">
![Mode jour](https://res.cloudinary.com/vanderfool/image/upload/v1630405779/functional/IMG_20210404_144758_rg2dy9.jpg "Mode jour")
![Mode nuit](https://res.cloudinary.com/vanderfool/image/upload/v1630405778/functional/IMG_20210404_144321_evjy0r.jpg "Mode nuit")
</div>


La plupart des appareils électriques sont en place.
Le tableau électrique et la batterie de loisir sont situés sous la banquette passager.
Sous la table, nous avons deux prises 12V qui peuvent être utilisées pour charger les téléphones et même l'ordinateur portable de Camille à l'aide d'un adaptateur USB-C PD.
J'ai également monté un élévateur de tension DC-DC dans une boîte de dérivation afin de pouvoir charger mon ordinateur portable à 19,2V en utilisant un connecteur XT60.
Ainsi, nos deux ordinateurs portables se rechargent rapidement et nous n'avons jamais à convertir le courant continu en courant alternatif : éfficacité.
Toutes les lumières fonctionnent et ont des interrupteurs dédiés.
Il y a des prises 12V au dessus de la cuisine et sur les deux côtés du lit pour ajouter des lampes de lecture ou un chargeur de téléphone.
Le réfrigérateur est également opérationnel.

<div class="row-image">
![Prises sous la table](https://res.cloudinary.com/vanderfool/image/upload/v1630405779/functional/IMG_20210405_110733_mrnzwk.jpg "Prises sous la table")
![Panneau électrique](https://res.cloudinary.com/vanderfool/image/upload/v1630405780/functional/IMG_20210405_111014_ozwvdh.jpg "Panneau électrique")
![Monitoring électrique](https://res.cloudinary.com/vanderfool/image/upload/v1630405779/functional/IMG_20210405_110911_fp0lwt.jpg "Monitoring électrique")
</div>

Le système de gaz fonctionne bien, nous pouvons cuisiner sur nos deux plaques et utiliser le chauffage.
Jusqu'à présent, les nuits étaient autour de 0°C et nous avons dormi sans problème avec le chauffage éteint.
Il faut juste porter un bonnet à cause du trou de ventilation à côté de notre tête.
Sinon, nous avons simplement allumé le chauffage le matin pendant quelques minutes pour nous aider à sortir du lit.
Le système d'eau est également fonctionnel - la pompe à pied fonctionne bien et nous avons seulement remarqué quelques petites fuites de gouttelettes sur nos tuyaux.
Nous garderons un œil sur ce point.

<div class="row-image">
![Compartiment étanche](https://res.cloudinary.com/vanderfool/image/upload/v1630405781/functional/IMG_20210405_111209_nnktf1.jpg "Compartiment étanche")
![Vannes gaz](https://res.cloudinary.com/vanderfool/image/upload/v1630405780/functional/IMG_20210405_111308_byfbqe.jpg "Vannes gaz")
![Chauffage au gaz](https://res.cloudinary.com/vanderfool/image/upload/v1630405781/functional/IMG_20210405_111357_d2y1ki.jpg "Chauffage au gaz")
</div>

L'espace de vie est assez spacieux, nous pouvons tous les deux nous tenir debout et évoluer sans nous gêner l'un l'autre.
Nous avons même cuisiné et dîné avec deux amis - Yannick et Nicolas - tout cela dans le van.
Il est resté chaud et l'humidité dans la pièce n'a pas beaucoup augmenté.
Le carton au sol sera bientôt remplacé par du parquet, et Camille va coudre un rideau thermique adéquat.

<div class="row-image">
![L'entrée spacieuse](https://res.cloudinary.com/vanderfool/image/upload/v1630405781/functional/IMG_20210405_111651_sytpip.jpg "L'entrée spacieuse")
![Dîner avec Yannick et Nicolas](https://res.cloudinary.com/vanderfool/image/upload/v1630405777/functional/IMG-20210404-WA0032_hrvyaf.jpg "Dîner avec Yannick et Nicolas")
</div>

Il y a quelque temps, lorsque nous avons isolé le van, nous avons inséré des capteurs de température et d'humidité DHT22 dans le chanvre du plafond, dans le chanvre du mur et dans le trou de ventilation.
Je les ai maintenant reliés à un ESP32 équipé d'un DHT22 supplémentaire et d'un CCS811 (capteur de CO2 et de VOC) pour mesurer la qualité de l'air à l'intérieur du van et l'efficacité de l'isolation.
J'ai construit un boîtier en bois moche, mais à l'avenir, on pourra en faire un plus beau en impression 3D.
Jusqu'à présent nous avons constaté que l'humidité et la température étaient toujours plus extrêmes au plafond, donc l'isolation joue bien son rôle de tampon.

<div class="row-image">
![Boîte à capteurs](https://res.cloudinary.com/vanderfool/image/upload/v1630405777/functional/IMG_20210326_180607_wk9uuv.jpg "Boîte à capteurs")
![Implémentation](https://res.cloudinary.com/vanderfool/image/upload/v1630405778/functional/IMG_20210326_180259_e4vfyd.jpg "Implémentation")
</div>

Nous avons également entamé les démarches pour immatriculer le van comme VASP camping-car.
La première étape sera de vérifier notre système de gaz - croisons les doigts.
