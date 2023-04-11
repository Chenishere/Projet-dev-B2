# Projet dev : Covoiturage

## Sommaires

1. Description du projet
2. Features

## 1) Description du projet

De manière synthétique, le projet "Covoiturage" aura pour but de réaliser un site web sur le covoiturage mais incluant quelques features supplémentaires. Le site inclura une database (Maria Db) afin de stocker Les informations de base de clients, telles que leur nom, adresse, numéro de téléphone, adresse e-mail, les paiements, les factures, etc.  
Utilisation de l'orm prisma avec node et express pour simplifier l'interaction avec la base de données.  
Le front sera en react.
Voici comment la database va s'organiser :

![image](https://user-images.githubusercontent.com/93198837/229475583-c9b0ed56-bfba-47e7-bad0-15af9dc8fcb1.png)

## 2) Voici les Features liées au projet covoiturage :

1. login/user  
   _Un utilisateur doit pouvoir creer et se connecter au site_
2. admin  
   _Il doit exister un profil "Admis" soumis à des restrictions différentes_
3. creation de trajet  
   _Pouvoir selection de maniere simple deux points pour planifier un trajet_
4. avis et commentaire / Notation  
   _Un user doit pouvoir laisser un commentaire ou émettre une notation sur un conducteur_
5. reservation  
   _Un user doit pouvoir reserver son trajet_
6. calcul des frais de voyages  
   _Un user doit pouvoir calculer ses frais de voyage via une interface avant la réservation_
7. recherche  
   _Un user doit pouvoir rechercher un autre user, une destination etc_
8. Historique des trajets  
   _Un user doit pouvoir accéder à son historique ou bien celui d'un autre utilisateur_
