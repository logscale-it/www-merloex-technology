import type { IconName } from './components/Icons'

// single source for nav dropdown, footer links and homepage service cards
export const services: { to: string; label: string; icon: IconName; blurb: string; items: string[] }[] = [
  {
    to: '/technisches-facility-management',
    label: 'Technisches FM',
    icon: 'build',
    blurb: 'Betrieb, Wartung und Kontrolle der Gebäudetechnik',
    items: ['Betrieb und Kontrolle des Gebäudes', 'Anlagenwartung und -reparatur', 'Überwachung der Technik', 'Begehungen'],
  },
  {
    to: '/infrastrukturelles-facility-management',
    label: 'Infrastrukturelles FM',
    icon: 'apartment',
    blurb: 'Hausmeister, Reinigung und Services rund um die Immobilie',
    items: ['Kleinreparaturmanagement', 'Hausmeisterdienste', 'Objektreinigung', 'Objektsanierung / Sanierungssteuerung'],
  },
  {
    to: '/kaufmaennisches-facility-management',
    label: 'Kaufmännisches FM',
    icon: 'analytics',
    blurb: 'Kosten, Verträge und Budgets im Blick',
    items: ['Kostenplanung', 'Kostenkontrolle', 'Betriebskostenoptimierung', 'Budgetbetreuung Sanierung'],
  },
]

export const PHONE = '+49 (0) 6053 6209552'
export const PHONE_HREF = 'tel:+4960536209552'
export const EMAIL = 'info@merloex.de'
