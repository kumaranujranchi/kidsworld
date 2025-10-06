import React from 'react'
import { Helmet } from 'react-helmet'
import { Link, ScrollRestoration } from 'react-router-dom'
import PageTitle from '@/components/sections/pageTitle'
import SectionName from '@/components/ui/sectionName'
import Title from '@/components/ui/title'
import SectionDescription from '@/components/ui/sectionDescription'
import SlideUp from '@/lib/animations/slideUp'

const FranchiseOpportunity = () => {
  return (
    <>
      <Helmet>
        <title>Kids World — Franchise Opportunity</title>
        <meta name="description" content="Learn how to take Kids World franchise: fees, support, ROI, investment, and space requirements." />
      </Helmet>
      <main>
        <PageTitle pageName={"Franchise Opportunity"} breadcrumbCurrent={"Franchise Opportunity"} />

        <section className="py-10 lg:py-15">
          <div className="container">
            <SectionName className={"text-primary-foreground"}>Partner With Us</SectionName>
            <Title size={"3.5xl"} className={"mt-2.5 lg:max-w-[720px]"}>Build a thriving learning center with our trusted brand</Title>
            <SectionDescription className={'mt-5 max-w-[75ch]'}>
              Join our mission to deliver joyful, high–quality education. As a franchise partner, you’ll receive comprehensive setup guidance, operational playbooks, marketing assets, and ongoing brand support.
            </SectionDescription>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-7.5 mt-7.5">
              <SlideUp delay={2}>
                <div className="group rounded-xl bg-warm p-6 border border-muted/30 hover:border-primary-foreground transition">
                  <h4 className="text-2xl font-semibold">Franchise Fee</h4>
                  <p className="mt-2 text-muted-foreground">Free</p>
                </div>
              </SlideUp>

              <SlideUp delay={3}>
                <div className="group rounded-xl bg-warm p-6 border border-muted/30 hover:border-primary-foreground transition">
                  <h4 className="text-2xl font-semibold">Lifetime Brand Support</h4>
                  <p className="mt-2 text-muted-foreground">₹5 Lakhs</p>
                </div>
              </SlideUp>

              <SlideUp delay={4}>
                <div className="group rounded-xl bg-warm p-6 border border-muted/30 hover:border-primary-foreground transition">
                  <h4 className="text-2xl font-semibold">ROI</h4>
                  <p className="mt-2 text-muted-foreground">Achievable within 2 years</p>
                </div>
              </SlideUp>

              <SlideUp delay={5}>
                <div className="group rounded-xl bg-warm p-6 border border-muted/30 hover:border-primary-foreground transition">
                  <h4 className="text-2xl font-semibold">Initial Investment</h4>
                  <p className="mt-2 text-muted-foreground">₹5 Lakhs</p>
                </div>
              </SlideUp>

              <SlideUp delay={6}>
                <div className="group rounded-xl bg-warm p-6 border border-muted/30 hover:border-primary-foreground transition">
                  <h4 className="text-2xl font-semibold">Required Space</h4>
                  <p className="mt-2 text-muted-foreground">3000 sq. ft.</p>
                </div>
              </SlideUp>
            </div>

            <div className="mt-10">
              <SlideUp delay={2}>
                <div className="rounded-xl bg-secondary/10 p-6 md:p-8">
                  <h5 className="text-xl font-semibold">What You Get</h5>
                  <ul className="mt-3 grid sm:grid-cols-2 gap-3 text-muted-foreground">
                    <li className="list-disc ml-5">Center design guidelines and classroom setup checklists</li>
                    <li className="list-disc ml-5">Curriculum planning framework and activity libraries</li>
                    <li className="list-disc ml-5">Staff training modules and operating SOPs</li>
                    <li className="list-disc ml-5">Local marketing toolkit and parent communication templates</li>
                    <li className="list-disc ml-5">Ongoing academic audits and quality assurance</li>
                  </ul>

                  <div className="mt-6 flex flex-wrap items-center gap-3">
                    <Link to="/contact-us" className="btn btn-primary">Get Started</Link>
                    <Link to="/faq" className="btn btn-secondary">Read FAQs</Link>
                  </div>
                </div>
              </SlideUp>
            </div>
          </div>
        </section>
      </main>
      <ScrollRestoration />
    </>
  )
}

export default FranchiseOpportunity