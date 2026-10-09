/**
 * Verified business information — verbatim from CONTENT_INVENTORY.md
 * ("Verified business information" + "Global components").
 * Do NOT fabricate or alter. Items the inventory marks [NOT VERIFIED]
 * (leadership bios/photos, form endpoint/fields, referral reward terms,
 * analytics ownership) are intentionally absent and must be supplied by
 * the client — never invented.
 */

export const SITE_URL = 'https://www.kradvisorygroup.co.za';

export const business = {
  name: 'KR Advisory Group',
  positioning: 'CA(SA)-led · Accounting · Tax · Internal Audit',
  tagline: 'Financial clarity. Stronger controls. Better business decisions.',
  address: '64 Eagle Street, Kikuyu Estate, Waterfall, Midrand, Johannesburg',
  locality: 'CA(SA)-led · Midrand, Johannesburg',
  brandLine:
    'CA(SA)-led · Financial Clarity. Stronger Controls. Better Business Decisions.',
  phoneDisplay: '073 499 7148',
  whatsapp: {
    number: '27734997148',
    url: 'https://wa.me/27734997148',
    e164: '+27734997148',
    // Prefilled WhatsApp messages observed on the live site.
    consultationUrl:
      'https://wa.me/27734997148?text=I%20would%20like%20to%20book%20a%20consultation.',
    questionUrl: 'https://wa.me/27734997148?text=I%20have%20a%20question.',
  },
  emails: {
    general: 'info@kradvisorygroup.co.za',
    ralephenya: 'kralephenya@kradvisorygroup.co.za',
    gongxeka: 'ngongxeka@kradvisorygroup.co.za',
  },
  copyright: '© 2026 KR Advisory Group. All rights reserved.',
} as const;

export const leadership = [
  {
    name: 'Kgaogelo Ralephenya',
    credential: 'CA(SA)',
    title: 'Co-Founder & Managing Director',
    email: 'kralephenya@kradvisorygroup.co.za',
  },
  {
    name: 'Naledi Gongxeka',
    credential: 'CA(SA)',
    title: 'Co-Founder',
    email: 'ngongxeka@kradvisorygroup.co.za',
  },
] as const;

export const socials = [
  {
    label: 'LinkedIn',
    url: 'http://www.linkedin.com/in/kr-advisory-group-pty-ltd-52a532440',
  },
  { label: 'Instagram', url: 'https://www.instagram.com/kradvisorygroup' },
  { label: 'TikTok', url: 'https://www.tiktok.com/@kr.advisory.group' },
  { label: 'YouTube', url: 'https://www.youtube.com/@kradvisorygroup' },
  { label: 'X (Twitter)', url: 'https://x.com/KRAdvisorygroup' },
] as const;

export const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '/services' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
  { label: 'Referral', href: '/referral' },
] as const;
