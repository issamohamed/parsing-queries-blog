import React, { useState, useEffect, useRef } from 'react';
import { Github, Linkedin, Twitter, Facebook, Music, Instagram, X, ChevronUp } from 'lucide-react';

export default function BlogPage() {
  const [showPopup, setShowPopup] = useState(false);
  const [showBackToTop, setShowBackToTop] = useState(false);
  const firstArticleRef = useRef(null);

  useEffect(() => {
    const hasSeenPopup = localStorage.getItem('hasSeenSubscribePopup');
    if (!hasSeenPopup) {
      const timer = setTimeout(() => {
        setShowPopup(true);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (firstArticleRef.current) {
        const articleBottom = firstArticleRef.current.getBoundingClientRect().bottom;
        setShowBackToTop(articleBottom < 0);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleClosePopup = () => {
    setShowPopup(false);
    localStorage.setItem('hasSeenSubscribePopup', 'true');
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div style={{
      minHeight: '100vh',
      background: '#1a2b4c',
      padding: '2rem 1rem',
      fontFamily: 'system-ui, -apple-system, sans-serif'
    }}>
      {/* Fixed Header */}
      <div style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        padding: '2rem 0',
        background: 'rgba(26, 43, 76, 0.8)',
        backdropFilter: 'blur(12px)'
      }}>
        <div style={{ textAlign: 'center' }}>
          <h1 style={{
            fontFamily: 'Georgia, serif',
            fontSize: '2.5rem',
            color: 'white',
            marginBottom: '0.5rem',
            fontWeight: 400
          }}>
            Parsing Queries
          </h1>
          <div style={{
            fontFamily: 'Georgia, serif',
            color: 'rgba(255, 255, 255, 0.8)',
            fontSize: '1.25rem',
            display: 'inline-block',
            position: 'relative',
            paddingBottom: '0.5rem'
          }}>
            with Issa Mohamed
            <div style={{
              position: 'absolute',
              bottom: 0,
              left: 0,
              right: 0,
              height: '1px',
              background: 'rgba(255, 255, 255, 0.4)'
            }}></div>
          </div>
          
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '0.5rem',
            marginTop: '1rem'
          }}>
            <a href="https://github.com/issamohamed" target="_blank" rel="noopener noreferrer"
               style={{ color: 'white', opacity: 0.8, transition: 'opacity 0.2s' }}
               onMouseOver={e => e.currentTarget.style.opacity = '1'}
               onMouseOut={e => e.currentTarget.style.opacity = '0.8'}>
              <Github size={20} />
            </a>
            <a href="https://www.linkedin.com/in/issa-mohamed-a2b4a4245/" target="_blank" rel="noopener noreferrer"
               style={{ color: 'white', opacity: 0.8, transition: 'opacity 0.2s' }}
               onMouseOver={e => e.currentTarget.style.opacity = '1'}
               onMouseOut={e => e.currentTarget.style.opacity = '0.8'}>
              <Linkedin size={20} />
            </a>
            <a href="https://twitter.com/issamohamed23" target="_blank" rel="noopener noreferrer"
               style={{ color: 'white', opacity: 0.8, transition: 'opacity 0.2s' }}
               onMouseOver={e => e.currentTarget.style.opacity = '1'}
               onMouseOut={e => e.currentTarget.style.opacity = '0.8'}>
              <Twitter size={20} />
            </a>
            <a href="https://www.facebook.com/profile.php?id=100038231138445" target="_blank" rel="noopener noreferrer"
               style={{ color: 'white', opacity: 0.8, transition: 'opacity 0.2s' }}
               onMouseOver={e => e.currentTarget.style.opacity = '1'}
               onMouseOut={e => e.currentTarget.style.opacity = '0.8'}>
              <Facebook size={20} />
            </a>
            <a href="https://open.spotify.com/user/uchiaclan" target="_blank" rel="noopener noreferrer"
               style={{ color: 'white', opacity: 0.8, transition: 'opacity 0.2s' }}
               onMouseOver={e => e.currentTarget.style.opacity = '1'}
               onMouseOut={e => e.currentTarget.style.opacity = '0.8'}>
              <Music size={20} />
            </a>
            <a href="https://www.instagram.com/issa101issa/" target="_blank" rel="noopener noreferrer"
               style={{ color: 'white', opacity: 0.8, transition: 'opacity 0.2s' }}
               onMouseOver={e => e.currentTarget.style.opacity = '1'}
               onMouseOut={e => e.currentTarget.style.opacity = '0.8'}>
              <Instagram size={20} />
            </a>
          </div>
        </div>
      </div>

      <div style={{ height: '10rem' }}></div>

      <div style={{ maxWidth: '72rem', margin: '0 auto', marginBottom: '4rem', textAlign: 'center' }}>
        <img 
          src="/images/blog_profile_pic.webp" 
          alt="Picture of the Author: Issa Mohamed"
          style={{
            width: '400px',
            height: '300px',
            borderRadius: '1rem',
            objectFit: 'cover',
            border: '4px solid rgba(255, 255, 255, 0.3)',
            boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.3)'
          }}
        />
      </div>

      <div style={{ maxWidth: '56rem', margin: '0 auto' }}>
        {/* NEW Article - Online Advertising */}
        <article ref={firstArticleRef} style={{ marginBottom: '4rem' }}>
          <h2 style={{
            fontFamily: 'Georgia, serif',
            fontSize: 'clamp(3rem, 8vw, 5rem)',
            color: 'white',
            textAlign: 'center',
            marginBottom: '1rem',
            fontWeight: 400
          }}>
            Online Advertising: The Evolution of Intrusion and the Illusion of Value
          </h2>
          <div style={{
            fontFamily: 'Georgia, serif',
            textAlign: 'center',
            color: 'rgba(255, 255, 255, 0.9)',
            fontSize: '1.25rem',
            marginBottom: '2rem'
          }}>
            February 2, 2026
          </div>
          <div style={{
            backdropFilter: 'blur(12px)',
            background: 'rgba(255, 255, 255, 0.1)',
            borderRadius: '1rem',
            padding: '2rem',
            boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1)',
            border: '1px solid rgba(255, 255, 255, 0.2)'
          }}>
            <div style={{
              color: 'rgba(255, 255, 255, 0.9)',
              lineHeight: '1.75',
              fontSize: '1.05rem'
            }}>
              <p style={{ marginBottom: '1rem' }}>
                There's this peculiar relationship we've developed with online advertisements over the years, one that oscillates wildly between grudging acceptance and outright hostility, and what strikes me most is whether this tension is merely a byproduct of poor implementation or if it reveals something more fundamental about the incompatibility between what platforms need to survive and what users want from their digital experiences.
              </p>
              <p style={{ marginBottom: '1rem' }}>
                When I trace the evolution of online ads from their earliest iterations, those garish, blinking banner ads of the late 1990s that felt more like digital billboards awkwardly transplanted onto web pages, to the sophisticated, algorithmically targeted content we encounter today that knows what we want before we've fully articulated it to ourselves, what strikes me most isn't just the technological advancement but the philosophical shift in how advertising positions itself within our online ecosystem. Those early banner ads were honest in their crudeness; they made no pretense about being anything other than what they were, interruptions to your browsing experience that you could easily ignore or click past without much thought. But somewhere along the timeline, as platforms realized that user attention had become the most valuable commodity in the digital economy, advertising evolved from an obvious intrusion into something far more insidious: content that masquerades as recommendation, as personalization, as the platform genuinely trying to show you things you might actually care about.
              </p>
              <p style={{ marginBottom: '1rem' }}>
                This shift in presentation speaks to what I think is the central tension in modern online advertising, which is this fundamental clash between monetization as a business necessity and visibility as a user experience feature, where platforms have to somehow convince us that the ads we're seeing aren't just revenue generators for them but are actually valuable additions to our feeds, genuinely helpful suggestions that enhance rather than detract from our time online. And yet this tension becomes even more fraught when you consider the growing prevalence of ad blockers, which represent users taking control of their experience at the direct expense of web developers and content creators who rely on advertising revenue not just to profit but to keep their sites functional and continuously improving, creating this edge case where user empowerment becomes, from another angle, a form of freeloading that undermines the very ecosystem we claim to value. The narrative that's been carefully constructed around this is fascinating to me because it attempts to reframe something we inherently understand as a nuisance, being sold things we didn't ask for, as a service, a curation of products and experiences tailored specifically to our interests and needs. And the truly disorienting part is that sometimes this narrative actually holds true; sometimes an ad does introduce me to a product I genuinely needed or wanted, and in those moments, the line between exploitation and value becomes genuinely blurry, making me question whether my resistance to advertising is justified or if I'm simply being stubborn about accepting a system that, despite its flaws, occasionally works in my favor.
              </p>
              <p style={{ marginBottom: '1rem' }}>
                But then I circle back to the methods employed to achieve this targeted relevance: the cookies tracking my every click, the data mining operations that build increasingly detailed profiles of who I am and what I want, the soft surveillance that feels less like a company trying to serve me better and more like an invasive observer cataloging my digital life for purposes I didn't consent to and don't fully understand, and I'm forced to confront the question of whether any amount of advertising relevance justifies these means. Because here's what troubles me most: even if we accept that targeted advertising can sometimes provide genuine value, that it can connect users with products they actually need and might never have discovered otherwise, we're still left with this uncomfortable reality that the infrastructure required to deliver that value is built on a foundation of data collection practices that most users don't truly understand and wouldn't agree to if they did, creating this bizarre situation where we've collectively traded our privacy for the convenience of not having to see ads for products we'd never buy, as if that were a fair exchange.
              </p>
              <p>
                The question that looms largest for me is whether there's something fundamentally broken in a system where the only way to make digital platforms financially viable is through advertising models that require such extensive user surveillance, or if we've simply accepted this as the inevitable cost of "free" services without seriously questioning whether alternative models might exist. The evolution of online advertising hasn't just been about technological advancement; it's been about gradually normalizing increasingly invasive practices by dressing them up as features, as personalization, as platforms caring about our preferences, and I'm not sure we've collectively reckoned with what we've lost in that trade, or whether the value we've gained even begins to justify the means employed to deliver it.
              </p>
            </div>
          </div>
        </article>

        {/* Article - Price Personalization */}
        <article style={{ marginBottom: '4rem' }}>
          <h2 style={{
            fontFamily: 'Georgia, serif',
            fontSize: 'clamp(3rem, 8vw, 5rem)',
            color: 'white',
            textAlign: 'center',
            marginBottom: '1rem',
            fontWeight: 400
          }}>
            Price Personalization: The Paywall You Saw Coming
          </h2>
          <div style={{
            fontFamily: 'Georgia, serif',
            textAlign: 'center',
            color: 'rgba(255, 255, 255, 0.9)',
            fontSize: '1.25rem',
            marginBottom: '2rem'
          }}>
            January 5, 2026
          </div>
          <div style={{
            backdropFilter: 'blur(12px)',
            background: 'rgba(255, 255, 255, 0.1)',
            borderRadius: '1rem',
            padding: '2rem',
            boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1)',
            border: '1px solid rgba(255, 255, 255, 0.2)'
          }}>
            <div style={{
              color: 'rgba(255, 255, 255, 0.9)',
              lineHeight: '1.75',
              fontSize: '1.05rem'
            }}>
              <p style={{ marginBottom: '1rem' }}>
                I've been thinking a lot lately about the strange emotional contract we unknowingly sign when we adopt a new service in its early days, back when everything feels generous and almost too good to be true; and I find myself wondering if the eventual sting of price personalization hurts so much not because of the money itself, but because of what that money represents: the dissolution of a relationship we thought was built on mutual benefit.
              </p>
              <p style={{ marginBottom: '1rem' }}>
                There's something uniquely powerful about discovering a product that works beautifully and asks for almost nothing in return. Outside of general marketing practice, when a company releases something genuinely useful and keeps it accessible and flexible, a quiet transformation begins to take place within the user. It's not just trust that develops; it's something closer to pride, this internal narrative that whispers, "hey, I'm using such a valuable resource with little to no caveats." You start to feel like you've found a secret, like you've beaten the system somehow, and that feeling becomes part of your identity as a user of that service.
              </p>
              <p style={{ marginBottom: '1rem' }}>
                So when the demand is confirmed and the price point inevitably spikes, when the dreaded tiered subscriptions start appearing like unwelcome guests, something peculiar happens beyond the general disdain of having to pay more for what you were doing freely just a week ago. An odd phenomenon emerges in which users power through the paywall with a motivation that runs deeper than mere dependence: it's the nostalgia of the app's original state, the memory of how much of a service it was to you, even if the current version, bloated by common corporate greed, has begun to cut corners and perform noticeably worse. The thing is, even when we notice the decline, we don't acknowledge it as much as we'd like to admit; we've already invested too much of ourselves into the relationship.
              </p>
              <p style={{ marginBottom: '1rem' }}>
                What's really the solution here? Should we incentivize wary users to clear their caches during the early days of a service's lifecycle before the makers can weaponize that information against them? But isn't that early cache data precisely what allows the app to improve and personalize the user's experience in the first place? This toxic dynamic only amplifies complaints rooted in the dread of having no way to enjoy the app without conforming to whatever terms the company dictates.
              </p>
              <p style={{ marginBottom: '1rem' }}>
                On the other hand, I find myself unable to ignore the perspective of these early stage companies who treat their product like a newborn they've had financially babysat by initial investors. There's a certain point at which we have to acknowledge that those "flexible" elements of their service might be costing them considerable money; they're gambling on gaining a trusted user base. Once accomplished, they've likely promised those investors a plan to monetize the service and recoup some of that initial faith. This is excusable as basic good practice from a business standpoint.
              </p>
              <p>
                However, it becomes an entirely different case when prices and paywalls multiply not out of necessity but out of opportunism: the company realizing they've become the sole provider of said service, feeding deliberately from the reliance and desperation of customers who have nowhere else to turn. The line between sustainable business and exploitation is thin, and I suspect most companies know exactly when they've crossed it; they simply choose not to care, because by then, we're already too attached to leave.
              </p>
            </div>
          </div>
        </article>

        {/* Article - The Moderation Paradox */}
        <article style={{ marginBottom: '4rem' }}>
          <h2 style={{
            fontFamily: 'Georgia, serif',
            fontSize: 'clamp(3rem, 8vw, 5rem)',
            color: 'white',
            textAlign: 'center',
            marginBottom: '1rem',
            fontWeight: 400
          }}>
            The Moderation Paradox: Anonymity, and the Limits of Automated Oversight
          </h2>
          <div style={{
            fontFamily: 'Georgia, serif',
            textAlign: 'center',
            color: 'rgba(255, 255, 255, 0.9)',
            fontSize: '1.25rem',
            marginBottom: '2rem'
          }}>
            December 2, 2025
          </div>
          <div style={{
            backdropFilter: 'blur(12px)',
            background: 'rgba(255, 255, 255, 0.1)',
            borderRadius: '1rem',
            padding: '2rem',
            boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1)',
            border: '1px solid rgba(255, 255, 255, 0.2)'
          }}>
            <div style={{
              color: 'rgba(255, 255, 255, 0.9)',
              lineHeight: '1.75',
              fontSize: '1.05rem'
            }}>
              <p style={{ marginBottom: '1rem' }}>
                Today I want to touch base on something that's been on my mind lately, a topic I keep returning to whenever I think about the state of online spaces and the invisible labor that keeps them functional, this question of content moderation and why, no matter how sophisticated our AI systems become, no matter how many billions we pour into machine learning models designed to detect hate speech and violence and the darkest corners of human expression, we still haven't managed to relieve the burden from what some have called "the janitors of the internet," those human moderators who spend their days, often for barely livable wages, sifting through the digital sewage of humanity so that the rest of us can scroll through our feeds without stumbling upon something that would haunt us for weeks.
              </p>
              <p style={{ marginBottom: '1rem' }}>
                The moral calculus here troubles me deeply, because we've essentially created a system where protecting the mental health of millions requires sacrificing the mental health of thousands, where the price of a sanitized internet experience is paid by real people who develop PTSD, depression, and lasting psychological damage from their daily exposure to child exploitation material, graphic violence, and the concentrated hatred that humans are capable of producing when given anonymity and a keyboard. And yet, despite this human cost, we can't simply hand the job over to algorithms, because automated moderation fails in ways that are both predictable and profoundly difficult to solve, it lacks what I can only describe as cultural fluency, that intuitive understanding of when something crosses from edgy humor into genuine harm, when a phrase that looks innocuous is actually a dog whistle understood only by those it's meant to reach.
              </p>
              <p style={{ marginBottom: '1rem' }}>
                Social media platforms have discovered, often through spectacular public failures, that context is everything and context is precisely what AI struggles to grasp. The same words can be reclamation or slur depending on who's speaking, the same image can be documentation or glorification depending on intent, and the ever-evolving lexicon of hate, where communities develop shorthand, inside jokes, and coded language specifically designed to evade detection, means that any trained model is perpetually playing catch-up against human creativity deployed toward malicious ends. Reddit's approach of community-specific moderators acknowledges this reality, recognizing that someone embedded in a community can read the room in ways an algorithm simply cannot, but this solution introduces its own troubling questions: if moderators are anonymous participants in the communities they police, what prevents the fox from guarding the henhouse, what stops someone who shares a community's hateful beliefs from selectively enforcing rules to protect their ideological allies while punishing outsiders?
              </p>
              <p style={{ marginBottom: '1rem' }}>
              And this is where I find myself stuck in a loop of uncomfortable questions, because the alternative to trusting anonymous community moderators is to swing back toward automated systems that, when deployed too aggressively, end up punishing users who had no hateful intent whatsoever, people who used a word in a context the algorithm couldn't parse, who made a dark joke that landed wrong in the training data, who quoted something offensive in order to critique it and found themselves banned for the very content they were condemning. The brutality of automated moderation isn't just in what it misses but in how it overcorrects, how it flattens the rich, messy, context-dependent nature of human communication into a binary of "violation" or "not violation" without any of the nuance that a human reviewer, for all their psychological toll, would bring to the table.
              </p>
              <p style={{ marginBottom: '1rem' }}>
                What strikes me most when I sit with all of this is that we're essentially asking an impossible question: what does faithful and moral moderation even look like when the communities we're trying to moderate are as diverse and contradictory as communities in the physical world, where norms and culture and acceptable speech vary not just from country to country but from neighborhood to neighborhood, from friend group to friend group, from one corner of a subreddit to another? We want universal rules applied with contextual sensitivity, we want speed and scale without sacrificing accuracy, we want to protect users from harm without censoring legitimate expression, and we want all of this without destroying the mental health of the people tasked with making these judgment calls thousands of times a day.
              </p>
              <p>
                I don't have a neat resolution to offer here, and I think anyone who claims to have one is either selling something or hasn't thought about it hard enough. What I do think is that we need to stop treating content moderation as a problem that can be "solved" with the right algorithm or the right policy update and start treating it as an ongoing, inherently imperfect negotiation between competing values that will never fully resolve. Maybe the best we can do is build systems that fail gracefully, that err on the side of human review for edge cases, that compensate moderators fairly and provide genuine mental health support, that give communities some autonomy while maintaining accountability structures that prevent the worst abuses of power. It's not satisfying, it's not elegant, and it certainly doesn't make for a good press release, but it might be the most honest way to approach a problem that, like the internet itself, is fundamentally a reflection of who we are as people, in all our creativity and cruelty and everything in between.
              </p>
            </div>
          </div>
        </article>

        {/* Article - Incognito Mode */}
        <article style={{ marginBottom: '4rem' }}>
          <h2 style={{
            fontFamily: 'Georgia, serif',
            fontSize: 'clamp(3rem, 8vw, 5rem)',
            color: 'white',
            textAlign: 'center',
            marginBottom: '1rem',
            fontWeight: 400
          }}>
            Incognito Mode: Perception of Online Privacy vs. Platform Reality
          </h2>
          <div style={{
            fontFamily: 'Georgia, serif',
            textAlign: 'center',
            color: 'rgba(255, 255, 255, 0.9)',
            fontSize: '1.25rem',
            marginBottom: '2rem'
          }}>
            November 2, 2025
          </div>
          <div style={{
            backdropFilter: 'blur(12px)',
            background: 'rgba(255, 255, 255, 0.1)',
            borderRadius: '1rem',
            padding: '2rem',
            boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1)',
            border: '1px solid rgba(255, 255, 255, 0.2)'
          }}>
            <div style={{
              color: 'rgba(255, 255, 255, 0.9)',
              lineHeight: '1.75',
              fontSize: '1.05rem'
            }}>
              <p style={{ marginBottom: '1rem' }}>
                I've been thinking a lot lately about this strange dance we all do with our privacy online, where we carefully curate who can see our vacation photos and scrutinize our friend lists, all while simultaneously agreeing to terms of service that we haven't read and wouldn't fully understand even if we had—and the more I dig into the research on this topic, the more I realize that this contradiction isn't just about laziness or apathy, but rather reflects something much deeper and more troubling about the fundamental mismatch between how we think privacy works on social platforms and how it actually works behind the scenes.
              </p>
              <p style={{ marginBottom: '1rem' }}>
                What really gets me is this concept that Nov and Wattal (2009) identified in their research on social computing privacy concerns, which is that we don't actually have just one unified sense of "privacy" that we apply across the internet—instead, we have these completely different frameworks for thinking about "internet privacy concerns" (which is our anxiety about faceless corporations collecting our data) versus "community-specific privacy concerns" (which is our worry about what our actual friends and connections might see or do with our information). The fascinating and somewhat disturbing part is that we tend to focus almost entirely on that second type of concern, obsessing over whether our ex can see our posts or whether our boss might stumble upon that questionable photo from 2019, while the platforms themselves are operating on a completely different level of data collection and usage that most of us barely even consider when we're making decisions about what to share.
              </p>
              <p style={{ marginBottom: '1rem' }}>
                The whole thing becomes even more paradoxical when you consider what Kokolakis (2017) calls the "privacy paradox," which describes this bizarre situation where we'll tell researchers in surveys that we're deeply concerned about our privacy and that we value it tremendously, but then we'll turn around and post incredibly personal information online for the smallest of rewards—sometimes just for the dopamine hit of getting likes and comments from our peers. What this suggests to me, and what Kokolakis argues pretty convincingly, is that privacy isn't really a rational economic calculation where we're carefully weighing costs and benefits like some kind of privacy economists, but rather it's this messy, complicated social and psychological phenomenon where the immediate gratification of social connection and validation consistently trumps these abstract, distant, hard-to-conceptualize risks about what might happen to our data in the future.
              </p>
              <p style={{ marginBottom: '1rem' }}>
                When you actually look at the empirical research on what people understand versus what's really happening with their data, the gaps become almost comically large in a way that would be funny if it weren't so concerning. Faisal and Alsumait (2011) found in their study of 222 social network users that while people rated themselves pretty confidently on understanding privacy settings—averaging around 3.2 to 3.6 on a 5-point scale—their actual behaviors told a completely different story, with 76% posting their real names, 59% their email addresses, and 63% their birthdays, all while expressing concern that platforms might be using their data. This creates what I think of as a dangerous form of the Dunning-Kruger effect specifically for privacy, where the people who think they understand privacy controls but actually don't are probably the ones taking the biggest risks because they have this false sense of security that leads them to share more than they otherwise would.
              </p>
              <p style={{ marginBottom: '1rem' }}>
                But here's where it gets really interesting, and honestly kind of infuriating: Rao and colleagues (2016) actually went through and systematically compared what users expect platforms to do with their data versus what platforms actually do according to their privacy policies, and they found these consistent, predictable mismatches that help explain why so many of us feel blindsided when we learn about certain data practices. For instance, users generally didn't expect websites to collect their contact information without them creating an account—they operated under this "explicit consent" mental model where data collection only happens when you actively fill out a form—but platforms were actually collecting this information in all sorts of passive ways that users weren't aware of. On the flip side, and this is kind of darkly amusing, users were sometimes more paranoid than they needed to be, incorrectly believing that platforms would share their contact information when many platforms actually don't engage in that particular practice, which means we're sometimes sacrificing utility and avoiding platforms based on fears that aren't even grounded in reality.
              </p>
              <p style={{ marginBottom: '1rem' }}>
                The legal dimension of all this, which Mizrahi (2021) explores in depth, might be the most troubling aspect of the whole situation because it reveals that this perception-reality gap isn't just an accident or a communication failure—it's actually being actively perpetuated by legal mechanisms that create an elaborate theater of consent. Those terms of service and privacy policy agreements that we all click through without reading aren't really designed to inform us or protect us, despite their reassuring names; instead, they're primarily legal documents designed to protect the platforms by obtaining our formal consent to practices that we don't actually understand and probably wouldn't agree to if we did. The very term "Privacy Policy" is itself a kind of deception, implying protection when these documents often actually authorize extensive data collection and sharing practices that would alarm most users if explained in plain language.
              </p>
              <p>
                What really strikes me about all this research, taken together, is that the gap between our perceptions and reality isn't just about individual users being confused or uneducated—it's about fundamental misalignments between how human beings naturally think about privacy (through social relationships, contextual norms, and trust) and how privacy actually operates in technical and legal systems (through access controls, data flows, and formal consent mechanisms). We're essentially trying to navigate a highly technical, legally complex data ecosystem using social intuitions that evolved for face-to-face interactions in small communities, and it's not working, and I'm not sure it ever really can work without fundamentally redesigning either how these platforms operate or how privacy is legally structured or probably both. The truth is, I don't think this is a problem that can be solved simply by making privacy policies easier to read or giving users more granular controls over their data—though those things certainly wouldn't hurt—because the core issue is that we're operating with completely different conceptual frameworks than the platforms are, and no amount of interface tweaking can bridge that fundamental gap. What we probably need instead is a complete rethinking of how privacy protection works in social computing environments, moving away from this fiction of informed consent and toward technical and legal frameworks that actually match users' reasonable expectations about how their data should be handled, even when they haven't read a 50-page legal document to understand exactly what's happening behind the scenes.
              </p>
            </div>
          </div>
        </article>

        {/* Article - Voice of Reason(ing) */}
        <article style={{ marginBottom: '4rem' }}>
          <h2 style={{
            fontFamily: 'Georgia, serif',
            fontSize: 'clamp(3rem, 8vw, 5rem)',
            color: 'white',
            textAlign: 'center',
            marginBottom: '1rem',
            fontWeight: 400
          }}>
            Voice of Reason(ing): Why AI's Vocal Ambitions Miss the Mark or Don't Have One to Miss
          </h2>
          <div style={{
            fontFamily: 'Georgia, serif',
            textAlign: 'center',
            color: 'rgba(255, 255, 255, 0.9)',
            fontSize: '1.25rem',
            marginBottom: '2rem'
          }}>
            October 23, 2025
          </div>
          <div style={{
            backdropFilter: 'blur(12px)',
            background: 'rgba(255, 255, 255, 0.1)',
            borderRadius: '1rem',
            padding: '2rem',
            boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1)',
            border: '1px solid rgba(255, 255, 255, 0.2)'
          }}>
            <div style={{
              color: 'rgba(255, 255, 255, 0.9)',
              lineHeight: '1.75',
              fontSize: '1.05rem'
            }}>
              <p style={{ marginBottom: '1rem' }}>
                I've been thinking a lot lately about voice integration in AI, and I can't help but wonder if this push toward perfecting the way artificial intelligence sounds—making it mimic us, respond like us, converse with the cadence and warmth we associate with human interaction—is actually what we need or want, or if it's simply an assumption built on decades of retrofuturistic media that promised us talking computers as the ultimate achievement, a nostalgic benchmark we've been chasing without really interrogating why.
              </p>
              <p style={{ marginBottom: '1rem' }}>
                It reminds me of how, before ChatGPT and the other sophisticated models that emerged in the 2020s fundamentally changed our expectations, we were comfortable with AI being somewhat terrible—predictably limited, frequently misunderstanding us—because those failures felt like a distant problem that would take years, maybe decades, to solve, and there was something almost reassuring about that buffer zone between us and true machine competence.
              </p>
              <p style={{ marginBottom: '1rem' }}>
                But here's what keeps circling back in my mind: if Siri, in its initial debut, had been indescribably brilliant at its intended function, if it had truly understood context and nuance and responded with genuine conversational fluency, we would have immediately opened a vortex of social deviances and behavioral shifts that had never been case-studied before, much like how the smartphone era introduced us to problems we couldn't have anticipated—the way we compulsively check our phones before bed despite knowing it disrupts our sleep, or how we've normalized using our screens as shields to avoid unwanted social interactions in public spaces, creating this pocket dimension where we're physically present but psychologically elsewhere.
              </p>
              <p style={{ marginBottom: '1rem' }}>
                What fascinates me most, though, is how we judge voice AI not by its technical shortcomings but by what I'd call its "social shortcomings"—we don't think of Siri or Alexa making mistakes as bugs in the code that need debugging, but rather as social exploits, awkward moments where the AI fails to read the room or respond appropriately, the same way humans constantly navigate social situations to avoid being exploited or embarrassed themselves.
              </p>
              <p style={{ marginBottom: '1rem' }}>
                This phenomenon places voice AI on the highest shelf of technologies we need to "protect from human hubris," right alongside features like Face ID, where the novelty wore off almost instantly and was immediately replaced by social dread about potential misuse—someone using your face to unlock your phone while you're sleeping, or holding up a photo to bypass security—and voice is arguably even more vulnerable because there's something about using a camera that holds people socially accountable in a way that talking to a device doesn't. A visual "no" on a screen creates a clear, definitive barrier—a password block that cuts off all information instantly—whereas a voice model, by design, has to engage in conversation with a perpetrator, and in that conversational dance, even while being confidential and cautious, it might accidentally spill unnecessary tidbits of information simply because that's what conversation does, it flows and meanders and sometimes reveals more than intended.
              </p>
              <p style={{ marginBottom: '1rem' }}>
                This brings me to what I find most perplexing about voice AI's trajectory: what exactly is its endgame for improvement? Sound too advanced, too proper, too articulate, and it immediately feels worthless to users who want something that feels natural and approachable; dumb things down, incorporate slang and sentence breaks and adopt a coerced narrative style meant to capture the shortened attention span we bring to human conversation, and suddenly we're reminded it's just a bot, which then triggers this new environment where users feel entitled to make desperate, curt demands—"be more concise," "get to the point," "just answer the question"—because the sense of respect becomes optional when you're talking to something that isn't human, even though, paradoxically, we still treat these interactions as socially charged moments where rudeness feels uncomfortable.
              </p>
              <p style={{ marginBottom: '1rem' }}>
                The misuse isn't just in what people demand but in how they demand it, and I've noticed people often feel genuinely uncomfortable making certain requests to their voice assistants in public, in front of other people, because they know those around them will judge them for being rude or impatient with what amounts to a machine, which speaks to this deeper human tendency to project social dynamics onto anything that exhibits human-like qualities.
              </p>
              <p>
                As voice integration becomes more prevalent in public spaces beyond our homes—in stores, offices, shared transportation—I think we're going to see this phenomenon intensify exponentially, because humans have this almost involuntary sympathy for things that showcase human-like qualities, the same way we've developed complex emotional relationships with pets like dogs and cats who depend on us and respond to our moods, and we'll find ourselves caught in this strange ethical gray zone where we know intellectually that we're talking to code, but emotionally, we can't quite shake the feeling that politeness still matters, that tone still counts.
              </p>
            </div>
          </div>
        </article>

        {/* Article - GlassMorphism */}
        <article style={{ marginBottom: '4rem' }}>
          <h2 style={{
            fontFamily: 'Georgia, serif',
            fontSize: 'clamp(3rem, 8vw, 5rem)',
            color: 'white',
            textAlign: 'center',
            marginBottom: '1rem',
            fontWeight: 400
          }}>
            GlassMorphism: Fad or the Future?
          </h2>
          <div style={{
            fontFamily: 'Georgia, serif',
            textAlign: 'center',
            color: 'rgba(255, 255, 255, 0.9)',
            fontSize: '1.25rem',
            marginBottom: '2rem'
          }}>
            December 22, 2024
          </div>
          <div style={{
            backdropFilter: 'blur(12px)',
            background: 'rgba(255, 255, 255, 0.1)',
            borderRadius: '1rem',
            padding: '2rem',
            boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1)',
            border: '1px solid rgba(255, 255, 255, 0.2)'
          }}>
            <div style={{
              color: 'rgba(255, 255, 255, 0.9)',
              lineHeight: '1.75',
              fontSize: '1.05rem'
            }}>
              <p style={{ marginBottom: '1rem' }}>
                I find myself endlessly fascinated by the ebb and flow of design trends, particularly those that seem to captivate the collective imagination so thoroughly, like glassmorphism. It's almost impossible for me to examine it without my mind spiraling into a maze of questions about why it works, how it makes us feel, and whether it's destined to linger or fade into obscurity. There's something almost poetic about the way glassmorphism mimics the translucent, ethereal quality of frosted glass—how it manages to feel both futuristic and oddly familiar, as though it's part of a shared visual memory we've all tapped into, consciously or not. It's hard not to wonder if this resonance is what makes it so alluring, or if it's simply a clever trick of the light.
              </p>
              <p style={{ marginBottom: '1rem' }}>
                When I think about its strengths, I find myself grappling with the tension between aesthetic beauty and practical utility. On the one hand, glassmorphism has this undeniable elegance—it invites you to peer through the layers of a design, teasing you with just enough transparency to create curiosity without overwhelming your senses. But then, my mind quickly shifts to the potential drawbacks, like the performance costs on less powerful devices, or the accessibility challenges that arise when a design is too subtle for some users to navigate comfortably. It's like trying to balance on a knife's edge, where the success of a design trend hinges on its ability to satisfy both the artistic and the functional. And yet, isn't that the eternal struggle of good design?
              </p>
              <p style={{ marginBottom: '1rem' }}>
                I suppose what I find most thought-provoking about glassmorphism is its dual nature—it feels both fleeting and timeless, as though it could just as easily be a passing obsession as it could be a permanent fixture in our design toolkit. But then, a question inevitably arises to the surface for me: is this style meant to have boundaries? Should it be applied indiscriminately across all use cases, or is it meant to serve a more deliberate, even symbolic, purpose?
              </p>
              <p style={{ marginBottom: '1rem' }}>
                When I see glassmorphism in action, it often feels like more than just a design choice—it feels like a signal. There's an intentionality to the frosted layers, the soft glows, and the delicate interplay of transparency and depth that suggests it's not merely about making something look beautiful. It seems to whisper, "This is cutting-edge. This is advanced." I can't help but wonder if its purpose lies not in universality but in its capacity to convey sophistication, to act as a visual cue that what you're engaging with is technologically forward-thinking. Its as if glassmorphism has this almost uncanny ability to project an image—not necessarily of the future as it will be, but of the future as we want to imagine it: It's a crafted ideal, a version of technology that feels clean, light, and accessible, as though it's trying to reassure us that the complexity of what lies beneath is nothing to fear. But this leads me to wonder: does this aesthetic lose its potency when it's applied to products or interfaces that don't inherently demand that kind of association? If every app, every site, and every button adopts this glossy, glassy sheen, does it still communicate innovation—or does it become just another visual gimmick?
              </p>
              <p>
                Perhaps glassmorphism works best when it's tethered to a sense of purpose, when it acts as a familiar yet forward-thinking marker for technological sophistication. For example, when I see it in systems like macOS Big Sur or Windows 11, it feels right—it matches the narrative of those platforms as cutting-edge and sleek. But I find myself questioning how it would feel in, say, a grocery store's app or a brand trying to sell soap. Would the frosted layers and glowing accents elevate the experience, or would they feel out of place, even disingenuous? And what does that tell us about the role of design in shaping not just how we interact with technology, but how we perceive its purpose? Ultimately, glassmorphism feels to me, aspirational in a way that feels almost universal, yet I wonder if it's a vision we should be careful with, one that's only effective when used sparingly and thoughtfully.
              </p>
            </div>
          </div>
        </article>

        {/* Article - Playlists */}
        <article style={{ marginBottom: '4rem' }}>
          <h2 style={{
            fontFamily: 'Georgia, serif',
            fontSize: 'clamp(3rem, 8vw, 5rem)',
            color: 'white',
            textAlign: 'center',
            marginBottom: '1rem',
            fontWeight: 400
          }}>
            Playlists: The Pros and Cons
          </h2>
          <div style={{
            fontFamily: 'Georgia, serif',
            textAlign: 'center',
            color: 'rgba(255, 255, 255, 0.9)',
            fontSize: '1.25rem',
            marginBottom: '2rem'
          }}>
            September 16, 2024
          </div>
          <div style={{
            backdropFilter: 'blur(12px)',
            background: 'rgba(255, 255, 255, 0.1)',
            borderRadius: '1rem',
            padding: '2rem',
            boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1)',
            border: '1px solid rgba(255, 255, 255, 0.2)'
          }}>
            <div style={{
              color: 'rgba(255, 255, 255, 0.9)',
              lineHeight: '1.75',
              fontSize: '1.05rem'
            }}>
              <p style={{ marginBottom: '1rem' }}>
                For as long as I can remember, I never bothered to make playlists. It just seemed like unnecessary work—work I didn't care to do. To the horror of many, I was that person who hit shuffle play on my liked songs with absolutely no concern for whether the next track suited my mood or even remotely matched the context. And yet, there was something magical about that approach: the randomness, the lack of conscious effort to determine or align with a mood. I never felt the need to dig deep and analyze my emotional state or figure out what songs "fit" the moment. Instead, I let the shuffle decide for me, allowing the unpredictable sequence of songs to subconsciously shape my mood. More often than not, it saved me, lifting me out of a funk with an unexpected upbeat track. Of course, the opposite could happen too—a poorly timed song could sink my mood further—but those moments were rare, because ultimately, I genuinely liked all the songs in my library. If I didn't, they wouldn't be there.
              </p>
              <p style={{ marginBottom: '1rem' }}>
                This approach defined my listening habits for years, ever since I first downloaded Spotify as a teenager. To add some context, I've always been a music enthusiast—though I never felt the need to broadcast that fact. By the time I started college, my library had ballooned to around 6,000 tracks. Music was my personal thing, something I engaged with privately, though it often became a way to connect with others. Discussing artists, genres, and shared favorites with new friends on campus gave me insights into both their tastes and my own. My library was vast because my listening habits were open—if it sounded good, it sounded good. Over the years, I'd absorbed influences from countless genres, though I came to realize that not everyone approached music with the same openness. Some friends were steadfastly loyal to certain styles and wary of others, while others shared my eagerness to explore. These conversations helped me reflect on what I genuinely enjoyed and why.
              </p>
              <p style={{ marginBottom: '1rem' }}>
                Back then, my playlist strategy—or lack thereof—reflected this openness. I had one massive, catch-all playlist, essentially a more curated subset of my liked songs. It served as a safe space, filled with tracks I could confidently play in any social setting without worrying about raising eyebrows. It was a public-facing version of my library, stripped of anything too polarizing. But beyond that, I had no structured system, no categories or themes to speak of.
              </p>
              <p style={{ marginBottom: '1rem' }}>
                That changed the summer after my freshman year. It was a transitional time for me, both emotionally and mentally, and for the first time, I felt the urge to bring some order to my musical chaos. I decided to start making playlists—real ones, with actual thought behind them. The first few were nothing groundbreaking: broad themes and moods that anyone might relate to. But even as I experimented with these simple categories, I began to notice how much power a well-curated playlist had over my psyche. Listening to a collection of songs intentionally, rather than leaving it to chance, could steer my emotions in a way I hadn't fully appreciated before.
              </p>
              <p style={{ marginBottom: '1rem' }}>
                With this realization, I started making more playlists, each one more specific than the last. Interestingly, my years of shuffle playing had unintentionally prepared me for this task. Having been exposed to all the songs in my library with equal frequency, I knew my collection inside and out. It was easy to recall tracks that matched the mood I was trying to capture in a given playlist.
              </p>
              <p style={{ marginBottom: '1rem' }}>
                Initially, I thought I had a clear end goal: to create a handful of large playlists covering every major genre or mood. Once those were complete, I assumed, I could simply add new songs to the existing categories as I discovered them. But I quickly realized that approach didn't work for me. There was something special about the original tracklists of each playlist—so much so that I couldn't bring myself to add new songs later, even if they fit perfectly. Those playlists captured a moment, a mood, and altering them felt like tampering with a time capsule. This was when I realized I wouldn't be the type of person with a few mega-playlists I kept adding to indefinitely. Instead, I embraced the idea of creating new, smaller playlists as the need arose, each one tailored to a specific theme or feeling.
              </p>
              <p style={{ marginBottom: '1rem' }}>
                By the time my sophomore year rolled around, this strategy had become my norm. I started making playlists for increasingly niche emotions and situations, and now, as a senior, I have an almost absurd number of them. I often describe my playlists to friends as time capsules, because while they're initially made to capture a specific mood, the act of listening to them over time adds layers of meaning. Revisiting a playlist can transport me back to the exact moment in life when I created it, letting me relive those memories through the songs I chose.
              </p>
              <p style={{ marginBottom: '1rem' }}>
                One of the biggest advantages of this method is how much easier it makes sharing music. When someone asks for a recommendation, I no longer have to scroll through my recently liked songs in a panic, trying to remember that one perfect track. Instead, I can pull up a playlist that embodies the exact vibe I think they'd enjoy. But there's a downside too: the constant need for new music. To make a fresh playlist, I can't just rely on my current rotation—I need to seek out songs I haven't already used. This means taking breaks from my favorite playlists, which can feel like a chore. It also highlights a larger limitation: playlists, by nature, are finite. That's both their beauty and their flaw. They provide structure and focus, but they can also box you in, making it harder to explore new sounds.
              </p>
              <p>
                In reflecting on all this, I realize how seriously I take playlist-making. Maybe too seriously. But for me, it's not just about organizing music—it's about capturing moments, emotions, and connections. And if that means overthinking every detail, well, that's just who I am.
              </p>
            </div>
          </div>
        </article>
      </div>

      {/* Back to Top Button */}
      {showBackToTop && (
        <button
          onClick={scrollToTop}
          style={{
            position: 'fixed',
            bottom: '2rem',
            right: '2rem',
            width: '48px',
            height: '48px',
            borderRadius: '50%',
            background: 'rgba(255, 255, 255, 0.15)',
            border: '1px solid rgba(255, 255, 255, 0.3)',
            backdropFilter: 'blur(12px)',
            color: 'white',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            transition: 'all 0.3s ease',
            zIndex: 60,
            boxShadow: '0 4px 15px rgba(0, 0, 0, 0.2)'
          }}
          onMouseOver={e => {
            e.currentTarget.style.background = 'rgba(255, 255, 255, 0.25)';
            e.currentTarget.style.transform = 'translateY(-2px)';
          }}
          onMouseOut={e => {
            e.currentTarget.style.background = 'rgba(255, 255, 255, 0.15)';
            e.currentTarget.style.transform = 'translateY(0)';
          }}
          aria-label="Back to top"
        >
          <ChevronUp size={24} />
        </button>
      )}

      {/* Subscription Popup */}
      {showPopup && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.6)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 100,
          padding: '1rem'
        }}>
          <div style={{
            background: '#1a2b4c',
            borderRadius: '1rem',
            padding: '2rem',
            maxWidth: '500px',
            width: '100%',
            border: '1px solid rgba(255, 255, 255, 0.2)',
            boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.3)',
            position: 'relative'
          }}>
            <button
              onClick={handleClosePopup}
              style={{
                position: 'absolute',
                top: '1rem',
                right: '1rem',
                background: 'none',
                border: 'none',
                color: 'rgba(255, 255, 255, 0.7)',
                cursor: 'pointer',
                padding: '0.25rem',
                display: 'flex',
                alignItems: 'center',
                transition: 'color 0.2s'
              }}
              onMouseOver={e => e.currentTarget.style.color = 'white'}
              onMouseOut={e => e.currentTarget.style.color = 'rgba(255, 255, 255, 0.7)'}
            >
              <X size={24} />
            </button>

            <h3 style={{
              fontFamily: 'Georgia, serif',
              fontSize: '1.75rem',
              color: 'white',
              marginBottom: '1rem',
              fontWeight: 400
            }}>
              Stay Updated
            </h3>
            <p style={{
              color: 'rgba(255, 255, 255, 0.9)',
              lineHeight: '1.6',
              marginBottom: '1.5rem',
              fontSize: '1rem'
            }}>
              Subscribe to receive timely updates whenever I publish new content.
            </p>
            <div style={{
              display: 'flex',
              gap: '1rem',
              flexWrap: 'wrap'
            }}>
              <a
                href="https://groups.google.com/g/parsing_queries"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  flex: '1',
                  minWidth: '150px',
                  textAlign: 'center',
                  background: 'rgba(255, 255, 255, 0.15)',
                  color: 'white',
                  padding: '0.75rem 1.5rem',
                  borderRadius: '0.5rem',
                  textDecoration: 'none',
                  fontFamily: 'Georgia, serif',
                  fontSize: '1rem',
                  border: '1px solid rgba(255, 255, 255, 0.3)',
                  transition: 'all 0.2s',
                  cursor: 'pointer'
                }}
                onMouseOver={e => {
                  e.currentTarget.style.background = 'rgba(255, 255, 255, 0.25)';
                  e.currentTarget.style.transform = 'translateY(-2px)';
                }}
                onMouseOut={e => {
                  e.currentTarget.style.background = 'rgba(255, 255, 255, 0.15)';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                Join Google Group
              </a>
              <a
                href="https://substack.com/@issamohamed"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  flex: '1',
                  minWidth: '150px',
                  textAlign: 'center',
                  background: 'rgba(255, 255, 255, 0.15)',
                  color: 'white',
                  padding: '0.75rem 1.5rem',
                  borderRadius: '0.5rem',
                  textDecoration: 'none',
                  fontFamily: 'Georgia, serif',
                  fontSize: '1rem',
                  border: '1px solid rgba(255, 255, 255, 0.3)',
                  transition: 'all 0.2s',
                  cursor: 'pointer'
                }}
                onMouseOver={e => {
                  e.currentTarget.style.background = 'rgba(255, 255, 255, 0.25)';
                  e.currentTarget.style.transform = 'translateY(-2px)';
                }}
                onMouseOut={e => {
                  e.currentTarget.style.background = 'rgba(255, 255, 255, 0.15)';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >Join my Substack
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
