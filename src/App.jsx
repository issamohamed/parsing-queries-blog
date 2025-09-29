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