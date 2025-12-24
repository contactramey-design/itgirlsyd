// IT Girl Academy - Complete Course Content & Scripts
// Each lesson includes full scripts, talking points, and template info

export const COURSE_SCRIPTS = {
  // ═══════════════════════════════════════════════════════════════════════════
  // CREATOR BUSINESS TOOLKIT - Complete Scripts
  // ═══════════════════════════════════════════════════════════════════════════
  'creator-business-toolkit': {
    courseTitle: 'Creator Business Toolkit',
    courseDescription: 'The complete guide to turning your content into a real business.',
    modules: [
      // ─────────────────────────────────────────────────────────────────────────
      // MODULE 1: Finding Your Niche
      // ─────────────────────────────────────────────────────────────────────────
      {
        moduleId: 'm1',
        moduleTitle: 'Module 1: Finding Your Niche',
        moduleDescription: 'Discover what makes you unique and build a brand people remember.',
        lessons: [
          {
            lessonId: 'l1',
            title: 'How I Found My Voice',
            type: 'video',
            duration: '14:22',
            free: true,
            script: {
              hook: `Let me ask you something real quick... Do you ever scroll through your feed and think "everyone's already doing what I want to do"? Like there are a million beauty creators, a million lifestyle influencers, and you're just... another one?

I felt that EXACT same way two years ago. I was posting random content, trying to copy what was working for other people, and wondering why my stuff never took off.

Here's the thing nobody tells you: The most successful creators aren't the ones doing something "new" - they're the ones doing something AUTHENTIC. And today, I'm going to help you find YOUR voice.`,
              
              painPoints: [
                "Feeling like a copycat of bigger creators",
                "Posting random content without a clear direction",
                "Low engagement despite consistent posting",
                "Imposter syndrome - 'Who am I to teach/share this?'",
                "Comparing your behind-the-scenes to others' highlight reels"
              ],
              
              keyPoints: [
                {
                  title: "Your Niche Isn't What You DO - It's WHO You Are",
                  content: `Stop thinking "I'm a beauty creator" or "I'm a lifestyle influencer." That's not a niche - that's a category.

Your niche is the intersection of:
• What you're genuinely passionate about
• What you have real experience with  
• What your audience needs help with
• What makes you DIFFERENT

For me, it wasn't just "beauty" - it was "affordable glam for busy women who have 10 minutes to get ready." THAT's specific. THAT's memorable.`,
                  actionStep: "Write down 3 things you could talk about for hours without getting bored. These are your passion pillars."
                },
                {
                  title: "The 'Only I' Exercise",
                  content: `Here's a powerful exercise that changed everything for me.

Complete this sentence 5 different ways:
"Only I can talk about _______ because _______."

Examples:
• "Only I can talk about building confidence after weight gain because I gained 40 lbs in college and documented my journey back to self-love."
• "Only I can talk about natural hair care for busy moms because I'm a nurse working 12-hour shifts with 3 kids."

Your uniqueness isn't about being the BEST - it's about being the ONLY one with your specific story and perspective.`,
                  actionStep: "Complete the 'Only I' exercise 5 times. Be specific about your unique experiences."
                },
                {
                  title: "Stop Niching Down on Topics - Niche Down on PEOPLE",
                  content: `Here's the mindset shift that 10x'd my engagement:

Instead of asking "What content should I make?"
Ask "WHO am I making this for?"

When I stopped trying to appeal to "everyone who likes beauty" and started creating specifically for "young Black women who want to embrace their natural beauty but also love a good glam moment" - everything clicked.

My content became more specific. More relatable. More shareable.

Your dream follower should feel like you're reading their mind.`,
                  actionStep: "Describe your ideal follower in detail: age, lifestyle, struggles, dreams, what they Google at 2am."
                }
              ],
              
              successStory: `When I first started, I had 800 followers and was getting maybe 50 likes per post. I was posting everything - makeup, outfits, random life stuff, recipes...

Then I did this exact exercise. I realized my "Only I" was: "Only I can show working millennial women how to look put-together in 15 minutes because I'm literally doing it every morning before my 9-5."

Within 3 months of niching down, I hit 10K. Within a year, I was at 50K. Same me, same camera, same editing skills - just a CLEAR voice and audience.`,
              
              recap: [
                "Your niche = passion + experience + audience need + your unique angle",
                "Complete the 'Only I' exercise to find your unique perspective",
                "Niche down on PEOPLE, not just topics",
                "Specificity attracts - trying to appeal to everyone attracts no one"
              ],
              
              homework: "Complete the Brand Identity Worksheet in the next lesson. Don't skip this - it's the foundation for EVERYTHING else we're going to build.",
              
              quotable: "You don't need to be the best. You need to be the ONLY one who sounds like you."
            }
          },
          {
            lessonId: 'l2',
            title: 'Brand Identity Worksheet',
            type: 'template',
            downloadName: 'Brand-Identity-Worksheet.pdf',
            description: 'A fillable PDF workbook to define your unique creator brand.',
            templateSections: [
              {
                title: "Section 1: Your Story",
                prompts: [
                  "What life experiences shaped who you are today?",
                  "What struggles have you overcome that your audience might relate to?",
                  "What do people always come to you for advice about?",
                  "Complete: 'Only I can talk about _____ because _____' (5 times)"
                ]
              },
              {
                title: "Section 2: Your Ideal Follower",
                prompts: [
                  "Age range:",
                  "Life stage (student, new mom, career woman, etc.):",
                  "Their biggest struggles:",
                  "Their secret dreams:",
                  "What they Google at 2am:",
                  "What would make them screenshot your post and send to a friend?"
                ]
              },
              {
                title: "Section 3: Your Content Pillars",
                prompts: [
                  "Pillar 1 (Educational): What can you teach?",
                  "Pillar 2 (Inspirational): What can you motivate people to do?",
                  "Pillar 3 (Entertainment): What makes you fun/relatable?",
                  "Pillar 4 (Personal): What behind-the-scenes do people connect with?"
                ]
              },
              {
                title: "Section 4: Your Brand Voice",
                prompts: [
                  "3 words that describe your vibe:",
                  "If your brand was a celebrity, who would it be?",
                  "How do you want people to FEEL after consuming your content?",
                  "What phrases or words do you use that are uniquely YOU?"
                ]
              }
            ]
          },
          {
            lessonId: 'l3',
            title: 'Niche Discovery Quiz',
            type: 'quiz',
            questions: [
              {
                question: "What's the difference between a category and a niche?",
                options: [
                  "A category is broader, a niche is specific",
                  "They're the same thing",
                  "A niche is broader, a category is specific",
                  "Categories are for products, niches are for people"
                ],
                correct: 0,
                explanation: "A category (like 'beauty') is broad. A niche (like 'drugstore makeup for dark skin tones') is specific and memorable."
              },
              {
                question: "The 'Only I' exercise helps you identify:",
                options: [
                  "Your best-performing content",
                  "Your unique perspective and experiences",
                  "Your competitor's weaknesses",
                  "The best time to post"
                ],
                correct: 1,
                explanation: "The 'Only I' exercise reveals what makes YOUR voice unique based on your specific experiences."
              },
              {
                question: "When niching down, you should focus on:",
                options: [
                  "The most popular topics in your category",
                  "What your competitors are doing",
                  "Who your ideal follower is as a PERSON",
                  "Whatever gets the most views"
                ],
                correct: 2,
                explanation: "Niching down on PEOPLE (not just topics) creates deeper connection and loyalty."
              },
              {
                question: "True or False: You need a completely unique topic that no one else covers.",
                options: [
                  "True",
                  "False"
                ],
                correct: 1,
                explanation: "False! Your uniqueness comes from your perspective and personality, not from inventing a new topic."
              },
              {
                question: "What are the 4 elements of a strong niche?",
                options: [
                  "Views, Likes, Shares, Comments",
                  "Passion, Experience, Audience Need, Unique Angle",
                  "Instagram, TikTok, YouTube, Pinterest",
                  "Followers, Engagement, Reach, Impressions"
                ],
                correct: 1,
                explanation: "A strong niche sits at the intersection of your passion, experience, what your audience needs, and your unique angle."
              }
            ]
          }
        ]
      },
      // ─────────────────────────────────────────────────────────────────────────
      // MODULE 2: Landing Brand Deals
      // ─────────────────────────────────────────────────────────────────────────
      {
        moduleId: 'm2',
        moduleTitle: 'Module 2: Landing Brand Deals',
        moduleDescription: 'The exact system I use to land paid partnerships consistently.',
        lessons: [
          {
            lessonId: 'l4',
            title: 'Cold Outreach That Actually Works',
            type: 'video',
            duration: '18:22',
            script: {
              hook: `Let me guess... you've been DMing brands for MONTHS and getting absolutely nothing back. Radio silence. Maybe a "thanks but we're not looking for creators right now."

It's exhausting, right? You start wondering if you're even cut out for this...

Here's the truth nobody tells you: 90% of creators are making the SAME mistakes in their outreach. And today, I'm going to show you exactly what's wrong - and the script that got me my first $500 deal within 2 weeks.`,
              
              painPoints: [
                "Sending dozens of DMs with zero responses",
                "Getting 'we'll keep you in mind' and never hearing back",
                "Not knowing what to say or how to stand out",
                "Feeling desperate or 'salesy' when reaching out",
                "Watching creators with fewer followers land deals"
              ],
              
              keyPoints: [
                {
                  title: "Mistake #1: You're Contacting the Wrong Person",
                  content: `The social media manager running their Instagram? They probably can't even approve a $50 collab. You need to find the DECISION MAKER.

Here's how to find the right contact:
• Check their bio for 'partnerships@' or 'collab@' emails
• Go to their website → About page → Look for PR/Marketing team
• Use LinkedIn to find 'Influencer Marketing Manager' or 'Brand Partnerships'
• Check their press page - often has media contacts
• Look at creators they've worked with and see if they tagged anyone

Pro tip: Email almost ALWAYS converts better than DMs. Emails feel more professional and don't get lost in a flooded inbox.`,
                  actionStep: "Before you pitch ANY brand, spend 10 minutes finding the right contact. This alone will 3x your response rate."
                },
                {
                  title: "Mistake #2: Your First Line is Boring",
                  content: `Every creator starts their pitch with:
❌ "Hi! I'm a content creator and I love your brand..."
❌ "I've been using your products for years..."
❌ "I would love to collaborate..."

These go straight to trash. Here's why: the brand has read this EXACT message 500 times today.

What works instead? Lead with VALUE or INSIGHT.

✅ "Your new serum got 47 comments asking if it works on textured hair - I have the answer (and the audience to share it with)."
✅ "I noticed your TikTok ads aren't converting - here's what I'd do differently as a creator in your space."
✅ "I'm launching a 'drugstore dupes' series next month and your concealer is my #1 pick - interested in being featured?"

See the difference? You're showing you did research. You understand their business. You're offering something SPECIFIC.`,
                  actionStep: "Before pitching, find ONE specific thing about the brand you can reference. A new product, a gap in their content, or an upcoming season/event."
                },
                {
                  title: "Mistake #3: You're Not Making It Easy",
                  content: `Brands are BUSY. If they have to figure out what you're proposing, who you are, and what it'll cost - they'll just move on.

Your pitch should answer these questions immediately:
• Who are you? (One sentence - not your life story)
• Why this brand? (Specific connection)
• What are you proposing? (Exact deliverables)
• What's in it for them? (Results/value)
• What's the next step? (Clear CTA)

The easier you make it for them to say yes, the more yeses you'll get.`,
                  actionStep: "Use the email template in the next resource. Fill in the blanks. Send it TODAY."
                },
                {
                  title: "Mistake #4: You're Giving Up Too Soon",
                  content: `Here's a stat that will blow your mind: 80% of deals happen after the 5th follow-up.

Most creators send ONE email and give up. Meanwhile, I'm on email #3 or #4 when they finally respond.

This isn't being annoying - it's being professional. Busy people need reminders.

My follow-up schedule:
• Day 1: Initial pitch
• Day 4: Quick follow-up
• Day 10: Add new value (new content idea, updated stats)
• Day 20: Final check-in
• After that: Add to 'circle back in 3 months' list`,
                  actionStep: "Set calendar reminders for follow-ups. Don't rely on memory."
                }
              ],
              
              successStory: `Let me tell you about my first real brand deal.

I had 8,000 followers. I found a skincare brand I genuinely loved. Instead of DMing, I found the email of their marketing director on LinkedIn.

My subject line was: "Saw your retinol getting roasted on TikTok - I can fix that."

I wasn't being mean - I'd genuinely seen some negative reviews and had ideas for how user-generated content could help.

They responded within 3 hours. We had a call that week. I walked away with a $750 deal for 2 Reels and usage rights.

That same brand has now paid me over $5,000 across multiple campaigns. All because I led with value instead of "I love your brand."`,
              
              recap: [
                "Find the decision maker - not the social media intern",
                "Lead with value or insight - never 'I love your brand'",
                "Make it easy - be specific about deliverables",
                "Follow up 4-5 times before moving on",
                "Email converts better than DMs"
              ],
              
              homework: "Use the email template in the next resource to pitch ONE brand today. Not tomorrow. TODAY. The worst they can say is no - and you're already getting nos by not trying.",
              
              quotable: "Brands don't pay for followers. They pay for solutions to their problems."
            }
          },
          {
            lessonId: 'l5',
            title: 'Email Scripts That Get Replies',
            type: 'template',
            downloadName: 'Cold-Outreach-Email-Scripts.pdf',
            description: '5 proven email templates for different outreach scenarios.',
            templateSections: [
              {
                title: "Template 1: The Value-First Pitch",
                content: `Subject: Quick idea for [Brand's upcoming campaign/product/gap you noticed]

Hi [Name],

I noticed [specific observation about their brand/content/audience]. 

I'm [Your Name], a [your niche] creator with [X followers] who [your unique angle]. My audience is [describe audience - age, interests, demographics].

I'd love to create [specific deliverable - e.g., "a 60-second Reel showing my morning routine featuring your new vitamin C serum"] for your upcoming [season/launch/campaign].

My recent brand content averages [engagement rate]% engagement, and I've worked with [1-2 similar brands if applicable].

Would you be open to a quick 15-min call this week to discuss?

[Your Name]
[Instagram/TikTok handle]
[Link to media kit or portfolio]`
              },
              {
                title: "Template 2: The Product Seeding Request",
                content: `Subject: Would love to feature [Product] to my [X] followers

Hi [Name],

I've been eyeing [specific product] for months and would love to create authentic content around it for my [X] [platform] followers.

I'm [Your Name], and I create [type of content] for [describe audience]. My content focuses on [your niche/angle].

I'd be happy to create [specific deliverable] in exchange for product. If the content performs well (which I'm confident it will!), I'd love to discuss a paid partnership for future campaigns.

Here's an example of my brand content: [link]

Let me know if you'd like me to send over my full media kit!

[Your Name]`
              },
              {
                title: "Template 3: The Follow-Up Email",
                content: `Subject: Re: [Original subject line]

Hi [Name],

Just floating this back to the top of your inbox! 

I know things get busy - just wanted to check if you had a chance to review my pitch about [brief reminder of what you proposed].

I'm still excited about the possibility of working together, especially with [upcoming relevant event/season/launch] coming up.

Happy to jump on a quick call whenever works for you.

[Your Name]`
              },
              {
                title: "Template 4: The Mutual Connection Intro",
                content: `Subject: [Mutual connection's name] suggested I reach out

Hi [Name],

[Mutual connection] mentioned you're looking for creators for [campaign/launch], and thought I might be a good fit.

I'm [Your Name], a [niche] creator with [X followers] known for [your specialty]. I've previously worked with [relevant brands].

I'd love to learn more about what you're looking for and share some ideas I have for [their brand/product].

Do you have 15 minutes this week for a quick intro call?

[Your Name]`
              },
              {
                title: "Template 5: The 'Just Checking In' Re-engagement",
                content: `Subject: Still interested in collaborating with [Brand]

Hi [Name],

It's been a few months since we last connected, and I wanted to check back in!

Since then, my audience has grown to [X followers], and I've completed successful campaigns with [new brands]. I'm still a huge fan of [their brand] and would love to find a way to work together.

With [upcoming season/event] coming up, I have some fresh content ideas that could really resonate with your audience.

Would you be open to revisiting a potential collaboration?

[Your Name]`
              }
            ]
          },
          {
            lessonId: 'l6',
            title: 'Rate Card Template',
            type: 'template',
            downloadName: 'Creator-Rate-Card-Template.pdf',
            description: 'Professional rate card template you can customize with your prices.',
            templateSections: [
              {
                title: "What to Include in Your Rate Card",
                content: `Your rate card should be ONE page, beautifully designed, and easy to scan. Include:

• Your photo and handles
• Brief bio (2-3 sentences max)
• Your top 3 platforms with follower counts
• Your engagement rate (calculate: avg likes+comments / followers x 100)
• Audience demographics (age, gender, location, interests)
• Your content packages with prices
• What's included in each package
• Add-on options
• Contact information`
              },
              {
                title: "Standard Package Structure",
                content: `EXAMPLE PACKAGES (customize for your rates):

📱 INSTAGRAM
• Static Post: $XXX
• Carousel (up to 5 slides): $XXX
• Reel (15-30 sec): $XXX
• Reel (30-60 sec): $XXX
• Story Set (3-5 slides): $XXX
• Bundle: 1 Reel + 3 Stories: $XXX

🎬 TIKTOK  
• TikTok Video (15-30 sec): $XXX
• TikTok Video (30-60 sec): $XXX
• TikTok Video (60+ sec): $XXX
• Series (3 videos): $XXX

📦 ADD-ONS
• Usage Rights (3 months): +25%
• Usage Rights (6 months): +40%
• Usage Rights (1 year): +60%
• Whitelisting/Spark Ads: +30%
• Exclusivity (30 days): +20%
• Rush Delivery (<7 days): +25%
• Raw Footage: +$XXX`
              }
            ]
          },
          {
            lessonId: 'l7',
            title: 'Finding Brand Contacts',
            type: 'video',
            duration: '12:45',
            script: {
              hook: `"So I know WHO I want to pitch... but I have no idea how to find their email. Do I just DM them? Do I guess their email format? Where do these magical brand contacts even come from?"

Great question. Because here's the thing - sending a pitch to the wrong person is worse than not sending one at all. Today, I'm showing you my exact process for finding decision-maker contact info in under 10 minutes.`,
              
              painPoints: [
                "Spending hours trying to find the right email",
                "DMing the brand's main account and getting ignored",
                "Not knowing who at the company handles influencer marketing",
                "Feeling like you need connections to get in the door"
              ],
              
              keyPoints: [
                {
                  title: "The LinkedIn Method",
                  content: `LinkedIn is your BEST friend for finding brand contacts. Here's my exact process:

1. Search "[Brand Name] Influencer Marketing" or "[Brand Name] Creator Partnerships"
2. Look for titles like: Influencer Marketing Manager, Creator Partnerships, Brand Marketing, PR Manager
3. Check if their email is listed in their contact info (many people include it!)
4. If no email, check their activity - they often engage with creator content
5. Send a connection request with a SHORT note about why you're reaching out

Pro tip: If you can't find the influencer marketing person, look for the Social Media Manager. They often know who handles partnerships.`,
                  actionStep: "Open LinkedIn right now and search for one brand you want to work with. Find at least 2 potential contacts."
                },
                {
                  title: "The Website Deep Dive",
                  content: `Most brand websites have contact info hidden in plain sight:

• Footer → "Contact Us" → Look for PR or Press inquiries
• "About" page → Meet the team section
• "Press" page → Media contacts (often the same as influencer contacts)
• Careers page → Sometimes shows team structure
• Google "[Brand Name] press release" → Often includes contact person

Email format hack: Once you have one person's name, try these formats:
• firstname@company.com
• firstname.lastname@company.com
• f.lastname@company.com
• firstnamelastname@company.com

Use a tool like Hunter.io or RocketReach to verify.`,
                  actionStep: "Check 3 brands you want to work with. Find at least one email from their website."
                },
                {
                  title: "The Creator Network Method",
                  content: `See a creator who worked with your dream brand? Here's what to do:

• Check if they tagged anyone from the brand in their post
• DM them (nicely!) and ask if they can share the contact
• Look at the brand's tagged photos for other creators who might share info
• Join creator communities on Facebook, Discord, or Slack - contacts get shared constantly

Creator community is powerful. We help each other. Just be genuine and offer value in return.`,
                  actionStep: "Find 2 creators who've worked with your dream brand. Reach out and introduce yourself."
                }
              ],
              
              successStory: `I spent 2 weeks trying to get in touch with a major hair brand. DMs? Ignored. Website contact form? Generic response.

Then I found their Influencer Marketing Coordinator on LinkedIn. Her email was right in her profile. I sent a personalized pitch mentioning a specific campaign she had recently posted about.

Response in 24 hours. Call scheduled for that week. $1,200 deal for a single campaign.

10 minutes of research = $1,200. Worth it? I think so.`,
              
              recap: [
                "LinkedIn is your best tool for finding brand contacts",
                "Check website footers, press pages, and about pages",
                "Use email format patterns + verification tools",
                "Leverage creator communities for shared contacts",
                "The right contact is worth 10 minutes of research"
              ],
              
              homework: "Create a spreadsheet with 10 brands you want to work with. Find at least one contact for each using today's methods. This is your pitch list.",
              
              quotable: "The right pitch to the wrong person = wasted effort. Find the decision maker first."
            }
          }
        ]
      },
      // ─────────────────────────────────────────────────────────────────────────
      // MODULE 3: Pricing Your Worth
      // ─────────────────────────────────────────────────────────────────────────
      {
        moduleId: 'm3',
        moduleTitle: 'Module 3: Pricing Your Worth',
        moduleDescription: 'Stop undercharging. Learn to price confidently and negotiate like a pro.',
        lessons: [
          {
            lessonId: 'l8',
            title: 'How I Charge $500+ Per Post',
            type: 'video',
            duration: '16:10',
            script: {
              hook: `Can I be real with you for a second? 

When I first started getting brand deals, I was charging $50 for a post. FIFTY DOLLARS. For something that took me 3 hours to film, edit, caption, and post.

That's less than $17 an hour. For content that the brand could use forever.

Today, I charge $500-1500 per post. And I'm going to show you exactly how I made that shift - not by getting more followers, but by changing my MINDSET and my STRATEGY.`,
              
              painPoints: [
                "Feeling guilty charging 'too much'",
                "Not knowing what other creators charge",
                "Accepting whatever brands offer without negotiating",
                "Comparing rates to creators with more followers",
                "Working hours for pennies and burning out"
              ],
              
              keyPoints: [
                {
                  title: "The Real Cost of Your Content",
                  content: `Before we talk rates, let's talk MATH. Because most creators have NO IDEA what their content actually costs.

For one 30-second Reel:
• Concept/scripting: 30 min
• Set up, lighting, filming: 1-2 hours
• Editing: 1-2 hours
• Captions, hashtags, posting: 30 min
• Engagement after posting: 30 min

That's 4-5 HOURS minimum. If you charge $50, you're making $10-12/hour.

Now add: Your equipment (phone, ring light, mic), software subscriptions, your creativity, your audience ACCESS, and usage rights.

Suddenly $50 feels like a joke, right?`,
                  actionStep: "Time yourself on your next piece of content. Calculate your actual hourly rate at your current prices."
                },
                {
                  title: "The Pricing Formula That Works",
                  content: `There's no perfect formula, but here's a solid starting point:

BASE RATE = (Followers / 100) x Engagement Rate x Platform Multiplier

Platform Multipliers:
• Instagram Reel: 1.5x
• TikTok: 1.2x
• Instagram Static: 1.0x
• Story: 0.3x per slide

Example: 20K followers, 5% engagement, IG Reel
(20,000 / 100) x 5 x 1.5 = $1,500

BUT - this is just a starting point. Adjust for:
• Your niche (luxury = higher, broad = lower)
• Production quality
• Exclusivity
• Usage rights
• Rush timelines

Most importantly: What number feels RIGHT to you? If you'd feel resentful at $200, don't charge $200.`,
                  actionStep: "Calculate your base rate using the formula. Then add 20% - because you're probably still undervaluing yourself."
                },
                {
                  title: "It's Not About Followers - It's About Value",
                  content: `Here's why some creators with 5K followers charge more than those with 50K:

VALUE FACTORS:
• Engagement rate (5%+ is gold)
• Niche specificity (financial advisors pay more than fast food)
• Content quality
• Audience demographics (income, location, age)
• Conversion track record
• Professionalism and reliability

A creator with 10K highly-engaged followers in a specific niche is worth MORE to a brand than 100K disengaged followers in a broad category.

Stop comparing your rates to random creators. Compare your VALUE.`,
                  actionStep: "Write down 5 value factors YOU bring beyond follower count. This is your negotiation ammo."
                },
                {
                  title: "The Confidence Factor",
                  content: `I need to be honest: The biggest thing between you and higher rates is CONFIDENCE.

Brands will pay what you ask. If you ask for $100, they'll pay $100. If you ask for $1,000, many will still say yes - or negotiate.

Signs you're undercharging:
• Brands say yes immediately with no negotiation
• You feel resentful during the campaign
• You're burnt out despite being "busy"
• Friends with similar stats are charging more

The first time you quote a higher rate, you WILL feel awkward. You WILL want to apologize or immediately offer a discount. DON'T.

State your rate. Stop talking. Let them respond.`,
                  actionStep: "Practice saying your rate out loud 10 times until it feels natural. 'My rate for a Reel is $XXX.'"
                }
              ],
              
              successStory: `My turning point was a brand that asked for 3 Reels. I quoted $150 total. Yes, $50 per Reel.

The marketing manager said "That works!" immediately. No pushback. No negotiation.

That's when I realized: If they say yes instantly, you're too cheap.

Next brand that asked? Same deliverables. I quoted $750. 

They negotiated down to $600. Still 4x what I was charging before. And they said yes.

The only thing that changed was my RATE. Same content. Same quality. Same audience.`,
              
              recap: [
                "Calculate the real cost of your time and equipment",
                "Use the pricing formula as a starting point, then adjust",
                "Focus on VALUE factors, not just follower count",
                "Confidence is the biggest rate-raising tool you have",
                "If brands say yes immediately, you're too cheap"
              ],
              
              homework: "Update your rate card with new prices that are AT LEAST 30% higher than what you're charging now. Test them on your next pitch.",
              
              quotable: "The first person who needs to believe you're worth more... is YOU."
            }
          },
          {
            lessonId: 'l9',
            title: 'Pricing Calculator Spreadsheet',
            type: 'template',
            downloadName: 'Creator-Pricing-Calculator.xlsx',
            description: 'Plug in your numbers and get suggested rates instantly.',
            templateSections: [
              {
                title: "How to Use This Calculator",
                content: `This spreadsheet will calculate suggested rates based on your:
• Follower count (across platforms)
• Engagement rate  
• Niche category
• Content type
• Additional factors (usage rights, exclusivity, etc.)

Simply fill in the green cells and the suggested rates will auto-calculate in the blue cells.

Remember: These are STARTING POINTS. Adjust based on your experience, portfolio quality, and confidence level.`
              },
              {
                title: "Included Calculators",
                content: `• Base Rate Calculator
• Instagram Rate Calculator
• TikTok Rate Calculator  
• YouTube Rate Calculator
• Bundle Package Builder
• Usage Rights Add-on Calculator
• Annual Income Projector`
              }
            ]
          },
          {
            lessonId: 'l10',
            title: 'Negotiation Scripts',
            type: 'template',
            downloadName: 'Negotiation-Scripts.pdf',
            description: 'Word-for-word scripts for common negotiation scenarios.',
            templateSections: [
              {
                title: "When They Say 'That's Outside Our Budget'",
                content: `SCRIPT:
"I totally understand budget constraints! I want to make this work. A few options:

1. We could reduce the scope to [fewer deliverables] to fit within [their budget]
2. I could offer a package discount if you commit to [multiple months/campaigns]  
3. We could include usage rights in exchange for the higher investment

What would work best for your team?"

KEY PRINCIPLE: Never lower your rate without removing something. Your rates aren't negotiable - your scope is.`
              },
              {
                title: "When They Offer Lower Than Your Rate",
                content: `SCRIPT:
"Thanks for sharing that! My standard rate for this type of content is [your rate], which includes [list what's included].

I price this way because [one value factor - e.g., 'my engagement rate is 3x the industry average' or 'my audience converts exceptionally well'].

I can offer [adjusted scope] at [their budget], or we can discuss a package that provides more value for your investment. What works for you?"

KEY PRINCIPLE: Acknowledge their offer, restate your value, provide alternatives.`
              },
              {
                title: "When They Ask for Free Work",
                content: `SCRIPT:
"I appreciate the opportunity! While I don't do unpaid collaborations, I do offer gifted options for brands I love.

For a gifted partnership, I'd be happy to [organic mention/unboxing/etc. - lower commitment].

For [their ask - dedicated content], my rate is [price]. This includes [deliverables].

Would either of these options work for your campaign?"

KEY PRINCIPLE: Never say just "no." Redirect to a paid option while offering an alternative.`
              },
              {
                title: "When They Want Usage Rights Included",
                content: `SCRIPT:  
"Absolutely - I offer usage rights as an add-on! Here's how that works:

• 3 months: +25% of base rate
• 6 months: +40% of base rate
• 12 months: +60% of base rate
• Perpetual/forever: +100% of base rate

This allows you to run paid ads, use on your website, and repurpose the content. Which timeframe works for your campaign?"

KEY PRINCIPLE: Usage rights should ALWAYS be a separate line item. Your content has ongoing value.`
              }
            ]
          },
          {
            lessonId: 'l11',
            title: 'When to Say No',
            type: 'video',
            duration: '10:00',
            script: {
              hook: `Here's something nobody talks about: The best brand deal I ever turned down made me more money than any deal I ever accepted.

Wait, what? How does saying NO make you money?

Because your time, energy, and reputation are LIMITED resources. And when you waste them on the wrong deals, you can't invest them in the RIGHT deals.

Let me teach you when - and how - to say no.`,
              
              painPoints: [
                "Saying yes to everything because you're afraid to miss out",
                "Taking low-paying deals that eat up your time",
                "Feeling burnt out from bad brand partnerships",
                "Damaging your reputation with products you don't believe in"
              ],
              
              keyPoints: [
                {
                  title: "Red Flags That Mean 'Run'",
                  content: `Say NO immediately if:

🚩 They won't put anything in writing
🚩 They want unlimited revisions
🚩 They're rude or dismissive in communication
🚩 The product conflicts with your values
🚩 They expect you to cover expenses with no reimbursement
🚩 The timeline is unrealistic AND they won't budge
🚩 They want exclusivity without paying for it
🚩 Your gut says something's off

Trust your instincts. A bad deal isn't worth any amount of money.`,
                  actionStep: "Create your personal 'deal breakers' list. Know your non-negotiables before you need them."
                },
                {
                  title: "How to Say No Gracefully",
                  content: `You don't need a long explanation. Keep it short and professional:

"Thank you so much for thinking of me! Unfortunately, this isn't the right fit for my content/audience at this time. I wish you the best with your campaign!"

Or if you want to leave the door open:
"I'm not able to take this on right now, but I'd love to stay connected for future opportunities that might be a better fit. Feel free to reach out for upcoming campaigns!"

You don't owe anyone a detailed reason. "Not the right fit" is enough.`,
                  actionStep: "Save these templates in your notes so you can respond quickly when needed."
                }
              ],
              
              successStory: `Early in my career, a brand offered me $2,000 for a campaign. Sounds great, right?

But: 10 deliverables. 6-week exclusivity. Unlimited revisions. And I didn't love the product.

I said no.

Two weeks later, a brand I LOVED reached out. $1,500 for 2 Reels. No exclusivity. Quick turnaround.

If I'd taken that first deal, I would have been too exhausted and locked into exclusivity to take the second one.

Saying no created SPACE for the right yes.`,
              
              recap: [
                "Know your deal-breakers before you need them",
                "Keep your 'no' short and professional",
                "You don't owe anyone a detailed explanation",
                "Bad deals cost you the opportunity for good ones",
                "Protect your reputation - it's your most valuable asset"
              ],
              
              homework: "Write down your personal deal-breakers. What would make you say no, no matter the pay?",
              
              quotable: "Every yes to the wrong deal is a no to the right one."
            }
          },
          {
            lessonId: 'l12',
            title: 'Final Quiz & Certificate',
            type: 'quiz',
            questions: [
              {
                question: "What's the FIRST step before pitching a brand?",
                options: [
                  "Write a great subject line",
                  "Find the decision maker's contact info",
                  "Create a beautiful media kit",
                  "Calculate your rate"
                ],
                correct: 1,
                explanation: "Finding the right person to pitch is crucial - the best pitch sent to the wrong person won't get results."
              },
              {
                question: "What should you lead with in your pitch email?",
                options: [
                  "'I love your brand!'",
                  "Your follower count",
                  "Specific value or insight about their brand",
                  "Your complete rate card"
                ],
                correct: 2,
                explanation: "Leading with value or insight shows you've done your research and have something specific to offer."
              },
              {
                question: "If a brand says yes to your rate immediately, it probably means:",
                options: [
                  "You priced it perfectly",
                  "They really want to work with you",
                  "You're probably undercharging",
                  "They have a big budget"
                ],
                correct: 2,
                explanation: "If there's no negotiation at all, you likely left money on the table."
              },
              {
                question: "What should you do if a brand wants to lower your rate?",
                options: [
                  "Accept their offer to secure the deal",
                  "Reduce scope, not rate",
                  "Refuse to negotiate at all",
                  "Ghost them"
                ],
                correct: 1,
                explanation: "Never lower your rate without removing deliverables. Your rate reflects your value."
              },
              {
                question: "How many follow-ups should you send before giving up?",
                options: [
                  "1 - if they wanted to work with you, they'd reply",
                  "2-3",
                  "4-5",
                  "Keep following up forever"
                ],
                correct: 2,
                explanation: "80% of deals happen after the 5th follow-up. Most creators give up too early."
              }
            ],
            certificate: true
          }
        ]
      }
    ]
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // UGC STARTER KIT - Complete Scripts
  // ═══════════════════════════════════════════════════════════════════════════
  'ugc-starter-kit': {
    courseTitle: 'UGC Starter Kit',
    courseDescription: 'Everything you need to start and scale your UGC career.',
    modules: [
      {
        moduleId: 'm1',
        moduleTitle: 'Module 1: What is UGC?',
        moduleDescription: 'Understand the UGC landscape and why brands pay for it.',
        lessons: [
          {
            lessonId: 'l1',
            title: 'UGC vs Influencer Content',
            type: 'video',
            duration: '10:00',
            free: true,
            script: {
              hook: `"But wait... isn't UGC just another word for influencer marketing?"

No. And understanding this difference is going to unlock a completely new income stream for you - one that doesn't require a huge following or going viral.

Let me explain exactly what UGC is, why it's exploding right now, and why brands will pay YOU for it even if you have zero followers.`,
              
              painPoints: [
                "Confused about what UGC actually means",
                "Thinking you need followers to make money as a creator",
                "Not knowing where to start in the creator economy",
                "Seeing other creators make money and wondering how"
              ],
              
              keyPoints: [
                {
                  title: "The Definition of UGC",
                  content: `UGC stands for User-Generated Content. In the simplest terms:

UGC = Content created by regular people (not professional ad agencies) that brands use for their marketing.

The KEY difference from influencer content:
• Influencer content → Posted on YOUR channels TO your audience
• UGC → Sent to the BRAND to use on THEIR channels

With UGC, you're not leveraging your following. You're leveraging your SKILLS - filming, editing, creating authentic-feeling content.

This means someone with 0 followers can make money as a UGC creator.`,
                  actionStep: "Think about 3 ads you've seen that looked like a 'real person' made them, not a brand. That's UGC."
                },
                {
                  title: "Why Brands NEED UGC Creators",
                  content: `Brands are spending BILLIONS on UGC. Here's why:

• Traditional ads look like ads → People scroll past
• UGC looks like real content → People stop and watch
• UGC converts 4x better than branded content
• UGC is cheaper than hiring production companies
• Brands need LOTS of content for testing

A major beauty brand might need 50+ video variations to test what works. They can't create all of that in-house. Enter: YOU.`,
                  actionStep: "Follow 5 brands on TikTok and notice how much of their content looks 'creator-made.'"
                },
                {
                  title: "What Brands Pay For",
                  content: `UGC creators typically get paid for:

• Product demos/reviews
• Unboxings
• Testimonials
• "Day in the life" content featuring products
• Before/after transformations
• Tutorials using products
• "Aesthetic" b-roll footage

Rates range from $100-500+ per video depending on quality, niche, and experience.

And here's the beauty: You can do multiple projects per month for different brands. Some full-time UGC creators make $5-15K/month.`,
                  actionStep: "Pick one content style from the list that excites you. That's your starting point."
                }
              ],
              
              successStory: `My friend started UGC with literally 47 Instagram followers. Forty-seven.

She focused on skincare - creating before/after content and product demos. Within 3 months, she was making $3,000/month. Within a year, she quit her 9-5.

Her secret? She focused on QUALITY content, not building a following. She became excellent at filming, lighting, and authentic delivery.

You don't need followers. You need skills.`,
              
              recap: [
                "UGC is content created for brands to use on THEIR channels",
                "You don't need followers - you need skills",
                "Brands pay for authentic-looking content that converts",
                "UGC creators can earn $100-500+ per video",
                "It's a massive, growing market"
              ],
              
              homework: "Research 3 UGC creators on Instagram or TikTok. Save 5 examples of their work. Notice what makes it look authentic.",
              
              quotable: "You don't need an audience. You need a camera and a skill."
            }
          },
          {
            lessonId: 'l2',
            title: 'Why Brands Pay for UGC',
            type: 'video',
            duration: '8:30',
            script: {
              hook: `Let's talk about the psychology behind why UGC works so well - because understanding this will make you a MUCH better UGC creator.`,
              
              keyPoints: [
                {
                  title: "The Trust Factor",
                  content: `Studies show that 92% of consumers trust recommendations from people over brands.

When you see a polished brand ad, your brain flags it: "They're trying to sell me something."

When you see someone who looks like you, filming in their bathroom, genuinely showing a product... your brain says: "This is real. I can trust this."

THAT'S what brands are paying for. Your authenticity.`,
                  actionStep: "Watch 10 TikTok ads and notice which ones feel 'real' vs 'produced.'"
                }
              ],
              recap: [
                "UGC works because it builds trust",
                "Authenticity is your competitive advantage",
                "Your 'imperfect' content is actually perfect for UGC"
              ]
            }
          },
          {
            lessonId: 'l3',
            title: 'UGC Types Cheat Sheet',
            type: 'template',
            downloadName: 'UGC-Types-Cheat-Sheet.pdf',
            description: 'Visual guide to all the different types of UGC content.',
            templateSections: [
              {
                title: "Types of UGC Content",
                content: `📦 UNBOXING
• First impressions of receiving product
• Packaging shots, reveal moments
• Authentic reactions

🎬 TESTIMONIAL  
• Talking head to camera
• Personal experience with product
• Problem → Solution story

📐 DEMO/TUTORIAL
• Showing how to use product
• Step-by-step walkthrough
• Tips and tricks

✨ BEFORE/AFTER
• Transformation content
• Results showcase
• Side-by-side comparison

🌅 LIFESTYLE/B-ROLL
• Product in natural settings
• Aesthetic shots
• No speaking, just vibes

🛍 DAY IN THE LIFE
• Product integrated into routine
• Natural, authentic moments
• Relatable content

📊 COMPARISON
• This vs. That
• Testing claims
• Honest review format`
              }
            ]
          }
        ]
      },
      {
        moduleId: 'm2',
        moduleTitle: 'Module 2: Setting Up Your Portfolio',
        moduleDescription: 'Create sample content that lands you paying clients.',
        lessons: [
          {
            lessonId: 'l4',
            title: 'Creating Your First Samples',
            type: 'video',
            duration: '15:00',
            script: {
              hook: `"But I've never been paid for content before... how do I create a portfolio?"

Here's the secret: You don't need to be hired to create samples. You can make them RIGHT NOW with products you already own.

Let me show you how to create a killer portfolio in one weekend.`,
              
              keyPoints: [
                {
                  title: "The 5-Sample Portfolio",
                  content: `You need 5 strong samples to start. Here's what to create:

1. An unboxing (grab anything with nice packaging)
2. A testimonial (product you genuinely love)
3. A tutorial/demo (skincare, makeup, tech, anything)
4. An aesthetic b-roll (30 seconds, no talking)
5. A before/after (if applicable to your niche)

Use products you already have. Nobody's checking if you were actually paid for these. They're SAMPLES.`,
                  actionStep: "List 5 products you own that you could create sample content for today."
                }
              ],
              recap: [
                "You can create samples with products you own",
                "5 strong samples is enough to start pitching",
                "Focus on variety - different content types"
              ]
            }
          },
          {
            lessonId: 'l5',
            title: 'Portfolio Website Template',
            type: 'template',
            downloadName: 'UGC-Portfolio-Template.pdf',
            description: 'Simple portfolio layout you can set up in under an hour.'
          },
          {
            lessonId: 'l6',
            title: 'Filming on a Budget',
            type: 'video',
            duration: '12:00',
            script: {
              hook: `You don't need expensive equipment to make great UGC. In fact, overly produced content defeats the purpose.

Let me show you my exact setup that helped me land my first $500 deal.`,
              
              keyPoints: [
                {
                  title: "The Minimal Setup",
                  content: `All you need to start:

📱 Your smartphone (any recent model works)
💡 Natural window light (free!)
🎙 Earbuds for audio (you probably own these)
📱 A phone stand ($10-20 on Amazon)

That's IT. For your first few months, this is all you need.

As you earn more, upgrade to:
• Ring light ($25)
• Lapel microphone ($20)
• Small tripod ($15)
• Editing apps (many are free)`,
                  actionStep: "Audit what you already have. You probably need to buy less than you think."
                }
              ]
            }
          },
          {
            lessonId: 'l7',
            title: 'Editing Tips & Tricks',
            type: 'video',
            duration: '14:00',
            script: {
              hook: `Good editing doesn't mean fancy editing. For UGC, less is often more.

Here's how to edit your content to feel authentic while still being polished.`,
              
              keyPoints: [
                {
                  title: "The UGC Editing Style",
                  content: `Keep it simple:

• Cut out pauses and mistakes, but keep natural flow
• Add captions (always - 80% watch without sound)
• Use trending sounds if the brand wants TikTok-style
• Keep it 15-60 seconds for most content
• Minimal filters - brands want authentic

Free/cheap editing apps:
• CapCut (free, amazing)
• InShot (free with ads)
• VN Editor (free)
• Adobe Premiere Rush (paid but worth it)`,
                  actionStep: "Download CapCut and create one 30-second video this week."
                }
              ]
            }
          }
        ]
      },
      {
        moduleId: 'm3',
        moduleTitle: 'Module 3: Landing Your First Client',
        moduleDescription: 'Where to find UGC jobs and how to get hired.',
        lessons: [
          {
            lessonId: 'l8',
            title: 'Where to Find UGC Jobs',
            type: 'video',
            duration: '11:00',
            script: {
              hook: `The #1 question I get: "Where do I actually find brands that want UGC?"

Great news - they're everywhere once you know where to look.`,
              
              keyPoints: [
                {
                  title: "The Best Platforms for UGC Jobs",
                  content: `Start here:

🌟 Platforms specifically for UGC:
• Billo
• Insense
• Trend.io
• Collabstr
• #paid
• Aspire

🌟 General creator platforms:
• Upwork (search "UGC creator")
• Fiverr (create a UGC gig)
• LinkedIn (yes, really!)

🌟 Direct outreach:
• Brands you already use
• Local small businesses
• New D2C brands on Instagram

The platforms take a cut, but they're the easiest way to start and build your portfolio.`,
                  actionStep: "Create profiles on 3 UGC platforms today."
                }
              ]
            }
          },
          {
            lessonId: 'l9',
            title: 'Platform Directory (50+ Brands)',
            type: 'template',
            downloadName: 'UGC-Platform-Directory.pdf',
            description: 'Curated list of 50+ brands and platforms actively hiring UGC creators.'
          },
          {
            lessonId: 'l10',
            title: 'Application Templates',
            type: 'template',
            downloadName: 'UGC-Application-Templates.pdf',
            description: 'Pitch templates for different platforms and direct outreach.'
          },
          {
            lessonId: 'l11',
            title: 'My First $500 Deal Story',
            type: 'video',
            duration: '8:00',
            script: {
              hook: `Let me tell you exactly how I landed my first $500 UGC deal - step by step. Including what I did right AND what I almost messed up.`,
              
              successStory: `I found the brand on Billo. They wanted a 30-second skincare tutorial.

My pitch was simple: I mentioned I had textured skin (their target audience), linked my portfolio, and showed I understood their brand voice.

I got the job. Created the content in 2 hours. Got paid $350 (platform took a cut).

The brand loved it so much they hired me directly for the next campaign - $500, no platform fees.

One good project opened the door to ongoing work.`
            }
          }
        ]
      },
      {
        moduleId: 'm4',
        moduleTitle: 'Module 4: Scaling to $5K/Month',
        moduleDescription: 'Turn UGC from a side hustle into a full income.',
        lessons: [
          {
            lessonId: 'l12',
            title: 'Raising Your Rates',
            type: 'video',
            duration: '10:00',
            script: {
              hook: `You've landed a few deals at $100-150 per video. That's great! But to hit $5K/month, you need to charge more.

Here's how to raise your rates without losing clients.`,
              
              keyPoints: [
                {
                  title: "When to Raise Your Rates",
                  content: `Signs it's time to charge more:

✅ Brands keep saying yes without negotiating
✅ You're consistently booked with work
✅ Your content quality has improved
✅ You have testimonials and repeat clients
✅ You're getting referred by other creators or brands

Every 3-6 months, evaluate. If you're converting 50%+ of pitches, your rates are probably too low.`,
                  actionStep: "Compare your rates to where they were 3 months ago. If they're the same, it's time to raise them."
                }
              ]
            }
          },
          {
            lessonId: 'l13',
            title: 'Client Retention Secrets',
            type: 'video',
            duration: '9:00',
            script: {
              hook: `Here's the math: Getting a NEW client takes 5x more effort than keeping an existing one.

Repeat clients are the key to consistent $5K months.`,
              
              keyPoints: [
                {
                  title: "How to Keep Clients Coming Back",
                  content: `My retention strategies:

• Overdeliver slightly (add a bonus story or extra variation)
• Be EASY to work with (quick communication, meet deadlines)
• Offer a "package deal" for ongoing work
• Check in after campaigns with results (if they share)
• Send a "thinking of you" pitch when they launch new products

One happy client can become 50% of your income for months.`,
                  actionStep: "List your past clients. Send a check-in email to one of them today."
                }
              ]
            }
          },
          {
            lessonId: 'l14',
            title: 'Contract & Invoice Templates',
            type: 'template',
            downloadName: 'UGC-Contract-Invoice-Templates.pdf',
            description: 'Professional contracts and invoices to protect yourself.'
          },
          {
            lessonId: 'l15',
            title: 'Scaling Your Systems',
            type: 'video',
            duration: '12:00',
            script: {
              hook: `To hit $5K/month consistently, you need SYSTEMS - not just hustle.`,
              
              keyPoints: [
                {
                  title: "The Systems That Scale",
                  content: `What to systematize:

📋 TEMPLATES
• Pitch emails (personalize 10%)
• Contract + invoice templates
• Brief questionnaire for clients
• Revision request form

🗂 ORGANIZATION  
• Client tracker spreadsheet
• Content calendar
• Income tracking
• Deadline reminders

⚡ EFFICIENCY
• Batch similar content types
• Create "hooks" you can reuse
• Build a props/backdrop collection
• Set up a dedicated filming space

The goal: Spend less time on admin, more time creating.`,
                  actionStep: "Create a simple client tracker in Google Sheets today."
                }
              ]
            }
          },
          {
            lessonId: 'l16',
            title: 'Final Assessment',
            type: 'quiz',
            questions: [
              {
                question: "What's the main difference between UGC and influencer content?",
                options: [
                  "UGC is lower quality",
                  "Influencer content is posted on your channels, UGC is for brand's channels",
                  "They're the same thing",
                  "UGC is only for TikTok"
                ],
                correct: 1
              },
              {
                question: "How many portfolio samples do you need to start?",
                options: [
                  "At least 20",
                  "1-2",
                  "5 diverse samples",
                  "You need paid work first"
                ],
                correct: 2
              }
            ],
            certificate: true
          }
        ]
      }
    ]
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // HAIR BRAND OUTREACH KIT - Complete Scripts  
  // ═══════════════════════════════════════════════════════════════════════════
  'hair-brand-outreach': {
    courseTitle: 'Hair Brand Outreach Kit',
    courseDescription: 'Specialized training for landing hair and beauty brand partnerships.',
    modules: [
      {
        moduleId: 'm1',
        moduleTitle: 'Module 1: Hair Brand Landscape',
        moduleDescription: 'Understand which hair brands are hiring and what they want.',
        lessons: [
          {
            lessonId: 'l1',
            title: 'Top 20 Hair Brands Taking Creators',
            type: 'video',
            duration: '15:00',
            free: true,
            script: {
              hook: `If you create hair content - natural hair, styling, reviews, tutorials - you're sitting on a GOLDMINE.

Hair care is one of the highest-paying niches for creators. And I'm about to give you a list of 20 brands that are actively working with creators RIGHT NOW.`,
              
              keyPoints: [
                {
                  title: "The Hair Brand Tiers",
                  content: `Not all hair brands are created equal. Here's how to think about them:

💎 TIER 1: Big Budget, Competitive
• Olaplex, Dyson, Moroccan Oil, Living Proof
• Pay $1,000-5,000+ per campaign
• Harder to get, but life-changing

✨ TIER 2: Mid-Size, Accessible  
• Pattern Beauty, Mielle Organics, Briogeo
• Pay $300-1,500 per campaign
• Looking for authentic voices

🌱 TIER 3: Emerging, Easy Entry
• New D2C brands, indie brands
• Pay $100-500 or product
• Great for building portfolio

Start with Tier 2-3 and work your way up.`,
                  actionStep: "Pick 3 brands from each tier to add to your pitch list."
                },
                {
                  title: "The Top 20 List",
                  content: `Hair brands actively working with creators:

1. Mielle Organics - Natural hair, accessible, loves micro-creators
2. Pattern Beauty - Textured hair, Tracee Ellis Ross brand
3. Olaplex - Treatment focused, higher-end
4. Briogeo - Clean hair care, great for tutorials
5. K18 - Repair focused, viral on TikTok
6. Ouai - Styling, aesthetic content
7. Drybar - Styling tools and products
8. Color Wow - Color protection, styling
9. Amika - Fun branding, colorful content
10. Bread Beauty - Wash day routines
11. TPH by Taraji - Scalp health
12. Carol's Daughter - Heritage brand
13. Shea Moisture - Affordable natural hair
14. Curlsmith - Curl care specialists
15. Cantu - Drugstore, huge presence
16. Design Essentials - Salon quality
17. OGX - Drugstore staple
18. Not Your Mother's - Affordable styling
19. Aussie - Fun, accessible
20. TRESemmé - Professional at home`,
                  actionStep: "Follow all 20 on Instagram. Watch what kind of creator content they share."
                }
              ],
              
              successStory: `My first hair brand deal was with a Tier 3 brand - $200 for a wash day routine video.

That video? They used it in their paid ads. Saw it running for months.

Then a Tier 2 brand saw their content, found me, and offered $800 for a similar campaign.

The path is real. Start accessible, build up.`,
              
              recap: [
                "Hair care is one of the highest-paying niches",
                "Start with Tier 2-3 brands to build your portfolio",
                "Follow brands to understand what content they reshare",
                "One good brand relationship leads to more"
              ]
            }
          },
          {
            lessonId: 'l2',
            title: 'Brand Contact Directory',
            type: 'template',
            downloadName: 'Hair-Brand-Contact-Directory.pdf',
            description: 'Contact information for 20+ hair brands actively hiring creators.'
          },
          {
            lessonId: 'l3',
            title: 'What Hair Brands Look For',
            type: 'video',
            duration: '10:00',
            script: {
              hook: `Hair brands don't just want pretty content. They want SPECIFIC things.

Let me tell you exactly what hair brand marketing teams are looking for - straight from conversations I've had.`,
              
              keyPoints: [
                {
                  title: "The Hair Content Checklist",
                  content: `What makes hair brands say YES:

✅ Clear before/after results
✅ Hair texture visible (show your curls, waves, coils, etc.)
✅ Good lighting on your hair (this is huge!)
✅ Natural, relatable delivery
✅ Understanding of the PROBLEM their product solves
✅ Diversity in hair types (if you don't fit, that's okay - they need variety)

What makes them say NO:
❌ Poor lighting making hair look dull
❌ Too salesy or scripted delivery
❌ Not showing results
❌ Over-edited content
❌ Not understanding their target customer`,
                  actionStep: "Film a 30-second video in natural light. Watch it back. How does your hair look?"
                }
              ]
            }
          }
        ]
      },
      {
        moduleId: 'm2',
        moduleTitle: 'Module 2: Creating Hair Content',
        moduleDescription: 'Techniques for filming hair content that converts.',
        lessons: [
          {
            lessonId: 'l4',
            title: 'Before/After Content Ideas',
            type: 'template',
            downloadName: 'Before-After-Content-Ideas.pdf',
            description: '15 before/after concepts that perform well for hair brands.'
          },
          {
            lessonId: 'l5',
            title: 'Filming Hair Transformations',
            type: 'video',
            duration: '12:00',
            script: {
              hook: `The before/after is the MONEY SHOT for hair content. Here's how to film it right.`,
              
              keyPoints: [
                {
                  title: "The Perfect Before/After",
                  content: `Technical tips:

📸 BEFORE SHOT
• Same location you'll film the after
• No makeup/unflattering lighting is FINE
• Show real texture, frizz, whatever the "problem" is
• Film for 3-5 seconds minimum

🌟 AFTER SHOT  
• Same angle, same lighting
• Let hair move - turn head, flip hair
• Slow-mo is your friend
• Show RESULTS, not just "styled"

PRO TIP: Film your "after" FIRST while your hair is perfect. Then mess it up for the "before." Editing will fix the order.`,
                  actionStep: "Practice a before/after on your next wash day. Film both shots."
                }
              ]
            }
          },
          {
            lessonId: 'l6',
            title: 'Hair Review Script Template',
            type: 'template',
            downloadName: 'Hair-Review-Script-Template.pdf',
            description: 'Fill-in-the-blank script for authentic hair product reviews.'
          }
        ]
      },
      {
        moduleId: 'm3',
        moduleTitle: 'Module 3: Pitching Hair Brands',
        moduleDescription: 'Customize your outreach for the hair industry.',
        lessons: [
          {
            lessonId: 'l7',
            title: 'Hair Brand Pitch Email Template',
            type: 'template',
            downloadName: 'Hair-Brand-Pitch-Email.pdf',
            description: 'Pitch template customized for hair brands.',
            templateSections: [
              {
                title: "Hair Brand Pitch Template",
                content: `Subject: Textured hair creator + [Brand Name] = 🔥 content opportunity

Hi [Name],

I've been using [specific product] for [time period] and my [curl pattern/hair type] has never looked better. I'd love to show my audience the results.

I'm [Your Name], a hair content creator with [X followers] on [platform]. My audience is [describe - e.g., "Black women with 3C-4C curls looking for accessible products"].

I'd love to create [specific content - e.g., "a wash day routine featuring your new deep conditioner"] showing:
• Before/after transformation
• Honest review of texture and results
• Styling tips for [hair type]

My hair content averages [X]% engagement, and I've previously worked with [brands if applicable].

Would you be interested in a collaboration? I'm happy to send over my media kit and sample content.

[Your Name]
[handles + links]`
              }
            ]
          },
          {
            lessonId: 'l8',
            title: 'My Hair Brand Success Stories',
            type: 'video',
            duration: '18:00',
            script: {
              hook: `I've worked with 15+ hair brands in the past 2 years. Let me share the deals - what I pitched, what I earned, and lessons learned.`,
              
              successStory: `DEAL 1: Mielle Organics ($500)
How: Applied through their creator program, got accepted in 2 weeks
Content: 1 IG Reel, 3 Stories
Lesson: Smaller follower counts don't matter if your content is quality

DEAL 2: Pattern Beauty ($1,200)
How: Cold email to their PR team, mentioned specific product I'd bought
Content: 2 TikToks + usage rights
Lesson: Showing you're already a customer = major credibility

DEAL 3: Local salon brand ($200/month retainer)
How: Found them on Instagram, offered a trial
Content: 4 pieces/month for their social
Lesson: Local brands = less competition, consistent income

The key in all of these? SPECIFICITY. I didn't pitch "hair content." I pitched "before/after with my 4B coils using your product for wash day."`,
              
              recap: [
                "Hair is a high-paying niche with lots of opportunity",
                "Be SPECIFIC about your hair type and content ideas",
                "Local and emerging brands are great starting points",
                "Showing you're already a customer builds trust",
                "Quality matters more than follower count in this niche"
              ],
              
              homework: "Send 3 pitches to hair brands this week using the template. Track your results.",
              
              quotable: "Hair brands don't just want content. They want creators who UNDERSTAND hair."
            }
          }
        ]
      }
    ]
  }
};

export default COURSE_SCRIPTS;

