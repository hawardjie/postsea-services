import { useEffect } from 'react'

const COMPANY = 'POSTSEA LLC'
const CONTACT_EMAIL = 'info@postsea.com'
const EFFECTIVE_DATE = 'November 2, 2026'

function LegalLayout({ title, children }) {
  const year = new Date().getFullYear()

  useEffect(() => {
    document.title = `${title} | PostSea`
    window.scrollTo(0, 0)
  }, [title])

  return (
    <div className="container">
      <header className="legal-header">
        <a href="/" className="legal-home" aria-label="Back to PostSea Services home">
          <img src="/postsea-logo.png" alt="" width="40" height="40" />
          <span>PostSea Services</span>
        </a>
      </header>
      <main className="section legal">
        <h1>{title}</h1>
        <p className="legal-meta">Effective date: {EFFECTIVE_DATE}</p>
        {children}
      </main>
      <SiteFooter year={year} />
    </div>
  )
}

export function SiteFooter({ year }) {
  return (
    <footer className="footer" role="contentinfo">
      <nav className="footer-links" aria-label="Legal">
        <a href="/privacy">Privacy Policy</a>
        <span aria-hidden="true">·</span>
        <a href="/terms">Terms of Service</a>
      </nav>
      <p>© {year} {COMPANY}. All rights reserved.</p>
    </footer>
  )
}

const mailto = <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>

export function PrivacyPolicy() {
  return (
    <LegalLayout title="Privacy Policy">
      <p>
        This Privacy Policy explains how {COMPANY} ("PostSea", "we", "us", or "our") collects, uses,
        shares, and protects personal information when you visit this website or use any PostSea
        application, website, or service that links to this policy (together, the "Services"). By
        using the Services, you agree to the practices described here.
      </p>

      <h2>1. Information We Collect</h2>
      <h3>Information you provide</h3>
      <ul>
        <li>Account details, such as your name, email address, and password.</li>
        <li>Content you submit, such as photos, files, text, preferences, and messages.</li>
        <li>Communications with us, such as support requests and feedback.</li>
        <li>Payment details when you buy a paid feature. Payments are handled by our payment processors; we do not store full card numbers.</li>
      </ul>
      <h3>Information collected automatically</h3>
      <ul>
        <li>Device and usage data, such as IP address, browser type, operating system, pages viewed, features used, and timestamps.</li>
        <li>Approximate location derived from your IP address, and precise location only if you allow it in a feature that needs it.</li>
        <li>Cookies and similar technologies used to keep you signed in, remember settings, and understand how the Services are used.</li>
      </ul>
      <h3>Information from third parties</h3>
      <p>
        If you sign in with a third-party account (for example, Google or Apple), we receive the
        information that provider shares with your permission. We may also receive data from
        public sources and data providers that power features such as flight, market, or
        mobility information.
      </p>

      <h2>2. How We Use Information</h2>
      <ul>
        <li>To provide, operate, maintain, and improve the Services.</li>
        <li>To personalize features and recommendations.</li>
        <li>To process transactions and send related notices.</li>
        <li>To respond to requests and provide support.</li>
        <li>To send service updates and, where permitted, marketing you can opt out of at any time.</li>
        <li>To detect, prevent, and investigate fraud, abuse, security incidents, and violations of our Terms of Service.</li>
        <li>To protect the rights, property, and intellectual property of {COMPANY} and others.</li>
        <li>To comply with legal obligations.</li>
      </ul>

      <h2>3. How We Share Information</h2>
      <p>We do not sell your personal information. We share information only as follows:</p>
      <ul>
        <li><strong>Service providers</strong> that host, store, analyze, process payments, or deliver communications for us, under contracts that limit their use of your data.</li>
        <li><strong>AI and processing partners</strong> used to deliver features you request, only as needed to provide those features.</li>
        <li><strong>Legal and safety</strong> purposes, when we believe disclosure is required by law or needed to protect the rights, property, or safety of {COMPANY}, our users, or the public.</li>
        <li><strong>Business transfers</strong>, such as a merger, acquisition, financing, or sale of assets, in which case your information may transfer to the successor.</li>
        <li><strong>With your consent</strong> or at your direction, such as when you share content to social media.</li>
      </ul>

      <h2>4. Cookies and Tracking</h2>
      <p>
        You can control cookies through your browser settings. Blocking some cookies may stop
        parts of the Services from working. We do not respond to "Do Not Track" signals, but we
        honor Global Privacy Control signals where the law requires it.
      </p>

      <h2>5. Data Retention</h2>
      <p>
        We keep personal information only as long as needed for the purposes in this policy,
        including to meet legal, accounting, and security requirements. When it is no longer
        needed, we delete or de-identify it.
      </p>

      <h2>6. Security</h2>
      <p>
        We use reasonable administrative, technical, and physical safeguards to protect personal
        information. No method of transmission or storage is completely secure, and we cannot
        guarantee absolute security.
      </p>

      <h2>7. Your Choices and Rights</h2>
      <p>
        Depending on where you live, you may have the right to access, correct, delete, or
        receive a copy of your personal information, to opt out of certain processing, and to
        withdraw consent. You can also unsubscribe from marketing emails using the link in each
        message. To make a request, email {mailto}. We will verify your identity before acting
        on a request, and we will not discriminate against you for exercising your rights.
      </p>
      <h3>California residents</h3>
      <p>
        Under the California Consumer Privacy Act, as amended by the California Privacy Rights
        Act, California residents may request to know what personal information we collect, use,
        and disclose; request deletion or correction; and opt out of the sale or sharing of
        personal information. We do not sell personal information and do not share it for
        cross-context behavioral advertising. You may use an authorized agent to submit a request.
      </p>

      <h2>8. Children's Privacy</h2>
      <p>
        The Services are not directed to children under 13, and we do not knowingly collect
        personal information from them. If you believe a child has given us personal
        information, contact us and we will delete it.
      </p>

      <h2>9. International Users</h2>
      <p>
        {COMPANY} is based in the United States. If you use the Services from outside the United
        States, your information will be transferred to and processed in the United States,
        where data protection laws may differ from those in your country.
      </p>

      <h2>10. Third-Party Links</h2>
      <p>
        The Services may link to websites and services we do not control. Their privacy
        practices are governed by their own policies.
      </p>

      <h2>11. Changes to This Policy</h2>
      <p>
        We may update this Privacy Policy from time to time. We will post the updated version
        here and change the effective date. If changes are material, we will give additional
        notice where required.
      </p>

      <h2>12. Contact Us</h2>
      <p>
        Questions about this Privacy Policy or our data practices can be sent to {COMPANY} at {mailto}.
      </p>
    </LegalLayout>
  )
}

export function TermsOfService() {
  return (
    <LegalLayout title="Terms of Service">
      <p>
        These Terms of Service ("Terms") are a binding agreement between you and {COMPANY}{' '}
        ("PostSea", "we", "us", or "our") governing your access to and use of this website and
        every PostSea application, website, and service, including Food and Me, File Sharing,
        EconoWorld, Home Maintenance, Flight Tracker, Sharing Guru, Stock Price Watch, TourPet,
        and AI Hub (together, the "Services"). By accessing or using the Services, you agree to
        these Terms. If you do not agree, do not use the Services.
      </p>
      <p className="legal-callout">
        <strong>Please read Section 15 carefully.</strong> It requires most disputes to be resolved
        by individual binding arbitration and waives your right to a jury trial and to take part
        in a class action, unless you opt out.
      </p>

      <h2>1. Eligibility and Accounts</h2>
      <p>
        You must be at least 13 years old, and old enough to form a binding contract where you
        live, to use the Services. You are responsible for your account, for keeping your login
        details confidential, and for all activity under your account. Tell us right away at {mailto} if
        you believe your account has been used without permission.
      </p>

      <h2>2. Ownership and Intellectual Property</h2>
      <p>
        The Services and everything in them, including all software, source and object code,
        algorithms, models, data compilations, databases, designs, layouts, user interfaces,
        graphics, logos, icons, illustrations (including the PostSea wave dragon logo), images,
        screenshots, text, audio, video, product names, and the selection, arrangement, and
        "look and feel" of all of these (together, "PostSea Materials"), are owned by or licensed
        to {COMPANY} and are protected by United States and international copyright, trademark,
        patent, trade secret, and other intellectual property laws.
      </p>
      <p>
        All rights not expressly granted to you in these Terms are reserved by {COMPANY}. Nothing in
        these Terms transfers ownership of any PostSea Materials to you or grants any license by
        implication, estoppel, or otherwise.
      </p>

      <h2>3. Copyright Notice</h2>
      <p>
        © {new Date().getFullYear()} {COMPANY}. All rights reserved. The PostSea Materials are
        original works of authorship of {COMPANY}. No part of them may be reproduced, distributed,
        publicly displayed, publicly performed, modified, translated, or used to create
        derivative works, in any form or by any means, without the prior written permission of
        {' '}{COMPANY}, except as expressly allowed by these Terms or by applicable law.
      </p>

      <h2>4. Trademarks</h2>
      <p>
        "PostSea", "POSTSEA", the PostSea logo, and the names and logos of PostSea products,
        including Food and Me, File Sharing, EconoWorld, Home Maintenance, Flight Tracker,
        Sharing Guru, Stock Price Watch, TourPet, and AI Hub, are trademarks of {COMPANY}. You may
        not use them, or any confusingly similar mark, in connection with any product, service,
        domain name, or social media account without our prior written consent. Other trademarks
        shown in the Services belong to their respective owners.
      </p>

      <h2>5. Limited License to You</h2>
      <p>
        Subject to these Terms, {COMPANY} grants you a limited, personal, revocable,
        non-exclusive, non-transferable, non-sublicensable license to access and use the Services
        for your own personal or internal business purposes. This license ends automatically if
        you breach these Terms.
      </p>

      <h2>6. Restrictions</h2>
      <p>You agree that you will not, and will not help or allow anyone else to:</p>
      <ul>
        <li>Copy, reproduce, republish, frame, mirror, sell, resell, rent, lease, or otherwise exploit any part of the Services or PostSea Materials.</li>
        <li>Clone, imitate, or create a product or service that copies the features, functions, content, design, or "look and feel" of the Services.</li>
        <li>Decompile, disassemble, reverse engineer, or attempt to derive the source code, models, algorithms, or underlying ideas of the Services, except where the law expressly allows it despite this restriction.</li>
        <li>Use any robot, spider, scraper, crawler, or other automated means to access, collect, or extract data or content from the Services, except through an API we provide and under its terms.</li>
        <li>Use any PostSea Materials, or any output or data from the Services, to train, fine-tune, test, or improve any artificial intelligence or machine learning model, or to build a competing dataset.</li>
        <li>Remove, hide, or alter any copyright, trademark, or other proprietary notice.</li>
        <li>Bypass, disable, or interfere with security, rate limits, access controls, or usage restrictions.</li>
        <li>Upload or send viruses or malicious code, or disrupt or overload the Services.</li>
        <li>Use the Services to break any law, or to infringe or misappropriate anyone's rights.</li>
        <li>Impersonate any person, or misrepresent your connection with {COMPANY}.</li>
      </ul>

      <h2>7. Your Content</h2>
      <p>
        You keep ownership of the content you submit to the Services ("Your Content"). You grant
        {' '}{COMPANY} a worldwide, non-exclusive, royalty-free, sublicensable license to host, store,
        reproduce, process, adapt, and display Your Content only as needed to operate, provide,
        protect, and improve the Services. You confirm that you have all rights needed to grant
        this license and that Your Content does not violate these Terms or anyone's rights.
      </p>

      <h2>8. Feedback</h2>
      <p>
        If you send us ideas, suggestions, or feedback, you grant {COMPANY} a perpetual,
        irrevocable, worldwide, royalty-free right to use them for any purpose without
        restriction or payment to you.
      </p>

      <h2>9. Copyright Complaints (DMCA)</h2>
      <p>
        We respect intellectual property rights and expect our users to do the same. If you
        believe content on the Services infringes your copyright, send a notice to {mailto} that
        includes: your physical or electronic signature; a description of the copyrighted work;
        where the material appears on the Services; your contact information; a statement that
        you believe in good faith the use is not authorized; and a statement, under penalty of
        perjury, that your notice is accurate and that you are the owner or authorized to act
        for the owner. We may remove infringing material and terminate the accounts of repeat
        infringers.
      </p>

      <h2>10. Paid Features</h2>
      <p>
        Some features may require payment. Prices, billing terms, and any renewal terms will be
        shown before you buy. Unless the law requires otherwise or we state otherwise at
        purchase, fees are non-refundable.
      </p>

      <h2>11. Third-Party Services and Data</h2>
      <p>
        The Services may use or link to third-party services and data, such as maps, flight,
        market, and mobility data, and AI providers. We do not control and are not responsible
        for them. Information such as stock prices, flight positions, and economic data may be
        delayed, incomplete, or inaccurate. It is provided for general information only and is
        not financial, investment, legal, medical, veterinary, or professional advice.
      </p>

      <h2>12. Disclaimers</h2>
      <p className="legal-caps">
        The Services are provided "as is" and "as available", without warranties of any kind,
        express or implied, including warranties of merchantability, fitness for a particular
        purpose, title, and non-infringement. {COMPANY} does not warrant that the Services will be
        uninterrupted, secure, error-free, or accurate.
      </p>

      <h2>13. Limitation of Liability</h2>
      <p className="legal-caps">
        To the fullest extent allowed by law, {COMPANY} and its members, managers, employees, and
        agents will not be liable for any indirect, incidental, special, consequential,
        exemplary, or punitive damages, or for any loss of profits, revenue, data, or goodwill,
        arising out of or related to the Services or these Terms. Our total liability for all
        claims will not exceed the greater of the amount you paid us for the Services in the
        twelve months before the claim, or one hundred U.S. dollars ($100).
      </p>

      <h2>14. Indemnification</h2>
      <p>
        You agree to defend, indemnify, and hold harmless {COMPANY} and its members, managers,
        employees, and agents from any claims, damages, losses, and expenses, including
        reasonable attorneys' fees, arising from your use of the Services, Your Content, or your
        breach of these Terms or of anyone's rights.
      </p>

      <h2>15. Dispute Resolution and Arbitration</h2>
      <p>
        Before filing a claim, you agree to try to resolve the dispute informally by emailing
        {' '}{mailto}. If it is not resolved within 60 days, any dispute arising out of or relating to
        these Terms or the Services will be resolved by final and binding individual arbitration
        administered by the American Arbitration Association under its Consumer Arbitration
        Rules. You and {COMPANY} each waive the right to a jury trial and to take part in a class,
        collective, or representative action.
      </p>
      <p>
        Either party may bring an individual claim in small claims court. Either party may also
        seek injunctive or other equitable relief in court to stop actual or threatened
        infringement or misuse of intellectual property, including copyrights, trademarks, and
        trade secrets.
      </p>
      <p>
        You may opt out of this arbitration agreement by emailing {mailto} within 30 days after
        you first accept these Terms, stating your name and that you opt out.
      </p>

      <h2>16. Governing Law and Venue</h2>
      <p>
        These Terms are governed by the laws of the State of California and applicable U.S.
        federal law, without regard to conflict-of-law rules. Any claim not subject to
        arbitration will be brought only in the state or federal courts located in California,
        and you and {COMPANY} consent to their personal jurisdiction.
      </p>

      <h2>17. Suspension and Termination</h2>
      <p>
        We may suspend or end your access to the Services at any time, with or without notice,
        if we believe you have violated these Terms or to protect {COMPANY}, our users, or the
        Services. Sections 2–4, 6–9, and 11–19 survive termination.
      </p>

      <h2>18. Changes to These Terms</h2>
      <p>
        We may update these Terms from time to time. We will post the updated version here and
        change the effective date. Continuing to use the Services after changes take effect
        means you accept the updated Terms.
      </p>

      <h2>19. General</h2>
      <p>
        These Terms, together with our <a href="/privacy">Privacy Policy</a>, are the entire
        agreement between you and {COMPANY} about the Services. If any provision is found
        unenforceable, the rest remains in effect. Our failure to enforce a right is not a
        waiver. You may not assign these Terms without our written consent; we may assign them
        without restriction.
      </p>

      <h2>20. Contact Us</h2>
      <p>Questions about these Terms can be sent to {COMPANY} at {mailto}.</p>
    </LegalLayout>
  )
}
