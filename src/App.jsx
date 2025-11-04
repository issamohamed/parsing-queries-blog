import React from 'react';
import { Github, Linkedin, Twitter, Facebook, Music, Instagram } from 'lucide-react';

export default function BlogPage() {
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
          
          {/* Social Links under title */}
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

      {/* Spacer */}
      <div style={{ height: '10rem' }}></div>

      {/* Profile Image */}
      <div style={{ maxWidth: '72rem', margin: '0 auto', marginBottom: '4rem', textAlign: 'center' }}>
        <img 
          src="/images/blog_profile_pic.jpg" 
          alt="Issa Mohamed"
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

      {/* Blog Articles */}
      <div style={{ maxWidth: '56rem', margin: '0 auto' }}>
        {/* Article 1 */}
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

        {/* Article 2 */}
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

        {/* Article 3 */}
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

        {/* Article 4 */}
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
    </div>
  );
}
