import hustleConstants from '@/hustleConstants';

export default function Page() {
  const { COMPANY } = hustleConstants;

  return (
    <main className="container mx-auto my-20 prose">
      <h1 id="privacy-notice">PRIVACY NOTICE</h1>
      <p>Last updated February 03, 2023</p>
      <p>
        This privacy notice for {COMPANY.NAME} (&quot;Company,&quot;
        &quot;we,&quot; &quot;us,&quot; or &quot;our&quot;), describes how and
        why we might collect, store, use, and/or share (&quot;process&quot;)
        your information when you use our services (&quot;Services&quot;), such
        as when you:
      </p>
      <ul>
        <li>
          Visit our website at <a href={COMPANY.URL}>{COMPANY.URL}</a>, or any
          website of ours that links to this privacy notice
        </li>
        <li>
          Engage with us in other related ways, including any sales, marketing,
          or events
        </li>
      </ul>
      <p>
        <strong>Questions or concerns?</strong> Reading this privacy notice will
        help you understand your privacy rights and choices. If you do not agree
        with our policies and practices, please do not use our Services. If you
        still have any questions or concerns, please contact us at{' '}
        {COMPANY.EMAIL}.
      </p>
      <h2 id="summary-of-key-points">SUMMARY OF KEY POINTS</h2>
      <p>
        This summary provides key points from our privacy notice, but you can
        find out more details about any of these topics by finding the
        corresponding section below.
      </p>
      <p>
        <strong>What personal information do we process?</strong> When you
        visit, use, or navigate our Services, we may process personal
        information depending on how you interact with {COMPANY.NAME} and the
        Services, the choices you make, and the products and features you use.
      </p>
      <p>
        <strong>Do we process any sensitive personal information?</strong> We do
        not process sensitive personal information.
      </p>
      <p>
        <strong>Do we receive any information from third parties?</strong> We do
        not receive any information from third parties.
      </p>
      <p>
        <strong>How do we process your information?</strong> We process your
        information to provide, improve, and administer our Services,
        communicate with you, for security and fraud prevention, and to comply
        with law. We may also process your information for other purposes with
        your consent. We process your information only when we have a valid
        legal reason to do so.
      </p>
      <p>
        <strong>
          In what situations and with which types of parties do we share
          personal information?
        </strong>{' '}
        We may share information in specific situations and with specific
        categories of third parties.
      </p>
      <p>
        <strong>How do we keep your information safe?</strong> We have
        organizational and technical processes and procedures in place to
        protect your personal information. However, no electronic transmission
        over the internet or information storage technology can be guaranteed to
        be 100% secure, so we cannot promise or guarantee that hackers,
        cyber-criminals, or other unauthorized third parties will not be able to
        defeat our security and improperly collect, access, steal, or modify
        your information.
      </p>
      <p>
        <strong>What are your rights?</strong> Depending on where you are
        located geographically, the applicable privacy law may mean you have
        certain rights regarding your personal information.
      </p>
      <p>
        <strong>How do you exercise your rights?</strong> The easiest way to
        exercise your rights is by filling out our data subject request form
        available here:{' '}
        <a href={COMPANY.CONTACT_FORM_URL}>{COMPANY.CONTACT_FORM_URL}</a>, or by
        contacting us. We will consider and act upon any request in accordance
        with applicable data protection laws.
      </p>
      <h2 id="what-information-do-we-collect-">
        WHAT INFORMATION DO WE COLLECT?
      </h2>
      <h3 id="personal-information-you-disclose-to-us">
        Personal information you disclose to us
      </h3>
      <p>
        <strong>In Short:</strong> We collect personal information that you
        provide to us.
      </p>
      <p>
        We collect personal information that you voluntarily provide to us when
        you express an interest in obtaining information about us or our
        products and Services, when you participate in activities on the
        Services, or otherwise when you contact us.
      </p>
      <p>
        <strong>Personal Information Provided by You.</strong> The personal
        information that we collect depends on the context of your interactions
        with us and the Services, the choices you make, and the products and
        features you use. The personal information we collect may include the
        following:
      </p>
      <ul>
        <li>names</li>
        <li>phone numbers</li>
        <li>email addresses</li>
        <li>contact preferences</li>
        <li>contact or authentication data</li>
        <li>car details (make / model / year)</li>
        <li>
          state of the car that may affect services (broken windshield, pet hair
          in car, stains, etc)
        </li>
      </ul>
      <p>Sensitive Information. We do not process sensitive information.</p>
      <p>
        All personal information that you provide to us must be true, complete,
        and accurate, and you must notify us of any changes to such personal
        information.
      </p>
      <h3 id="information-automatically-collected">
        Information automatically collected
      </h3>
      <p>
        <strong>In Short:</strong> Some information — such as your Internet
        Protocol (IP) address and/or browser and device characteristics — is
        collected automatically when you visit our Services.
      </p>
      <p>
        We automatically collect certain information when you visit, use, or
        navigate the Services. This information does not reveal your specific
        identity (like your name or contact information) but may include device
        and usage information, such as your IP address, browser and device
        characteristics, operating system, language preferences, referring URLs,
        device name, country, location, information about how and when you use
        our Services, and other technical information. This information is
        primarily needed to maintain the security and operation of our Services,
        and for our internal analytics and reporting purposes.
      </p>
      <p>
        Like many businesses, we also collect information through cookies and
        similar technologies.
      </p>
      <p>The information we collect includes:</p>
      <ul>
        <li>
          <strong>Log and Usage Data.</strong> Log and usage data is
          service-related, diagnostic, usage, and performance information our
          servers automatically collect when you access or use our Services and
          which we record in log files. Depending on how you interact with us,
          this log data may include your IP address, device information, browser
          type, and settings and information about your activity in the Services
          (such as the date/time stamps associated with your usage, pages and
          files viewed, searches, and other actions you take such as which
          features you use), device event information (such as system activity,
          error reports (sometimes called &quot;crash dumps&quot;), and hardware
          settings).
        </li>
        <li>
          <strong>Device Data.</strong> We collect device data such as
          information about your computer, phone, tablet, or other device you
          use to access the Services. Depending on the device used, this device
          data may include information such as your IP address (or proxy
          server), device and application identification numbers, location,
          browser type, hardware model, Internet service provider and/or mobile
          carrier, operating system, and system configuration information.
        </li>
        <li>
          <strong>Location Data.</strong> We collect location data such as
          information about your device&#39;s location, which can be either
          precise or imprecise. How much information we collect depends on the
          type and settings of the device you use to access the Services. For
          example, we may use GPS and other technologies to collect geolocation
          data that tells us your current location (based on your IP address).
          You can opt out of allowing us to collect this information either by
          refusing access to the information or by disabling your Location
          setting on your device. However, if you choose to opt out, you may not
          be able to use certain aspects of the Services.
        </li>
      </ul>
      <h2 id="how-do-we-process-your-information-">
        HOW DO WE PROCESS YOUR INFORMATION?
      </h2>
      <p>
        <strong>In Short:</strong> We process your information to provide,
        improve, and administer our Services, communicate with you, for security
        and fraud prevention, and to comply with law. We may also process your
        information for other purposes with your consent.
      </p>
      <p>
        <strong>
          We process your personal information for a variety of reasons,
          depending on how you interact with our Services, including:
        </strong>
      </p>
      <ul>
        <li>
          To deliver and facilitate delivery of services to the user. We may
          process your information to provide you with the requested service.
        </li>
        <li>
          To respond to user inquiries/offer support to users. We may process
          your information to respond to your inquiries and solve any potential
          issues you might have with the requested service.
        </li>
        <li>
          To send administrative information to you. We may process your
          information to send you details about our products and services,
          changes to our terms and policies, and other similar information.
        </li>
        <li>
          To fulfill and manage your orders. We may process your information to
          fulfill and manage your orders, payments, returns, and exchanges made
          through the Services.
        </li>
        <li>
          To enable user-to-user communications. We may process your information
          if you choose to use any of our offerings that allow for communication
          with another user.
        </li>
        <li>
          To request feedback. We may process your information when necessary to
          request feedback and to contact you about your use of our Services.
        </li>
        <li>
          To send you marketing and promotional communications. We may process
          the personal information you send to us for our marketing purposes, if
          this is in accordance with your marketing preferences. You can opt out
          of our marketing emails at any time. For more information, see
          &quot;WHAT ARE YOUR PRIVACY RIGHTS?&quot; below).
        </li>
        <li>
          To deliver targeted advertising to you. We may process your
          information to develop and display personalized content and
          advertising tailored to your interests, location, and more.
        </li>
        <li>
          To post testimonials. We post testimonials on our Services that may
          contain personal information.
        </li>
        <li>
          To protect our Services. We may process your information as part of
          our efforts to keep our Services safe and secure, including fraud
          monitoring and prevention.
        </li>
        <li>
          To administer prize draws and competitions. We may process your
          information to administer prize draws and competitions.
        </li>
        <li>
          To evaluate and improve our Services, products, marketing, and your
          experience. We may process your information when we believe it is
          necessary to identify usage trends, determine the effectiveness of our
          promotional campaigns, and to evaluate and improve our Services,
          products, marketing, and your experience.
        </li>
        <li>
          To identify usage trends. We may process information about how you use
          our Services to better understand how they are being used so we can
          improve them.
        </li>
        <li>
          To determine the effectiveness of our marketing and promotional
          campaigns. We may process your information to better understand how to
          provide marketing and promotional campaigns that are most relevant to
          you.
        </li>
        <li>
          To comply with our legal obligations. We may process your information
          to comply with our legal obligations, respond to legal requests, and
          exercise, establish, or defend our legal rights.
        </li>
      </ul>
      <h2 id="what-legal-bases-do-we-rely-on-to-process-your-information-">
        WHAT LEGAL BASES DO WE RELY ON TO PROCESS YOUR INFORMATION?
      </h2>
      <p>
        <strong>In Short:</strong> We only process your personal information
        when we believe it is necessary and we have a valid legal reason (i.e.,
        legal basis) to do so under applicable law, like with your consent, to
        comply with laws, to provide you with services to enter into or fulfill
        our contractual obligations, to protect your rights, or to fulfill our
        legitimate business interests.
      </p>
      <p>
        We may process your information if you have given us specific permission
        (i.e., express consent) to use your personal information for a specific
        purpose, or in situations where your permission can be inferred (i.e.,
        implied consent). You can withdraw your consent at any time.
      </p>
      <p>
        In some exceptional cases, we may be legally permitted under applicable
        law to process your information without your consent, including, for
        example:
      </p>
      <ul>
        <li>
          If collection is clearly in the interests of an individual and consent
          cannot be obtained in a timely way
        </li>
        <li>For investigations and fraud detection and prevention</li>
        <li>For business transactions provided certain conditions are met</li>
        <li>
          If it is contained in a witness statement and the collection is
          necessary to assess, process, or settle an insurance claim
        </li>
        <li>
          For identifying injured, ill, or deceased persons and communicating
          with next of kin
        </li>
        <li>
          If we have reasonable grounds to believe an individual has been, is,
          or may be victim of financial abuse
        </li>
        <li>
          If it is reasonable to expect collection and use with consent would
          compromise the availability or the accuracy of the information and the
          collection is reasonable for purposes related to investigating a
          breach of an agreement or a contravention of the laws of Canada or a
          province
        </li>
        <li>
          If disclosure is required to comply with a subpoena, warrant, court
          order, or rules of the court relating to the production of records
        </li>
        <li>
          If it was produced by an individual in the course of their employment,
          business, or profession and the collection is consistent with the
          purposes for which the information was produced
        </li>
        <li>
          If the collection is solely for journalistic, artistic, or literary
          purposes
        </li>
        <li>
          If the information is publicly available and is specified by the
          regulations
        </li>
      </ul>
      <h2 id="when-and-with-whom-do-we-share-your-personal-information-">
        WHEN AND WITH WHOM DO WE SHARE YOUR PERSONAL INFORMATION?
      </h2>
      <p>
        <strong>In Short:</strong> We may share information in specific
        situations described in this section and/or with the following
        categories of third parties.
      </p>
      <p>
        <strong>
          Vendors, Consultants, and Other Third-Party Service Providers.
        </strong>{' '}
        We may share your data with third-party vendors, service providers,
        contractors, or agents (&quot;third parties&quot;) who perform services
        for us or on our behalf and require access to such information to do
        that work. The categories of third parties we may share personal
        information with are as follows:
      </p>
      <ul>
        <li>Social Networks</li>
        <li>Ad Networks</li>
        <li>Affiliate Marketing Programs</li>
        <li>Cloud Computing Services</li>
        <li>Communication &amp; Collaboration Tools</li>
        <li>Data Analytics Services</li>
        <li>Data Storage Service Providers</li>
        <li>Finance &amp; Accounting Tools</li>
        <li>Government Entities</li>
        <li>Order Fulfillment Service Providers</li>
        <li>Payment Processors</li>
        <li>Performance Monitoring Tools</li>
        <li>Product Engineering &amp; Design Tools</li>
        <li>Retargeting Platforms</li>
        <li>Sales &amp; Marketing Tools</li>
        <li>Testing Tools</li>
        <li>User Account Registration &amp; Authentication Services</li>
        <li>Website Hosting Service Providers</li>
      </ul>
      <p>
        We also may need to share your personal information in the following
        situations:
      </p>
      <ul>
        <li>
          <strong>Business Transfers.</strong> We may share or transfer your
          information in connection with, or during negotiations of, any merger,
          sale of company assets, financing, or acquisition of all or a portion
          of our business to another company.
        </li>
        <li>
          <strong>When we use Google Maps Platform APIs.</strong> We may share
          your information with certain Google Maps Platform APIs (e.g., Google
          Maps API, Places API). To find out more about Google’s Privacy Policy,
          please refer to this link. We use certain Google Maps Platform APIs to
          retrieve certain information when you make location-specific requests.
          This includes: Location; and other similar information. A full list of
          what we use information for can be found in this section and in the
          previous section titled &quot;HOW DO WE PROCESS YOUR
          INFORMATION?&quot;. We obtain and store on your device
          (&quot;cache&quot;) your location. You may revoke your consent anytime
          by contacting us at the contact details provided at the end of this
          document. The Google Maps Platform APIs that we use store and access
          cookies and other information on your devices. If you are a user
          currently in the European Economic Area (EU countries, Iceland,
          Liechtenstein, and Norway) or the United Kingdom, please take a look
          at our Cookie Notice.
        </li>
        <li>
          <strong>Business Partners.</strong> We may share your information with
          our business partners to offer you certain products, services, or
          promotions.
        </li>
      </ul>
      <h2 id="do-we-use-cookies-and-other-tracking-technologies-">
        DO WE USE COOKIES AND OTHER TRACKING TECHNOLOGIES?
      </h2>
      <p>
        <strong>In Short:</strong> We may use cookies and other tracking
        technologies to collect and store your information.
      </p>
      <p>
        We may use cookies and similar tracking technologies (like web beacons
        and pixels) to access or store information. Specific information about
        how we use such technologies and how you can refuse certain cookies is
        set out in our Cookie Notice.
      </p>
      <h2 id="how-long-do-we-keep-your-information-">
        HOW LONG DO WE KEEP YOUR INFORMATION?
      </h2>
      <p>
        <strong>In Short:</strong> We keep your information for as long as
        necessary to fulfill the purposes outlined in this privacy notice unless
        otherwise required by law.
      </p>
      <p>
        We will only keep your personal information for as long as it is
        necessary for the purposes set out in this privacy notice, unless a
        longer retention period is required or permitted by law (such as tax,
        accounting, or other legal requirements).
      </p>
      <p>
        When we have no ongoing legitimate business need to process your
        personal information, we will either delete or anonymize such
        information, or, if this is not possible (for example, because your
        personal information has been stored in backup archives), then we will
        securely store your personal information and isolate it from any further
        processing until deletion is possible.
      </p>
      <h2 id="how-do-we-keep-your-information-safe-">
        HOW DO WE KEEP YOUR INFORMATION SAFE?
      </h2>
      <p>
        <strong>In Short:</strong> We aim to protect your personal information
        through a system of organizational and technical security measures.
      </p>
      <p>
        We have implemented appropriate and reasonable technical and
        organizational security measures designed to protect the security of any
        personal information we process. However, despite our safeguards and
        efforts to secure your information, no electronic transmission over the
        Internet or information storage technology can be guaranteed to be 100%
        secure, so we cannot promise or guarantee that hackers, cyber-criminals,
        or other unauthorized third parties will not be able to defeat our
        security and improperly collect, access, steal, or modify your
        information. Although we will do our best to protect your personal
        information, transmission of personal information to and from our
        Services is at your own risk. You should only access the Services within
        a secure environment.
      </p>
      <h2 id="what-are-your-privacy-rights-">WHAT ARE YOUR PRIVACY RIGHTS?</h2>
      <p>
        <strong>In Short:</strong> In some regions, such as Canada, you have
        rights that allow you greater access to and control over your personal
        information. You may review, change, or terminate your account at any
        time.
      </p>
      <p>
        In some regions (like Canada), you have certain rights under applicable
        data protection laws. These may include the right (i) to request access
        and obtain a copy of your personal information, (ii) to request
        rectification or erasure; (iii) to restrict the processing of your
        personal information; and (iv) if applicable, to data portability. In
        certain circumstances, you may also have the right to object to the
        processing of your personal information. You can make such a request by
        contacting us by using the contact details provided in the section
        &quot;HOW CAN YOU CONTACT US ABOUT THIS NOTICE?&quot; below.
      </p>
      <p>
        We will consider and act upon any request in accordance with applicable
        data protection laws.
      </p>
      <p>
        If you are located in the EEA or UK and you believe we are unlawfully
        processing your personal information, you also have the right to
        complain to your local data protection supervisory authority. You can
        find their contact details here:{' '}
        <a href="https://ec.europa.eu/justice/data-protection/bodies/authorities/index_en.htm">
          https://ec.europa.eu/justice/data-protection/bodies/authorities/index_en.htm
        </a>
        .
      </p>
      <p>
        If you are located in Switzerland, the contact details for the data
        protection authorities are available here:{' '}
        <a href="https://www.edoeb.admin.ch/edoeb/en/home.html">
          https://www.edoeb.admin.ch/edoeb/en/home.html
        </a>
        .
      </p>
      <p>
        <strong>Withdrawing your consent:</strong> If we are relying on your
        consent to process your personal information, which may be express
        and/or implied consent depending on the applicable law, you have the
        right to withdraw your consent at any time. You can withdraw your
        consent at any time by contacting us by using the contact details
        provided in the section &quot;HOW CAN YOU CONTACT US ABOUT THIS
        NOTICE?&quot; below.
      </p>
      <p>
        However, please note that this will not affect the lawfulness of the
        processing before its withdrawal nor, when applicable law allows, will
        it affect the processing of your personal information conducted in
        reliance on lawful processing grounds other than consent.
      </p>
      <p>
        Opting out of marketing and promotional communications: You can
        unsubscribe from our marketing and promotional communications at any
        time by clicking on the unsubscribe link in the emails that we send,
        replying &quot;STOP&quot; or &quot;UNSUBSCRIBE&quot; to the SMS messages
        that we send, or by contacting us using the details provided in the
        section &quot;HOW CAN YOU CONTACT US ABOUT THIS NOTICE?&quot; below. You
        will then be removed from the marketing lists. However, we may still
        communicate with you — for example, to send you service-related messages
        that are necessary for the administration and use of your account, to
        respond to service requests, or for other non-marketing purposes.
      </p>
      <p>
        Cookies and similar technologies: Most Web browsers are set to accept
        cookies by default. If you prefer, you can usually choose to set your
        browser to remove cookies and to reject cookies. If you choose to remove
        cookies or reject cookies, this could affect certain features or
        services of our Services. To opt out of interest-based advertising by
        advertisers on our Services visit{' '}
        <a href="http://www.aboutads.info/choices/">
          http://www.aboutads.info/choices/
        </a>
        .
      </p>
      <p>
        If you have questions or comments about your privacy rights, you may
        email us at {COMPANY.EMAIL}.
      </p>
      <h2 id="controls-for-do-not-track-features">
        CONTROLS FOR DO-NOT-TRACK FEATURES
      </h2>
      <p>
        Most web browsers and some mobile operating systems and mobile
        applications include a Do-Not-Track (&quot;DNT&quot;) feature or setting
        you can activate to signal your privacy preference not to have data
        about your online browsing activities monitored and collected. At this
        stage no uniform technology standard for recognizing and implementing
        DNT signals has been finalized. As such, we do not currently respond to
        DNT browser signals or any other mechanism that automatically
        communicates your choice not to be tracked online. If a standard for
        online tracking is adopted that we must follow in the future, we will
        inform you about that practice in a revised version of this privacy
        notice.
      </p>
      <h2 id="do-california-residents-have-specific-privacy-rights-">
        DO CALIFORNIA RESIDENTS HAVE SPECIFIC PRIVACY RIGHTS?
      </h2>
      <p>
        <strong>In Short:</strong> Yes, if you are a resident of California, you
        are granted specific rights regarding access to your personal
        information.
      </p>
      <p>
        California Civil Code Section 1798.83, also known as the &quot;Shine The
        Light&quot; law, permits our users who are California residents to
        request and obtain from us, once a year and free of charge, information
        about categories of personal information (if any) we disclosed to third
        parties for direct marketing purposes and the names and addresses of all
        third parties with which we shared personal information in the
        immediately preceding calendar year. If you are a California resident
        and would like to make such a request, please submit your request in
        writing to us using the contact information provided below.
      </p>
      <p>
        If you are under 18 years of age, reside in California, and have a
        registered account with Services, you have the right to request removal
        of unwanted data that you publicly post on the Services. To request
        removal of such data, please contact us using the contact information
        provided below and include the email address associated with your
        account and a statement that you reside in California. We will make sure
        the data is not publicly displayed on the Services, but please be aware
        that the data may not be completely or comprehensively removed from all
        our systems (e.g., backups, etc.).
      </p>
      <h2 id="do-we-make-updates-to-this-notice-">
        DO WE MAKE UPDATES TO THIS NOTICE?
      </h2>
      <p>
        <strong>In Short:</strong> Yes, we will update this notice as necessary
        to stay compliant with relevant laws.
      </p>
      <p>
        We may update this privacy notice from time to time. The updated version
        will be indicated by an updated &quot;Revised&quot; date and the updated
        version will be effective as soon as it is accessible. If we make
        material changes to this privacy notice, we may notify you either by
        prominently posting a notice of such changes or by directly sending you
        a notification. We encourage you to review this privacy notice
        frequently to be informed of how we are protecting your information.
      </p>
      <h2 id="how-can-you-contact-us-about-this-notice-">
        HOW CAN YOU CONTACT US ABOUT THIS NOTICE?
      </h2>
      <p>
        If you have questions or comments about this notice, you may email us at{' '}
        {COMPANY.EMAIL} or by post to:
      </p>
      <p>
        {COMPANY.NAME}
        {COMPANY.ADDRESS}
      </p>
      <h2 id="how-can-you-review-update-or-delete-the-data-we-collect-from-you-">
        HOW CAN YOU REVIEW, UPDATE, OR DELETE THE DATA WE COLLECT FROM YOU?
      </h2>
      <p>
        Based on the applicable laws of your country, you may have the right to
        request access to the personal information we collect from you, change
        that information, or delete it. To request to review, update, or delete
        your personal information, please visit:{' '}
        <a href={COMPANY.CONTACT_FORM_URL}>{COMPANY.CONTACT_FORM_URL}</a>
      </p>
    </main>
  );
}
