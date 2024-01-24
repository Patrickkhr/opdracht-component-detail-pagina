# Component detail pagina Patrick

![image](https://github.com/Patrickkhr/opdracht-component-detail-pagina/assets/143999685/5d758d44-d412-4e35-8009-a10c89b867a4)

## Inhoudsopgave

[1. Opdrachtgever](https://github.com/Patrickkhr/opdracht-component-detail-pagina?tab=readme-ov-file#opdrachtgever)  
[2. Ontwerp](https://github.com/Patrickkhr/opdracht-component-detail-pagina?tab=readme-ov-file#ontwerp)  
[3. Kenmerken en belangrijke onderdelen](https://github.com/Patrickkhr/opdracht-component-detail-pagina?tab=readme-ov-file#kenmerken-en-belangrijke-onderdelen)  
[4. Checklist](https://github.com/Patrickkhr/opdracht-component-detail-pagina?tab=readme-ov-file#checklist)


### Opdrachtgever
- Bedrijf: Frameless
- Naam: Yolijn van der Kolk
- Email: yolijn@frameless.io
- Slack: @Yolijn

### Wie is de opdrachtgever?
De opdrachtgever is Yolijn van der Kolk zij is een van de oprichters van het bedrijf Frameless zij werkt samen met haar team aan het NL-design system voor het gemeente van Utrecht. Yolijn helpt bedrijven met het bouwen van toegankelijke en gebruiksvriendelijke websites.

### Opdrachtomschrijving:
Het is de bedoeling dat ik de componenten detail pagina ga ontwikkelen zodat het voor de gebruiker inzichtelijker wordt wat hij nodig heeft, wat de status van het component is en hoe ver het component is met de Definition of Done.

### Ontwerp:
Het gaat hierbij alleen om de content pagina, dus de header, footer, sidebar, breadcrumb en 'op deze pagina' navigatie kun je weglaten.
https://www.figma.com/file/fy08SZpZmqx6ljLwvA3Woe/NLDS---Schetsboek?type=design&node-id=1765-1839&mode=design

Gemeente Utrecht heeft een eigen [community design system](https://nl-design-system.github.io/utrecht/storybook/?path=/docs/utrecht-design-tokens-kleuren--docs) bij NL Design System waar ze al veel componenten hebben bijgedragen. Ook hebben ze een website waar zij meer componenten documentatie op beschikbaar willen maken.

### Kenmerken en belangrijke onderdelen:

#### Tabs voor tonen van voorbeeld per programmeertaal

Een voorbeeld is beschikbaar voor een paar talen, de naam van de npm package is per taal anders en ook het code voorbeeld. Door tabs te maken die on-click andere informatie tonen kun je dit voor de eindgebruiker makkelijk beschikbaar maken.

In kleine viewports worden de tabs soms te lang, dan kan de gebruiker de taal kiezen in een selectbox.

- [Voorbeeld van het component op desktop](https://www.figma.com/file/DexK5wJdvMVoxXKn1kmmUB/NLDS---Doc-website---Ontwerp?type=design&node-id=369-10383&mode=design&t=tFmI1aEp7CfHmJ7t-4)
- [Voorbeeld van het component op mobile](https://www.figma.com/file/DexK5wJdvMVoxXKn1kmmUB/NLDS---Doc-website---Ontwerp?type=design&node-id=239-1599&mode=design&t=tFmI1aEp7CfHmJ7t-4)

#### Checklist sectie voor Definition of Done

Een nieuwe sectie die ook in het tab component voorkomt
In de nieuwe sectie wordt een spotlight getoond met de huidige status van het component en een status component als accordion waar elke status zichtbaar wordt. 
Voor dit component kun je zelf het design bepalen of overleggen met de designer van het kernteam Jeffrey of van gemeente Utrecht René en Jeroen. Robbert en Yolijn van Frameless kunnen jullie aan elkaar voorstellen.

- [Voorbeeld van het component op desktop en mobiel](https://www.figma.com/file/fy08SZpZmqx6ljLwvA3Woe/NLDS---Schetsboek?type=design&node-id=1765-1993&mode=design&t=065l0gWPpfXxPgXJ-4)
- [De Definition of Done per status](https://www.figma.com/file/sq4IhUI8iml49FvhZHI83e/Untitled?type=design&node-id=1-2&mode=design&t=zNq33S1j8xBMYKnx-4)

#### Sidebar
Aan de zijkant staan voor de belangrijke koppen en linkje in `op deze pagina`. Door op deze te klikken scrollt de pagina naar het betreffende onderdeel.
De sidebar blijft altijd in beeld ook als je ver naar beneden scrollt.
Op mobiel past deze navigatie niet, dan zit hij in een `op deze pagina` uitklap menu.

- [Voorbeeld van het component op desktop](https://www.figma.com/file/DexK5wJdvMVoxXKn1kmmUB/NLDS---Doc-website---Ontwerp?type=design&node-id=369-6775&mode=design&t=tFmI1aEp7CfHmJ7t-4)
- [Voorbeeld van het component op mobiel](https://www.figma.com/file/DexK5wJdvMVoxXKn1kmmUB/NLDS---Doc-website---Ontwerp?type=design&node-id=369-5165&mode=design&t=tFmI1aEp7CfHmJ7t-4)

#### Bonus: Tabs voor scroll-navigatie

Voorbeeld van de scroll-tab component is te zien in Nord Design System:
https://nordhealth.design/components/icon/#integration

- De tabs zijn sticky
- Als er teveel tabs zijn om in 1x te tonen is het menu responsive zoals bij https://ux.mailchimp.com/patterns/feedback#toaster
- Een tab selecteren zorgt voor scroll naar het geselecteerde element

### Checklist:
Een volledige componenten detail pagina met prioriteit op de aangegeven secties: tabs voor tonen van voorbeeld per programmeertaal en de checklist sectie voor Definition of Done. De pagina is gemaakt met custom properties en vormgegeven met de huisstijl van gemeente Utrecht.

