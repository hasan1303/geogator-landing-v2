<template>
  <div class="legal">
    <div class="container">
      <div class="legal__header">
        <h1>Datenschutzerklärung für GEOGATOR</h1>
      </div>

      <div class="legal__content">
        <div class="legal__block" v-for="section in sections" :key="section.title">
          <h3>{{ section.title }}</h3>
          <div v-for="item in section.items" :key="item" class="legal__item">
            <p>{{ item }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const sections = [
  {
    title: '1. Verantwortlicher',
    items: [
      'Verantwortlich für die Datenverarbeitung im Sinne der Datenschutz-Grundverordnung (DSGVO) ist:',
      'MIM Marken Institut München GmbH, Ridlerstraße 35a, 80339 München, Deutschland',
      'E-Mail: kirn@marke41.de',
      'Telefon: +49 (0) 89 729 59 915',
    ]
  },
  {
    title: '2. Allgemeine Hinweise zur Datenverarbeitung',
    items: [
      'Wir verarbeiten personenbezogene Daten ausschließlich im Einklang mit den geltenden datenschutzrechtlichen Bestimmungen, insbesondere der DSGVO.',
      'Die Verarbeitung erfolgt nur, soweit dies zur Bereitstellung unserer Plattform, zur Durchführung unserer Leistungen oder aufgrund Ihrer Einwilligung erforderlich ist.',
    ]
  },
  {
    title: '3. Art der verarbeiteten Daten',
    items: [
      'a) Registrierungsdaten: Name, E-Mail-Adresse, Unternehmensname, ggf. weitere freiwillige Angaben.',
      'b) Nutzungsdaten: Login-Zeitpunkte, Interaktionen innerhalb der Plattform, durchgeführte Analysen und Reports, technische Zugriffsdaten (z. B. IP-Adresse, Browsertyp, Betriebssystem, Referrer-URL).',
      'c) Zahlungsdaten: Die Zahlungsabwicklung erfolgt über externe Zahlungsdienstleister (z. B. Stripe Payments Europe Ltd., Irland). Dabei werden Zahlungsdaten direkt durch den jeweiligen Anbieter verarbeitet.',
      'd) Analysebezogene Daten: GEOGATOR verarbeitet ausschließlich öffentlich zugängliche Informationen sowie Daten, die durch den Nutzer aktiv bereitgestellt werden.',
    ]
  },
  {
    title: '4. Zwecke der Verarbeitung',
    items: [
      'Bereitstellung und Betrieb der Plattform',
      'Durchführung von Analysen und Erstellung von Reports',
      'Verbesserung unserer Services und Funktionen',
      'Vertragsabwicklung und Abrechnung',
      'Kommunikation mit Nutzern',
      'Gewährleistung der IT-Sicherheit und Systemstabilität',
    ]
  },
  {
    title: '5. Rechtsgrundlagen',
    items: [
      'Art. 6 Abs. 1 lit. b DSGVO (Vertragserfüllung)',
      'Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse am Betrieb, der Sicherheit und Weiterentwicklung der Plattform)',
      'Art. 6 Abs. 1 lit. a DSGVO (Einwilligung, z. B. bei optionalen Cookies oder Tracking-Technologien)',
    ]
  },
  {
    title: '6. Einsatz von Cookies und vergleichbaren Technologien',
    items: [
      'a) Technisch notwendige Cookies: Diese Cookies sind erforderlich, um die grundlegenden Funktionen der Plattform sicherzustellen (z. B. Login, Sicherheit, Speicherung von Einstellungen). Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO.',
      'b) Optionale Cookies (Analyse / Marketing): Sofern Analyse- oder Marketing-Cookies eingesetzt werden, erfolgt dies ausschließlich auf Grundlage Ihrer Einwilligung (Art. 6 Abs. 1 lit. a DSGVO) über ein Consent-Management-Tool.',
    ]
  },
  {
    title: '7. Zahlungsdienstleister',
    items: [
      'Zur Abwicklung von Zahlungen nutzen wir externe Zahlungsdienstleister, insbesondere Stripe Payments Europe Ltd., Irland. Dabei werden Zahlungsdaten direkt an den jeweiligen Anbieter übermittelt.',
      'Die Verarbeitung erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO.',
      'Es kann nicht ausgeschlossen werden, dass Daten an Unternehmen in Drittländern (z. B. USA) übermittelt werden. In diesen Fällen erfolgt die Übermittlung auf Grundlage geeigneter Garantien gemäß Art. 44 ff. DSGVO, insbesondere EU-Standardvertragsklauseln.',
    ]
  },
  {
    title: '8. Hosting und technische Infrastruktur',
    items: [
      'Unsere Plattform wird bei externen Dienstleistern gehostet. Dabei werden personenbezogene Daten (z. B. IP-Adressen, Zugriffsdaten) verarbeitet, um den Betrieb und die Sicherheit der Plattform zu gewährleisten.',
      'Die Verarbeitung erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO.',
    ]
  },
  {
    title: '9. Weitergabe von Daten',
    items: [
      'Eine Weitergabe personenbezogener Daten erfolgt nur, soweit dies erforderlich ist: an Zahlungsdienstleister (z. B. Stripe), an technische Dienstleister (Hosting, Infrastruktur), an Behörden, sofern eine gesetzliche Verpflichtung besteht.',
      'Eine darüber hinausgehende Weitergabe erfolgt nicht.',
    ]
  },
  {
    title: '10. Speicherdauer',
    items: [
      'Wir speichern personenbezogene Daten nur so lange, wie dies für die jeweiligen Zwecke erforderlich ist.',
      'Vertragsdaten: für die Dauer des Vertragsverhältnisses',
      'Abrechnungsdaten: gemäß gesetzlicher Aufbewahrungsfristen (in der Regel 10 Jahre)',
      'Nutzungs- und Logdaten: soweit zur Sicherstellung des Betriebs und der IT-Sicherheit erforderlich',
    ]
  },
  {
    title: '11. Nutzung durch Agenturen',
    items: [
      'Sofern GEOGATOR durch Agenturen im Rahmen von Kundenprojekten genutzt wird, ist die Agentur selbst für die datenschutzkonforme Verarbeitung der Daten ihrer Kunden verantwortlich.',
      'GEOGATOR verarbeitet ausschließlich öffentlich zugängliche oder bereitgestellte Daten.',
      'Eine Auftragsverarbeitung im Sinne von Art. 28 DSGVO findet in der Regel nicht statt, da GEOGATOR als eigenständige Analyseplattform betrieben wird.',
    ]
  },
  {
    title: '12. Datensicherheit',
    items: [
      'Wir setzen geeignete technische und organisatorische Maßnahmen ein, um Ihre Daten vor unbefugtem Zugriff, Verlust oder Manipulation zu schützen.',
      'Diese Maßnahmen werden regelmäßig überprüft und dem Stand der Technik angepasst.',
    ]
  },
  {
    title: '13. Rechte der betroffenen Personen',
    items: [
      'Sie haben jederzeit das Recht auf:',
      '• Auskunft über Ihre gespeicherten Daten (Art. 15 DSGVO)',
      '• Berichtigung unrichtiger Daten (Art. 16 DSGVO)',
      '• Löschung Ihrer Daten (Art. 17 DSGVO)',
      '• Einschränkung der Verarbeitung (Art. 18 DSGVO)',
      '• Datenübertragbarkeit (Art. 20 DSGVO)',
      '• Widerspruch gegen die Verarbeitung (Art. 21 DSGVO)',
    ]
  },
  {
    title: '14. Beschwerderecht',
    items: [
      'Sie haben das Recht, sich bei einer Datenschutzaufsichtsbehörde zu beschweren.',
      'Zuständige Aufsichtsbehörde: Bayerisches Landesamt für Datenschutzaufsicht (BayLDA)',
    ]
  },
  {
    title: '15. Automatisierte Entscheidungen',
    items: [
      'Es erfolgt keine automatisierte Entscheidungsfindung im Sinne von Art. 22 DSGVO.',
    ]
  },
  {
    title: '16. Änderungen dieser Datenschutzerklärung',
    items: [
      'Wir behalten uns vor, diese Datenschutzerklärung anzupassen, um sie an geänderte rechtliche Anforderungen oder technische Entwicklungen anzupassen.',
    ]
  },
]
</script>

<style lang="scss" scoped>
@use '../assets/styles/variables' as *;

.legal {
  padding: 7rem 0 $space-3xl;
  background: $color-mint;
  background-image:
    linear-gradient(rgba($color-teal, 0.05) 1px, transparent 1px),
    linear-gradient(90deg, rgba($color-teal, 0.05) 1px, transparent 1px);
  background-size: 48px 48px;
  min-height: 100vh;

  @media (max-width: $bp-sm) { padding: 6rem 0 3rem; }

  &__header {
    background: $color-white;
    border: 1px solid $color-border;
    border-radius: 20px;
    padding: $space-lg;
    margin-bottom: $space-xl;
    box-shadow: 0 2px 16px rgba($color-teal, 0.06);

    @media (max-width: $bp-sm) { padding: $space-md; margin-bottom: $space-lg; }

    h1 {
      font-size: clamp(1.4rem, 3vw, 2rem);
      color: $color-dark;
    }
  }

  &__content {
    background: $color-white;
    border: 1px solid $color-border;
    border-radius: 20px;
    padding: $space-lg;
    box-shadow: 0 2px 16px rgba($color-teal, 0.06);

    @media (max-width: $bp-sm) { padding: $space-md; }
  }

  &__block {
    padding: $space-md 0;
    border-bottom: 1px solid $color-border;

    &:first-child { padding-top: 0; }
    &:last-child { border-bottom: none; padding-bottom: 0; }

    h3 {
      font-size: 1rem;
      font-weight: 700;
      color: $color-teal;
      margin-bottom: 0.75rem;
    }
  }

  &__item {
    margin-bottom: 0.4rem;

    p {
      font-size: 0.9rem;
      color: $color-gray;
      line-height: 1.7;
    }
  }
}
</style>