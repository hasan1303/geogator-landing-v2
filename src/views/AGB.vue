<template>
  <div class="legal">
    <div class="container">
      <div class="legal__header">
        <h1>Allgemeine Geschäftsbedingungen (AGB)</h1>
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
    title: '1. Anbieter',
    items: [
      'GEOGATOR ist ein Angebot der MIM Marken Institut München GmbH, Ridlerstraße 35a, 80339 München, Deutschland (im Folgenden „Anbieter").',
    ]
  },
  {
    title: '2. Geltungsbereich',
    items: [
      '(1) Diese Allgemeinen Geschäftsbedingungen gelten für die Nutzung der Plattform GEOGATOR sowie aller darüber angebotenen Leistungen.',
      '(2) Das Angebot richtet sich ausschließlich an Unternehmer im Sinne von § 14 BGB, juristische Personen des öffentlichen Rechts oder öffentlich-rechtliche Sondervermögen.',
      '(3) Abweichende Bedingungen des Nutzers finden keine Anwendung, es sei denn, der Anbieter stimmt ihrer Geltung ausdrücklich zu.',
    ]
  },
  {
    title: '3. Leistungsbeschreibung',
    items: [
      '(1) GEOGATOR ist eine digitale Analyseplattform zur Bewertung der Sichtbarkeit von Unternehmen in KI-Systemen.',
      '(2) Die Leistungen umfassen insbesondere: Durchführung von Analysen (z. B. GEO Quick Check, GEO Deep Scan), Erstellung strukturierter Reports und Handlungsempfehlungen, Bereitstellung eines Dashboards zur Auswertung, kontinuierliche Analysen im Rahmen von Abonnements (z. B. GEO Pulse), Wettbewerbsvergleiche im Rahmen kostenpflichtiger Leistungen, automatisierte Hinweise (z. B. GEO Alerts).',
      '(3) Die bereitgestellten Inhalte stellen analytische Einschätzungen und Empfehlungen dar und ersetzen keine individuelle Beratung.',
      '(4) Der Anbieter ist berechtigt, die Leistungen jederzeit weiterzuentwickeln, anzupassen oder einzuschränken, sofern dies für den Nutzer zumutbar ist.',
    ]
  },
  {
    title: '4. Vertragsschluss',
    items: [
      '(1) Die Nutzung kostenpflichtiger Leistungen setzt eine Registrierung voraus.',
      '(2) Mit Abschluss des Bestellprozesses gibt der Nutzer ein verbindliches Angebot zum Abschluss eines Vertrags ab.',
      '(3) Der Vertrag kommt durch Annahme durch den Anbieter zustande.',
    ]
  },
  {
    title: '5. Preise und Zahlungsbedingungen',
    items: [
      '(1) Es gelten die jeweils auf der Plattform angegebenen Preise.',
      '(2) Alle Preise verstehen sich zzgl. gesetzlicher Umsatzsteuer, sofern nicht anders angegeben.',
      '(3) Die Zahlung erfolgt über die angebotenen Zahlungsdienstleister (z. B. Stripe).',
      '(4) Bei Abonnements erfolgt die Abrechnung monatlich im Voraus.',
    ]
  },
  {
    title: '6. Abonnements und Laufzeit',
    items: [
      '(1) Abonnements laufen auf monatlicher Basis, sofern nicht anders angegeben.',
      '(2) Sie verlängern sich automatisch um jeweils einen weiteren Monat, sofern sie nicht vor Ablauf gekündigt werden.',
      '(3) Die Kündigung ist jederzeit zum Ende der jeweiligen Laufzeit möglich.',
      '(4) Bereits gezahlte Entgelte werden nicht erstattet.',
    ]
  },
  {
    title: '7. Nutzung der Plattform',
    items: [
      '(1) Der Nutzer verpflichtet sich, die Plattform ausschließlich im Rahmen der gesetzlichen Bestimmungen zu nutzen.',
      '(2) Unzulässig ist insbesondere: die missbräuchliche oder automatisierte Nutzung der Plattform, die Weitergabe von Zugangsdaten an unbefugte Dritte, die Manipulation oder Beeinträchtigung der Systeme.',
      '(3) Der Anbieter ist berechtigt, bei Verstößen den Zugang vorübergehend oder dauerhaft zu sperren.',
    ]
  },
  {
    title: '8. Rechte an Inhalten und Reports',
    items: [
      '(1) Die durch GEOGATOR generierten Analysen und Reports dürfen vom Nutzer für eigene geschäftliche Zwecke verwendet werden.',
      '(2) Eine darüber hinausgehende Nutzung, insbesondere die Veröffentlichung oder Weitergabe an Dritte, ist nur im Rahmen der vereinbarten Nutzung zulässig.',
      '(3) Agenturen sind berechtigt, Reports im Rahmen ihrer Kundenprojekte zu verwenden und – sofern vorgesehen – unter eigenem Namen (White-Label) weiterzugeben.',
    ]
  },
  {
    title: '9. Verfügbarkeit',
    items: [
      '(1) Der Anbieter bemüht sich um eine möglichst hohe Verfügbarkeit der Plattform.',
      '(2) Eine ununterbrochene Verfügbarkeit kann nicht garantiert werden.',
      '(3) Wartungsarbeiten, Weiterentwicklungen oder technische Störungen können zu Einschränkungen führen.',
    ]
  },
  {
    title: '10. Haftung',
    items: [
      '(1) Der Anbieter haftet unbeschränkt für Vorsatz und grobe Fahrlässigkeit.',
      '(2) Bei leichter Fahrlässigkeit haftet der Anbieter nur bei Verletzung wesentlicher Vertragspflichten (Kardinalpflichten) und beschränkt auf den vorhersehbaren Schaden.',
      '(3) Eine Haftung für entgangenen Gewinn, mittelbare Schäden oder Folgeschäden ist ausgeschlossen.',
      '(4) Die Nutzung der bereitgestellten Analysen erfolgt auf eigenes Risiko. Ein bestimmter wirtschaftlicher Erfolg wird nicht geschuldet.',
    ]
  },
  {
    title: '11. Datenschutz',
    items: [
      '(1) Die Verarbeitung personenbezogener Daten erfolgt gemäß den geltenden Datenschutzbestimmungen, insbesondere der DSGVO.',
      '(2) GEOGATOR verarbeitet ausschließlich: öffentlich zugängliche Daten sowie Daten, die vom Nutzer freiwillig zur Verfügung gestellt werden.',
      '(3) Der Nutzer behält jederzeit die Kontrolle über seine Daten und kann diese löschen.',
      '(4) Weitere Informationen sind in der Datenschutzerklärung geregelt.',
    ]
  },
  {
    title: '12. Änderungen der Leistungen und AGB',
    items: [
      '(1) Der Anbieter behält sich vor, diese AGB aus sachlichen Gründen anzupassen.',
      '(2) Änderungen werden dem Nutzer rechtzeitig mitgeteilt.',
    ]
  },
  {
    title: '13. Schlussbestimmungen',
    items: [
      '(1) Es gilt das Recht der Bundesrepublik Deutschland unter Ausschluss des UN-Kaufrechts.',
      '(2) Gerichtsstand ist München, sofern der Nutzer Kaufmann ist.',
      '(3) Sollten einzelne Bestimmungen unwirksam sein, bleibt die Wirksamkeit der übrigen Regelungen unberührt.',
    ]
  },
  {
    title: '14. Besondere Regelungen für Agenturpartner',
    items: [
      '(1) GEOGATOR ermöglicht Agenturen die Nutzung der Plattform im Rahmen eigener Kundenprojekte.',
      '(2) Ein Vertragsverhältnis zwischen dem Anbieter und den Kunden der Agentur besteht nicht.',
      'Die Agentur ist allein verantwortlich für die Einhaltung aller datenschutzrechtlichen Vorschriften. GEOGATOR verarbeitet ausschließlich öffentlich zugängliche oder bereitgestellte Daten. Agenturen dürfen die Reports im Rahmen ihrer Kundenarbeit nutzen und weitergeben.',
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
    margin-bottom: 0.5rem;

    p {
      font-size: 0.9rem;
      color: $color-gray;
      line-height: 1.7;
    }
  }
}
</style>