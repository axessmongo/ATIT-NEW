import React from 'react'
import Navbar from '../Components/Navbar'
import { Link } from 'react-router-dom'
import Footer from '../Components/Footer'
import Rocket from '../Components/Rocket'

const Privacy = () => {
    return (
        <div>
            <Navbar />
            <section

                style={{ background: "linear-gradient(270deg,rgb(25 151 236) 0,#000 100%)" }}
                className ="hero-banner new-hero vh-500px header finisher-header text-center text-md-start text-white mb-5">
                <div className ="container z-3 text-center">
                    <div className ="row d-flex justify-content-center align-items-center flex-row-reverse flex-lg-row">
                        <div>
                            <h1 data-aos="fade-up" data-aos-duration="500" className ="primary-header">
                                Privacy <span className ="primary-color">Policy</span>
                            </h1>
                            <p className ="text-light fs-6 text-capitalize fw-light" data-aos="fade-up" data-aos-duration="700">
                                Enhance your workforce skillset with our customized training options that suits your work life.
                            </p>
                            <nav data-aos="fade-up" data-aos-duration="800"
                                style={{
                                    '--bs-breadcrumb-divider':
                                        "url('data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'8\' height=\'8\'%3E%3Cpath d=\'M2.5 0L1 1.5 3.5 4 1 6.5 2.5 8l4-4-4-4z\' fill=\'%236c757d\'/%3E%3C/svg%3E')",
                                }}
                                aria-label="breadcrumb">
                                <ol className ="breadcrumb justify-content-center">
                                    <li className ="breadcrumb-item"><Link to="/">Home</Link></li>
                                    <li className ="breadcrumb-item active text-white" aria-current="page">Privacy Policy</li>
                                </ol>
                            </nav>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- //privacy policy --> */}
            <div className ="container">
                <p>Effective date: 2023-08-30</p>
                <p className ="fw-semibold display-6 text-center text-capitalize" data-aos="flip-right" data-aos-duration="600">1.
                    Introduction</p>
                <p className ="linear-gradient-text" data-aos="fade-up" data-aos-duration="500">Welcome to ATIT. </p>
                <p className ="fw-medium text-1" data-aos="fade-up" data-aos-duration="500">ATIT (“us”, “we”, or “our”) operates at
                    https://atit.org.in/ (hereinafter referred to as “Service”).</p>
                <p className ="text-1" data-aos="fade-up" data-aos-duration="500">Our Privacy Policy governs your visit to
                    https://atit.org.in/ and explains how we collect, safeguard, and
                    disclose information that results from your use of our Service.</p>
                <p className ="text-1" data-aos="fade-up" data-aos-duration="500">We use your data to provide and improve Service. By
                    using the Service, you agree to the collection and use of
                    information in accordance with this policy. Unless otherwise defined in this Privacy Policy, the terms used
                    in
                    this Privacy Policy have the same meanings as in our Terms and Conditions.</p>
                <p className ="text-1" data-aos="fade-up" data-aos-duration="500">Our Terms and Conditions (“Terms”) govern all use
                    of our Service and together with the Privacy Policy constitute
                    your agreement with us (“Agreement”).</p>
                <p className =" fw-semibold display-6 text-center text-capitalize" data-aos="flip-right" data-aos-duration="600">2.
                    Definitions</p>
                <p className ="linear-gradient-text" data-aos="fade-up" data-aos-duration="500">SERVICE means the
                    https://atit.org.in/
                    website operated by ATIT.</p>
                <p className ="text-1" data-aos="fade-up" data-aos-duration="500">PERSONAL DATA means data about a living individual
                    who can be identified from those data (or from those and
                    other information either in our possession or likely to come into our possession).</p>
                <p className ="text-1" data-aos="fade-up" data-aos-duration="500">USAGE DATA is data collected automatically either
                    generated by the use of the Service or from the Service
                    infrastructure itself (for example, the duration of a page visit).</p>
                <p className ="linear-gradient-text" data-aos="fade-up" data-aos-duration="500">COOKIES are small files stored on
                    your device (computer or mobile device).</p>
                <p className ="text-1" data-aos="fade-up" data-aos-duration="500">DATA CONTROLLER means a natural or legal person who
                    (either alone or jointly or in common with other persons)
                    determines the purposes for which and the manner in which any personal data are, or are to be, processed.
                    For the purpose of this Privacy Policy, we are a Data Controller of your data.</p>
                <p className ="text-1" data-aos="fade-up" data-aos-duration="500">DATA PROCESSORS (OR SERVICE PROVIDERS) means any
                    natural or legal person who processes the data on behalf of
                    the Data Controller. We may use the services of various Service Providers in order to process your data more
                    effectively.</p>
                <p className ="linear-gradient-text" data-aos="fade-up" data-aos-duration="500">DATA SUBJECT is any living individual
                    who is the subject of Personal Data.</p>
                <p className ="text-1" data-aos="fade-up" data-aos-duration="500">THE USER is the individual using our Service. The
                    User corresponds to the Data Subject, who is the subject of Personal Data.</p>
                <p className =" fw-semibold display-6 text-center text-capitalize" data-aos="flip-right" data-aos-duration="600">3.
                    Information Collection and Use</p>
                <p className ="text-1" data-aos="fade-up" data-aos-duration="500">We collect several different types of information
                    for various purposes to provide and improve our Service to you.</p>
                <p className =" fw-semibold display-6 text-center text-capitalize" data-aos="flip-right" data-aos-duration="600">4. Types of
                    Data Collected</p>
                <p className ="linear-gradient-text" data-aos="fade-up" data-aos-duration="500">Personal Data</p>
                <p className ="text-1" data-aos="fade-up" data-aos-duration="500">While using our Service, we may ask you to provide
                    us with certain personally identifiable information that
                    can be used to contact or identify you (“Personal Data”). Personally identifiable information may include,
                    but is not limited to</p>

                <p className ="text-1" data-aos="fade-up" data-aos-duration="500"> 0.1. Email address</p>
                <p className ="text-1" data-aos="fade-up" data-aos-duration="500"> 0.2. First name and last name</p>
                <p className ="text-1" data-aos="fade-up" data-aos-duration="500"> 0.3. Phone number</p>
                <p className ="text-1" data-aos="fade-up" data-aos-duration="500">0.4. Address, Country, State, Province, ZIP/Postal
                    code, City </p>
                <p className ="text-1" data-aos="fade-up" data-aos-duration="500">0.5. Cookies and Usage Data</p>
                <p className ="fw-medium text-1" data-aos="fade-up" data-aos-duration="500"> We may use your Personal Data to contact
                    you with newsletters, marketing or promotional materials, and other
                    information that may be of interest to you. You may opt out of receiving any, or all, of these
                    communications from us by following the unsubscribe link.</p>
                <p className ="linear-gradient-text" data-aos="fade-up" data-aos-duration="500">Usage Data</p>
                <p className ="fw-medium text-1" data-aos="fade-up" data-aos-duration="500">We may also collect information that your
                    browser sends whenever you visit our Service or when you access the
                    Service by or through any device (“Usage Data”).</p>
                <p className ="text-1" data-aos="fade-up" data-aos-duration="500">This Usage Data may include information such as
                    your computer’s Internet Protocol address (e.g. IP address),
                    browser type, browser version, the pages of our Service that you visit, the time and date of your visit, the
                    time spent on those pages, unique device identifiers and other diagnostic data.
                    When you access Service with a device, this Usage Data may include information such as the type of device
                    you use, your device unique ID, the IP address of your device, your device operating system, the type of
                    Internet browser you use, unique device identifiers and other diagnostic data.f</p>
                <p className ="linear-gradient-text" data-aos="fade-up" data-aos-duration="500">Location Data</p>
                <p className ="text-1" data-aos="fade-up" data-aos-duration="500">We may use and store information about your
                    location if you give us permission to do so (“Location Data”). We use this data to provide features of our
                    Service, to improve and customize our Service.</p>
                <p className ="text-1" data-aos="fade-up" data-aos-duration="500">You can enable or disable location services when
                    you use our Service at any time by way of your device settings.</p>
                <p className ="linear-gradient-text" data-aos="fade-up" data-aos-duration="500">Tracking Cookies Data</p>
                <p className ="text-1" data-aos="fade-up" data-aos-duration="500">We use cookies and similar tracking technologies to
                    track the activity on our Service and we hold certain information.
                    Cookies are files with a small amount of data which may include an anonymous unique identifier.Cookies are
                    sent to your browser from a website and stored on your device. Other tracking technologies are also used
                    such as beacons, tags, and scripts to collect and track information and to improve and analyze our Service.
                    You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if
                    you do not accept cookies, you may not be able to use some portions of our Service.</p>
                <p className ="linear-gradient-text" data-aos="fade-up" data-aos-duration="500">Examples of Cookies we use:</p>
                <p className ="text-1" data-aos="fade-up" data-aos-duration="500">0.1. Session Cookies: We use Session Cookies to
                    operate our Service.</p>
                <p className ="text-1" data-aos="fade-up" data-aos-duration="500">0.2. Preference Cookies: We use Preference Cookies
                    to remember your preferences and various settings.</p>
                <p className ="text-1" data-aos="fade-up" data-aos-duration="500">0.3. Security Cookies: We use Security Cookies for
                    security purposes.</p>
                <p className ="text-1" data-aos="fade-up" data-aos-duration="500">0.4. Advertising Cookies: Advertising Cookies are
                    used to serve you with advertisements that may be relevant to you and your interests.Other Data</p>
                <p className ="fw-medium text-1" data-aos="fade-up" data-aos-duration="500">While using our Service, we may also
                    collect the following information: sex, age, date of birth, place of
                    birth, passport details, citizenship, registration at the place of residence and actual address, telephone
                    number (work, mobile), details of documents on education, qualification, professional training, employment
                    agreements, NDA agreements, information on bonuses and compensation, information on marital status, family
                    members, social security (or other taxpayer identification) number, office location, and other data.
                </p>
                <p className ="linear-gradient-text" data-aos="fade-up" data-aos-duration="500">5. Use of Data</p>
                <p className ="linear-gradient-text" data-aos="fade-up" data-aos-duration="500">ATIT uses the collected data for
                    various purposes:</p>
                <p className ="text-1" data-aos="fade-up" data-aos-duration="500">0.1. to provide and maintain our Service;</p>
                <p className ="text-1" data-aos="fade-up" data-aos-duration="500">0.2. to notify you about changes to our Service;
                </p>
                <p className ="text-1" data-aos="fade-up" data-aos-duration="500"> 0.3. to allow you to participate in interactive
                    features of our Service when you choose to do so;</p>
                <p className ="text-1" data-aos="fade-up" data-aos-duration="500">0.4. to provide customer support;</p>
                <p className ="text-1" data-aos="fade-up" data-aos-duration="500">0.5. to gather analysis or valuable information so
                    that we can improve our Service;</p>
                <p className ="text-1" data-aos="fade-up" data-aos-duration="500">0.6. to monitor the usage of our Service;</p>
                <p className ="text-1" data-aos="fade-up" data-aos-duration="500">0.7. to detect, prevent, and address technical
                    issues;</p>
                <p className ="text-1" data-aos="fade-up" data-aos-duration="500">0.8. to fulfill any other purpose for which you
                    provide it;</p>
                <p className ="text-1" data-aos="fade-up" data-aos-duration="500">0.9. to carry out our obligations and enforce our
                    rights arising from any contracts entered into between you and us, including for billing and collection;</p>
                <p className ="text-1" data-aos="fade-up" data-aos-duration="500">0.10. to provide you with notices about your
                    account and/or subscription, including expiration and renewal notices, email instructions, etc.;</p>
                <p className ="text-1" data-aos="fade-up" data-aos-duration="500">0.11. to provide you with news, special offers, and
                    general information about other goods, services, and events which we offer that are similar to those that
                    you have already purchased or enquired about unless you have opted not to receive such information; </p>
                <p className ="text-1" data-aos="fade-up" data-aos-duration="500">0.12. In any other way we may describe when you
                    provide the information;</p>
                <p className ="text-1" data-aos="fade-up" data-aos-duration="500">0.13. for any other purpose with your consent.</p>
                <p className ="linear-gradient-text" data-aos="fade-up" data-aos-duration="500">6. Retention of Data</p>
                <p className ="text-1" data-aos="fade-up" data-aos-duration="500">We will retain your Personal Data only for as long
                    as is necessary for the purposes set out in this Privacy
                    Policy. We will retain and use your Personal Data to the extent necessary to comply with our legal
                    obligations (for example, if we are required to retain your data to comply with applicable laws), resolve
                    disputes, and enforce our legal agreements and policies.</p>
                <p className ="fw-medium text-1" data-aos="fade-up" data-aos-duration="500">We will also retain Usage Data for
                    internal analysis purposes. Usage Data is generally retained for a shorter
                    period, except when this data is used to strengthen the security or to improve the functionality of our
                    Service, or we are legally obligated to retain this data for longer time periods.</p>
                <p className ="linear-gradient-text" data-aos="fade-up" data-aos-duration="500">7. Transfer of Data</p>
                <p className ="text-1" data-aos="fade-up" data-aos-duration="500">Your information, including Personal Data, may be
                    transferred to – and maintained on – computers located
                    outside of your state, province, country or other governmental jurisdiction where the data protection laws
                    may differ from those of your jurisdiction.</p>
                <p className ="text-1" data-aos="fade-up" data-aos-duration="500">If you are located outside No. 265, 2nd Floor, GST
                    Road, Chromepet, Chennai – 600044 and choose to provide
                    information to us, please note that we transfer the data, including Personal Data, to No. 265, 2nd Floor,
                    GST Road, Chromepet, Chennai – 600044 and process it there.</p>
                <p className ="fw-medium text-1" data-aos="fade-up" data-aos-duration="500">Your consent to this Privacy Policy
                    followed by your submission of such information represents your agreement
                    to that transfer.

                    ATIT will take all the steps reasonably necessary to ensure that your data is treated securely and in
                    accordance with this Privacy Policy and no transfer of your Personal Data will take place to an organization
                    or a country unless there are adequate controls in place including the security of your data and other
                    personal information.</p>
                <p className ="linear-gradient-text" data-aos="fade-up" data-aos-duration="500">8. Disclosure of Data</p>
                <p className ="fw-medium text-1" data-aos="fade-up" data-aos-duration="500">We may disclose personal information that
                    we collect, or you provide:</p>
                <p className ="text-1" data-aos="fade-up" data-aos-duration="500">0.1. Disclosure for Law Enforcement.</p>
                <p className ="fw-medium text-1" data-aos="fade-up" data-aos-duration="500">Under certain circumstances, we may be
                    required to disclose your Personal Data if required to do so by law or
                    in response to valid requests by public authorities.</p>
                <p className ="text-1" data-aos="fade-up" data-aos-duration="500">0.2. Business Transaction.</p>
                <p className ="fw-medium text-1" data-aos="fade-up" data-aos-duration="500">If we or our subsidiaries are involved in
                    a merger, acquisition, or asset sale, your Personal Data may be transferred.</p>
                <p className ="text-1" data-aos="fade-up" data-aos-duration="500">0.3. Other cases. We may disclose your information
                    also:</p>
                <p className ="text-1" data-aos="fade-up" data-aos-duration="500">0.3.1. to our subsidiaries and affiliates;</p>
                <p className ="text-1" data-aos="fade-up" data-aos-duration="500">0.3.2. to contractors, service providers, and other
                    third parties we use to support our business;</p>
                <p className ="text-1" data-aos="fade-up" data-aos-duration="500">0.3.3. to fulfill the purpose for which you provide
                    it;</p>
                <p className ="text-1" data-aos="fade-up" data-aos-duration="500">0.3.4. For the purpose of including your company’s
                    logo on our website;</p>
                <p className ="text-1" data-aos="fade-up" data-aos-duration="500">0.3.5. for any other purpose disclosed by us when
                    you provide the information;</p>
                <p className ="text-1" data-aos="fade-up" data-aos-duration="500">0.3.6. with your consent in any other cases;</p>
                <p className ="text-1" data-aos="fade-up" data-aos-duration="500">0.3.7. if we believe disclosure is necessary or
                    appropriate to protect the rights, property, or safety of the Company, our customers, or others. </p>
                <p className ="linear-gradient-text" data-aos="fade-up" data-aos-duration="500"> 9. Security of Data</p>
                <p className ="text-1" data-aos="fade-up" data-aos-duration="500">The security of your data is important to us but
                    remember that no method of transmission over the Internet or
                    method of electronic storage is 100% secure. While we strive to use commercially acceptable means to protect
                    your Personal Data, we cannot guarantee its absolute security.</p>
                <p className ="linear-gradient-text" data-aos="fade-up" data-aos-duration="500">10. Your Data Protection Rights Under
                    the General Data Protection Regulation (GDPR)</p>
                <p className ="fw-medium text-1" data-aos="fade-up" data-aos-duration="500">If you are a resident of the European
                    Union (EU) and European Economic Area (EEA), you have certain data protection rights, covered by GDPR. We
                    aim to take reasonable steps to allow you to correct, amend, delete, or limit the use of your Personal Data
                </p>
                <p className ="fw-medium text-1" data-aos="fade-up" data-aos-duration="500">If you wish to be informed what Personal
                    Data we hold about you and if you want it to be removed from our systems, please email us at
                    info_atit@turn-ai.in .In certain circumstances, you have the following data protection rights:</p>
                <p className ="text-1" data-aos="fade-up" data-aos-duration="500">0.1. The right to access, update or delete the
                    information we have on you;</p>
                <p className ="text-1" data-aos="fade-up" data-aos-duration="500">0.2. The right of rectification. You have the right
                    to have your information rectified if that information is
                    inaccurate or incomplete;</p>
                <p className ="text-1" data-aos="fade-up" data-aos-duration="500">0.3. The right to object. You have the right to
                    object to our processing of your Personal Data;</p>
                <p className ="text-1" data-aos="fade-up" data-aos-duration="500">0.4. The right of restriction. You have the right
                    to request that we restrict the processing of your personal
                    information.</p>
                <p className ="text-1" data-aos="fade-up" data-aos-duration="500">0.5. The right to data portability. You have the
                    right to be provided with a copy of your Personal Data in a
                    structured, machine-readable, and commonly used format;</p>
                <p className ="text-1" data-aos="fade-up" data-aos-duration="500">0.6. The right to withdraw consent. You also have
                    the right to withdraw your consent at any time when we rely
                    on your consent to process your personal information;</p>
                <p className ="fw-medium text-1" data-aos="fade-up" data-aos-duration="500">Please note that we may ask you to verify
                    your identity before responding to such requests. Please note, we
                    may not be able to provide Service without some necessary data.</p>
                <p className ="fw-medium text-1" data-aos="fade-up" data-aos-duration="500">You have the right to complain to a Data
                    Protection Authority about our collection and use of your Personal
                    Data. For more information, please contact your local data protection authority in the European Economic
                    Area (EEA).</p>
                <p className ="linear-gradient-text" data-aos="fade-up" data-aos-duration="500">11. Your Data Protection Rights under
                    the California Privacy Protection Act (CalOPPA)</p>
                <p className ="text-1" data-aos="fade-up" data-aos-duration="500">CalOPPA is the first state law in the nation to
                    require commercial websites and online services to post a
                    privacy policy. The law’s reach stretches well beyond California to require a person or company in the
                    United States (and conceivable the world) that operates websites collecting personally identifiable
                    information from California consumers to post a conspicuous privacy policy on its website stating exactly
                    the information being collected and those individuals with whom it is being shared and to comply with this
                    policy.</p>
                <p className ="fw-medium text-1" data-aos="fade-up" data-aos-duration="500">According to CalOPPA, we agree to the
                    following:</p>
                <p className ="text-1" data-aos="fade-up" data-aos-duration="500">0.1. Users can visit our site anonymously;</p>
                <p className ="text-1" data-aos="fade-up" data-aos-duration="500">0.2. Our Privacy Policy link includes the word
                    “Privacy”, and can easily be found on the home page of our
                    website;</p>
                <p className ="text-1" data-aos="fade-up" data-aos-duration="500">0.3. Users will be notified of any privacy policy
                    changes on our Privacy Policy Page </p>
                <p className ="text-1" data-aos="fade-up" data-aos-duration="500">0.4. Users are able to change their personal
                    information by emailing us at info_atit@turn-ai.in .

                </p>
                <p className ="fw-medium text-1" data-aos="fade-up" data-aos-duration="500">Our Policy on “Do Not Track” Signals:</p>
                <p className ="fw-medium text-1" data-aos="fade-up" data-aos-duration="500">We honor Do Not Track signals and do not
                    track, plant cookies, or use advertising when a Do Not Track browser mechanism is in place. Do Not Track is
                    a preference you can set in your web browser to inform websites that you do not want to be tracked.

                </p>
                <p className ="fw-medium text-1" data-aos="fade-up" data-aos-duration="500">You can enable or disable Do Not Track by
                    visiting the Preferences or Settings page of your web browser.

                </p>
                <p className ="linear-gradient-text" data-aos="fade-up" data-aos-duration="500">12. Your Data Protection Rights under
                    the California Consumer Privacy Act (CCPA)

                </p>
                <p className ="fw-medium text-1" data-aos="fade-up" data-aos-duration="500">If you are a California resident, you are
                    entitled to learn what data we collect about you, ask to delete
                    your data, and not to sell (share) it. To exercise your data protection rights, you can make certain
                    requests and ask us:</p>
                <p className ="text-1" data-aos="fade-up" data-aos-duration="500">0.1. What personal information do we have about
                    you? If you make this request, we will return to you:

                </p>
                <p className ="text-1" data-aos="fade-up" data-aos-duration="500">0.0.1. The categories of personal information we
                    have collected about you.

                </p>
                <p className ="text-1" data-aos="fade-up" data-aos-duration="500">0.0.2. The categories of sources from which we
                    collect your personal information.

                </p>
                <p className ="text-1" data-aos="fade-up" data-aos-duration="500">0.0.3. The business or commercial purpose for
                    collecting or selling your personal information.

                </p>
                <p className ="text-1" data-aos="fade-up" data-aos-duration="500">0.0.4. The categories of third parties with whom we
                    share personal information.

                </p>
                <p className ="text-1" data-aos="fade-up" data-aos-duration="500">0.0.5. The specific pieces of personal information
                    we have collected about you.

                </p>
                <p className ="text-1" data-aos="fade-up" data-aos-duration="500">0.0.6. A list of categories of personal information
                    that we have sold, along with the category of any other
                    company we sold it to. If we have not sold your personal information, we will inform you of that fact.

                </p>
                <p className ="text-1" data-aos="fade-up" data-aos-duration="500">0.0.7. A list of categories of personal information
                    that we have disclosed for a business purpose, along with
                    the category of any other company we shared it with</p>

                <p className ="fw-medium text-1" data-aos="fade-up" data-aos-duration="500">Please note, that you are entitled to ask
                    us to provide you with this information up to two times in a
                    rolling twelve-month period. When you make this request, the information provided may be limited to the
                    personal information we collected about you in the previous 12 months.</p>
                <p className ="text-1" data-aos="fade-up" data-aos-duration="500">0.2. To delete your personal information. If you
                    make this request, we will delete the personal information
                    we hold about you as of the date of your request from our records and direct any service providers to do the
                    same. In some cases, deletion may be accomplished through de-identification of the information. If you
                    choose to delete your personal information, you may not be able to use certain functions that require your
                    personal information to operate.</p>
                <p className ="text-1" data-aos="fade-up" data-aos-duration="500">0.3. To stop selling your personal information. We
                    don’t sell or rent your personal information to any third
                    parties for any purpose. We do not sell your personal information for monetary consideration. However, under
                    some circumstances, a transfer of personal information to a third party, or within our family of companies,
                    without monetary consideration may be considered a “sale” under California law. You are the only owner of
                    your Personal Data and can request disclosure or deletion at any time.</p>
                <p className ="fw-medium text-1" data-aos="fade-up" data-aos-duration="500">If you submit a request to stop selling
                    your personal information, we will stop making such transfers.

                    Please note, that if you ask us to delete or stop selling your data, it may impact your experience with us,
                    and you may not be able to participate in certain programs or membership services that require the usage of
                    your personal information to function. But in no circumstances, we will discriminate against you for
                    exercising your rights.</p>
                <p className ="fw-medium text-1" data-aos="fade-up" data-aos-duration="500">To exercise your California data
                    protection rights described above, please send your request(s) by email:
                    info_atit@turn-ai.in .

                    Your data protection rights, described above, are covered by the CCPA, short for the California Consumer
                    Privacy Act. To find out more, visit the official California Legislative Information website. The CCPA took
                    effect on 01/01/2020.</p>
                <p className ="linear-gradient-text" data-aos="fade-up" data-aos-duration="500">13. Service Providers</p>
                <p className ="text-1" data-aos="fade-up" data-aos-duration="500">We may employ third-party companies and individuals
                    to facilitate our Service (“Service Providers”), provide
                    Service on our behalf, perform Service-related services, or assist us in analyzing how our Service is used.

                    These third parties have access to your Personal Data only to perform these tasks on our behalf and are
                    obligated not to disclose or use it for any other purpose.</p>

                <p className ="linear-gradient-text" data-aos="fade-up" data-aos-duration="500">14. Analytics</p>
                <p className ="text-1" data-aos="fade-up" data-aos-duration="500">We may employ third-party companies and individuals
                    to facilitate our Service (“Service Providers”), provide
                    Service on our behalf, perform Service-related services, or assist us in analyzing how our Service is used.

                </p>
                <p className ="linear-gradient-text" data-aos="fade-up" data-aos-duration="500">15. CI/CD tools</p>
                <p className ="text-1" data-aos="fade-up" data-aos-duration="500">We may use third-party Service Providers to
                    automate the development process of our Service.

                </p>
                <p className ="linear-gradient-text" data-aos="fade-up" data-aos-duration="500">16. Advertising</p>
                <p className ="text-1" data-aos="fade-up" data-aos-duration="500">We may use third-party Service Providers to show
                    advertisements to you to help support and maintain our Service.

                </p>
                <p className ="linear-gradient-text" data-aos="fade-up" data-aos-duration="500">17. Behavioral Remarketing</p>
                <p className ="text-1" data-aos="fade-up" data-aos-duration="500">We may use remarketing services to advertise on
                    third-party websites to you after you visit our Service. We
                    and our third-party vendors use cookies to inform, optimise, and serve ads based on your past visits to our
                    Service.</p>
                <p className ="linear-gradient-text" data-aos="fade-up" data-aos-duration="500">18. Payments</p>
                <p className ="text-1" data-aos="fade-up" data-aos-duration="500">We may provide paid products and/or services within
                    Service. In that case, we use third-party services for
                    payment processing (e.g. payment processors).

                    We will not store or collect your payment card details. That information is provided directly to our
                    third-party payment processors whose use of your personal information is governed by their Privacy Policy.
                    These payment processors adhere to the standards set by PCI-DSS as managed by the PCI Security Standards
                    Council, which is a joint effort of brands like Visa, Mastercard, American Express, and Discover. PCI-DSS
                    requirements help ensure the secure handling of payment information.</p>
                <p className ="linear-gradient-text" data-aos="fade-up" data-aos-duration="500">
                    19. Links to Other Sites</p>
                <p className ="text-1" data-aos="fade-up" data-aos-duration="500">Our Service may contain links to other sites that
                    are not operated by us. If you click a third-party link,
                    you will be directed to that third-party’s site. We strongly advise you to review the Privacy Policy of
                    every site you visit.

                    We have no control over and assume no responsibility for the content, privacy policies, or practices of any
                    third-party sites or services.</p>
                <p className ="linear-gradient-text" data-aos="fade-up" data-aos-duration="500">20. Children’s Privacy</p>
                <p className ="text-1" data-aos="fade-up" data-aos-duration="500">Our Services are not intended for use by children
                    under the age of 18 (“Child” or “Children”).

                    We do not knowingly collect personally identifiable information from children under 18. If you become aware
                    that a Child has provided us with Personal Data, please contact us. If we become aware that we have
                    collected Personal Data from Children without verification of parental consent, we take steps to remove that
                    information from our servers.</p>
                <p className ="linear-gradient-text" data-aos="fade-up" data-aos-duration="500">21. Changes to This Privacy Policy
                </p>
                <p className ="text-1" data-aos="fade-up" data-aos-duration="500">We may update our Privacy Policy from time to time.
                    We will notify you of any changes by posting the new Privacy Policy on this page.

                    We will let you know via email and/or a prominent notice on our Service, prior to the change becoming
                    effective, and update the “effective date” at the top of this Privacy Policy.

                </p>
                <p className ="fw-medium text-1" data-aos="fade-up" data-aos-duration="500">You are advised to review this Privacy
                    Policy periodically for any changes. Changes to this Privacy Policy are effective when they are posted on
                    this page.

                </p>
                <p className ="linear-gradient-text" data-aos="fade-up" data-aos-duration="500">22. Contact Us</p>
                <p className ="text-1" data-aos="fade-up" data-aos-duration="500">If you have any questions about this Privacy
                    Policy, please contact us by <span
                        className =" linear-gradient-text fw-bold text-center text-capitalize">email:
                        info_atit@turn-ai.in</span>.

                </p>
            </div>

            <Footer />
            <Rocket/>
        </div>
    )
}

export default Privacy