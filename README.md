# Read Me

## React Native

Ik heb dus een kleine test project opgezet om te kijken hoe React Native werkt. Na een beetje inlezen ben ik uitgekomen op de Expo Go app. Het is een app dat je kan downloaden via de Google Play Store & App store. Door deze app kan je een project opzetten en gelijk bekijken via je telefoon als "mobiele app". Om het te bekijken via je telefoon moet je wel steeds op de app zelf gaan. Voor nu een begin fase leek het me wel handig. Het kan altijd nog veranderen ofcourse. En met een EAS Build kan je uiteindelijk de applicatie zetten op appstore of google play store.

### Wat is EAS?

EAS staat voor Expo Application Services. Hiermee kan je een native build maken van je app:

`.apk` voor Android

`.ipa` voor iOS

Anderen je app laten testen
Voor Android:

Je kunt de .apk direct delen. Mensen moeten dan “Install from unknown sources” toestaan.

Handiger: gebruik Expo’s TestFlight-achtige oplossing:

Upload naar Google Play Internal Testing (sneller en veiliger).

Voor iOS:

Je iOS app moet via TestFlight (Apple) gedeeld worden.

Je upload de .ipa naar App Store Connect → nodig testers toevoegen → zij krijgen een uitnodiging via TestFlight.

Alternatief: Expo Development Build

Met `expo dev-client` kun je een custom Expo Go app maken.

Testers installeren dit en kunnen je app direct via een link of QR-code draaien.



Tip: altijd npx expo ... gebruiken als je de nieuwe CLI wilt gebruiken, in plaats van het globale expo commando.

`npx expo start --web --tunnel`
De --tunnel optie maakt een publieke URL die overal toegankelijk is, ook buiten je Wi-Fi netwerk.
URL is geldig zolang je `npx expo start --web --tunnel` draait

Zodra je het proces stopt of je computer afsluit, werkt de link niet meer. Testers krijgen dan een foutmelding.

Elke keer dat je de tunnel opnieuw start, wordt er een nieuwe URL aangemaakt. 
Dat betekent dat je de nieuwe link opnieuw moet delen met je testers.
Geen permanente hosting

Dit is echt bedoeld voor snelle test- en prototype-doeleinden.

Stand Alone builds
```
eas build --platform android
eas build --platform ios
```
Je kunt je app exporteren naar een echte APK (Android) of IPA (iOS) zodat mensen het rechtstreeks kunnen installeren. 

inloggen in de CLI
`npx expo login`

inloggen als je expo als hebt geinstalleerd in de CLI
`expo login`

install expo globally
`npm install -g eas-cli` 

Initialize EAS (first time only):
`
eas build:configure
`
- Select All, Android or IOS
Publish an update (replacement for expo publish):
`eas update --branch main --message "your update message"`

check channels list EAS:
`eas channel:list`

Manage branches and channels with EAS CLI: 
https://docs.expo.dev/eas-update/eas-cli/

Create a branch example:
`eas branch:create staging
eas branch:create production`

Create a channel Example:
`eas channel:create staging
 eas channel:create production`

 After this the channel and branch should be automatically connected to eachother
 `✔ Created update channel "staging" on @mocevn/ScrollTrapTest project and connected it with existing "staging" branch.`
 
 `✔ Created update channel "production" on @mocevn/ScrollTrapTest project and connected it with existing "production" branch.`

 Met een Expo project dat native-only modules gebruikt → 
De gratis, werkende oplossing is:
`
npx expo start --web --tunnel
`

Testers openen de Tunnel URL op iOS/Android → werkt direct.

Extra links:
https://docs.expo.dev/get-started/set-up-your-environment/ 

https://reactnative.dev/docs/environment-setup

https://docs.expo.dev/eas/workflows/automating-eas-cli/

https://www.youtube.com/watch?v=uQCE9zl3dXU 